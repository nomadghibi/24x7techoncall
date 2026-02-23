
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaLaptop,
  FaBug,
  FaNetworkWired,
  FaDatabase,
  FaHandsHelping,
  FaTools,
  FaLock,
  FaShoppingCart,
  FaEnvelope,
} from 'react-icons/fa';
import heroImage from '../assets/herohowtobesafe.webp'; // Ensure you have this image in your assets folder
import { Helmet } from 'react-helmet-async';

function HowTo() {
  const navigate = useNavigate();

  const tutorials = [
    {
      title: 'How to Fix a Broken Screen',
      description: 'Step-by-step guide to fixing a broken screen on your laptop.',
      link: '/how-to/fix-broken-screen',
      icon: <FaLaptop className="mb-4 text-5xl text-blue-500" />,
    },
    {
      title: 'How to Know That Your Computer Has a Virus',
      description: 'Learn how to identify if your computer is infected with a virus.',
      link: '/how-to/know-your-computer-has-virus',
      icon: <FaBug className="mb-4 text-5xl text-green-500" />,
    },
    {
      title: 'How to Set Up a Network',
      description: 'Instructions for setting up a secure and efficient network at home or office.',
      link: '/how-to/setup-network',
      icon: <FaNetworkWired className="mb-4 text-5xl text-purple-500" />,
    },
    {
      title: 'How to Recover Lost Data',
      description: 'Steps to recover lost or corrupted data from your devices.',
      link: '/how-to/recover-data',
      icon: <FaDatabase className="mb-4 text-5xl text-orange-500" />,
    },
    {
      title: 'How to Use Remote Support',
      description: 'Guide to getting remote support for your computer issues.',
      link: '/how-to/use-remote-support',
      icon: <FaHandsHelping className="mb-4 text-5xl text-red-500" />,
    },
    {
      title: 'How to Improve Computer Performance',
      description: "Tips and tricks to optimize your computer's performance.",
      link: '/how-to/improve-performance',
      icon: <FaTools className="mb-4 text-5xl text-yellow-500" />,
    },
    {
      title: 'How to Be Safe Online',
      description: 'Guidelines to protect your personal information and ensure a secure online experience.',
      link: '/how-to/be-safe-online',
      icon: <FaLock className="mb-4 text-5xl text-pink-500" />,
    },
    {
      title: 'How to Buy a Computer',
      description: 'Tips to help you choose the right computer for your needs and budget.',
      link: '/how-to/buy-computer',
      icon: <FaShoppingCart className="mb-4 text-5xl text-teal-500" />,
    },
    {
      title: 'How to Set Up Email on Your Computer',
      description: 'Instructions for configuring your email client on your computer.',
      link: '/how-to/set-up-email',
      icon: <FaEnvelope className="mb-4 text-5xl text-indigo-500" />,
    },
  ];

  return (
    <div>
      <Helmet>
        <title>How To Guides | Best Computer Tech | Palm Bay & Melbourne, FL</title>
        <meta name="description" content="Explore step-by-step tech support and tutorials from Best Computer Tech. Learn how to fix, set up, and optimize your devices with our expert guides." />
        <meta name="keywords" content="how-to guides, tech tutorials, laptop repair, network setup, data recovery, remote support, computer performance, online safety, Palm Bay, Melbourne FL" />
        <link rel="canonical" href="https://bestcomputertec.com/how-to" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="How To Guides | Best Computer Tech | Palm Bay & Melbourne, FL" />
        <meta property="og:description" content="Get expert tech support with our How To Guides. Serving Palm Bay and Melbourne, FL, we offer step-by-step tutorials to help you fix, set up, and optimize your devices." />
        <meta property="og:url" content="https://bestcomputertec.com/how-to" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://bestcomputertec.com/images/how-to-guides.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How To Guides | Best Computer Tech" />
        <meta name="twitter:description" content="Find step-by-step tech tutorials on fixing, setting up, and optimizing your devices. Serving Palm Bay and Melbourne, FL." />
        <meta name="twitter:image" content="https://bestcomputertec.com/images/how-to-guides.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative py-20 text-white bg-gray-900 hero-section"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative z-10 mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold leading-tight">How To Guides</h1>
          <p className="mb-8 text-xl">Your source for step-by-step tech support and tutorials!</p>
        </div>
      </section>

      {/* Tutorials Section */}
      <div className="container p-8 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center">How To Guides</h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-center transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105"
            >
              {tutorial.icon}
              <h2 className="mb-4 text-2xl font-semibold">{tutorial.title}</h2>
              <p className="mb-4">{tutorial.description}</p>
              <Link to={tutorial.link} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 mt-16 text-center bg-blue-50">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold">Get in Touch with Us</h2>
          <p className="mb-8 text-lg text-gray-700">
            We'd love to hear from you! Whether you need tech support, want to book a service, or have questions, feel
            free to reach out.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate('/book-service')}
              className="px-6 py-3 font-semibold text-white bg-green-500 rounded-full hover:bg-green-700"
            >
              Book a Service
            </button>
            <button
              onClick={() => navigate('/subscribe')}
              className="px-6 py-3 font-semibold text-white bg-purple-500 rounded-full hover:bg-purple-700"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowTo;
