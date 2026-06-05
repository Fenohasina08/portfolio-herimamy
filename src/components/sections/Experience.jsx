import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import AnimateOnScroll from '../common/AnimateOnScroll';

const Experience = () => {
  const experiences = portfolioData.experiences;

  return (
    <section id="expérience" className="py-20 bg-surface">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <AnimateOnScroll direction="up">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-title">
              Mon Parcours
            </h2>
            <div className="w-20 h-1 mx-auto bg-link"></div>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute w-1 h-full transform -translate-x-1/2 rounded-full left-1/2 bg-link/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimateOnScroll
                key={exp.id}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={200}
              >
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <div
                      className={`p-6 shadow-lg rounded-xl bg-card ${
                        index % 2 === 0 ? 'mr-8' : 'ml-8'
                      }`}
                    >
                      <div className="flex items-center mb-3">
                        {exp.type === 'stage' ? (
                          <Briefcase className="w-6 h-6 mr-3 text-link" />
                        ) : (
                          <GraduationCap className="w-6 h-6 mr-3 text-link" />
                        )}
                        <span className="font-medium text-link">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-title">
                        {exp.title}
                      </h3>
                      <p className="text-secondary">{exp.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-4 h-4 rounded-full bg-link ring-4 ring-surface"></div>
                  <div className="flex-1"></div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;