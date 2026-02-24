// src/pages/Pricing.jsx

import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import heroImage from '../assets/optimized-hero/priceimage-1152.jpg'; // Make sure you have this image in your assets folder

const pricingPlans = [
  {
    title: 'On-Demand Care Remote',
    features: [
      '1 PC Full Service and support',
      'Unlimited fixes',
      'Windows or Mac Support',
      'Slow Start-Up & Shutdown Issues',
      'Make your computer run faster',
      'Virus/Spyware Removal',
      'Speed up your computer or mobile device',
      'System Tune-Up and Optimization',
      'Windows personalization',
      'Web browser issues',
      'Updates OS',
      'Complete Tune Up',
      'Software installation and removal',
      'Internet and email connection issues',
      'Windows crashes',
      '30 days warranty'
    ],
    price: '$99',
    buttonText: 'Order Now',
  },
  {
    title: 'Annual Subscription Plan',
    features: [
      'Windows and Mac Support',
      'Virus Removal as you needed',
      'Speed up your PC',
      'Faster startup',
      'Routine Check-ups',
      'Unlimited phone support',
      'Data back-up',
      '24×7 365 remote Tech Support',
      '24/7 Email and Chat Support',
      'Anti-Virus Installation and Maintenance',
      'Routine Check-ups',
      'Unlimited phone support',
      'Computer tune up as you needed',
      'Any brand computer',
      '1 PC',
      '$50 Setup fee first time'
    ],
    price: '$199',
    buttonText: 'Order Now',
  },
  {
    title: 'Standard Rate Onsite',
    features: [
      'Our Tech come to you',
      'Any computer problems',
      'Windows or Mac Support',
      'Any brands, any problem',
      'Virus Removal',
      'Smartphone, Tablet, and Smart Home',
      'Printer problem we can fix',
      'Internet problem we can fix',
      'Router setup',
      'Network setup',
      'Server setup',
      'Training',
      '1st hr $95 every 1/2 hr after at $35',
      'and more'
    ],
    price: '$95/hr',
    buttonText: 'Order Now',
  },
];

function Pricing() {
  const navigate = useNavigate();
  const canonicalUrl = 'https://bestcomputertec.com/pricing';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://bestcomputertec.com${heroImage || ''}`;

  const handleOrderClick = (planTitle) => {
    navigate('/checkout', { state: { service: { title: planTitle, price: planTitle === 'Standard Rate Onsite' ? 95 : planTitle === 'Annual Subscription Plan' ? 199 : 99 } } });
  };

  return (
    <div>
      <Helmet>
        <title>Pricing Plans | Best Computer Tech | Palm Bay & Melbourne, FL</title>
        <meta
          name="description"
          content="View transparent pricing plans for remote and onsite computer support services from Best Computer Tech."
        />
        <meta
          name="keywords"
          content="computer service pricing Palm Bay, onsite tech support rates Melbourne FL, remote tech support plans"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Pricing Plans | Best Computer Tech" />
        <meta
          property="og:description"
          content="Compare our remote and onsite support plans with clear, affordable pricing."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing Plans | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Explore Best Computer Tech pricing for residential and business support."
        />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-64 mb-12 bg-gray-900 bg-center bg-cover" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Our Pricing Plans</h1>
          <p className="text-xl">Affordable and transparent pricing for all your tech needs</p>
        </div>
      </section>

      <div className="container p-8 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center">Residential Remote and Onsite Computer Services</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold text-center">{plan.title}</h2>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <p className="mb-4 text-3xl font-bold">{plan.price}</p>
                <button
                  onClick={() => handleOrderClick(plan.title)}
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
