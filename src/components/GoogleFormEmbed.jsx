import React from 'react';

const GoogleFormEmbed = () => {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf8wTqZ0eX5Z8B8Kc2rU7sE9Nf7pDqjWfC6o0oQ5ZfU5q6Q/viewform?embedded=true"
        width="640"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Form"
        style={{ border: 'none' }}
        allowFullScreen
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleFormEmbed;
