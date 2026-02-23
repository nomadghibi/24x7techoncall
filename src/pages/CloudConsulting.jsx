import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/fixbrokenscreen.webp'; // Ensure you have this image in your assets

const CloudConsulting = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    cloudNeeds: '',
    date: ''
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
    alert("Consultation request submitted!");
  };

  return (
    <div>
      <HeroSection title="Cloud Consulting Services" image={heroImage} />
      <div className="container p-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold">Optimize Your Business with Our Cloud Consulting</h2>
            <p className="mb-4">Our cloud consulting services are designed to help businesses leverage the power of cloud technology. Whether you are looking to migrate to the cloud, optimize your existing cloud infrastructure, or develop a cloud strategy, our experts are here to help.</p>
            
            <h3 className="mb-3 text-2xl font-semibold">Our Services Include:</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>Cloud migration planning and execution</li>
              <li>Cloud infrastructure optimization</li>
              <li>Cloud security and compliance</li>
              <li>Cloud cost management</li>
              <li>Cloud-native application development</li>
            </ul>
            
            <h3 className="mb-3 text-2xl font-semibold">Why Choose Our Cloud Consulting?</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>Certified Cloud Experts: Our team includes certified professionals with extensive experience.</li>
              <li>Tailored Solutions: We provide customized solutions based on your specific needs.</li>
              <li>Proven Methodologies: We use industry best practices to ensure successful outcomes.</li>
              <li>Comprehensive Support: From planning to execution, we offer end-to-end support.</li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Request a Cloud Consultation</h3>
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
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="company">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="cloudNeeds">
                  Cloud Needs
                </label>
                <textarea
                  name="cloudNeeds"
                  value={formData.cloudNeeds}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  rows="4"
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

export default CloudConsulting;

