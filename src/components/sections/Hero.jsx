import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Hero = ({ isDark }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    background: {
      color: {
        value: isDark ? '#0f0d0a' : '#fafaf9',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: isDark ? '#ea580c' : '#f97316' },
      links: {
        color: isDark ? '#ea580c' : '#f97316',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.3 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  // Effet de parallaxe sur le texte
  const parallaxOffset = scrollY * 0.15;

  return (
    <section
      id="accueil"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0"
      />

      <div
        className="z-10 px-4 text-center"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="animate-fadeIn">
          <h1 className="mb-6 text-5xl font-bold md:text-7xl text-title">
            RA-FANOMEZANA
            <br />
            <span className="text-link">Herimamy Fenohasina</span>
          </h1>

          <h2 className="mb-8 text-xl md:text-2xl text-secondary">
            Développeur Web
          </h2>

          <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary">
            "Passionné par le développement web et la création de solutions modernes."
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#projets"
              className="px-8 py-3 transition-all duration-300 transform rounded-full shadow-lg active:scale-90 hover:scale-105 bg-btn-primary text-btn-primary-txt hover:bg-btn-primary-hover"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-8 py-3 transition-all duration-300 transform border-2 rounded-full active:scale-90 hover:scale-105 bg-btn-outline text-btn-outline-txt border-btn-outline-border hover:bg-btn-primary hover:text-btn-primary-txt hover:border-btn-primary"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-secondary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;