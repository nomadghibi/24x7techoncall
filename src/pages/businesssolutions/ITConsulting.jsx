import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaNetworkWired, FaLock, FaCloud, FaSync, FaBalanceScale, FaDesktop, FaDatabase, FaChalkboardTeacher, FaShieldAlt, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/optimized-hero/itsolution-1152.jpg';

const ITConsulting = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://24x7techoncall.com' + (heroImage || '');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: '', serviceDeliveryMethod: '', problem: '' });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'technology-assessment', title: 'Technology Assessment', description: 'Evaluating your current IT infrastructure and identifying areas for improvement.', details: 'Our Technology Assessment service involves a thorough evaluation of your existing IT infrastructure, including hardware, software, and network systems. We identify strengths, weaknesses, and opportunities for improvement, and provide you with a detailed report and recommendations.', icon: FaDesktop },
    { id: 'strategic-planning', title: 'Strategic Planning', description: 'Developing long-term IT strategies aligned with your business goals.', details: 'Our Strategic Planning service involves analyzing your current IT infrastructure and aligning it with your business objectives. We create a strategic plan that ensures your IT investments support your long-term goals.', icon: FaBalanceScale },
    { id: 'network-design', title: 'Network Design and Implementation', description: 'Creating robust and scalable network solutions.', details: 'With Network Design and Implementation, we assess your current IT setup and recommend changes that improve performance, reduce costs, and increase efficiency. This includes server consolidation, virtualization, and cloud migration strategies.', icon: FaNetworkWired },
    { id: 'cybersecurity-solutions', title: 'Cybersecurity Solutions', description: 'Implementing security measures to protect your business from cyber threats.', details: 'Our Cybersecurity Solutions service involves implementing security measures to protect your business from cyber threats. This includes firewall setup, antivirus software installation, and regular security audits.', icon: FaLock },
    { id: 'cloud-solutions', title: 'Cloud Solutions', description: 'Advising on and implementing cloud-based services.', details: 'Our Cloud Solutions service involves advising on and implementing cloud-based services. This includes cloud storage setup, cloud-based software installation, and cloud migration strategies.', icon: FaCloud },
    { id: 'disaster-recovery', title: 'Disaster Recovery Planning', description: 'Preparing for data loss and ensuring business continuity.', details: 'Our Disaster Recovery Planning service involves preparing for data loss and ensuring business continuity. This includes data backup setup, disaster recovery plan development, and regular disaster recovery drills.', icon: FaSync },
    { id: 'compliance-risk', title: 'Compliance and Risk Management', description: 'Ensuring your IT systems comply with industry regulations.', details: 'Our Compliance and Risk Management service involves ensuring your IT systems comply with industry regulations. This includes regular compliance audits, risk assessments, and compliance training for your staff.', icon: FaBalanceScale },
    { id: 'infrastructure-upgrades', title: 'IT Infrastructure Upgrades', description: 'Recommending and implementing hardware and software upgrades.', details: 'Our IT Infrastructure Upgrades service involves recommending and implementing hardware and software upgrades. This includes server upgrades, software updates, and network improvements.', icon: FaDesktop },
    { id: 'data-management', title: 'Data Management and Analytics', description: 'Optimizing data storage and leveraging analytics for business insights.', details: 'Our Data Management and Analytics service involves optimizing data storage and leveraging analytics for business insights. This includes data warehousing, business intelligence software installation, and data analysis services.', icon: FaDatabase },
    { id: 'training-support', title: 'Training and Support', description: 'Providing training for your staff and ongoing IT support.', details: 'Our Training and Support service involves providing training for your staff and ongoing IT support. This includes IT training sessions, help desk support, and regular IT maintenance services.', icon: FaChalkboardTeacher },
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
        <title>IT Consulting Services | 24/7 Tech On Call | Nationwide</title>
        <meta name="description" content="Strategic IT consulting services for businesses in Nationwide to improve operations, security, and growth." />
        <link rel="canonical" href="https://24x7techoncall.com/business-solutions/it-consulting" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="IT Consulting Services | 24/7 Tech On Call" />
        <meta property="og:description" content="Strategic IT consulting services for businesses in Nationwide to improve operations, security, and growth." />
        <meta property="og:url" content="https://24x7techoncall.com/business-solutions/it-consulting" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Consulting Services | 24/7 Tech On Call" />
        <meta name="twitter:description" content="Strategic IT consulting services for businesses in Nationwide." />
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
            <span className="text-gray-300">IT Consulting</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">IT Consulting</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Strategic technology guidance to align your IT with your business goals and drive growth.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Expert IT Consulting Services</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At 24/7 Tech On Call, we are dedicated to empowering businesses nationwide, the USA, and across the U.S. through our specialized IT consulting services. Our certified consultants deliver expert guidance and tailored solutions, helping your business harness the power of technology to drive growth and enhance operational efficiency.
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
              <p className="text-gray-400 mb-8">Our IT Consulting Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
              <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your IT Consulting Needs</h3>
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
                  <label className={labelClass}>Explanation of Your IT Consulting Needs</label>
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
                For more than two decades, 24/7 Tech On Call has resolved over 10,000 IT issues. Proudly serving homes and businesses across the entire United States, our IT consultants deliver personalized strategic solutions to optimize your business technology.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">Steps to Optimize Your Business IT</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe the IT consulting services you\'re seeking.', 'Receive a quote for the services.', 'Schedule a consultation appointment.', 'Our consultants provide the necessary IT solutions.', 'Receive ongoing support and maintenance as needed.'].map((step, i) => (
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
          <h2 className="text-3xl font-bold mb-3">Need Expert IT Guidance?</h2>
          <p className="text-gray-400 mb-6">
            Our IT consultants nationwide can assess your current technology and develop a strategic roadmap for your business.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;
