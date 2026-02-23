
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import { FaTools, FaBug, FaTachometerAlt, FaNetworkWired, FaPrint, FaEnvelope, FaDatabase, FaShieldAlt, FaDownload, FaQuestionCircle } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection';
import heroImage from '../../assets/computers-optimized.jpg'; // Adjust the path according to your file structure

const RemoteSupport = () => {
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
      id: 'software-troubleshooting',
      title: 'Software Troubleshooting',
      description: 'Diagnosing and fixing software issues remotely.',
      details: 'Our Software Troubleshooting services include system crashes, application errors, software updates, compatibility issues, and performance problems.',
      icon: <FaTools className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'virus-malware-removal',
      title: 'Virus and Malware Removal',
      description: 'Removing malicious software from your system.',
      details: 'Our Virus and Malware Removal services include virus removal, malware cleanup, spyware protection, adware removal, and system security.',
      icon: <FaBug className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'system-optimization',
      title: 'System Optimization',
      description: 'Improving the performance of your device.',
      details: 'Our System Optimization services include speed enhancement, disk cleanup, memory optimization, startup management, and system tune-up.',
      icon: <FaTachometerAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-support',
      title: 'Network Support',
      description: 'Resolving network connectivity issues.',
      details: 'Our Network Support services include Wi-Fi troubleshooting, router configuration, network security, LAN setup, and internet speed issues.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'printer-setup-troubleshooting',
      title: 'Printer Setup and Troubleshooting',
      description: 'Assisting with printer installation and issues.',
      details: 'Our Printer Setup and Troubleshooting services include printer installation, driver updates, connectivity issues, print quality problems, and wireless printing setup.',
      icon: <FaPrint className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'email-configuration',
      title: 'Email Configuration',
      description: 'Setting up and troubleshooting email accounts.',
      details: 'Our Email Configuration services include email setup, account recovery, spam filtering, email sync issues, and security configuration.',
      icon: <FaEnvelope className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-backup-recovery',
      title: 'Data Backup and Recovery',
      description: 'Ensuring your data is backed up and recoverable.',
      details: 'Our Data Backup and Recovery services include cloud backup, local backup solutions, data restoration, disaster recovery planning, and data migration.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'security-setup',
      title: 'Security Setup',
      description: 'Implementing security measures to protect your device.',
      details: 'Our Security Setup services include firewall configuration, antivirus installation, security audits, password management, and encryption services.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'software-installation',
      title: 'Software Installation',
      description: 'Installing and configuring software applications.',
      details: 'Our Software Installation services include new software setup, software configuration, license management, application updates, and compatibility checks.',
      icon: <FaDownload className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'general-tech-support',
      title: 'General Tech Support',
      description: 'Providing answers and solutions to your tech questions.',
      details: 'Our General Tech Support services include device setup, technical consultations, troubleshooting advice, performance tips, and remote assistance.',
      icon: <FaQuestionCircle className="mb-2 text-4xl text-blue-500" />
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
      <title>Remote Support Services | Best Computer Tech | Palm Bay & Melbourne, FL</title>
<meta name="description" content="Get expert remote support services in Palm Bay and Melbourne, FL. We offer software troubleshooting, virus removal, system optimization, network support, and email configuration to keep your systems running smoothly from anywhere." />
<meta name="keywords" content="remote support near me, software troubleshooting Palm Bay, virus removal Melbourne FL, system optimization, network support, email configuration, remote IT help, Best Computer Tech" />
<link rel="canonical" href="https://bestcomputertec.com/residential-support/remote-support" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="Remote Support Services | Best Computer Tech | Palm Bay & Melbourne, FL" />
<meta property="og:description" content="Best Computer Tech offers expert remote support services, including software troubleshooting, virus removal, and more. Serving Palm Bay and Melbourne, FL, we keep your systems optimized from anywhere." />
<meta property="og:url" content="https://bestcomputertec.com/residential-support/remote-support" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://bestcomputertec.com/images/remote-support.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Remote Support Services | Best Computer Tech" />
<meta name="twitter:description" content="Expert remote support services in Palm Bay and Melbourne, FL. We provide software troubleshooting, virus removal, system optimization, and more to keep your systems running smoothly." />
<meta name="twitter:image" content="https://bestcomputertec.com/images/remote-support.jpg" />

      </Helmet>
      <HeroSection title="Remote Support" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Remote Support Services</h2>
        <p className="mb-4">
          At Best Computer Tech, we specialize in comprehensive remote support services to resolve your technical issues quickly and efficiently. Our certified technicians can diagnose and fix a wide range of problems without needing to visit your location, ensuring your devices are up and running in no time.
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
              <p>Our Remote Support Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
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
              Best Computer Tech proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida. Our technicians are well-acquainted with the needs of our local customers, providing personalized and efficient remote support services to resolve your technical issues quickly and effectively.
            </p>
            <p className="mb-4">
              We offer both onsite and remote services for Palm Bay, Melbourne, and the Space Coast of Florida, ensuring that you get the help you need, wherever you are. Additionally, we provide remote services across the USA, bringing our expertise to you no matter the distance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Get Remote Support</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe the Issue: Provide details about the problem you're facing.</li>
              <li>Get a Quote: Receive an estimated cost for the support.</li>
              <li>Schedule a Session: Set up an appointment for remote support.</li>
              <li>Support Process: Our technicians will connect remotely to diagnose and fix the issue.</li>
              <li>Follow Up: Receive follow-up support to ensure the issue is fully resolved.</li>
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

export default RemoteSupport;
