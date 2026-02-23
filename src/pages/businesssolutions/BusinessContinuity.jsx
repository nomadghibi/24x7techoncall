

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import { FaNetworkWired, FaLock, FaCloud, FaSync, FaBalanceScale, FaDesktop, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection';
import heroImage from '../../assets/businesscontiunity.webp'; // Adjust the path according to your file structure
import emailjs from 'emailjs-com';

const BusinessContinuity = () => {
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
    {
      id: 'disaster-recovery-planning',
      title: 'Disaster Recovery Planning',
      description: 'Developing and implementing comprehensive disaster recovery plans to ensure quick recovery from unexpected events.',
      details: 'Our Disaster Recovery Planning service involves creating detailed plans to quickly recover from unexpected events, minimizing downtime and data loss.',
      icon: <FaSync className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-backup-solutions',
      title: 'Data Backup Solutions',
      description: 'Providing robust data backup solutions to protect your critical business data.',
      details: 'Our Data Backup Solutions ensure that your critical business data is protected and can be quickly restored in case of data loss.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'redundant-systems',
      title: 'Redundant Systems',
      description: 'Setting up redundant systems to ensure continuous operations in case of hardware or software failures.',
      details: 'Our Redundant Systems service ensures continuous operations by setting up backup systems that take over in case of hardware or software failures.',
      icon: <FaLock className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-based-solutions',
      title: 'Cloud-Based Solutions',
      description: 'Leveraging cloud technology to provide flexible and scalable business continuity solutions.',
      details: 'Our Cloud-Based Solutions use cloud technology to offer flexible and scalable continuity solutions, ensuring your business can operate from anywhere.',
      icon: <FaCloud className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'business-impact-analysis',
      title: 'Business Impact Analysis',
      description: 'Conducting thorough business impact analysis to identify critical business functions and dependencies.',
      details: 'Our Business Impact Analysis identifies critical functions and dependencies, helping you understand the impact of potential disruptions.',
      icon: <FaBalanceScale className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'risk-assessment',
      title: 'Risk Assessment',
      description: 'Assessing potential risks and developing strategies to mitigate them.',
      details: 'Our Risk Assessment service evaluates potential risks to your business and develops strategies to mitigate them, ensuring continuity.',
      icon: <FaLock className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'emergency-response-planning',
      title: 'Emergency Response Planning',
      description: 'Creating detailed emergency response plans to ensure your team knows what to do in case of a disruption.',
      details: 'Our Emergency Response Planning service creates detailed plans to guide your team during disruptions, ensuring a swift and organized response.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'it-infrastructure-management',
      title: 'IT Infrastructure Management',
      description: 'Managing your IT infrastructure to ensure high availability and reliability.',
      details: 'Our IT Infrastructure Management service ensures that your IT systems are highly available and reliable, supporting continuous business operations.',
      icon: <FaDesktop className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'security-solutions',
      title: 'Security Solutions',
      description: 'Implementing security measures to protect your business from cyber threats and data breaches.',
      details: 'Our Security Solutions protect your business from cyber threats and data breaches through advanced security measures and monitoring.',
      icon: <FaLock className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'continuous-monitoring',
      title: 'Continuous Monitoring',
      description: 'Providing continuous monitoring and support to ensure your business stays operational.',
      details: 'Our Continuous Monitoring service ensures that your business stays operational through proactive monitoring and support.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'business-continuity-testing',
      title: 'Business Continuity Testing',
      description: 'Regularly testing your business continuity plans to ensure they are effective.',
      details: 'Our Business Continuity Testing service involves regularly testing your continuity plans to ensure they are effective and can be executed successfully during a disruption.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'compliance-management',
      title: 'Compliance Management',
      description: 'Ensuring your business continuity plans comply with industry standards and regulations.',
      details: 'Our Compliance Management service ensures that your business continuity plans comply with industry standards and regulations, providing peace of mind that your plans are robust and compliant.',
      icon: <FaBalanceScale className="mb-2 text-4xl text-blue-500" />
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
    emailjs.send('service_rjpfye6', 'template_k76wxi8', e.target, 'RRqk9bqjxlo8Agwvr')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <div>
      <Helmet>
        <title>Business Continuity Services - Best Computer Tech</title>
        <meta name="description" content="Ensure your business remains operational during disruptions with our comprehensive Business Continuity services. We provide disaster recovery, data backup, IT infrastructure management, and more." />
        <meta name="keywords" content="business continuity, disaster recovery, data backup, IT infrastructure management, risk assessment, emergency response planning, business impact analysis, security solutions, compliance management" />
        <link rel="canonical" href="https://bestcomputertec.com/business-continuity" />
      </Helmet>

      <HeroSection title="Business Continuity" image={heroImage} />

      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Ensure Business Continuity with Our Services</h2>
        <p className="mb-4">
          At Best Computer Tech, we provide comprehensive business continuity solutions to help your business stay operational during unexpected disruptions. Our team of experts offers a range of services designed to minimize downtime and ensure seamless operations.
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
              <p>Our Business Continuity Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Business Continuity Needs</h3>
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
                  Service Type
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="serviceDeliveryMethod">
                  Service Delivery Method
                </label>
                <select
                  name="serviceDeliveryMethod"
                  value={formData.serviceDeliveryMethod}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">Select a delivery method</option>
                  <option value="remote-service">Remote Service</option>
                  <option value="onsite-service">Onsite Service</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="problem">
                  Explanation of Your Business Continuity Needs
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
            <h3 className="mb-2 text-2xl font-semibold">Providing Business Continuity Services to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA</h3>
            <p className="mb-4">
              For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of IT experts is well-acquainted with the needs of our clients. Our experienced technicians understand the unique requirements of local businesses. We deliver personalized and efficient managed IT services to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable IT support and expert solutions tailored to your business.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Ensure Business Continuity</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the business continuity services you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the services.</li>
              <li>Schedule a Service: Set up an appointment for our technicians to visit.</li>
              <li>Implementation Process: Our technicians will provide the necessary business continuity solutions.</li>
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

export default BusinessContinuity;
