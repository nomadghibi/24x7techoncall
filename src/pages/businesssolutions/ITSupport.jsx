

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { FaHeadset, FaLaptop, FaDesktop, FaNetworkWired, FaServer, FaDatabase, FaShieldAlt, FaCogs, FaCloud } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection';
import heroImage from '../../assets/optimized-hero/businessitsupport-1152.jpg'; // Adjust the path according to your file structure
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';

const ITSupport = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://bestcomputertec.com' + (heroImage || '');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    problem: ''
  });
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'help-desk-support',
      title: 'Help Desk Support',
      description: 'Providing 24/7 assistance for any IT-related issues, ensuring minimal downtime.',
      details: 'Our Help Desk Support provides around-the-clock assistance for all IT-related issues, ensuring your business operations run smoothly with minimal downtime. We offer remote and on-site support tailored to your needs.',
      icon: <FaHeadset className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'on-site-support',
      title: 'On-Site Support',
      description: 'Offering prompt and efficient on-site support for hardware and software issues.',
      details: 'Our On-Site Support ensures that any hardware and software issues are promptly addressed by our experienced technicians. We provide timely interventions to minimize disruptions to your business operations.',
      icon: <FaLaptop className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'remote-support',
      title: 'Remote Support',
      description: 'Resolving IT problems quickly and efficiently through remote access.',
      details: 'Our Remote Support allows us to resolve IT problems quickly and efficiently without the need for a technician visit. We use secure remote access tools to troubleshoot and fix issues in real-time.',
      icon: <FaDesktop className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-management',
      title: 'Network Management',
      description: 'Monitoring and managing your business network to ensure optimal performance and security.',
      details: 'Our Network Management services include monitoring and managing your business network to ensure optimal performance and security. We proactively address potential issues to prevent downtime and ensure your network runs smoothly.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'server-management',
      title: 'Server Management',
      description: 'Maintaining and managing your servers to ensure they run smoothly and efficiently.',
      details: 'Our Server Management services involve maintaining and managing your servers to ensure they run smoothly and efficiently. We perform regular maintenance, updates, and troubleshooting to keep your servers in top condition.',
      icon: <FaServer className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-backup-recovery',
      title: 'Data Backup and Recovery',
      description: 'Implementing robust data backup solutions and providing recovery services to protect your business data.',
      details: 'Our Data Backup and Recovery services ensure that your business data is protected and can be quickly restored in case of data loss. We implement robust backup solutions and provide recovery services to safeguard your critical information.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cybersecurity-services',
      title: 'Cybersecurity Services',
      description: 'Protecting your business from cyber threats with comprehensive security solutions.',
      details: 'Our Cybersecurity Services provide comprehensive protection against cyber threats. We implement advanced security measures, conduct regular security audits, and provide ongoing monitoring to keep your business safe from cyberattacks.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'software-management',
      title: 'Software Management',
      description: 'Managing software updates and ensuring your business applications run smoothly.',
      details: 'Our Software Management services ensure that your business applications are always up-to-date and running smoothly. We manage software updates, troubleshoot issues, and provide support to keep your applications performing optimally.',
      icon: <FaCogs className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'hardware-management',
      title: 'Hardware Management',
      description: 'Maintaining and managing your business hardware to ensure it performs optimally.',
      details: 'Our Hardware Management services involve maintaining and managing your business hardware to ensure it performs optimally. We conduct regular maintenance, repairs, and upgrades to keep your hardware in excellent condition.',
      icon: <FaDesktop className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'Providing expert advice to help your business leverage technology for growth and efficiency.',
      details: 'Our IT Consulting services provide expert advice to help your business leverage technology for growth and efficiency. We assess your current IT infrastructure, identify areas for improvement, and develop strategic plans to meet your business goals.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'business-continuity',
      title: 'Business Continuity Planning',
      description: 'Ensuring your business can continue to operate during and after a disaster.',
      details: 'Our business continuity planning services help you develop strategies to ensure your business can continue to operate during and after a disaster, minimizing downtime and data loss.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'virtualization',
      title: 'Virtualization Solutions',
      description: 'Optimizing your IT infrastructure through virtualization technologies.',
      details: 'We provide virtualization solutions to help you optimize your IT infrastructure, improve resource utilization, and reduce costs through server, storage, and network virtualization.',
      icon: <FaCloud className="mb-2 text-4xl text-blue-500" />
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service.id === selectedService?.id ? null : service);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.service-card')) {
      setSelectedService(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thanks! Your request has been received. We will contact you within 1 business day.');
      }, (error) => {
        console.log('FAILED...', error);
        alert('We could not send your request right now. Please try again, or call (321) 953-5199.');
      });
  };

  return (
    <div>
      <Helmet>
        <title>Business IT Support - Best Computer Tech</title>
        <meta
          name="description"
          content="Reliable business IT support services for troubleshooting, maintenance, and system uptime in Palm Bay and Melbourne, FL."
        />
        <link rel="canonical" href="https://bestcomputertec.com/business-solutions/it-support" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Business IT Support - Best Computer Tech" />
        <meta
          property="og:description"
          content="Reliable business IT support services for troubleshooting, maintenance, and system uptime in Palm Bay and Melbourne, FL."
        />
        <meta property="og:url" content="https://bestcomputertec.com/business-solutions/it-support" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business IT Support - Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Reliable business IT support services for troubleshooting, maintenance, and system uptime in Palm Bay and Melbourne, FL."
        />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>
      <HeroSection title="Business IT Support" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Reliable IT Support for Your Business</h2>
        <p className="mb-4">
        At Best Computer Tech, we recognize that dependable IT support is crucial for the seamless operation of your business. Serving Palm Bay, Melbourne, FL, and clients across the U.S., our team of skilled IT professionals provides a comprehensive suite of support services designed to keep your technology running smoothly. We ensure your systems are optimized and efficient, so you can concentrate on driving your core business forward without the worry of technical disruptions.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative p-6 text-center bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl service-card"
              onClick={() => handleServiceClick(service)}
            >
              {service.icon}
              <h3 className="mb-2 text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
              {selectedService?.id === service.id && (
                <div className="absolute top-0 left-0 right-0 p-4 mt-2 text-white bg-blue-500 border-t-2 border-blue-500 rounded-b-lg shadow-lg">
                  <p className="text-white">{service.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2">
          <div className="relative flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-75"></div>
            <div className="relative text-center text-white">
              <h3 className="mb-2 text-3xl font-semibold">STARTING AT $95</h3>
              <p>Our Business IT Support services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your IT Support Needs</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phone">
                  Phone No.
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="serviceType">
                  Type of Service
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">Select a service type</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="problem">
                  Explanation of Your IT Support Needs
                </label>
                <textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Providing IT Services to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA</h3>
            <p className="mb-4">
              For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of IT experts is well-acquainted with the needs of our clients. Our experienced technicians understand the unique requirements of local businesses. We deliver personalized and efficient managed IT services to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable IT support and expert solutions tailored to your business.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Optimize Your Business IT</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the IT support services you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the services.</li>
              <li>Schedule a Service: Set up an appointment for our technicians to visit.</li>
              <li>Implementation Process: Our technicians will provide the necessary IT support solutions.</li>
              <li>Ongoing Support: Receive follow-up support and maintenance as needed.</li>
            </ol>
          </div>
        </div>

        <div className="p-6 mt-8 text-center text-white bg-blue-500 rounded-lg shadow-lg">
          <h5 className="mb-2 text-xl font-semibold">Proudly headquartered and staffed in the USA</h5>
          <h3 className="text-3xl font-semibold">Your Trusted IT Partner Across Florida and the USA</h3>
        </div>
      </div>
    </div>
  );
};

export default ITSupport;
