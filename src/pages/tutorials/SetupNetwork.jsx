import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaHeadset } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/setupnetwork-1152.jpg';

function SetupNetwork() {
  const canonicalUrl = 'https://24x7techoncall.com/how-to/setup-network';

  return (
    <div>
      <Helmet>
        <title>How to Set Up a Network | 24/7 Tech On Call</title>
        <meta name="description" content="Step-by-step guide to set up a secure home or office network, including router setup, Wi-Fi security, and troubleshooting tips." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Set Up a Network | 24/7 Tech On Call" />
        <meta property="og:description" content="Learn how to configure a reliable network with proper security and device connectivity." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Set Up a Network | 24/7 Tech On Call" />
        <meta name="twitter:description" content="Build a secure and efficient network with this practical setup guide." />
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
            <span className="text-gray-300">Set Up a Network</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">How to Set Up a Network</h1>
        </div>
      </section>

      {/* Article */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <Link to="/how-to" className="inline-flex items-center gap-2 text-cyan-500 hover:text-gray-700 font-medium mb-8 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to How To Guides
        </Link>

        <p className="text-lg text-gray-600 mb-10">
          Setting up a network at home or office can seem daunting, but by following these steps, you can create a secure and efficient network that meets your needs.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 1: Gather Your Equipment</h2>
            <p className="text-gray-700 mb-3">Before you start, ensure you have the necessary equipment:</p>
            <ul className="space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-cyan-500">
              <li>A modem (provided by your Internet Service Provider)</li>
              <li>A router (wireless or wired)</li>
              <li>Ethernet cables (for wired connections)</li>
              <li>A computer or device for setup</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 2: Connect the Modem to the Router</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Turn off the modem: Unplug the power from your modem.</li>
              <li>Connect the modem to the router: Use an Ethernet cable to connect the modem to the WAN (Wide Area Network) port on the router.</li>
              <li>Power on the modem: Plug the modem back in and wait for it to fully power on.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 3: Connect a Computer to the Router</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Use an Ethernet cable: Connect one end of an Ethernet cable to one of the LAN (Local Area Network) ports on the router.</li>
              <li>Connect the other end to your computer: Plug the other end into your computer's Ethernet port.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 4: Access the Router's Web Interface</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Open a web browser: On the connected computer, open a web browser.</li>
              <li>Enter the router's IP address: This is usually <code className="bg-gray-100 px-1 rounded text-sm">192.168.1.1</code> or <code className="bg-gray-100 px-1 rounded text-sm">192.168.0.1</code>. Check your router's documentation for the exact address.</li>
              <li>Log in to the router: Enter the default username and password. This information is typically found on the router itself or in the manual. Common defaults are <code className="bg-gray-100 px-1 rounded text-sm">admin</code> for both username and password.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 5: Configure the Router</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Change the default login credentials: For security reasons, change the default username and password.</li>
              <li>Set up the SSID: Configure the wireless network name (SSID) so you can identify your network.</li>
              <li>Set up a password: Choose a strong password for your Wi-Fi network to prevent unauthorized access.</li>
              <li>Select a security type: Use WPA3 or WPA2 encryption for the best security.</li>
              <li>Save the settings: Apply the changes and save the settings.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 6: Connect Devices to the Network</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>For wired connections: Plug Ethernet cables from devices like computers and gaming consoles into the router's LAN ports.</li>
              <li>For wireless connections: On each wireless device (e.g., laptops, smartphones), go to the Wi-Fi settings and select your network SSID. Enter the password you set earlier.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 7: Test Your Network</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Check the wired connections: Ensure that devices connected via Ethernet cables can access the internet.</li>
              <li>Check the wireless connections: Ensure that wireless devices can connect to the internet and access the network.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-cyan-500 pl-4">Step 8: Secure Your Network</h2>
            <ol className="space-y-2 list-decimal list-outside pl-6 text-gray-700 marker:text-cyan-500 marker:font-bold">
              <li>Update the router's firmware: Check the manufacturer's website for any firmware updates and install them.</li>
              <li>Disable remote management: Unless necessary, disable remote management to prevent external access to your router's settings.</li>
              <li>Set up a guest network: If you have visitors frequently, set up a separate guest network with its own SSID and password.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-amber-500 pl-4">Troubleshooting Tips</h2>
            <ul className="space-y-2 list-disc list-outside pl-6 text-gray-700 marker:text-amber-500">
              <li>No internet connection: Ensure all cables are connected properly and the modem is working.</li>
              <li>Unable to access the router's web interface: Check that your computer is connected to the router and try a different browser or device.</li>
              <li>Poor wireless signal: Place the router in a central location, away from obstructions and electronic devices that may cause interference.</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-gray-600">
          Setting up a network involves connecting the hardware, configuring the router, and ensuring all devices can connect securely. By following these steps, you can set up a reliable network that meets your needs for both wired and wireless connections.
        </p>
      </article>

      {/* CTA */}
      <section className="bg-gray-900 border-t-4 border-cyan-500 py-14 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FaHeadset className="mx-auto text-4xl text-cyan-300 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Need Professional Network Setup?</h2>
          <p className="text-cyan-100 mb-6">
            Let our local IT experts nationwide &amp; Melbourne set up a fast, secure network for your home or business — the first time, right.
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

export default SetupNetwork;
