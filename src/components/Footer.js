import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright © {currentYear} | Olugbenga</p>
    </footer>
  );
};

export default Footer;
