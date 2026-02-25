import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaTools, FaBug, FaNetworkWired, FaDatabase,
  FaLaptopHouse, FaChalkboardTeacher, FaCloud,
  FaCheckCircle, FaDollarSign, FaShieldAlt, FaSave,
  FaLaptop, FaLifeRing, FaPlay, FaPhoneAlt, FaBolt,
} from 'react-icons/fa';

import heroImage from '../assets/optimized-hero/residentail-1152.jpg';
import computerImage from '../assets/optimized-hero/computers-optimized-1152.jpg';

const services = [
  {
    id: 'hardware-repairs',
    title: 'Hardware Repairs',
    description: 'Fixing broken screens, malfunctioning keyboards, and other hardware issues.',
    icon: <FaTools className="text-3xl text-blue-500" />,
  },
  {
    id: 'software-troubleshooting',
    title: 'Software Troubleshooting',
    description: 'Resolving OS errors, application crashes, and software installation issues.',
    icon: <FaLaptop className="text-3xl text-green-500" />,
  },
  {
    id: 'virus-malware-removal',
    title: 'Virus & Malware Removal',
    description: 'Protecting your computer from harmful viruses and keeping your data safe.',
    icon: <FaBug className="text-3xl text-red-500" />,
  },
  {
    id: 'network-setup-support',
    title: 'Network Setup & Support',
    description: 'Setting up and maintaining secure, efficient home or office networks.',
    icon: <FaNetworkWired className="text-3xl text-purple-500" />,
  },
  {
    id: 'data-recovery',
    title: 'Data Recovery',
    description: 'Retrieving lost or corrupted data from hard drives and storage devices.',
    icon: <FaDatabase className="text-3xl text-yellow-500" />,
  },
  {
    id: 'remote-computer-support',
    title: 'Remote Computer Support',
    description: 'Professional support for your computer issues without needing a technician visit.',
    icon: <FaLaptopHouse className="text-3xl text-teal-500" />,
  },
  {
    id: 'cloud-consulting',
    title: 'Cloud Consulting',
    description: 'Expert advice on leveraging cloud technology for your home or business.',
    icon: <FaCloud className="text-3xl text-indigo-500" />,
  },
  {
    id: 'computer-training',
    title: 'Computer Training',
    description: 'Learn to use your computer more effectively with our professional training sessions.',
    icon: <FaChalkboardTeacher className="text-3xl text-orange-500" />,
  },
];

const whyUs = [
  {
    icon: <FaCheckCircle className="w-6 h-6 text-blue-600" />,
    bg: 'bg-blue-50',
    title: 'Expert Technicians',
    desc: 'Certified pros with years of hands-on experience across all brands and platforms.',
  },
  {
    icon: <FaBolt className="w-6 h-6 text-yellow-600" />,
    bg: 'bg-yellow-50',
    title: 'Fast Turnaround',
    desc: 'Most issues resolved same day — we know downtime is costly.',
  },
  {
    icon: <FaDollarSign className="w-6 h-6 text-green-600" />,
    bg: 'bg-green-50',
    title: 'Affordable Rates',
    desc: 'Transparent pricing with no hidden fees. You know the cost before we start.',
  },
];

const ServiceCard = React.memo(({ service, onClick, index }) => (
  <motion.div
    className="block"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
  >
    <div
      className="flex flex-col h-full p-6 text-center bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200"
      onClick={() => onClick(service.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(service.id)}
    >
      <div className="flex items-center justify-center mb-4 w-14 h-14 rounded-full bg-gray-50 mx-auto">
        {service.icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-800">{service.title}</h3>
      <p className="flex-grow text-sm text-gray-600 mb-4">{service.description}</p>
      <span className="text-sm font-semibold text-blue-600">Learn More →</span>
    </div>
  </motion.div>
));
ServiceCard.displayName = 'ServiceCard';

const annualBenefits = [
  { icon: <FaBug className="w-5 h-5 text-blue-500" />, label: 'Unlimited virus removal' },
  { icon: <FaLaptop className="w-5 h-5 text-blue-500" />, label: 'Speed optimization' },
  { icon: <FaLaptopHouse className="w-5 h-5 text-blue-500" />, label: 'Faster startup' },
  { icon: <FaLifeRing className="w-5 h-5 text-blue-500" />, label: 'Routine check-ups' },
  { icon: <FaShieldAlt className="w-5 h-5 text-blue-500" />, label: 'Phone support during business hours' },
  { icon: <FaSave className="w-5 h-5 text-blue-500" />, label: 'Data backup assistance' },
  { icon: <FaLaptopHouse className="w-5 h-5 text-blue-500" />, label: 'Remote tech support' },
  { icon: <FaBug className="w-5 h-5 text-blue-500" />, label: 'Antivirus installation & maintenance' },
  { icon: <FaLaptop className="w-5 h-5 text-blue-500" />, label: 'Computer tune-ups as needed' },
];

function ResidentialServices() {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const canonicalUrl = 'https://bestcomputertec.com/residential-services';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://bestcomputertec.com${heroImage || ''}`;

  const handleServiceClick = useCallback((serviceId) => {
    const routes = {
      'hardware-repairs': '/residential-support/pc-laptop-repairs',
      'software-troubleshooting': '/residential-support/software-troubleshooting',
      'virus-malware-removal': '/residential-support/virus-malware-removal',
      'network-setup-support': '/residential-support/network-setup-support',
      'data-recovery': '/residential-support/data-recovery',
      'remote-computer-support': '/residential-support/remote-support',
      'cloud-consulting': '/residential-support/cloud-consulting',
      'computer-training': '/residential-support/computer-training',
    };
    navigate(routes[serviceId] || `/services/${serviceId}`);
  }, [navigate]);

  const handleOrderNow = () => {
    navigate('/checkout', {
      state: {
        service: {
          title: 'Annual Subscription Plan',
          price: '$199.00',
          description: 'Annual care plan for ongoing computer maintenance and support.',
        },
      },
    });
  };

  return (
    <div>
      <Helmet>
        <title>Computer Repair Palm Bay Melbourne FL | Laptop Repair & Tech Support Services</title>
        <meta name="description" content="Best Computer Repair and IT Support Services in Palm Bay/Melbourne, FL. We specialize in Laptop Repair, PC Repair, Network Setup, and Data Recovery. Call us for quick, reliable service." />
        <meta name="keywords" content="Computer Repair Palm Bay/Melbourne FL, Tech Support Services, Laptop Repair, PC Repair, IT Support Palm Bay/Melbourne, Virus Removal, Data Recovery, Network Setup" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Computer Repair Palm Bay Melbourne FL | Best Computer Tech" />
        <meta property="og:description" content="Residential computer repair and IT support services in Palm Bay and Melbourne, FL." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Computer Repair Palm Bay Melbourne FL | Best Computer Tech" />
        <meta name="twitter:description" content="Fast and reliable residential tech support services from Best Computer Tech." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center text-white bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImage})`, minHeight: '480px' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-3">
            Palm Bay &amp; Melbourne, FL
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Residential Computer &amp; IT Services
          </h1>
          <p className="text-lg text-gray-200 mb-4">
            Fast, reliable tech support for your home — onsite and remote.
          </p>
          <p className="text-base text-blue-200 mb-8">
            Get a free diagnostic over the phone. Call us now!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:3219535199"
              className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
            >
              <FaPhoneAlt /> Call Us: (321) 953-5199
            </a>
            <Link
              to="/book-service"
              className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-white bg-white/10 border border-white/40 rounded-full hover:bg-white/20 transition-colors"
            >
              Book a Service
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Why Us</p>
            <h2 className="text-3xl font-bold text-gray-800">Why Homeowners Choose Best Computer Tech</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
            {/* YouTube Video */}
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
              {!videoLoaded ? (
                <div
                  className="relative cursor-pointer group"
                  onClick={() => setVideoLoaded(true)}
                >
                  <img
                    src="https://img.youtube.com/vi/8GOvDyPOW7c/maxresdefault.jpg"
                    alt="Best Computer Tech introduction video"
                    className="w-full rounded-xl"
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={720}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 flex items-center justify-center bg-white/90 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <FaPlay className="text-blue-600 text-2xl ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/8GOvDyPOW7c?rel=0&autoplay=1"
                    title="Best Computer Tech Introduction"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* Why Us Points */}
            <div className="w-full md:w-1/2 flex flex-col gap-5">
              {whyUs.map((item, i) => (
                <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${item.bg}`}>
                  <div className="p-2 bg-white rounded-lg shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">What We Fix</p>
            <h2 className="text-3xl font-bold text-gray-800">Our Residential Services</h2>
            <p className="text-gray-500 mt-2">Click any service to learn more.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} onClick={handleServiceClick} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Annual Subscription Plan ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row">

              {/* Image */}
              <div className="lg:w-2/5 relative">
                <img
                  src={computerImage}
                  alt="Annual Subscription Plan"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '320px' }}
                  loading="lazy"
                  decoding="async"
                  width={1152}
                  height={1152}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
              </div>

              {/* Content */}
              <div className="lg:w-3/5 p-8">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                  Best Value
                </span>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Annual Computer Care Plan — $199/year
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  One-time repairs in Palm Bay and Melbourne typically run $90–$180+ per incident. If you need two or more fixes per year, this plan pays for itself — and you get proactive care all year long.
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mb-6">
                  {annualBenefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      {b.icon}
                      {b.label}
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-500 mb-6">
                  Best for households with multiple devices, remote workers, seniors, or anyone who wants predictable support costs.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleOrderNow}
                    className="px-7 py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Subscribe Now — $199/yr
                  </button>
                  <a
                    href="tel:3219535199"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <FaPhoneAlt className="w-4 h-4" /> Not sure? Call us first
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-blue-200 mb-8">
            Call us, book a service online, or send a message. We're here Mon–Fri, 9am–6pm.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:3219535199"
              className="flex items-center gap-2 px-7 py-3 font-bold text-blue-900 bg-white rounded-full hover:bg-blue-50 transition-colors shadow"
            >
              <FaPhoneAlt className="w-4 h-4" /> (321) 953-5199
            </a>
            <Link
              to="/book-service"
              className="px-7 py-3 font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors"
            >
              Book a Service
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 font-semibold text-white bg-white/10 border border-white/40 rounded-full hover:bg-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResidentialServices;
