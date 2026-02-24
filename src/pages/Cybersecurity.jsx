import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/optimized-hero/remotetechsupport-1152.jpg'; // Ensure you have a relevant image

const Cybersecurity = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
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
    alert("Cybersecurity service request submitted!");
  };

  return (
    <div>
        <Helmet>
        <title>Cybersecurity Services | Palm Bay/Melbourne FL | Protect Your Business</title>
        <meta name="description" content="Top-notch cybersecurity services in Palm Bay/Melbourne, FL. Protect your business from online threats with our comprehensive security solutions. Contact us today for expert IT security." />
        <meta name="keywords" content="Cybersecurity Palm Bay/Melbourne FL, IT Security, Network Security, Online Protection, Business Security, IT Services, Malware Protection, Data Security" />
      </Helmet>
      <HeroSection title="Cybersecurity Services" image={heroImage} />
      <div className="container p-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold">Protect Your Business with Our Cybersecurity Services</h2>
            <p className="mb-4">Our cybersecurity services are designed to safeguard your business from cyber threats with robust security solutions and proactive monitoring. We offer a range of services tailored to meet your security needs.</p>
            
            <h3 className="mb-3 text-2xl font-semibold">Our Cybersecurity Services Include:</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>Network Security</li>
              <li>Endpoint Security</li>
              <li>Threat Detection and Response</li>
              <li>Security Audits and Assessments</li>
            </ul>
            
            <h3 className="mb-3 text-2xl font-semibold">Why Choose Our Cybersecurity Services?</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>Experienced Security Experts: Our team includes certified cybersecurity professionals.</li>
              <li>Comprehensive Protection: We provide end-to-end security solutions.</li>
              <li>Proactive Monitoring: Continuous monitoring to detect and mitigate threats early.</li>
              <li>Customized Solutions: Security measures tailored to your specific business needs.</li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Request Cybersecurity Information</h3>
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
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="service">
                  Cybersecurity Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Network Security">Network Security</option>
                  <option value="Endpoint Security">Endpoint Security</option>
                  <option value="Threat Detection and Response">Threat Detection and Response</option>
                  <option value="Security Audits and Assessments">Security Audits and Assessments</option>
                </select>
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
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;


