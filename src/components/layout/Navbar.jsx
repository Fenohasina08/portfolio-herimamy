import React, { useState, useEffect, useCallback } from 'react';
import { Moon, Sun, Download, Menu, X } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Gestion du scroll pour l'effet glass et le scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy
      const sections = document.querySelectorAll('section[id]');
      let current = 'accueil';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Herimamy.pdf';
    link.download = `CV_Herimamy_Fenohasina_${new Date().getFullYear()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Liens avec leur ancre
  const navItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#propos' },
    { label: 'Compétences', href: '#compétences' },
    { label: 'Projets', href: '#projets' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  // Classes conditionnelles pour le glass effect (utilisant les tokens)
  const glassClasses = isScrolled
    ? 'bg-card/80 backdrop-blur-md shadow-lg border-b border-border'
    : 'bg-transparent';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${glassClasses}`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#accueil" className="text-xl font-bold transition-colors text-title hover:text-link">
            RA-FANOMEZANA
          </a>

          {/* Navigation desktop */}
          <div className="hidden space-x-8 md:flex">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`relative pb-1 text-sm font-medium transition-colors duration-300 ${
                  activeSection === href.substring(1)
                    ? 'text-link'
                    : 'text-secondary hover:text-link'
                }`}
              >
                {label}
                {activeSection === href.substring(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-link rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Actions (toggle thème, CV, menu burger) */}
          <div className="flex items-center gap-3">
            {/* Toggle thème */}
            <button
              onClick={toggleTheme}
              className="p-2 transition-colors rounded-full bg-surface hover:bg-border text-secondary hover:text-title"
              title={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
              aria-label="Changer le thème"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* CV desktop */}
            <button
              onClick={handleDownloadCV}
              className="items-center hidden gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg sm:flex bg-btn-primary hover:bg-btn-primary-hover text-btn-primary-txt hover:scale-105"
              title="Télécharger mon CV"
              aria-label="Télécharger le CV"
            >
              <Download className="w-4 h-4" />
              <span>CV</span>
            </button>

            {/* Burger mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 transition-colors rounded-md md:hidden text-secondary hover:text-title hover:bg-surface"
              aria-expanded={mobileMenuOpen}
              aria-label="Menu principal"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === href.substring(1)
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-link'
                    : 'text-secondary hover:text-title hover:bg-surface'
                }`}
              >
                {label}
              </a>
            ))}
            {/* CV mobile */}
            <button
              onClick={() => {
                handleDownloadCV();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded-lg bg-btn-primary hover:bg-btn-primary-hover text-btn-primary-txt"
            >
              <Download className="w-4 h-4" />
              Télécharger CV
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;