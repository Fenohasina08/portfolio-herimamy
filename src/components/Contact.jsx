 import React from 'react';
import { Github, Linkedin, Facebook, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = ({ isDark }) => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Fenohasina08' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/herimamy-fenohasina-ra-fanomezana-40370a386/' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/feno.hasi.na.55017' }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:fenohasinaherimamy@gmail.com';
  };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Contactez-moi
          </h2>
          <div className="w-20 h-1 mx-auto bg-purple-500"></div>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md text-center">
              <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Envoyez-moi un email
              </h3>
              
              <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Cliquez sur le bouton ci-dessous pour m'envoyer un email directement.
                Votre client de messagerie s'ouvrira avec mon adresse pré-remplie.
              </p>
              
              <div className="flex justify-center">
                <button
                  onClick={handleEmailClick}
                  className="px-12 py-4 text-white bg-purple-500 rounded-full hover:bg-purple-600 hover:scale-105 transition-all duration-300 transform flex items-center justify-center gap-3 group text-lg font-medium shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Écrire un email
                </button>
              </div>
              
              <div className={`mt-6 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <p>📧 Adresse : fenohasinaherimamy@gmail.com</p>
                <p className="mt-2 text-xs">Votre client email (Gmail, Outlook, etc.) s'ouvrira automatiquement.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Mes coordonnées
            </h3>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-center group">
                <div className="w-6 h-6 mr-4 text-purple-500 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  fenohasinaherimamy@gmail.com
                </span>
              </div>
              
              <div className="flex items-center group">
                <div className="w-6 h-6 mr-4 text-purple-500 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  +261 32 87 023 38
                </span>
              </div>
              
              <div className="flex items-center group">
                <div className="w-6 h-6 mr-4 text-purple-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Antananarivo, Madagascar
                </span>
              </div>
            </div>
            
            <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Retrouvez-moi sur
            </h4>
            
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, label, href }, index) => (
                <a
                  key={label}
                  href={href}
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    isDark 
                      ? 'bg-gray-800 hover:bg-purple-600 text-gray-300 hover:text-white' 
                      : 'bg-white hover:bg-purple-500 text-gray-600 hover:text-white'
                  } shadow-lg hover:shadow-xl`}
                  title={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Instructions */}
            <div className={`mt-8 p-4 rounded-lg ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-purple-50 border border-purple-200'}`}>
              <h5 className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                📝 Comment me contacter ?
              </h5>
              <ol className={`text-sm space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>1. Cliquez sur le bouton "Écrire un email"</li>
                <li>2. Votre application de messagerie s'ouvre</li>
                <li>3. Rédigez votre message</li>
                <li>4. Envoyez-moi l'email directement</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;