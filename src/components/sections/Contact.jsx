import React from 'react';
import { Github, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const iconComponents = {
  Github: Github,
  Linkedin: Linkedin,
  Facebook: Facebook,
  Mail: Mail,
  Phone: Phone,
  MapPin: MapPin,
};

const Contact = () => {
  const socialLinks = portfolioData.contact.socialLinks;

  const handleEmailClick = () => {
    window.location.href = `mailto:${portfolioData.personal.email}`;
  };

  return (
    <>
      {/* Section principale */}
      <section id="contact" className="py-20 bg-contact-bg">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-title">
              {portfolioData.contact.title}
            </h2>
            <div className="w-20 h-1 mx-auto bg-link"></div>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Colonne gauche – bouton email principal */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-md text-center">
                <h3 className="mb-6 text-2xl font-semibold text-title">
                  Envoyez-moi un email
                </h3>

                <p className="mb-8 text-lg text-secondary">
                  {portfolioData.contact.emailText}
                </p>

                <div className="flex justify-center">
                  <button
                    onClick={handleEmailClick}
                    className="flex items-center justify-center gap-3 px-12 py-4 text-lg font-medium transition-all duration-300 transform rounded-full shadow-lg group hover:shadow-xl bg-btn-primary hover:bg-btn-primary-hover text-btn-primary-txt hover:scale-105"
                  >
                    <Mail className="w-6 h-6 transition-transform group-hover:scale-110" />
                    Écrire un email
                  </button>
                </div>

                <div className="mt-6 text-sm text-secondary">
                  <p>📧 Adresse : {portfolioData.personal.email}</p>
                  <p className="mt-2 text-xs text-disabled">
                    Votre client email (Gmail, Outlook, etc.) s'ouvrira automatiquement.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne droite – coordonnées */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-title">
                Mes coordonnées
              </h3>

              <div className="mb-8 space-y-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 mr-4 text-link">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-secondary">
                    {portfolioData.personal.email}
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 mr-4 text-link">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-secondary">
                    {portfolioData.personal.phone}
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 mr-4 text-link">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-secondary">
                    {portfolioData.personal.location}
                  </span>
                </div>
              </div>

              <h4 className="mb-4 text-xl font-semibold text-title">
                Retrouvez-moi sur
              </h4>

              <div className="flex space-x-4">
                {socialLinks.map(({ platform, url, icon }) => {
                  const IconComponent = iconComponents[icon];
                  return (
                    <a
                      key={platform}
                      href={url}
                      className="p-3 transition-all duration-300 transform rounded-full shadow-lg hover:scale-110 hover:shadow-xl bg-card text-secondary hover:bg-btn-primary hover:text-btn-primary-txt"
                      title={platform}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>

              {/* Encadré explicatif */}
              <div className="p-4 mt-8 border rounded-lg bg-card border-border">
                <h5 className="mb-2 font-medium text-title">
                  📝 Comment me contacter ?
                </h5>
                <ol className="space-y-2 text-sm text-secondary">
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

      {/* Bouton flottant fixed – contact rapide */}
      <button
        onClick={handleEmailClick}
        className="fixed z-50 flex items-center justify-center transition-all duration-300 rounded-full shadow-2xl w-14 h-14 bottom-6 right-6 bg-btn-primary hover:bg-btn-primary-hover text-btn-primary-txt hover:scale-110 group"
        title="Envoyer un email"
        aria-label="Envoyer un email"
      >
        <Mail className="w-6 h-6 transition-transform group-hover:scale-110" />
      </button>
    </>
  );
};

export default Contact;