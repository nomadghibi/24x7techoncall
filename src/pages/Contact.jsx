import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import {
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaPhoneAlt,
} from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import socialImage from '../assets/optimized-hero/heroimage100-1152.jpg';

const initialBusinessContractData = {
  companyName: '',
  industry: '',
  userCount: '',
  deviceCount: '',
  officeLocations: '',
  budgetRange: '',
  supportCoverage: '',
  complianceRequirement: '',
  workspace: '',
  backupSolution: '',
  securityTools: '',
  currentProvider: '',
  topIssue: '',
  criticalSystems: '',
  startDate: '',
  contactMethod: '',
  discoveryTime: '',
  goal1: '',
  goal2: '',
  goal3: '',
  requesterRole: '',
  requesterPhone: '',
};

const extractBusinessPlanData = (prefill) => {
  const rawMessage = typeof prefill?.message === 'string' ? prefill.message : '';
  const planLine = rawMessage.match(/^Plan(?: selected)?:\s*(.+)$/m)?.[1]?.trim() || '';
  const explicitPricing = rawMessage.match(/^Pricing baseline:\s*(.+)$/m)?.[1]?.trim() || '';
  const parenthesizedPricing = planLine.match(/\(([^)]+)\)\s*$/)?.[1]?.trim() || '';
  const normalizedPlan = (prefill?.planName || planLine || 'Business Core').replace(/\s*\([^)]*\)\s*$/, '').trim();
  const normalizedPricing =
    prefill?.pricingBaseline ||
    explicitPricing ||
    parenthesizedPricing ||
    '$125 per user / month (10-user minimum, annual term)';

  return {
    planName: normalizedPlan,
    pricingBaseline: normalizedPricing,
  };
};

const buildBusinessContractMessage = (planName, pricingBaseline, businessData, contactName, contactEmail) => [
  'Business Managed IT Contract Inquiry',
  `Plan selected: ${planName}`,
  `Pricing baseline: ${pricingBaseline}`,
  '',
  'Company profile',
  `1) Company name: ${businessData.companyName}`,
  `2) Industry: ${businessData.industry}`,
  `3) Number of users: ${businessData.userCount}`,
  `4) Number of devices (PC/Mac/Server): ${businessData.deviceCount}`,
  `5) Number of office locations: ${businessData.officeLocations}`,
  `6) Estimated IT budget range: ${businessData.budgetRange}`,
  `7) Preferred support coverage: ${businessData.supportCoverage}`,
  `8) Compliance requirements: ${businessData.complianceRequirement}`,
  '',
  'Current IT environment',
  `1) Microsoft 365 or Google Workspace: ${businessData.workspace}`,
  `2) Current backup solution: ${businessData.backupSolution}`,
  `3) Current security tools: ${businessData.securityTools}`,
  `4) Current IT provider (if any): ${businessData.currentProvider}`,
  '',
  'Project priorities',
  `1) Top issues to solve: ${businessData.topIssue}`,
  `2) Business-critical systems: ${businessData.criticalSystems}`,
  `3) Target start date: ${businessData.startDate}`,
  `4) Preferred contact method (phone/email): ${businessData.contactMethod}`,
  `5) Best time for a discovery call: ${businessData.discoveryTime}`,
  '',
  'Primary goals for the next 12 months:',
  `1) ${businessData.goal1}`,
  `2) ${businessData.goal2}`,
  `3) ${businessData.goal3}`,
  '',
  'Requested by',
  `Name: ${contactName}`,
  `Role: ${businessData.requesterRole}`,
  `Phone: ${businessData.requesterPhone}`,
  `Email: ${contactEmail}`,
].join('\n');

const inputClass =
  'w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition bg-white';
const labelClass = 'block mb-1 text-sm font-semibold text-gray-700';

function Contact() {
  const location = useLocation();
  const prefill = location.state?.prefill;
  const prefillMessage = typeof prefill?.message === 'string' ? prefill.message.trim() : '';
  const isBusinessContractPrefill = prefill?.source === 'business-contract';
  const { planName, pricingBaseline } = extractBusinessPlanData(prefill);
  const prefillSourceLabel = prefill?.source === 'diagnose-my-issue'
    ? 'diagnosis wizard'
    : prefill?.source === 'price-estimator'
      ? 'price estimator'
      : prefill?.source === 'business-contract'
        ? 'business contract selector'
      : '';
  const hasPrefillNotice = Boolean(prefillSourceLabel) && Boolean(prefillMessage);

  const [businessContractData, setBusinessContractData] = useState(initialBusinessContractData);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canonicalUrl = 'https://24x7techoncall.com/contact';
  const pageImage = socialImage?.startsWith('http') ? socialImage : `https://24x7techoncall.com${socialImage || ''}`;

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact 24/7 Tech On Call',
    url: canonicalUrl,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: '24/7 Tech On Call',
      telephone: '+1-321-953-5199',
      email: '365techoncall@gmail.com',
      areaServed: 'United States',
    },
  };

  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (isBusinessContractPrefill || !prefillMessage) return;
    setFormData((prev) => {
      if (prev.message.includes(prefillMessage)) return prev;
      return {
        ...prev,
        message: prev.message.trim()
          ? `${prefillMessage}\n\n---\n${prev.message.trim()}`
          : prefillMessage,
      };
    });
  }, [prefillMessage, isBusinessContractPrefill]);

  useEffect(() => {
    if (!isBusinessContractPrefill) return;
    const generatedMessage = buildBusinessContractMessage(
      planName, pricingBaseline, businessContractData, formData.name, formData.email,
    );
    setFormData((prev) => {
      if (prev.message === generatedMessage) return prev;
      return { ...prev, message: generatedMessage };
    });
  }, [businessContractData, formData.email, formData.name, isBusinessContractPrefill, planName, pricingBaseline]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBusinessFieldChange = (e) => {
    const { name, value } = e.target;
    setBusinessContractData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setSubmitError('The contact form is temporarily unavailable. Please call (321) 953-5199 or email 365techoncall@gmail.com directly.');
      return;
    }

    setIsSubmitting(true);
    emailjs.sendForm(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setBusinessContractData(initialBusinessContractData);
      })
      .catch(() => {
        setSubmitError('We could not send your message right now. Please try again, or call (321) 953-5199.');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div>
      <Helmet>
        <title>Contact Computer Repair in the USA | 24/7 Tech On Call</title>
        <meta
          name="description"
          content="Contact 24/7 Tech On Call for professional remote computer repair and IT support available nationwide."
        />
        <meta
          name="keywords"
          content="contact remote tech support, remote IT support USA, 24/7 computer help, online computer repair support"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact 24/7 Tech On Call | Nationwide Remote Support" />
        <meta property="og:description" content="Reach 24/7 Tech On Call for professional remote computer repair and IT support available nationwide." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact 24/7 Tech On Call | Nationwide Remote Support" />
        <meta name="twitter:description" content="Call or email 24/7 Tech On Call for professional remote IT and computer repair services nationwide." />
        <meta name="twitter:image" content={pageImage} />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Helmet>

      {/* ── Hero ── */}
      <section
        className="relative min-h-[380px] flex items-end text-white"
        style={{ backgroundImage: `url(${socialImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/55 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-cyan-300 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Contact</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Contact 24/7 Tech On Call</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">
            Nationwide — We respond within 1 business day.
          </p>
          <a
            href="tel:3219535199"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold rounded-full transition-colors shadow-lg"
          >
            <FaPhoneAlt className="w-4 h-4" /> Call Now: (321) 953-5199
          </a>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

            {/* LEFT — Contact Form (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-6">Fill out the form and we'll get back to you promptly.</p>

                {hasPrefillNotice && (
                  <div className="p-4 mb-6 text-sm text-cyan-800 border border-cyan-200 rounded-lg bg-cyan-50">
                    Details were pre-filled from the <strong>{prefillSourceLabel}</strong>.{' '}
                    {isBusinessContractPrefill
                      ? 'Use the quick-select fields below to build your request.'
                      : 'You can edit this message before submitting.'}
                  </div>
                )}

                {submitted ? (
                  <div className="flex flex-col items-center gap-4 py-10 text-center">
                    <FaCheckCircle className="text-cyan-500 w-16 h-16" />
                    <h3 className="text-2xl font-bold text-gray-800">Message Received!</h3>
                    <p className="text-gray-600 max-w-sm">
                      Thanks for reaching out. We'll contact you within 1 business day — often the same day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-sm text-cyan-500 underline hover:text-cyan-600"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="name">Full Name</label>
                        <input
                          className={inputClass}
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="email">Email Address</label>
                        <input
                          className={inputClass}
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={labelClass} htmlFor="phone">Phone Number <span className="font-normal text-gray-400">(optional)</span></label>
                      <input
                        className={inputClass}
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(321) 555-1234"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Business Contract Quick Select */}
                    {isBusinessContractPrefill && (
                      <fieldset className="p-5 border border-cyan-200 rounded-xl bg-cyan-50">
                        <legend className="px-2 text-sm font-bold text-cyan-800">Business Contract Quick Select</legend>
                        <div className="grid grid-cols-1 gap-4 mt-3 sm:grid-cols-2">
                          <div>
                            <label className={labelClass} htmlFor="company_name">Company name</label>
                            <input className={inputClass} id="company_name" name="companyName" type="text" placeholder="Your company name" value={businessContractData.companyName} onChange={handleBusinessFieldChange} required />
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="industry">Industry</label>
                            <select id="industry" name="industry" value={businessContractData.industry} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select industry</option>
                              <option value="Professional services">Professional services</option>
                              <option value="Legal / Accounting">Legal / Accounting</option>
                              <option value="Real estate">Real estate</option>
                              <option value="Healthcare">Healthcare</option>
                              <option value="Retail / eCommerce">Retail / eCommerce</option>
                              <option value="Construction / Field services">Construction / Field services</option>
                              <option value="Manufacturing / Logistics">Manufacturing / Logistics</option>
                              <option value="Education / Non-profit">Education / Non-profit</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="user_count">Number of users</label>
                            <select id="user_count" name="userCount" value={businessContractData.userCount} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select user count</option>
                              <option value="1-10 users">1-10 users</option>
                              <option value="11-25 users">11-25 users</option>
                              <option value="26-50 users">26-50 users</option>
                              <option value="51-100 users">51-100 users</option>
                              <option value="100+ users">100+ users</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="device_count">Number of devices</label>
                            <select id="device_count" name="deviceCount" value={businessContractData.deviceCount} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select device count</option>
                              <option value="1-10 devices">1-10 devices</option>
                              <option value="11-25 devices">11-25 devices</option>
                              <option value="26-50 devices">26-50 devices</option>
                              <option value="51-100 devices">51-100 devices</option>
                              <option value="100+ devices">100+ devices</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="office_locations">Office locations</label>
                            <select id="office_locations" name="officeLocations" value={businessContractData.officeLocations} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select number of locations</option>
                              <option value="1 location">1 location</option>
                              <option value="2-3 locations">2-3 locations</option>
                              <option value="4-5 locations">4-5 locations</option>
                              <option value="6+ locations">6+ locations</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="budget_range">Estimated IT budget</label>
                            <select id="budget_range" name="budgetRange" value={businessContractData.budgetRange} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select budget range</option>
                              <option value="Under $1,000 / month">Under $1,000 / month</option>
                              <option value="$1,000 - $2,500 / month">$1,000 - $2,500 / month</option>
                              <option value="$2,500 - $5,000 / month">$2,500 - $5,000 / month</option>
                              <option value="$5,000+ / month">$5,000+ / month</option>
                              <option value="Not finalized yet">Not finalized yet</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="support_coverage">Support coverage</label>
                            <select id="support_coverage" name="supportCoverage" value={businessContractData.supportCoverage} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select support coverage</option>
                              <option value="Business hours only">Business hours only</option>
                              <option value="Business hours + after-hours emergency">Business hours + after-hours emergency</option>
                              <option value="Extended support (early/late)">Extended support (early/late)</option>
                              <option value="Not sure yet">Not sure yet</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="compliance_requirement">Compliance requirements</label>
                            <select id="compliance_requirement" name="complianceRequirement" value={businessContractData.complianceRequirement} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select compliance need</option>
                              <option value="None">None</option>
                              <option value="HIPAA">HIPAA</option>
                              <option value="PCI-DSS">PCI-DSS</option>
                              <option value="SOC 2 / client security reviews">SOC 2 / client security reviews</option>
                              <option value="Multiple requirements">Multiple requirements</option>
                              <option value="Not sure">Not sure</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="workspace">Microsoft 365 or Google Workspace</label>
                            <select id="workspace" name="workspace" value={businessContractData.workspace} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select platform</option>
                              <option value="Microsoft 365">Microsoft 365</option>
                              <option value="Google Workspace">Google Workspace</option>
                              <option value="Mixed environment">Mixed environment</option>
                              <option value="Not sure">Not sure</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="backup_solution">Current backup solution</label>
                            <select id="backup_solution" name="backupSolution" value={businessContractData.backupSolution} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select backup status</option>
                              <option value="Cloud backup in place">Cloud backup in place</option>
                              <option value="Local backup only">Local backup only</option>
                              <option value="Cloud + local backup">Cloud + local backup</option>
                              <option value="No reliable backup">No reliable backup</option>
                              <option value="Not sure">Not sure</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="security_tools">Current security tools</label>
                            <select id="security_tools" name="securityTools" value={businessContractData.securityTools} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select security level</option>
                              <option value="Endpoint antivirus only">Endpoint antivirus only</option>
                              <option value="EDR + email security">EDR + email security</option>
                              <option value="MFA + endpoint + email security">MFA + endpoint + email security</option>
                              <option value="Minimal protection">Minimal protection</option>
                              <option value="Not sure">Not sure</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="current_provider">Current IT provider</label>
                            <select id="current_provider" name="currentProvider" value={businessContractData.currentProvider} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select provider status</option>
                              <option value="No current provider">No current provider</option>
                              <option value="Internal IT only">Internal IT only</option>
                              <option value="MSP - switching providers">MSP - switching providers</option>
                              <option value="Hybrid internal + external support">Hybrid internal + external support</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="top_issue">Top issue to solve</label>
                            <select id="top_issue" name="topIssue" value={businessContractData.topIssue} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select top issue</option>
                              <option value="Frequent downtime">Frequent downtime</option>
                              <option value="Slow response from support">Slow response from support</option>
                              <option value="Security and phishing risk">Security and phishing risk</option>
                              <option value="Backup and recovery concerns">Backup and recovery concerns</option>
                              <option value="Unpredictable IT costs">Unpredictable IT costs</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="critical_systems">Business-critical systems</label>
                            <select id="critical_systems" name="criticalSystems" value={businessContractData.criticalSystems} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select critical systems</option>
                              <option value="Microsoft 365 and email">Microsoft 365 and email</option>
                              <option value="Line-of-business applications">Line-of-business applications</option>
                              <option value="POS / billing systems">POS / billing systems</option>
                              <option value="File server and shared storage">File server and shared storage</option>
                              <option value="Mixed systems">Mixed systems</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="start_date">Target start date</label>
                            <select id="start_date" name="startDate" value={businessContractData.startDate} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select target start date</option>
                              <option value="Immediately">Immediately</option>
                              <option value="Within 2 weeks">Within 2 weeks</option>
                              <option value="Within 30 days">Within 30 days</option>
                              <option value="Within 60 days">Within 60 days</option>
                              <option value="Planning phase (60+ days)">Planning phase (60+ days)</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="contact_method">Preferred contact method</label>
                            <select id="contact_method" name="contactMethod" value={businessContractData.contactMethod} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select contact method</option>
                              <option value="Phone">Phone</option>
                              <option value="Email">Email</option>
                              <option value="Either phone or email">Either phone or email</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="discovery_time">Best time for discovery call</label>
                            <select id="discovery_time" name="discoveryTime" value={businessContractData.discoveryTime} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select best time</option>
                              <option value="Morning (9am-12pm)">Morning (9am-12pm)</option>
                              <option value="Afternoon (12pm-4pm)">Afternoon (12pm-4pm)</option>
                              <option value="Late afternoon (4pm-6pm)">Late afternoon (4pm-6pm)</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="goal_1">Goal 1 (next 12 months)</label>
                            <select id="goal_1" name="goal1" value={businessContractData.goal1} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select primary goal</option>
                              <option value="Reduce downtime">Reduce downtime</option>
                              <option value="Improve cybersecurity posture">Improve cybersecurity posture</option>
                              <option value="Standardize devices and processes">Standardize devices and processes</option>
                              <option value="Improve backup and recovery confidence">Improve backup and recovery confidence</option>
                              <option value="Control and predict IT costs">Control and predict IT costs</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="goal_2">Goal 2 (next 12 months)</label>
                            <select id="goal_2" name="goal2" value={businessContractData.goal2} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select secondary goal</option>
                              <option value="Reduce downtime">Reduce downtime</option>
                              <option value="Improve cybersecurity posture">Improve cybersecurity posture</option>
                              <option value="Standardize devices and processes">Standardize devices and processes</option>
                              <option value="Improve backup and recovery confidence">Improve backup and recovery confidence</option>
                              <option value="Control and predict IT costs">Control and predict IT costs</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="goal_3">Goal 3 (next 12 months)</label>
                            <select id="goal_3" name="goal3" value={businessContractData.goal3} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select third goal</option>
                              <option value="Reduce downtime">Reduce downtime</option>
                              <option value="Improve cybersecurity posture">Improve cybersecurity posture</option>
                              <option value="Standardize devices and processes">Standardize devices and processes</option>
                              <option value="Improve backup and recovery confidence">Improve backup and recovery confidence</option>
                              <option value="Control and predict IT costs">Control and predict IT costs</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="requester_role">Decision-maker role</label>
                            <select id="requester_role" name="requesterRole" value={businessContractData.requesterRole} onChange={handleBusinessFieldChange} className={inputClass} required>
                              <option value="" disabled>Select role</option>
                              <option value="Owner / Founder">Owner / Founder</option>
                              <option value="CEO / President">CEO / President</option>
                              <option value="Operations Manager">Operations Manager</option>
                              <option value="Office Manager">Office Manager</option>
                              <option value="IT Manager / Admin">IT Manager / Admin</option>
                              <option value="Finance / Admin">Finance / Admin</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="requester_phone">Direct phone number</label>
                            <input
                              className={inputClass}
                              id="requester_phone"
                              name="requesterPhone"
                              type="tel"
                              placeholder="+1 (321) 555-1234"
                              pattern="^[0-9+()\\-\\s]{10,}$"
                              title="Enter a valid phone number with at least 10 digits."
                              value={businessContractData.requesterPhone}
                              onChange={handleBusinessFieldChange}
                              required
                            />
                          </div>
                        </div>
                      </fieldset>
                    )}

                    {/* Hidden fields */}
                    <div className="hidden">
                      <input type="hidden" name="diagnosis_source" value={prefill?.source || ''} />
                      <input type="hidden" name="diagnosis_recommended_service" value={prefill?.recommendedService || ''} />
                      <input type="hidden" name="diagnosis_recommended_route" value={prefill?.recommendedRoute || ''} />
                      <input type="hidden" name="prefill_source" value={prefill?.source || ''} />
                      <input type="hidden" name="prefill_estimated_range" value={prefill?.estimatedRange || ''} />
                      <input type="hidden" name="business_plan" value={planName} />
                      <input type="hidden" name="business_pricing_baseline" value={pricingBaseline} />
                      <input type="hidden" name="business_company_name" value={businessContractData.companyName} />
                      <input type="hidden" name="business_industry" value={businessContractData.industry} />
                      <input type="hidden" name="business_users" value={businessContractData.userCount} />
                      <input type="hidden" name="business_devices" value={businessContractData.deviceCount} />
                      <input type="hidden" name="business_locations" value={businessContractData.officeLocations} />
                      <input type="hidden" name="business_budget_range" value={businessContractData.budgetRange} />
                      <input type="hidden" name="business_support_coverage" value={businessContractData.supportCoverage} />
                      <input type="hidden" name="business_compliance_requirement" value={businessContractData.complianceRequirement} />
                      <input type="hidden" name="business_workspace" value={businessContractData.workspace} />
                      <input type="hidden" name="business_backup" value={businessContractData.backupSolution} />
                      <input type="hidden" name="business_security_tools" value={businessContractData.securityTools} />
                      <input type="hidden" name="business_current_provider" value={businessContractData.currentProvider} />
                      <input type="hidden" name="business_top_issue" value={businessContractData.topIssue} />
                      <input type="hidden" name="business_critical_systems" value={businessContractData.criticalSystems} />
                      <input type="hidden" name="business_start_date" value={businessContractData.startDate} />
                      <input type="hidden" name="business_contact_method" value={businessContractData.contactMethod} />
                      <input type="hidden" name="business_discovery_time" value={businessContractData.discoveryTime} />
                      <input type="hidden" name="business_goal_1" value={businessContractData.goal1} />
                      <input type="hidden" name="business_goal_2" value={businessContractData.goal2} />
                      <input type="hidden" name="business_goal_3" value={businessContractData.goal3} />
                      <input type="hidden" name="business_requester_role" value={businessContractData.requesterRole} />
                      <input type="hidden" name="business_requester_phone" value={businessContractData.requesterPhone} />
                    </div>

                    {/* Message */}
                    {isBusinessContractPrefill ? (
                      <input type="hidden" id="message" name="message" value={formData.message} />
                    ) : (
                      <div>
                        <label className={labelClass} htmlFor="message">Message</label>
                        <textarea
                          className={inputClass}
                          id="message"
                          name="message"
                          rows="5"
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    )}

                    {/* Error message */}
                    {submitError && (
                      <div className="p-4 text-sm text-red-800 bg-red-50 border border-red-200 rounded-lg">
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT — Info Sidebar (1/3 width) */}
            <div className="flex flex-col gap-5">

              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-5 border-l-4 border-cyan-500 pl-3">Get In Touch</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <FaPhone className="text-cyan-500 w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Phone</p>
                      <a href="tel:+13219535199" className="text-gray-800 font-semibold hover:text-cyan-500 transition-colors">
                        (321) 953-5199
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <FaEnvelope className="text-cyan-500 w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Email</p>
                      <a href="mailto:365techoncall@gmail.com" className="text-gray-800 font-semibold hover:text-cyan-500 transition-colors break-all">
                        365techoncall@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt className="text-cyan-500 w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Address</p>
                      <p className="text-gray-800 font-semibold">602 Hurst Rd NE<br />the USA 32907</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Business Hours Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4 border-l-4 border-cyan-500 pl-3">
                  <FaClock className="text-cyan-500 shrink-0" />
                  <h2 className="text-lg font-bold text-gray-900">Business Hours</h2>
                </div>
                <table className="w-full text-sm text-gray-700">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-semibold">Monday – Friday</td>
                      <td className="py-2 text-right text-cyan-500 font-semibold">9am – 6pm</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-semibold">Saturday</td>
                      <td className="py-2 text-right text-gray-400">Closed</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold">Sunday</td>
                      <td className="py-2 text-right text-gray-400">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Response Promise */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white text-center border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                  <FaCheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="font-bold text-lg">We Respond Fast</p>
                <p className="text-gray-400 text-sm mt-1">
                  We reply to all inquiries within <strong className="text-white">1 business day</strong> — often the same day.
                </p>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-3">Follow Us</h2>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-cyan-500 hover:text-gray-900 transition-colors">
                    <FaFacebook className="w-4 h-4" />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-cyan-500 hover:text-gray-900 transition-colors">
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-cyan-500 hover:text-gray-900 transition-colors">
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-cyan-500 hover:text-gray-900 transition-colors">
                    <FaInstagram className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
