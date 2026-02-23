
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Use `name` here to match the attribute in the form
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data using EmailJS
    emailjs.sendForm('service_rjpfye6', 'template_k76wxi8', e.target, 'RRqk9bqjxlo8Agwvr')
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to send the message, please try again.');
      });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Contact Us</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Our Office</h2>
          <p className="mb-2">602 Hurst Rd Palm Bay, Florida 32907 USA</p>
          <p className="mb-2">Phone: (321) 953-5199</p>
          <p className="mb-8">Email: 365techoncall@gmail.com</p>
          <h2 className="mb-4 text-2xl font-semibold">Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                name="name" // Must match the EmailJS template variable
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                name="email" // Must match the EmailJS template variable
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="message"
                name="message" // Must match the EmailJS template variable
                rows="4"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">Business Hours</h2>
            <ul className="mb-8 list-disc list-inside">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
            <h2 className="mb-4 text-2xl font-semibold">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
