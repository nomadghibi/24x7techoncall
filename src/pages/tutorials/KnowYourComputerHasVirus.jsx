import React from 'react';
import HeroSection from '../../components/HeroSection';
import GoBackButtonWithArrow from '../../components/GoBackButtonWithArrow';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import heroImage from '../../assets/computerhasviures.webp'; // Adjust the path according to your file structure

function KnowYourComputerHasVirus() {
  const navigate = useNavigate();
  const canonicalUrl = 'https://bestcomputertec.com/how-to/know-your-computer-has-virus';

  const handleContactUs = () => {
    navigate('/contact'); // Adjust the path to your contact or booking page
  };

  return (
    <div>
      <Helmet>
        <title>How to Know Your Computer Has a Virus | Best Computer Tech</title>
        <meta
          name="description"
          content="Learn the common signs of computer viruses and what to do next with this quick guide from Best Computer Tech."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Know Your Computer Has a Virus | Best Computer Tech" />
        <meta
          property="og:description"
          content="A practical checklist to identify malware symptoms and protect your device."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Know Your Computer Has a Virus | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Identify virus symptoms and take immediate protective steps."
        />
        <meta name="twitter:image" content={heroImage} />
      </Helmet>
      <HeroSection title="How to Know Your Computer Has a Virus" image={heroImage} />
      <div className="container p-8 mx-auto">
        <GoBackButtonWithArrow />
        <h1 className="mb-4 text-4xl font-bold">How to Know Your Computer Has a Virus</h1>
        <p className="mb-4">Here are the steps to know if your computer has a virus:</p>

        <h2 className="mb-4 text-3xl font-semibold">Signs of a Virus</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Slow performance</li>
          <li>Unexpected pop-ups</li>
          <li>Programs starting automatically</li>
          <li>Unusual error messages</li>
        </ul>

        <h2 className="mb-4 text-3xl font-semibold">Step 1: Run a Virus Scan</h2>
        <p className="mb-4">Use your antivirus software to run a full system scan.</p>

        <h2 className="mb-4 text-3xl font-semibold">Step 2: Check for Unusual Activity</h2>
        <p className="mb-4">Open the Task Manager or Activity Monitor to check for unfamiliar processes running on your computer.</p>

        <h2 className="mb-4 text-3xl font-semibold">Step 3: Update Your Software</h2>
        <p className="mb-4">Ensure your operating system and all software are up to date to prevent vulnerabilities.</p>

        <h2 className="mb-4 text-3xl font-semibold">Step 4: Remove Suspicious Programs</h2>
        <p className="mb-4">Uninstall any programs that you don't recognize or that are behaving suspiciously.</p>

        <p className="mb-4">If you find signs of a virus, follow these steps to remove it and keep your computer protected.</p>

        <div className="text-center">
          <p className="mb-4 text-lg font-semibold text-gray-700">If you need professional assistance with removing a virus from your computer, we're here to help!</p>
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

export default KnowYourComputerHasVirus;
