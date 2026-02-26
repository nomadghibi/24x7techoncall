import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCheckCircle, FaUsers, FaShieldAlt, FaPlay,
  FaPhoneAlt, FaDatabase, FaCloud, FaCode,
  FaCogs, FaSearch, FaBolt, FaStar, FaHandshake,
  FaLock, FaChartLine, FaEnvelope, FaArrowRight,
} from 'react-icons/fa';
import businessImage from '../assets/optimized-hero/businessservices-1152.jpg';

const services = [
  {
    id: 'it-consulting',
    title: 'IT Consultancy',
    description: 'Expert advice on IT infrastructure, software solutions, and technology strategy tailored to your business goals.',
    icon: FaSearch,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protecting your business from cyber threats with robust security solutions, monitoring, and staff training.',
    icon: FaShieldAlt,
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    id: 'data-recovery',
    title: 'Data Backup & Recovery',
    description: 'Ensuring your critical data is safely backed up and can be quickly restored when disaster strikes.',
    icon: FaDatabase,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Custom, responsive websites built to represent your brand — from design and development to deployment.',
    icon: FaCode,
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    id: 'managed-it-services',
    title: 'Managed IT Services',
    description: 'Proactive, full-service IT management so your team stays productive and your systems stay secure.',
    icon: FaCogs,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Migration',
    description: 'Seamlessly transition your business to the cloud with minimal disruption and optimal performance.',
    icon: FaCloud,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
];

const whyUs = [
  {
    icon: <FaHandshake className="w-6 h-6 text-cyan-500" />,
    bg: 'bg-cyan-50',
    title: 'Proven Local Partner',
    desc: 'Serving Brevard County businesses since 2009 — we understand the Space Coast market.',
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-green-500" />,
    bg: 'bg-green-50',
    title: 'Predictable Monthly Costs',
    desc: 'Flat-rate managed plans replace surprise IT bills with budgetable, consistent pricing.',
  },
  {
    icon: <FaBolt className="w-6 h-6 text-yellow-500" />,
    bg: 'bg-yellow-50',
    title: 'Proactive, Not Reactive',
    desc: 'We monitor and maintain your systems before problems cause downtime.',
  },
  {
    icon: <FaLock className="w-6 h-6 text-red-500" />,
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
        className="relative min-h-[460px] flex items-end text-white"
        style={{ backgroundImage: `url(${businessImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/55 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-cyan-300 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Business Services</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Palm Bay &amp; Melbourne, FL
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Business IT Services &amp; Managed Support
          </h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">
            Predictable, proactive IT for Brevard County businesses — from cybersecurity to cloud migration.
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
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500 mb-2">What We Do</p>
            <h2 className="text-3xl font-bold text-gray-900">Business IT Solutions</h2>
            <p className="text-gray-500 mt-2 text-sm">Click any service to learn more.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div
                    className="flex flex-col h-full bg-white rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-cyan-200 transition-all duration-200 overflow-hidden"
                    onClick={() => handleServiceClick(service.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleServiceClick(service.id)}
                  >
                    <div className={`p-6 flex items-center justify-center ${service.bg}`}>
                      <Icon className={`text-4xl ${service.color}`} />
                    </div>
                    <div className="flex flex-col flex-grow p-5">
                      <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{service.title}</h3>
                      <p className="text-sm text-gray-500 flex-1 mb-4 leading-relaxed">{service.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-500">
                        Learn More <FaArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500 mb-2">Why Us</p>
            <h2 className="text-3xl font-bold text-gray-900">Why Businesses Choose Best Computer Tech</h2>
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
                    title="Best Computer Tech Business IT Support"
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

      {/* ── Managed IT Contract Plans ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500 mb-2">Managed IT</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Yearly Managed IT Contracts</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Transparent annual contract options for Palm Bay and Melbourne businesses that want predictable IT support, stronger security, and fewer disruptions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
            {managedContractPlans.map((plan) => (
              <article
                key={plan.id}
                className={`relative flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-shadow hover:shadow-xl ${
                  plan.highlight
                    ? 'ring-2 ring-cyan-500'
                    : 'border border-gray-200'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-cyan-500 text-gray-900 text-xs font-bold px-4 py-1 rounded-bl-xl flex items-center gap-1">
                    <FaStar className="w-3 h-3" /> Most Selected
                  </div>
                )}

                {/* Header */}
                <div className={`px-6 pt-8 pb-6 text-center ${plan.highlight ? 'bg-gray-900 text-white' : 'bg-white'}`}>
                  <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.summary}
                  </p>
                  <div className="flex items-end justify-center gap-1">
                    <span className={`text-5xl font-extrabold ${plan.highlight ? 'text-cyan-400' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm mb-2 ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>
                      /{plan.billing.replace('per ', '')}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>
                    {plan.term}
                  </p>
                </div>

                {/* Features */}
                <div className="px-6 py-6 flex-1 bg-white">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">{plan.sla}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                        <FaCheckCircle className="text-cyan-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-6 pb-8 bg-white">
                  <button
                    onClick={() => handleManagedPlanQuote(plan)}
                    className={`w-full py-3 font-bold rounded-lg transition-colors ${
                      plan.highlight
                        ? 'bg-cyan-500 text-gray-900 hover:bg-cyan-400'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Request {plan.name} Quote
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Contract Terms */}
          <div className="max-w-4xl mx-auto mt-8 p-5 border border-gray-200 rounded-xl bg-white">
            <h3 className="mb-3 text-lg font-bold text-gray-900 border-l-4 border-cyan-500 pl-3">Contract Terms at a Glance</h3>
            <ul className="space-y-2">
              {contractTerms.map((term) => (
                <li key={term} className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="w-4 h-4 mt-0.5 text-cyan-500 shrink-0" />
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gray-900 border-t-4 border-cyan-500 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-3">Let's Talk</p>
          <h2 className="text-3xl font-bold mb-3">Ready to Strengthen Your Business IT?</h2>
          <p className="text-gray-400 mb-8">
            Talk to us about a managed plan, a one-time project, or a free discovery call — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:3219535199"
              className="flex items-center gap-2 px-7 py-3 font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 rounded-full transition-colors shadow"
            >
              <FaPhoneAlt className="w-4 h-4" /> (321) 953-5199
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-7 py-3 font-semibold text-white bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-colors"
            >
              <FaEnvelope className="w-4 h-4" /> Send a Message
            </Link>
            <Link
              to="/book-service"
              className="px-7 py-3 font-semibold text-white bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-colors"
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
