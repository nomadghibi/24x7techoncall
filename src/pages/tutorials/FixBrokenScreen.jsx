import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaHeadset } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/fixbrokenscreen-1152.jpg';

function FixBrokenScreen() {
  const canonicalUrl = 'https://24x7techoncall.com/how-to/fix-broken-screen';

  return (
    <div>
      <Helmet>
        <title>How to Fix a Broken Screen | 24x7 Tech On Call</title>
        <meta name="description" content="Learn how to fix a broken laptop screen with this step-by-step guide from 24x7 Tech On Call. Serving Nationwide, Florida." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Fix a Broken Screen | 24x7 Tech On Call" />
        <meta property="og:description" content="Step-by-step instructions to replace a broken laptop screen safely and correctly." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Fix a Broken Screen | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Follow this practical guide to replace a broken laptop screen." />
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
            <span className="text-gray-300">Fix a Broken Screen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">How to Fix a Broken Screen</h1>
        </div>
      </section>

      {/* Article */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <Link to="/how-to" className="inline-flex items-center gap-2 text-cyan-500 hover:text-gray-700 font-medium mb-8 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to How To Guides
        </Link>

        <p className="text-lg text-gray-600 mb-10">
          A broken laptop screen can be a frustrating problem, but with the right tools and some patience, you can fix it yourself. Follow these steps to replace your broken screen:
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 1: Gather Your Tools</h2>
            <ul className="mb-4 space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-cyan-500">
              <li>A small Phillips screwdriver</li>
              <li>A plastic pry tool or an old credit card</li>
              <li>A new replacement screen (ensure it matches your laptop model)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 2: Power Down and Disconnect</h2>
            <ol className="mb-4 space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Turn off your laptop and disconnect it from any power source.</li>
              <li>Remove the battery if possible to prevent any electrical issues during the repair.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 3: Remove the Bezel</h2>
            <ol className="mb-4 space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Use the plastic pry tool or an old credit card to carefully separate the bezel (the plastic frame) from the screen. Be gentle to avoid breaking the plastic clips.</li>
              <li>Work your way around the entire bezel until it comes off completely.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 4: Disconnect the Screen</h2>
            <ol className="mb-4 space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Locate the screws holding the screen in place and remove them using the Phillips screwdriver.</li>
              <li>Carefully tilt the screen forward to access the video cable on the back.</li>
              <li>Disconnect the video cable by gently pulling it out of the connector.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 5: Install the New Screen</h2>
            <ol className="mb-4 space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Take the new replacement screen and connect the video cable to the back.</li>
              <li>Carefully place the new screen into the laptop frame and secure it with the screws you removed earlier.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 6: Reattach the Bezel</h2>
            <ol className="mb-4 space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Snap the bezel back onto the laptop, ensuring all the clips are securely in place.</li>
              <li>Press around the edges to make sure the bezel is firmly attached.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 7: Test the New Screen</h2>
            <ol className="mb-4 space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Reconnect the battery and power on your laptop.</li>
              <li>Check the display to ensure the new screen is working properly.</li>
              <li>If the screen doesn't turn on, double-check the connections and make sure the video cable is securely attached.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-amber-500 pl-4">Tips and Warnings</h2>
            <ul className="mb-4 space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-amber-500">
              <li>Be gentle when prying off the bezel to avoid breaking the plastic clips.</li>
              <li>Handle the new screen carefully to avoid damaging it during installation.</li>
              <li>If you're not comfortable performing the repair yourself, consider seeking help from a professional technician.</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-gray-600">
          By following these steps, you can replace your broken laptop screen and get your device back in working order. Always take your time and handle the components with care to ensure a successful repair.
        </p>
      </article>

      {/* CTA */}
      <section className="bg-gray-900 border-t-4 border-cyan-500 py-14 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FaHeadset className="mx-auto text-4xl text-cyan-300 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Need Professional Screen Repair?</h2>
          <p className="text-cyan-100 mb-6">
            Not comfortable with a DIY repair? Our certified technicians nationwide &amp; Melbourne handle screen replacements quickly and affordably.
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

export default FixBrokenScreen;
