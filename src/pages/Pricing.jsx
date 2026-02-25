import React from 'react';
import { FaCheck, FaPhoneAlt, FaStar, FaEnvelope } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import heroImage from '../assets/optimized-hero/priceimage-1152.jpg';

const pricingPlans = [
  {
    id: 'remote',
    title: 'On-Demand Remote',
    tagline: 'Best for one-time fixes and quick tech issues.',
    price: '$99',
    period: 'one-time',
    badge: null,
    highlight: false,
    features: [
      '1 PC — full service & support',
      'Unlimited fixes during session',
      'Windows or Mac support',
      'Slow startup & shutdown fixes',
      'Virus & spyware removal',
      'System tune-up & optimization',
      'Windows personalization',
      'Web browser issues',
      'OS updates',
      'Software installation & removal',
      'Internet & email connection issues',
      'Windows crash resolution',
      '30-day warranty',
    ],
    cta: 'Get Started',
    note: null,
  },
  {
    id: 'annual',
    title: 'Annual Subscription',
    tagline: 'Best for regular users who want year-round peace of mind.',
    price: '$199',
    period: 'per year',
    badge: 'Best Value',
    highlight: true,
    features: [
      'Windows & Mac support',
      'Any brand computer',
      '1 PC covered',
      'Virus removal as needed',
      'Speed-up & faster startup',
      'Routine check-ups',
      'Computer tune-up as needed',
      'Anti-virus installation & maintenance',
      'Unlimited phone support',
      'Data back-up assistance',
      '24/7 remote tech support',
      '24/7 email & chat support',
    ],
    cta: 'Subscribe Now',
    note: '$50 one-time setup fee on first enrollment.',
  },
  {
    id: 'onsite',
    title: 'Standard Onsite Rate',
    tagline: 'Best for hardware issues and hands-on support at your location.',
    price: '$95',
    period: 'first hour',
    badge: null,
    highlight: false,
    features: [
      'Technician comes to you',
      'Any computer brand or problem',
      'Windows or Mac support',
      'Virus & malware removal',
      'Smartphone, tablet & smart home',
      'Printer troubleshooting & setup',
      'Internet & router problems',
      'Router & network setup',
      'Server setup',
      'Computer training sessions',
      'Security camera installation',
      'And much more',
    ],
    cta: 'Book Onsite Visit',
    note: '$35 per additional half-hour after the first hour.',
  },
];

const faqs = [
  {
    q: 'What is the difference between remote and onsite support?',
    a: 'Remote support is done securely over the internet — no visit needed. Onsite support means a technician comes to your home or office, ideal for hardware issues or network cabling.',
  },
  {
    q: 'Is there a contract for the Annual Subscription?',
    a: 'No long-term contract. The Annual Subscription is billed once per year and renews automatically. You can cancel before the renewal date.',
  },
  {
    q: 'What if my issue isn\'t fixed?',
    a: 'We stand behind our work. On-Demand Remote sessions include a 30-day warranty. If the same issue returns, we\'ll fix it at no extra charge.',
  },
  {
    q: 'Do you service businesses as well as homes?',
    a: 'Yes. We offer residential and business IT plans. For managed IT contracts covering multiple users and devices, visit our Business Solutions page or contact us for a custom quote.',
  },
];

function Pricing() {
  const navigate = useNavigate();
  const canonicalUrl = 'https://bestcomputertec.com/pricing';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://bestcomputertec.com${heroImage || ''}`;

  const handleOrderClick = (plan) => {
    const priceMap = { remote: 99, annual: 199, onsite: 95 };
    navigate('/checkout', {
      state: { service: { title: plan.title, price: priceMap[plan.id] } },
    });
  };

  return (
    <div>
      <Helmet>
        <title>Pricing Plans | Best Computer Tech | Palm Bay & Melbourne, FL</title>
        <meta
          name="description"
          content="View transparent pricing plans for remote and onsite computer support services from Best Computer Tech in Palm Bay and Melbourne, FL."
        />
        <meta
          name="keywords"
          content="computer service pricing Palm Bay, onsite tech support rates Melbourne FL, remote tech support plans"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Pricing Plans | Best Computer Tech" />
        <meta property="og:description" content="Compare our remote and onsite support plans with clear, affordable pricing." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing Plans | Best Computer Tech" />
        <meta name="twitter:description" content="Explore Best Computer Tech pricing for residential and business support." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center text-white bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImage})`, minHeight: '420px' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-3">
            Transparent &amp; Affordable
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Simple, Honest Pricing
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            No hidden fees. No surprises. Pick the plan that fits your needs.
          </p>
          <a
            href="tel:3219535199"
            className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
          >
            <FaPhoneAlt /> Questions? Call (321) 953-5199
          </a>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Residential Remote &amp; Onsite Computer Services
            </h2>
            <p className="text-gray-500">
              All plans include expert support from certified local technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl shadow-md overflow-hidden border transition-shadow hover:shadow-xl ${
                  plan.highlight
                    ? 'border-blue-500 ring-2 ring-blue-500 bg-white'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl flex items-center gap-1">
                    <FaStar className="w-3 h-3" /> {plan.badge}
                  </div>
                )}

                {/* Header */}
                <div className={`px-6 pt-8 pb-6 text-center ${plan.highlight ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-800'}`}>
                  <h2 className="text-xl font-bold mb-1">{plan.title}</h2>
                  <p className={`text-sm mb-5 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                    {plan.tagline}
                  </p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    <span className={`text-sm mb-2 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="px-6 py-6 flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <FaCheck className="text-green-500 mt-0.5 shrink-0" />
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

                {/* CTA */}
                <div className="px-6 pb-8">
                  <button
                    onClick={() => handleOrderClick(plan)}
                    className={`w-full py-3 font-bold rounded-lg transition-colors ${
                      plan.highlight
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-800 text-white hover:bg-gray-900'
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

      {/* ── FAQ ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Common Questions</p>
            <h2 className="text-3xl font-bold text-gray-800">Pricing FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom Quote CTA ── */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-3">Need a Custom Quote?</h2>
          <p className="text-blue-200 mb-8">
            Running a business or need something not listed above? We build custom IT plans for businesses of all sizes across Brevard County.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
