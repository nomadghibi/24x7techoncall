import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaTools, FaBug, FaTachometerAlt, FaNetworkWired, FaPrint, FaEnvelope, FaDatabase, FaShieldAlt, FaDownload, FaQuestionCircle, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/computers-optimized-1152.jpg';

const RemoteSupport = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://bestcomputertec.com' + (heroImage || '');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: '', problem: '' });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'software-troubleshooting', title: 'Software Troubleshooting', description: 'Diagnosing and fixing software issues remotely.', details: 'Our Software Troubleshooting services include system crashes, application errors, software updates, compatibility issues, and performance problems.', icon: FaTools },
    { id: 'virus-malware-removal', title: 'Virus and Malware Removal', description: 'Removing malicious software from your system.', details: 'Our Virus and Malware Removal services include virus removal, malware cleanup, spyware protection, adware removal, and system security.', icon: FaBug },
    { id: 'system-optimization', title: 'System Optimization', description: 'Improving the performance of your device.', details: 'Our System Optimization services include speed enhancement, disk cleanup, memory optimization, startup management, and system tune-up.', icon: FaTachometerAlt },
    { id: 'network-support', title: 'Network Support', description: 'Resolving network connectivity issues.', details: 'Our Network Support services include Wi-Fi troubleshooting, router configuration, network security, LAN setup, and internet speed issues.', icon: FaNetworkWired },
    { id: 'printer-setup-troubleshooting', title: 'Printer Setup and Troubleshooting', description: 'Assisting with printer installation and issues.', details: 'Our Printer Setup and Troubleshooting services include printer installation, driver updates, connectivity issues, print quality problems, and wireless printing setup.', icon: FaPrint },
    { id: 'email-configuration', title: 'Email Configuration', description: 'Setting up and troubleshooting email accounts.', details: 'Our Email Configuration services include email setup, account recovery, spam filtering, email sync issues, and security configuration.', icon: FaEnvelope },
    { id: 'data-backup-recovery', title: 'Data Backup and Recovery', description: 'Ensuring your data is backed up and recoverable.', details: 'Our Data Backup and Recovery services include cloud backup, local backup solutions, data restoration, disaster recovery planning, and data migration.', icon: FaDatabase },
    { id: 'security-setup', title: 'Security Setup', description: 'Implementing security measures to protect your device.', details: 'Our Security Setup services include firewall configuration, antivirus installation, security audits, password management, and encryption services.', icon: FaShieldAlt },
    { id: 'software-installation', title: 'Software Installation', description: 'Installing and configuring software applications.', details: 'Our Software Installation services include new software setup, software configuration, license management, application updates, and compatibility checks.', icon: FaDownload },
    { id: 'general-tech-support', title: 'General Tech Support', description: 'Providing answers and solutions to your tech questions.', details: 'Our General Tech Support services include device setup, technical consultations, troubleshooting advice, performance tips, and remote assistance.', icon: FaQuestionCircle }
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
        <title>Remote Support Services | Best Computer Tech | Palm Bay & Melbourne, FL</title>
        <meta name="description" content="Get expert remote support services in Palm Bay and Melbourne, FL. We offer software troubleshooting, virus removal, system optimization, network support, and email configuration to keep your systems running smoothly from anywhere." />
        <meta name="keywords" content="remote support near me, software troubleshooting Palm Bay, virus removal Melbourne FL, system optimization, network support, email configuration, remote IT help, Best Computer Tech" />
        <link rel="canonical" href="https://bestcomputertec.com/residential-support/remote-support" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Remote Support Services | Best Computer Tech | Palm Bay & Melbourne, FL" />
        <meta property="og:description" content="Best Computer Tech offers expert remote support services, including software troubleshooting, virus removal, and more. Serving Palm Bay and Melbourne, FL." />
        <meta property="og:url" content="https://bestcomputertec.com/residential-support/remote-support" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Remote Support Services | Best Computer Tech" />
        <meta name="twitter:description" content="Expert remote support services in Palm Bay and Melbourne, FL. Software troubleshooting, virus removal, system optimization, and more." />
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
            <span className="text-gray-300">Remote Support</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Remote Support</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Expert IT help delivered directly to your screen — no visit required.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Expert Remote Support Services</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At Best Computer Tech, we specialize in comprehensive remote support services to resolve your technical issues quickly and efficiently. Our certified technicians can diagnose and fix a wide range of problems without needing to visit your location, ensuring your devices are up and running in no time.
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
              <p className="text-gray-400 mb-8">Our remote support services are competitively priced for the Space Coast area. Contact us today for an exact quote for your needs.</p>
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
                Best Computer Tech proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida, providing personalized and efficient remote support services.
              </p>
              <p className="text-gray-600">
                We offer both onsite and remote services locally, and remote services across the entire USA.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe the technical issue you\'re facing.', 'Receive a quote for the remote support session.', 'Schedule a remote session at a convenient time.', 'Our technician connects remotely to diagnose and fix the issue.', 'Receive follow-up to confirm the issue is fully resolved.'].map((step, i) => (
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
          <h2 className="text-3xl font-bold mb-3">Need Remote Tech Help Now?</h2>
          <p className="text-gray-400 mb-6">
            Our remote support technicians in Palm Bay &amp; Melbourne can connect to your device and resolve most issues in a single session.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RemoteSupport;
