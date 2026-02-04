 import React from 'react';
import { ChevronDown } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Hero = ({ isDark }) => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    background: {
      color: {
        value: isDark ? '#111827' : '#f9fafb',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: isDark ? '#a855f7' : '#8b5cf6',
      },
      links: {
        color: isDark ? '#a855f7' : '#8b5cf6',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <section id="accueil" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Particules en arrière-plan */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0"
      />
      
      <div className="z-10 px-4 text-center">
        <div className="animate-fadeIn">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            RA-FANOMEZANA
            <br />
            <span className="text-purple-500">Herimamy Fenohasina</span>
          </h1>
          
          <h2 className={`text-xl md:text-2xl mb-8 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
             Développeur Web  
          </h2>
          
          <p className={`text-lg mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            "Passionné par le développement web et la création de solutions modernes."
          </p>
          
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#projets"
              className="px-8 py-3 text-white transition-all duration-300 transform bg-purple-500 rounded-full shadow-lg hover:bg-purple-600 hover:scale-105"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className={`border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                isDark ? 'hover:text-white' : ''
              }`}
            >
              Me contacter
            </a>
          </div>
        </div>
        
        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <ChevronDown className={`w-8 h-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;