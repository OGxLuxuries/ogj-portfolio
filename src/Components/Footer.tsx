import React from 'react';
import LinkedinBadge from './LinkedinBadge';
import '../CSS/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <LinkedinBadge />
      </div>
    </footer>
  );
};

export default Footer;
