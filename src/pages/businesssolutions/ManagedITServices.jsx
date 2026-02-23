
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import { FaNetworkWired, FaServer, FaDatabase, FaShieldAlt, FaCloud, FaHeadset, FaLaptopCode, FaMicrochip, FaCogs } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection';
import heroImage from '../../assets/managedit.webp'; // Adjust the path according to your file structure
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';

const ManagedITServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    serviceDeliveryMethod: '',
    problem: ''
  });
  const [selectedService, setSelectedService] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      id: 'network-management',
      title: 'Network Management',
      description: 'Monitoring and managing your business network to ensure optimal performance and security.',
      details: 'Our network management services ensure your business network is running smoothly, securely, and efficiently. We monitor network performance, manage configurations, and resolve issues promptly.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'server-management',
      title: 'Server Management',
      description: 'Maintaining and managing your servers to ensure they run smoothly and efficiently.',
      details: 'Our server management services include regular maintenance, monitoring, and troubleshooting to keep your servers running at peak performance.',
      icon: <FaServer className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-backup-recovery',
      title: 'Data Backup and Recovery',
      description: 'Implementing robust data backup solutions and providing recovery services to protect your business data.',
      details: 'We implement reliable data backup solutions to protect your business data and provide fast recovery services in case of data loss.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cybersecurity-services',
      title: 'Cybersecurity Services',
      description: 'Protecting your business from cyber threats with comprehensive security solutions.',
      details: 'Our cybersecurity services protect your business from cyber threats through regular security assessments, threat monitoring, and implementing security measures.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Providing and managing cloud solutions to improve your business\'s flexibility and scalability.',
      details: 'We help you leverage cloud solutions to improve flexibility, scalability, and cost-efficiency. Our services include cloud migration, management, and optimization.',
      icon: <FaCloud className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'help-desk-support',
      title: 'Help Desk Support',
      description: 'Offering 24/7 support to resolve any IT issues your business may encounter.',
      details: 'Our help desk support team is available 24/7 to assist you with any IT-related issues, ensuring minimal downtime and maximum productivity.',
      icon: <FaHeadset className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'Providing expert advice to help your business leverage technology for growth and efficiency.',
      details: 'Our IT consulting services provide expert advice on leveraging technology for business growth and efficiency. We offer strategic planning, technology assessments, and project management.',
      icon: <FaLaptopCode className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'software-management',
      title: 'Software Management',
      description: 'Managing software updates and ensuring your business applications run smoothly.',
      details: 'We manage software updates, patches, and licensing to ensure your business applications are always up-to-date and running smoothly.',
      icon: <FaCogs className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'hardware-management',
      title: 'Hardware Management',
      description: 'Maintaining and managing your business hardware to ensure it performs optimally.',
      details: 'Our hardware management services include regular maintenance, repairs, and upgrades to ensure your business hardware performs optimally.',
      icon: <FaMicrochip className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'compliance-management',
      title: 'Compliance Management',
      description: 'Ensuring your IT systems comply with industry regulations and standards.',
      details: 'We help you ensure your IT systems comply with industry regulations and standards through regular audits, risk assessments, and policy implementation.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'business-continuity',
      title: 'Business Continuity Planning',
      description: 'Ensuring your business can continue to operate during and after a disaster.',
      details: 'Our business continuity planning services help you develop strategies to ensure your business can continue to operate during and after a disaster, minimizing downtime and data loss.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'virtualization',
      title: 'Virtualization Solutions',
      description: 'Optimizing your IT infrastructure through virtualization technologies.',
      details: 'We provide virtualization solutions to help you optimize your IT infrastructure, improve resource utilization, and reduce costs through server, storage, and network virtualization.',
      icon: <FaCloud className="mb-2 text-4xl text-blue-500" />
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

    emailjs.send(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });

    // Reset the form after submission
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
        <title>Managed IT Services - Best Computer Tech</title>
        <meta name="description" content="Ensure your business runs smoothly with managed IT services from Best Computer Tech. From network management to cybersecurity, we cover all your IT needs." />
        <meta name="keywords" content="Managed IT services, IT support, network management, server management, data backup, cybersecurity, cloud services" />
        <link rel="canonical" href="https://bestcomputertec.com/managed-it-services" />
      </Helmet>

      <HeroSection title="Managed IT Services" image={heroImage} />

      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Managed IT Services</h2>
        <p className="mb-4">
          At Best Computer Tech, we provide comprehensive managed IT services to ensure your business technology runs smoothly and efficiently. Our certified technicians offer a range of services tailored to meet the unique needs of your business.
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
              <p>Our Managed IT Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Managed IT Needs</h3>
            {isSubmitted ? (
              <p className="text-green-500">Thank you for your submission! We will get back to you soon.</p>
            ) : (
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
                    Explanation of Your Managed IT Needs
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
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Providing IT Services to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA</h3>
            <p className="mb-4">
            For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of IT experts is well-acquainted with the needs of our clients. Our experienced technicians understand the unique requirements of local businesses. We deliver personalized and efficient managed IT services to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable IT support and expert solutions tailored to your business.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Optimize Your Business IT</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the managed IT services you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the services.</li>
              <li>Schedule a Service: Set up an appointment for our technicians to visit.</li>
              <li>Implementation Process: Our technicians will provide the necessary IT solutions.</li>
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

export default ManagedITServices;
