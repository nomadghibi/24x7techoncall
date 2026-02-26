
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import socialImage from '../assets/optimized-hero/heroimage100-1152.jpg';

const services = {
  'hardware-repairs': {
    title: 'Hardware Repairs',
    description: 'Fixing broken screens, malfunctioning keyboards, and other hardware issues.',
    price: 'Varies by issue',
  },
  'software-troubleshooting': {
    title: 'Software Troubleshooting',
    description: 'Resolving operating system errors, application crashes, and software installation issues.',
    price: '$75/hr',
  },
  'virus-malware-removal': {
    title: 'Virus and Malware Removal',
    description: 'Protecting your computer from harmful viruses and ensuring your data is safe.',
    price: '$95 flat rate',
  },
  'network-setup-support': {
    title: 'Network Setup and Support',
    description: 'Setting up and maintaining secure and efficient home or office networks.',
    price: '$100/hr',
  },
  'data-recovery': {
    title: 'Data Recovery',
    description: 'Retrieving lost or corrupted data from hard drives and other storage devices.',
    price: '$100/hr',
  },
  'remote-computer-support': {
    title: 'Remote Computer Support',
    description: 'Providing professional support for your computer issues without the need for a technician visit.',
    price: '$75/hr',
  },
  'quick-repair-quote': {
    title: 'Quick Repair Quote',
    description: 'Get a quick repair quote before taking it to the shop for only $19.95.',
    price: '$19.95',
  },
  'remote-tech-support': {
    title: 'Remote Tech Support',
    description: 'Get expert tech support from the comfort of your home for $75/hr.',
    price: '$75/hr',
  },
  'computer-training': {
    title: 'Computer Training',
    description: 'Learn how to use your computer more effectively with our professional training sessions.',
    price: '$75/hr',
  },
};

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services[serviceId];
  const navigate = useNavigate();

  if (!service) {
    return (
      <div className="container p-8 mx-auto">
        <h1>Service not found</h1>
        <p>The service you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/services')}
          className="px-4 py-2 mt-4 font-bold text-gray-900 bg-cyan-500 rounded hover:bg-cyan-400 focus:outline-none focus:shadow-outline"
        >
          Back to Services
        </button>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/checkout', { state: { service } });
  };
  const canonicalUrl = `https://bestcomputertec.com/services/${serviceId}`;
  const pageImage = socialImage?.startsWith('http') ? socialImage : `https://bestcomputertec.com${socialImage || ''}`;

  return (
    <div className="container p-8 mx-auto">
      <Helmet>
        <title>{service.title} | Palm Bay/Melbourne FL | Tech Support Services</title>
        <meta name="description" content={`${service.description} - Available in Palm Bay/Melbourne, FL. Contact us today for expert IT support.`} />
        <meta name="keywords" content={`${service.title}, Palm Bay/Melbourne FL, IT Services, Tech Support, Computer Repair`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${service.title} | Best Computer Tech`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${service.title} | Best Computer Tech`} />
        <meta name="twitter:description" content={service.description} />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>
      <h1 className="mb-4 text-4xl font-bold">{service.title}</h1>
      <p className="mb-4">{service.description}</p>
      <p className="mb-4"><strong>Price:</strong> {service.price}</p>
      <h2 className="mb-4 text-2xl font-semibold">Make an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
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
            type="email"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="date">
            Preferred Appointment Date
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
            Additional Information
          </label>
          <textarea
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Your message"
          />
        </div>
        <button
          className="px-4 py-2 font-bold text-gray-900 bg-cyan-500 rounded hover:bg-cyan-400 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ServiceDetail;
