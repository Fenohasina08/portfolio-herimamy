 import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction de téléchargement CV
  const handleDownloadCV = (event) => {
    const link = document.createElement('a');
    link.href = '/cv-feno.pdf';
    link.download = `CV_Herimamy_Fenohasina_${new Date().getFullYear()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Animation de feedback
    if (event.currentTarget) {
      event.currentTarget.classList.add('scale-95');
      setTimeout(() => {
        event.currentTarget.classList.remove('scale-95');
      }, 150);
    }
  };

  const navItems = ['Accueil', 'À propos', 'Compétences', 'Projets', 'Expérience', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? isDark 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
            RA-FANOMEZANA
          </div>
          
          <div className="hidden space-x-8 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-').replace('à-', '')}`}
                className={`hover:text-purple-500 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CONTENEUR BOUTONS D'ACTION - MODIFIÉ */}
          <div className="flex items-center gap-3">
            {/* Bouton Thème (existant) - maintenant EN PREMIER */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isDark 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Bouton Télécharger CV - maintenant APRÈS le bouton thème */}
            <button
              onClick={handleDownloadCV}
              className={`group relative px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                isDark
                  ? 'bg-gradient-to-r from-green-600 to-emerald-700 text-white hover:from-green-700 hover:to-emerald-800'
                  : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
              }`}
              title="Télécharger mon CV en PDF"
              aria-label="Télécharger mon curriculum vitae"
            >
              <Download className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden text-sm font-medium sm:inline">
                Download CV
              </span>
              
              {/* Version mobile : icône seule avec tooltip */}
              <div className="absolute right-0 px-2 py-1 text-xs text-white transition-opacity duration-300 bg-gray-900 rounded opacity-0 pointer-events-none -top-10 group-hover:opacity-100 whitespace-nowrap sm:hidden">
                Télécharger CV
                <div className="absolute w-2 h-2 rotate-45 bg-gray-900 -bottom-1 right-3"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;