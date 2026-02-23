import React from 'react';
import HeroSection from '../../components/HeroSection';
import GoBackButtonWithArrow from '../../components/GoBackButtonWithArrow';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/setupnetwork.webp'; // Adjust the path according to your file structure

function SetupNetwork() {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/contact'); // Adjust the path to your contact or booking page
  };

  return (
    <div>
      <HeroSection title="How to Set Up a Network" image={heroImage} />
      <div className="container p-8 mx-auto">
        <GoBackButtonWithArrow />
        <h1 className="mb-4 text-4xl font-bold">How to Set Up a Network</h1>
        <p className="mb-4">Setting up a network at home or office can seem daunting, but by following these steps, you can create a secure and efficient network that meets your needs.</p>

        <h2 className="mb-4 text-3xl font-semibold">Step 1: Gather Your Equipment</h2>
        <p className="mb-4">Before you start, ensure you have the necessary equipment:</p>
        <ul className="mb-4 list-disc list-inside">
          <li>A modem (provided by your Internet Service Provider)</li>
          <li>A router (wireless or wired)</li>
          <li>Ethernet cables (for wired connections)</li>
          <li>A computer or device for setup</li>
        </ul>

        <h2 className="mb-4 text-3xl font-semibold">Step 2: Connect the Modem to the Router</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Turn off the modem: Unplug the power from your modem.</li>
          <li>Connect the modem to the router: Use an Ethernet cable to connect the modem to the WAN (Wide Area Network) port on the router.</li>
          <li>Power on the modem: Plug the modem back in and wait for it to fully power on.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 3: Connect a Computer to the Router</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Use an Ethernet cable: Connect one end of an Ethernet cable to one of the LAN (Local Area Network) ports on the router.</li>
          <li>Connect the other end to your computer: Plug the other end into your computer's Ethernet port.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 4: Access the Router's Web Interface</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Open a web browser: On the connected computer, open a web browser.</li>
          <li>Enter the router's IP address: This is usually <code>192.168.1.1</code> or <code>192.168.0.1</code>. Check your router's documentation for the exact address.</li>
          <li>Log in to the router: Enter the default username and password. This information is typically found on the router itself or in the manual. Common defaults are <code>admin</code> for both username and password.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 5: Configure the Router</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Change the default login credentials: For security reasons, change the default username and password.</li>
          <li>Set up the SSID: Configure the wireless network name (SSID) so you can identify your network.</li>
          <li>Set up a password: Choose a strong password for your Wi-Fi network to prevent unauthorized access.</li>
          <li>Select a security type: Use WPA3 or WPA2 encryption for the best security.</li>
          <li>Save the settings: Apply the changes and save the settings.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 6: Connect Devices to the Network</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>For wired connections: Plug Ethernet cables from devices like computers and gaming consoles into the router's LAN ports.</li>
          <li>For wireless connections: On each wireless device (e.g., laptops, smartphones), go to the Wi-Fi settings and select your network SSID. Enter the password you set earlier.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 7: Test Your Network</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Check the wired connections: Ensure that devices connected via Ethernet cables can access the internet.</li>
          <li>Check the wireless connections: Ensure that wireless devices can connect to the internet and access the network.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Step 8: Secure Your Network</h2>
        <ol className="mb-4 list-decimal list-inside">
          <li>Update the router's firmware: Check the manufacturer's website for any firmware updates and install them.</li>
          <li>Disable remote management: Unless necessary, disable remote management to prevent external access to your router’s settings.</li>
          <li>Set up a guest network: If you have visitors frequently, set up a separate guest network with its own SSID and password.</li>
        </ol>

        <h2 className="mb-4 text-3xl font-semibold">Troubleshooting Tips</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>No internet connection: Ensure all cables are connected properly and the modem is working.</li>
          <li>Unable to access the router’s web interface: Check that your computer is connected to the router and try a different browser or device.</li>
          <li>Poor wireless signal: Place the router in a central location, away from obstructions and electronic devices that may cause interference.</li>
        </ul>

        <p className="mb-4">Setting up a network involves connecting the hardware, configuring the router, and ensuring all devices can connect to the network securely. By following these steps, you can set up a reliable network that meets your needs for both wired and wireless connections.</p>

        <div className="text-center">
          <p className="mb-4 text-lg font-semibold text-gray-700">If you need professional assistance with setting up your network, we're here to help!</p>
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

export default SetupNetwork;


