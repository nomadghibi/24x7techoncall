import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import socialImage from '../assets/optimized-hero/heroimage100-1152.jpg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const canonicalUrl = 'https://bestcomputertec.com/contact';
  const pageImage = socialImage?.startsWith('http') ? socialImage : `https://bestcomputertec.com${socialImage || ''}`;
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Best Computer Tech',
    url: canonicalUrl,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Best Computer Tech LLC',
      telephone: '+1-321-953-5199',
      email: '365techoncall@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '602 Hurst Rd NE',
        addressLocality: 'Palm Bay',
        addressRegion: 'FL',
        postalCode: '32907',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Palm Bay' },
        { '@type': 'City', name: 'Melbourne' },
        { '@type': 'AdministrativeArea', name: 'Brevard County' },
      ],
    },
  };

  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Use `name` here to match the attribute in the form
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      alert('Contact form is temporarily unavailable. Please call (321) 953-5199 or email 365techoncall@gmail.com.');
      return;
    }

    // Send form data using EmailJS
    emailjs.sendForm(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Thanks! Your message has been received. We will contact you within 1 business day.');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('We could not send your message right now. Please try again, or call (321) 953-5199.');
      });
  };

  return (
    <div className="container p-8 mx-auto">
      <Helmet>
        <title>Contact Computer Repair in Palm Bay, FL | Best Computer Tech</title>
        <meta
          name="description"
          content="Contact Best Computer Tech for local computer repair and IT support in Palm Bay, Melbourne, and Brevard County, Florida."
        />
        <meta
          name="keywords"
          content="contact computer repair Palm Bay FL, IT support Melbourne FL, local tech support Brevard County"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Best Computer Tech | Palm Bay, FL" />
        <meta
          property="og:description"
          content="Reach Best Computer Tech for local computer repair and IT support in Palm Bay and nearby Florida cities."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Best Computer Tech | Palm Bay, FL" />
        <meta
          name="twitter:description"
          content="Call or email Best Computer Tech for local IT and computer repair services in Palm Bay, FL."
        />
        <meta name="twitter:image" content={pageImage} />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Helmet>
      <h1 className="mb-8 text-4xl font-bold text-center">Contact Best Computer Tech</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Our Office</h2>
          <p className="mb-2">602 Hurst Rd NE, Palm Bay, Florida 32907, USA</p>
          <p className="mb-2">
            Phone:{' '}
            <a className="text-blue-700 hover:underline" href="tel:+13219535199">(321) 953-5199</a>
          </p>
          <p className="mb-8">
            Email:{' '}
            <a className="text-blue-700 hover:underline" href="mailto:365techoncall@gmail.com">365techoncall@gmail.com</a>
          </p>
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
