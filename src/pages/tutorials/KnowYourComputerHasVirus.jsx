import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaHeadset } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/computerhasviures-1152.jpg';

function KnowYourComputerHasVirus() {
  const canonicalUrl = 'https://24x7techoncall.com/how-to/know-your-computer-has-virus';

  return (
    <div>
      <Helmet>
        <title>How to Know Your Computer Has a Virus | 24x7 Tech On Call</title>
        <meta name="description" content="Learn the common signs of computer viruses and what to do next with this quick guide from 24x7 Tech On Call." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Know Your Computer Has a Virus | 24x7 Tech On Call" />
        <meta property="og:description" content="A practical checklist to identify malware symptoms and protect your device." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Know Your Computer Has a Virus | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Identify virus symptoms and take immediate protective steps." />
        <meta name="twitter:image" content={heroImage} />
      </Helmet>

      {/* Hero */}
      <section
        className="relative min-h-[320px] flex items-end text-white"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-cyan-300 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <Link to="/how-to" className="hover:text-white transition-colors">How To</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Know Your Computer Has a Virus</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">How to Know Your Computer Has a Virus</h1>
        </div>
      </section>

      {/* Article */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <Link to="/how-to" className="inline-flex items-center gap-2 text-cyan-500 hover:text-gray-700 font-medium mb-8 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to How To Guides
        </Link>

        <p className="text-lg text-gray-600 mb-10">
          Here are the steps to know if your computer has a virus:
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-amber-500 pl-4">Signs of a Virus</h2>
            <ul className="mb-4 space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-amber-500">
              <li>Slow performance</li>
              <li>Unexpected pop-ups</li>
              <li>Programs starting automatically</li>
              <li>Unusual error messages</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 1: Run a Virus Scan</h2>
            <p className="text-gray-700">Use your antivirus software to run a full system scan.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 2: Check for Unusual Activity</h2>
            <p className="text-gray-700">Open the Task Manager or Activity Monitor to check for unfamiliar processes running on your computer.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 3: Update Your Software</h2>
            <p className="text-gray-700">Ensure your operating system and all software are up to date to prevent vulnerabilities.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 4: Remove Suspicious Programs</h2>
            <p className="text-gray-700">Uninstall any programs that you don't recognize or that are behaving suspiciously.</p>
          </div>
        </div>

        <p className="mt-8 text-gray-600">
          If you find signs of a virus, follow these steps to remove it and keep your computer protected.
        </p>
      </article>

      {/* CTA */}
      <section className="bg-gray-900 border-t-4 border-cyan-500 py-14 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FaHeadset className="mx-auto text-4xl text-cyan-300 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Need Professional Virus Removal?</h2>
          <p className="text-cyan-100 mb-6">
            Worried your computer is infected? Our experts nationwide &amp; Melbourne provide fast, thorough malware and virus removal.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-50 transition-colors shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default KnowYourComputerHasVirus;
