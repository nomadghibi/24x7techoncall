import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaHeadset } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/howtoemail-1152.jpg';

function SetUpEmail() {
  const canonicalUrl = 'https://24x7techoncall.com/how-to/set-up-email';

  return (
    <div>
      <Helmet>
        <title>How to Set Up Email on Your Computer | 24x7 Tech On Call</title>
        <meta name="description" content="Step-by-step instructions to set up email on your computer using Outlook, Thunderbird, Apple Mail, and other clients." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Set Up Email on Your Computer | 24x7 Tech On Call" />
        <meta property="og:description" content="Configure incoming and outgoing mail settings correctly for a reliable email setup." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Set Up Email on Your Computer | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Set up email clients with the right IMAP/POP/SMTP settings in minutes." />
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
            <span className="text-gray-300">Set Up Email</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">How to Set Up Email on Your Computer</h1>
        </div>
      </section>

      {/* Article */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <Link to="/how-to" className="inline-flex items-center gap-2 text-cyan-500 hover:text-gray-700 font-medium mb-8 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to How To Guides
        </Link>

        <p className="text-lg text-gray-600 mb-10">
          Setting up an email client on your computer allows you to manage your emails efficiently. Follow these steps to configure your email client:
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 1: Choose an Email Client</h2>
            <ul className="space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-cyan-500">
              <li>Popular email clients include Microsoft Outlook, Mozilla Thunderbird, Apple Mail, and Windows Mail.</li>
              <li>Download and install your preferred email client if it's not already installed.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 2: Gather Your Email Account Information</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>You will need your email address, password, and server settings (incoming and outgoing mail server addresses).</li>
              <li>These settings can typically be found on your email provider's website or by contacting their support.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 3: Open Your Email Client</h2>
            <ul className="space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-cyan-500">
              <li>Open the email client you installed or the default email app on your computer.</li>
              <li>Look for an option to add a new account, usually found in the settings or preferences menu.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 4: Enter Your Email Account Information</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Enter your email address and password when prompted.</li>
              <li>If the client cannot automatically detect the server settings, you may need to enter them manually:
                <ul className="mt-2 ml-4 space-y-1 list-disc list-outside pl-4 text-gray-600 marker:text-gray-400">
                  <li>Incoming mail server (IMAP or POP3) and port number</li>
                  <li>Outgoing mail server (SMTP) and port number</li>
                  <li>Encryption method (SSL/TLS) for incoming and outgoing mail</li>
                </ul>
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 5: Test the Configuration</h2>
            <ul className="space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-cyan-500">
              <li>Send a test email to ensure the configuration is correct and you can send and receive emails.</li>
              <li>Check for any error messages and adjust the settings if necessary.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 6: Customize Your Email Client</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Set up your signature, folders, and email filters.</li>
              <li>Customize the appearance and layout to your preference.</li>
            </ol>
          </div>
        </div>

        <p className="mt-8 text-gray-600">
          By following these steps, you can set up your email client on your computer and manage your emails efficiently. Enjoy a streamlined email experience!
        </p>
      </article>

      {/* CTA */}
      <section className="bg-gray-900 border-t-4 border-cyan-500 py-14 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FaHeadset className="mx-auto text-4xl text-cyan-300 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Need Help Setting Up Email?</h2>
          <p className="text-cyan-100 mb-6">
            Our local IT experts nationwide &amp; Melbourne can configure your email client, migrate accounts, or troubleshoot any mail issues quickly.
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

export default SetUpEmail;
