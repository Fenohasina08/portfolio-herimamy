 import React, { useState, useEffect } from 'react';
// Importation de tous tes composants
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimatedStars from './components/AnimatedStars';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/chatbot'; // AJOUTEZ CETTE LIGNE

function App() {
  // Gestion du thème (Dark Mode par défaut)
  const [isDark, setIsDark] = useState(true);

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Ajoute ou retire la classe 'dark' au body pour le CSS global si besoin
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      
      {/* Fond étoilé animé (toujours en arrière-plan) */}
      <AnimatedStars isDark={isDark} />

      {/* Barre de navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Contenu principal */}
      <main>
        <Hero isDark={isDark} />
        
        <div className="relative">
          {/* On empile les sections les unes après les autres */}
          <About isDark={isDark} />
          <Skills isDark={isDark} />
          <Experience isDark={isDark} />
          <Projects isDark={isDark} />
          <Contact isDark={isDark} />
        </div>
      </main>

      {/* Pied de page */}
      <Footer isDark={isDark} />
      
      {/* CHATBOT - AJOUTEZ CETTE LIGNE */}
      <Chatbot isDark={isDark} />
      
    </div>
  );
}

export default App;