 import React from 'react';

const Skills = ({ isDark }) => {
  // Mapping des icônes pour chaque compétence
  const skillIcons = {
    // Langages
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    
    // Outils
    'Git/GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'TailwindCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
  };

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
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Mes Compétences
          </h2>
          <div className="w-20 h-1 mx-auto bg-purple-500"></div>
        </div>
        
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className={`text-2xl font-semibold mb-8 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`p-6 rounded-xl shadow-lg text-center transform hover:scale-110 hover:shadow-2xl transition-all duration-300 ${
                      isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
                      <img 
                        src={skillIcons[skill]} 
                        alt={`${skill} icon`}
                        className="object-contain w-12 h-12"
                      />
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