import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FaPhone, FaEnvelope, FaUser, FaCheckCircle,
  FaAward, FaTools, FaBolt, FaStar,
  FaMapMarkerAlt, FaShieldAlt, FaHandshake, FaCertificate,
  FaUsers, FaLaptop, FaPhoneAlt,
} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../utils/emailjsConfig';
import heroImage from '../assets/optimized-hero/aboutusbcttech.png';
import usFlag from '../assets/optimized-hero/us-flag-1152.jpg';

const inputClass =
  'block w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition';
const labelClass = 'block mb-1 text-sm font-semibold text-gray-700';

const AboutUs = () => {
  const canonicalUrl = 'https://bestcomputertec.com/about-us';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://bestcomputertec.com${heroImage || ''}`;

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', email: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    emailjs.sendForm(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then(() => {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
      })
      .catch(() => {
        setSubmitError('We could not send your message right now. Please try again, or call (321) 953-5199.');
      })
      .finally(() => setIsSubmitting(false));
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

      {/* ── Hero ── */}
      <section className="relative w-full">
        <img
          src={heroImage}
          alt="About Best Computer Tech — Trusted IT Support Since 2009, Space Coast Florida"
          className="w-full object-cover"
          style={{ maxHeight: '560px', objectPosition: 'center top' }}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8 px-4">
          <a
            href="tel:3219535199"
            className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
          >
            <FaPhoneAlt /> Call Now: (321) 953-5199
          </a>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Our Story</p>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Trusted IT Support Since 2009</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Since 2009, Best Computer Tech (BCT) has been a trusted name in IT support, offering comprehensive solutions both onsite on Florida's Space Coast and remotely across the USA. Our mission is to deliver exceptional tech support tailored to the diverse needs of residential and business clients.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you need Computer Repair, Network Setup, Data Recovery, or Cybersecurity Solutions, our skilled technicians are here every step of the way. As Palm Bay IT experts and leading providers of Melbourne FL tech services, we keep your technology running so you can focus on what matters most.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Computer Repair & Hardware Services',
                  'Network Setup & Cybersecurity',
                  'Data Recovery & Cloud Solutions',
                  'Remote & On-site IT Support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* US-based card with flag image */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg"
              style={{ minHeight: '360px' }}
            >
              <img
                src={usFlag}
                alt="US-based tech support company"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <FaMapMarkerAlt className="w-8 h-8 mb-3 text-blue-300" />
                <h3 className="text-2xl font-bold mb-2">US-Based Tech Support</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Proudly serving Palm Bay, Melbourne, and all of Brevard County — with remote support available nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">What Drives Us</p>
            <h2 className="text-3xl font-bold text-gray-800">Our Mission &amp; Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaLaptop className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To ensure every client enjoys a seamless, trouble-free experience with their technology — through honest, high-quality service.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Our Team</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated IT professionals passionate about solving tech problems. We're committed to your complete satisfaction on every job.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Our Promise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transparent pricing, honest advice, and no-fix no-fee service. We treat every client's technology like it's our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Why Us</p>
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Best Computer Tech?</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl">
              <div className="mb-4 p-3 bg-blue-100 rounded-full">
                <FaCertificate className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Expert Technicians</h3>
              <p className="text-sm text-gray-600">Certified and experienced in all kinds of computer issues — from hardware repairs to complex IT solutions.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-xl">
              <div className="mb-4 p-3 bg-green-100 rounded-full">
                <FaTools className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Comprehensive Services</h3>
              <p className="text-sm text-gray-600">Repair, network setup, data recovery, cybersecurity, and more — everything under one roof.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-yellow-50 rounded-xl">
              <div className="mb-4 p-3 bg-yellow-100 rounded-full">
                <FaBolt className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Fast Turnaround</h3>
              <p className="text-sm text-gray-600">Most repairs completed same day or next day. We minimize your downtime — at home or at work.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-red-50 rounded-xl">
              <div className="mb-4 p-3 bg-red-100 rounded-full">
                <FaStar className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">5-Star Satisfaction</h3>
              <p className="text-sm text-gray-600">Our positive reviews and loyal client base reflect our commitment to excellence across Brevard County.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-2">By the Numbers</p>
            <h2 className="text-3xl font-bold">Our Achievements</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 text-center mb-12">
            <div className="p-6 bg-blue-600 rounded-xl">
              <p className="text-4xl font-bold mb-1">15+</p>
              <p className="text-blue-200 text-sm">Years in Business</p>
            </div>
            <div className="p-6 bg-blue-600 rounded-xl">
              <p className="text-4xl font-bold mb-1">1,500+</p>
              <p className="text-blue-200 text-sm">Satisfied Customers</p>
            </div>
            <div className="p-6 bg-blue-600 rounded-xl">
              <p className="text-4xl font-bold mb-1">10,000+</p>
              <p className="text-blue-200 text-sm">Successful Repairs</p>
            </div>
            <div className="p-6 bg-blue-600 rounded-xl">
              <p className="text-4xl font-bold mb-1">99%</p>
              <p className="text-blue-200 text-sm">Customer Satisfaction</p>
            </div>
          </div>

          {/* Google Reviews CTA */}
          <div className="text-center">
            <p className="text-blue-200 mb-4 text-sm">See what our clients are saying</p>
            <a
              href="https://www.google.com/search?q=best+computer+tech+palm+bay+fl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-blue-700 bg-white rounded-full hover:bg-blue-50 transition-colors shadow"
            >
              <FaStar className="text-yellow-400" /> Read Our Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Get In Touch</p>
            <h2 className="text-3xl font-bold text-gray-800">Let's Talk About Your Technology</h2>
            <p className="text-gray-500 text-sm mt-2">Fill out the form and we'll get back to you within 1 business day.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <FaCheckCircle className="text-green-500 w-16 h-16" />
                <h3 className="text-2xl font-bold text-gray-800">Message Received!</h3>
                <p className="text-gray-600 max-w-sm">
                  Thanks for reaching out. We'll contact you within 1 business day — often the same day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-blue-600 underline hover:text-blue-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First + Last Name */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="first-name">First Name</label>
                    <input
                      className={inputClass}
                      id="first-name"
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="last-name">Last Name</label>
                    <input
                      className={inputClass}
                      id="last-name"
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="phone">Phone Number</label>
                    <input
                      className={inputClass}
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(321) 555-1234"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Email Address</label>
                    <input
                      className={inputClass}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass} htmlFor="message">Message</label>
                  <textarea
                    className={inputClass}
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Newsletter opt-in */}
                <label className="inline-flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" name="subscribe" className="rounded text-blue-600 focus:ring-blue-500" />
                  Subscribe to our quarterly newsletter
                </label>

                {/* Error */}
                {submitError && (
                  <div className="p-4 text-sm text-red-800 bg-red-50 border border-red-200 rounded-lg">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Or call us directly at{' '}
                  <a href="tel:3219535199" className="text-blue-600 hover:underline">(321) 953-5199</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
