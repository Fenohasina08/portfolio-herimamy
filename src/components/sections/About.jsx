 import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = ({ isDark }) => {
  return (
    <section id="propos" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {portfolioData.about.title}
          </h2>
          <div className="w-20 h-1 mx-auto bg-purple-500"></div>
        </div>
        
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <div className={`w-80 h-80 rounded-full ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-2xl flex items-center justify-center overflow-hidden`}>
              <div className={`w-72 h-72 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'} overflow-hidden`}>
                <img 
                  src={portfolioData.about.image}
                  alt={portfolioData.personal.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          
          <div>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {portfolioData.about.description}
            </p>
            
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Mes qualités
            </h3>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {portfolioData.about.qualities.map((skill, index) => (
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