
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO
import { FaShieldAlt, FaLock, FaCloud, FaNetworkWired, FaSync, FaBalanceScale, FaDatabase, FaChalkboardTeacher, FaCogs } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import HeroSection from '../../components/HeroSection';
import heroImage from '../../assets/optimized-hero/businesscybersecurity-1152.jpg'; // Adjust the path according to your file structure

const BusinessCybersecurity = () => {
  const pageImage = heroImage?.startsWith('http') ? heroImage : 'https://bestcomputertec.com' + (heroImage || '');
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
      id: 'advanced-threat-protection',
      title: 'Advanced Threat Protection',
      description: 'Proactively detect and mitigate advanced cyber threats targeting your business.',
      details: 'Our Advanced Threat Protection service detects and mitigates advanced cyber threats targeting your business, ensuring proactive defense.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'endpoint-security',
      title: 'Endpoint Security',
      description: 'Secure all endpoints with cutting-edge protection against malware, ransomware, and other threats.',
      details: 'Our Endpoint Security service secures all endpoints with cutting-edge protection against malware, ransomware, and other cyber threats.',
      icon: <FaLock className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-security',
      title: 'Network Security',
      description: 'Implement robust firewalls, intrusion detection systems, and secure network architecture to defend against attacks.',
      details: 'Our Network Security service implements robust firewalls, intrusion detection systems, and secure network architecture to defend against attacks.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-encryption',
      title: 'Data Encryption',
      description: 'Protect sensitive business data with strong encryption methods for data at rest and in transit.',
      details: 'Our Data Encryption service protects sensitive business data with strong encryption methods for data at rest and in transit.',
      icon: <FaLock className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'siem',
      title: 'Security Information and Event Management (SIEM)',
      description: 'Monitor and analyze security events in real-time for immediate threat response.',
      details: 'Our SIEM service monitors and analyzes security events in real-time for immediate threat response, ensuring rapid detection and mitigation.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'incident-response-forensics',
      title: 'Incident Response and Forensics',
      description: 'Quickly respond to security incidents and conduct thorough forensic investigations.',
      details: 'Our Incident Response and Forensics service quickly responds to security incidents and conducts thorough forensic investigations to mitigate damage.',
      icon: <FaSync className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'compliance-management',
      title: 'Compliance Management',
      description: 'Ensure your business meets industry-specific regulatory requirements and standards.',
      details: 'Our Compliance Management service ensures your business meets industry-specific regulatory requirements and standards, providing peace of mind.',
      icon: <FaBalanceScale className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security',
      description: 'Safeguard your cloud infrastructure and applications with advanced security measures.',
      details: 'Our Cloud Security service safeguards your cloud infrastructure and applications with advanced security measures, ensuring data protection.',
      icon: <FaCloud className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'security-awareness-training',
      title: 'Security Awareness Training',
      description: 'Educate your employees on best practices and strategies to prevent cyber attacks.',
      details: 'Our Security Awareness Training educates your employees on best practices and strategies to prevent cyber attacks, enhancing overall security.',
      icon: <FaChalkboardTeacher className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'managed-security-services',
      title: 'Managed Security Services',
      description: 'Continuous monitoring and management of your security infrastructure by our expert team.',
      details: 'Our Managed Security Services provide continuous monitoring and management of your security infrastructure by our expert team, ensuring protection.',
      icon: <FaCogs className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'penetration-testing',
      title: 'Penetration Testing',
      description: 'Simulate cyber attacks to identify vulnerabilities in your systems and improve your defenses.',
      details: 'Our Penetration Testing service simulates cyber attacks to identify vulnerabilities in your systems, helping you improve your defenses and security posture.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'identity-and-access-management',
      title: 'Identity and Access Management',
      description: 'Implement solutions to control user access and protect sensitive data.',
      details: 'Our Identity and Access Management service implements solutions to control user access and protect sensitive data, ensuring only authorized users have access.',
      icon: <FaLock className="mb-2 text-4xl text-blue-500" />
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
        alert('Thanks! Your cybersecurity request has been received. We will contact you within 1 business day.');
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
      serviceDeliveryMethod: '',
      problem: ''
    });
  };

  return (
    <div>
      <Helmet>
        <title>Business Cybersecurity Services - Best Computer Tech</title>
        <meta name="description" content="Protect your business with advanced cybersecurity solutions from Best Computer Tech. We offer threat protection, endpoint security, data encryption, and more." />
        <meta name="keywords" content="cybersecurity, business security, advanced threat protection, endpoint security, network security, data encryption, SIEM, incident response, penetration testing" />
        <link rel="canonical" href="https://bestcomputertec.com/business-solutions/cybersecurity" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Business Cybersecurity Services - Best Computer Tech" />
        <meta property="og:description" content="Protect your business with advanced cybersecurity solutions from Best Computer Tech. We offer threat protection, endpoint security, data encryption, and more." />
        <meta property="og:url" content="https://bestcomputertec.com/business-solutions/cybersecurity" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Cybersecurity Services - Best Computer Tech" />
        <meta name="twitter:description" content="Protect your business with advanced cybersecurity solutions from Best Computer Tech. We offer threat protection, endpoint security, data encryption, and more." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      <HeroSection title="Business Cybersecurity" image={heroImage} />

      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Advanced Cybersecurity Solutions for Businesses</h2>
        <p className="mb-4">
        In today’s digital landscape, safeguarding your business from cyber threats is paramount. At Best Computer Tech, we deliver advanced cybersecurity solutions designed to protect your sensitive data and maintain uninterrupted operations. With over 20 years of experience serving Palm Bay, Melbourne, FL, and businesses across the U.S., our certified security experts provide a comprehensive suite of services tailored to your unique needs.
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
              <p>Our Cybersecurity Services are designed to offer you the best protection at affordable prices. Contact us today to learn more about our pricing and packages.</p>
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
            <h3 className="mb-2 text-2xl font-semibold">Steps to Secure Your Business</h3>
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

export default BusinessCybersecurity;
