import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/computers-optimized-1152.jpg';

const ComputerRepair = () => {
  const canonicalUrl = 'https://24x7techoncall.com/residential-support/computer-repair';
  const pageImage = heroImage?.startsWith('http') ? heroImage : `https://24x7techoncall.com${heroImage || ''}`;

  const whatWeHelp = [
    'Computer won\'t start or keeps crashing',
    'Windows errors, blue screen (BSOD), and freezes',
    'Slow computer diagnosis and repair',
    'Windows Update failures and stuck updates',
    'Software installation and configuration issues',
    'Driver problems and device not recognized',
    'System restore and recovery assistance',
    'Startup issues and boot loop repair',
    'Application crashes and error messages',
    'Remote access setup and configuration',
  ];

  return (
    <div>
      <Helmet>
        <title>Remote Computer Repair & Troubleshooting | 24/7 Tech On Call</title>
        <meta name="description" content="Expert remote computer repair and troubleshooting nationwide. We fix crashes, errors, slow performance, and Windows issues — no visit required." />
        <meta name="keywords" content="remote computer repair, online computer troubleshooting, remote PC repair, fix slow computer online, Windows error repair, remote tech support" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Remote Computer Repair & Troubleshooting | 24/7 Tech On Call" />
        <meta property="og:description" content="Expert remote computer repair and troubleshooting nationwide. We fix crashes, errors, slow performance, and Windows issues — no visit required." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Remote Computer Repair & Troubleshooting | 24/7 Tech On Call" />
        <meta name="twitter:description" content="Expert remote computer repair and troubleshooting nationwide. We fix crashes, errors, slow performance, and Windows issues — no visit required." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* Hero */}
      <section
        className="relative min-h-[380px] flex items-end text-white"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-cyan-300 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <Link to="/residential-services" className="hover:text-white transition-colors">Residential Services</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Computer Repair</span>
          </nav>
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/30 rounded-full bg-cyan-400/10">
            100% Remote · Nationwide
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Remote Computer Repair & Troubleshooting</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">We diagnose and fix your computer problems remotely — no home visit, no waiting. Fast, secure, and guaranteed nationwide.</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href="tel:3219535199"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 rounded-full transition-colors shadow-lg"
            >
              <FaPhoneAlt className="w-4 h-4" /> Call: (321) 953-5199
            </a>
            <Link
              to="/book-service"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 font-semibold text-white bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">What We Cover</p>
            <h2 className="text-3xl font-bold text-gray-900">What We Help With</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">From a frozen screen to a Windows error, we resolve it remotely while you watch.</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whatWeHelp.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <FaCheckCircle className="text-cyan-500 mt-0.5 shrink-0 w-4 h-4" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">Simple Process</p>
            <h2 className="text-3xl font-bold text-gray-900">How Remote Support Works</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { step: '1', title: 'Call or Book Online', desc: "Contact us by phone or book a session online. Tell us what's going on — no tech jargon needed." },
              { step: '2', title: 'We Connect Securely', desc: 'We use a secure remote connection tool to access your screen. You stay in control the whole time.' },
              { step: '3', title: 'Problem Solved', desc: 'We fix the issue while you watch. No home visit needed. Clear communication and dependable support.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-cyan-500 text-gray-900 font-extrabold text-lg flex items-center justify-center mb-4">{step}</div>
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 border-t-4 border-cyan-500 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">Get Help Now</p>
          <h2 className="text-3xl font-bold mb-4">Got a Computer Problem? We Can Fix It Now.</h2>
          <p className="text-gray-400 mb-8">Call us or book a remote session. Most issues resolved in under an hour.</p>
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
              Book a Session
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
};

export default ComputerRepair;
