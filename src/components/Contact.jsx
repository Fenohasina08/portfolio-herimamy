 import React, { useState } from 'react';
import { Github, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    alert('Message envoyé ! (simulation)');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Fenohasina08' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/herimamy-fenohasina-ra-fanomezana-40370a386/' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/feno.hasi.na.55017' }
  ];

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
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Envoyez-moi un message
            </h3>
            
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full py-3 text-white transition-colors duration-300 transform bg-purple-500 rounded-lg hover:bg-purple-600 hover:scale-105"
              >
                Envoyer le message
              </button>
            </div>
          </div>
          
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Mes coordonnées
            </h3>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-purple-500" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  herimamy.fanomezana@email.com
                </span>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-purple-500" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  +261 32 87 023 38
                </span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-purple-500" />
                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;