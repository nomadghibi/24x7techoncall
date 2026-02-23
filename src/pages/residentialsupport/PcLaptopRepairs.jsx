
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import { FaLaptop, FaKeyboard, FaBatteryFull, FaHdd, FaMemory, FaMicrochip, FaFan, FaPlug, FaShieldAlt, FaTools } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import HeroSection from '../../components/HeroSection';
import heroImage from '../../assets/HardwareRepairs.webp'; // Adjust the path according to your file structure

const PcLaptopRepairs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    repairType: '',
    problem: ''
  });

  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'screen-replacement',
      title: 'Screen Replacement',
      description: 'Fixing broken or damaged laptop screens.',
      details: 'Our Screen Replacement services include broken screen repair, display issues fix, screen replacement, touchscreen repair, and pixel dead removal.',
      icon: <FaLaptop className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'keyboard-replacement',
      title: 'Keyboard Replacement',
      description: 'Repairing or replacing malfunctioning keyboards.',
      details: 'Our Keyboard Replacement services include keyboard keys replacement, keyboard backlight fix, keyboard layout change, water damage repair, and keyboard configuration.',
      icon: <FaKeyboard className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'battery-replacement',
      title: 'Battery Replacement',
      description: 'Installing new batteries for extended device life.',
      details: 'Our Battery Replacement services include battery health check, battery replacement, charging issues fix, battery calibration, and power management.',
      icon: <FaBatteryFull className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'hard-drive-replacement',
      title: 'Hard Drive Replacement',
      description: 'Upgrading or replacing faulty hard drives.',
      details: 'Our Hard Drive Replacement services include hard drive upgrade, data recovery, faulty drive replacement, SSD upgrade, and storage configuration.',
      icon: <FaHdd className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'ram-upgrade',
      title: 'RAM Upgrade',
      description: 'Enhancing performance with additional memory.',
      details: 'Our RAM Upgrade services include memory upgrade, performance enhancement, RAM configuration, compatibility check, and system optimization.',
      icon: <FaMemory className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'motherboard-repair',
      title: 'Motherboard Repair',
      description: 'Diagnosing and fixing motherboard issues.',
      details: 'Our Motherboard Repair services include component repair, power issues fix, BIOS update, hardware diagnostics, and performance optimization.',
      icon: <FaMicrochip className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cooling-system-repair',
      title: 'Cooling System Repair',
      description: 'Ensuring efficient cooling to prevent overheating.',
      details: 'Our Cooling System Repair services include fan replacement, thermal paste application, overheating fix, cooling system upgrade, and temperature monitoring.',
      icon: <FaFan className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'power-supply-replacement',
      title: 'Power Supply Replacement',
      description: 'Fixing issues with the power supply unit.',
      details: 'Our Power Supply Replacement services include PSU replacement, power issues diagnostics, cable management, voltage regulation, and power optimization.',
      icon: <FaPlug className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'virus-malware-removal',
      title: 'Virus and Malware Removal',
      description: 'Removing harmful software to protect your data.',
      details: 'Our Virus and Malware Removal services include virus removal, malware cleanup, security software installation, system scan, and data protection.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'software-troubleshooting',
      title: 'Software Troubleshooting',
      description: 'Fixing software issues and reinstalling operating systems.',
      details: 'Our Software Troubleshooting services include OS reinstallation, software updates, error fixes, application configuration, and system optimization.',
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
        alert('Your repair request has been submitted successfully!');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to submit your request, please try again.');
      });

    // Reset the form fields
    setFormData({
      name: '',
      phone: '',
      email: '',
      repairType: '',
      problem: ''
    });
  };

  return (
    <div>
      <Helmet>
      <title>PC and Laptop Repairs | Best Computer Tech | Palm Bay & Melbourne, FL</title>
<meta name="description" content="Get expert PC and laptop repair services in Palm Bay and Melbourne, FL. We specialize in screen replacement, keyboard repair, virus removal, and more. Any brand, any problem, we fix it all!" />
<meta name="keywords" content="PC repair near me, laptop repair near me, computer repair Palm Bay, computer repair Melbourne FL, screen replacement, keyboard repair, battery replacement, virus removal, Windows repair, Mac repair, free diagnostic" />
<link rel="canonical" href="https://bestcomputertec.com/residential-support/pc-laptop-repairs" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="PC and Laptop Repairs | Best Computer Tech | Palm Bay & Melbourne, FL" />
<meta property="og:description" content="Professional PC and laptop repair services including virus removal, screen replacement, and more. Serving Palm Bay & Melbourne, FL for over 20 years." />
<meta property="og:url" content="https://bestcomputertec.com/residential-support/pc-laptop-repairs" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://bestcomputertec.com/images/pc-laptop-repairs.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="PC and Laptop Repairs | Best Computer Tech" />
<meta name="twitter:description" content="Expert PC and laptop repairs in Palm Bay and Melbourne, FL. We fix any brand, any problem. Free diagnostic available." />
<meta name="twitter:image" content="https://bestcomputertec.com/images/pc-laptop-repairs.jpg" />

      </Helmet>
      <HeroSection title="PC and Laptop Repairs" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert PC and Laptop Repairs</h2>
        <p className="mb-4">
        At Best Computer Tech, we specialize in comprehensive PC and laptop repairs for any brand and any problem, serving Palm Bay and Melbourne, FL, for over 20 years. Whether it’s a Windows or Mac, our certified technicians provide free diagnostics and are equipped to fix it all, ensuring your device is restored to peak performance quickly and efficiently. No matter the issue, you can trust us to get your devices running smoothly again.
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
              <p>Our PC and Laptop Repair Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Repair Needs</h3>
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
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="repairType">
                  Type of Repair
                </label>
                <select
                  name="repairType"
                  value={formData.repairType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Select a repair type</option>
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
              Best Computer Tech proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida. Our technicians are well-acquainted with the needs of our local customers, providing personalized and efficient PC and laptop repair services to keep your devices running smoothly.
            </p>
            <p className="mb-4">
              We offer both onsite and remote services for Palm Bay, Melbourne, and the Space Coast of Florida, ensuring that you get the help you need, wherever you are. Additionally, we provide remote services across the USA, bringing our expertise to you no matter the distance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Get Your PC or Laptop Repaired</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe the Issue: Provide details about the problem you're facing.</li>
              <li>Get a Quote: Receive an estimated cost for the repair.</li>
              <li>Schedule a Repair: Set up an appointment to bring in your device.</li>
              <li>Repair Process: Our technicians will diagnose and repair the issue.</li>
              <li>Pick Up: Once the repair is complete, you can pick up your device.</li>
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

export default PcLaptopRepairs;
