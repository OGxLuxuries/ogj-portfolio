import React from 'react';

const Loading: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      color: 'var(--brand-pink)',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    }}>
      Loading...
    </div>
  );
};

export default Loading;
