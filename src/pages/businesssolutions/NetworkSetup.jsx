import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaNetworkWired, FaWifi, FaServer, FaShieldAlt, FaSync, FaPlug, FaDesktop, FaTools, FaProjectDiagram, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/optimized-hero/networksetupsupport-1152.jpg';

const NetworkSetup = () => {
  const canonicalUrl = 'https://24x7techoncall.com/business-solutions/network-setup';
  const pageImage = heroImage?.startsWith('http') ? heroImage : `https://24x7techoncall.com${heroImage || ''}`;
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: '', serviceDeliveryMethod: '', problem: '' });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'network-design', title: 'Network Design', description: 'Creating robust and scalable network solutions.', details: 'Our network design services provide customized network architecture tailored to your business needs, ensuring robust and scalable solutions.', icon: FaNetworkWired },
    { id: 'network-implementation', title: 'Network Implementation', description: 'Setting up network hardware and software.', details: 'We handle the installation and configuration of network hardware and software, ensuring a seamless implementation process.', icon: FaServer },
    { id: 'network-security', title: 'Network Security', description: 'Implementing security measures to protect your network.', details: 'Our network security services include firewall installation, intrusion detection, and continuous monitoring to safeguard your network.', icon: FaShieldAlt },
    { id: 'wifi-setup', title: 'Wi-Fi Setup', description: 'Configuring secure and reliable wireless networks.', details: 'We set up secure and reliable Wi-Fi networks, ensuring strong signal coverage and optimal performance across your premises.', icon: FaWifi },
    { id: 'vpn-setup', title: 'VPN Setup', description: 'Setting up virtual private networks for secure remote access.', details: 'Our VPN setup services enable secure remote access to your network, protecting your data and ensuring privacy.', icon: FaSync },
    { id: 'network-monitoring', title: 'Network Monitoring', description: 'Monitoring network performance and security.', details: 'We provide continuous network monitoring to detect and resolve performance issues and security threats promptly.', icon: FaPlug },
    { id: 'network-troubleshooting', title: 'Network Troubleshooting', description: 'Identifying and resolving network issues.', details: 'Our network troubleshooting services quickly identify and resolve network issues, minimizing downtime and maintaining productivity.', icon: FaDesktop },
    { id: 'network-upgrades', title: 'Network Upgrades', description: 'Recommending and implementing network upgrades.', details: 'We recommend and implement network upgrades to improve performance, scalability, and security, ensuring your network meets future demands.', icon: FaSync },
    { id: 'data-cabling', title: 'Data Cabling', description: 'Installing and managing network cabling.', details: 'Our data cabling services ensure reliable and high-performance connectivity through professional installation and management.', icon: FaNetworkWired },
    { id: 'consultation-support', title: 'Consultation and Support', description: 'Providing expert advice and ongoing support.', details: 'We offer expert consultation and ongoing support to ensure your network infrastructure is optimized and secure.', icon: FaTools },
    { id: 'network-assessment', title: 'Network Assessment', description: 'Comprehensive evaluation of your current network setup.', details: 'Our network assessment services provide a comprehensive evaluation of your current network setup to identify potential improvements and ensure optimal performance.', icon: FaProjectDiagram },
    { id: 'remote-support', title: 'Remote Support', description: 'Providing remote assistance for network-related issues.', details: 'Our remote support services offer quick and efficient assistance for network-related issues, minimizing downtime and keeping your business running smoothly.', icon: FaHeadset }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service.id === selectedService?.id ? null : service);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.service-card')) setSelectedService(null);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thanks! Your request has been received. We will contact you within 1 business day.');
      }, (err) => {
        console.error('FAILED...', err);
        alert('We could not send your request right now. Please try again, or call (321) 953-5199.');
      });
  };

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div>
      <Helmet>
        <title>Business Network Setup Services | 24/7 Tech On Call | Nationwide</title>
        <meta name="description" content="Professional network setup services for businesses including design, implementation, Wi-Fi, VPN, security, and monitoring in Nationwide." />
        <meta name="keywords" content="business network setup Palm Bay, network security services Melbourne FL, Wi-Fi setup business, VPN setup support, network monitoring" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Business Network Setup Services | 24/7 Tech On Call" />
        <meta property="og:description" content="Reliable business network setup and support for secure, high-performance operations." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Network Setup Services | 24/7 Tech On Call" />
        <meta name="twitter:description" content="Get expert business network setup, security, and support from 24/7 Tech On Call." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* Hero */}
      <section
        className="relative min-h-[380px] flex items-end text-white"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-cyan-300 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <Link to="/business-solutions" className="hover:text-white transition-colors">Business Solutions</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Network Setup</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Business Network Setup</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Secure, high-performance network design, implementation, and support for your business.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Expert Network Setup Services</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At 24/7 Tech On Call, we specialize in comprehensive network setup services to ensure your business has a reliable and secure network infrastructure. Our certified technicians provide expert advice and customized solutions to meet your specific business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-6">Click any service to learn more</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:border-cyan-200 transition-all service-card overflow-hidden"
                onClick={() => handleServiceClick(service)}
              >
                <div className="p-6">
                  <div className="w-11 h-11 bg-cyan-50 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-xl text-cyan-500" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </div>
                {selectedService?.id === service.id && (
                  <div className="px-6 pb-6 pt-3 border-t border-cyan-100 bg-cyan-50">
                    <p className="text-gray-700 text-sm leading-relaxed">{service.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing + Form */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="bg-gray-900 rounded-2xl p-8 text-white flex flex-col justify-center">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Affordable Pricing</p>
              <p className="text-6xl font-bold mb-1">$95</p>
              <p className="text-gray-400 text-lg mb-4">Starting price</p>
              <p className="text-gray-400 mb-8">Our Network Setup Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
              <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Network Setup Needs</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={labelClass}>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Phone No.</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Type of Service</label>
                  <select name="serviceType" value={formData.serviceType} onChange={handleChange} className={inputClass} required>
                    <option value="" disabled>Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>{service.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Service Delivery Method</label>
                  <select name="serviceDeliveryMethod" value={formData.serviceDeliveryMethod} onChange={handleChange} className={inputClass} required>
                    <option value="">Select a delivery method</option>
                    <option value="remote-service">Remote Service</option>
                    <option value="onsite-service">Onsite Service</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Explanation of Your Network Setup Needs</label>
                  <textarea name="problem" value={formData.problem} onChange={handleChange} rows={4} className={inputClass} required />
                </div>
                <button type="submit" className="w-full bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Info: Serving + Steps */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">Serving Clients Nationwide</h3>
              </div>
              <p className="text-gray-600">
                For more than two decades, 24/7 Tech On Call has resolved over 10,000 IT issues. Proudly serving homes and businesses across the entire United States, our network experts deliver personalized and efficient network setup solutions to keep your operations running smoothly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe the network setup services you\'re seeking.', 'Receive a quote for the services.', 'Schedule a service appointment.', 'Our technicians provide the necessary network setup solutions.', 'Receive ongoing support and maintenance as needed.'].map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 border-t-4 border-cyan-500 py-14 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FaHeadset className="mx-auto text-4xl text-cyan-400 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Need a Better Business Network?</h2>
          <p className="text-gray-400 mb-6">
            Our network specialists nationwide can design and implement a fast, secure network built for your business.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NetworkSetup;
