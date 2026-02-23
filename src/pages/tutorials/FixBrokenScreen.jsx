import React from 'react';
import HeroSection from '../../components/HeroSection';
import GoBackButtonWithArrow from '../../components/GoBackButtonWithArrow';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import heroImage from '../../assets/fixbrokenscreen.webp'; // Adjust the path according to your file structure

function FixBrokenScreen() {
  const navigate = useNavigate();
  const canonicalUrl = 'https://bestcomputertec.com/how-to/fix-broken-screen';

  const handleContactUs = () => {
    navigate('/contact'); // Adjust the path to your contact or booking page
  };

  return (
    <div>
      <Helmet>
        <title>How to Fix a Broken Screen | Best Computer Tech</title>
        <meta
          name="description"
          content="Learn how to fix a broken laptop screen with this step-by-step guide from Best Computer Tech. Serving Palm Bay and Melbourne, Florida."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Fix a Broken Screen | Best Computer Tech" />
        <meta
          property="og:description"
          content="Step-by-step instructions to replace a broken laptop screen safely and correctly."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Fix a Broken Screen | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Follow this practical guide to replace a broken laptop screen."
        />
      </Helmet>
      <HeroSection title="How to Fix a Broken Screen" image={heroImage} />
      <div className="container p-8 mx-auto">
        <GoBackButtonWithArrow />
        <h1 className="mb-4 text-4xl font-bold">How to Fix a Broken Screen</h1>
        <p className="mb-4">A broken laptop screen can be a frustrating problem, but with the right tools and some patience, you can fix it yourself. Follow these steps to replace your broken screen:</p>

        <h2 className="mb-4 text-3xl font-semibold">Step 1: Gather Your Tools</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>A small Phillips screwdriver</li>
          <li>A plastic pry tool or an old credit card</li>
          <li>A new replacement screen (ensure it matches your laptop model)</li>
        </ul>

        <h2 className="mb-4 text-3xl font-semibold">Step 2: Power Down and Disconnect</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Turn off your laptop and disconnect it from any power source.</li>
          <li>Remove the battery if possible to prevent any electrical issues during the repair.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 3: Remove the Bezel</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Use the plastic pry tool or an old credit card to carefully separate the bezel (the plastic frame) from the screen. Be gentle to avoid breaking the plastic clips.</li>
          <li>Work your way around the entire bezel until it comes off completely.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 4: Disconnect the Screen</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Locate the screws holding the screen in place and remove them using the Phillips screwdriver.</li>
          <li>Carefully tilt the screen forward to access the video cable on the back.</li>
          <li>Disconnect the video cable by gently pulling it out of the connector.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 5: Install the New Screen</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Take the new replacement screen and connect the video cable to the back.</li>
          <li>Carefully place the new screen into the laptop frame and secure it with the screws you removed earlier.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 6: Reattach the Bezel</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Snap the bezel back onto the laptop, ensuring all the clips are securely in place.</li>
          <li>Press around the edges to make sure the bezel is firmly attached.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 7: Test the New Screen</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Reconnect the battery and power on your laptop.</li>
          <li>Check the display to ensure the new screen is working properly.</li>
          <li>If the screen doesn’t turn on, double-check the connections and make sure the video cable is securely attached.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Tips and Warnings</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Be gentle when prying off the bezel to avoid breaking the plastic clips.</li>
          <li>Handle the new screen carefully to avoid damaging it during installation.</li>
          <li>If you're not comfortable performing the repair yourself, consider seeking help from a professional technician.</li>
        </ul>

        <p className="mb-4">By following these steps, you can replace your broken laptop screen and get your device back in working order. Always take your time and handle the components with care to ensure a successful repair.</p>

        <div className="text-center">
          <p className="mb-4 text-lg font-semibold text-gray-700">If you need professional assistance with fixing your broken screen, we're here to help!</p>
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

export default FixBrokenScreen;


