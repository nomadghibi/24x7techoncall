import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCheckCircle, FaUsers, FaShieldAlt, FaPlay,
  FaPhoneAlt, FaDatabase, FaCloud, FaCode,
  FaCogs, FaSearch, FaBolt, FaStar, FaHandshake,
  FaLock, FaChartLine, FaEnvelope,
} from 'react-icons/fa';
import businessImage from '../assets/optimized-hero/businessservices-1152.jpg';

const services = [
  {
    id: 'it-consulting',
    title: 'IT Consultancy',
    description: 'Expert advice on IT infrastructure, software solutions, and technology strategy tailored to your business goals.',
    icon: <FaSearch className="text-3xl text-blue-500" />,
    bg: 'bg-blue-50',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protecting your business from cyber threats with robust security solutions, monitoring, and staff training.',
    icon: <FaShieldAlt className="text-3xl text-red-500" />,
    bg: 'bg-red-50',
  },
  {
    id: 'data-recovery',
    title: 'Data Backup & Recovery',
    description: 'Ensuring your critical data is safely backed up and can be quickly restored when disaster strikes.',
    icon: <FaDatabase className="text-3xl text-yellow-500" />,
    bg: 'bg-yellow-50',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Custom, responsive websites built to represent your brand — from design and development to deployment.',
    icon: <FaCode className="text-3xl text-green-500" />,
    bg: 'bg-green-50',
  },
  {
    id: 'managed-it-services',
    title: 'Managed IT Services',
    description: 'Proactive, full-service IT management so your team stays productive and your systems stay secure.',
    icon: <FaCogs className="text-3xl text-purple-500" />,
    bg: 'bg-purple-50',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Migration',
    description: 'Seamlessly transition your business to the cloud with minimal disruption and optimal performance.',
    icon: <FaCloud className="text-3xl text-indigo-500" />,
    bg: 'bg-indigo-50',
  },
];

const whyUs = [
  {
    icon: <FaHandshake className="w-6 h-6 text-blue-600" />,
    bg: 'bg-blue-50',
    title: 'Proven Local Partner',
    desc: 'Serving Brevard County businesses since 2009 — we understand the Space Coast market.',
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-green-600" />,
    bg: 'bg-green-50',
    title: 'Predictable Monthly Costs',
    desc: 'Flat-rate managed plans replace surprise IT bills with budgetable, consistent pricing.',
  },
  {
    icon: <FaBolt className="w-6 h-6 text-yellow-600" />,
    bg: 'bg-yellow-50',
    title: 'Proactive, Not Reactive',
    desc: 'We monitor and maintain your systems before problems cause downtime.',
  },
  {
    icon: <FaLock className="w-6 h-6 text-red-600" />,
    bg: 'bg-red-50',
    title: 'Security-First Approach',
    desc: 'Every engagement includes security best practices — not just as an add-on.',
  },
];

const managedContractPlans = [
  {
    id: 'business-core',
    name: 'Business Core',
    price: '$125',
    billing: 'per user / month',
    term: '10-user minimum · annual term',
    sla: 'Business-hours support SLA',
    summary: 'Best for stable teams that need proactive IT management and predictable support.',
    highlight: false,
    features: [
      'Help desk support during business hours',
      'Device monitoring, patching & maintenance',
      'Backup health checks & recovery guidance',
      'Microsoft 365 and basic user admin support',
      'Remote support and vendor coordination',
    ],
  },
  {
    id: 'business-secure',
    name: 'Business Secure',
    price: '$165',
    billing: 'per user / month',
    term: '10-user minimum · annual term',
    sla: 'Priority queue during business hours',
    summary: 'Adds stronger security controls for teams with higher risk or compliance pressure.',
    highlight: true,
    features: [
      'Everything in Business Core',
      'Endpoint protection & threat monitoring',
      'Email security hardening & anti-phishing',
      'Security awareness training for staff',
      'Quarterly security review with action plan',
    ],
  },
  {
    id: 'business-complete',
    name: 'Business Complete',
    price: '$215',
    billing: 'per user / month',
    term: '10-user minimum · annual term',
    sla: 'Priority response + scheduled onsite time',
    summary: 'For growing teams that want strategy, priority handling, and regular onsite support.',
    highlight: false,
    features: [
      'Everything in Business Secure',
      'Scheduled onsite support blocks',
      'Vendor & ISP escalation management',
      'Quarterly vCIO roadmap & budgeting review',
      'Priority triage for critical business systems',
    ],
  },
];

const contractTerms = [
  'One-time onboarding is quoted separately based on users, devices, and environment complexity.',
  'Hardware, software licenses, major project work, and compliance audits are outside monthly scope.',
  'After-hours support is available as an add-on or billed at premium emergency rates.',
  'Annual prepay discount available for qualified contracts.',
];

function BusinessServices() {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const canonicalUrl = 'https://bestcomputertec.com/business-services';

  const handleServiceClick = (serviceId) => {
    navigate(`/business-solutions/${serviceId}`);
  };

  const handleManagedPlanQuote = (plan) => {
    const prefillMessage = [
      'Managed IT Contract Inquiry',
      `Plan: ${plan.name} (${plan.price} ${plan.billing})`,
      '',
      'Company Information',
      '- Company name:',
      '- Contact person:',
      '- Contact email:',
      '- Contact phone:',
      '- Industry:',
      '- Number of users:',
      '- Number of devices (PC/Mac/Server):',
      '- Office locations:',
      '',
      'Current IT Setup',
      '- Microsoft 365 or Google Workspace:',
      '- Backup solution:',
      '- Security tools:',
      '- Current IT provider (if any):',
      '',
      'Project priorities',
      '- Top issues to solve:',
      '- Business-critical systems:',
      '- Target start date:',
      '- Preferred contact method (phone/email):',
      '- Best time for a discovery call:',
    ].join('\n');

    navigate('/contact', {
      state: {
        prefill: {
          source: 'business-contract',
          message: prefillMessage,
          planName: plan.name,
          pricingBaseline: `${plan.price} ${plan.billing}`,
          recommendedService: 'Managed IT Services',
          recommendedRoute: '/business-services',
        },
      },
    });
  };

  return (
    <div>
      <Helmet>
        <title>Business IT Services Palm Bay & Melbourne, FL | Best Computer Tech</title>
        <meta name="description" content="Comprehensive IT services for businesses in Palm Bay and Melbourne FL, including managed IT, cybersecurity, data recovery, cloud solutions, and IT consultancy." />
        <meta name="keywords" content="IT consultancy, cybersecurity, data recovery, website development, cloud migration, managed IT services, business continuity, technical support" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business IT Services | Best Computer Tech" />
        <meta property="og:description" content="Explore business IT support services including cybersecurity, cloud solutions, managed IT, and data recovery." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={businessImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business IT Services | Best Computer Tech" />
        <meta name="twitter:description" content="Business-focused IT services in Palm Bay and Melbourne, Florida." />
        <meta name="twitter:image" content={businessImage} />
        <link rel="preload" as="image" href={businessImage} />
      </Helmet>

      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center text-white bg-center bg-cover"
        style={{ backgroundImage: `url(${businessImage})`, minHeight: '500px' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-3">
            Palm Bay &amp; Melbourne, FL
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Business IT Services &amp; Managed Support
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Predictable, proactive IT for Brevard County businesses — from cybersecurity to cloud migration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:3219535199"
              className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
            >
              <FaPhoneAlt /> Call (321) 953-5199
            </a>
            <Link
              to="/book-service"
              className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-white bg-white/10 border border-white/40 rounded-full hover:bg-white/20 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">What We Do</p>
            <h2 className="text-3xl font-bold text-gray-800">Business IT Solutions</h2>
            <p className="text-gray-500 mt-2">Click any service to learn more.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div
                  className="flex flex-col h-full p-6 bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                  onClick={() => handleServiceClick(service.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleServiceClick(service.id)}
                >
                  <div className={`w-14 h-14 flex items-center justify-center rounded-full ${service.bg} mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 flex-1 mb-4">{service.description}</p>
                  <span className="text-sm font-semibold text-blue-600">Learn More →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Why Us</p>
            <h2 className="text-3xl font-bold text-gray-800">Why Businesses Choose Best Computer Tech</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
            {/* YouTube Video */}
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
              {!videoLoaded ? (
                <div
                  className="relative cursor-pointer group"
                  onClick={() => setVideoLoaded(true)}
                >
                  <img
                    src="https://img.youtube.com/vi/8GOvDyPOW7c/maxresdefault.jpg"
                    alt="Best Computer Tech business IT support video"
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
                    title="Best Computer Tech Business IT Support"
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

      {/* ── Managed IT Contract Plans ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Managed IT</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Yearly Managed IT Contracts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent annual contract options for Palm Bay and Melbourne businesses that want predictable IT support, stronger security, and fewer disruptions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
            {managedContractPlans.map((plan) => (
              <article
                key={plan.id}
                className={`relative flex flex-col bg-white rounded-2xl shadow-md overflow-hidden border transition-shadow hover:shadow-xl ${
                  plan.highlight
                    ? 'border-blue-500 ring-2 ring-blue-500'
                    : 'border-gray-200'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl flex items-center gap-1">
                    <FaStar className="w-3 h-3" /> Most Selected
                  </div>
                )}

                {/* Header */}
                <div className={`px-6 pt-8 pb-6 text-center ${plan.highlight ? 'bg-blue-600 text-white' : 'bg-gray-50'}`}>
                  <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                    {plan.summary}
                  </p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    <span className={`text-sm mb-2 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
                      /{plan.billing.replace('per ', '')}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
                    {plan.term}
                  </p>
                </div>

                {/* Features */}
                <div className="px-6 py-6 flex-1">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">{plan.sla}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                        <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-6 pb-8">
                  <button
                    onClick={() => handleManagedPlanQuote(plan)}
                    className={`w-full py-3 font-bold rounded-lg transition-colors ${
                      plan.highlight
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-800 text-white hover:bg-gray-900'
                    }`}
                  >
                    Request {plan.name} Quote
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Contract Terms */}
          <div className="max-w-4xl mx-auto mt-8 p-5 border border-blue-100 rounded-xl bg-blue-50">
            <h3 className="mb-3 text-lg font-bold text-blue-900">Contract Terms at a Glance</h3>
            <ul className="space-y-2">
              {contractTerms.map((term) => (
                <li key={term} className="flex items-start gap-2 text-sm text-blue-900">
                  <FaCheckCircle className="w-4 h-4 mt-0.5 text-blue-600 shrink-0" />
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-3">Ready to Strengthen Your Business IT?</h2>
          <p className="text-blue-200 mb-8">
            Talk to us about a managed plan, a one-time project, or a free discovery call — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:3219535199"
              className="flex items-center gap-2 px-7 py-3 font-bold text-blue-900 bg-white rounded-full hover:bg-blue-50 transition-colors shadow"
            >
              <FaPhoneAlt className="w-4 h-4" /> (321) 953-5199
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-7 py-3 font-semibold text-white bg-white/10 border border-white/40 rounded-full hover:bg-white/20 transition-colors"
            >
              <FaEnvelope className="w-4 h-4" /> Send a Message
            </Link>
            <Link
              to="/book-service"
              className="px-7 py-3 font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BusinessServices;
