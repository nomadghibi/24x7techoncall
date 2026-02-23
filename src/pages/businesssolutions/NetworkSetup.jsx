

import React, { useState, useEffect } from 'react';
import { FaNetworkWired, FaWifi, FaServer, FaShieldAlt, FaSync, FaPlug, FaDesktop, FaTools, FaProjectDiagram, FaHeadset } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection';
import emailjs from 'emailjs-com';
import heroImage from '../../assets/NetworkSetupSupport.webp';

const NetworkSetup = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    serviceDeliveryMethod: '',
    problem: ''
  });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'network-design',
      title: 'Network Design',
      description: 'Creating robust and scalable network solutions.',
      details: 'Our network design services provide customized network architecture tailored to your business needs, ensuring robust and scalable solutions.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-implementation',
      title: 'Network Implementation',
      description: 'Setting up network hardware and software.',
      details: 'We handle the installation and configuration of network hardware and software, ensuring a seamless implementation process.',
      icon: <FaServer className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-security',
      title: 'Network Security',
      description: 'Implementing security measures to protect your network.',
      details: 'Our network security services include firewall installation, intrusion detection, and continuous monitoring to safeguard your network.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'wifi-setup',
      title: 'Wi-Fi Setup',
      description: 'Configuring secure and reliable wireless networks.',
      details: 'We set up secure and reliable Wi-Fi networks, ensuring strong signal coverage and optimal performance across your premises.',
      icon: <FaWifi className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'vpn-setup',
      title: 'VPN Setup',
      description: 'Setting up virtual private networks for secure remote access.',
      details: 'Our VPN setup services enable secure remote access to your network, protecting your data and ensuring privacy.',
      icon: <FaSync className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-monitoring',
      title: 'Network Monitoring',
      description: 'Monitoring network performance and security.',
      details: 'We provide continuous network monitoring to detect and resolve performance issues and security threats promptly.',
      icon: <FaPlug className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-troubleshooting',
      title: 'Network Troubleshooting',
      description: 'Identifying and resolving network issues.',
      details: 'Our network troubleshooting services quickly identify and resolve network issues, minimizing downtime and maintaining productivity.',
      icon: <FaDesktop className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-upgrades',
      title: 'Network Upgrades',
      description: 'Recommending and implementing network upgrades.',
      details: 'We recommend and implement network upgrades to improve performance, scalability, and security, ensuring your network meets future demands.',
      icon: <FaSync className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-cabling',
      title: 'Data Cabling',
      description: 'Installing and managing network cabling.',
      details: 'Our data cabling services ensure reliable and high-performance connectivity through professional installation and management.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'consultation-support',
      title: 'Consultation and Support',
      description: 'Providing expert advice and ongoing support.',
      details: 'We offer expert consultation and ongoing support to ensure your network infrastructure is optimized and secure.',
      icon: <FaTools className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-assessment',
      title: 'Network Assessment',
      description: 'Comprehensive evaluation of your current network setup.',
      details: 'Our network assessment services provide a comprehensive evaluation of your current network setup to identify potential improvements and ensure optimal performance.',
      icon: <FaProjectDiagram className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'remote-support',
      title: 'Remote Support',
      description: 'Providing remote assistance for network-related issues.',
      details: 'Our remote support services offer quick and efficient assistance for network-related issues, minimizing downtime and keeping your business running smoothly.',
      icon: <FaHeadset className="mb-2 text-4xl text-blue-500" />
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service.id === selectedService?.id ? null : service);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.service-card')) {
      setSelectedService(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_rjpfye6', 'template_k76wxi8', e.target, 'RRqk9bqjxlo8Agwvr')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent successfully!');
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Failed to send your message. Please try again later.');
        }
      );
  };

  return (
    <div>
      <HeroSection title="Network Setup" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Network Setup Services</h2>
        <p className="mb-4">
          At Best Computer Tech, we specialize in comprehensive network setup services to ensure your business has a reliable and secure network infrastructure. Our certified technicians provide expert advice and customized solutions to meet your specific business needs.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative p-6 text-center bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl service-card"
              onClick={() => handleServiceClick(service)}
            >
              {service.icon}
              <h3 className="mb-2 text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
              {selectedService?.id === service.id && (
                <div className="absolute top-0 left-0 right-0 p-4 mt-2 text-white bg-blue-500 border-t-2 border-blue-500 rounded-b-lg shadow-lg">
                  <p className="text-white">{service.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2">
          <div className="relative flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-75"></div>
            <div className="relative text-center text-white">
              <h3 className="mb-2 text-3xl font-semibold">STARTING AT $95</h3>
              <p>Our Network Setup Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Network Setup Needs</h3>
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
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="serviceType">
                  Type of Service
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="serviceDeliveryMethod">
                  Service Delivery Method
                </label>
                <select
                  name="serviceDeliveryMethod"
                  value={formData.serviceDeliveryMethod}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">Select a delivery method</option>
                  <option value="remote-service">Remote Service</option>
                  <option value="onsite-service">Onsite Service</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="problem">
                  Explanation of Your Network Setup Needs
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
            <h3 className="mb-2 text-2xl font-semibold">Providing Network Setup Services to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA</h3>
            <p className="mb-4">
              For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of network experts understands the unique requirements of local businesses. We deliver personalized and efficient network setup solutions to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable network support and expert solutions tailored to your business.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Optimize Your Network Infrastructure</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the network setup services you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the services.</li>
              <li>Schedule a Service: Set up an appointment for our technicians to visit.</li>
              <li>Implementation Process: Our technicians will provide the necessary network setup solutions.</li>
              <li>Ongoing Support: Receive follow-up support and maintenance as needed.</li>
            </ol>
          </div>
        </div>

        <div className="p-6 mt-8 text-center text-white bg-blue-500 rounded-lg shadow-lg">
          <h5 className="mb-2 text-xl font-semibold">Proudly headquartered and staffed in the USA</h5>
          <h3 className="text-3xl font-semibold">Your Trusted IT Partner Across Florida and the USA</h3>
        </div>
      </div>
    </div>
  );
};

export default NetworkSetup;
