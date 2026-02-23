
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO
import { FaWindows, FaAppStore, FaDownload, FaCogs, FaRocket, FaDatabase, FaExclamationTriangle, FaShieldAlt, FaSyncAlt, FaHdd, FaLifeRing } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection'; // Adjust the path according to your file structure
import heroImage from '../../assets/SoftwareTroubleshooting.webp'; // Adjust the path according to your file structure

const SoftwareTroubleshooting = () => {
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
      id: 'operating-system-errors',
      title: 'Operating System Errors',
      description: 'Diagnosing and fixing OS-related issues.',
      details: 'Our Operating System Errors services include diagnosing and fixing BSOD, system crashes, boot errors, update failures, and performance issues.',
      icon: <FaWindows className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'application-crashes',
      title: 'Application Crashes',
      description: 'Resolving frequent application crashes.',
      details: 'Our Application Crashes services include fixing unresponsive applications, unexpected shutdowns, error messages, compatibility problems, and performance degradation.',
      icon: <FaAppStore className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'software-installation',
      title: 'Software Installation',
      description: 'Installing and configuring software applications.',
      details: 'Our Software Installation services include new software setup, configuration and customization, license management, compatibility checks, and update/upgrade installation.',
      icon: <FaDownload className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'driver-issues',
      title: 'Driver Issues',
      description: 'Updating and fixing driver-related problems.',
      details: 'Our Driver Issues services include driver installation, compatibility checks, performance tuning, driver conflicts resolution, and automatic updates.',
      icon: <FaCogs className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'system-performance',
      title: 'System Performance',
      description: 'Enhancing system performance and speed.',
      details: 'Our System Performance services include performance optimization, system cleanup, startup management, resource allocation, and speed enhancements.',
      icon: <FaRocket className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'registry-errors',
      title: 'Registry Errors',
      description: 'Cleaning and fixing registry issues.',
      details: 'Our Registry Errors services include registry cleaning, error resolution, performance improvements, registry backup, and registry optimization.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'compatibility-issues',
      title: 'Compatibility Issues',
      description: 'Ensuring software compatibility with your system.',
      details: 'Our Compatibility Issues services include software compatibility checks, OS compatibility, hardware compatibility, application testing, and performance tuning.',
      icon: <FaExclamationTriangle className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'security-vulnerabilities',
      title: 'Security Vulnerabilities',
      description: 'Patching and securing software vulnerabilities.',
      details: 'Our Security Vulnerabilities services include vulnerability scanning, patching and updates, security audits, malware protection, and system hardening.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'updates-upgrades',
      title: 'Updates and Upgrades',
      description: 'Managing software updates and upgrades.',
      details: 'Our Updates and Upgrades services include update management, upgrade planning, compatibility checks, license management, and post-upgrade support.',
      icon: <FaSyncAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-backup',
      title: 'Data Backup',
      description: 'Ensuring data backup before troubleshooting.',
      details: 'Our Data Backup services include full system backup, incremental backup, cloud backup solutions, data restoration, and disaster recovery planning.',
      icon: <FaHdd className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'remote-support',
      title: 'Remote Support',
      description: 'Providing remote support for software issues.',
      details: 'Our Remote Support services include remote diagnosis, live assistance, remote configuration, software troubleshooting, and technical guidance.',
      icon: <FaLifeRing className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'custom-software-solutions',
      title: 'Custom Software Solutions',
      description: 'Developing custom software solutions for your needs.',
      details: 'Our Custom Software Solutions services include custom development, software integration, feature enhancements, maintenance and support, and scalability solutions.',
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
    console.log(formData);
  };

  return (
    <div>
      <Helmet>
        <title>Software Troubleshooting | Best Computer Tech</title>
        <meta name="description" content="Expert software troubleshooting services including OS errors, application crashes, software installation, and more." />
        <meta name="keywords" content="software troubleshooting, OS errors, application crashes, software installation, driver issues, system performance" />
        <link rel="canonical" href="https://bestcomputertec.com/residential-support/software-troubleshooting" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Software Troubleshooting | Best Computer Tech" />
        <meta property="og:description" content="Expert software troubleshooting services including OS errors, application crashes, software installation, and more." />
        <meta property="og:url" content="https://bestcomputertec.com/residential-support/software-troubleshooting" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Troubleshooting | Best Computer Tech" />
        <meta name="twitter:description" content="Expert software troubleshooting services including OS errors, application crashes, software installation, and more." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>
      <HeroSection title="Software Troubleshooting" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Software Troubleshooting</h2>
        <p className="mb-4">
          At Best Computer Tech, we specialize in comprehensive software troubleshooting services to ensure your applications and systems run smoothly. Our certified technicians are experienced in diagnosing and resolving a wide range of software issues, ensuring your device operates at its best.
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
              <p>Our Software Troubleshooting Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Problem</h3>
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
                  <option value="" disabled>Select a service type</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>{service.title}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="problem">
                  Explanation of the Problem
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
            <h3 className="mb-2 text-2xl font-semibold">Serving Palm Bay, Melbourne, and Space Coast of Florida</h3>
            <p className="mb-4">
              Best Computer Tech proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida. Our technicians are well-acquainted with the needs of our local customers, providing personalized and efficient software troubleshooting services to keep your devices running smoothly.
            </p>
            <p className="mb-4">
              We offer both onsite and remote services for Palm Bay, Melbourne, and the Space Coast of Florida, ensuring that you get the help you need, wherever you are. Additionally, we provide remote services across the USA, bringing our expertise to you no matter the distance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Get Your Software Troubleshooted</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe the Issue: Provide details about the problem you're facing.</li>
              <li>Get a Quote: Receive an estimated cost for the troubleshooting.</li>
              <li>Schedule a Service: Set up an appointment to bring in your device.</li>
              <li>Service Process: Our technicians will diagnose and fix your software issues.</li>
              <li>Pick Up: Once the service is complete, you can pick up your device.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareTroubleshooting;
