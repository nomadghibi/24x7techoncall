import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/optimized-hero/businessitsupport-1152.jpg'; // Ensure you have a relevant image

const TechnicalSupportMaintenance = () => {
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
    alert("Technical Support and Maintenance request submitted!");
  };

  return (
    <div>
      <Helmet>
        <title>Technical Support & Maintenance | Palm Bay/Melbourne FL | IT Services</title>
        <meta name="description" content="Comprehensive technical support and maintenance services in Palm Bay/Melbourne, FL. Keep your systems running smoothly with our expert IT support." />
        <meta name="keywords" content="Technical Support Palm Bay/Melbourne FL, IT Maintenance, System Support, Computer Repair, IT Services, Network Maintenance, IT Support" />
      </Helmet>
      <HeroSection title="Technical Support and Maintenance" image={heroImage} />
      <div className="container p-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold">Keep Your Systems Running Smoothly with Our Technical Support and Maintenance Services</h2>
            <p className="mb-4">Our technical support and maintenance services ensure that your systems are always running at their best. Whether you need ongoing maintenance or immediate technical support, we are here to help.</p>
            
            <h3 className="mb-3 text-2xl font-semibold">Our Services Include:</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>System Monitoring and Maintenance</li>
              <li>Hardware and Software Support</li>
              <li>Network Maintenance</li>
              <li>Data Backup and Recovery</li>
              <li>Security Management</li>
            </ul>
            
            <h3 className="mb-3 text-2xl font-semibold">Why Choose Our Services?</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>Experienced Technicians: Our team is skilled in handling all types of technical issues.</li>
              <li>Reliable Support: We offer dependable support to keep your systems up and running.</li>
              <li>Customized Solutions: Services tailored to meet your specific needs.</li>
              <li>Proactive Maintenance: Preventative measures to avoid potential issues.</li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Request Support and Maintenance</h3>
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
                  Service Type
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="System Monitoring and Maintenance">System Monitoring and Maintenance</option>
                  <option value="Hardware and Software Support">Hardware and Software Support</option>
                  <option value="Network Maintenance">Network Maintenance</option>
                  <option value="Data Backup and Recovery">Data Backup and Recovery</option>
                  <option value="Security Management">Security Management</option>
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

export default TechnicalSupportMaintenance;
