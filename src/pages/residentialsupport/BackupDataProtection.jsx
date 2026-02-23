
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';  // Import Helmet for SEO
import { FaShieldAlt, FaLock, FaCloud, FaDatabase, FaSync, FaServer, FaFileAlt, FaTrash, FaLaptopCode, FaTools } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import HeroSection from '../../components/HeroSection'; // Adjust the path according to your file structure
import heroImage from '../../assets/backupHeroImage.webp'; // Adjust the path according to your file structure

const BackupDataProtection = () => {
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
      id: 'data-backup-solutions',
      title: 'Data Backup Solutions',
      description: 'Implementing reliable backup systems to protect your data.',
      details: 'We provide reliable data backup solutions to ensure your data is securely stored and easily recoverable in case of any unforeseen events.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-backup',
      title: 'Cloud Backup',
      description: 'Setting up secure cloud backup solutions for remote data storage.',
      details: 'Our cloud backup services offer secure and scalable solutions for remote data storage, ensuring your data is always accessible and protected.',
      icon: <FaCloud className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-encryption',
      title: 'Data Encryption',
      description: 'Encrypting your data to prevent unauthorized access.',
      details: 'We implement advanced data encryption techniques to protect your sensitive information from unauthorized access.',
      icon: <FaLock className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'disaster-recovery',
      title: 'Disaster Recovery',
      description: 'Planning and implementing disaster recovery solutions.',
      details: 'Our disaster recovery services help you prepare for and recover from data loss incidents, ensuring business continuity.',
      icon: <FaSync className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-migration',
      title: 'Data Migration',
      description: 'Safely transferring data between devices and storage solutions.',
      details: 'We offer secure data migration services to ensure your data is transferred safely and efficiently between different devices and storage solutions.',
      icon: <FaServer className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'automated-backups',
      title: 'Automated Backups',
      description: 'Configuring automated backup schedules to ensure data protection.',
      details: 'Our automated backup solutions ensure your data is backed up regularly without manual intervention, providing continuous data protection.',
      icon: <FaFileAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-integrity-checks',
      title: 'Data Integrity Checks',
      description: 'Regularly verifying the integrity of your backups.',
      details: 'We perform regular data integrity checks to ensure your backups are complete and free from corruption.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'secure-data-deletion',
      title: 'Secure Data Deletion',
      description: 'Ensuring secure deletion of sensitive data.',
      details: 'Our secure data deletion services ensure that your sensitive information is permanently erased and cannot be recovered.',
      icon: <FaTrash className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'consultation-support',
      title: 'Consultation and Support',
      description: 'Providing expert advice and ongoing support for data protection.',
      details: 'We offer consultation and support services to help you develop and maintain effective data protection strategies.',
      icon: <FaTools className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'training-education',
      title: 'Training and Education',
      description: 'Educating you on best practices for data protection.',
      details: 'Our training and education services provide you with the knowledge and skills needed to protect your data effectively.',
      icon: <FaLaptopCode className="mb-2 text-4xl text-blue-500" />
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
        alert('Your data protection request has been submitted successfully!');
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
      <title>Backup and Data Protection Services | Best Computer Tech | Palm Bay & Melbourne, FL</title>
<meta name="description" content="Secure your valuable data with our comprehensive backup and data protection services in Palm Bay and Melbourne, FL. We offer cloud backup, disaster recovery, and data encryption solutions to ensure your data is protected and easily recoverable." />
<meta name="keywords" content="data protection near me, data backup Palm Bay, cloud backup Melbourne FL, disaster recovery, data encryption, secure data storage, backup services, Best Computer Tech" />
<link rel="canonical" href="https://bestcomputertec.com/backup-data-protection" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="Backup and Data Protection Services | Best Computer Tech | Palm Bay & Melbourne, FL" />
<meta property="og:description" content="Protect your data with Best Computer Tech’s backup and data protection services. Serving Palm Bay and Melbourne, FL, we offer cloud backup, disaster recovery, and encryption to keep your data safe and recoverable." />
<meta property="og:url" content="https://bestcomputertec.com/backup-data-protection" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://bestcomputertec.com/images/backup-data-protection.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Backup and Data Protection Services | Best Computer Tech" />
<meta name="twitter:description" content="Comprehensive backup and data protection services in Palm Bay and Melbourne, FL. Ensure your data is secure, encrypted, and recoverable with our expert solutions." />
<meta name="twitter:image" content="https://bestcomputertec.com/images/backup-data-protection.jpg" />

      </Helmet>
      <HeroSection title="Backup and Data Protection" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Backup and Data Protection Services</h2>
        <p className="mb-4">
          At Best Computer Tech, we specialize in comprehensive backup and data protection services to safeguard your valuable information. Our certified technicians provide reliable solutions to ensure your data is secure and recoverable in case of any unforeseen events.
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
              <p>Our Backup and Data Protection Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Data Protection Needs</h3>
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
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
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
                  Explanation of Your Data Protection Needs
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
            <h3 className="mb-2 text-2xl font-semibold">Providing Data Protection Services to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA</h3>
            <p className="mb-4">
              For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of data protection experts understands the unique requirements of local businesses. We deliver personalized and efficient data protection solutions to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable data protection support and expert solutions tailored to your business.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Secure Your Data</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the data protection services you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the services.</li>
              <li>Schedule a Service: Set up an appointment for our technicians to visit.</li>
              <li>Implementation Process: Our technicians will implement the backup and data protection solutions.</li>
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

export default BackupDataProtection;
