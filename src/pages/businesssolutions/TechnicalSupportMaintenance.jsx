
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTools, FaBug, FaNetworkWired, FaDatabase, FaShieldAlt, FaCloud, FaHeadset, FaLaptopCode, FaMicrochip } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/businessservices.webp'; // Adjust the path according to your file structure

const TechnicalSupportMaintenance = () => {
  const canonicalUrl = 'https://bestcomputertec.com/business-solutions/technical-support-maintenance';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://bestcomputertec.com${heroImage || ''}`;
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
      id: 'hardware-repairs',
      title: 'Hardware Repairs',
      description: 'Fixing broken screens, malfunctioning keyboards, and other hardware issues.',
      details: 'Our hardware repair services include fixing broken screens, malfunctioning keyboards, and other hardware issues to ensure your devices are functioning properly.',
      icon: <FaTools className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'software-troubleshooting',
      title: 'Software Troubleshooting',
      description: 'Resolving operating system errors, application crashes, and software installation issues.',
      details: 'We provide software troubleshooting services to resolve operating system errors, application crashes, and software installation issues, ensuring your software runs smoothly.',
      icon: <FaBug className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'virus-malware-removal',
      title: 'Virus and Malware Removal',
      description: 'Protecting your computer from harmful viruses and ensuring your data is safe.',
      details: 'Our virus and malware removal services protect your computer from harmful viruses and ensure your data is safe and secure.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-setup-support',
      title: 'Network Setup and Support',
      description: 'Setting up and maintaining secure and efficient home or office networks.',
      details: 'We provide network setup and support services to set up and maintain secure and efficient home or office networks, ensuring seamless connectivity.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-recovery',
      title: 'Data Recovery',
      description: 'Retrieving lost or corrupted data from hard drives and other storage devices.',
      details: 'Our data recovery services retrieve lost or corrupted data from hard drives and other storage devices, helping you recover important information.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'remote-computer-support',
      title: 'Remote Computer Support',
      description: 'Providing professional support for your computer issues without the need for a technician visit.',
      details: 'We offer remote computer support services to provide professional assistance for your computer issues without the need for a technician visit.',
      icon: <FaHeadset className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'computer-training',
      title: 'Computer Training',
      description: 'Learn how to use your computer more effectively with our professional training sessions.',
      details: 'Our computer training services offer professional sessions to help you learn how to use your computer more effectively, enhancing your skills and productivity.',
      icon: <FaLaptopCode className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-consulting',
      title: 'Cloud Consulting',
      description: 'Get expert cloud support from the comfort of your home.',
      details: 'We provide cloud consulting services to help you leverage cloud solutions from the comfort of your home, improving flexibility and scalability.',
      icon: <FaCloud className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'security-camera-installation',
      title: 'Security Camera and Network Cabling Installation',
      description: 'Professional installation of security cameras and network cabling for your home or office.',
      details: 'Our security camera and network cabling installation services offer professional setup to ensure the security and connectivity of your home or office.',
      icon: <FaMicrochip className="mb-2 text-4xl text-blue-500" />
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

    emailjs
      .send(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent successfully!');
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Failed to send your message. Please try again later.');
        }
      );
  };

  return (
    <div>
      <Helmet>
        <title>Technical Support and Maintenance | Best Computer Tech | Palm Bay & Melbourne, FL</title>
        <meta
          name="description"
          content="Comprehensive technical support and maintenance services for businesses, including troubleshooting, repair, malware removal, and ongoing IT support."
        />
        <meta
          name="keywords"
          content="technical support maintenance, business IT support Palm Bay, managed support Melbourne FL, hardware and software troubleshooting"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Technical Support and Maintenance | Best Computer Tech" />
        <meta
          property="og:description"
          content="Keep your business systems running smoothly with proactive technical support and maintenance."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Technical Support and Maintenance | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Expert technical support and maintenance services for reliable business operations."
        />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>
      <HeroSection title="Technical Support & Maintenance" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Comprehensive Technical Support and Maintenance</h2>
        <p className="mb-4">
          At Best Computer Tech, we provide comprehensive technical support and maintenance services to ensure your technology runs smoothly and efficiently. Our certified technicians offer a range of services tailored to meet the unique needs of your business and home.
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
              <p>Our Technical Support and Maintenance services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Technical Support Needs</h3>
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
                  Explanation of Your Technical Support Needs
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
              <li>Describe Your Needs: Provide details about the managed IT services you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the services.</li>
              <li>Schedule a Service: Set up an appointment for our technicians to visit.</li>
              <li>Implementation Process: Our technicians will provide the necessary IT solutions.</li>
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

export default TechnicalSupportMaintenance;
