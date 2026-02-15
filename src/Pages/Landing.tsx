import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import greenSweaterImg from '../images/green-sweater-16x9.jpg';
import LinkedinBadge from '../Components/LinkedinBadge';
import '../CSS/Landing.css';

const Landing: React.FC = () => {
  useEffect(() => {
    document.title = "Oliver Gomes Jr";
  }, []);

  return (
    <div className="landing-container">
      <main className="landing-content">
        <div className="landing-image-wrapper">
          <img
            src={greenSweaterImg}
            alt="Oliver Gomes Jr wearing a green sweater"
            className="landing-image"
          />
        </div>
        <div className="landing-text-wrapper">
          <h1 className="landing-title">Oliver Gomes Jr</h1>
          <nav className="landing-nav">
            <Link to="/home" className="landing-nav-link" aria-label="View Projects">
              Projects
            </Link>
            <Link to="/resume" className="landing-nav-link secondary" aria-label="View Resume">
              Resume
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default Landing;
