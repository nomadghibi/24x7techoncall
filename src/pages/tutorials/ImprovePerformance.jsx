import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaHeadset } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/howtoimprove-1152.jpg';

function ImprovePerformance() {
  const canonicalUrl = 'https://24x7techoncall.com/how-to/improve-performance';

  return (
    <div>
      <Helmet>
        <title>How to Improve Computer Performance | 24/7 Tech On Call</title>
        <meta name="description" content="Learn practical ways to improve computer speed and stability, including cleanup, startup optimization, updates, and hardware upgrades." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Improve Computer Performance | 24/7 Tech On Call" />
        <meta property="og:description" content="A straightforward optimization checklist to speed up and stabilize your computer." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Improve Computer Performance | 24/7 Tech On Call" />
        <meta name="twitter:description" content="Use these steps to improve startup, speed, and overall system performance." />
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
            <span className="text-gray-300">Improve Computer Performance</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">How to Improve Computer Performance</h1>
        </div>
      </section>

      {/* Article */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <Link to="/how-to" className="inline-flex items-center gap-2 text-cyan-500 hover:text-gray-700 font-medium mb-8 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to How To Guides
        </Link>

        <p className="text-lg text-gray-600 mb-10">
          Improving computer performance can help you work more efficiently and enjoy a smoother user experience. Follow these steps to optimize your computer's performance:
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 1: Clean Up Your Hard Drive</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Remove unnecessary files and programs.</li>
              <li>Empty the Recycle Bin regularly.</li>
              <li>Use disk cleanup tools to remove temporary files and system cache.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 2: Manage Startup Programs</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Open Task Manager (Ctrl+Shift+Esc) and go to the Startup tab.</li>
              <li>Disable programs that you don't need to start automatically when your computer boots up.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 3: Update Your Software</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Ensure your operating system and all software are up to date.</li>
              <li>Install updates and patches regularly to improve performance and security.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 4: Upgrade Your Hardware</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Consider adding more RAM to your computer.</li>
              <li>Upgrade to a solid-state drive (SSD) for faster data access and boot times.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 5: Run Regular Maintenance</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Run antivirus scans to remove malware and viruses.</li>
              <li>Defragment your hard drive if you're using a traditional HDD.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-amber-500 pl-4">Additional Tips</h2>
            <ul className="space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-amber-500">
              <li>Keep your computer's cooling system clean and dust-free to prevent overheating.</li>
              <li>Restart your computer regularly to clear memory and close unnecessary processes.</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-gray-600">
          By following these steps, you can significantly improve your computer's performance and ensure it runs smoothly.
        </p>
      </article>

      {/* CTA */}
      <section className="bg-gray-900 border-t-4 border-cyan-500 py-14 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FaHeadset className="mx-auto text-4xl text-cyan-300 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Need a Performance Tune-Up?</h2>
          <p className="text-cyan-100 mb-6">
            Still running slow? Our technicians nationwide &amp; Melbourne can diagnose and fix performance issues — including RAM upgrades and SSD installations.
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

export default ImprovePerformance;
