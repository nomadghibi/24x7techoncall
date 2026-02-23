import React, { useState } from 'react';
import { FaCloud, FaChalkboardTeacher, FaShieldAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet'; // Import Helmet
import HeroSection from '../../components/HeroSection';
import heroImage from '../../assets/businesscomputertraining.webp';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../../utils/emailjsConfig';

const BusinessComputerTraining = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    serviceDeliveryMethod: '',
    problem: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'microsoft-365-training',
      icon: <FaChalkboardTeacher size={40} className="mx-auto mb-4" />,
      title: 'Microsoft 365 Training',
      description: 'Enhance your team’s productivity with comprehensive Microsoft 365 training.',
      details: 'Our Microsoft 365 Training covers all essential applications, including Word, Excel, PowerPoint, Outlook, and Teams. We tailor our sessions to fit your team’s specific needs, ensuring maximum efficiency and proficiency.'
    },
    {
      id: 'network-security',
      icon: <FaShieldAlt size={40} className="mx-auto mb-4" />,
      title: 'Network Security Training',
      description: 'Protect your business with our specialized network security training programs.',
      details: 'Learn the best practices for securing your network infrastructure. Our training includes threat identification, prevention strategies, and incident response to keep your business safe from cyber threats.'
    },
    {
      id: 'cloud-computing',
      icon: <FaCloud size={40} className="mx-auto mb-4" />,
      title: 'Cloud Computing Training',
      description: 'Master cloud technologies to optimize your business operations.',
      details: 'Our Cloud Computing Training covers various platforms such as AWS, Azure, and Google Cloud. Understand cloud architecture, deployment models, and management techniques to leverage the full potential of cloud services.'
    },
    // Add more service objects as needed
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service.id === selectedService?.id ? null : service);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.service-card')) {
      setSelectedService(null);
    }
  };

  React.useEffect(() => {
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
    // Clear error for the field
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!formData.serviceDeliveryMethod) newErrors.serviceDeliveryMethod = 'Please select a delivery method';
    if (!formData.problem.trim()) newErrors.problem = 'Please describe your training needs';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');

    try {
      // Send email using EmailJS
      await emailjs.send(emailServiceId, emailTemplateId, formData, emailPublicKey);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        serviceDeliveryMethod: '',
        problem: ''
      });
      // Optionally, replace the alert with a more user-friendly notification
      alert('Your message has been sent successfully!');
    } catch (error) {
      console.error('FAILED...', error);
      setIsSubmitting(false);
      setSubmitError('There was an error sending your message. Please try again later.');
    }
  };

  // Canonical route for this page
  const canonicalUrl = 'https://bestcomputertec.com/business-solutions/computer-training';

  return (
    <div>
      {/* Helmet for canonical URL and SEO metadata */}
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <title>Business Computer Training | Your Company Name</title>
        <meta name="description" content="Comprehensive computer training programs, including Microsoft 365 training, designed to boost your team's technical skills and productivity." />
      </Helmet>

      <HeroSection title="Business Computer Training" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Professional Computer Training for Businesses</h2>
        <p className="mb-4">
          At Best Computer Tech, we offer comprehensive computer training programs, including specialized Microsoft 365 training, designed to boost your team's technical skills and productivity. Our expert trainers deliver customized training solutions tailored to the unique needs of your business, ensuring your team is equipped to excel in today’s digital environment.
        </p>

        {/* Services Grid */}
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

        {/* Pricing Section */}
        <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2">
          <div className="relative flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-75"></div>
            <div className="relative text-center text-white">
              <h3 className="mb-2 text-3xl font-semibold">STARTING AT $95</h3>
              <p>Our Training Services are designed to offer you the best support at affordable prices. Contact us today to learn more about our pricing and packages.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Tell Us About Your Training Needs</h3>
            <form onSubmit={handleSubmit} noValidate>
              {/* Name Field */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : null}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500" id="name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phone">
                  Phone No.
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : null}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500" id="phone-error">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : null}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500" id="email-error">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Service Type Selection */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="serviceType">
                  Service Type
                </label>
                <select
                  name="serviceType"
                  id="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.serviceType ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={errors.serviceType ? 'true' : 'false'}
                  aria-describedby={errors.serviceType ? 'serviceType-error' : null}
                >
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>{service.title}</option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="mt-1 text-xs text-red-500" id="serviceType-error">
                    {errors.serviceType}
                  </p>
                )}
              </div>

              {/* Service Delivery Method Selection */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="serviceDeliveryMethod">
                  Service Delivery Method
                </label>
                <select
                  name="serviceDeliveryMethod"
                  id="serviceDeliveryMethod"
                  value={formData.serviceDeliveryMethod}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.serviceDeliveryMethod ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  required
                  aria-invalid={errors.serviceDeliveryMethod ? 'true' : 'false'}
                  aria-describedby={errors.serviceDeliveryMethod ? 'serviceDeliveryMethod-error' : null}
                >
                  <option value="" disabled>Select Delivery Method</option>
                  <option value="remote-training">Remote Training</option>
                  <option value="onsite-training">Onsite Training</option>
                </select>
                {errors.serviceDeliveryMethod && (
                  <p className="mt-1 text-xs text-red-500" id="serviceDeliveryMethod-error">
                    {errors.serviceDeliveryMethod}
                  </p>
                )}
              </div>

              {/* Description of Your Training Needs */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="problem">
                  Explanation of Your Training Needs
                </label>
                <textarea
                  name="problem"
                  id="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.problem ? 'border-red-500' : 'border-gray-300'
                  } rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                  rows="4"
                  required
                  aria-invalid={errors.problem ? 'true' : 'false'}
                  aria-describedby={errors.problem ? 'problem-error' : null}
                />
                {errors.problem && (
                  <p className="mt-1 text-xs text-red-500" id="problem-error">
                    {errors.problem}
                  </p>
                )}
              </div>

              {/* Submission Feedback */}
              {submitError && (
                <p className="mb-4 text-xs text-red-500">{submitError}</p>
              )}
              {submitSuccess && (
                <p className="mb-4 text-xs text-green-500">Your request has been submitted successfully!</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Informational Sections */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Providing IT Training Services Across the USA</h3>
            <p className="mb-4">
              For more than two decades, Best Computer Tech has resolved over 10,000 IT issues, enabling businesses to focus on growth rather than IT concerns. Proudly serving Palm Bay, Melbourne, the Space Coast of Florida, and across the USA, our team of IT experts is well-acquainted with the needs of our clients. Our experienced technicians understand the unique requirements of local businesses. We deliver personalized and efficient managed IT services to ensure smooth and uninterrupted operations, allowing you to stay focused on your core business objectives. Choose Best Computer Tech for reliable IT support and expert solutions tailored to your business.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Steps to Enhance Your Team's Skills</h3>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact Us: Reach out to our support team via phone or email.</li>
              <li>Describe Your Needs: Provide details about the training services you're seeking.</li>
              <li>Get a Quote: Receive an estimated cost for the services.</li>
              <li>Schedule a Training: Set up an appointment for our trainers to visit.</li>
              <li>Training Process: Our trainers will provide the necessary training solutions.</li>
              <li>Ongoing Support: Receive follow-up support and resources as needed.</li>
            </ol>
          </div>
        </div>

        {/* Footer Section */}
        <div className="p-6 mt-8 text-center text-white bg-blue-500 rounded-lg shadow-lg">
          <h5 className="mb-2 text-xl font-semibold">Proudly headquartered and staffed in the USA</h5>
          <h3 className="text-3xl font-semibold">Your Trusted IT Partner Across Florida and the USA</h3>
        </div>
      </div>
    </div>
  );
};

export default BusinessComputerTraining;
