import React from 'react';
import { ExternalLink, Clock, CheckCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Projects = () => {
  const projects = portfolioData.projects;

  return (
    <section id="projets" className="py-20 bg-projects-bg">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-title">
            Mes Projets
          </h2>
          <div className="w-20 h-1 mx-auto bg-link"></div>
        </div>

        {/* Grille de projets */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden transition-all duration-300 transform shadow-lg rounded-xl bg-card hover:scale-105"
            >
              {/* Image + overlay */}
              <div className="relative group">
                {/* Badge de statut */}
                <div
                  className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${
                    project.deployed
                      ? 'bg-success text-white'
                      : 'bg-warning text-neutral-900'
                  }`}
                >
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

                {/* Overlay au survol */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  {project.deployed ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 transition-colors duration-300 rounded-full bg-btn-primary hover:bg-btn-primary-hover text-btn-primary-txt"
                      title="Voir le site déployé"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : (
                    <button
                      className="flex items-center justify-center p-3 text-white rounded-full cursor-not-allowed bg-neutral-400 dark:bg-neutral-700"
                      title="Site en cours de déploiement"
                      disabled
                    >
                      <Clock className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-title">
                  {project.title}
                </h3>
                <p className="mb-4 text-secondary">
                  {project.description}
                </p>

                {/* Tags des technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-tag-bg text-tag-txt"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bouton d'action en bas */}
                <div className="mt-4">
                  {project.deployed ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 transition-colors duration-300 rounded-lg bg-btn-primary hover:bg-btn-primary-hover text-btn-primary-txt"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Site déployé
                    </a>
                  ) : (
                    <button
                      className="flex items-center justify-center gap-2 px-4 py-2 text-white rounded-lg cursor-not-allowed bg-neutral-400 dark:bg-neutral-700 dark:text-neutral-300"
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