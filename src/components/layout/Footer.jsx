 
import React from 'react';

const Footer = ({ isDark }) => {
  return (
    <footer className={`py-8 ${isDark ? 'bg-gray-800' : 'bg-gray-900'}`}>
      <div className="max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        <p className="text-gray-300">
          © 2026 RA-FANOMEZANA Herimamy Fenohasina. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
 