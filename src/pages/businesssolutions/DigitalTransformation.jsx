
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import { FaCloud, FaChartLine, FaRobot, FaUsers, FaLock, FaBullhorn, FaCogs, FaSync, FaLaptopCode, FaDatabase, FaLaptop } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection';
import heroImage from '../../assets/DigitalTransformation.webp'; // Adjust the path according to your file structure
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';

const DigitalTransformation = () => {
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
      id: 'digital-strategy-development',
      title: 'Digital Strategy Development',
      description: 'Creating a comprehensive digital strategy tailored to your business goals.',
      details: 'We help you develop a comprehensive digital strategy that aligns with your business objectives. Our approach ensures that you leverage the latest technologies to stay competitive in the market.',
      icon: <FaChartLine className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-adoption',
      title: 'Cloud Adoption',
      description: 'Implementing cloud solutions to enhance flexibility, scalability, and efficiency.',
      details: 'Our cloud adoption services ensure that your business benefits from the flexibility, scalability, and efficiency of cloud solutions. We guide you through the process of migrating to the cloud and managing cloud resources effectively.',
      icon: <FaCloud className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Leveraging data analytics to gain insights and make data-driven decisions.',
      details: 'Our data analytics services help you gain valuable insights from your data. We use advanced analytics tools to transform raw data into actionable intelligence that drives informed decision-making.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'process-automation',
      title: 'Process Automation',
      description: 'Automating business processes to increase productivity and reduce operational costs.',
      details: 'We help you automate repetitive business processes to increase productivity and reduce operational costs. Our automation solutions streamline workflows and improve efficiency across your organization.',
      icon: <FaRobot className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'customer-experience-enhancement',
      title: 'Customer Experience Enhancement',
      description: 'Improving customer interactions and satisfaction through digital solutions.',
      details: 'Our customer experience enhancement services focus on improving interactions with your customers. We implement digital solutions that enhance customer satisfaction and loyalty.',
      icon: <FaUsers className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cybersecurity-solutions',
      title: 'Cybersecurity Solutions',
      description: 'Ensuring your digital infrastructure is secure from cyber threats.',
      details: 'We provide comprehensive cybersecurity solutions to protect your digital infrastructure from cyber threats. Our services include risk assessments, threat monitoring, and security management.',
      icon: <FaLock className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Utilizing digital marketing strategies to reach and engage with your target audience.',
      details: 'Our digital marketing services help you reach and engage with your target audience effectively. We use various digital marketing strategies, including SEO, social media marketing, and email campaigns.',
      icon: <FaBullhorn className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'it-infrastructure-modernization',
      title: 'IT Infrastructure Modernization',
      description: 'Upgrading your IT infrastructure to support digital initiatives.',
      details: 'We assist you in modernizing your IT infrastructure to support digital initiatives. Our services include hardware upgrades, network improvements, and implementing new technologies.',
      icon: <FaCogs className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'change-management',
      title: 'Change Management',
      description: 'Guiding your organization through the digital transformation process.',
      details: 'Our change management services guide your organization through the digital transformation process. We help you manage change effectively to ensure a smooth transition and successful implementation of digital initiatives.',
      icon: <FaSync className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'training-and-support',
      title: 'Training and Support',
      description: 'Providing training and support to ensure your team is equipped with the skills needed for digital success.',
      details: 'We provide comprehensive training and support to ensure your team is equipped with the skills needed for digital success. Our training programs cover various aspects of digital transformation, including new technologies and best practices.',
      icon: <FaLaptopCode className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'ai-integration',
      title: 'AI Integration',
      description: 'Incorporating artificial intelligence solutions to streamline operations.',
      details: 'Our AI Integration services incorporate artificial intelligence solutions to streamline operations and improve decision-making across your organization.',
      icon: <FaRobot className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      description: 'Developing custom mobile applications to enhance customer engagement.',
      details: 'Our Mobile App Development services create custom mobile applications that enhance customer engagement and provide seamless user experiences.',
      icon: <FaLaptop className="mb-2 text-4xl text-blue-500" />
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

    // Send email using EmailJS
    emailjs.send(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <div>
      <Helmet>
        <title>Digital Transformation Services - Best Computer Tech</title>
        <meta
          name="description"
          content="Modernize your business with digital transformation services including workflow automation, system integration, and strategic technology planning."
        />
        <link rel="canonical" href="https://bestcomputertec.com/business-solutions/digital-transformation" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <HeroSection title="Digital Transformation" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Empower Your Business with Digital Transformation</h2>
        <p className="mb-4">
        At Best Computer Tech, we enable businesses in Palm Bay, Melbourne, FL, and nationwide to thrive in today’s rapidly evolving digital landscape. Our expert consultants collaborate with you to craft and implement cutting-edge strategies that harness the latest technologies, enhancing your business operations, elevating customer experiences, and fueling growth. Embrace digital transformation with us to stay ahead in a competitive market.
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
              <p>Our Digital Transformation Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Digital Transformation Needs</h3>
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
                  Explanation of Your Digital Transformation Needs
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
            <h3 className="mb-2 text-2xl font-semibold">Providing Digital Transformation Services to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA</h3>
            <p className="mb-4">
              For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of digital transformation experts understands the unique requirements of local businesses. We deliver personalized and efficient services to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable support and expert solutions tailored to your business.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Transform Your Business</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the digital transformation services you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the services.</li>
              <li>Schedule a Service: Set up an appointment for our consultants to visit.</li>
              <li>Implementation Process: Our consultants will provide the necessary digital transformation solutions.</li>
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

export default DigitalTransformation;
