import React from 'react'; 
import '../CSS/Github.css';

interface GitHubLinkProps {
  url: string;
  label?: string; // Optional label for the button (e.g., "View GitHub")
  title: string; // Title for the h1 element
}

const GitHubLink: React.FC<GitHubLinkProps> = ({ url, label = "View on GitHub", title }) => {
  return (
    <div className="github-card">
      <h1 className="github-title">{title}</h1>
      <a href={url} target="_blank" rel="noopener noreferrer" className="github-button">
        {label}
      </a>
    </div>
  );
};

export default GitHubLink;
