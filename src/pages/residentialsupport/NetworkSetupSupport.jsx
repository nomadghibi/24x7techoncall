
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO
import { FaNetworkWired, FaTools, FaWifi, FaShieldAlt, FaWrench, FaTachometerAlt, FaKey, FaEye } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import HeroSection from '../../components/HeroSection'; // Adjust the path according to your file structure
import heroImage from '../../assets/NetworkSetupSupport.webp'; // Adjust the path according to your file structure

const NetworkSetupSupport = () => {
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
      id: 'network-design',
      title: 'Network Design',
      description: 'Creating custom network layouts for optimal performance.',
      details: 'Our Network Design services include custom network layouts, performance optimization, scalability planning, infrastructure design, and security integration.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'installation-configuration',
      title: 'Installation and Configuration',
      description: 'Setting up routers, switches, and other network devices.',
      details: 'Our Installation and Configuration services cover router setup, switch configuration, device connectivity, network cabling, and firmware updates.',
      icon: <FaTools className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'wifi-setup',
      title: 'Wi-Fi Setup',
      description: 'Ensuring strong and secure wireless connections.',
      details: 'Our Wi-Fi Setup services include wireless network setup, signal optimization, security configuration, device connectivity, and guest network setup.',
      icon: <FaWifi className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-security',
      title: 'Network Security',
      description: 'Implementing security measures to protect your network.',
      details: 'Our Network Security services offer firewall setup, antivirus installation, encryption solutions, intrusion detection, and security audits.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'troubleshooting-repairs',
      title: 'Troubleshooting and Repairs',
      description: 'Diagnosing and fixing network issues.',
      details: 'Our Troubleshooting and Repairs services include issue diagnosis, hardware repairs, software troubleshooting, connection fixes, and performance tuning.',
      icon: <FaWrench className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      description: 'Enhancing network speed and reliability.',
      details: 'Our Performance Optimization services provide speed enhancements, reliability improvements, bandwidth management, latency reduction, and system upgrades.',
      icon: <FaTachometerAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'vpn-setup',
      title: 'VPN Setup',
      description: 'Configuring virtual private networks for secure remote access.',
      details: 'Our VPN Setup services cover secure remote access, encryption configuration, multi-device support, access control, and VPN maintenance.',
      icon: <FaKey className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-monitoring',
      title: 'Network Monitoring',
      description: 'Continuous monitoring to prevent and address issues.',
      details: 'Our Network Monitoring services include real-time monitoring, alert systems, performance tracking, security monitoring, and report generation.',
      icon: <FaEye className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'firewall-configuration',
      title: 'Firewall Configuration',
      description: 'Setting up firewalls to protect against cyber threats.',
      details: 'Our Firewall Configuration services offer threat protection, access control, rule configuration, traffic monitoring, and regular updates.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'consultation-support',
      title: 'Consultation and Support',
      description: 'Providing expert advice and ongoing support.',
      details: 'Our Consultation and Support services offer expert consultation, 24/7 support, custom solutions, system maintenance, and ongoing assistance.',
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
        alert('Thanks! Your network setup request has been received. We will contact you within 1 business day.');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('We could not send your request right now. Please try again, or call (321) 953-5199.');
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
      <title>Network Setup and Support | Best Computer Tech | Palm Bay & Melbourne, FL</title>
<meta name="description" content="Professional network setup and support services in Palm Bay and Melbourne, FL. We specialize in network design, Wi-Fi setup, security enhancements, VPN configuration, and performance optimization to ensure your network runs smoothly and securely." />
<meta name="keywords" content="network setup near me, Wi-Fi configuration Palm Bay, network support Melbourne FL, network security, VPN setup, firewall configuration, performance optimization, network design, Best Computer Tech" />
<link rel="canonical" href="https://bestcomputertec.com/residential-support/network-setup-support" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="Network Setup and Support | Best Computer Tech | Palm Bay & Melbourne, FL" />
<meta property="og:description" content="Get expert network setup and support services from Best Computer Tech. Serving Palm Bay and Melbourne, FL, we offer Wi-Fi setup, network security, VPN configuration, and more." />
<meta property="og:url" content="https://bestcomputertec.com/residential-support/network-setup-support" />
<meta property="og:type" content="website" />
<meta property="og:image" content={pageImage} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Network Setup and Support | Best Computer Tech" />
<meta name="twitter:description" content="Professional network setup and support services in Palm Bay and Melbourne, FL. We handle everything from Wi-Fi setup to network security and performance optimization." />
<meta name="twitter:image" content={pageImage} />

      </Helmet>
      <HeroSection title="Network Setup and Support" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Network Setup and Support</h2>
        <p className="mb-4">
          At Best Computer Tech, we specialize in comprehensive network setup and support services to ensure your home or office network runs smoothly and securely. Our certified technicians are experienced in designing, implementing, and maintaining robust network solutions tailored to your needs.
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
              <p>Our Network Setup and Support Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Network Needs</h3>
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
                  Explanation of Your Network Needs
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
              Best Computer Tech proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida. Our technicians are well-acquainted with the needs of our local customers, providing personalized and efficient network setup and support services to ensure your network runs smoothly.
            </p>
            <p className="mb-4">
              We offer both onsite and remote services for Palm Bay, Melbourne, and the Space Coast of Florida, ensuring that you get the help you need, wherever you are. Additionally, we provide remote services across the USA, bringing our expertise to you no matter the distance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Get Your Network Set Up</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the network setup or issue you're facing.</li>
              <li>Get a Quote: Receive an estimated cost for the setup or support.</li>
              <li>Schedule a Service: Set up an appointment for our technicians to visit.</li>
              <li>Service Process: Our technicians will design, install, and configure your network.</li>
              <li>Ongoing Support: Receive ongoing support and maintenance for your network.</li>
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

export default NetworkSetupSupport;

