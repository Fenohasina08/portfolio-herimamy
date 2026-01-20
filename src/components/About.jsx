import React from 'react';

const About = ({ isDark }) => {
  return (
    <section id="propos" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className={`w-80 h-80 rounded-full ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-2xl flex items-center justify-center`}>
              <div className={`w-72 h-72 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center`}>
                <span className={`text-6xl font-bold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  HF
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Actuellement étudiant en L2 Informatique, je suis passionné par le développement web 
              et les nouvelles technologies. Mon objectif est de devenir un développeur web 
              full-stack compétent et de contribuer à des projets innovants.
            </p>
            
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Mes qualités
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Curiosité', 'Autonomie', 'Travail d\'équipe'].map((skill, index) => (
                <div
                  key={skill}
                  className={`p-4 rounded-lg shadow-md ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  } transform hover:scale-105 transition-all duration-300`}
                >
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;