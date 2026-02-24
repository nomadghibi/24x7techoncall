import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const canonicalUrl = 'https://bestcomputertec.com/contact';
  const pageImage = socialImage?.startsWith('http') ? socialImage : `https://bestcomputertec.com${socialImage || ''}`;
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Best Computer Tech',
    url: canonicalUrl,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Best Computer Tech LLC',
      telephone: '+1-321-953-5199',
      email: '365techoncall@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '602 Hurst Rd NE',
        addressLocality: 'Palm Bay',
        addressRegion: 'FL',
        postalCode: '32907',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Palm Bay' },
        { '@type': 'City', name: 'Melbourne' },
        { '@type': 'AdministrativeArea', name: 'Brevard County' },
      ],
    },
  };

  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (isBusinessContractPrefill || !prefillMessage) {
      return;
    }

    setFormData((prev) => {
      if (prev.message.includes(prefillMessage)) {
        return prev;
      }
      return {
        ...prev,
        message: prev.message.trim()
          ? `${prefillMessage}\n\n---\n${prev.message.trim()}`
          : prefillMessage,
      };
    });
  }, [prefillMessage, isBusinessContractPrefill]);

  useEffect(() => {
    if (!isBusinessContractPrefill) {
      return;
    }

    const generatedMessage = buildBusinessContractMessage(
      planName,
      pricingBaseline,
      businessContractData,
      formData.name,
      formData.email,
    );

    setFormData((prev) => {
      if (prev.message === generatedMessage) {
        return prev;
      }
      return {
        ...prev,
        message: generatedMessage,
      };
    });
  }, [businessContractData, formData.email, formData.name, isBusinessContractPrefill, planName, pricingBaseline]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Use `name` here to match the attribute in the form
    });
  };

  const handleBusinessFieldChange = (e) => {
    const { name, value } = e.target;
    setBusinessContractData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      alert('Contact form is temporarily unavailable. Please call (321) 953-5199 or email 365techoncall@gmail.com.');
      return;
    }

    // Send form data using EmailJS
    emailjs.sendForm(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Thanks! Your message has been received. We will contact you within 1 business day.');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setBusinessContractData(initialBusinessContractData);
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('We could not send your message right now. Please try again, or call (321) 953-5199.');
      });
  };

  return (
    <div className="container p-8 mx-auto">
      <Helmet>
        <title>Contact Computer Repair in Palm Bay, FL | Best Computer Tech</title>
        <meta
          name="description"
          content="Contact Best Computer Tech for local computer repair and IT support in Palm Bay, Melbourne, and Brevard County, Florida."
        />
        <meta
          name="keywords"
          content="contact computer repair Palm Bay FL, IT support Melbourne FL, local tech support Brevard County"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Best Computer Tech | Palm Bay, FL" />
        <meta
          property="og:description"
          content="Reach Best Computer Tech for local computer repair and IT support in Palm Bay and nearby Florida cities."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Best Computer Tech | Palm Bay, FL" />
        <meta
          name="twitter:description"
          content="Call or email Best Computer Tech for local IT and computer repair services in Palm Bay, FL."
        />
        <meta name="twitter:image" content={pageImage} />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Helmet>
      <h1 className="mb-8 text-4xl font-bold text-center">Contact Best Computer Tech</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Our Office</h2>
          <p className="mb-2">602 Hurst Rd NE, Palm Bay, Florida 32907, USA</p>
          <p className="mb-2">
            Phone:{' '}
            <a className="text-blue-700 hover:underline" href="tel:+13219535199">(321) 953-5199</a>
          </p>
          <p className="mb-8">
            Email:{' '}
            <a className="text-blue-700 hover:underline" href="mailto:365techoncall@gmail.com">365techoncall@gmail.com</a>
          </p>
          <h2 className="mb-4 text-2xl font-semibold">Get In Touch</h2>
          {hasPrefillNotice && (
            <div className="p-3 mb-4 text-sm text-blue-800 border border-blue-200 rounded bg-blue-50">
              Details were pre-filled from the {prefillSourceLabel}. {isBusinessContractPrefill ? 'Use the quick-select fields below to build your request.' : 'You can edit this message before submitting.'}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                name="name" // Must match the EmailJS template variable
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                name="email" // Must match the EmailJS template variable
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {isBusinessContractPrefill && (
              <fieldset className="p-4 mb-4 border border-blue-200 rounded bg-blue-50">
                <legend className="px-2 text-sm font-semibold text-blue-800">Business Contract Quick Select</legend>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="company_name">
                      Company name
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="company_name"
                      name="companyName"
                      type="text"
                      placeholder="Your company name"
                      value={businessContractData.companyName}
                      onChange={handleBusinessFieldChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="industry">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={businessContractData.industry}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
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
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="user_count">
                      Number of users
                    </label>
                    <select
                      id="user_count"
                      name="userCount"
                      value={businessContractData.userCount}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select user count</option>
                      <option value="1-10 users">1-10 users</option>
                      <option value="11-25 users">11-25 users</option>
                      <option value="26-50 users">26-50 users</option>
                      <option value="51-100 users">51-100 users</option>
                      <option value="100+ users">100+ users</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="device_count">
                      Number of devices
                    </label>
                    <select
                      id="device_count"
                      name="deviceCount"
                      value={businessContractData.deviceCount}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select device count</option>
                      <option value="1-10 devices">1-10 devices</option>
                      <option value="11-25 devices">11-25 devices</option>
                      <option value="26-50 devices">26-50 devices</option>
                      <option value="51-100 devices">51-100 devices</option>
                      <option value="100+ devices">100+ devices</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="office_locations">
                      Number of office locations
                    </label>
                    <select
                      id="office_locations"
                      name="officeLocations"
                      value={businessContractData.officeLocations}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select number of locations</option>
                      <option value="1 location">1 location</option>
                      <option value="2-3 locations">2-3 locations</option>
                      <option value="4-5 locations">4-5 locations</option>
                      <option value="6+ locations">6+ locations</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="budget_range">
                      Estimated IT budget range
                    </label>
                    <select
                      id="budget_range"
                      name="budgetRange"
                      value={businessContractData.budgetRange}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select budget range</option>
                      <option value="Under $1,000 / month">Under $1,000 / month</option>
                      <option value="$1,000 - $2,500 / month">$1,000 - $2,500 / month</option>
                      <option value="$2,500 - $5,000 / month">$2,500 - $5,000 / month</option>
                      <option value="$5,000+ / month">$5,000+ / month</option>
                      <option value="Not finalized yet">Not finalized yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="support_coverage">
                      Preferred support coverage
                    </label>
                    <select
                      id="support_coverage"
                      name="supportCoverage"
                      value={businessContractData.supportCoverage}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select support coverage</option>
                      <option value="Business hours only">Business hours only</option>
                      <option value="Business hours + after-hours emergency">Business hours + after-hours emergency</option>
                      <option value="Extended support (early/late)">Extended support (early/late)</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="compliance_requirement">
                      Compliance requirements
                    </label>
                    <select
                      id="compliance_requirement"
                      name="complianceRequirement"
                      value={businessContractData.complianceRequirement}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
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
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="workspace">
                      Microsoft 365 or Google Workspace
                    </label>
                    <select
                      id="workspace"
                      name="workspace"
                      value={businessContractData.workspace}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select platform</option>
                      <option value="Microsoft 365">Microsoft 365</option>
                      <option value="Google Workspace">Google Workspace</option>
                      <option value="Mixed environment">Mixed environment</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="backup_solution">
                      Current backup solution
                    </label>
                    <select
                      id="backup_solution"
                      name="backupSolution"
                      value={businessContractData.backupSolution}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select backup status</option>
                      <option value="Cloud backup in place">Cloud backup in place</option>
                      <option value="Local backup only">Local backup only</option>
                      <option value="Cloud + local backup">Cloud + local backup</option>
                      <option value="No reliable backup">No reliable backup</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="security_tools">
                      Current security tools
                    </label>
                    <select
                      id="security_tools"
                      name="securityTools"
                      value={businessContractData.securityTools}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select security level</option>
                      <option value="Endpoint antivirus only">Endpoint antivirus only</option>
                      <option value="EDR + email security">EDR + email security</option>
                      <option value="MFA + endpoint + email security">MFA + endpoint + email security</option>
                      <option value="Minimal protection">Minimal protection</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="current_provider">
                      Current IT provider
                    </label>
                    <select
                      id="current_provider"
                      name="currentProvider"
                      value={businessContractData.currentProvider}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select provider status</option>
                      <option value="No current provider">No current provider</option>
                      <option value="Internal IT only">Internal IT only</option>
                      <option value="MSP - switching providers">MSP - switching providers</option>
                      <option value="Hybrid internal + external support">Hybrid internal + external support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="top_issue">
                      Top issue to solve
                    </label>
                    <select
                      id="top_issue"
                      name="topIssue"
                      value={businessContractData.topIssue}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select top issue</option>
                      <option value="Frequent downtime">Frequent downtime</option>
                      <option value="Slow response from support">Slow response from support</option>
                      <option value="Security and phishing risk">Security and phishing risk</option>
                      <option value="Backup and recovery concerns">Backup and recovery concerns</option>
                      <option value="Unpredictable IT costs">Unpredictable IT costs</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="critical_systems">
                      Business-critical systems
                    </label>
                    <select
                      id="critical_systems"
                      name="criticalSystems"
                      value={businessContractData.criticalSystems}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select critical systems</option>
                      <option value="Microsoft 365 and email">Microsoft 365 and email</option>
                      <option value="Line-of-business applications">Line-of-business applications</option>
                      <option value="POS / billing systems">POS / billing systems</option>
                      <option value="File server and shared storage">File server and shared storage</option>
                      <option value="Mixed systems">Mixed systems</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="start_date">
                      Target start date
                    </label>
                    <select
                      id="start_date"
                      name="startDate"
                      value={businessContractData.startDate}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select target start date</option>
                      <option value="Immediately">Immediately</option>
                      <option value="Within 2 weeks">Within 2 weeks</option>
                      <option value="Within 30 days">Within 30 days</option>
                      <option value="Within 60 days">Within 60 days</option>
                      <option value="Planning phase (60+ days)">Planning phase (60+ days)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contact_method">
                      Preferred contact method
                    </label>
                    <select
                      id="contact_method"
                      name="contactMethod"
                      value={businessContractData.contactMethod}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select contact method</option>
                      <option value="Phone">Phone</option>
                      <option value="Email">Email</option>
                      <option value="Either phone or email">Either phone or email</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="discovery_time">
                      Best time for discovery call
                    </label>
                    <select
                      id="discovery_time"
                      name="discoveryTime"
                      value={businessContractData.discoveryTime}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select best time</option>
                      <option value="Morning (9am-12pm)">Morning (9am-12pm)</option>
                      <option value="Afternoon (12pm-4pm)">Afternoon (12pm-4pm)</option>
                      <option value="Late afternoon (4pm-6pm)">Late afternoon (4pm-6pm)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="goal_1">
                      Goal 1 (next 12 months)
                    </label>
                    <select
                      id="goal_1"
                      name="goal1"
                      value={businessContractData.goal1}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select primary goal</option>
                      <option value="Reduce downtime">Reduce downtime</option>
                      <option value="Improve cybersecurity posture">Improve cybersecurity posture</option>
                      <option value="Standardize devices and processes">Standardize devices and processes</option>
                      <option value="Improve backup and recovery confidence">Improve backup and recovery confidence</option>
                      <option value="Control and predict IT costs">Control and predict IT costs</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="goal_2">
                      Goal 2 (next 12 months)
                    </label>
                    <select
                      id="goal_2"
                      name="goal2"
                      value={businessContractData.goal2}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select secondary goal</option>
                      <option value="Reduce downtime">Reduce downtime</option>
                      <option value="Improve cybersecurity posture">Improve cybersecurity posture</option>
                      <option value="Standardize devices and processes">Standardize devices and processes</option>
                      <option value="Improve backup and recovery confidence">Improve backup and recovery confidence</option>
                      <option value="Control and predict IT costs">Control and predict IT costs</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="goal_3">
                      Goal 3 (next 12 months)
                    </label>
                    <select
                      id="goal_3"
                      name="goal3"
                      value={businessContractData.goal3}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="" disabled>Select third goal</option>
                      <option value="Reduce downtime">Reduce downtime</option>
                      <option value="Improve cybersecurity posture">Improve cybersecurity posture</option>
                      <option value="Standardize devices and processes">Standardize devices and processes</option>
                      <option value="Improve backup and recovery confidence">Improve backup and recovery confidence</option>
                      <option value="Control and predict IT costs">Control and predict IT costs</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="requester_role">
                      Decision-maker role
                    </label>
                    <select
                      id="requester_role"
                      name="requesterRole"
                      value={businessContractData.requesterRole}
                      onChange={handleBusinessFieldChange}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    >
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
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="requester_phone">
                      Direct phone number
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
            <div className="mb-4">
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
              {isBusinessContractPrefill ? (
                <input type="hidden" id="message" name="message" value={formData.message} />
              ) : (
                <>
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="message"
                    name="message" // Must match the EmailJS template variable
                    rows="4"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </>
              )}
            </div>
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">Business Hours</h2>
            <ul className="mb-8 list-disc list-inside">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
            <h2 className="mb-4 text-2xl font-semibold">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
