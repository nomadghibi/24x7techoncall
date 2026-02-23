import React from 'react';

const HeroSection = ({ title, image }) => {
  return (
    <section className="py-20 text-white bg-gray-900" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container p-4 mx-auto text-center bg-black bg-opacity-50 rounded">
        <h1 className="mb-4 text-5xl font-bold">{title}</h1>
      </div>
    </section>
  );
};

export default HeroSection;





