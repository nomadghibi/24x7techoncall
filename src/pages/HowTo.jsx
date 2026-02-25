import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaLaptop, FaBug, FaNetworkWired, FaDatabase,
  FaHandsHelping, FaTools, FaLock, FaEnvelope,
  FaChevronRight, FaHeadset,
} from 'react-icons/fa';
import heroImage from '../assets/optimized-hero/herohowtobesafe-1152.jpg';
import { Helmet } from 'react-helmet-async';

const tutorials = [
  {
    title: 'How to Fix a Broken Screen',
    description: 'Step-by-step guide to replacing a broken laptop screen safely and correctly.',
    link: '/how-to/fix-broken-screen',
    icon: <FaLaptop />,
    bg: 'bg-blue-50',
    color: 'text-blue-600',
  },
  {
    title: 'How to Know Your Computer Has a Virus',
    description: 'Learn to identify malware symptoms and take immediate protective steps.',
    link: '/how-to/know-your-computer-has-virus',
    icon: <FaBug />,
    bg: 'bg-green-50',
    color: 'text-green-600',
  },
  {
    title: 'How to Set Up a Network',
    description: 'Instructions for setting up a secure and efficient network at home or office.',
    link: '/how-to/setup-network',
    icon: <FaNetworkWired />,
    bg: 'bg-purple-50',
    color: 'text-purple-600',
  },
  {
    title: 'How to Recover Lost Data',
    description: 'Steps to recover lost or corrupted data from your devices with the right tools.',
    link: '/how-to/recover-data',
    icon: <FaDatabase />,
    bg: 'bg-orange-50',
    color: 'text-orange-600',
  },
  {
    title: 'How to Use Remote Support',
    description: 'Guide to getting secure remote support for your computer issues using AeroAdmin.',
    link: '/how-to/use-remote-support',
    icon: <FaHandsHelping />,
    bg: 'bg-red-50',
    color: 'text-red-600',
  },
  {
    title: 'How to Improve Computer Performance',
    description: "Tips and tricks to optimize your computer's speed and stability.",
    link: '/how-to/improve-performance',
    icon: <FaTools />,
    bg: 'bg-yellow-50',
    color: 'text-yellow-600',
  },
  {
    title: 'How to Be Safe Online',
    description: 'Guidelines to protect your personal information and ensure a secure online experience.',
    link: '/how-to/be-safe-online',
    icon: <FaLock />,
    bg: 'bg-pink-50',
    color: 'text-pink-600',
  },
  {
    title: 'How to Set Up Email on Your Computer',
    description: 'Instructions for configuring your email client with the correct server settings.',
    link: '/how-to/set-up-email',
    icon: <FaEnvelope />,
    bg: 'bg-indigo-50',
    color: 'text-indigo-600',
  },
];

function HowTo() {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://bestcomputertec.com' + (heroImage || '');

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
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How To Guides | Best Computer Tech" />
        <meta name="twitter:description" content="Find step-by-step tech tutorials on fixing, setting up, and optimizing your devices. Serving Palm Bay and Melbourne, FL." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* Hero */}
      <section
        className="relative min-h-[360px] flex items-center text-white"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/85 via-blue-950/75 to-gray-950/85"></div>
        <div className="relative z-10 container mx-auto px-6 py-16 max-w-4xl text-center">
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Free Expert Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">How To Guides</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Step-by-step tutorials to help you fix, optimize, and protect your devices — from our local IT experts in Brevard County, FL.
          </p>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">Browse Topics</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Choose a Tutorial</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tutorials.map((tutorial, index) => (
              <Link
                key={index}
                to={tutorial.link}
                className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 overflow-hidden"
              >
                <div className={`p-7 flex items-center justify-center ${tutorial.bg}`}>
                  <span className={`text-4xl ${tutorial.color}`}>{tutorial.icon}</span>
                </div>
                <div className="flex flex-col flex-grow p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                    {tutorial.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex-grow leading-relaxed">{tutorial.description}</p>
                  <div className="mt-4 flex items-center text-blue-600 text-sm font-semibold">
                    Read Guide
                    <FaChevronRight className="ml-1 text-xs group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-16 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FaHeadset className="mx-auto text-5xl text-blue-300 mb-5" />
          <h2 className="text-3xl font-bold mb-3">Still Need Help?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Our local IT experts in Palm Bay &amp; Melbourne are ready to assist — in person, remotely, or on-site.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-900 font-bold px-7 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/subscribe"
              className="border-2 border-white text-white font-bold px-7 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowTo;
