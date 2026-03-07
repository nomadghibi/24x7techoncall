import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaBug, FaDatabase,
  FaLaptopHouse,
  FaCheckCircle, FaDollarSign, FaShieldAlt, FaSave,
  FaLaptop, FaLifeRing, FaPlay, FaPhoneAlt, FaBolt, FaArrowRight,
  FaWifi, FaEnvelope, FaTachometerAlt, FaDesktop, FaUsers,
} from 'react-icons/fa';

import heroImage from '../assets/optimized-hero/residentail-1152.jpg';
import computerImage from '../assets/optimized-hero/computers-optimized-1152.jpg';

const services = [
  {
    id: 'computer-repair',
    title: 'Computer Repair & Troubleshooting',
    description: 'Remote diagnosis and repair for crashes, freezes, slow performance, and unresponsive systems.',
    route: '/residential-support/computer-repair',
    icon: FaLaptopHouse,
    color: 'text-teal-500',
    bg: 'bg-teal-50',
  },
  {
    id: 'virus-malware',
    title: 'Virus & Malware Removal',
    description: 'Remove viruses, spyware, ransomware, pop-ups, and browser hijackers — fast and thorough.',
    route: '/residential-support/virus-malware-removal',
    icon: FaBug,
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    id: 'wifi-internet',
    title: 'Wi-Fi & Internet Help',
    description: 'Fix slow internet, dropped connections, router issues, and Wi-Fi dead zones remotely.',
    route: '/residential-support/wifi-internet-help',
    icon: FaWifi,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    id: 'email-printer-software',
    title: 'Email, Printer & Software Support',
    description: 'Setup and troubleshoot email accounts, printers, scanners, Zoom, and everyday apps.',
    route: '/residential-support/email-printer-software',
    icon: FaEnvelope,
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    id: 'pc-tune-up',
    title: 'PC Tune-Up & Optimization',
    description: 'Speed up a slow PC, clean startup programs, remove junk files, and Windows update repair.',
    route: '/residential-support/pc-tune-up',
    icon: FaTachometerAlt,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    id: 'data-backup',
    title: 'Data Backup & File Transfer',
    description: 'Cloud backup setup, OneDrive sync, and transferring files from your old PC to a new one.',
    route: '/residential-support/data-backup-transfer',
    icon: FaDatabase,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  {
    id: 'new-computer-setup',
    title: 'New Computer Setup',
    description: 'Get your new PC ready fast — Windows setup, app installs, account sync, printer config.',
    route: '/residential-support/new-computer-setup',
    icon: FaDesktop,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    id: 'senior-tech-help',
    title: 'Tech Help for Seniors',
    description: 'Patient, plain-language remote support for seniors — email, Zoom, tablets, smart TVs, and more.',
    route: '/residential-support/senior-tech-help',
    icon: FaUsers,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
];

const whyUs = [
  {
    icon: <FaCheckCircle className="w-6 h-6 text-cyan-500" />,
    bg: 'bg-cyan-50',
    title: 'Expert Technicians',
    desc: 'Certified pros with years of hands-on experience across all brands and platforms.',
  },
  {
    icon: <FaBolt className="w-6 h-6 text-yellow-500" />,
    bg: 'bg-yellow-50',
    title: 'Fast Turnaround',
    desc: 'Most issues resolved same day — we know downtime is costly.',
  },
  {
    icon: <FaDollarSign className="w-6 h-6 text-green-500" />,
    bg: 'bg-green-50',
    title: 'Affordable Rates',
    desc: 'Transparent pricing with no hidden fees. You know the cost before we start.',
  },
];

const ServiceCard = React.memo(({ service, onClick, index }) => {
  const Icon = service.icon;
  return (
    <motion.div
      className="block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div
        className="flex flex-col h-full bg-white rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-cyan-200 transition-all duration-200 overflow-hidden"
        onClick={() => onClick(service.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick(service.id)}
      >
        <div className={`p-6 flex items-center justify-center ${service.bg}`}>
          <Icon className={`text-4xl ${service.color}`} />
        </div>
        <div className="flex flex-col flex-grow p-5">
          <h3 className="mb-2 text-base font-bold text-gray-900 group-hover:text-cyan-600 leading-snug">
            {service.title}
          </h3>
          <p className="flex-grow text-sm text-gray-500 mb-4 leading-relaxed">{service.description}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-500">
            Learn More <FaArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
});
ServiceCard.displayName = 'ServiceCard';

const annualBenefits = [
  { icon: <FaBug className="w-4 h-4 text-cyan-500 shrink-0" />, label: 'Unlimited virus removal' },
  { icon: <FaLaptop className="w-4 h-4 text-cyan-500 shrink-0" />, label: 'Speed optimization' },
  { icon: <FaLaptopHouse className="w-4 h-4 text-cyan-500 shrink-0" />, label: 'Faster startup' },
  { icon: <FaLifeRing className="w-4 h-4 text-cyan-500 shrink-0" />, label: 'Routine check-ups' },
  { icon: <FaShieldAlt className="w-4 h-4 text-cyan-500 shrink-0" />, label: 'Phone support during business hours' },
  { icon: <FaSave className="w-4 h-4 text-cyan-500 shrink-0" />, label: 'Data backup assistance' },
  { icon: <FaLaptopHouse className="w-4 h-4 text-cyan-500 shrink-0" />, label: 'Remote tech support' },
  { icon: <FaBug className="w-4 h-4 text-cyan-500 shrink-0" />, label: 'Antivirus installation & maintenance' },
  { icon: <FaLaptop className="w-4 h-4 text-cyan-500 shrink-0" />, label: 'Computer tune-ups as needed' },
];

function ResidentialServices() {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const canonicalUrl = 'https://24x7techoncall.com/residential-services';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://24x7techoncall.com${heroImage || ''}`;

  const handleServiceClick = useCallback((serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    navigate(service?.route || '/residential-services');
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
        <title>Remote Residential Tech Support | 24x7 Tech On Call</title>
        <meta name="description" content="Professional remote tech support for home users nationwide. Virus removal, software troubleshooting, data recovery, cloud consulting, and more — no visit required." />
        <meta name="keywords" content="remote residential tech support, home computer support online, remote virus removal, software troubleshooting online, remote IT help for home, nationwide computer support" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Remote Residential Tech Support | 24x7 Tech On Call" />
        <meta property="og:description" content="Professional remote tech support for home users nationwide. No visit required — we fix it from your screen." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Remote Residential Tech Support | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Fast and reliable remote residential tech support from 24x7 Tech On Call. Available nationwide." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* ── Hero ── */}
      <section
        className="relative min-h-[460px] flex items-end text-white"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/55 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-cyan-300 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Residential Services</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Nationwide
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Remote Residential Tech Support
          </h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">
            Professional remote tech support for home users across the USA — no visit required. Free diagnostic over the phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href="tel:3219535199"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 rounded-full transition-colors shadow-lg"
            >
              <FaPhoneAlt className="w-4 h-4" /> Call Us: (321) 953-5199
            </a>
            <Link
              to="/book-service"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 font-semibold text-white bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-colors"
            >
              Book a Service
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500 mb-2">Why Us</p>
            <h2 className="text-3xl font-bold text-gray-900">Why Homeowners Choose 24x7 Tech On Call</h2>
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
                    alt="24x7 Tech On Call introduction video"
                    className="w-full rounded-xl"
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={720}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 flex items-center justify-center bg-cyan-500 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <FaPlay className="text-gray-900 text-xl ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/8GOvDyPOW7c?rel=0&autoplay=1"
                    title="24x7 Tech On Call Introduction"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* Why Us Points */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
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
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500 mb-2">What We Do Remotely</p>
            <h2 className="text-3xl font-bold text-gray-900">Our Remote Services</h2>
            <p className="text-gray-500 mt-2 text-sm">Click any service to learn more.</p>
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
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
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
                <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                  Best Value
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Annual Computer Care Plan — $199/year
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  One-time repairs in Nationwide typically run $90–$180+ per incident. If you need two or more fixes per year, this plan pays for itself — and you get proactive care all year long.
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
                    className="px-7 py-3 font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 rounded-lg transition-colors"
                  >
                    Subscribe Now — $199/yr
                  </button>
                  <a
                    href="tel:3219535199"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 font-semibold text-gray-700 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors"
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
      <section className="py-16 bg-gray-900 border-t-4 border-cyan-500 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-3">Get Started Today</p>
          <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">
            Call us, book a service online, or send a message. We're here Mon–Fri, 9am–6pm.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:3219535199"
              className="flex items-center gap-2 px-7 py-3 font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 rounded-full transition-colors shadow"
            >
              <FaPhoneAlt className="w-4 h-4" /> (321) 953-5199
            </a>
            <Link
              to="/book-service"
              className="px-7 py-3 font-semibold text-white bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-colors"
            >
              Book a Service
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 font-semibold text-white bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-colors"
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
