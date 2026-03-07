import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaLaptop, FaTools, FaServer, FaShieldAlt, FaCogs, FaDatabase, FaCloud, FaChalkboardTeacher, FaLifeRing, FaNetworkWired, FaLightbulb, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/technicalsupportmaintenance-1152.jpg';

const TechConsultation = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://24x7techoncall.com' + (heroImage || '');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    needs: ''
  });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'technology-assessment', title: 'Technology Assessment', description: 'Evaluating your current tech setup and needs.', details: 'Our Technology Assessment services include system evaluation, performance analysis, hardware assessment, software review, and network inspection.', icon: FaLaptop },
    { id: 'hardware-recommendations', title: 'Hardware Recommendations', description: 'Suggesting the best hardware for your needs.', details: 'Our Hardware Recommendations services include computer recommendations, peripheral devices, networking equipment, storage solutions, and custom builds.', icon: FaTools },
    { id: 'software-solutions', title: 'Software Solutions', description: 'Recommending the right software for your tasks.', details: 'Our Software Solutions services include application selection, configuration and setup, license management, update and upgrade assistance, and training and support.', icon: FaServer },
    { id: 'network-design', title: 'Network Design', description: 'Creating efficient and secure network solutions.', details: 'Our Network Design services include network planning, hardware selection, installation and configuration, security implementation, and performance optimization.', icon: FaNetworkWired },
    { id: 'security-assessments', title: 'Security Assessments', description: 'Evaluating and improving your tech security.', details: 'Our Security Assessments services include vulnerability scanning, penetration testing, security audits, risk management, and compliance checks.', icon: FaShieldAlt },
    { id: 'system-optimization', title: 'System Optimization', description: 'Enhancing the performance of your existing setup.', details: 'Our System Optimization services include performance tuning, resource management, cleanup and maintenance, hardware upgrades, and software optimization.', icon: FaCogs },
    { id: 'backup-solutions', title: 'Backup Solutions', description: 'Implementing reliable data backup systems.', details: 'Our Backup Solutions services include data backup plans, cloud backup services, disaster recovery solutions, automated backup scheduling, and data restoration services.', icon: FaDatabase },
    { id: 'cloud-solutions', title: 'Cloud Solutions', description: 'Advising on cloud services and migration.', details: 'Our Cloud Solutions services include cloud migration planning, service selection, configuration and setup, security measures, and cost management.', icon: FaCloud },
    { id: 'tech-training', title: 'Tech Training', description: 'Providing training on new systems and software.', details: 'Our Tech Training services include system usage, software applications, security practices, network management, and ongoing support.', icon: FaChalkboardTeacher },
    { id: 'ongoing-support', title: 'Ongoing Support', description: 'Offering continued support and maintenance.', details: 'Our Ongoing Support services include remote assistance, onsite support, system monitoring, regular maintenance, and emergency services.', icon: FaLifeRing },
    { id: 'customized-tech-plans', title: 'Customized Tech Plans', description: 'Developing tailored technology plans for your needs.', details: 'Our Customized Tech Plans services include needs assessment, custom solutions, implementation roadmap, budget planning, and progress reviews.', icon: FaLightbulb },
    { id: 'emerging-technologies', title: 'Emerging Technologies', description: 'Advising on the latest tech innovations.', details: 'Our Emerging Technologies services include AI and machine learning, blockchain, IoT solutions, 5G integration, and future tech trends.', icon: FaCogs }
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
        <title>Personalized Tech Consultation | 24/7 Tech On Call | Nationwide</title>
        <meta name="description" content="Get expert personalized tech consultation services in Nationwide. We offer technology assessments, hardware recommendations, software solutions, network design, and security assessments tailored to your needs." />
        <meta name="keywords" content="tech consultation near me, technology assessment Palm Bay, tech consultation Melbourne FL, hardware recommendations, software solutions, network design, security assessments, personalized tech services, 24/7 Tech On Call" />
        <link rel="canonical" href="https://24x7techoncall.com/residential-support/tech-consultation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Personalized Tech Consultation | 24/7 Tech On Call | Nationwide" />
        <meta property="og:description" content="Receive personalized tech consultation from the experts at 24/7 Tech On Call. Serving Nationwide." />
        <meta property="og:url" content="https://24x7techoncall.com/residential-support/tech-consultation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Personalized Tech Consultation | 24/7 Tech On Call" />
        <meta name="twitter:description" content="Expert tech consultation services in Nationwide." />
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
            <span className="text-gray-300">Tech Consultation</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Personalized Tech Consultation</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Expert technology advice tailored to your unique needs and budget.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Expert Personalized Tech Consultation</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At 24/7 Tech On Call, we specialize in personalized tech consultation services to help you make informed decisions about your technology needs. Our certified technicians provide expert advice and tailored solutions to ensure your tech setup meets your specific requirements.
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
              <p className="text-gray-400 mb-8">Our tech consultation services are priced competitively for the Space Coast area. Contact us today for a personalized quote based on your needs.</p>
              <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Needs</h3>
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
                  <label className={labelClass}>Explanation of Your Needs</label>
                  <textarea name="needs" value={formData.needs} onChange={handleChange} rows={4} className={inputClass} required />
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
                24/7 Tech On Call proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida, providing personalized and efficient tech consultation services.
              </p>
              <p className="text-gray-600">
                We offer both onsite and remote consultations locally, and remote consultations across the USA.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe the tech consultation you\'re seeking.', 'Receive a quote for the consultation.', 'Schedule a personalized consultation session.', 'Our experts assess your needs and provide tailored solutions.', 'Receive ongoing support and maintenance as needed.'].map((step, i) => (
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
          <h2 className="text-3xl font-bold mb-3">Need Expert Tech Advice?</h2>
          <p className="text-gray-400 mb-6">
            Our tech consultants nationwide are ready to assess your setup and provide personalized recommendations.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TechConsultation;
