
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';  // Import Helmet for SEO
import { FaDesktop, FaTools, FaChalkboardTeacher, FaDatabase, FaNetworkWired } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';
import HeroSection from '../../components/HeroSection'; // Adjust the path according to your file structure
import heroImage from '../../assets/computer-training.webp'; // Adjust the path according to your file structure

const ComputerTraining = () => {
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
      id: 'basic-computer-skills',
      title: 'Basic Computer Skills',
      description: 'Introduction to computer basics and operating systems.',
      details: 'Our Basic Computer Skills training covers operating system navigation, file management, internet browsing, email setup and use, and basic troubleshooting.',
      icon: <FaDesktop className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'software-training',
      title: 'Software Training',
      description: 'Training on various software applications and tools.',
      details: 'Our Software Training includes introduction to software applications, using office productivity suites, graphic design software basics, software installation and configuration, and troubleshooting software issues.',
      icon: <FaTools className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'internet-email',
      title: 'Internet and Email',
      description: 'Navigating the internet and managing email accounts.',
      details: 'Our Internet and Email training covers browsing the web safely, managing email accounts, using search engines effectively, understanding internet security, and configuring email clients.',
      icon: <FaChalkboardTeacher className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'security-privacy',
      title: 'Security and Privacy',
      description: 'Best practices for online security and privacy.',
      details: 'Our Security and Privacy training includes protecting personal information, setting strong passwords, recognizing phishing attempts, using antivirus software, and securing online transactions.',
      icon: <FaChalkboardTeacher className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'advanced-skills',
      title: 'Advanced Skills',
      description: 'Advanced training for more experienced users.',
      details: 'Our Advanced Skills training covers advanced Excel functions, database management, network configuration, advanced troubleshooting, and system optimization techniques.',
      icon: <FaDesktop className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'microsoft-office',
      title: 'Microsoft Office',
      description: 'Training on Word, Excel, PowerPoint, and more.',
      details: 'Our Microsoft Office training includes Word document formatting, Excel data analysis, PowerPoint presentation design, Outlook email management, and Access database creation.',
      icon: <FaTools className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'creative-software',
      title: 'Creative Software',
      description: 'Training on graphic design and video editing software.',
      details: 'Our Creative Software training covers introduction to Photoshop, video editing with Premiere Pro, creating graphics with Illustrator, basic animation techniques, and designing layouts with InDesign.',
      icon: <FaTools className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'data-management',
      title: 'Data Management',
      description: 'Effective data management and organization techniques.',
      details: 'Our Data Management training covers organizing digital files, using cloud storage solutions, data backup strategies, database management basics, and ensuring data security.',
      icon: <FaDatabase className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'remote-work-tools',
      title: 'Remote Work Tools',
      description: 'Training on tools for remote work and collaboration.',
      details: 'Our Remote Work Tools training includes using video conferencing tools, collaborating with team members, managing remote projects, ensuring remote work security, and optimizing remote work productivity.',
      icon: <FaNetworkWired className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'customized-training',
      title: 'Customized Training',
      description: 'Tailored sessions to meet specific learning goals.',
      details: 'Our Customized Training includes personalized learning plans, one-on-one training sessions, customized training materials, flexible training schedules, and goal-oriented training outcomes.',
      icon: <FaChalkboardTeacher className="mb-2 text-4xl text-blue-500" />
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
        alert('Thanks! Your training request has been received. We will contact you within 1 business day.');
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
      <title>Computer Training Services | Best Computer Tech | Palm Bay & Melbourne, FL</title>
<meta name="description" content="Improve your computer skills with our comprehensive training services in Palm Bay and Melbourne, FL. We offer personalized training for all ages, including senior citizens, covering everything from basic computer usage to advanced software and online security training." />
<meta name="keywords" content="computer training near me, IT training Palm Bay, senior citizen computer training Melbourne FL, software training, online security training, data management, computer classes for seniors, Best Computer Tech" />
<link rel="canonical" href="https://bestcomputertec.com/residential-support/computer-training" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="Computer Training Services | Best Computer Tech | Palm Bay & Melbourne, FL" />
<meta property="og:description" content="Enhance your computer skills with Best Computer Tech. Serving Palm Bay and Melbourne, FL, we offer tailored training for all ages, including senior citizens, from basic computer use to advanced software training." />
<meta property="og:url" content="https://bestcomputertec.com/residential-support/computer-training" />
<meta property="og:type" content="website" />
<meta property="og:image" content={pageImage} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Computer Training Services | Best Computer Tech" />
<meta name="twitter:description" content="Comprehensive computer training services in Palm Bay and Melbourne, FL. We provide personalized training for all ages, including senior citizens, covering basic to advanced skills." />
<meta name="twitter:image" content={pageImage} />

      </Helmet>
      <HeroSection title="Computer Training" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Computer Training Services</h2>
        <p className="mb-4">
          At Best Computer Tech, we specialize in comprehensive computer training services to enhance your technical skills. Our certified trainers provide personalized training sessions tailored to your needs, ensuring you gain the knowledge and confidence to use your computer effectively.
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
              <p>Our Computer Training Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Training Needs</h3>
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
                  Type of Training
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Select a training type</option>
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
                  Explanation of Your Training Needs
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
            <h3 className="mb-2 text-2xl font-semibold">Providing Training Services to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA</h3>
            <p className="mb-4">
              For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of training experts understands the unique requirements of local businesses. We deliver personalized and efficient training solutions to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable training support and expert solutions tailored to your business.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Get Your Computer Training</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the computer training you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the training.</li>
              <li>Schedule a Session: Set up an appointment for your personalized training session.</li>
              <li>Training Process: Our trainers will guide you through the training, step by step.</li>
              <li>Follow Up: Receive follow-up support and additional training as needed.</li>
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

export default ComputerTraining;


