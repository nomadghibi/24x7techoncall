import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import heroImage from '../../assets/optimized-hero/computers-optimized-1152.jpg';

const BackupRecoverySupport = () => {
  const canonicalUrl = 'https://24x7techoncall.com/business-solutions/backup-recovery-support';
  const pageImage = heroImage?.startsWith('http') ? heroImage : `https://24x7techoncall.com${heroImage || ''}`;

  const whatWeHelp = [
    'Cloud backup setup (OneDrive, Google Drive, Backblaze)',
    'Automated backup scheduling and monitoring',
    'Data recovery from failed drives or ransomware',
    'Disaster recovery planning and documentation',
    'Backup testing and integrity verification',
    'File version history and rollback setup',
    'Email and calendar backup configuration',
    'HIPAA/compliance-aware backup guidance',
  ];

  return (
    <div>
      <Helmet>
        <title>Business Backup & Disaster Recovery Support | 24/7 Tech On Call</title>
        <meta name="description" content="We remotely set up and manage backup systems for your business data — so you're protected against ransomware, hardware failure, and accidental deletion." />
        <meta name="keywords" content="business backup support, disaster recovery, cloud backup setup, ransomware recovery, data protection small business" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Business Backup & Disaster Recovery Support | 24/7 Tech On Call" />
        <meta property="og:description" content="We remotely set up and manage backup systems for your business data — so you're protected against ransomware, hardware failure, and accidental deletion." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Backup & Disaster Recovery Support | 24/7 Tech On Call" />
        <meta name="twitter:description" content="We remotely set up and manage backup systems for your business data — so you're protected against ransomware, hardware failure, and accidental deletion." />
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
            <span className="text-white">Backup & Recovery Support</span>
          </nav>

          {/* Badge */}
          <span className="inline-block bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            100% Remote · Data Protection
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">Business Backup & Disaster Recovery Support</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            We remotely set up and manage backup systems for your business data — so you're protected against ransomware, hardware failure, and accidental deletion.
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
          <p className="text-slate-500 text-center mb-10">Backup and recovery services we provide remotely for your business:</p>
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
          <p className="text-slate-500 text-center mb-10">Get your business data protected in 3 simple steps:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Contact Us', desc: 'Call, email, or book online. Tell us about your current backup situation or the data loss issue you are facing.' },
              { step: '2', title: 'We Connect Remotely', desc: 'We securely access your systems to assess your data, configure backup solutions, or begin the recovery process.' },
              { step: '3', title: 'Your Data Is Protected', desc: 'We verify your backups are running correctly and your business data is safe — with documentation so you always know your data is covered.' },
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to protect your business data?</h2>
          <p className="text-slate-300 mb-8">Don't wait for a data loss event. We'll set up reliable backups for your business — remotely and quickly.</p>
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

export default BackupRecoverySupport;
