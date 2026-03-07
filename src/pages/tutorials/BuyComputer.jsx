import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaHeadset } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/howtobuycomputer-1152.jpg';

function BuyComputer() {
  const canonicalUrl = 'https://24x7techoncall.com/how-to/buy-computer';

  return (
    <div>
      <Helmet>
        <title>How to Buy a Computer | 24x7 Tech On Call</title>
        <meta name="description" content="Use this buying guide to choose the right computer for your needs, budget, and long-term performance goals." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Buy a Computer | 24x7 Tech On Call" />
        <meta property="og:description" content="A practical checklist for selecting the best desktop or laptop based on use case and budget." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Buy a Computer | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Compare specs, budget, and future-proofing with this computer buying guide." />
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
            <span className="text-gray-300">Buy a Computer</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">How to Buy a Computer</h1>
        </div>
      </section>

      {/* Article */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <Link to="/how-to" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-medium mb-8 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to How To Guides
        </Link>

        <p className="text-lg text-gray-600 mb-10">
          Buying a new computer can be a significant investment. Follow these tips to choose the right computer for your needs and budget:
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 1: Determine Your Needs</h2>
            <ul className="space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-cyan-500">
              <li>Identify what you will use the computer for (e.g., gaming, work, general use).</li>
              <li>Consider the software and hardware requirements for your intended use.</li>
              <li>Decide between a desktop and a laptop based on your mobility needs.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 2: Set Your Budget</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Determine how much you are willing to spend on a new computer.</li>
              <li>Keep in mind additional costs such as peripherals (mouse, keyboard) and software.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 3: Research Computer Types</h2>
            <ul className="space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-cyan-500">
              <li>Learn about different types of computers: desktops, laptops, all-in-one PCs, and tablets.</li>
              <li>Consider the pros and cons of each type based on your needs.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 4: Compare Specifications</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Look at key specifications such as processor (CPU), memory (RAM), storage (HDD/SSD), and graphics card (GPU).</li>
              <li>Compare different models and brands to find the best fit for your needs.</li>
              <li>Read reviews and user feedback to get an idea of performance and reliability.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 5: Consider Future-Proofing</h2>
            <ul className="space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-cyan-500">
              <li>Think about your future needs and whether the computer can be upgraded (e.g., adding more RAM or storage).</li>
              <li>Choose a model with a bit more power than you currently need to ensure it lasts longer.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 6: Look for Deals and Warranties</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Shop around for the best deals and discounts on computers.</li>
              <li>Check if the manufacturer or retailer offers a warranty and what it covers.</li>
              <li>Consider purchasing an extended warranty for added protection.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 7: Make Your Purchase</h2>
            <ul className="space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-cyan-500">
              <li>Once you have chosen the right computer, make your purchase from a reputable retailer.</li>
              <li>Ensure you receive all necessary accessories and documentation.</li>
              <li>Set up your new computer following the manufacturer's instructions.</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-gray-600">
          By following these steps, you can make an informed decision and choose a computer that meets your needs and budget. Happy shopping!
        </p>
      </article>

      {/* CTA */}
      <section className="bg-gray-900 border-t-4 border-cyan-500 py-14 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FaHeadset className="mx-auto text-4xl text-cyan-300 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Need Help Choosing a Computer?</h2>
          <p className="text-cyan-100 mb-6">
            Not sure which model is right for you? Our local IT advisors nationwide &amp; Melbourne can give you personalized recommendations for your budget and needs.
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

export default BuyComputer;
