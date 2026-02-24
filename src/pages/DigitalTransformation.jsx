import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/optimized-hero/digitaltransformation-1152.jpg'; // Ensure you have a relevant image

const DigitalTransformation = () => {
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
    alert("Digital Transformation request submitted!");
  };

  return (
    <div>
      <HeroSection title="Digital Transformation Services" image={heroImage} />
      <div className="container p-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold">Transform Your Business with Our Digital Solutions</h2>
            <p className="mb-4">Our digital transformation services are designed to help businesses leverage the latest technologies to drive innovation, efficiency, and growth. Whether you're looking to digitize your processes, enhance customer experiences, or implement new digital tools, we can assist you every step of the way.</p>
            
            <h3 className="mb-3 text-2xl font-semibold">Our Digital Transformation Services Include:</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>Process Digitization</li>
              <li>Customer Experience Enhancement</li>
              <li>Digital Strategy Development</li>
              <li>Implementation of Digital Tools</li>
              <li>Change Management</li>
            </ul>
            
            <h3 className="mb-3 text-2xl font-semibold">Why Choose Our Digital Transformation Services?</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>Experienced Consultants: Our team includes skilled professionals with extensive experience in digital transformation.</li>
              <li>Customized Solutions: We tailor our services to meet your specific needs and goals.</li>
              <li>Proven Methodologies: We use industry-proven methodologies to ensure successful transformations.</li>
              <li>Comprehensive Support: From strategy to implementation, we provide end-to-end support.</li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Request Digital Transformation Information</h3>
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
                  Digital Transformation Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Process Digitization">Process Digitization</option>
                  <option value="Customer Experience Enhancement">Customer Experience Enhancement</option>
                  <option value="Digital Strategy Development">Digital Strategy Development</option>
                  <option value="Implementation of Digital Tools">Implementation of Digital Tools</option>
                  <option value="Change Management">Change Management</option>
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

export default DigitalTransformation;
