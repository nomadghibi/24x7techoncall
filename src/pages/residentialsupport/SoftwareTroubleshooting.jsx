import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaWindows, FaAppStore, FaDownload, FaCogs, FaRocket, FaDatabase, FaExclamationTriangle, FaShieldAlt, FaSyncAlt, FaHdd, FaLifeRing, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/softwaretroubleshooting-1152.jpg';

const SoftwareTroubleshooting = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://24x7techoncall.com' + (heroImage || '');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: '', problem: '' });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'operating-system-errors', title: 'Operating System Errors', description: 'Diagnosing and fixing OS-related issues.', details: 'Our Operating System Errors services include diagnosing and fixing BSOD, system crashes, boot errors, update failures, and performance issues.', icon: FaWindows },
    { id: 'application-crashes', title: 'Application Crashes', description: 'Resolving frequent application crashes.', details: 'Our Application Crashes services include fixing unresponsive applications, unexpected shutdowns, error messages, compatibility problems, and performance degradation.', icon: FaAppStore },
    { id: 'software-installation', title: 'Software Installation', description: 'Installing and configuring software applications.', details: 'Our Software Installation services include new software setup, configuration and customization, license management, compatibility checks, and update/upgrade installation.', icon: FaDownload },
    { id: 'driver-issues', title: 'Driver Issues', description: 'Updating and fixing driver-related problems.', details: 'Our Driver Issues services include driver installation, compatibility checks, performance tuning, driver conflicts resolution, and automatic updates.', icon: FaCogs },
    { id: 'system-performance', title: 'System Performance', description: 'Enhancing system performance and speed.', details: 'Our System Performance services include performance optimization, system cleanup, startup management, resource allocation, and speed enhancements.', icon: FaRocket },
    { id: 'registry-errors', title: 'Registry Errors', description: 'Cleaning and fixing registry issues.', details: 'Our Registry Errors services include registry cleaning, error resolution, performance improvements, registry backup, and registry optimization.', icon: FaDatabase },
    { id: 'compatibility-issues', title: 'Compatibility Issues', description: 'Ensuring software compatibility with your system.', details: 'Our Compatibility Issues services include software compatibility checks, OS compatibility, hardware compatibility, application testing, and performance tuning.', icon: FaExclamationTriangle },
    { id: 'security-vulnerabilities', title: 'Security Vulnerabilities', description: 'Patching and securing software vulnerabilities.', details: 'Our Security Vulnerabilities services include vulnerability scanning, patching and updates, security audits, malware protection, and system hardening.', icon: FaShieldAlt },
    { id: 'updates-upgrades', title: 'Updates and Upgrades', description: 'Managing software updates and upgrades.', details: 'Our Updates and Upgrades services include update management, upgrade planning, compatibility checks, license management, and post-upgrade support.', icon: FaSyncAlt },
    { id: 'data-backup', title: 'Data Backup', description: 'Ensuring data backup before troubleshooting.', details: 'Our Data Backup services include full system backup, incremental backup, cloud backup solutions, data restoration, and disaster recovery planning.', icon: FaHdd },
    { id: 'remote-support', title: 'Remote Support', description: 'Providing remote support for software issues.', details: 'Our Remote Support services include remote diagnosis, live assistance, remote configuration, software troubleshooting, and technical guidance.', icon: FaLifeRing },
    { id: 'custom-software-solutions', title: 'Custom Software Solutions', description: 'Developing custom software solutions for your needs.', details: 'Our Custom Software Solutions services include custom development, software integration, feature enhancements, maintenance and support, and scalability solutions.', icon: FaCogs }
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
    console.log(formData);
  };

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div>
      <Helmet>
        <title>Software Troubleshooting | 24x7 Tech On Call | Nationwide</title>
        <meta name="description" content="Expert software troubleshooting services including OS errors, application crashes, software installation, and more. Serving Nationwide." />
        <meta name="keywords" content="software troubleshooting, OS errors, application crashes, software installation, driver issues, system performance" />
        <link rel="canonical" href="https://24x7techoncall.com/residential-support/software-troubleshooting" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Software Troubleshooting | 24x7 Tech On Call" />
        <meta property="og:description" content="Expert software troubleshooting services including OS errors, application crashes, software installation, and more." />
        <meta property="og:url" content="https://24x7techoncall.com/residential-support/software-troubleshooting" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Troubleshooting | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Expert software troubleshooting services including OS errors, application crashes, software installation, and more." />
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
            <span className="text-gray-300">Software Troubleshooting</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Software Troubleshooting</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Fast diagnosis and resolution for OS errors, crashes, driver problems, and more.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Expert Software Troubleshooting</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At 24x7 Tech On Call, we specialize in comprehensive software troubleshooting services to ensure your applications and systems run smoothly. Our certified technicians are experienced in diagnosing and resolving a wide range of software issues, ensuring your device operates at its best.
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
              <p className="text-gray-400 mb-8">Our software troubleshooting services are competitively priced for the Space Coast area. Contact us for a quote tailored to your specific issue.</p>
              <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Problem</h3>
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
                  <label className={labelClass}>Explanation of the Problem</label>
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
                24x7 Tech On Call proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida, providing personalized and efficient software troubleshooting services.
              </p>
              <p className="text-gray-600">
                We offer both onsite and remote services locally, and remote services across the USA.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe the software issue you\'re experiencing.', 'Receive a quote for the troubleshooting service.', 'Schedule a service appointment.', 'Our technicians diagnose and fix your software issues.', 'Pick up your device or receive a follow-up remotely.'].map((step, i) => (
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
          <h2 className="text-3xl font-bold mb-3">Software Giving You Trouble?</h2>
          <p className="text-gray-400 mb-6">
            Our software experts nationwide can diagnose and fix virtually any software issue — fast and affordably.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SoftwareTroubleshooting;
