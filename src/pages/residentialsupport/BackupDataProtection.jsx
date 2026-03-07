import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaShieldAlt, FaLock, FaCloud, FaDatabase, FaSync, FaServer, FaFileAlt, FaTrash, FaLaptopCode, FaTools, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/optimized-hero/backupheroimage-1152.jpg';

const BackupDataProtection = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://24x7techoncall.com' + (heroImage || '');
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
    { id: 'data-backup-solutions', title: 'Data Backup Solutions', description: 'Implementing reliable backup systems to protect your data.', details: 'We provide reliable data backup solutions to ensure your data is securely stored and easily recoverable in case of any unforeseen events.', icon: FaDatabase },
    { id: 'cloud-backup', title: 'Cloud Backup', description: 'Setting up secure cloud backup solutions for remote data storage.', details: 'Our cloud backup services offer secure and scalable solutions for remote data storage, ensuring your data is always accessible and protected.', icon: FaCloud },
    { id: 'data-encryption', title: 'Data Encryption', description: 'Encrypting your data to prevent unauthorized access.', details: 'We implement advanced data encryption techniques to protect your sensitive information from unauthorized access.', icon: FaLock },
    { id: 'disaster-recovery', title: 'Disaster Recovery', description: 'Planning and implementing disaster recovery solutions.', details: 'Our disaster recovery services help you prepare for and recover from data loss incidents, ensuring business continuity.', icon: FaSync },
    { id: 'data-migration', title: 'Data Migration', description: 'Safely transferring data between devices and storage solutions.', details: 'We offer secure data migration services to ensure your data is transferred safely and efficiently between different devices and storage solutions.', icon: FaServer },
    { id: 'automated-backups', title: 'Automated Backups', description: 'Configuring automated backup schedules to ensure data protection.', details: 'Our automated backup solutions ensure your data is backed up regularly without manual intervention, providing continuous data protection.', icon: FaFileAlt },
    { id: 'data-integrity-checks', title: 'Data Integrity Checks', description: 'Regularly verifying the integrity of your backups.', details: 'We perform regular data integrity checks to ensure your backups are complete and free from corruption.', icon: FaShieldAlt },
    { id: 'secure-data-deletion', title: 'Secure Data Deletion', description: 'Ensuring secure deletion of sensitive data.', details: 'Our secure data deletion services ensure that your sensitive information is permanently erased and cannot be recovered.', icon: FaTrash },
    { id: 'consultation-support', title: 'Consultation and Support', description: 'Providing expert advice and ongoing support for data protection.', details: 'We offer consultation and support services to help you develop and maintain effective data protection strategies.', icon: FaTools },
    { id: 'training-education', title: 'Training and Education', description: 'Educating you on best practices for data protection.', details: 'Our training and education services provide you with the knowledge and skills needed to protect your data effectively.', icon: FaLaptopCode }
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
        alert('Thanks! Your data protection request has been received. We will contact you within 1 business day.');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('We could not send your request right now. Please try again, or call (321) 953-5199.');
      });
    setFormData({ name: '', phone: '', email: '', serviceType: '', serviceDeliveryMethod: '', problem: '' });
  };

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div>
      <Helmet>
        <title>Backup and Data Protection Services | 24/7 Tech On Call | Nationwide</title>
        <meta name="description" content="Secure your valuable data with our comprehensive backup and data protection services in Nationwide. We offer cloud backup, disaster recovery, and data encryption solutions." />
        <meta name="keywords" content="data protection near me, data backup Palm Bay, cloud backup Melbourne FL, disaster recovery, data encryption, secure data storage, backup services, 24/7 Tech On Call" />
        <link rel="canonical" href="https://24x7techoncall.com/residential-support/backup-data-protection" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Backup and Data Protection Services | 24/7 Tech On Call | Nationwide" />
        <meta property="og:description" content="Protect your data with 24/7 Tech On Call's backup and data protection services. Serving Nationwide." />
        <meta property="og:url" content="https://24x7techoncall.com/residential-support/backup-data-protection" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Backup and Data Protection Services | 24/7 Tech On Call" />
        <meta name="twitter:description" content="Comprehensive backup and data protection services in Nationwide." />
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
            <span className="text-gray-300">Backup &amp; Data Protection</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Backup and Data Protection</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Keep your personal data safe with cloud backup, encryption, and disaster recovery solutions.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Expert Backup and Data Protection Services</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At 24/7 Tech On Call, we specialize in comprehensive backup and data protection services to safeguard your valuable information. Our certified technicians provide reliable solutions to ensure your data is secure and recoverable in case of any unforeseen events.
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
              <p className="text-gray-400 mb-8">For more than two decades, 24/7 Tech On Call has resolved over 10,000 IT issues. Contact us for a custom data protection quote.</p>
              <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Data Protection Needs</h3>
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
                  <label className={labelClass}>Explanation of Your Data Protection Needs</label>
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
                <h3 className="text-xl font-bold text-gray-900">Serving Palm Bay, Melbourne & Beyond</h3>
              </div>
              <p className="text-gray-600">
                For more than two decades, 24/7 Tech On Call has resolved over 10,000 IT issues for clients across the entire United States, and nationwide. We deliver personalized data protection solutions to keep your information secure.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe your data protection needs.', 'Receive a quote for the services.', 'Schedule a service appointment.', 'Our technicians implement the backup and data protection solutions.', 'Receive ongoing support and maintenance as needed.'].map((step, i) => (
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
          <h2 className="text-3xl font-bold mb-3">Protect Your Data Today</h2>
          <p className="text-gray-400 mb-6">
            Don't risk losing irreplaceable files. Our data protection experts nationwide can set up a comprehensive backup solution for you.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BackupDataProtection;
