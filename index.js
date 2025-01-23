const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

app.use(express.json());
app.use(express.static('public'));

app.post('/generate-news', async (req, res) => {
    if (!req.body || !req.body.preference1 || !req.body.preference2 || !req.body.preference3 || !req.body.location) {
        return res.status(400).json({ error: 'Required fields missing' });
    }
    const { preference1, preference2, preference3, location } = req.body;

    const promptText = `Please provide me with concise news updates from the last 24 hours in ${location}, covering ${preference1}, ${preference2}, and ${preference3}. Include recent Headlines. Give 3 main points (In Plain Text) for every different genre. Don't Give Any Images or Links. Just Give Text. Use Numbers instead of bullet points`;

    console.log("Sending API Request to Google's Generative AI service");

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(promptText);
        const newsSummary = result.response.text();
        res.json({ newsSummary });
    } catch (error) {
        console.error('Error in making API request to Google Generative AI:', error);
        res.status(500).json({ error: 'Failed to generate news.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});