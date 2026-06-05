 import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = ({ isDark }) => {
  const experiences = portfolioData.experiences;

  return (
    <section id="expérience" className="py-20">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Mon Parcours
          </h2>
          <div className="w-20 h-1 mx-auto bg-purple-500"></div>
        </div>
        
        <div className="relative">
          <div className="absolute w-1 h-full transform -translate-x-1/2 bg-purple-500 left-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`p-6 rounded-xl shadow-lg ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  } ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex items-center mb-3">
                      {exp.type === 'stage' ? (
                        <Briefcase className="w-6 h-6 mr-3 text-purple-500" />
                      ) : (
                        <GraduationCap className="w-6 h-6 mr-3 text-purple-500" />
                      )}
                      <span className="font-medium text-purple-500">{exp.period}</span>
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.title}
                    </h3>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 w-4 h-4 bg-purple-500 border-4 border-white rounded-full"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;