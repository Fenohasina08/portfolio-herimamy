import React from 'react';
import { Code } from 'lucide-react';

const Skills = ({ isDark }) => {
  const skillCategories = [
    {
      title: 'Langages',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Java', 'PostgreSQL']
    },
    {
      title: 'Outils',
      skills: ['Git/GitHub', 'TailwindCSS', 'Figma', 'VS Code']
    }
  ];

  return (
    <section id="compétences" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Mes Compétences
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className={`text-2xl font-semibold mb-8 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`p-6 rounded-xl shadow-lg text-center transform hover:scale-110 hover:shadow-2xl transition-all duration-300 ${
                      isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500 flex items-center justify-center`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {skill}
                    </span>
                  </div>
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