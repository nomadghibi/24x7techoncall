import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaPhoneAlt, FaArrowRight, FaHeadphones, FaUsers, FaLaptop, FaCloud } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/computers-optimized-1152.jpg';

const RemoteHelpDesk = () => {
  const canonicalUrl = 'https://24x7techoncall.com/business-solutions/remote-help-desk';
  const pageImage = heroImage?.startsWith('http') ? heroImage : `https://24x7techoncall.com${heroImage || ''}`;

  const whatWeHelp = [
    'Employee computer & login issues',
    'Email setup and Outlook troubleshooting',
    'Printer and peripheral support',
    'Software installation and licensing',
    'VPN and remote access issues',
    'Password resets and account recovery',
    'Browser and productivity app support',
    'Video conferencing (Zoom, Teams, Meet) setup',
  ];

  return (
    <div>
      <Helmet>
        <title>Remote Help Desk for Small Businesses | 24x7 Tech On Call</title>
        <meta name="description" content="Fast, reliable remote help desk for small and mid-size businesses. We resolve employee tech issues by phone, chat, or remote access — no on-site visit needed." />
        <meta name="keywords" content="remote help desk, business IT support, small business tech support, employee tech help" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Remote Help Desk for Small Businesses | 24x7 Tech On Call" />
        <meta property="og:description" content="Fast, reliable remote help desk for small and mid-size businesses. We resolve employee tech issues by phone, chat, or remote access — no on-site visit needed." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Remote Help Desk for Small Businesses | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Fast, reliable remote help desk for small and mid-size businesses. We resolve employee tech issues by phone, chat, or remote access — no on-site visit needed." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* Hero */}
      <section
        className="relative min-h-[380px] flex items-center justify-center text-white"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f4c5c 100%)' }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-4 text-sm text-slate-400" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/business-services" className="hover:text-cyan-400 transition-colors">Business Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Remote Help Desk</span>
          </nav>

          {/* Badge */}
          <span className="inline-block bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            100% Remote · For Teams
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">Remote Help Desk Support for Your Team</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Fast, reliable remote help desk for small and mid-size businesses. We resolve employee tech issues by phone, chat, or remote access — no on-site visit needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13219535199"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              <FaPhoneAlt /> Call (321) 953-5199
            </a>
            <Link
              to="/book-service"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Book Remote Session <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2 text-center">What We Help With</h2>
          <p className="text-slate-500 text-center mb-10">Common issues our remote help desk resolves for your team:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatWeHelp.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <FaCheckCircle className="text-cyan-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Remote Support Works */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2 text-center">How Remote Support Works</h2>
          <p className="text-slate-500 text-center mb-10">Get your team back up and running in 3 simple steps:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Contact Us', desc: 'Call, email, or book online. Describe the issue your employee is experiencing.' },
              { step: '2', title: 'We Connect Remotely', desc: 'We use secure remote access tools to connect to the affected device instantly.' },
              { step: '3', title: 'Issue Resolved', desc: 'We diagnose and fix the problem remotely — your employee is back to work fast.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{step}</div>
                <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0f4c5c 100%)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need help desk support for your team?</h2>
          <p className="text-slate-300 mb-8">We're ready to support your employees remotely — right now.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13219535199"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              <FaPhoneAlt /> Call (321) 953-5199
            </a>
            <Link
              to="/book-service"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Book Remote Session <FaArrowRight />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemoteHelpDesk;
