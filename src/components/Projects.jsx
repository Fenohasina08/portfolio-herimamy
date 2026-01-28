 import React from 'react';
import { ExternalLink, Github, Clock, CheckCircle } from 'lucide-react';

const Projects = ({ isDark }) => {
  const projects = [
    {
      title: 'Site de restaurant sushi',
      description: 'Site web moderne pour un restaurant de sushi avec menu interactif et système de commande en ligne.',
      stack: 'React • TailwindCSS • JavaScript',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      deployed: false, // Non déployé
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Test de dactylographie',
      description: 'Application de test de vitesse de frappe avec système WPM, différents niveaux de difficulté et statistiques détaillées.',
      stack: 'JavaScript • HTML • CSS',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      deployed: true, // Déployé
      demoLink: 'https://hikeyboardgame.netlify.app/',
      githubLink: '#'
    },
    {
      title: 'Portfolio Geek\'sopap',
      description: 'Plateforme de ressources numériques pour la communauté geek avec système de partage et de curation de contenu.',
      stack: 'React • TypeScript • TailwindCSS',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      deployed: false, // Non déployé
      demoLink: '#',
      githubLink: '#'
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
                {/* Badge de statut */}
                <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${
                  project.deployed
                    ? 'bg-green-500 text-white'
                    : 'bg-yellow-500 text-gray-900'
                }`}>
                  {project.deployed ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Déployé
                    </>
                  ) : (
                    <>
                      <Clock className="w-4 h-4" />
                      En cours
                    </>
                  )}
                </div>
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.deployed ? (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transition-colors duration-300 flex items-center justify-center"
                        title="Voir le site déployé"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    ) : (
                      <button
                        className="bg-gray-500 cursor-not-allowed text-white p-2 rounded-full flex items-center justify-center"
                        title="Site en cours de déploiement"
                        disabled
                      >
                        <Clock className="w-5 h-5" />
                      </button>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-full transition-colors duration-300 flex items-center justify-center"
                      title="Voir le code source"
                    >
                      <Github className="w-5 h-5" />
                    </a>
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
                
                {/* Boutons d'action */}
                <div className="flex space-x-4 mt-4">
                  {project.deployed ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                        isDark 
                          ? 'bg-purple-500 hover:bg-purple-600 text-white' 
                          : 'bg-purple-500 hover:bg-purple-600 text-white'
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Site déployé
                    </a>
                  ) : (
                    <button
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-not-allowed ${
                        isDark 
                          ? 'bg-gray-700 text-gray-400' 
                          : 'bg-gray-200 text-gray-500'
                      }`}
                      disabled
                    >
                      <Clock className="w-4 h-4" />
                      En cours de déploiement
                    </button>
                  )}
                  
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    Code source
                  </a>
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