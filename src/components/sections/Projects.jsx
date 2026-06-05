 import React from 'react';
import { ExternalLink, Clock, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = ({ isDark }) => {
  const projects = portfolioData.projects;

  return (
    <section id="projets" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Mes Projets
          </h2>
          <div className="w-20 h-1 mx-auto bg-purple-500"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
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
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  {project.deployed ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 text-white transition-colors duration-300 bg-purple-500 rounded-full hover:bg-purple-600"
                      title="Voir le site déployé"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : (
                    <button
                      className="flex items-center justify-center p-3 text-white bg-gray-500 rounded-full cursor-not-allowed"
                      title="Site en cours de déploiement"
                      disabled
                    >
                      <Clock className="w-5 h-5" />
                    </button>
                  )}
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
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-white bg-purple-500 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Bouton unique */}
                <div className="mt-4">
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