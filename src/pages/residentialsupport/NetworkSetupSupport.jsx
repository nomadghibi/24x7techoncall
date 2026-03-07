import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaNetworkWired, FaTools, FaWifi, FaShieldAlt, FaWrench, FaTachometerAlt, FaKey, FaEye, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/optimized-hero/networksetupsupport-1152.jpg';

const NetworkSetupSupport = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://24x7techoncall.com' + (heroImage || '');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: '', problem: '' });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'network-design', title: 'Network Design', description: 'Creating custom network layouts for optimal performance.', details: 'Our Network Design services include custom network layouts, performance optimization, scalability planning, infrastructure design, and security integration.', icon: FaNetworkWired },
    { id: 'installation-configuration', title: 'Installation and Configuration', description: 'Setting up routers, switches, and other network devices.', details: 'Our Installation and Configuration services cover router setup, switch configuration, device connectivity, network cabling, and firmware updates.', icon: FaTools },
    { id: 'wifi-setup', title: 'Wi-Fi Setup', description: 'Ensuring strong and secure wireless connections.', details: 'Our Wi-Fi Setup services include wireless network setup, signal optimization, security configuration, device connectivity, and guest network setup.', icon: FaWifi },
    { id: 'network-security', title: 'Network Security', description: 'Implementing security measures to protect your network.', details: 'Our Network Security services offer firewall setup, antivirus installation, encryption solutions, intrusion detection, and security audits.', icon: FaShieldAlt },
    { id: 'troubleshooting-repairs', title: 'Troubleshooting and Repairs', description: 'Diagnosing and fixing network issues.', details: 'Our Troubleshooting and Repairs services include issue diagnosis, hardware repairs, software troubleshooting, connection fixes, and performance tuning.', icon: FaWrench },
    { id: 'performance-optimization', title: 'Performance Optimization', description: 'Enhancing network speed and reliability.', details: 'Our Performance Optimization services provide speed enhancements, reliability improvements, bandwidth management, latency reduction, and system upgrades.', icon: FaTachometerAlt },
    { id: 'vpn-setup', title: 'VPN Setup', description: 'Configuring virtual private networks for secure remote access.', details: 'Our VPN Setup services cover secure remote access, encryption configuration, multi-device support, access control, and VPN maintenance.', icon: FaKey },
    { id: 'network-monitoring', title: 'Network Monitoring', description: 'Continuous monitoring to prevent and address issues.', details: 'Our Network Monitoring services include real-time monitoring, alert systems, performance tracking, security monitoring, and report generation.', icon: FaEye },
    { id: 'firewall-configuration', title: 'Firewall Configuration', description: 'Setting up firewalls to protect against cyber threats.', details: 'Our Firewall Configuration services offer threat protection, access control, rule configuration, traffic monitoring, and regular updates.', icon: FaShieldAlt },
    { id: 'consultation-support', title: 'Consultation and Support', description: 'Providing expert advice and ongoing support.', details: 'Our Consultation and Support services offer expert consultation, 24/7 support, custom solutions, system maintenance, and ongoing assistance.', icon: FaTools }
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
    emailjs.sendForm(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Thanks! Your network setup request has been received. We will contact you within 1 business day.');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('We could not send your request right now. Please try again, or call (321) 953-5199.');
      });
    setFormData({ name: '', phone: '', email: '', serviceType: '', problem: '' });
  };

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div>
      <Helmet>
        <title>Network Setup and Support | 24x7 Tech On Call | Nationwide</title>
        <meta name="description" content="Professional network setup and support services in Nationwide. We specialize in network design, Wi-Fi setup, security enhancements, VPN configuration, and performance optimization to ensure your network runs smoothly and securely." />
        <meta name="keywords" content="network setup near me, Wi-Fi configuration Palm Bay, network support Melbourne FL, network security, VPN setup, firewall configuration, performance optimization, network design, 24x7 Tech On Call" />
        <link rel="canonical" href="https://24x7techoncall.com/residential-support/network-setup-support" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Network Setup and Support | 24x7 Tech On Call | Nationwide" />
        <meta property="og:description" content="Get expert network setup and support services from 24x7 Tech On Call. Serving Nationwide, we offer Wi-Fi setup, network security, VPN configuration, and more." />
        <meta property="og:url" content="https://24x7techoncall.com/residential-support/network-setup-support" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Network Setup and Support | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Professional network setup and support services in Nationwide." />
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
            <Link to="/residential-support" className="hover:text-white transition-colors">Residential Support</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Network Setup &amp; Support</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Network Setup and Support</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Fast, secure Wi-Fi and network solutions for your home or small office.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Expert Network Setup and Support</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At 24x7 Tech On Call, we specialize in comprehensive network setup and support services to ensure your home or office network runs smoothly and securely. Our certified technicians are experienced in designing, implementing, and maintaining robust network solutions tailored to your needs.
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
              <p className="text-gray-400 mb-8">Our network setup and support services are competitively priced for the Space Coast area. Contact us for a custom quote for your specific needs.</p>
              <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Network Needs</h3>
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
                    <option value="" disabled>Select a service type</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>{service.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Explanation of Your Network Needs</label>
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
                <h3 className="text-xl font-bold text-gray-900">Serving Palm Bay, Melbourne & Space Coast</h3>
              </div>
              <p className="text-gray-600 mb-3">
                24x7 Tech On Call proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida, providing personalized and efficient network setup and support services.
              </p>
              <p className="text-gray-600">
                We offer both onsite and remote services for Palm Bay, Melbourne, and the Space Coast of Florida, and remote services across the USA.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe your network setup needs or current issue.', 'Receive a quote for the setup or support.', 'Schedule a service appointment.', 'Our technicians design, install, and configure your network.', 'Receive ongoing support and maintenance.'].map((step, i) => (
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
          <h2 className="text-3xl font-bold mb-3">Need Help with Your Network?</h2>
          <p className="text-gray-400 mb-6">
            Our certified network technicians nationwide can set up, secure, and optimize your home or office network.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NetworkSetupSupport;
