import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaShieldAlt, FaLock, FaCloud, FaNetworkWired, FaSync, FaBalanceScale, FaDatabase, FaChalkboardTeacher, FaCogs, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/optimized-hero/businesscybersecurity-1152.jpg';

const BusinessCybersecurity = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://bestcomputertec.com' + (heroImage || '');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: '', serviceDeliveryMethod: '', problem: '' });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'advanced-threat-protection', title: 'Advanced Threat Protection', description: 'Proactively detect and mitigate advanced cyber threats targeting your business.', details: 'Our Advanced Threat Protection service detects and mitigates advanced cyber threats targeting your business, ensuring proactive defense.', icon: FaShieldAlt },
    { id: 'endpoint-security', title: 'Endpoint Security', description: 'Secure all endpoints with cutting-edge protection against malware, ransomware, and other threats.', details: 'Our Endpoint Security service secures all endpoints with cutting-edge protection against malware, ransomware, and other cyber threats.', icon: FaLock },
    { id: 'network-security', title: 'Network Security', description: 'Implement robust firewalls, intrusion detection systems, and secure network architecture to defend against attacks.', details: 'Our Network Security service implements robust firewalls, intrusion detection systems, and secure network architecture to defend against attacks.', icon: FaNetworkWired },
    { id: 'data-encryption', title: 'Data Encryption', description: 'Protect sensitive business data with strong encryption methods for data at rest and in transit.', details: 'Our Data Encryption service protects sensitive business data with strong encryption methods for data at rest and in transit.', icon: FaLock },
    { id: 'siem', title: 'Security Information and Event Management (SIEM)', description: 'Monitor and analyze security events in real-time for immediate threat response.', details: 'Our SIEM service monitors and analyzes security events in real-time for immediate threat response, ensuring rapid detection and mitigation.', icon: FaDatabase },
    { id: 'incident-response-forensics', title: 'Incident Response and Forensics', description: 'Quickly respond to security incidents and conduct thorough forensic investigations.', details: 'Our Incident Response and Forensics service quickly responds to security incidents and conducts thorough forensic investigations to mitigate damage.', icon: FaSync },
    { id: 'compliance-management', title: 'Compliance Management', description: 'Ensure your business meets industry-specific regulatory requirements and standards.', details: 'Our Compliance Management service ensures your business meets industry-specific regulatory requirements and standards, providing peace of mind.', icon: FaBalanceScale },
    { id: 'cloud-security', title: 'Cloud Security', description: 'Safeguard your cloud infrastructure and applications with advanced security measures.', details: 'Our Cloud Security service safeguards your cloud infrastructure and applications with advanced security measures, ensuring data protection.', icon: FaCloud },
    { id: 'security-awareness-training', title: 'Security Awareness Training', description: 'Educate your employees on best practices and strategies to prevent cyber attacks.', details: 'Our Security Awareness Training educates your employees on best practices and strategies to prevent cyber attacks, enhancing overall security.', icon: FaChalkboardTeacher },
    { id: 'managed-security-services', title: 'Managed Security Services', description: 'Continuous monitoring and management of your security infrastructure by our expert team.', details: 'Our Managed Security Services provide continuous monitoring and management of your security infrastructure by our expert team, ensuring protection.', icon: FaCogs },
    { id: 'penetration-testing', title: 'Penetration Testing', description: 'Simulate cyber attacks to identify vulnerabilities in your systems and improve your defenses.', details: 'Our Penetration Testing service simulates cyber attacks to identify vulnerabilities in your systems, helping you improve your defenses and security posture.', icon: FaShieldAlt },
    { id: 'identity-and-access-management', title: 'Identity and Access Management', description: 'Implement solutions to control user access and protect sensitive data.', details: 'Our Identity and Access Management service implements solutions to control user access and protect sensitive data, ensuring only authorized users have access.', icon: FaLock }
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
        alert('Thanks! Your cybersecurity request has been received. We will contact you within 1 business day.');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('We could not send your request right now. Please try again, or call (321) 953-5199.');
      });
    setFormData({ name: '', phone: '', email: '', serviceType: '', serviceDeliveryMethod: '', problem: '' });
  };

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div>
      <Helmet>
        <title>Business Cybersecurity Services | Best Computer Tech | Palm Bay &amp; Melbourne, FL</title>
        <meta name="description" content="Protect your business with advanced cybersecurity solutions from Best Computer Tech. We offer threat protection, endpoint security, data encryption, and more." />
        <meta name="keywords" content="cybersecurity, business security, advanced threat protection, endpoint security, network security, data encryption, SIEM, incident response, penetration testing" />
        <link rel="canonical" href="https://bestcomputertec.com/business-solutions/cybersecurity" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Business Cybersecurity Services | Best Computer Tech" />
        <meta property="og:description" content="Protect your business with advanced cybersecurity solutions from Best Computer Tech." />
        <meta property="og:url" content="https://bestcomputertec.com/business-solutions/cybersecurity" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Cybersecurity Services | Best Computer Tech" />
        <meta name="twitter:description" content="Protect your business with advanced cybersecurity solutions from Best Computer Tech." />
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
            <span className="text-gray-300">Business Cybersecurity</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Business Cybersecurity</h1>
          <p className="mt-3 text-blue-100 text-lg max-w-2xl">Advanced security solutions to protect your business from evolving cyber threats.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">Advanced Cybersecurity Solutions for Businesses</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            In today's digital landscape, safeguarding your business from cyber threats is paramount. At Best Computer Tech, we deliver advanced cybersecurity solutions designed to protect your sensitive data and maintain uninterrupted operations. With over 20 years of experience, our certified security experts provide a comprehensive suite of services tailored to your unique needs.
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
              <p className="text-blue-100 mb-8">Our Cybersecurity Services are designed to offer you the best protection at affordable prices. Contact us today to learn more about our pricing and packages.</p>
              <Link to="/contact" className="inline-block bg-white text-blue-900 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Cybersecurity Needs</h3>
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
                  <label className={labelClass}>Explanation of Your Cybersecurity Needs</label>
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
                For more than two decades, Best Computer Tech has resolved over 10,000 IT issues. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our cybersecurity experts deliver personalized solutions to keep your business data and operations protected.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-blue-600 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe the cybersecurity services you\'re seeking.', 'Receive a quote for the services.', 'Schedule a service appointment.', 'Our technicians implement the necessary security solutions.', 'Receive ongoing monitoring and support as needed.'].map((step, i) => (
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
          <h2 className="text-3xl font-bold mb-3">Protect Your Business Today</h2>
          <p className="text-blue-100 mb-6">
            Our cybersecurity experts in Palm Bay &amp; Melbourne are ready to assess your vulnerabilities and implement robust defenses.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessCybersecurity;
