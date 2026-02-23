import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaEnvelope, FaUser, FaCheckCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../utils/emailjsConfig';
import heroImage from '../assets/aboutusitsupport.webp'; // Replace with your hero image path
import usFlag from '../assets/us-flag.webp'; // Use the generated US flag image path
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUs = () => {
  const canonicalUrl = 'https://bestcomputertec.com/about-us';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://bestcomputertec.com${heroImage || ''}`;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the form data to your Gmail
    emailjs.sendForm(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Your message has been sent successfully!');
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to send the message, please try again.');
      });

    // Reset the form fields
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <Helmet>
        <title>About Us | Your Trusted IT Support Partner in Palm Bay & Melbourne, FL</title>
        <meta name="description" content="Discover our team and mission at Best Computer Tech. As your trusted IT support partner in Palm Bay and Melbourne, FL, we offer expert computer repair, tech support, and comprehensive IT solutions tailored to your needs." />
        <meta name="keywords" content="About Us, IT Support Palm Bay, IT Support Melbourne FL, Computer Repair Palm Bay, Tech Support Melbourne, Best Computer Tech, IT solutions Palm Bay, Melbourne FL computer repair, tech support services, company mission, local IT experts" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us | Your Trusted IT Support Partner in Palm Bay & Melbourne, FL" />
        <meta property="og:description" content="Learn about Best Computer Tech, your go-to IT support partner in Palm Bay and Melbourne, FL. We specialize in computer repair, tech support, and IT solutions tailored to meet your business and personal needs." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Your Trusted IT Support Partner in Palm Bay & Melbourne, FL" />
        <meta name="twitter:description" content="Get to know Best Computer Tech, your trusted partner for IT support in Palm Bay and Melbourne, FL. We provide expert computer repair, tech support, and IT solutions." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>
      
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center w-full h-64 text-white bg-center bg-cover md:h-80"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="z-10 text-4xl font-bold text-center">About Us</h1>
        <div className="absolute bottom-0 right-0 z-10 max-w-md p-6 m-8 text-center bg-white border-2 border-blue-500 rounded-lg shadow-lg bg-opacity-80">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Skilled IT Experts, Ready to Assist You</h2>
          <p className="mb-4 text-lg text-gray-700">
            The dedicated team at Best Computer Tech ensures that computer users enjoy seamless, hassle-free experiences with all their devices.
          </p>
          <a
            href="tel:3219535199"
            className="px-6 py-3 font-semibold text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-700"
          >
            <FaPhone className="inline mr-2" /> CALL NOW: 321-953-5199
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
        <hr className="w-1/2 mx-auto mb-8 border-t-2 border-gray-300" />
          {/* <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">About Us</h2> */}
          <p className="mb-8 text-lg text-center text-gray-700">
          Since 2009, Best Computer Tech (BCT) has been a trusted name in IT support services, offering comprehensive solutions both onsite in the Space Coast of Florida and remotely across the USA. Our mission is to deliver exceptional tech support, tailored to meet the diverse needs of both residential and business clients. Whether you’re in need of Computer Repair, Network Setup, Data Recovery, or Cybersecurity Solutions, our team of skilled technicians is here to assist you every step of the way.
          </p>
          <p className="mb-8 text-lg text-center text-gray-700">
          As Palm Bay IT Experts and leading providers of Melbourne FL Tech Services, we specialize in Professional Computer Services that include everything from Computer Troubleshooting to IT Consulting. Our Business IT Solutions are designed to help your company thrive, with services such as Home Office IT Support, Remote IT Support, and 24/7 IT Help available to ensure your technology operates smoothly and efficiently.
          </p>
          <hr className="w-1/2 mx-auto mt-8 mb-12 border-t-2 border-gray-300" /> {/* Bottom horizontal line with extra space after */}

      

          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full p-6 bg-white rounded-lg shadow-lg md:w-1/3">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">Our Mission</h3>
              <p className="text-gray-700">
                Our mission is to ensure that every computer user enjoys a seamless and trouble-free experience with their devices. We are dedicated to offering high-quality, reliable, and accessible tech support services in Palm Bay and Melbourne, FL.
              </p>
            </div>
            <div className="w-full p-6 bg-white rounded-lg shadow-lg md:w-1/3">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">Our Team</h3>
              <p className="text-gray-700">
                Our team is composed of dedicated IT professionals who are passionate about resolving all your tech-related issues. We are committed to delivering exceptional service and ensuring your complete satisfaction, whether you need help with computer repairs, network support, or IT consulting.
              </p>
            </div>
            <div className="w-full p-6 bg-white rounded-lg shadow-lg md:w-1/3">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">Contact Us</h3>
              <p className="text-gray-700">
                If you have any questions or need support, please don't hesitate to contact us. Our support team is available 24/7 to assist you with any issues you may have.
              </p>
              <a
                href="tel:3219535199"
                className="inline-block px-6 py-3 mt-4 font-semibold text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-700"
              >
                <FaPhone className="inline mr-2" /> CALL NOW: 321-953-5199
              </a>
            </div>
            <div
              className="relative w-full p-6 bg-white rounded-lg shadow-lg md:w-1/3"
              style={{
                backgroundImage: `url(${usFlag})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 bg-black rounded-lg opacity-30"></div>
              <div className="relative z-10 p-4 bg-white bg-opacity-75 rounded-lg">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">We are a US-based TECH SUPPORT COMPANY</h3>
                <p className="text-gray-700">
                  Our company provides reliable tech support services across the United States, ensuring high-quality assistance for all your technology needs. Whether you're in Palm Bay, Melbourne, or anywhere else in the USA, our team is ready to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold text-gray-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">Expert Technicians</h3>
              <p className="text-gray-600">Our technicians are certified and experienced in handling all kinds of computer issues, from hardware repairs to complex IT solutions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">Comprehensive Services</h3>
              <p className="text-gray-600">We offer a wide range of services to meet all your computer needs, including computer repairs, network setup, data recovery, and more.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">Fast Turnaround</h3>
              <p className="text-gray-600">We understand the importance of time and strive to resolve issues promptly, minimizing downtime for your home or business.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">Customer Satisfaction</h3>
              <p className="text-gray-600">Our commitment to customer satisfaction is reflected in our positive reviews and loyal client base throughout Palm Bay and Melbourne, FL.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold text-gray-800">Our Achievements</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="mb-2 text-4xl font-bold text-blue-500">1500+</h3>
              <p className="text-gray-600">Satisfied Customers</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="mb-2 text-4xl font-bold text-green-500">10000+</h3>
              <p className="text-gray-600">Successful Repairs</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="mb-2 text-4xl font-bold text-red-500">99%</h3>
              <p className="text-gray-600">Customer Retention</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="mb-2 text-4xl font-bold text-purple-500">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>

          {/* Review Links Section */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="w-full p-6 md:w-1/3">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">Google</h3>
              <a href="https://www.google.com/search?q=best+computer+tech&rlz=1C1CHBF_enUS1064US1064&oq=best+c&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgYIAhAjGCcyDQgDEAAYgwEYsQMYgAQyDQgEEAAYgwEYsQMYgAQyCggFEAAYsQMYgAQyEAgGEAAYgwEYsQMYgAQYigUyCggHEAAYsQMYgAQyCggIEAAYsQMYgAQyBwgJEAAYgASoAgiwAgE&sourceid=chrome&ie=UTF-8/" className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                READ REVIEWS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="container flex items-center justify-center min-h-screen mx-auto">
          <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">Let’s Talk About Your Technology</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="first-name">
                    <FaUser className="inline mr-2" /> First Name
                  </label>
                  <input
                    className="block w-full px-4 py-3 leading-tight text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="first-name"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="last-name">
                    <FaUser className="inline mr-2" /> Last Name
                  </label>
                  <input
                    className="block w-full px-4 py-3 leading-tight text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="last-name"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="phone">
                    <FaPhone className="inline mr-2" /> Phone Number
                  </label>
                  <input
                    className="block w-full px-4 py-3 leading-tight text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="email">
                    <FaEnvelope className="inline mr-2" /> Email Address
                  </label>
                  <input
                    className="block w-full px-4 py-3 leading-tight text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="message">
                  <FaCheckCircle className="inline mr-2" /> Message
                </label>
                <textarea
                  className="block w-full px-4 py-3 leading-tight text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mb-6">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="text-blue-500 form-checkbox"
                    name="subscribe"
                  />
                  <span className="ml-2">Subscribe to our quarterly newsletter</span>
                </label>
              </div>
              <div className="mb-6">
                <div className="g-recaptcha" data-sitekey="your-site-key"></div> {/* Replace with your reCAPTCHA site key */}
              </div>
              <div className="text-center">
                <button
                  className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
