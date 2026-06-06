import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Menu, X, Terminal } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      let current = 'accueil';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
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

  const navItems = [
    { label: 'Accueil',      href: '#accueil' },
    { label: 'À propos',     href: '#propos' },
    { label: 'Compétences',  href: '#compétences' },
    { label: 'Projets',      href: '#projets' },
    { label: 'Expérience',      href: '#experience' },
    { label: 'Certifications',  href: '#certifications' },
    { label: 'Contact',         href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[var(--bg-2)]/90 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo terminal */}
          <a href="#accueil" className="flex items-center gap-2 group">
            <span className="text-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity">
              <Terminal className="w-4 h-4" />
            </span>
            <span
              className="font-mono text-sm font-medium text-[var(--title)] tracking-wider"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              herimamy<span className="text-[var(--accent)]">.dev</span>
            </span>
            <span className="animate-blink text-[var(--accent)] font-mono">_</span>
          </a>

          {/* Nav desktop */}
          <div className="hidden space-x-6 md:flex">
            {navItems.map(({ label, href }) => {
              const sectionId = href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative text-xs font-medium transition-colors duration-200 tracking-wide
                    ${isActive
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--body)] hover:text-[var(--title)]'
                    }`}
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {isActive && (
                    <span className="absolute -left-3 text-[var(--accent)] opacity-60">/</span>
                  )}
                  {label}
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-px bg-[var(--accent)] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--border)] text-[var(--body)]
                hover:border-[var(--border-hover)] hover:text-[var(--accent)] transition-all"
              aria-label="Changer le thème"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button
              onClick={handleDownloadCV}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg
                border border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-dim)]
                hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-200"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <Download className="w-3 h-3" />
              CV
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-[var(--body)] hover:text-[var(--title)] transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-1 pt-2 border-t border-[var(--border)]">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors
                  ${activeSection === href.substring(1)
                    ? 'bg-[var(--accent-dim)] text-[var(--accent)]'
                    : 'text-[var(--body)] hover:text-[var(--title)] hover:bg-[var(--bg-3)]'
                  }`}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => { handleDownloadCV(); setMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-2 mt-2 px-4 py-2 text-xs font-medium rounded-lg
                border border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-dim)]"
            >
              <Download className="w-3 h-3" /> Télécharger CV
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;