

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import { FaCloud, FaShieldAlt, FaSync, FaPlug, FaServer, FaTools } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection';
import heroImage from '../../assets/cloudsolutions.webp';
import emailjs from 'emailjs-com';

const CloudSolutions = () => {
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
      id: 'cloud-consulting',
      title: 'Cloud Consulting',
      description: 'Expert advice on cloud strategy and implementation.',
      details: 'Our cloud consulting services help you determine the best cloud strategy for your business, ensuring seamless migration and optimization.',
      icon: <FaCloud className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your existing infrastructure to the cloud.',
      details: 'We provide comprehensive cloud migration services, ensuring a smooth transition with minimal disruption to your business operations.',
      icon: <FaServer className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security',
      description: 'Implementing robust security measures for cloud environments.',
      details: 'Our cloud security services include threat detection, data encryption, and continuous monitoring to protect your cloud infrastructure.',
      icon: <FaShieldAlt className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-backup-recovery',
      title: 'Cloud Backup and Recovery',
      description: 'Ensuring your data is safely backed up and recoverable.',
      details: 'We offer reliable cloud backup and disaster recovery solutions to protect your critical business data.',
      icon: <FaSync className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-monitoring',
      title: 'Cloud Monitoring',
      description: 'Continuous monitoring of your cloud infrastructure.',
      details: 'Our cloud monitoring services provide real-time insights and alerts to ensure optimal performance and security of your cloud environment.',
      icon: <FaPlug className="mb-2 text-4xl text-blue-500" />
    },
    {
      id: 'cloud-optimization',
      title: 'Cloud Optimization',
      description: 'Maximizing efficiency and cost-effectiveness of your cloud services.',
      details: 'We help optimize your cloud resources to improve performance and reduce costs, ensuring you get the most out of your cloud investment.',
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

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      alert('Cloud solutions form is temporarily unavailable due to missing email configuration.');
      return;
    }

    // Send email using EmailJS
    emailjs.send(emailServiceId, emailTemplateId, formData, emailPublicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          serviceType: '',
          serviceDeliveryMethod: '',
          problem: ''
        });
      }, (error) => {
        console.log('FAILED...', error);
        alert('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <div>
      <Helmet>
        <title>Cloud Solutions - Best Computer Tech</title>
        <link rel="canonical" href="https://bestcomputertec.com/business-solutions/cloud-solutions" />
      </Helmet>
      <HeroSection title="Cloud Solutions" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Expert Cloud Solutions for Small to Medium Businesses</h2>
        <p className="mb-4">
        At Best Computer Tech, we specialize in delivering comprehensive cloud solutions tailored for small and medium businesses in Palm Bay, Melbourne, FL, and across the U.S. Our certified experts work with all major cloud providers—Amazon Web Services (AWS), Microsoft Azure, Google Cloud, and more—to ensure seamless cloud adoption, robust security, and optimal performance. Leverage the power of cloud technology with our customized solutions designed to enhance your business's efficiency and scalability.
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
              <p>Our Cloud Solutions are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Tell Us About Your Cloud Solution Needs</h3>
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
                  Explanation of Your Cloud Solution Needs
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
            <h3 className="mb-2 text-2xl font-semibold">Providing Cloud Solutions to Palm Bay, Melbourne, the Space Coast of Florida, and Across the USA</h3>
            <p className="mb-4">
              For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of cloud experts understands the unique requirements of local businesses. We deliver personalized and efficient cloud solutions to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable cloud support and expert solutions tailored to your business.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Optimize Your Cloud Infrastructure</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the cloud solutions you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the services.</li>
              <li>Schedule a Service: Set up an appointment for our technicians to visit.</li>
              <li>Implementation Process: Our technicians will provide the necessary cloud solutions.</li>
              <li>Ongoing Support: Receive follow-up support and maintenance as needed.</li>
            </ol>
          </div>
        </div>

        <div className="p-6 mt-8 text-center text-white bg-blue-500 rounded-lg shadow-lg">
          <h5 className="mb-2 text-xl font-semibold">Proudly headquartered and staffed in the USA</h5>
          <h3 className="text-3xl font-semibold">Your Trusted Cloud Solutions Partner Across Florida and the USA</h3>
        </div>
      </div>
    </div>
  );
};

export default CloudSolutions;
