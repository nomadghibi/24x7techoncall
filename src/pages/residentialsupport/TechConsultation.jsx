


import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import { FaLaptop, FaTools, FaServer, FaShieldAlt, FaCogs, FaDatabase, FaCloud, FaChalkboardTeacher, FaLifeRing, FaNetworkWired, FaLightbulb } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection'; // Adjust the path according to your file structure
import heroImage from '../../assets/TechnicalSupportMaintenance.webp'; // Adjust the path according to your file structure

const TechConsultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    needs: ''
  });

  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'technology-assessment',
      title: 'Technology Assessment',
      description: 'Evaluating your current tech setup and needs.',
      details: 'Our Technology Assessment services include system evaluation, performance analysis, hardware assessment, software review, and network inspection.',
      icon: <FaLaptop className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'hardware-recommendations',
      title: 'Hardware Recommendations',
      description: 'Suggesting the best hardware for your needs.',
      details: 'Our Hardware Recommendations services include computer recommendations, peripheral devices, networking equipment, storage solutions, and custom builds.',
      icon: <FaTools className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'software-solutions',
      title: 'Software Solutions',
      description: 'Recommending the right software for your tasks.',
      details: 'Our Software Solutions services include application selection, configuration and setup, license management, update and upgrade assistance, and training and support.',
      icon: <FaServer className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'network-design',
      title: 'Network Design',
      description: 'Creating efficient and secure network solutions.',
      details: 'Our Network Design services include network planning, hardware selection, installation and configuration, security implementation, and performance optimization.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'security-assessments',
      title: 'Security Assessments',
      description: 'Evaluating and improving your tech security.',
      details: 'Our Security Assessments services include vulnerability scanning, penetration testing, security audits, risk management, and compliance checks.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'system-optimization',
      title: 'System Optimization',
      description: 'Enhancing the performance of your existing setup.',
      details: 'Our System Optimization services include performance tuning, resource management, cleanup and maintenance, hardware upgrades, and software optimization.',
      icon: <FaCogs className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'backup-solutions',
      title: 'Backup Solutions',
      description: 'Implementing reliable data backup systems.',
      details: 'Our Backup Solutions services include data backup plans, cloud backup services, disaster recovery solutions, automated backup scheduling, and data restoration services.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Advising on cloud services and migration.',
      details: 'Our Cloud Solutions services include cloud migration planning, service selection, configuration and setup, security measures, and cost management.',
      icon: <FaCloud className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'tech-training',
      title: 'Tech Training',
      description: 'Providing training on new systems and software.',
      details: 'Our Tech Training services include system usage, software applications, security practices, network management, and ongoing support.',
      icon: <FaChalkboardTeacher className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'ongoing-support',
      title: 'Ongoing Support',
      description: 'Offering continued support and maintenance.',
      details: 'Our Ongoing Support services include remote assistance, onsite support, system monitoring, regular maintenance, and emergency services.',
      icon: <FaLifeRing className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'customized-tech-plans',
      title: 'Customized Tech Plans',
      description: 'Developing tailored technology plans for your needs.',
      details: 'Our Customized Tech Plans services include needs assessment, custom solutions, implementation roadmap, budget planning, and progress reviews.',
      icon: <FaLightbulb className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'emerging-technologies',
      title: 'Emerging Technologies',
      description: 'Advising on the latest tech innovations.',
      details: 'Our Emerging Technologies services include AI and machine learning, blockchain, IoT solutions, 5G integration, and future tech trends.',
      icon: <FaCogs className="mb-2 text-4xl text-blue-500" />
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
      <title>Personalized Tech Consultation | Best Computer Tech | Palm Bay & Melbourne, FL</title>
<meta name="description" content="Get expert personalized tech consultation services in Palm Bay and Melbourne, FL. We offer technology assessments, hardware recommendations, software solutions, network design, and security assessments tailored to your needs." />
<meta name="keywords" content="tech consultation near me, technology assessment Palm Bay, tech consultation Melbourne FL, hardware recommendations, software solutions, network design, security assessments, personalized tech services, Best Computer Tech" />
<link rel="canonical" href="https://bestcomputertec.com/residential-support/tech-consultation" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="Personalized Tech Consultation | Best Computer Tech | Palm Bay & Melbourne, FL" />
<meta property="og:description" content="Receive personalized tech consultation from the experts at Best Computer Tech. Serving Palm Bay and Melbourne, FL, we provide technology assessments, hardware and software solutions, and more." />
<meta property="og:url" content="https://bestcomputertec.com/residential-support/tech-consultation" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://bestcomputertec.com/images/tech-consultation.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Personalized Tech Consultation | Best Computer Tech" />
<meta name="twitter:description" content="Expert tech consultation services in Palm Bay and Melbourne, FL. We offer personalized technology assessments, hardware recommendations, and more." />
<meta name="twitter:image" content="https://bestcomputertec.com/images/tech-consultation.jpg" />

      </Helmet>
      <HeroSection title="Personalized Tech Consultation" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Personalized Tech Consultation</h2>
        <p className="mb-4">
          At Best Computer Tech, we specialize in personalized tech consultation services to help you make informed decisions about your technology needs. Our certified technicians provide expert advice and tailored solutions to ensure your tech setup meets your specific requirements.
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
              <p>Our Tech Consultation Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Needs</h3>
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
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="needs">
                  Explanation of Your Needs
                </label>
                <textarea
                  name="needs"
                  value={formData.needs}
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
              Best Computer Tech proudly serves the local communities of Palm Bay, Melbourne, and the Space Coast of Florida. Our technicians are well-acquainted with the needs of our local customers, providing personalized and efficient tech consultation services to ensure your technology setup meets your requirements.
            </p>
            <p className="mb-4">
              We offer both onsite and remote services for Palm Bay, Melbourne, and the Space Coast of Florida, ensuring that you get the help you need, wherever you are. Additionally, we provide remote services across the USA, bringing our expertise to you no matter the distance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Get a Tech Consultation</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the tech consultation you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the consultation.</li>
              <li>Schedule a Session: Set up an appointment for your personalized tech consultation.</li>
              <li>Consultation Process: Our experts will assess your needs and provide tailored solutions.</li>
              <li>Ongoing Support: Receive follow-up support and maintenance as needed.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechConsultation;
