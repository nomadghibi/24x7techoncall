

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLaptopCode, FaServer, FaDatabase, FaShieldAlt, FaCloud, FaHeadset, FaCogs } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import heroImage from '../../assets/optimized-hero/websitedevelopment-1152.jpg'; // Adjust the path according to your file structure

const WebsiteDevelopment = () => {
  const canonicalUrl = 'https://bestcomputertec.com/business-solutions/website-development';
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
      id: 'frontend-development',
      title: 'Frontend Development',
      description: 'Creating visually appealing and user-friendly interfaces.',
      details: 'Our frontend development services focus on creating visually appealing and user-friendly interfaces that enhance user experience and engagement.',
      icon: <FaLaptopCode className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'backend-development',
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications.',
      details: 'We provide backend development services to build robust and scalable server-side applications that support your business operations efficiently.',
      icon: <FaServer className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'database-management',
      title: 'Database Management',
      description: 'Designing and managing efficient database systems.',
      details: 'Our database management services include designing and managing efficient database systems to ensure data integrity and performance.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'web-security',
      title: 'Web Security',
      description: 'Implementing security measures to protect your website.',
      details: 'We offer web security services to implement robust security measures that protect your website from threats and vulnerabilities.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-hosting',
      title: 'Cloud Hosting',
      description: 'Offering reliable and scalable cloud hosting solutions.',
      details: 'Our cloud hosting services provide reliable and scalable solutions to ensure your website is always accessible and performs optimally.',
      icon: <FaCloud className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      description: 'Providing ongoing technical support for your website.',
      details: 'We provide technical support services to offer ongoing assistance and maintenance, ensuring your website runs smoothly.',
      icon: <FaHeadset className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'seo-services',
      title: 'SEO Services',
      description: 'Improving your website’s visibility on search engines.',
      details: 'Our SEO services help improve your website’s visibility on search engines, driving more traffic and increasing your online presence.',
      icon: <FaCogs className="mb-2 text-4xl text-blue-500" />
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
          alert('Thanks! Your request has been received. We will contact you within 1 business day.');
        },
        (err) => {
          console.error('FAILED...', err);
          alert('We could not send your request right now. Please try again, or call (321) 953-5199.');
        }
      );
  };

  return (
    <div>
      <Helmet>
        <title>Website Development Services | Best Computer Tech | Palm Bay & Melbourne, FL</title>
        <meta
          name="description"
          content="Custom website development services for businesses including frontend, backend, hosting, security, and SEO support."
        />
        <meta
          name="keywords"
          content="website development Palm Bay, business web design Melbourne FL, SEO website services, custom website support"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Website Development Services | Best Computer Tech" />
        <meta
          property="og:description"
          content="Build and grow your online presence with secure, high-performance website development services."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Development Services | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Professional website development and maintenance services for local businesses."
        />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>
      <HeroSection title="Website Development Services" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Website Development Services</h2>
        <p className="mb-4">
          At Best Computer Tech, we offer comprehensive website development services to help you establish a strong online presence. Our experienced developers provide a range of services tailored to meet the unique needs of your business.
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
              <p>Our Website Development Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Website Development Needs</h3>
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
                  Explanation of Your Website Development Needs
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
            <h3 className="mb-2 text-2xl font-semibold">Providing Website Development Services Nationwide</h3>
            <p className="mb-4">
              At Best Computer Tech, we have helped numerous businesses establish a strong online presence with our expert website development services. Our team of skilled developers is dedicated to delivering high-quality websites that meet your business needs.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Develop Your Website</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the website development services you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the services.</li>
              <li>Schedule a Consultation: Set up a meeting to discuss your project in detail.</li>
              <li>Development Process: Our developers will start working on your website.</li>
              <li>Launch and Support: We will launch your website and provide ongoing support.</li>
            </ol>
          </div>
        </div>

        <div className="p-6 mt-8 text-center text-white bg-blue-500 rounded-lg shadow-lg">
          <h5 className="mb-2 text-xl font-semibold">Your Trusted Website Development Partner</h5>
          <h3 className="text-3xl font-semibold">Building Your Online Presence with Excellence</h3>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
