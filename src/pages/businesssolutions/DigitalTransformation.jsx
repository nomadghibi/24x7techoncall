import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCloud, FaChartLine, FaRobot, FaUsers, FaLock, FaBullhorn, FaCogs, FaSync, FaLaptopCode, FaDatabase, FaLaptop, FaHeadset, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/optimized-hero/digitaltransformation-1152.jpg';

const DigitalTransformation = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://bestcomputertec.com' + (heroImage || '');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: '', serviceDeliveryMethod: '', problem: '' });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 'digital-strategy-development', title: 'Digital Strategy Development', description: 'Creating a comprehensive digital strategy tailored to your business goals.', details: 'We help you develop a comprehensive digital strategy that aligns with your business objectives. Our approach ensures that you leverage the latest technologies to stay competitive in the market.', icon: FaChartLine },
    { id: 'cloud-adoption', title: 'Cloud Adoption', description: 'Implementing cloud solutions to enhance flexibility, scalability, and efficiency.', details: 'Our cloud adoption services ensure that your business benefits from the flexibility, scalability, and efficiency of cloud solutions. We guide you through the process of migrating to the cloud and managing cloud resources effectively.', icon: FaCloud },
    { id: 'data-analytics', title: 'Data Analytics', description: 'Leveraging data analytics to gain insights and make data-driven decisions.', details: 'Our data analytics services help you gain valuable insights from your data. We use advanced analytics tools to transform raw data into actionable intelligence that drives informed decision-making.', icon: FaDatabase },
    { id: 'process-automation', title: 'Process Automation', description: 'Automating business processes to increase productivity and reduce operational costs.', details: 'We help you automate repetitive business processes to increase productivity and reduce operational costs. Our automation solutions streamline workflows and improve efficiency across your organization.', icon: FaRobot },
    { id: 'customer-experience-enhancement', title: 'Customer Experience Enhancement', description: 'Improving customer interactions and satisfaction through digital solutions.', details: 'Our customer experience enhancement services focus on improving interactions with your customers. We implement digital solutions that enhance customer satisfaction and loyalty.', icon: FaUsers },
    { id: 'cybersecurity-solutions', title: 'Cybersecurity Solutions', description: 'Ensuring your digital infrastructure is secure from cyber threats.', details: 'We provide comprehensive cybersecurity solutions to protect your digital infrastructure from cyber threats. Our services include risk assessments, threat monitoring, and security management.', icon: FaLock },
    { id: 'digital-marketing', title: 'Digital Marketing', description: 'Utilizing digital marketing strategies to reach and engage with your target audience.', details: 'Our digital marketing services help you reach and engage with your target audience effectively. We use various digital marketing strategies, including SEO, social media marketing, and email campaigns.', icon: FaBullhorn },
    { id: 'it-infrastructure-modernization', title: 'IT Infrastructure Modernization', description: 'Upgrading your IT infrastructure to support digital initiatives.', details: 'We assist you in modernizing your IT infrastructure to support digital initiatives. Our services include hardware upgrades, network improvements, and implementing new technologies.', icon: FaCogs },
    { id: 'change-management', title: 'Change Management', description: 'Guiding your organization through the digital transformation process.', details: 'Our change management services guide your organization through the digital transformation process. We help you manage change effectively to ensure a smooth transition and successful implementation.', icon: FaSync },
    { id: 'training-and-support', title: 'Training and Support', description: 'Providing training and support to ensure your team is equipped for digital success.', details: 'We provide comprehensive training and support to ensure your team is equipped with the skills needed for digital success. Our training programs cover various aspects of digital transformation, including new technologies and best practices.', icon: FaLaptopCode },
    { id: 'ai-integration', title: 'AI Integration', description: 'Incorporating artificial intelligence solutions to streamline operations.', details: 'Our AI Integration services incorporate artificial intelligence solutions to streamline operations and improve decision-making across your organization.', icon: FaRobot },
    { id: 'mobile-app-development', title: 'Mobile App Development', description: 'Developing custom mobile applications to enhance customer engagement.', details: 'Our Mobile App Development services create custom mobile applications that enhance customer engagement and provide seamless user experiences.', icon: FaLaptop }
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
        <title>Digital Transformation Services | Best Computer Tech | Palm Bay &amp; Melbourne, FL</title>
        <meta name="description" content="Modernize your business with digital transformation services including workflow automation, system integration, and strategic technology planning." />
        <link rel="canonical" href="https://bestcomputertec.com/business-solutions/digital-transformation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Digital Transformation Services | Best Computer Tech" />
        <meta property="og:description" content="Modernize your business with digital transformation services including workflow automation, system integration, and strategic technology planning." />
        <meta property="og:url" content="https://bestcomputertec.com/business-solutions/digital-transformation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Transformation Services | Best Computer Tech" />
        <meta name="twitter:description" content="Modernize your business with digital transformation services." />
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
            <span className="text-gray-300">Digital Transformation</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Digital Transformation</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Modernize your operations, enhance customer experiences, and fuel business growth through technology.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-4">Empower Your Business with Digital Transformation</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            At Best Computer Tech, we enable businesses in Palm Bay, Melbourne, FL, and nationwide to thrive in today's rapidly evolving digital landscape. Our expert consultants collaborate with you to craft and implement cutting-edge strategies that harness the latest technologies, enhancing your business operations and fueling growth.
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
              <p className="text-gray-400 mb-8">Our Digital Transformation Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
              <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-400 transition-colors text-center shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Your Digital Transformation Needs</h3>
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
                  <label className={labelClass}>Explanation of Your Digital Transformation Needs</label>
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
                For more than two decades, Best Computer Tech has resolved over 10,000 IT issues. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our digital transformation experts deliver personalized solutions to move your business forward.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaClipboardList className="text-cyan-500 text-xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">Steps to Transform Your Business</h3>
              </div>
              <ol className="space-y-3 text-gray-600 text-sm">
                {['Contact us via phone or our contact form.', 'Describe the digital transformation services you\'re seeking.', 'Receive a quote for the services.', 'Schedule a consultation appointment.', 'Our consultants implement the necessary transformation solutions.', 'Receive ongoing support and maintenance as needed.'].map((step, i) => (
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
          <h2 className="text-3xl font-bold mb-3">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-6">
            Our digital transformation experts in Palm Bay &amp; Melbourne are ready to help you modernize your operations and stay ahead of the competition.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-cyan-400 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;
