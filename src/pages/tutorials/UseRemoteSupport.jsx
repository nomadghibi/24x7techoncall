import React from 'react';
import HeroSection from '../../components/HeroSection';
import GoBackButtonWithArrow from '../../components/GoBackButtonWithArrow';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import heroImage from '../../assets/optimized-hero/remotetechsupport-1152.jpg'; // Adjust the path according to your file structure

function UseRemoteSupport() {
  const navigate = useNavigate();
  const canonicalUrl = 'https://bestcomputertec.com/how-to/use-remote-support';

  const handleContactUs = () => {
    navigate('/contact'); // Adjust the path to your contact or booking page
  };

  return (
    <div>
      <Helmet>
        <title>How to Use Remote Support | Best Computer Tech</title>
        <meta
          name="description"
          content="Follow this guide to securely use remote support for computer troubleshooting and technical help."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Use Remote Support | Best Computer Tech" />
        <meta
          property="og:description"
          content="Step-by-step instructions for starting and safely managing a remote support session."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Use Remote Support | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Set up and use remote support securely with this practical guide."
        />
        <meta name="twitter:image" content={heroImage} />
      </Helmet>
      <HeroSection title="How to Use Remote Support" image={heroImage} />
      <div className="container p-8 mx-auto">
        <GoBackButtonWithArrow />
        <h1 className="mb-4 text-4xl font-bold">How to Use Remote Support with AeroAdmin</h1>
        <p className="mb-4">Follow these steps to get remote support for your computer issues using AeroAdmin:</p>

        <h2 className="mb-4 text-3xl font-semibold">Step 1: Download AeroAdmin</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Go to the AeroAdmin website: <a href="https://www.aeroadmin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.aeroadmin.com</a></li>
          <li>Click on the "Download" button to download the AeroAdmin application.</li>
          <li>Once the download is complete, open the AeroAdmin application. No installation is required.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 2: Share Your ID</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Open AeroAdmin on your computer.</li>
          <li>In the "Your ID" field, you will see a unique ID assigned to your computer.</li>
          <li>Share this ID with the support technician so they can connect to your computer.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 3: Allow Remote Control</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>When the support technician attempts to connect to your computer, you will see a connection request pop-up.</li>
          <li>Click "Accept" to allow the remote control session.</li>
          <li>You can monitor the remote session and end it at any time by clicking "Stop" in the AeroAdmin window.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 4: End the Remote Session</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Once the support technician has resolved your issue, they will end the remote session.</li>
          <li>If you need to end the session yourself, click the "Stop" button in AeroAdmin.</li>
          <li>Close the AeroAdmin application when the session is complete.</li>
        </ol>

        <p className="mb-4">Using AeroAdmin for remote support is a secure and efficient way to get help with your computer issues without the need for an in-person visit.</p>

        <h2 className="mb-4 text-3xl font-semibold">Security Tips</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Only share your AeroAdmin ID with trusted support technicians.</li>
          <li>Monitor the remote session to ensure no unauthorized actions are taken.</li>
          <li>End the remote session immediately if you suspect any malicious activity.</li>
        </ul>

        <div className="text-center">
          <p className="mb-4 text-lg font-semibold text-gray-700">If you need professional assistance with remote support, we're here to help!</p>
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

export default UseRemoteSupport;
