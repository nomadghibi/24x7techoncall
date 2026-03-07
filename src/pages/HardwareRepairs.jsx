
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/optimized-hero/hardwarerepairs-1152.jpg';
import { Helmet } from 'react-helmet-async';

const HardwareRepairs = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://24x7techoncall.com' + (heroImage || '');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    problem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <Helmet>
        <title>Hardware Repair Services | 24x7 Tech On Call | Nationwide</title>
        <meta name="description" content="Professional hardware repair services nationwide, Melbourne, and the Space Coast of Florida. We specialize in screen replacement, keyboard repair, battery replacement, and more." />
        <meta name="keywords" content="hardware repair, screen replacement, keyboard repair, battery replacement, computer repair, Palm Bay, Melbourne FL, Space Coast, 24x7 Tech On Call" />
        <link rel="canonical" href="https://24x7techoncall.com/hardware-repairs" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hardware Repair Services | 24x7 Tech On Call | Nationwide" />
        <meta property="og:description" content="Get your hardware repaired by certified technicians at 24x7 Tech On Call. Serving Palm Bay, Melbourne, and the Space Coast of Florida." />
        <meta property="og:url" content="https://24x7techoncall.com/hardware-repairs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hardware Repair Services | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Expert hardware repair services nationwide, Melbourne, and the Space Coast of Florida. We fix screens, keyboards, batteries, and more." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      <HeroSection title="Hardware Repairs" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Hardware Repairs</h2>
        <p className="mb-4">
          At 24x7 Tech On Call, we specialize in comprehensive hardware repairs to keep your computer running smoothly. Our certified technicians are experienced in diagnosing and fixing a wide range of hardware issues, ensuring your device is back to optimal performance in no time.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Our Hardware Repair Services Include:</h3>
            <ul className="mb-4 list-disc list-inside">
              <li><strong>Screen Replacement:</strong> Fixing broken or damaged laptop screens.</li>
              <li><strong>Keyboard Replacement:</strong> Repairing or replacing malfunctioning keyboards.</li>
              <li><strong>Battery Replacement:</strong> Installing new batteries for extended device life.</li>
              <li><strong>Hard Drive Replacement:</strong> Upgrading or replacing faulty hard drives.</li>
              <li><strong>RAM Upgrade:</strong> Enhancing performance with additional memory.</li>
              <li><strong>Motherboard Repair:</strong> Diagnosing and fixing motherboard issues.</li>
              <li><strong>Cooling System Repair:</strong> Ensuring efficient cooling to prevent overheating.</li>
              <li><strong>Power Supply Replacement:</strong> Fixing issues with the power supply unit.</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Problem</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phone">
                  Phone No.
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="problem">
                  Explanation of the Problem
                </label>
                <textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Serving Palm Bay, Melbourne, and Space Coast of Florida</h3>
            <p className="mb-4">
              24x7 Tech On Call proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida. Our technicians are well-acquainted with the needs of our local customers, providing personalized and efficient hardware repair services to keep your devices running smoothly.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Get Your Hardware Repaired</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe the Issue: Provide details about the hardware problem you're facing.</li>
              <li>Get a Quote: Receive an estimated cost for the repair.</li>
              <li>Schedule a Repair: Set up an appointment to bring in your device.</li>
              <li>Repair Process: Our technicians will diagnose and repair the issue.</li>
              <li>Pick Up: Once the repair is complete, you can pick up your device.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareRepairs;
