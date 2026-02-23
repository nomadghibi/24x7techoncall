import React from 'react';
import HeroSection from '../../components/HeroSection';
import GoBackButtonWithArrow from '../../components/GoBackButtonWithArrow';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import heroImage from '../../assets/howtoemail.webp'; // Adjust the path according to your file structure

function SetUpEmail() {
  const navigate = useNavigate();
  const canonicalUrl = 'https://bestcomputertec.com/how-to/set-up-email';

  const handleContactUs = () => {
    navigate('/contact'); // Adjust the path to your contact or booking page
  };

  return (
    <div>
      <Helmet>
        <title>How to Set Up Email on Your Computer | Best Computer Tech</title>
        <meta
          name="description"
          content="Step-by-step instructions to set up email on your computer using Outlook, Thunderbird, Apple Mail, and other clients."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Set Up Email on Your Computer | Best Computer Tech" />
        <meta
          property="og:description"
          content="Configure incoming and outgoing mail settings correctly for a reliable email setup."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Set Up Email on Your Computer | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Set up email clients with the right IMAP/POP/SMTP settings in minutes."
        />
        <meta name="twitter:image" content={heroImage} />
      </Helmet>
      <HeroSection title="How to Set Up Email on Your Computer" image={heroImage} />
      <div className="container p-8 mx-auto">
        <GoBackButtonWithArrow />
        <h1 className="mb-4 text-4xl font-bold">How to Set Up Email on Your Computer</h1>
        <p className="mb-4">Setting up an email client on your computer allows you to manage your emails efficiently. Follow these steps to configure your email client:</p>

        <h2 className="mb-4 text-3xl font-semibold">Step 1: Choose an Email Client</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Popular email clients include Microsoft Outlook, Mozilla Thunderbird, Apple Mail, and Windows Mail.</li>
          <li>Download and install your preferred email client if it’s not already installed.</li>
        </ul>

        <h2 className="mb-4 text-3xl font-semibold">Step 2: Gather Your Email Account Information</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>You will need your email address, password, and server settings (incoming and outgoing mail server addresses).</li>
          <li>These settings can typically be found on your email provider’s website or by contacting their support.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 3: Open Your Email Client</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Open the email client you installed or the default email app on your computer.</li>
          <li>Look for an option to add a new account, usually found in the settings or preferences menu.</li>
        </ul>

        <h2 className="mb-4 text-3xl font-semibold">Step 4: Enter Your Email Account Information</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Enter your email address and password when prompted.</li>
          <li>If the client cannot automatically detect the server settings, you may need to enter them manually:</li>
          <ul className="mb-4 ml-4 list-disc list-inside">
            <li>Incoming mail server (IMAP or POP3) and port number</li>
            <li>Outgoing mail server (SMTP) and port number</li>
            <li>Encryption method (SSL/TLS) for incoming and outgoing mail</li>
          </ul>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 5: Test the Configuration</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Send a test email to ensure the configuration is correct and you can send and receive emails.</li>
          <li>Check for any error messages and adjust the settings if necessary.</li>
        </ul>

        <h2 className="mb-4 text-3xl font-semibold">Step 6: Customize Your Email Client</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Set up your signature, folders, and email filters.</li>
          <li>Customize the appearance and layout to your preference.</li>
        </ol>

        <p className="mb-4">By following these steps, you can set up your email client on your computer and manage your emails efficiently. Enjoy a streamlined email experience!</p>

        <div className="text-center">
          <p className="mb-4 text-lg font-semibold text-gray-700">If you need professional assistance with setting up your email client, we're here to help!</p>
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

export default SetUpEmail;
