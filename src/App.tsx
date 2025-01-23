import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h2><img width="400px" src="/logo.jpg" alt="NewsInsight AI Logo" /></h2>
        <h3>An Intelligent Framework for Personalized Cross-Domain News Summarization</h3>
      </header>

      <div className="container">
        <main>
          <section id="user-input">
            <h2>Generate News</h2>
            
            <form id="news-form" onSubmit={(e) => { e.preventDefault(); (window as any).generateNews(); }}>
              <label htmlFor="preference1">Select your 1st preference:</label>
              <select id="preference1" name="preference1">
                <option value="sports">Sports</option>
                <option value="politics">Politics</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
              </select>

              <label htmlFor="preference2">Select your 2nd preference:</label>
              <select id="preference2" name="preference2">
                <option value="sports">Sports</option>
                <option value="politics">Politics</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
              </select>

              <label htmlFor="preference3">Select your 3rd preference:</label>
              <select id="preference3" name="preference3">
                <option value="sports">Sports</option>
                <option value="politics">Politics</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
              </select>

              <label htmlFor="location">Select a Location:</label>
              <select id="location" name="location">
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="india">India</option>
              </select>
              
              <button type="submit">Generate</button>
            </form>
          </section>

          <section id="news-result">
            <h2>News Summary</h2>
            <div id="news-summary">
              {/* News content will be displayed here */}
            </div>
          </section>
        </main>
      </div>

      <footer>
        <p>Final Year Project</p>
      </footer>
    </div>
  )
}

export default App