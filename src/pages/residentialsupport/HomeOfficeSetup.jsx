
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import { FaLaptopHouse, FaDesktop, FaNetworkWired, FaPrint, FaShieldAlt, FaDatabase, FaLaptop, FaChalkboardTeacher, FaTools } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import HeroSection from '../../components/HeroSection'; // Adjust the path according to your file structure
import heroImage from '../../assets/homeofficesetup.webp'; // Adjust the path according to your file structure

const HomeOfficeSetup = () => {
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
      id: 'workspace-design',
      title: 'Workspace Design',
      description: 'Creating a functional and ergonomic workspace layout.',
      details: 'Our Workspace Design services include ergonomic layout, space optimization, lighting setup, furniture arrangement, and personalized design.',
      icon: <FaLaptopHouse className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'equipment-setup',
      title: 'Equipment Setup',
      description: 'Installing and configuring computers, monitors, and peripherals.',
      details: 'Our Equipment Setup services include computer setup, monitor configuration, peripheral installation, device synchronization, and hardware troubleshooting.',
      icon: <FaDesktop className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-configuration',
      title: 'Network Configuration',
      description: 'Setting up a secure and reliable home network.',
      details: 'Our Network Configuration services include router setup, Wi-Fi optimization, network security, device connectivity, and bandwidth management.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'printer-scanner-setup',
      title: 'Printer and Scanner Setup',
      description: 'Installing and configuring printing and scanning devices.',
      details: 'Our Printer and Scanner Setup services include printer installation, scanner configuration, wireless printing, driver installation, and device maintenance.',
      icon: <FaPrint className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'software-installation',
      title: 'Software Installation',
      description: 'Installing and configuring necessary software applications.',
      details: 'Our Software Installation services include operating system installation, application setup, software updates, license management, and configuration.',
      icon: <FaLaptop className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'security-setup',
      title: 'Security Setup',
      description: 'Implementing security measures to protect your home office.',
      details: 'Our Security Setup services include antivirus installation, firewall setup, secure Wi-Fi, data encryption, and regular audits.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'backup-solutions',
      title: 'Backup Solutions',
      description: 'Setting up data backup systems to protect your work.',
      details: 'Our Backup Solutions services include cloud backup, local backup, automated backups, data recovery, and backup management.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'remote-access',
      title: 'Remote Access',
      description: 'Configuring remote access tools for seamless work from anywhere.',
      details: 'Our Remote Access services include VPN setup, remote desktop, cloud services, access controls, and secure connections.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'training-support',
      title: 'Training and Support',
      description: 'Providing training on new systems and ongoing support.',
      details: 'Our Training and Support services include personalized training, technical support, system tutorials, ongoing assistance, and resource materials.',
      icon: <FaChalkboardTeacher className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'consultation-services',
      title: 'Consultation Services',
      description: 'Offering expert advice and customized solutions.',
      details: 'Our Consultation Services include needs assessment, solution planning, implementation strategy, project management, and follow-up consultations.',
      icon: <FaTools className="mb-2 text-4xl text-blue-500" />
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

    // Use EmailJS to send the form data to your Gmail
    emailjs.sendForm(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Your home office setup request has been submitted successfully!');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to submit your request, please try again.');
      });

    // Reset the form fields
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: '',
      problem: ''
    });
  };

  return (
    <div>
      <Helmet>
      <title>Home Office Setup Services | Best Computer Tech | Palm Bay & Melbourne, FL</title>
<meta name="description" content="Transform your home into a productive workspace with our expert home office setup services in Palm Bay and Melbourne, FL. We handle everything from workspace design and equipment setup to network configuration and remote access solutions." />
<meta name="keywords" content="home office setup near me, workspace design Palm Bay, home office setup Melbourne FL, equipment setup, network configuration, remote access, home office solutions, Best Computer Tech" />
<link rel="canonical" href="https://bestcomputertec.com/home-office-setup" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="Home Office Setup Services | Best Computer Tech | Palm Bay & Melbourne, FL" />
<meta property="og:description" content="Set up a functional and efficient home office with Best Computer Tech. Serving Palm Bay and Melbourne, FL, we offer comprehensive services including workspace design, equipment setup, and network configuration." />
<meta property="og:url" content="https://bestcomputertec.com/home-office-setup" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://bestcomputertec.com/images/home-office-setup.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Home Office Setup Services | Best Computer Tech" />
<meta name="twitter:description" content="Expert home office setup services in Palm Bay and Melbourne, FL. We provide workspace design, equipment setup, network configuration, and more to create your ideal home workspace." />
<meta name="twitter:image" content="https://bestcomputertec.com/images/home-office-setup.jpg" />

      </Helmet>
      <HeroSection title="Home Office Setup" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Home Office Setup Services</h2>
        <p className="mb-4">
          At Best Computer Tech, we specialize in comprehensive home office setup services to create an efficient and comfortable workspace for you. Our certified technicians are experienced in designing and implementing home office solutions tailored to your specific needs.
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
              <p>Our Home Office Setup Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Home Office Needs</h3>
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
                  Explanation of Your Home Office Needs
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
              Best Computer Tech proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida. Our technicians are well-acquainted with the needs of our local customers, providing personalized and efficient home office setup services to ensure your workspace meets your requirements.
            </p>
            <p className="mb-4">
              We offer both onsite and remote services for Palm Bay, Melbourne, and the Space Coast of Florida, ensuring that you get the help you need, wherever you are. Additionally, we provide remote services across the USA, bringing our expertise to you no matter the distance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Get Your Home Office Set Up</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the home office setup you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the setup.</li>
              <li>Schedule a Service: Set up an appointment for our technicians to visit.</li>
              <li>Setup Process: Our technicians will design, install, and configure your home office.</li>
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

export default HomeOfficeSetup;

