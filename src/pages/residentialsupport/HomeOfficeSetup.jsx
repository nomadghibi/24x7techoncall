import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaLaptopHouse, FaDesktop, FaNetworkWired, FaPrint, FaShieldAlt, FaDatabase, FaLaptop, FaChalkboardTeacher, FaTools, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/optimized-hero/homeofficesetup-1152.jpg';

const HomeOfficeSetup = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://bestcomputertec.com' + (heroImage || '');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: '', problem: '' });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'workspace-design', title: 'Workspace Design', description: 'Creating a functional and ergonomic workspace layout.', details: 'Our Workspace Design services include ergonomic layout, space optimization, lighting setup, furniture arrangement, and personalized design.', icon: FaLaptopHouse },
    { id: 'equipment-setup', title: 'Equipment Setup', description: 'Installing and configuring computers, monitors, and peripherals.', details: 'Our Equipment Setup services include computer setup, monitor configuration, peripheral installation, device synchronization, and hardware troubleshooting.', icon: FaDesktop },
    { id: 'network-configuration', title: 'Network Configuration', description: 'Setting up a secure and reliable home network.', details: 'Our Network Configuration services include router setup, Wi-Fi optimization, network security, device connectivity, and bandwidth management.', icon: FaNetworkWired },
    { id: 'printer-scanner-setup', title: 'Printer and Scanner Setup', description: 'Installing and configuring printing and scanning devices.', details: 'Our Printer and Scanner Setup services include printer installation, scanner configuration, wireless printing, driver installation, and device maintenance.', icon: FaPrint },
    { id: 'software-installation', title: 'Software Installation', description: 'Installing and configuring necessary software applications.', details: 'Our Software Installation services include operating system installation, application setup, software updates, license management, and configuration.', icon: FaLaptop },
    { id: 'security-setup', title: 'Security Setup', description: 'Implementing security measures to protect your home office.', details: 'Our Security Setup services include antivirus installation, firewall setup, secure Wi-Fi, data encryption, and regular audits.', icon: FaShieldAlt },
    { id: 'backup-solutions', title: 'Backup Solutions', description: 'Setting up data backup systems to protect your work.', details: 'Our Backup Solutions services include cloud backup, local backup, automated backups, data recovery, and backup management.', icon: FaDatabase },
    { id: 'remote-access', title: 'Remote Access', description: 'Configuring remote access tools for seamless work from anywhere.', details: 'Our Remote Access services include VPN setup, remote desktop, cloud services, access controls, and secure connections.', icon: FaNetworkWired },
    { id: 'training-support', title: 'Training and Support', description: 'Providing training on new systems and ongoing support.', details: 'Our Training and Support services include personalized training, technical support, system tutorials, ongoing assistance, and resource materials.', icon: FaChalkboardTeacher },
    { id: 'consultation-services', title: 'Consultation Services', description: 'Offering expert advice and customized solutions.', details: 'Our Consultation Services include needs assessment, solution planning, implementation strategy, project management, and follow-up consultations.', icon: FaTools }
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
        alert('Thanks! Your home office setup request has been received. We will contact you within 1 business day.');
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
        <title>Home Office Setup Services | Best Computer Tech | Palm Bay & Melbourne, FL</title>
        <meta name="description" content="Transform your home into a productive workspace with our expert home office setup services in Palm Bay and Melbourne, FL. We handle everything from workspace design and equipment setup to network configuration and remote access solutions." />
        <meta name="keywords" content="home office setup near me, workspace design Palm Bay, home office setup Melbourne FL, equipment setup, network configuration, remote access, home office solutions, Best Computer Tech" />
        <link rel="canonical" href="https://bestcomputertec.com/residential-support/home-office-setup" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Home Office Setup Services | Best Computer Tech | Palm Bay & Melbourne, FL" />
        <meta property="og:description" content="Set up a functional and efficient home office with Best Computer Tech. Serving Palm Bay and Melbourne, FL, we offer comprehensive services including workspace design, equipment setup, and network configuration." />
        <meta property="og:url" content="https://bestcomputertec.com/residential-support/home-office-setup" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Office Setup Services | Best Computer Tech" />
        <meta name="twitter:description" content="Expert home office setup services in Palm Bay and Melbourne, FL." />
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
            <span className="text-gray-300">Home Office Setup</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Home Office Setup</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Complete workspace setup — from equipment and networking to security and remote access.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Expert Home Office Setup Services</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At Best Computer Tech, we specialize in comprehensive home office setup services to create an efficient and comfortable workspace for you. Our certified technicians are experienced in designing and implementing home office solutions tailored to your specific needs.
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
              <p className="text-gray-400 mb-8">Our home office setup services are priced to fit your budget. Contact us today for a customized quote based on your workspace needs.</p>
              <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Home Office Needs</h3>
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
                  <label className={labelClass}>Explanation of Your Home Office Needs</label>
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
                Best Computer Tech proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida, providing personalized and efficient home office setup services.
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
                {['Contact us via phone or our contact form.', 'Describe your home office setup needs.', 'Receive a quote for the setup services.', 'Schedule a service appointment.', 'Our technicians design, install, and configure your home office.', 'Receive follow-up support and maintenance as needed.'].map((step, i) => (
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
          <h2 className="text-3xl font-bold mb-3">Ready to Build Your Home Office?</h2>
          <p className="text-gray-400 mb-6">
            Our home office specialists in Palm Bay &amp; Melbourne can design and set up your perfect workspace from start to finish.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeOfficeSetup;
