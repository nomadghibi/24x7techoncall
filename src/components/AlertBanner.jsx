
import React, { useState } from 'react';

const AlertBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleLinkClick = (e) => {
    // Optional: Add any logging or handling here
    console.log('Learn More link clicked');
  };

  return (
    <div className="relative p-4 text-center text-white bg-red-600">
      <p>
        ⚠️ Attention: Hurricane Milton is approaching. Please take necessary precautions and stay updated on local advisories.
        <a 
          href="https://www.fema.gov/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ml-2 text-white underline"
          onClick={handleLinkClick}
        >
          Learn More
        </a>
      </p>
      <button
        className="absolute text-white top-1 right-1"
        onClick={() => setIsVisible(false)}
        aria-label="Close alert"
      >
        ✕
      </button>
    </div>
  );
};

export default AlertBanner;
