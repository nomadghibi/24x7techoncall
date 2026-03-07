import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaNetworkWired, FaServer, FaDatabase, FaShieldAlt, FaCloud, FaHeadset, FaLaptopCode, FaCogs, FaMicrochip, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/optimized-hero/managedit-1152.jpg';

const ManagedITServices = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://24x7techoncall.com' + (heroImage || '');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: '', serviceDeliveryMethod: '', problem: '' });
  const [selectedService, setSelectedService] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { id: 'network-management', title: 'Network Management', description: 'Monitoring and managing your business network to ensure optimal performance and security.', details: 'Our network management services ensure your business network is running smoothly, securely, and efficiently. We monitor network performance, manage configurations, and resolve issues promptly.', icon: FaNetworkWired },
    { id: 'server-management', title: 'Server Management', description: 'Maintaining and managing your servers to ensure they run smoothly and efficiently.', details: 'Our server management services include regular maintenance, monitoring, and troubleshooting to keep your servers running at peak performance.', icon: FaServer },
    { id: 'data-backup-recovery', title: 'Data Backup and Recovery', description: 'Implementing robust data backup solutions and providing recovery services to protect your business data.', details: 'We implement reliable data backup solutions to protect your business data and provide fast recovery services in case of data loss.', icon: FaDatabase },
    { id: 'cybersecurity-services', title: 'Cybersecurity Services', description: 'Protecting your business from cyber threats with comprehensive security solutions.', details: 'Our cybersecurity services protect your business from cyber threats through regular security assessments, threat monitoring, and implementing security measures.', icon: FaShieldAlt },
    { id: 'cloud-services', title: 'Cloud Services', description: 'Providing and managing cloud solutions to improve your business\'s flexibility and scalability.', details: 'We help you leverage cloud solutions to improve flexibility, scalability, and cost-efficiency. Our services include cloud migration, management, and optimization.', icon: FaCloud },
    { id: 'help-desk-support', title: 'Help Desk Support', description: 'Offering 24/7 support to resolve any IT issues your business may encounter.', details: 'Our help desk support team is available 24/7 to assist you with any IT-related issues, ensuring minimal downtime and maximum productivity.', icon: FaHeadset },
    { id: 'it-consulting', title: 'IT Consulting', description: 'Providing expert advice to help your business leverage technology for growth and efficiency.', details: 'Our IT consulting services provide expert advice on leveraging technology for business growth and efficiency. We offer strategic planning, technology assessments, and project management.', icon: FaLaptopCode },
    { id: 'software-management', title: 'Software Management', description: 'Managing software updates and ensuring your business applications run smoothly.', details: 'We manage software updates, patches, and licensing to ensure your business applications are always up-to-date and running smoothly.', icon: FaCogs },
    { id: 'hardware-management', title: 'Hardware Management', description: 'Maintaining and managing your business hardware to ensure it performs optimally.', details: 'Our hardware management services include regular maintenance, repairs, and upgrades to ensure your business hardware performs optimally.', icon: FaMicrochip },
    { id: 'compliance-management', title: 'Compliance Management', description: 'Ensuring your IT systems comply with industry regulations and standards.', details: 'We help you ensure your IT systems comply with industry regulations and standards through regular audits, risk assessments, and policy implementation.', icon: FaShieldAlt },
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
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
    setFormData({ name: '', phone: '', email: '', serviceType: '', serviceDeliveryMethod: '', problem: '' });
  };

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div>
      <Helmet>
        <title>Managed IT Services | 24/7 Tech On Call | Nationwide</title>
        <meta name="description" content="Ensure your business runs smoothly with managed IT services from 24/7 Tech On Call. From network management to cybersecurity, we cover all your IT needs." />
        <link rel="canonical" href="https://24x7techoncall.com/business-solutions/managed-it-services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Managed IT Services | 24/7 Tech On Call" />
        <meta property="og:description" content="Ensure your business runs smoothly with managed IT services from 24/7 Tech On Call. From network management to cybersecurity, we cover all your IT needs." />
        <meta property="og:url" content="https://24x7techoncall.com/business-solutions/managed-it-services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Managed IT Services | 24/7 Tech On Call" />
        <meta name="twitter:description" content="Ensure your business runs smoothly with managed IT services from 24/7 Tech On Call." />
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
            <span className="text-gray-300">Managed IT Services</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Managed IT Services</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Comprehensive IT management so you can focus on growing your business.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Expert Managed IT Services</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At 24/7 Tech On Call, we provide comprehensive managed IT services to ensure your business technology runs smoothly and efficiently. Our certified technicians offer a range of services tailored to meet the unique needs of your business.
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
              <p className="text-gray-400 mb-8">Our Managed IT Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
              <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Managed IT Needs</h3>
              {isSubmitted ? (
                <p className="text-green-600 font-semibold">Thank you for your submission! We will get back to you soon.</p>
              ) : (
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
                    <label className={labelClass}>Service Delivery Method</label>
                    <select name="serviceDeliveryMethod" value={formData.serviceDeliveryMethod} onChange={handleChange} className={inputClass} required>
                      <option value="">Select a delivery method</option>
                      <option value="remote-service">Remote Service</option>
                      <option value="onsite-service">Onsite Service</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Explanation of Your Managed IT Needs</label>
                    <textarea name="problem" value={formData.problem} onChange={handleChange} rows={4} className={inputClass} required />
                  </div>
                  <button type="submit" className="w-full bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors">
                    Submit Request
                  </button>
                </form>
              )}
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
                For more than two decades, 24/7 Tech On Call has resolved over 10,000 IT issues, enabling businesses to focus on growth. Proudly serving homes and businesses across the entire United States, we deliver personalized and efficient managed IT services to keep your operations running smoothly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe the managed IT services you\'re seeking.', 'Receive a quote for the services.', 'Schedule a service appointment.', 'Our technicians provide the necessary IT solutions.', 'Receive ongoing support and maintenance as needed.'].map((step, i) => (
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
          <h2 className="text-3xl font-bold mb-3">Ready for Worry-Free IT?</h2>
          <p className="text-gray-400 mb-6">
            Our managed IT specialists nationwide can take full control of your technology so your team stays productive.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ManagedITServices;
