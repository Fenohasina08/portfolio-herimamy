import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import AnimateOnScroll from '../common/AnimateOnScroll';

const Skills = () => {
  const skillCategories = portfolioData.skills.categories;

  return (
    <section id="compétences" className="py-20 bg-skills-bg">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <AnimateOnScroll direction="up">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-title">
              Mes Compétences
            </h2>
            <div className="w-20 h-1 mx-auto bg-link"></div>
          </div>
        </AnimateOnScroll>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <AnimateOnScroll direction="up" delay={100}>
                <h3 className="mb-8 text-2xl font-semibold text-center text-title">
                  {category.title}
                </h3>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {category.skills.map((skill, index) => (
                  <AnimateOnScroll
                    key={skill.name}
                    direction="up"
                    delay={150 + index * 100}
                  >
                    <div className="p-6 transition-all duration-300 transform shadow-lg rounded-xl bg-card hover:scale-105 hover:shadow-2xl active:scale-95">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
                        <img
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          className="object-contain w-12 h-12"
                        />
                      </div>
                      <span className="block mb-3 font-medium text-center text-title">
                        {skill.name}
                      </span>

                      {/* Barre de progression animée */}
                      <div className="w-full h-2 overflow-hidden rounded-full bg-border">
                        <div
                          className="h-full transition-all duration-1000 ease-out rounded-full bg-link"
                          style={{
                            width: `${skill.level || 80}%`, // fallback 80% si pas de niveau
                          }}
                        />
                      </div>
                      <p className="mt-1 text-xs text-right text-secondary">
                        {skill.level || 80}%
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;