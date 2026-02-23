

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import { FaShieldAlt, FaLock, FaWifi, FaCloud, FaSync, FaUserShield, FaDatabase, FaKey, FaTools, FaChalkboardTeacher } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import HeroSection from '../../components/HeroSection'; // Adjust the path according to your file structure
import heroImage from '../../assets/cybersecurity.webp'; // Adjust the path according to your file structure

const CybersecurityHome = () => {
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
      id: 'malware-virus-protection',
      title: 'Malware and Virus Protection',
      description: 'Implementing robust antivirus and anti-malware solutions.',
      details: 'Our Malware and Virus Protection services provide real-time protection, regular scans, automatic updates, safe browsing, and threat removal.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'firewall-setup',
      title: 'Firewall Setup',
      description: 'Configuring firewalls to protect your network.',
      details: 'Our Firewall Setup services include network monitoring, access control, intrusion prevention, packet filtering, and application gateway.',
      icon: <FaLock className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'secure-wifi-configuration',
      title: 'Secure Wi-Fi Configuration',
      description: 'Ensuring your home network is secure from intrusions.',
      details: 'Our Secure Wi-Fi Configuration services cover encryption setup, strong passwords, guest networks, network segmentation, and regular updates.',
      icon: <FaWifi className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-encryption',
      title: 'Data Encryption',
      description: 'Encrypting your data to prevent unauthorized access.',
      details: 'Our Data Encryption services include encryption algorithms, key management, file encryption, disk encryption, and end-to-end encryption.',
      icon: <FaCloud className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'online-privacy-protection',
      title: 'Online Privacy Protection',
      description: 'Implementing measures to protect your online privacy.',
      details: 'Our Online Privacy Protection services cover VPN usage, private browsing, ad blockers, tracking protection, and data minimization.',
      icon: <FaUserShield className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'phishing-scam-protection',
      title: 'Phishing and Scam Protection',
      description: 'Educating and protecting against phishing and online scams.',
      details: 'Our Phishing and Scam Protection services include email filters, training programs, secure browsing, real-time alerts, and incident response.',
      icon: <FaKey className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'parental-controls',
      title: 'Parental Controls',
      description: 'Setting up controls to protect children online.',
      details: 'Our Parental Controls services offer content filtering, usage monitoring, time limits, safe search, and app restrictions.',
      icon: <FaChalkboardTeacher className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'security-audits',
      title: 'Security Audits',
      description: 'Conducting security audits to identify vulnerabilities.',
      details: 'Our Security Audits services include system scans, risk assessment, penetration testing, compliance checks, and actionable reports.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'regular-updates-maintenance',
      title: 'Regular Updates and Maintenance',
      description: 'Keeping your systems updated with the latest security patches.',
      details: 'Our Regular Updates and Maintenance services provide automated updates, patch management, system monitoring, performance tuning, and security enhancements.',
      icon: <FaSync className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'consultation-support',
      title: 'Consultation and Support',
      description: 'Providing expert advice and ongoing support for cybersecurity.',
      details: 'Our Consultation and Support services offer personalized consultations, 24/7 support, incident response, security planning, and ongoing education.',
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
        alert('Your cybersecurity request has been submitted successfully!');
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
      serviceDeliveryMethod: '',
      problem: ''
    });
  };

  return (
    <div>
      <Helmet>
        <title>Cybersecurity Services - Best Computer Tech</title>
        <meta
          name="description"
          content="Protect your home devices and personal data with cybersecurity services from Best Computer Tech in Palm Bay and Melbourne, FL."
        />
        <link rel="canonical" href="https://bestcomputertec.com/residential-support/cybersecurity-home" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <HeroSection title="Cybersecurity for Home Users" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Cybersecurity Services for Home Users</h2>
        <p className="mb-4">
          At Best Computer Tech, we specialize in comprehensive cybersecurity services for home users to protect your personal information and devices from cyber threats. Our certified technicians provide reliable solutions to ensure your online safety and security.
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
              <p>Our Cybersecurity Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Cybersecurity Needs</h3>
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
                  Explanation of Your Cybersecurity Needs
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
            <h3 className="mb-2 text-2xl font-semibold">Providing Cybersecurity Services to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA</h3>
            <p className="mb-4">
              For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of IT experts is well-acquainted with the needs of our clients. Our experienced technicians understand the unique requirements of local businesses. We deliver personalized and efficient managed IT services to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable IT support and expert solutions tailored to your business.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Secure Your Home Network</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the cybersecurity services you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the services.</li>
              <li>Schedule a Service: Set up an appointment for our technicians to visit.</li>
              <li>Implementation Process: Our technicians will provide the necessary security solutions.</li>
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

export default CybersecurityHome;
