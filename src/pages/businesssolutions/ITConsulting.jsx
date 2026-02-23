import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import { FaNetworkWired, FaLock, FaCloud, FaSync, FaBalanceScale, FaDesktop, FaDatabase, FaChalkboardTeacher, FaShieldAlt } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection'; // Adjust the path according to your file structure
import heroImage from '../../assets/ITsolution.webp'; // Adjust the path according to your file structure
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';

const ITConsulting = () => {
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
      id: 'technology-assessment',
      title: 'Technology Assessment',
      description: 'Evaluating your current IT infrastructure and identifying areas for improvement.',
      details: 'Our Technology Assessment service involves a thorough evaluation of your existing IT infrastructure, including hardware, software, and network systems. We identify strengths, weaknesses, and opportunities for improvement, and provide you with a detailed report and recommendations.',
      icon: <FaDesktop className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'strategic-planning',
      title: 'Strategic Planning',
      description: 'Developing long-term IT strategies aligned with your business goals.',
      details: 'Our Strategic Planning service involves analyzing your current IT infrastructure and aligning it with your business objectives. We create a strategic plan that ensures your IT investments support your long-term goals.',
      icon: <FaBalanceScale className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-design',
      title: 'Network Design and Implementation',
      description: 'Creating robust and scalable network solutions.',
      details: 'With Network Design and Implementation, we assess your current IT setup and recommend changes that improve performance, reduce costs, and increase efficiency. This includes server consolidation, virtualization, and cloud migration strategies.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cybersecurity-solutions',
      title: 'Cybersecurity Solutions',
      description: 'Implementing security measures to protect your business from cyber threats.',
      details: 'Our Cybersecurity Solutions service involves implementing security measures to protect your business from cyber threats. This includes firewall setup, antivirus software installation, and regular security audits.',
      icon: <FaLock className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Advising on and implementing cloud-based services.',
      details: 'Our Cloud Solutions service involves advising on and implementing cloud-based services. This includes cloud storage setup, cloud-based software installation, and cloud migration strategies.',
      icon: <FaCloud className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'disaster-recovery',
      title: 'Disaster Recovery Planning',
      description: 'Preparing for data loss and ensuring business continuity.',
      details: 'Our Disaster Recovery Planning service involves preparing for data loss and ensuring business continuity. This includes data backup setup, disaster recovery plan development, and regular disaster recovery drills.',
      icon: <FaSync className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'compliance-risk',
      title: 'Compliance and Risk Management',
      description: 'Ensuring your IT systems comply with industry regulations.',
      details: 'Our Compliance and Risk Management service involves ensuring your IT systems comply with industry regulations. This includes regular compliance audits, risk assessments, and compliance training for your staff.',
      icon: <FaBalanceScale className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'infrastructure-upgrades',
      title: 'IT Infrastructure Upgrades',
      description: 'Recommending and implementing hardware and software upgrades.',
      details: 'Our IT Infrastructure Upgrades service involves recommending and implementing hardware and software upgrades. This includes server upgrades, software updates, and network improvements.',
      icon: <FaDesktop className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-management',
      title: 'Data Management and Analytics',
      description: 'Optimizing data storage and leveraging analytics for business insights.',
      details: 'Our Data Management and Analytics service involves optimizing data storage and leveraging analytics for business insights. This includes data warehousing, business intelligence software installation, and data analysis services.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'training-support',
      title: 'Training and Support',
      description: 'Providing training for your staff and ongoing IT support.',
      details: 'Our Training and Support service involves providing training for your staff and ongoing IT support. This includes IT training sessions, help desk support, and regular IT maintenance services.',
      icon: <FaChalkboardTeacher className="mb-2 text-4xl text-blue-500" />
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
        <title>IT Consulting Services - Best Computer Tech</title>
        <meta
          name="description"
          content="Strategic IT consulting services for businesses in Palm Bay and Melbourne, FL to improve operations, security, and growth."
        />
        <link rel="canonical" href="https://bestcomputertec.com/business-solutions/it-consulting" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <HeroSection title="IT Consulting" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert IT Consulting Services</h2>
        <p className="mb-4">
        At Best Computer Tech, we are dedicated to empowering businesses in Palm Bay, Melbourne, FL, and across the U.S. through our specialized IT consulting services. Our certified consultants deliver expert guidance and tailored solutions, helping your business harness the power of technology to drive growth and enhance operational efficiency. Whether you're looking to optimize your current systems or implement new strategies, we ensure your technology aligns with your business goals.
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
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your IT Consulting Needs</h3>
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
                    <option key={service.id} value={service.id}>{service.title}</option>
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
                  Explanation of Your IT Consulting Needs
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
            <h3 className="mb-2 text-2xl font-semibold">Providing IT Services to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA</h3>
            <p className="mb-4">
              For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of IT experts is well-acquainted with the needs of our clients. Our experienced technicians understand the unique requirements of local businesses. We deliver personalized and efficient managed IT services to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable IT support and expert solutions tailored to your business.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Optimize Your Business IT</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the IT consulting services you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the services.</li>
              <li>Schedule a Service: Set up an appointment for our consultants to visit.</li>
              <li>Implementation Process: Our consultants will provide the necessary IT solutions.</li>
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

export default ITConsulting;
