import React from 'react';
import { FaCheck, FaPhoneAlt, FaStar, FaWifi, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import heroImage from '../assets/optimized-hero/priceimage-1152.jpg';

const remotePlans = [
  {
    id: 'remote',
    title: 'On-Demand Remote',
    tagline: 'Best for one-time fixes and quick tech issues — anywhere in the USA.',
    price: '$99',
    period: 'one-time session',
    badge: null,
    highlight: false,
    features: [
      '1 PC — unlimited fixes during session',
      'Windows or Mac support',
      'Slow startup & shutdown fixes',
      'Virus & spyware removal',
      'System tune-up & optimization',
      'Web browser issues & redirects',
      'OS updates & driver fixes',
      'Software installation & removal',
      'Internet & email connection issues',
      'Windows crash & error resolution',
      'Printer & peripheral setup',
      '30-day warranty on all work',
    ],
    cta: 'Get Started',
    note: null,
  },
  {
    id: 'annual',
    title: 'Annual Remote Care',
    tagline: 'Best for households that want year-round support for 2 computers and 1 printer.',
    price: '$299.90',
    period: 'per year',
    badge: 'Best Value',
    highlight: true,
    features: [
      'Windows & Mac support',
      'Coverage: 2 computers + 1 printer',
      'Unlimited remote sessions',
      'Virus removal as needed',
      'Speed-up & faster startup',
      'Computer tune-up as needed',
      'Anti-virus installation & maintenance',
      'Routine remote check-ups',
      'Data back-up assistance',
      'Support hours: Monday-Friday, 10:00 AM-5:00 PM',
      'Email support during service hours',
      'Priority scheduling',
    ],
    cta: 'Subscribe Now',
    note: '$50 one-time setup fee on first enrollment.',
  },
];

const faqs = [
  {
    q: 'How does remote support work?',
    a: 'You call or book online, and we send you a secure link. Once you connect, our technician can see your screen and fix the issue in real time — you watch everything. The session ends the moment you disconnect. No software is left running afterward.',
  },
  {
    q: 'Is remote support available across the entire USA?',
    a: 'Yes. Remote support is available to any customer in all 50 states. We connect over a secure encrypted session — your location does not matter.',
  },
  {
    q: 'Is there a contract for the Annual Remote Care plan?',
    a: 'No long-term contract. The Annual plan is billed once per year and renews automatically. You can cancel before the renewal date with no penalty.',
  },
  {
    q: "What if my issue isn't fixed?",
    a: "We stand behind our work. On-Demand sessions include a 30-day warranty — if the same issue returns, we fix it at no extra charge.",
  },
  {
    q: 'What problems cannot be fixed remotely?',
    a: 'Physical hardware failures — broken screens, dead hard drives, failed power supplies — require hands-on repair and are not covered remotely. If your computer will not power on at all, remote support will not help. For everything else, remote is almost always the faster and cheaper option.',
  },
  {
    q: 'Do you offer on-site visits?',
    a: 'Yes, but on-site service is limited to our local service area in Brevard County, FL (Palm Bay, Melbourne, and surrounding areas). Nationwide customers are served remotely.',
  },
];

function Pricing() {
  const navigate = useNavigate();
  const canonicalUrl = 'https://24x7techoncall.com/pricing';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://24x7techoncall.com${heroImage || ''}`;

  const handleOrderClick = (plan) => {
    const priceMap = { remote: 99, annual: 299.9 };
    navigate('/checkout', {
      state: { service: { title: plan.title, price: priceMap[plan.id] ?? 99 } },
    });
  };

  return (
    <div>
      <Helmet>
        <title>Residential Tech Support Pricing | 24x7 Tech On Call</title>
        <meta
          name="description"
          content="Simple residential tech support pricing for home users. On-demand and annual remote support plans, plus local on-site service in Brevard County, FL."
        />
        <meta
          name="keywords"
          content="residential tech support pricing, home computer support cost, remote computer repair pricing, annual home tech support plan"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Residential Tech Support Pricing | 24x7 Tech On Call" />
        <meta property="og:description" content="Transparent residential pricing for remote home tech support. No hidden fees." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Residential Tech Support Pricing | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Affordable remote and local residential tech support pricing." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* ── Hero ── */}
      <section
        className="relative min-h-[420px] flex items-end text-white"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-cyan-300 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Pricing</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Residential Pricing
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Simple Home Tech Support Pricing</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">
            Pricing made for home users. Clear rates, no surprise fees, and fast support.
          </p>
          <a
            href="tel:3219535199"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold rounded-full transition-colors shadow-lg"
          >
            <FaPhoneAlt className="w-4 h-4" /> Questions? Call (321) 953-5199
          </a>
        </div>
      </section>

      {/* ── Remote Plans ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
              <FaWifi className="w-3 h-3" /> 100% Remote · Available in All 50 States
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Residential Remote Plans</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Designed for home customers. We connect securely and fix issues while you watch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start max-w-5xl mx-auto">
            {remotePlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl overflow-hidden shadow-md transition-shadow hover:shadow-xl ${
                  plan.highlight
                    ? 'ring-2 ring-cyan-500'
                    : 'border border-gray-200'
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-cyan-500 text-gray-900 text-xs font-bold px-4 py-1 rounded-bl-xl flex items-center gap-1">
                    <FaStar className="w-3 h-3" /> {plan.badge}
                  </div>
                )}

                <div className={`px-6 pt-8 pb-6 text-center ${plan.highlight ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
                  <h2 className="text-xl font-bold mb-1">{plan.title}</h2>
                  <p className={`text-sm mb-5 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.tagline}
                  </p>
                  <div className="flex items-end justify-center gap-1">
                    <span className={`text-5xl font-extrabold ${plan.highlight ? 'text-cyan-400' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className="text-sm mb-2 text-gray-400">/{plan.period}</span>
                  </div>
                </div>

                <div className="px-6 py-6 flex-1 bg-white">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <FaCheck className="text-cyan-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {plan.note && (
                    <p className="mt-5 text-xs text-gray-400 border-t border-gray-100 pt-4">
                      * {plan.note}
                    </p>
                  )}
                </div>

                <div className="px-6 pb-8 bg-white">
                  <button
                    onClick={() => handleOrderClick(plan)}
                    className={`w-full py-3 font-bold rounded-lg transition-colors ${
                      plan.highlight
                        ? 'bg-cyan-500 text-gray-900 hover:bg-cyan-400'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── On-Site Section (Local Only) ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
              <FaMapMarkerAlt className="w-3 h-3" /> On-Site · Local Service Only
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">On-Site Residential Support</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              On-site home visits are available in <strong>Brevard County, FL</strong> (Palm Bay, Melbourne, and nearby areas). Outside this area, use our remote plans.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-8 pt-8 pb-6 bg-white text-center border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Standard On-Site Rate</h3>
              <p className="text-sm text-gray-500 mb-5">Technician comes to your home or business — Brevard County, FL only.</p>
              <div className="flex items-end justify-center gap-1 mb-1">
                <span className="text-5xl font-extrabold text-gray-900">$95</span>
                <span className="text-sm mb-2 text-gray-400">/first hour</span>
              </div>
              <p className="text-xs text-gray-400">+$35 per additional half-hour after the first hour</p>
            </div>

            <div className="px-8 py-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">What's Included</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Technician comes to your location',
                  'Any computer brand or problem',
                  'Windows or Mac support',
                  'Virus & malware removal',
                  'Printer troubleshooting & setup',
                  'Internet & router problems',
                  'Router & network setup',
                  'Hardware installation & upgrades',
                  'Computer training sessions',
                  'Smartphone, tablet & smart home',
                  'Security camera installation',
                  'And much more',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <FaCheck className="text-amber-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-8 pb-8 bg-white">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-5 text-sm text-amber-800">
                <strong>Local service only.</strong> On-site visits are limited to Palm Bay, Melbourne, and nearby areas in Brevard County, FL. Not available for nationwide customers.
              </div>
              <a
                href="tel:3219535199"
                className="w-full flex items-center justify-center gap-2 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors"
              >
                <FaPhoneAlt className="w-4 h-4" /> Call to Schedule On-Site Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500 mb-2">Common Questions</p>
            <h2 className="text-3xl font-bold text-gray-900">Pricing FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 border-l-4 border-l-cyan-500 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Residential CTA ── */}
      <section className="py-16 bg-gray-900 border-t-4 border-cyan-500 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-3">Residential Support</p>
          <h2 className="text-3xl font-bold mb-3">Need Help Choosing the Right Home Plan?</h2>
          <p className="text-gray-400 mb-8">
            Call us and we will recommend the best residential option based on your issue and urgency.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:3219535199"
              className="flex items-center gap-2 px-7 py-3 font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 rounded-full transition-colors shadow"
            >
              <FaPhoneAlt className="w-4 h-4" /> (321) 953-5199
            </a>
            <Link
              to="/diagnose-my-issue"
              className="px-7 py-3 font-semibold text-white bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-colors"
            >
              Diagnose My Issue
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Need business IT pricing? Visit{' '}
            <Link to="/business-services" className="text-cyan-300 hover:text-cyan-200 underline">
              Business Services
            </Link>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
