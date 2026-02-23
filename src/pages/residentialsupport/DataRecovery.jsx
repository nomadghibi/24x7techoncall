

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import { FaHdd, FaCompactDisc, FaServer, FaFileAlt, FaExclamationTriangle, FaBug, FaRedo, FaDatabase, FaTools } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection'; // Adjust the path according to your file structure
import heroImage from '../../assets/DataRecovery2.webp'; // Adjust the path according to your file structure

const DataRecovery = () => {
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
      id: 'hard-drive-recovery',
      title: 'Hard Drive Recovery',
      description: 'Recovering data from damaged or failing hard drives.',
      details: 'Our Hard Drive Recovery services include physical damage recovery, logical damage recovery, data extraction, file system repair, and bad sector recovery.',
      icon: <FaHdd className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'ssd-recovery',
      title: 'SSD Recovery',
      description: 'Retrieving data from solid-state drives.',
      details: 'Our SSD Recovery services cover flash memory recovery, firmware repair, data extraction, controller repair, and bad block management.',
      icon: <FaCompactDisc className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'raid-recovery',
      title: 'RAID Recovery',
      description: 'Specialized recovery for RAID arrays.',
      details: 'Our RAID Recovery services include RAID 0, 1, 5, 6, 10 recovery, RAID controller repair, data reconstruction, parity reconstruction, and logical damage repair.',
      icon: <FaServer className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'deleted-file-recovery',
      title: 'Deleted File Recovery',
      description: 'Restoring files that have been accidentally deleted.',
      details: 'Our Deleted File Recovery services offer recycle bin recovery, shift+delete recovery, formatted drive recovery, partition recovery, and file signature search.',
      icon: <FaFileAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'formatted-drive-recovery',
      title: 'Formatted Drive Recovery',
      description: 'Recovering data from formatted drives.',
      details: 'Our Formatted Drive Recovery services provide quick format recovery, full format recovery, file system reconstruction, data extraction, and partition table repair.',
      icon: <FaExclamationTriangle className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'virus-attack-recovery',
      title: 'Virus Attack Recovery',
      description: 'Retrieving data lost due to virus attacks.',
      details: 'Our Virus Attack Recovery services include virus removal, malware removal, data decryption, file repair, and system cleanup.',
      icon: <FaBug className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'os-failure-recovery',
      title: 'Operating System Failure Recovery',
      description: 'Recovering data from systems that won\'t boot.',
      details: 'Our Operating System Failure Recovery services offer boot sector repair, system file repair, data extraction, OS reinstallation, and boot loader repair.',
      icon: <FaRedo className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-corruption-recovery',
      title: 'Data Corruption Recovery',
      description: 'Fixing and retrieving corrupted data.',
      details: 'Our Data Corruption Recovery services cover file system repair, database recovery, file repair, data integrity checks, and data extraction.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'backup-solutions',
      title: 'Backup Solutions',
      description: 'Implementing backup solutions to prevent future data loss.',
      details: 'Our Backup Solutions services include full system backup, incremental backup, cloud backup solutions, data restoration, and disaster recovery planning.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'consultation-support',
      title: 'Consultation and Support',
      description: 'Providing expert advice and ongoing support.',
      details: 'Our Consultation and Support services offer technical support, data recovery consultation, recovery planning, system analysis, and preventative measures.',
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
    console.log(formData);
  };

  return (
    <div>
      <Helmet>
      <title>Data Recovery Services | Best Computer Tech | Palm Bay & Melbourne, FL</title>
<meta name="description" content="Expert data recovery services in Palm Bay and Melbourne, FL. We specialize in recovering lost data from hard drives, SSDs, RAID arrays, and more. Trust our certified technicians to restore your important files securely and efficiently." />
<meta name="keywords" content="data recovery near me, hard drive recovery Palm Bay, SSD recovery Melbourne FL, RAID recovery, virus recovery, data restoration, lost data recovery, Best Computer Tech" />
<link rel="canonical" href="https://bestcomputertec.com/data-recovery" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="Data Recovery Services | Best Computer Tech | Palm Bay & Melbourne, FL" />
<meta property="og:description" content="Recover your lost data with Best Computer Tech. Serving Palm Bay and Melbourne, FL, we specialize in data recovery from hard drives, SSDs, RAID arrays, and more." />
<meta property="og:url" content="https://bestcomputertec.com/data-recovery" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://bestcomputertec.com/images/data-recovery.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Data Recovery Services | Best Computer Tech" />
<meta name="twitter:description" content="Expert data recovery services in Palm Bay and Melbourne, FL. We recover lost data from hard drives, SSDs, RAID arrays, and more." />
<meta name="twitter:image" content="https://bestcomputertec.com/images/data-recovery.jpg" />

      </Helmet>
      <HeroSection title="Data Recovery" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Data Recovery Services</h2>
        <p className="mb-4">
          At Best Computer Tech, we specialize in comprehensive data recovery services to retrieve your valuable data from damaged or corrupted storage devices. Our certified technicians are experienced in handling a wide range of data loss scenarios, ensuring your important files are recovered and secured.
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
              <p>Our Data Recovery Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Data Recovery Needs</h3>
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
                  Explanation of Your Data Recovery Needs
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
              Best Computer Tech proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida. Our technicians are well-acquainted with the needs of our local customers, providing personalized and efficient data recovery services to retrieve your valuable data.
            </p>
            <p className="mb-4">
              We offer both onsite and remote services for Palm Bay, Melbourne, and the Space Coast of Florida, ensuring that you get the help you need, wherever you are. Additionally, we provide remote services across the USA, bringing our expertise to you no matter the distance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Get Your Data Recovered</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe the Issue: Provide details about the data loss problem you're facing.</li>
              <li>Get a Quote: Receive an estimated cost for the recovery.</li>
              <li>Schedule a Service: Set up an appointment to bring in your device.</li>
              <li>Recovery Process: Our technicians will diagnose and recover your data.</li>
              <li>Pick Up: Once the recovery is complete, you can pick up your device.</li>
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

export default DataRecovery;
