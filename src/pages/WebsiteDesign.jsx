import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/Website Design Services.webp'; // Ensure you have a relevant image

const WebsiteDesign = () => {
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
    alert("Website design request submitted!");
  };

  return (
    <div>
        <Helmet>
        <title>Website Design Services | Palm Bay/Melbourne FL | Custom Web Solutions</title>
        <meta name="description" content="Professional website design services in Palm Bay/Melbourne, FL. We create custom, responsive websites tailored to your business needs. Contact us for expert web solutions." />
        <meta name="keywords" content="Website Design Palm Bay/Melbourne FL, Custom Websites, Web Development, Responsive Design, Web Solutions, Business Websites, IT Services" />
      </Helmet>
      <HeroSection title="Website Design Services" image={heroImage} />
      <div className="container p-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold">Elevate Your Online Presence with Our Website Design</h2>
            <p className="mb-4">Our website design services are tailored to help businesses create a strong online presence. Whether you need a simple website or a complex e-commerce platform, our team can deliver a site that meets your needs.</p>
            
            <h3 className="mb-3 text-2xl font-semibold">Our Website Design Services Include:</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>Custom Website Design</li>
              <li>Responsive Design</li>
              <li>E-commerce Solutions</li>
              <li>Content Management Systems (CMS)</li>
              <li>Website Redesign</li>
            </ul>
            
            <h3 className="mb-3 text-2xl font-semibold">Why Choose Our Website Design?</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>Experienced Designers: Our team includes skilled designers with years of experience.</li>
              <li>Customized Solutions: We create websites tailored to your specific needs and goals.</li>
              <li>Modern Design: Stay ahead with contemporary design trends and best practices.</li>
              <li>SEO Friendly: Our designs are optimized for search engines to improve your online visibility.</li>
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Request Website Design Information</h3>
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
                  Website Design Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Custom Website Design">Custom Website Design</option>
                  <option value="Responsive Design">Responsive Design</option>
                  <option value="E-commerce Solutions">E-commerce Solutions</option>
                  <option value="Content Management Systems">Content Management Systems</option>
                  <option value="Website Redesign">Website Redesign</option>
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

export default WebsiteDesign;
