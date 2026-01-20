 
import React from 'react';

const Footer = ({ isDark }) => {
  return (
    <footer className={`py-8 ${isDark ? 'bg-gray-800' : 'bg-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-300">
          © 2024 RA-FANOMEZANA Herimamy Fenohasina. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
 