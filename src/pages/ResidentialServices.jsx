import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaBug,
  FaDatabase,
  FaLaptopHouse,
  FaCheckCircle,
  FaShieldAlt,
  FaSave,
  FaPhoneAlt,
  FaBolt,
  FaArrowRight,
  FaWifi,
  FaEnvelope,
  FaTachometerAlt,
  FaDesktop,
  FaUsers,
  FaClock,
} from 'react-icons/fa';

import heroImage from '../assets/optimized-hero/residentail-1152.jpg';
import computerImage from '../assets/optimized-hero/computers-optimized-1152.jpg';

const residentialMenu = [
  {
    id: 'computer-repair',
    label: 'Computer Repair',
    route: '/residential-support/computer-repair',
    icon: FaLaptopHouse,
  },
  {
    id: 'virus-malware',
    label: 'Virus Removal',
    route: '/residential-support/virus-malware-removal',
    icon: FaBug,
  },
  {
    id: 'wifi-internet',
    label: 'Wi-Fi Help',
    route: '/residential-support/wifi-internet-help',
    icon: FaWifi,
  },
  {
    id: 'email-printer-software',
    label: 'Email & Printer',
    route: '/residential-support/email-printer-software',
    icon: FaEnvelope,
  },
  {
    id: 'pc-tune-up',
    label: 'PC Tune-Up',
    route: '/residential-support/pc-tune-up',
    icon: FaTachometerAlt,
  },
  {
    id: 'data-backup',
    label: 'Backup & Transfer',
    route: '/residential-support/data-backup-transfer',
    icon: FaDatabase,
  },
  {
    id: 'new-computer-setup',
    label: 'New PC Setup',
    route: '/residential-support/new-computer-setup',
    icon: FaDesktop,
  },
  {
    id: 'senior-tech-help',
    label: 'Senior Tech Help',
    route: '/residential-support/senior-tech-help',
    icon: FaUsers,
  },
];

const services = [
  {
    id: 'computer-repair',
    title: 'Computer Repair & Troubleshooting',
    description: 'We fix crashes, freezing, startup problems, and general slow performance.',
    route: '/residential-support/computer-repair',
    icon: FaLaptopHouse,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    id: 'virus-malware',
    title: 'Virus & Malware Removal',
    description: 'We remove pop-ups, malware, and risky software and secure your system.',
    route: '/residential-support/virus-malware-removal',
    icon: FaBug,
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    id: 'wifi-internet',
    title: 'Wi-Fi & Internet Help',
    description: 'We solve connection drops, router setup problems, and weak home Wi-Fi.',
    route: '/residential-support/wifi-internet-help',
    icon: FaWifi,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    id: 'email-printer-software',
    title: 'Email, Printer & Software Support',
    description: 'We fix Outlook and Gmail issues, printer setup, and everyday software errors.',
    route: '/residential-support/email-printer-software',
    icon: FaEnvelope,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
  {
    id: 'pc-tune-up',
    title: 'PC Tune-Up & Speed Boost',
    description: 'We clean startup apps, optimize settings, and make your PC faster.',
    route: '/residential-support/pc-tune-up',
    icon: FaTachometerAlt,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    id: 'data-backup',
    title: 'Data Backup & File Transfer',
    description: 'We set up backups and move your files safely to your new device.',
    route: '/residential-support/data-backup-transfer',
    icon: FaDatabase,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    id: 'new-computer-setup',
    title: 'New Computer Setup',
    description: 'We set up your new computer, apps, accounts, and printer the right way.',
    route: '/residential-support/new-computer-setup',
    icon: FaDesktop,
    color: 'text-violet-500',
    bg: 'bg-violet-50',
  },
  {
    id: 'senior-tech-help',
    title: 'Senior Tech Help',
    description: 'Patient, simple, step-by-step support for home users and seniors.',
    route: '/residential-support/senior-tech-help',
    icon: FaUsers,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
];

const quickSteps = [
  {
    title: '1) Tell Us the Problem',
    text: 'Call or book online and explain what is happening.',
    icon: FaPhoneAlt,
  },
  {
    title: '2) We Connect Securely',
    text: 'You approve remote access. You can watch everything.',
    icon: FaShieldAlt,
  },
  {
    title: '3) We Fix It Fast',
    text: 'Most home issues are solved the same day.',
    icon: FaBolt,
  },
];

const trustPoints = [
  {
    title: 'Simple Language',
    text: 'We explain everything in plain English so it is easy to follow.',
    icon: FaCheckCircle,
  },
  {
    title: 'No Surprise Fees',
    text: 'Clear pricing before any work starts.',
    icon: FaSave,
  },
  {
    title: 'Fast Response',
    text: 'Quick support windows with reliable follow-up.',
    icon: FaClock,
  },
];

const annualBenefits = [
  'Coverage for 2 computers and 1 printer',
  'Unlimited virus cleanup as needed',
  'Routine speed tune-ups and health checks',
  'Remote support for common home tech issues',
  'Support hours: Monday-Friday, 10:00 AM-5:00 PM',
  'Data backup setup guidance',
  'Priority support response',
  'Best for families with multiple devices',
];

function ResidentialServices() {
  const navigate = useNavigate();

  const canonicalUrl = 'https://24x7techoncall.com/residential-services';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://24x7techoncall.com${heroImage || ''}`;

  const handleServiceClick = useCallback((serviceId) => {
    const service = services.find((item) => item.id === serviceId);
    navigate(service?.route || '/residential-services');
  }, [navigate]);

  const handleOrderNow = () => {
    navigate('/checkout', {
      state: {
        service: {
          title: 'Annual Computer Care Plan',
          price: '$299',
          description: 'Annual care plan for ongoing home computer maintenance and support.',
        },
      },
    });
  };

  return (
    <div>
      <Helmet>
        <title>Residential Remote Tech Support | 24/7 Tech On Call</title>
        <meta
          name="description"
          content="Residential remote tech support made simple. Fast help for computer repair, virus removal, Wi-Fi issues, email, printers, and new computer setup."
        />
        <meta
          name="keywords"
          content="residential tech support, home computer support, remote virus removal, wifi help, printer setup, senior tech help"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Residential Remote Tech Support | 24/7 Tech On Call" />
        <meta
          property="og:description"
          content="Simple and reliable residential remote tech support across the USA."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Residential Remote Tech Support | 24/7 Tech On Call" />
        <meta
          name="twitter:description"
          content="Home tech support made simple: repair, malware cleanup, Wi-Fi help, and setup assistance."
        />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

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
            For Home Customers
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Home Tech Help, Made Simple
          </h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">
            Choose a residential service below. We fix most problems remotely while you watch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href="tel:3219535199"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 rounded-full transition-colors shadow-lg"
            >
              <FaPhoneAlt className="w-4 h-4" /> Call (321) 953-5199
            </a>
            <Link
              to="/book-service"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 font-semibold text-white bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-colors"
            >
              Book Residential Service
            </Link>
            <Link
              to="/diagnose-my-issue"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 font-semibold text-white bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-colors"
            >
              Diagnose My Issue
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
            <h2 className="text-lg font-bold text-gray-900">Residential Menu</h2>
            <p className="text-sm text-gray-500">Quick links for home services</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {residentialMenu.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.route}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 text-sm font-semibold text-gray-700 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-2">Simple Process</p>
            <h2 className="text-3xl font-bold text-gray-900">How Residential Support Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500 mb-2">Most Requested</p>
            <h2 className="text-3xl font-bold text-gray-900">Residential Services</h2>
            <p className="text-gray-500 mt-2 text-sm">Choose a service to see details.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="flex h-full cursor-pointer flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
                  onClick={() => handleServiceClick(service.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleServiceClick(service.id)}
                >
                  <div className={`p-6 flex items-center justify-center ${service.bg}`}>
                    <Icon className={`text-4xl ${service.color}`} />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 text-base font-bold text-gray-900 leading-snug">
                      {service.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-gray-500 leading-relaxed">{service.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600">
                      Learn More <FaArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500 mb-2">Why Families Choose Us</p>
            <h2 className="text-3xl font-bold text-gray-900">Friendly, Clear, Reliable</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trustPoints.map((item) => (
              <article key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                  <item.icon className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5">
                <img
                  src={computerImage}
                  alt="Annual residential computer care plan"
                  className="h-full w-full object-cover"
                  style={{ minHeight: '320px' }}
                  loading="lazy"
                  decoding="async"
                  width={1152}
                  height={1152}
                />
              </div>
              <div className="lg:w-3/5 p-8">
                <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-700 mb-4">
                  Residential Plan
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Annual Computer Care Plan - $299/year</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Great for home users who want predictable support for 2 computers and 1 printer.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {annualBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                      <FaCheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleOrderNow}
                    className="px-7 py-3 font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 rounded-lg transition-colors"
                  >
                    Subscribe Now
                  </button>
                  <a
                    href="tel:3219535199"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 font-semibold text-gray-700 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <FaPhoneAlt className="w-4 h-4" /> Ask a Question
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 border-t-4 border-cyan-500 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-3">Need Help Now?</p>
          <h2 className="text-3xl font-bold mb-3">Talk to a Residential Support Technician</h2>
          <p className="text-gray-400 mb-8">
            Call, book online, or message us. We make home tech support easy.
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
