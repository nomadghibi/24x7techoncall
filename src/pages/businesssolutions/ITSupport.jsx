import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaHeadset, FaLaptop, FaDesktop, FaNetworkWired, FaServer, FaDatabase, FaShieldAlt, FaCogs, FaCloud, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/optimized-hero/businessitsupport-1152.jpg';

const ITSupport = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://bestcomputertec.com' + (heroImage || '');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: '', problem: '' });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'help-desk-support', title: 'Help Desk Support', description: 'Providing 24/7 assistance for any IT-related issues, ensuring minimal downtime.', details: 'Our Help Desk Support provides around-the-clock assistance for all IT-related issues, ensuring your business operations run smoothly with minimal downtime. We offer remote and on-site support tailored to your needs.', icon: FaHeadset },
    { id: 'on-site-support', title: 'On-Site Support', description: 'Offering prompt and efficient on-site support for hardware and software issues.', details: 'Our On-Site Support ensures that any hardware and software issues are promptly addressed by our experienced technicians. We provide timely interventions to minimize disruptions to your business operations.', icon: FaLaptop },
    { id: 'remote-support', title: 'Remote Support', description: 'Resolving IT problems quickly and efficiently through remote access.', details: 'Our Remote Support allows us to resolve IT problems quickly and efficiently without the need for a technician visit. We use secure remote access tools to troubleshoot and fix issues in real-time.', icon: FaDesktop },
    { id: 'network-management', title: 'Network Management', description: 'Monitoring and managing your business network to ensure optimal performance and security.', details: 'Our Network Management services include monitoring and managing your business network to ensure optimal performance and security. We proactively address potential issues to prevent downtime.', icon: FaNetworkWired },
    { id: 'server-management', title: 'Server Management', description: 'Maintaining and managing your servers to ensure they run smoothly and efficiently.', details: 'Our Server Management services involve maintaining and managing your servers to ensure they run smoothly and efficiently. We perform regular maintenance, updates, and troubleshooting to keep your servers in top condition.', icon: FaServer },
    { id: 'data-backup-recovery', title: 'Data Backup and Recovery', description: 'Implementing robust data backup solutions and providing recovery services to protect your business data.', details: 'Our Data Backup and Recovery services ensure that your business data is protected and can be quickly restored in case of data loss. We implement robust backup solutions and provide recovery services to safeguard your critical information.', icon: FaDatabase },
    { id: 'cybersecurity-services', title: 'Cybersecurity Services', description: 'Protecting your business from cyber threats with comprehensive security solutions.', details: 'Our Cybersecurity Services provide comprehensive protection against cyber threats. We implement advanced security measures, conduct regular security audits, and provide ongoing monitoring to keep your business safe.', icon: FaShieldAlt },
    { id: 'software-management', title: 'Software Management', description: 'Managing software updates and ensuring your business applications run smoothly.', details: 'Our Software Management services ensure that your business applications are always up-to-date and running smoothly. We manage software updates, troubleshoot issues, and provide support to keep your applications performing optimally.', icon: FaCogs },
    { id: 'hardware-management', title: 'Hardware Management', description: 'Maintaining and managing your business hardware to ensure it performs optimally.', details: 'Our Hardware Management services involve maintaining and managing your business hardware to ensure it performs optimally. We conduct regular maintenance, repairs, and upgrades to keep your hardware in excellent condition.', icon: FaDesktop },
    { id: 'it-consulting', title: 'IT Consulting', description: 'Providing expert advice to help your business leverage technology for growth and efficiency.', details: 'Our IT Consulting services provide expert advice to help your business leverage technology for growth and efficiency. We assess your current IT infrastructure, identify areas for improvement, and develop strategic plans to meet your business goals.', icon: FaNetworkWired },
    { id: 'business-continuity', title: 'Business Continuity Planning', description: 'Ensuring your business can continue to operate during and after a disaster.', details: 'Our business continuity planning services help you develop strategies to ensure your business can continue to operate during and after a disaster, minimizing downtime and data loss.', icon: FaShieldAlt },
    { id: 'virtualization', title: 'Virtualization Solutions', description: 'Optimizing your IT infrastructure through virtualization technologies.', details: 'We provide virtualization solutions to help you optimize your IT infrastructure, improve resource utilization, and reduce costs through server, storage, and network virtualization.', icon: FaCloud }
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
      }, (error) => {
        console.log('FAILED...', error);
        alert('We could not send your request right now. Please try again, or call (321) 953-5199.');
      });
  };

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div>
      <Helmet>
        <title>Business IT Support | Best Computer Tech | Palm Bay &amp; Melbourne, FL</title>
        <meta name="description" content="Reliable business IT support services for troubleshooting, maintenance, and system uptime in Palm Bay and Melbourne, FL." />
        <link rel="canonical" href="https://bestcomputertec.com/business-solutions/it-support" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Business IT Support | Best Computer Tech" />
        <meta property="og:description" content="Reliable business IT support services for troubleshooting, maintenance, and system uptime in Palm Bay and Melbourne, FL." />
        <meta property="og:url" content="https://bestcomputertec.com/business-solutions/it-support" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business IT Support | Best Computer Tech" />
        <meta name="twitter:description" content="Reliable business IT support services for troubleshooting, maintenance, and system uptime in Palm Bay and Melbourne, FL." />
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
            <span className="text-gray-300">IT Support</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Business IT Support</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Reliable, responsive IT support to keep your business running smoothly.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Reliable IT Support for Your Business</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At Best Computer Tech, we recognize that dependable IT support is crucial for the seamless operation of your business. Serving Palm Bay, Melbourne, FL, and clients across the U.S., our team of skilled IT professionals provides a comprehensive suite of support services designed to keep your technology running smoothly.
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
              <p className="text-gray-400 mb-8">Our Business IT Support services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
              <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your IT Support Needs</h3>
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
                    <option value="">Select a service type</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>{service.title}</option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Explanation of Your IT Support Needs</label>
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
                <h3 className="text-xl font-bold text-gray-900">Serving Palm Bay, Melbourne & the Space Coast</h3>
              </div>
              <p className="text-gray-600">
                For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our experienced technicians deliver personalized and efficient IT support tailored to your business.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe the IT support services you\'re seeking.', 'Receive a quote for the services.', 'Schedule a service appointment.', 'Our technicians provide the necessary IT support solutions.', 'Receive ongoing support and maintenance as needed.'].map((step, i) => (
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
          <h2 className="text-3xl font-bold mb-3">Need Reliable IT Support?</h2>
          <p className="text-gray-400 mb-6">
            Our IT experts in Palm Bay &amp; Melbourne are ready to keep your business technology running at its best.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ITSupport;
