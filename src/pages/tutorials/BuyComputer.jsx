import React from 'react';
import HeroSection from '../../components/HeroSection';
import GoBackButtonWithArrow from '../../components/GoBackButtonWithArrow';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import heroImage from '../../assets/howtobuycomputer.webp'; // Adjust the path according to your file structure

function BuyComputer() {
  const navigate = useNavigate();
  const canonicalUrl = 'https://bestcomputertec.com/how-to/buy-computer';

  const handleContactUs = () => {
    navigate('/contact'); // Adjust the path to your contact or booking page
  };

  return (
    <div>
      <Helmet>
        <title>How to Buy a Computer | Best Computer Tech</title>
        <meta
          name="description"
          content="Use this buying guide to choose the right computer for your needs, budget, and long-term performance goals."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Buy a Computer | Best Computer Tech" />
        <meta
          property="og:description"
          content="A practical checklist for selecting the best desktop or laptop based on use case and budget."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Buy a Computer | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Compare specs, budget, and future-proofing with this computer buying guide."
        />
      </Helmet>
      <HeroSection title="How to Buy a Computer" image={heroImage} />
      <div className="container p-8 mx-auto">
        <GoBackButtonWithArrow />
        <h1 className="mb-4 text-4xl font-bold">How to Buy a Computer</h1>
        <p className="mb-4">Buying a new computer can be a significant investment. Follow these tips to choose the right computer for your needs and budget:</p>

        <h2 className="mb-4 text-3xl font-semibold">Step 1: Determine Your Needs</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Identify what you will use the computer for (e.g., gaming, work, general use).</li>
          <li>Consider the software and hardware requirements for your intended use.</li>
          <li>Decide between a desktop and a laptop based on your mobility needs.</li>
        </ul>

        <h2 className="mb-4 text-3xl font-semibold">Step 2: Set Your Budget</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Determine how much you are willing to spend on a new computer.</li>
          <li>Keep in mind additional costs such as peripherals (mouse, keyboard) and software.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 3: Research Computer Types</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Learn about different types of computers: desktops, laptops, all-in-one PCs, and tablets.</li>
          <li>Consider the pros and cons of each type based on your needs.</li>
        </ul>

        <h2 className="mb-4 text-3xl font-semibold">Step 4: Compare Specifications</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Look at key specifications such as processor (CPU), memory (RAM), storage (HDD/SSD), and graphics card (GPU).</li>
          <li>Compare different models and brands to find the best fit for your needs.</li>
          <li>Read reviews and user feedback to get an idea of performance and reliability.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 5: Consider Future-Proofing</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Think about your future needs and whether the computer can be upgraded (e.g., adding more RAM or storage).</li>
          <li>Choose a model with a bit more power than you currently need to ensure it lasts longer.</li>
        </ul>

        <h2 className="mb-4 text-3xl font-semibold">Step 6: Look for Deals and Warranties</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Shop around for the best deals and discounts on computers.</li>
          <li>Check if the manufacturer or retailer offers a warranty and what it covers.</li>
          <li>Consider purchasing an extended warranty for added protection.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 7: Make Your Purchase</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Once you have chosen the right computer, make your purchase from a reputable retailer.</li>
          <li>Ensure you receive all necessary accessories and documentation.</li>
          <li>Set up your new computer following the manufacturer's instructions.</li>
        </ul>

        <p className="mb-4">By following these steps, you can make an informed decision and choose a computer that meets your needs and budget. Happy shopping!</p>

        <div className="text-center">
          <p className="mb-4 text-lg font-semibold text-gray-700">If you need professional assistance with buying a computer, we're here to help!</p>
          <button 
            onClick={handleContactUs} 
            className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyComputer;

