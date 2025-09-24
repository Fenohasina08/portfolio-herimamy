import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = ({ isDark }) => {
  const experiences = [
    {
      title: 'Stage - Direction des Systèmes d\'Information',
      period: '2024',
      description: 'Développement web avec HTML, CSS et JavaScript. Contribution à des projets d\'amélioration des systèmes internes.',
      type: 'stage'
    },
    {
      title: 'Licence 2 Informatique',
      period: '2023 - 2025',
      description: 'Formation en développement logiciel, structures de données, algorithmique et développement web.',
      type: 'formation'
    }
  ];

  return (
    <section id="expérience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Mon Parcours
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`p-6 rounded-xl shadow-lg ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  } ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex items-center mb-3">
                      {exp.type === 'stage' ? (
                        <Briefcase className="w-6 h-6 text-purple-500 mr-3" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-purple-500 mr-3" />
                      )}
                      <span className="text-purple-500 font-medium">{exp.period}</span>
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
                
                <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white z-10 relative"></div>
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