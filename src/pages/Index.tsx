import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 max-w-2xl"
      >
        <span className="inline-block px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground animate-fade-in">
          Welcome to Your New Project
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-fade-up">
          Create Something Amazing
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-prose mx-auto animate-fade-up">
          This is your blank canvas. Start building your vision with modern design principles
          and attention to detail.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <button className="px-6 py-3 glass-panel hover-lift">
            Get Started
          </button>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover-lift">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;