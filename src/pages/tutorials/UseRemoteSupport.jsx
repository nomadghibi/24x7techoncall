import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaHeadset } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/remotetechsupport-1152.jpg';

function UseRemoteSupport() {
  const canonicalUrl = 'https://24x7techoncall.com/how-to/use-remote-support';

  return (
    <div>
      <Helmet>
        <title>How to Use Remote Support | 24x7 Tech On Call</title>
        <meta name="description" content="Follow this guide to securely use remote support for computer troubleshooting and technical help." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Use Remote Support | 24x7 Tech On Call" />
        <meta property="og:description" content="Step-by-step instructions for starting and safely managing a remote support session." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Use Remote Support | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Set up and use remote support securely with this practical guide." />
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
            <span className="text-gray-300">Use Remote Support</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">How to Use Remote Support</h1>
        </div>
      </section>

      {/* Article */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <Link to="/how-to" className="inline-flex items-center gap-2 text-cyan-500 hover:text-gray-700 font-medium mb-8 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to How To Guides
        </Link>

        <p className="text-lg text-gray-600 mb-10">
          Follow these steps to get remote support for your computer issues using AeroAdmin:
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 1: Download AeroAdmin</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Go to the AeroAdmin website: <a href="https://www.aeroadmin.com" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">www.aeroadmin.com</a></li>
              <li>Click on the "Download" button to download the AeroAdmin application.</li>
              <li>Once the download is complete, open the AeroAdmin application. No installation is required.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 2: Share Your ID</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Open AeroAdmin on your computer.</li>
              <li>In the "Your ID" field, you will see a unique ID assigned to your computer.</li>
              <li>Share this ID with the support technician so they can connect to your computer.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 3: Allow Remote Control</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>When the support technician attempts to connect to your computer, you will see a connection request pop-up.</li>
              <li>Click "Accept" to allow the remote control session.</li>
              <li>You can monitor the remote session and end it at any time by clicking "Stop" in the AeroAdmin window.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 4: End the Remote Session</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Once the support technician has resolved your issue, they will end the remote session.</li>
              <li>If you need to end the session yourself, click the "Stop" button in AeroAdmin.</li>
              <li>Close the AeroAdmin application when the session is complete.</li>
            </ol>
          </div>

          <p className="text-gray-600">
            Using AeroAdmin for remote support is a secure and efficient way to get help with your computer issues without the need for an in-person visit.
          </p>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-amber-500 pl-4">Security Tips</h2>
            <ul className="space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-amber-500">
              <li>Only share your AeroAdmin ID with trusted support technicians.</li>
              <li>Monitor the remote session to ensure no unauthorized actions are taken.</li>
              <li>End the remote session immediately if you suspect any malicious activity.</li>
            </ul>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-gray-900 border-t-4 border-cyan-500 py-14 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FaHeadset className="mx-auto text-4xl text-cyan-300 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Ready for Remote Support?</h2>
          <p className="text-cyan-100 mb-6">
            Our certified technicians are available to connect remotely and solve your computer issues — fast, secure, and hassle-free.
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

export default UseRemoteSupport;
