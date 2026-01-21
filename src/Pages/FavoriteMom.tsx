import React from 'react';
import '../CSS/FavoriteMom.css';
import momCar from '../images/mom-car.jpg';
import momDesert from '../images/mom-desert.jpg';
import momBox from '../images/mom-box.jpg';
import momRit from '../images/mom-rit.jpg';

const FavoriteMom: React.FC = () => {
  // Enhanced style to ensure images fill the modern rounded containers
  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.5s ease' // Smooth hover effect
  };

  return (
    <div className="birthday-container">
      <div className="scroll-progress"></div>
      
      {/* Confetti remains fixed in background */}
      <div className="confetti-container">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="confetti-piece" style={{
            left: `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 5}s`,
            '--duration': `${4 + Math.random() * 3}s`,
            '--color': `hsl(${Math.random() * 360}, 75%, 65%)`
          } as React.CSSProperties} />
        ))}
      </div>

      <main className="birthday-content">
        <section className="hero-section">
          <h1 className="reveal-text">Happy 60th Birthday, Birthgiver!</h1>
          <p className="subtitle">Six decades of being my favorite mom!</p>
        </section>

        <section className="bento-grid">
          <div className="bento-item main-photo reveal-on-scroll">
            <img src={momCar} alt="Mom" style={imageStyle} />
            <div className="glass-label">Bronco Fun</div>
          </div>

          <div className="bento-item side-photo-1 reveal-on-scroll">
            <img src={momDesert} alt="Mom Desert" style={imageStyle} />
            <div className="glass-label">Arizona</div>
          </div>

          <div className="bento-item side-photo-2 reveal-on-scroll">
            <img src={momBox} alt="Mom Box" style={imageStyle} />
            <div className="glass-label">Box</div>
          </div>

          <div className="bento-item side-photo-3 reveal-on-scroll">
            <img src={momRit} alt="Mom RIT" style={imageStyle} />
            <div className="glass-label">RIT</div>
          </div>

          <div className="bento-item message-card reveal-on-scroll">
            <h3 style={{ color: 'var(--brand-pink)', marginBottom: '12px' }}>Ollie's Message</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#444' }}>
              ILMYTDTM! Enjoy your day of reflection and relaxation!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FavoriteMom;