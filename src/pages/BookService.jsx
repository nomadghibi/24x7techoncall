import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Helmet } from 'react-helmet-async';
import emailjs from 'emailjs-com'; // Import EmailJS
import { FaUser, FaEnvelope, FaPhone, FaClipboardList } from 'react-icons/fa';
import socialImage from '../assets/heroimage100.webp';

const BookService = () => {
  const canonicalUrl = 'https://bestcomputertec.com/book-service';
  const pageImage = socialImage?.startsWith('http') ? socialImage : `https://bestcomputertec.com${socialImage || ''}`;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const navigate = useNavigate(); // Initialize navigate
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
      alert('Booking is temporarily unavailable due to missing email configuration.');
      return;
    }

    // Use EmailJS to send the form data
    emailjs.sendForm(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Service booked successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          message: ''
        });
        navigate('/confirmation'); // Navigate to confirmation page after booking
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to book the service, please try again.');
      });
  };

  return (
    <div className="container py-16 mx-auto">
      <Helmet>
        <title>Book a Service | Best Computer Tech | Palm Bay & Melbourne, FL</title>
        <meta
          name="description"
          content="Book computer repair, IT support, and technology services with Best Computer Tech in Palm Bay and Melbourne, FL."
        />
        <meta
          name="keywords"
          content="book computer service Palm Bay, schedule IT support Melbourne FL, computer repair appointment"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Book a Service | Best Computer Tech" />
        <meta
          property="og:description"
          content="Schedule your computer and IT service appointment with Best Computer Tech."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Book a Service | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Book a computer or IT support service appointment online."
        />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>
      <h1 className="mb-8 text-4xl font-bold text-center">Book a Service</h1>
      <div className="max-w-3xl p-8 mx-auto bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
              <FaUser className="inline mr-2" /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
              <FaEnvelope className="inline mr-2" /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email Address"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-bold text-gray-700" htmlFor="phone">
              <FaPhone className="inline mr-2" /> Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-bold text-gray-700" htmlFor="service">
              <FaClipboardList className="inline mr-2" />Type of Services
            </label>
            <select
              id="service"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>Select a Service</option>
              <option value="IT Consultancy">IT Consultancy</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Data Backup and Recovery">Data Backup and Recovery</option>
              <option value="Website Development">Website Development</option>
              <option value="Managed IT Services">Managed IT Services</option>
              <option value="Cloud Migration Services">Cloud Migration Services</option>
              <option value="Technical Support and Maintenance">Technical Support and Maintenance</option>
              <option value="Digital Transformation">Digital Transformation</option>
              <option value="Business Continuity">Business Continuity</option>
              <option value="IT Support">IT Support</option>
              <option value="Network Setup">Network Setup</option>
              <option value="Computer Training">Computer Training</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-bold text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Any specific details or requirements..."
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              Book Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookService;
