import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaLaptop, FaBug, FaNetworkWired, FaDatabase,
  FaHandsHelping, FaTools, FaLock, FaEnvelope,
  FaArrowRight, FaHeadset, FaPhoneAlt,
} from 'react-icons/fa';
import heroImage from '../assets/optimized-hero/herohowtobesafe-1152.jpg';
import { Helmet } from 'react-helmet-async';

const tutorials = [
  {
    title: 'How to Fix a Broken Screen',
    description: 'Step-by-step guide to replacing a broken laptop screen safely and correctly.',
    link: '/how-to/fix-broken-screen',
    icon: FaLaptop,
    bg: 'bg-blue-50',
    color: 'text-blue-500',
    border: 'group-hover:border-blue-300',
  },
  {
    title: 'How to Know Your Computer Has a Virus',
    description: 'Learn to identify malware symptoms and take immediate protective steps.',
    link: '/how-to/know-your-computer-has-virus',
    icon: FaBug,
    bg: 'bg-green-50',
    color: 'text-green-500',
    border: 'group-hover:border-green-300',
  },
  {
    title: 'How to Set Up a Network',
    description: 'Instructions for setting up a secure and efficient network at home or office.',
    link: '/how-to/setup-network',
    icon: FaNetworkWired,
    bg: 'bg-purple-50',
    color: 'text-purple-500',
    border: 'group-hover:border-purple-300',
  },
  {
    title: 'How to Recover Lost Data',
    description: 'Steps to recover lost or corrupted data from your devices with the right tools.',
    link: '/how-to/recover-data',
    icon: FaDatabase,
    bg: 'bg-orange-50',
    color: 'text-orange-500',
    border: 'group-hover:border-orange-300',
  },
  {
    title: 'How to Use Remote Support',
    description: 'Guide to getting secure remote support for your computer issues using AeroAdmin.',
    link: '/how-to/use-remote-support',
    icon: FaHandsHelping,
    bg: 'bg-red-50',
    color: 'text-red-500',
    border: 'group-hover:border-red-300',
  },
  {
    title: 'How to Improve Computer Performance',
    description: "Tips and tricks to optimize your computer's speed and stability.",
    link: '/how-to/improve-performance',
    icon: FaTools,
    bg: 'bg-yellow-50',
    color: 'text-yellow-500',
    border: 'group-hover:border-yellow-300',
  },
  {
    title: 'How to Be Safe Online',
    description: 'Guidelines to protect your personal information and ensure a secure online experience.',
    link: '/how-to/be-safe-online',
    icon: FaLock,
    bg: 'bg-pink-50',
    color: 'text-pink-500',
    border: 'group-hover:border-pink-300',
  },
  {
    title: 'How to Set Up Email on Your Computer',
    description: 'Instructions for configuring your email client with the correct server settings.',
    link: '/how-to/set-up-email',
    icon: FaEnvelope,
    bg: 'bg-indigo-50',
    color: 'text-indigo-500',
    border: 'group-hover:border-indigo-300',
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

      {/* ── Hero ── */}
      <section
        className="relative min-h-[400px] flex items-end text-white"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/55 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-cyan-300 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">How To</span>
          </nav>
          <span className="inline-block bg-cyan-500 text-gray-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Free Expert Resources
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">How To Guides</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">
            Step-by-step tutorials to help you fix, optimize, and protect your devices — from our local IT experts in Brevard County, FL.
          </p>
          <a
            href="tel:3219535199"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold rounded-full transition-colors shadow-lg"
          >
            <FaPhoneAlt className="w-4 h-4" /> Need Help? Call (321) 953-5199
          </a>
        </div>
      </section>

      {/* ── Tutorials Grid ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold uppercase tracking-widest text-sm mb-2">Browse Topics</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Choose a Tutorial</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Free, expert-written guides to help you solve common tech problems on your own.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tutorials.map((tutorial, index) => {
              const Icon = tutorial.icon;
              return (
                <Link
                  key={index}
                  to={tutorial.link}
                  className={`group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 ${tutorial.border} hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden`}
                >
                  <div className={`p-7 flex items-center justify-center ${tutorial.bg}`}>
                    <Icon className={`text-4xl ${tutorial.color}`} />
                  </div>
                  <div className="flex flex-col flex-grow p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors leading-snug">
                      {tutorial.title}
                    </h3>
                    <p className="text-sm text-gray-500 flex-grow leading-relaxed">{tutorial.description}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-cyan-500 text-sm font-semibold">
                      Read Guide
                      <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-900 border-t-4 border-cyan-500 py-16 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-5">
            <FaHeadset className="text-3xl text-cyan-400" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-3">We're Here to Help</p>
          <h2 className="text-3xl font-bold mb-3">Still Need Help?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Our local IT experts in Palm Bay &amp; Melbourne are ready to assist — in person, remotely, or on-site.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold px-7 py-3 rounded-full transition-colors shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/subscribe"
              className="border-2 border-white/30 text-white font-bold px-7 py-3 rounded-full hover:bg-white/10 transition-colors"
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
