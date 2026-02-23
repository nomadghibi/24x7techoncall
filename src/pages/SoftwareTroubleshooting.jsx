import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaWindows, FaApple, FaLinux, FaMicrosoft } from 'react-icons/fa'; // Importing icons from react-icons
import { SiAdobe, SiGoogledrive } from 'react-icons/si';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/SoftwareTroubleshooting.webp'; // Ensure this is the correct path to your image

const SoftwareTroubleshooting = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    problem: '',
    os: ''
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
        <title>Software Troubleshooting | Palm Bay/Melbourne FL | Expert IT Support</title>
        <meta name="description" content="Expert software troubleshooting services in Palm Bay/Melbourne, FL. We resolve operating system errors, application crashes, and software installation issues. Contact us for reliable IT support." />
        <meta name="keywords" content="Software Troubleshooting Palm Bay/Melbourne FL, IT Support, Computer Repair, Application Errors, Operating System Troubleshooting, Software Installation" />
      </Helmet>
      <HeroSection title="Software Troubleshooting" image={heroImage} />
      <div className="container p-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold">Why Choose Our Software Troubleshooting?</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Immediate assistance from certified technicians.</li>
                <li>Fast resolution of common and complex software issues.</li>
                <li>Affordable and transparent pricing.</li>
                <li>Service tailored for both individuals and businesses.</li>
              </ul>
            </div>
            <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold">Common Software Issues We Handle</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Operating system and software installation errors.</li>
                <li>Software crashes and performance issues.</li>
                <li>Virus and malware software troubleshooting.</li>
                <li>Software updates and configuration problems.</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold">How It Works</h2>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Contact us via phone, email, or live chat.</li>
                <li>Discuss your software issue with our expert technician.</li>
                <li>Follow the guided instructions or allow remote access if required.</li>
                <li>Resolve the issue and receive advice on preventing future problems.</li>
              </ol>
            </div>
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
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="os">
                  What is your OS?
                </label>
                <select
                  name="os"
                  value={formData.os}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Select your OS</option>
                  <option value="Windows">Windows</option>
                  <option value="Mac">Mac</option>
                  <option value="Linux">Linux</option>
                </select>
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
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center">
                <FaWindows size={40} className="text-blue-700" title="Windows" />
                <span className="mt-2 text-sm text-gray-600">Windows</span>
              </div>
              <div className="flex flex-col items-center">
                <FaApple size={40} className="text-gray-800" title="Mac" />
                <span className="mt-2 text-sm text-gray-600">Mac</span>
              </div>
              <div className="flex flex-col items-center">
                <FaLinux size={40} className="text-yellow-500" title="Linux" />
                <span className="mt-2 text-sm text-gray-600">Linux</span>
              </div>
              <div className="flex flex-col items-center">
                <FaMicrosoft size={40} className="text-blue-600" title="Office 365" />
                <span className="mt-2 text-sm text-gray-600">Office 365</span>
              </div>
              <div className="flex flex-col items-center">
                <SiAdobe size={40} className="text-red-600" title="Adobe" />
                <span className="mt-2 text-sm text-gray-600">Adobe</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGoogledrive size={40} className="text-green-600" title="Google Drive" />
                <span className="mt-2 text-sm text-gray-600">Google Drive</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareTroubleshooting;


