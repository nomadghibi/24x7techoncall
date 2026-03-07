import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaHeadset } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/datarecovery-1152.jpg';

function RecoverData() {
  const canonicalUrl = 'https://24x7techoncall.com/how-to/recover-data';

  return (
    <div>
      <Helmet>
        <title>How to Recover Lost Data | 24/7 Tech On Call</title>
        <meta name="description" content="Learn practical steps to recover lost files safely and improve your chances of successful data recovery." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Recover Lost Data | 24/7 Tech On Call" />
        <meta property="og:description" content="A step-by-step recovery guide covering software tools, safe workflows, and backup tips." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Recover Lost Data | 24/7 Tech On Call" />
        <meta name="twitter:description" content="Recover deleted files with safer methods and avoid data overwrite." />
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
            <span className="text-gray-300">Recover Lost Data</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">How to Recover Lost Data</h1>
        </div>
      </section>

      {/* Article */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <Link to="/how-to" className="inline-flex items-center gap-2 text-cyan-500 hover:text-gray-700 font-medium mb-8 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to How To Guides
        </Link>

        <p className="text-lg text-gray-600 mb-10">
          Losing important data can be a stressful experience, but with the right tools and steps, you can often recover lost files. Follow these steps to recover lost data:
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 1: Stop Using the Affected Device</h2>
            <p className="text-gray-700">To prevent overwriting the lost data, stop using the device immediately until you begin the recovery process.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 2: Use Data Recovery Software</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Download and install reputable data recovery software such as Recuva, EaseUS Data Recovery, or Disk Drill.</li>
              <li>Run the software and follow the on-screen instructions to scan for recoverable files.</li>
              <li>Preview the files found by the software to ensure they are intact and can be recovered.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 3: Recover the Data</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Select the files you want to recover and choose a different location to save them (e.g., an external drive).</li>
              <li>Complete the recovery process and verify that the files are accessible and not corrupted.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 4: Backup Your Data</h2>
            <p className="text-gray-700">To avoid future data loss, regularly back up your important files to an external drive or cloud storage service.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-amber-500 pl-4">Tips for Successful Data Recovery</h2>
            <ul className="space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-amber-500">
              <li>Act quickly to increase the chances of successful recovery.</li>
              <li>Use reliable and reputable data recovery software.</li>
              <li>Avoid saving recovered files to the same drive where data loss occurred.</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-gray-600">
          By following these steps and tips, you can increase the likelihood of recovering lost data and safeguarding your important files in the future.
        </p>
      </article>

      {/* CTA */}
      <section className="bg-gray-900 border-t-4 border-cyan-500 py-14 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FaHeadset className="mx-auto text-4xl text-cyan-300 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Need Professional Data Recovery?</h2>
          <p className="text-cyan-100 mb-6">
            Lost critical files or dealing with a failing drive? Our data recovery specialists nationwide &amp; Melbourne can help retrieve what matters most.
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

export default RecoverData;
