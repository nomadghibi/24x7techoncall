import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaLock, FaCloud, FaSync, FaBalanceScale, FaDesktop, FaDatabase, FaShieldAlt, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/optimized-hero/businesscontiunity-1152.jpg';

const BusinessContinuity = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://bestcomputertec.com' + (heroImage || '');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: '', serviceDeliveryMethod: '', problem: '' });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'disaster-recovery-planning', title: 'Disaster Recovery Planning', description: 'Developing and implementing comprehensive disaster recovery plans to ensure quick recovery from unexpected events.', details: 'Our Disaster Recovery Planning service involves creating detailed plans to quickly recover from unexpected events, minimizing downtime and data loss.', icon: FaSync },
    { id: 'data-backup-solutions', title: 'Data Backup Solutions', description: 'Providing robust data backup solutions to protect your critical business data.', details: 'Our Data Backup Solutions ensure that your critical business data is protected and can be quickly restored in case of data loss.', icon: FaDatabase },
    { id: 'redundant-systems', title: 'Redundant Systems', description: 'Setting up redundant systems to ensure continuous operations in case of hardware or software failures.', details: 'Our Redundant Systems service ensures continuous operations by setting up backup systems that take over in case of hardware or software failures.', icon: FaLock },
    { id: 'cloud-based-solutions', title: 'Cloud-Based Solutions', description: 'Leveraging cloud technology to provide flexible and scalable business continuity solutions.', details: 'Our Cloud-Based Solutions use cloud technology to offer flexible and scalable continuity solutions, ensuring your business can operate from anywhere.', icon: FaCloud },
    { id: 'business-impact-analysis', title: 'Business Impact Analysis', description: 'Conducting thorough business impact analysis to identify critical business functions and dependencies.', details: 'Our Business Impact Analysis identifies critical functions and dependencies, helping you understand the impact of potential disruptions.', icon: FaBalanceScale },
    { id: 'risk-assessment', title: 'Risk Assessment', description: 'Assessing potential risks and developing strategies to mitigate them.', details: 'Our Risk Assessment service evaluates potential risks to your business and develops strategies to mitigate them, ensuring continuity.', icon: FaLock },
    { id: 'emergency-response-planning', title: 'Emergency Response Planning', description: 'Creating detailed emergency response plans to ensure your team knows what to do in case of a disruption.', details: 'Our Emergency Response Planning service creates detailed plans to guide your team during disruptions, ensuring a swift and organized response.', icon: FaShieldAlt },
    { id: 'it-infrastructure-management', title: 'IT Infrastructure Management', description: 'Managing your IT infrastructure to ensure high availability and reliability.', details: 'Our IT Infrastructure Management service ensures that your IT systems are highly available and reliable, supporting continuous business operations.', icon: FaDesktop },
    { id: 'security-solutions', title: 'Security Solutions', description: 'Implementing security measures to protect your business from cyber threats and data breaches.', details: 'Our Security Solutions protect your business from cyber threats and data breaches through advanced security measures and monitoring.', icon: FaLock },
    { id: 'continuous-monitoring', title: 'Continuous Monitoring', description: 'Providing continuous monitoring and support to ensure your business stays operational.', details: 'Our Continuous Monitoring service ensures that your business stays operational through proactive monitoring and support.', icon: FaDatabase },
    { id: 'business-continuity-testing', title: 'Business Continuity Testing', description: 'Regularly testing your business continuity plans to ensure they are effective.', details: 'Our Business Continuity Testing service involves regularly testing your continuity plans to ensure they are effective and can be executed successfully during a disruption.', icon: FaShieldAlt },
    { id: 'compliance-management', title: 'Compliance Management', description: 'Ensuring your business continuity plans comply with industry standards and regulations.', details: 'Our Compliance Management service ensures that your business continuity plans comply with industry standards and regulations, providing peace of mind that your plans are robust and compliant.', icon: FaBalanceScale }
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

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div>
      <Helmet>
        <title>Business Continuity Services | Best Computer Tech | Palm Bay &amp; Melbourne, FL</title>
        <meta name="description" content="Ensure your business remains operational during disruptions with our comprehensive Business Continuity services. We provide disaster recovery, data backup, IT infrastructure management, and more." />
        <meta name="keywords" content="business continuity, disaster recovery, data backup, IT infrastructure management, risk assessment, emergency response planning" />
        <link rel="canonical" href="https://bestcomputertec.com/business-solutions/business-continuity" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Business Continuity Services | Best Computer Tech" />
        <meta property="og:description" content="Ensure your business remains operational during disruptions with our comprehensive Business Continuity services." />
        <meta property="og:url" content="https://bestcomputertec.com/business-solutions/business-continuity" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Continuity Services | Best Computer Tech" />
        <meta name="twitter:description" content="Comprehensive business continuity and disaster recovery services in Palm Bay and Melbourne, FL." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* Hero */}
      <section
        className="relative min-h-[380px] flex items-end text-white"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <Link to="/business-solutions" className="hover:text-white transition-colors">Business Solutions</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Business Continuity</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Business Continuity</h1>
          <p className="mt-3 text-blue-100 text-lg max-w-2xl">Keep your business operational through any disruption with proactive planning and recovery solutions.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">Ensure Business Continuity with Our Services</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At Best Computer Tech, we provide comprehensive business continuity solutions to help your business stay operational during unexpected disruptions. Our team of experts offers a range of services designed to minimize downtime and ensure seamless operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-6">Click any service to learn more</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:border-blue-200 transition-all service-card overflow-hidden"
                onClick={() => handleServiceClick(service)}
              >
                <div className="p-6">
                  <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-xl text-blue-600" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </div>
                {selectedService?.id === service.id && (
                  <div className="px-6 pb-6 pt-3 border-t border-blue-100 bg-blue-50">
                    <p className="text-blue-800 text-sm leading-relaxed">{service.details}</p>
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
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl p-8 text-white flex flex-col justify-center">
              <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-2">Affordable Pricing</p>
              <p className="text-6xl font-bold mb-1">$95</p>
              <p className="text-blue-200 text-lg mb-4">Starting price</p>
              <p className="text-blue-100 mb-8">Our Business Continuity Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
              <Link to="/contact" className="inline-block bg-white text-blue-900 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Business Continuity Needs</h3>
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
                      <option key={service.id} value={service.title}>{service.title}</option>
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
                  <label className={labelClass}>Explanation of Your Business Continuity Needs</label>
                  <textarea name="problem" value={formData.problem} onChange={handleChange} rows={4} className={inputClass} required />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
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
                <FaMapMarkerAlt className="text-blue-600 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">Serving Palm Bay, Melbourne & the Space Coast</h3>
              </div>
              <p className="text-gray-600">
                For more than two decades, Best Computer Tech has resolved over 10,000 IT issues. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team delivers personalized and efficient business continuity solutions to keep your operations running.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-blue-600 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">Steps to Ensure Business Continuity</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe your business continuity needs.', 'Receive a quote for the services.', 'Schedule a service appointment.', 'Our technicians implement the necessary continuity solutions.', 'Receive ongoing support and maintenance as needed.'].map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-14 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FaHeadset className="mx-auto text-4xl text-blue-300 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Keep Your Business Running — No Matter What</h2>
          <p className="text-blue-100 mb-6">
            Our business continuity experts in Palm Bay &amp; Melbourne can help you build a resilient plan to survive any disruption.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessContinuity;
