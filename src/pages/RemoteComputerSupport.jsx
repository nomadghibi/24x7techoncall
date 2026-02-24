import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/optimized-hero/remotecomputersupport-1152.jpg';

const RemoteComputerSupport = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    issue: ''
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
    alert("Appointment request submitted!");
  };

  const handleBuyNow = () => {
    // Navigate to the checkout page with service details
    navigate('/checkout', { state: { service: 'Remote Computer Support', price: '99.99' } });
  };

  const handleLoadSoftware = () => {
    // Logic to load the remote support software
    alert("Remote support software is loading...");
  };

  return (
    <div>
      <HeroSection title="Remote Computer Support" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Remote Computer Support</h2>
        <p className="mb-8">
          Experience rapid, secure, and convenient computer assistance with our remote support services, eliminating the need for a physical technician visit. Our expert technicians can securely connect to your computer to perform necessary diagnostics and repairs right from your home or office. Rest assured, our remote service prioritizes your security and privacy. Technicians can only access your computer after you accept a permission prompt, and once the session ends, our system ensures no further access without your explicit consent. Utilizing SSL/TLS (OpenSSL) encryption, the same technology trusted for online shopping, Zoom conferences, and online banking, we guarantee a safe and secure remote support experience.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
              <h3 className="mb-3 text-2xl font-semibold">How It Works</h3>
              <ol className="list-decimal list-inside">
                <li>Contact us via phone or online chat.</li>
                <li>Share your screen securely with our technicians.</li>
                <li>Watch as we diagnose and resolve the issue in real time.</li>
              </ol>
            </div>
            <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
              <h3 className="mb-3 text-2xl font-semibold">Services Offered</h3>
              <ul className="list-disc list-inside">
                <li>Software installation and troubleshooting</li>
                <li>Virus and malware removal</li>
                <li>Performance optimization</li>
                <li>Email setup and problem resolution</li>
                <li>Backup and recovery solutions</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="mb-3 text-2xl font-semibold">Ready to Connect?</h3>
              <p className="mb-4">
                Our certified technicians are ready to assist you with any computer issues you may have. Click the button below to load our secure remote support software and get started.
              </p>
              <div className="text-center">
                <button
                  onClick={handleLoadSoftware}
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Load Remote Support Software
                </button>
              </div>
              <div className="mt-4 text-center">
                <button
                  onClick={handleBuyNow}
                  className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-700"
                >
                  Buy Now for $99.99
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-2xl font-semibold">Make an Appointment</h3>
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
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phone">
                  Phone
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
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="date">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="time">
                  Preferred Time (9 AM - 9 PM)
                </label>
                <input
                  type="time"
                  name="time"
                  min="09:00"
                  max="21:00"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="issue">
                  Description of the Issue
                </label>
                <textarea
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
              >
                Submit Appointment Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteComputerSupport;
