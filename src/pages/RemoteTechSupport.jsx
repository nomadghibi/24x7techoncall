import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/optimized-hero/remotetechsupport-1152.jpg';

const RemoteTechSupport = () => {
  return (
    <div>
      <Helmet>
        <title>Remote Tech Support | Palm Bay/Melbourne FL | Expert IT Services</title>
        <meta name="description" content="Reliable remote tech support services in Palm Bay/Melbourne, FL. Get professional IT help without leaving your home or office. Contact us for instant support!" />
        <meta name="keywords" content="Remote Tech Support Palm Bay/Melbourne FL, IT Support, Remote Assistance, Computer Help, Online Tech Support, Virtual IT Support, Computer Repair" />
      </Helmet>
      <HeroSection title="Remote Tech Support" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Remote Tech Support</h2>
        <p>Get expert tech support from the comfort of your home for $75/hr...</p>
      </div>
    </div>
  );
};

export default RemoteTechSupport;
