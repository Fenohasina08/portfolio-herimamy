import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AnimatedStars from './components/layout/AnimatedStars';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Chatbot from './components/common/Chatbot';
import ScrollProgress from './components/common/ScrollProgress';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-bg text-body">
      {/* Fond étoilé */}
      <AnimatedStars isDark={isDark} />

      {/* Barre de progression */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Contenu principal */}
      <main>
        <Hero isDark={isDark} />
        <div className="relative">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>

      <Footer />
      <Chatbot isDark={isDark} />

      {/* Bouton retour en haut */}
      <ScrollToTop />
    </div>
  );
}

export default App;