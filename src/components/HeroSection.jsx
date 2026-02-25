import React from 'react';

const HeroSection = ({ title, image }) => {
  return (
    <section
      className="relative min-h-[320px] flex items-end text-white"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-transparent"></div>
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h1>
      </div>
    </section>
  );
};

export default HeroSection;
