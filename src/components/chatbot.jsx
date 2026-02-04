 import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, MessageCircle, ChevronRight, Home, ExternalLink, Mail, Phone, MapPin, Briefcase, GraduationCap, Github, Linkedin, Facebook, Download } from 'lucide-react';

const Chatbot = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentView, setCurrentView] = useState('welcome');
  const [selectedProject, setSelectedProject] = useState(null);
  const messagesEndRef = useRef(null);

  // Icônes mapping
  const iconComponents = {
    Mail, Phone, MapPin, Briefcase, GraduationCap, Github, Linkedin, Facebook
  };

  // Fonction de téléchargement CV
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-feno.pdf';
    link.download = `CV_Herimamy_Fenohasina_${new Date().getFullYear()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Ouverture automatique après délai
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setIsOpen(true);
        addBotMessage(portfolioData.chatbot.greeting);
        showWelcomeButtons();
      }
    }, portfolioData.chatbot.openingDelay);

    return () => clearTimeout(timer);
  }, []);

  // Scroll vers le bas des messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (text) => {
    setMessages(prev => [...prev, { text, isUser: false, timestamp: new Date() }]);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { text, isUser: true, timestamp: new Date() }]);
  };

  const showWelcomeButtons = () => {
    setCurrentView('welcome');
  };

  // Navigation vers les sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      addBotMessage(`Je fais défiler la page vers la section "${sectionId}".`);
    }
  };

  // Gestion des actions
  const handleWelcomeButton = (buttonText) => {
    addUserMessage(buttonText);

    switch (buttonText) {
      case 'Mes projets':
        setCurrentView('projects');
        addBotMessage(`J'ai ${portfolioData.projects.length} projets à vous présenter :`);
        break;
      case 'Mes compétences':
        setCurrentView('skills');
        addBotMessage('Voici mes compétences techniques :');
        break;
      case 'Mon parcours':
        setCurrentView('experiences');
        addBotMessage('Voici mon parcours professionnel et académique :');
        break;
      case 'À propos':
        setCurrentView('about');
        addBotMessage(portfolioData.about.description);
        break;
      case 'Contact':
        setCurrentView('contact');
        addBotMessage(`Vous pouvez me contacter par email à ${portfolioData.personal.email} ou par téléphone au ${portfolioData.personal.phone}.`);
        break;
      case 'Télécharger CV':
        handleDownloadCV();
        addBotMessage('Je lance le téléchargement de mon CV. Le fichier devrait se télécharger automatiquement.');
        break;
      default:
        addBotMessage("Je ne comprends pas cette option.");
    }
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setCurrentView('project-detail');
    addUserMessage(project.title);
    
    const status = project.deployed ? '🟢 Déployé' : '🟡 En cours de développement';
    addBotMessage(`**${project.title}**\n\n${project.description}\n\n🔧 Technologies: ${project.stack.join(', ')}\n\n📊 Statut: ${status}`);
  };

  // Rendu des vues
  const renderWelcomeButtons = () => (
    <div className="flex flex-wrap gap-2 mt-3">
      {portfolioData.chatbot.welcomeButtons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleWelcomeButton(button)}
          className="px-4 py-2 text-sm font-medium text-purple-700 transition-all duration-300 bg-purple-100 rounded-full hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:hover:bg-purple-800"
        >
          {button}
        </button>
      ))}
    </div>
  );

  const renderProjectsList = () => (
    <div className="mt-3 space-y-2">
      {portfolioData.projects.map((project) => (
        <button
          key={project.id}
          onClick={() => handleProjectSelect(project)}
          className="flex items-center justify-between w-full p-3 text-left transition-all duration-300 border border-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700"
        >
          <span className="font-medium">{project.title}</span>
          <span className="flex items-center gap-1 text-sm">
            {project.deployed ? '🟢 Déployé' : '🟡 En cours'}
            <ChevronRight className="w-4 h-4" />
          </span>
        </button>
      ))}
      <button
        onClick={showWelcomeButtons}
        className="w-full p-2 text-sm text-center text-purple-600 dark:text-purple-400 hover:underline"
      >
        ← Retour au menu
      </button>
    </div>
  );

  const renderProjectDetail = () => (
    selectedProject && (
      <div className="mt-3 space-y-3">
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-lg font-bold">{selectedProject.title}</h4>
            {selectedProject.deployed ? (
              <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-200">
                Déployé
              </span>
            ) : (
              <span className="px-2 py-1 text-xs text-yellow-800 bg-yellow-100 rounded-full dark:bg-yellow-900 dark:text-yellow-200">
                En cours
              </span>
            )}
          </div>
          <p className="mb-3 text-sm">{selectedProject.description}</p>
          <div className="flex flex-wrap gap-1 mb-3">
            {selectedProject.stack.map((tech, idx) => (
              <span key={idx} className="px-2 py-1 text-xs text-purple-700 bg-purple-100 rounded-full dark:bg-purple-900 dark:text-purple-300">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollToSection(selectedProject.sectionId)}
              className="flex items-center justify-center flex-1 gap-2 px-3 py-2 text-sm text-white transition-colors bg-purple-500 rounded-lg hover:bg-purple-600"
            >
              <ExternalLink className="w-4 h-4" />
              Voir le projet
            </button>
            {selectedProject.deployed && selectedProject.demoLink !== '#' && (
              <a
                href={selectedProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center flex-1 gap-2 px-3 py-2 text-sm text-purple-500 transition-colors border border-purple-500 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800"
              >
                Visiter le site
              </a>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentView('projects')}
            className="flex-1 p-2 text-sm transition-colors border border-gray-300 rounded-lg dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            ← Retour aux projets
          </button>
          <button
            onClick={showWelcomeButtons}
            className="flex-1 p-2 text-sm transition-colors border border-gray-300 rounded-lg dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            🏠 Menu principal
          </button>
        </div>
      </div>
    )
  );

  const renderSkills = () => (
    <div className="mt-3 space-y-4">
      {portfolioData.skills.categories.map((category, idx) => (
        <div key={idx} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
          <h4 className="mb-2 font-bold">{category.title}</h4>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, sIdx) => (
              <span key={sIdx} className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-full dark:bg-gray-700 dark:border-gray-600">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={showWelcomeButtons}
        className="w-full p-2 text-sm text-center text-purple-600 dark:text-purple-400 hover:underline"
      >
        ← Retour au menu
      </button>
    </div>
  );

  const renderExperiences = () => (
    <div className="mt-3 space-y-3">
      {portfolioData.experiences.map((exp, idx) => {
        const IconComponent = exp.type === 'stage' ? Briefcase : GraduationCap;
        return (
          <div key={idx} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <IconComponent className="w-4 h-4 text-purple-500" />
                <h4 className="font-bold">{exp.title}</h4>
              </div>
              <span className="text-sm text-purple-600 dark:text-purple-400">{exp.period}</span>
            </div>
            <p className="mt-2 text-sm">{exp.description}</p>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {exp.type === 'stage' ? '💼 Stage professionnel' : '🎓 Formation académique'}
            </div>
          </div>
        );
      })}
      <button
        onClick={showWelcomeButtons}
        className="w-full p-2 text-sm text-center text-purple-600 dark:text-purple-400 hover:underline"
      >
        ← Retour au menu
      </button>
    </div>
  );

  const renderContact = () => (
    <div className="mt-3 space-y-3">
      <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
        <h4 className="mb-3 font-bold">Coordonnées</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span><strong>Email:</strong> {portfolioData.personal.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span><strong>Téléphone:</strong> {portfolioData.personal.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span><strong>Localisation:</strong> {portfolioData.personal.location}</span>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="mb-2 font-bold">Réseaux sociaux:</h5>
          <div className="flex gap-2">
            {portfolioData.contact.socialLinks.map((social, idx) => {
              const IconComponent = iconComponents[social.icon];
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-colors bg-white border border-gray-200 rounded-full dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
                  title={social.platform}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* SECTION BOUTONS D'ACTION */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => window.location.href = `mailto:${portfolioData.personal.email}`}
          className="flex items-center justify-center w-full gap-2 p-3 font-medium text-white transition-colors bg-purple-500 rounded-lg hover:bg-purple-600"
        >
          <Mail className="w-5 h-5" />
          ✉️ Envoyer un email
        </button>
        
        {/* NOUVEAU BOUTON : Télécharger CV */}
        <button
          onClick={handleDownloadCV}
          className="flex items-center justify-center w-full gap-2 p-3 font-medium text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600"
        >
          <Download className="w-5 h-5" />
          📄 Télécharger mon CV
        </button>
      </div>
      
      <button
        onClick={showWelcomeButtons}
        className="w-full p-2 text-sm text-center text-purple-600 dark:text-purple-400 hover:underline"
      >
        ← Retour au menu
      </button>
    </div>
  );

  // Bouton flottant quand le chatbot est fermé
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-50 flex items-center justify-center text-white transition-all duration-300 bg-purple-500 rounded-full shadow-lg bottom-6 right-6 w-14 h-14 hover:bg-purple-600 hover:scale-110"
        aria-label="Ouvrir le chatbot"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  // Interface principale du chatbot
  return (
    <div className={`fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl z-50 flex flex-col ${
      isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    }`} style={{ maxHeight: '80vh' }}>
      {/* Header */}
      <div className={`p-4 rounded-t-2xl flex justify-between items-center ${
        isDark ? 'bg-gray-900' : 'bg-purple-500 text-white'
      }`}>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold">Assistant Portfolio</h3>
            <p className="text-sm opacity-80">{portfolioData.personal.name}</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 transition-colors rounded-full hover:bg-white/20"
          aria-label="Fermer le chatbot"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages container */}
      <div className="flex-1 p-4 overflow-y-auto" style={{ maxHeight: '400px' }}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-3 ${msg.isUser ? 'text-right' : ''}`}>
            <div className={`inline-block max-w-[80%] px-4 py-2 rounded-2xl ${
              msg.isUser
                ? 'bg-purple-500 text-white rounded-br-none'
                : isDark
                ? 'bg-gray-700 rounded-bl-none'
                : 'bg-gray-100 rounded-bl-none'
            }`}>
              {msg.text.split('**').map((part, i) => 
                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
              )}
            </div>
            <div className={`text-xs mt-1 opacity-60 ${msg.isUser ? 'text-right' : ''}`}>
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}

        {/* Dynamic content */}
        {currentView === 'welcome' && renderWelcomeButtons()}
        {currentView === 'projects' && renderProjectsList()}
        {currentView === 'project-detail' && renderProjectDetail()}
        {currentView === 'skills' && renderSkills()}
        {currentView === 'experiences' && renderExperiences()}
        {currentView === 'about' && (
          <div className="mt-3">
            <button
              onClick={showWelcomeButtons}
              className="p-2 text-sm text-purple-600 dark:text-purple-400 hover:underline"
            >
              ← Retour au menu
            </button>
          </div>
        )}
        {currentView === 'contact' && renderContact()}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick actions footer */}
      <div className={`p-3 border-t ${
        isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
      }`}>
        <div className="flex justify-between">
          <button
            onClick={showWelcomeButtons}
            className="flex items-center gap-2 px-3 py-1 text-sm transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Home className="w-4 h-4" />
            Menu
          </button>
          <button
            onClick={() => {
              setMessages([]);
              setCurrentView('welcome');
              addBotMessage(portfolioData.chatbot.greeting);
              showWelcomeButtons();
            }}
            className="px-3 py-1 text-sm transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            🔄 Redémarrer
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="px-3 py-1 text-sm transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            ✕ Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;