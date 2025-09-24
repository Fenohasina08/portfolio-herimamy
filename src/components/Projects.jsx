import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ isDark }) => {
  const projects = [
    {
      title: 'Site de restaurant sushi',
      description: 'Site web moderne pour un restaurant de sushi avec menu interactif et système de commande en ligne.',
      stack: 'React • TailwindCSS • JavaScript',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Test de dactylographie',
      description: 'Application de test de vitesse de frappe avec système WPM, différents niveaux de difficulté et statistiques détaillées.',
      stack: 'JavaScript • HTML • CSS',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Portfolio Geek\'sopap',
      description: 'Plateforme de ressources numériques pour la communauté geek avec système de partage et de curation de contenu.',
      stack: 'React • TypeScript • TailwindCSS',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="projets" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transition-colors duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-full transition-colors duration-300">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.split(' • ').map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;