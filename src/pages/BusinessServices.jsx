import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCheckCircle, FaUsers, FaShieldAlt, FaPlay,
  FaPhoneAlt, FaDatabase, FaCloud,
  FaCogs, FaBolt, FaStar, FaHandshake,
  FaLock, FaChartLine, FaEnvelope, FaArrowRight,
  FaHeadphones, FaNetworkWired, FaUserCog,
} from 'react-icons/fa';
import businessImage from '../assets/optimized-hero/businessservices-1152.jpg';

const services = [
  {
    id: 'managed-it-services',
    title: 'Managed IT Support',
    description: 'Proactive remote monitoring, patching, and maintenance to keep your team productive and systems secure.',
    route: '/business-solutions/managed-it-services',
    icon: FaCogs,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    id: 'it-support',
    title: 'Remote Help Desk',
    description: 'Fast, responsive help desk support for employee workstation issues, errors, and everyday IT requests.',
    route: '/business-solutions/remote-help-desk',
    icon: FaHeadphones,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    id: 'cloud-solutions',
    title: 'Microsoft 365 Support',
    description: 'Setup, admin, and troubleshooting for Microsoft 365, Outlook, Teams, OneDrive, and SharePoint.',
    route: '/business-solutions/microsoft-365-support',
    icon: FaCloud,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    id: 'it-consulting',
    title: 'User & Device Management',
    description: 'Remote onboarding, offboarding, user accounts, password resets, permissions, and access control.',
    route: '/business-solutions/user-device-management',
    icon: FaUserCog,
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Support',
    description: 'Endpoint protection, security hardening, phishing response, and staff security awareness training.',
    route: '/business-solutions/cybersecurity',
    icon: FaShieldAlt,
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    id: 'data-recovery',
    title: 'Backup & Recovery Support',
    description: 'Backup monitoring, restore testing, disaster recovery planning, and cloud backup configuration.',
    route: '/business-solutions/backup-recovery-support',
    icon: FaDatabase,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  {
    id: 'network-setup',
    title: 'Network & Remote Access Support',
    description: 'Remote troubleshooting for routers, switches, VPN, connectivity, and secure remote access setup.',
    route: '/business-solutions/network-remote-access',
    icon: FaNetworkWired,
    color: 'text-teal-500',
    bg: 'bg-teal-50',
  },
  {
    id: 'monthly-plans',
    title: 'Monthly IT Support Plans',
    description: 'Flexible monthly managed IT plans with predictable pricing and no long-term commitment required.',
    route: '/business-services#managed-plans',
    icon: FaUsers,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
];

const whyUs = [
  {
    icon: <FaHandshake className="w-6 h-6 text-cyan-500" />,
    bg: 'bg-cyan-50',
    title: 'Proven Nationwide Partner',
    desc: 'Serving US businesses remotely since 2009 — fast response, real expertise, no fluff.',
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

// Annual prices per user/month; monthly = annual × 1.16 (rounded)
const managedContractPlans = [
  {
    id: 'business-starter',
    name: 'Business Starter',
    annualPrice: 85,
    monthlyPrice: 99,
    billing: 'per user / month',
    annualTerm: '5-user minimum · annual term',
    monthlyTerm: '5-user minimum · month-to-month',
    sla: 'Business-hours support SLA',
    summary: 'Perfect for small teams (1–9 users) that need reliable remote IT support without a large commitment.',
    highlight: false,
    features: [
      'Help desk support during business hours',
      'Remote troubleshooting & software support',
      'Microsoft 365 basic user support',
      'Email & printer setup and troubleshooting',
      'Security basics & software updates',
    ],
  },
  {
    id: 'business-core',
    name: 'Business Core',
    annualPrice: 125,
    monthlyPrice: 145,
    billing: 'per user / month',
    annualTerm: '5-user minimum · annual term',
    monthlyTerm: '5-user minimum · month-to-month',
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
    annualPrice: 165,
    monthlyPrice: 192,
    billing: 'per user / month',
    annualTerm: '10-user minimum · annual term',
    monthlyTerm: '10-user minimum · month-to-month',
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
    annualPrice: 215,
    monthlyPrice: 249,
    billing: 'per user / month',
    annualTerm: '10-user minimum · annual term',
    monthlyTerm: '10-user minimum · month-to-month',
    sla: 'Priority response + dedicated account manager',
    summary: 'For growing teams that want strategy, priority handling, and a dedicated IT partner.',
    highlight: false,
    features: [
      'Everything in Business Secure',
      'Dedicated account manager',
      'Vendor & ISP escalation management',
      'Quarterly vCIO roadmap & budgeting review',
      'Priority triage for critical business systems',
    ],
  },
];

const contractTerms = [
  'Annual plans save ~14% vs month-to-month and include priority onboarding.',
  'One-time onboarding is quoted separately based on users, devices, and environment complexity.',
  'Hardware, software licenses, major project work, and compliance audits are outside monthly scope.',
  'After-hours support is available as an add-on or billed at premium emergency rates.',
];

function BusinessServices() {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [billingAnnual, setBillingAnnual] = useState(true);
  const canonicalUrl = 'https://24x7techoncall.com/business-services';

  const handleServiceClick = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    const route = service?.route || '/business-services';
    if (route.includes('#')) {
      const [path, hash] = route.split('#');
      navigate(path);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(route);
    }
  };

  const handleManagedPlanQuote = (plan) => {
    const price = billingAnnual ? `$${plan.annualPrice}` : `$${plan.monthlyPrice}`;
    const term  = billingAnnual ? 'annual' : 'month-to-month';
    const prefillMessage = [
      'Managed IT Contract Inquiry',
      `Plan: ${plan.name} (${price} ${plan.billing} · ${term})`,
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
          pricingBaseline: `${billingAnnual ? `$${plan.annualPrice}` : `$${plan.monthlyPrice}`} ${plan.billing} (${billingAnnual ? 'annual' : 'month-to-month'})`,
          recommendedService: 'Managed IT Services',
          recommendedRoute: '/business-services',
        },
      },
    });
  };

  return (
    <div>
      <Helmet>
        <title>Remote Business IT Support | Managed IT, Help Desk & Microsoft 365 | 24/7 Tech On Call</title>
        <meta name="description" content="Remote business IT support nationwide — managed IT, remote help desk, Microsoft 365 administration, cybersecurity, backup, and monthly IT support plans." />
        <meta name="keywords" content="remote business IT support, managed IT services, remote help desk, Microsoft 365 support, cybersecurity support, backup recovery, monthly IT plans, nationwide IT support" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business IT Services | 24/7 Tech On Call" />
        <meta property="og:description" content="Explore business IT support services including cybersecurity, cloud solutions, managed IT, and data recovery." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={businessImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business IT Services | 24/7 Tech On Call" />
        <meta name="twitter:description" content="Business-focused IT services in Nationwide, Florida." />
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
            Nationwide
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Remote Business IT Support &amp; Managed Services
          </h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">
            Help desk, Microsoft 365, cybersecurity, backup, and monthly managed IT plans — all delivered remotely nationwide.
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
            <h2 className="text-3xl font-bold text-gray-900">Why Businesses Choose 24/7 Tech On Call</h2>
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
                    alt="24/7 Tech On Call business IT support video"
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
                    title="24/7 Tech On Call Business IT Support"
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
      <section id="managed-plans" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500 mb-2">Managed IT</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Managed IT Support Plans</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8">
              Flexible plans for businesses of all sizes — from small teams to growing companies. Choose annual for the best rate or month-to-month for flexibility.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-2 py-1.5 shadow-sm">
              <button
                onClick={() => setBillingAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${billingAnnual ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Annual
              </button>
              <button
                onClick={() => setBillingAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${!billingAnnual ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Monthly
              </button>
              {billingAnnual && (
                <span className="text-xs font-bold text-cyan-600 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-full mr-1">
                  Save ~14%
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 items-start">
            {managedContractPlans.map((plan) => {
              const price = billingAnnual ? plan.annualPrice : plan.monthlyPrice;
              const term  = billingAnnual ? plan.annualTerm : plan.monthlyTerm;
              return (
                <article
                  key={plan.id}
                  className={`relative flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-shadow hover:shadow-xl ${
                    plan.highlight ? 'ring-2 ring-cyan-500' : 'border border-gray-200'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 right-0 bg-cyan-500 text-gray-900 text-xs font-bold px-4 py-1 rounded-bl-xl flex items-center gap-1">
                      <FaStar className="w-3 h-3" /> Most Selected
                    </div>
                  )}

                  {/* Header */}
                  <div className={`px-5 pt-7 pb-5 text-center ${plan.highlight ? 'bg-gray-900 text-white' : 'bg-white'}`}>
                    <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                    <p className={`text-xs mb-4 leading-relaxed ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.summary}</p>
                    <div className="flex items-end justify-center gap-1">
                      <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-cyan-400' : 'text-gray-900'}`}>${price}</span>
                      <span className="text-xs mb-2 text-gray-400">/user/mo</span>
                    </div>
                    <p className={`text-xs mt-1.5 ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>{term}</p>
                  </div>

                  {/* Features */}
                  <div className="px-5 py-5 flex-1 bg-white">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">{plan.sla}</p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <FaCheckCircle className="text-cyan-500 mt-0.5 shrink-0 w-3.5 h-3.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="px-5 pb-6 bg-white">
                    <button
                      onClick={() => handleManagedPlanQuote(plan)}
                      className={`w-full py-2.5 font-bold rounded-lg transition-colors text-sm ${
                        plan.highlight ? 'bg-cyan-500 text-gray-900 hover:bg-cyan-400' : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      Request {plan.name} Quote
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Contract Terms */}
          <div className="max-w-4xl mx-auto mt-8 p-5 border border-gray-200 rounded-xl bg-white">
            <h3 className="mb-3 text-lg font-bold text-gray-900 border-l-4 border-cyan-500 pl-3">Good to Know</h3>
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
