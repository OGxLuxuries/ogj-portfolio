import "../CSS/Linkedin.css"
import React from 'react';

interface LinkedInCardProps {
  profileUrl: string; // URL of the LinkedIn profile
  headshotUrl: string; // URL of the headshot image
  name: string; // Name of the person (for display)
}

const LinkedInCard: React.FC<LinkedInCardProps> = ({ profileUrl, headshotUrl, name }) => {
  const handleClick = () => {
    window.open(profileUrl, '_blank');
  };

  return (
    <div className="linkedin-card">
      <img src={headshotUrl} alt={`${name}'s headshot`} className="headshot" />
      <h2 className="name">{name}</h2>
      <button 
        onClick={handleClick} 
        className="linkedin-button"
        aria-label="Connect with me on LinkedIn"
      >
        Add me on LinkedIn
      </button>
    </div>
  );
};

export default LinkedInCard;
