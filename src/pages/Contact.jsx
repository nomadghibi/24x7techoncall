import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import {
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaPhoneAlt,
  FaBuilding, FaServer, FaBullseye, FaUser, FaChevronRight, FaChevronLeft,
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
  return { planName: normalizedPlan, pricingBaseline: normalizedPricing };
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

// ── Wizard step config ──────────────────────────────────────────────────────
const WIZARD_STEPS = [
  { number: 1, label: 'Company',     icon: FaBuilding  },
  { number: 2, label: 'IT Setup',    icon: FaServer    },
  { number: 3, label: 'Priorities',  icon: FaBullseye  },
  { number: 4, label: 'Your Details',icon: FaUser      },
];

const WizardProgress = ({ current }) => (
  <div className="flex items-center justify-between mb-8">
    {WIZARD_STEPS.map((step, i) => {
      const done    = current > step.number;
      const active  = current === step.number;
      const Icon    = step.icon;
      return (
        <div key={step.number} className="flex items-center flex-1">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-colors ${
              done   ? 'bg-cyan-500 text-gray-900' :
              active ? 'bg-gray-900 text-cyan-400 ring-2 ring-cyan-400' :
                       'bg-gray-100 text-gray-400'
            }`}>
              {done ? <FaCheckCircle className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
            </div>
            <span className={`text-xs font-semibold hidden sm:block ${active ? 'text-gray-900' : done ? 'text-cyan-600' : 'text-gray-400'}`}>
              {step.label}
            </span>
          </div>
          {i < WIZARD_STEPS.length - 1 && (
            <div className={`flex-1 h-0.5 mx-2 mb-5 transition-colors ${done ? 'bg-cyan-400' : 'bg-gray-200'}`} />
          )}
        </div>
      );
    })}
  </div>
);

function Contact() {
  const location = useLocation();
  const prefill = location.state?.prefill;
  const prefillMessage = typeof prefill?.message === 'string' ? prefill.message.trim() : '';
  const isBusinessContractPrefill = prefill?.source === 'business-contract' || prefill?.source === 'business-contact';
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
  const [formData, setFormData]   = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [businessStep, setBusinessStep] = useState(1);

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

  const emailServiceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
        setBusinessStep(1);
      })
      .catch(() => {
        setSubmitError('We could not send your message right now. Please try again, or call (321) 953-5199.');
      })
      .finally(() => setIsSubmitting(false));
  };

  // ── Field helpers ──
  const Field = ({ id, label, name, type = 'text', placeholder, value, onChange, required, pattern, title }) => (
    <div>
      <label className={labelClass} htmlFor={id}>{label}</label>
      <input className={inputClass} id={id} name={name} type={type} placeholder={placeholder}
        value={value} onChange={onChange} required={required} pattern={pattern} title={title} />
    </div>
  );

  const Select = ({ id, label, name, value, onChange, required, options }) => (
    <div>
      <label className={labelClass} htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange} className={inputClass} required={required}>
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <div>
      <Helmet>
        <title>Contact Us | 24/7 Tech On Call</title>
        <meta name="description" content="Contact 24/7 Tech On Call for professional remote computer repair and IT support available nationwide." />
        <meta name="keywords" content="contact remote tech support, remote IT support USA, 24/7 computer help, online computer repair support" />
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
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">Nationwide — We respond within 1 business day.</p>
          <a href="tel:3219535199"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold rounded-full transition-colors shadow-lg">
            <FaPhoneAlt className="w-4 h-4" /> Call Now: (321) 953-5199
          </a>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

            {/* LEFT — Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

                {isBusinessContractPrefill ? (
                  <>
                    {/* Business inquiry header */}
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 rounded-full mb-3">
                        Business IT Inquiry
                      </span>
                      {prefill?.source === 'business-contract' ? (
                        <>
                          <h2 className="text-2xl font-bold text-gray-900 mb-1">
                            Request a Quote — <span className="text-cyan-600">{planName}</span>
                          </h2>
                          <p className="text-sm text-gray-500">
                            Pricing baseline: <strong className="text-gray-700">{pricingBaseline}</strong>
                            {' · '}Complete the form and we'll send a tailored proposal within 1 business day.
                          </p>
                        </>
                      ) : (
                        <>
                          <h2 className="text-2xl font-bold text-gray-900 mb-1">
                            Business IT Contact Form
                          </h2>
                          <p className="text-sm text-gray-500">
                            Tell us about your business and we'll follow up within 1 business day with the right solution.
                          </p>
                        </>
                      )}
                    </div>

                    {submitted ? (
                      <div className="flex flex-col items-center gap-4 py-12 text-center">
                        <div className="w-20 h-20 rounded-full bg-cyan-50 flex items-center justify-center">
                          <FaCheckCircle className="text-cyan-500 w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Inquiry Received!</h3>
                        <p className="text-gray-500 max-w-sm">
                          Thanks — we'll review your requirements and follow up within 1 business day with a tailored proposal.
                        </p>
                        <a href="tel:3219535199" className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-gray-900 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors">
                          <FaPhoneAlt className="w-3.5 h-3.5" /> Call us now: (321) 953-5199
                        </a>
                        <button onClick={() => setSubmitted(false)} className="text-sm text-gray-400 underline hover:text-gray-600">
                          Submit another inquiry
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-0">

                        {/* ── Step Progress ── */}
                        <WizardProgress current={businessStep} />

                        {/* ── Step 1: Company Profile ── */}
                        {businessStep === 1 && (
                          <div className="space-y-5">
                            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                              <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center">
                                <FaBuilding className="w-5 h-5 text-cyan-500" />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900">Company Profile</h3>
                                <p className="text-xs text-gray-400">Tell us about your business</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <div className="sm:col-span-2">
                                <Field id="company_name" label="Company Name" name="companyName" placeholder="Acme Corporation"
                                  value={businessContractData.companyName} onChange={handleBusinessFieldChange} required />
                              </div>
                              <Select id="industry" label="Industry" name="industry"
                                value={businessContractData.industry} onChange={handleBusinessFieldChange} required
                                options={['Professional services','Legal / Accounting','Real estate','Healthcare','Retail / eCommerce','Construction / Field services','Manufacturing / Logistics','Education / Non-profit','Other']} />
                              <Select id="user_count" label="Number of Users" name="userCount"
                                value={businessContractData.userCount} onChange={handleBusinessFieldChange} required
                                options={['1-10 users','11-25 users','26-50 users','51-100 users','100+ users']} />
                              <Select id="device_count" label="Number of Devices" name="deviceCount"
                                value={businessContractData.deviceCount} onChange={handleBusinessFieldChange} required
                                options={['1-10 devices','11-25 devices','26-50 devices','51-100 devices','100+ devices']} />
                              <Select id="office_locations" label="Office Locations" name="officeLocations"
                                value={businessContractData.officeLocations} onChange={handleBusinessFieldChange} required
                                options={['1 location','2-3 locations','4-5 locations','6+ locations']} />
                              <Select id="budget_range" label="Estimated IT Budget" name="budgetRange"
                                value={businessContractData.budgetRange} onChange={handleBusinessFieldChange} required
                                options={['Under $1,000 / month','$1,000 - $2,500 / month','$2,500 - $5,000 / month','$5,000+ / month','Not finalized yet']} />
                              <Select id="support_coverage" label="Support Coverage Needed" name="supportCoverage"
                                value={businessContractData.supportCoverage} onChange={handleBusinessFieldChange} required
                                options={['Business hours only','Business hours + after-hours emergency','Extended support (early/late)','Not sure yet']} />
                            </div>
                          </div>
                        )}

                        {/* ── Step 2: IT Environment ── */}
                        {businessStep === 2 && (
                          <div className="space-y-5">
                            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                <FaServer className="w-5 h-5 text-blue-500" />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900">Current IT Environment</h3>
                                <p className="text-xs text-gray-400">Help us understand your existing setup</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <Select id="workspace" label="Email & Productivity Platform" name="workspace"
                                value={businessContractData.workspace} onChange={handleBusinessFieldChange} required
                                options={['Microsoft 365','Google Workspace','Mixed environment','Not sure']} />
                              <Select id="current_provider" label="Current IT Provider" name="currentProvider"
                                value={businessContractData.currentProvider} onChange={handleBusinessFieldChange} required
                                options={['No current provider','Internal IT only','MSP - switching providers','Hybrid internal + external support']} />
                              <Select id="backup_solution" label="Backup Solution" name="backupSolution"
                                value={businessContractData.backupSolution} onChange={handleBusinessFieldChange} required
                                options={['Cloud backup in place','Local backup only','Cloud + local backup','No reliable backup','Not sure']} />
                              <Select id="security_tools" label="Security Tools in Use" name="securityTools"
                                value={businessContractData.securityTools} onChange={handleBusinessFieldChange} required
                                options={['Endpoint antivirus only','EDR + email security','MFA + endpoint + email security','Minimal protection','Not sure']} />
                              <Select id="compliance_requirement" label="Compliance Requirements" name="complianceRequirement"
                                value={businessContractData.complianceRequirement} onChange={handleBusinessFieldChange} required
                                options={['None','HIPAA','PCI-DSS','SOC 2 / client security reviews','Multiple requirements','Not sure']} />
                            </div>
                          </div>
                        )}

                        {/* ── Step 3: Priorities & Goals ── */}
                        {businessStep === 3 && (
                          <div className="space-y-5">
                            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                                <FaBullseye className="w-5 h-5 text-purple-500" />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900">Priorities & Goals</h3>
                                <p className="text-xs text-gray-400">What matters most to your business</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <Select id="top_issue" label="Biggest IT Challenge Right Now" name="topIssue"
                                value={businessContractData.topIssue} onChange={handleBusinessFieldChange} required
                                options={['Frequent downtime','Slow response from support','Security and phishing risk','Backup and recovery concerns','Unpredictable IT costs']} />
                              <Select id="critical_systems" label="Business-Critical Systems" name="criticalSystems"
                                value={businessContractData.criticalSystems} onChange={handleBusinessFieldChange} required
                                options={['Microsoft 365 and email','Line-of-business applications','POS / billing systems','File server and shared storage','Mixed systems']} />
                              <Select id="start_date" label="Target Start Date" name="startDate"
                                value={businessContractData.startDate} onChange={handleBusinessFieldChange} required
                                options={['Immediately','Within 2 weeks','Within 30 days','Within 60 days','Planning phase (60+ days)']} />
                              <Select id="goal_1" label="Primary Goal (Next 12 Months)" name="goal1"
                                value={businessContractData.goal1} onChange={handleBusinessFieldChange} required
                                options={['Reduce downtime','Improve cybersecurity posture','Standardize devices and processes','Improve backup and recovery confidence','Control and predict IT costs']} />
                              <Select id="goal_2" label="Secondary Goal" name="goal2"
                                value={businessContractData.goal2} onChange={handleBusinessFieldChange} required
                                options={['Reduce downtime','Improve cybersecurity posture','Standardize devices and processes','Improve backup and recovery confidence','Control and predict IT costs']} />
                              <Select id="goal_3" label="Third Goal" name="goal3"
                                value={businessContractData.goal3} onChange={handleBusinessFieldChange} required
                                options={['Reduce downtime','Improve cybersecurity posture','Standardize devices and processes','Improve backup and recovery confidence','Control and predict IT costs']} />
                            </div>
                          </div>
                        )}

                        {/* ── Step 4: Your Details ── */}
                        {businessStep === 4 && (
                          <div className="space-y-5">
                            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                                <FaUser className="w-5 h-5 text-green-500" />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900">Your Details</h3>
                                <p className="text-xs text-gray-400">How we'll reach you with your proposal</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <Field id="name" label="Full Name" name="name" placeholder="Jane Smith"
                                value={formData.name} onChange={handleChange} required />
                              <Select id="requester_role" label="Your Role" name="requesterRole"
                                value={businessContractData.requesterRole} onChange={handleBusinessFieldChange} required
                                options={['Owner / Founder','CEO / President','Operations Manager','Office Manager','IT Manager / Admin','Finance / Admin','Other']} />
                              <Field id="email" label="Work Email" name="email" type="email" placeholder="you@company.com"
                                value={formData.email} onChange={handleChange} required />
                              <Field id="requester_phone" label="Direct Phone" name="requesterPhone" type="tel"
                                placeholder="+1 (321) 555-1234" value={businessContractData.requesterPhone}
                                onChange={handleBusinessFieldChange} required
                                pattern="^[0-9+()\-\s]{10,}$" title="Enter a valid phone number with at least 10 digits." />
                              <Select id="contact_method" label="Preferred Contact Method" name="contactMethod"
                                value={businessContractData.contactMethod} onChange={handleBusinessFieldChange} required
                                options={['Phone','Email','Either phone or email']} />
                              <Select id="discovery_time" label="Best Time for Discovery Call" name="discoveryTime"
                                value={businessContractData.discoveryTime} onChange={handleBusinessFieldChange} required
                                options={['Morning (9am-12pm)','Afternoon (12pm-4pm)','Late afternoon (4pm-6pm)']} />
                            </div>
                          </div>
                        )}

                        {/* ── Hidden Fields (EmailJS payload) ── */}
                        <div className="hidden">
                          <input type="hidden" name="phone" value={formData.phone} />
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
                          <input type="hidden" id="message" name="message" value={formData.message} />
                        </div>

                        {/* ── Error ── */}
                        {submitError && (
                          <div className="mt-4 p-4 text-sm text-red-800 bg-red-50 border border-red-200 rounded-lg">{submitError}</div>
                        )}

                        {/* ── Nav Buttons ── */}
                        <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                          {businessStep > 1 ? (
                            <button type="button" onClick={() => setBusinessStep((s) => s - 1)}
                              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-600 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                              <FaChevronLeft className="w-3 h-3" /> Back
                            </button>
                          ) : <div />}

                          {businessStep < 4 ? (
                            <button type="button" onClick={() => setBusinessStep((s) => s + 1)}
                              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-gray-900 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors">
                              Next <FaChevronRight className="w-3 h-3" />
                            </button>
                          ) : (
                            <button type="submit" disabled={isSubmitting}
                              className="inline-flex items-center gap-2 px-7 py-2.5 font-bold text-gray-900 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                              {!isSubmitting && <FaChevronRight className="w-3 h-3" />}
                            </button>
                          )}
                        </div>

                        {/* Step indicator */}
                        <p className="text-center text-xs text-gray-400 mt-3">Step {businessStep} of 4</p>
                      </form>
                    )}
                  </>
                ) : (
                  /* ── Standard Contact Form ── */
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Send Us a Message</h2>
                    <p className="text-gray-500 text-sm mb-6">Fill out the form and we'll get back to you promptly.</p>

                    {hasPrefillNotice && (
                      <div className="p-4 mb-6 text-sm text-cyan-800 border border-cyan-200 rounded-lg bg-cyan-50">
                        Details were pre-filled from the <strong>{prefillSourceLabel}</strong>. You can edit this message before submitting.
                      </div>
                    )}

                    {submitted ? (
                      <div className="flex flex-col items-center gap-4 py-10 text-center">
                        <FaCheckCircle className="text-cyan-500 w-16 h-16" />
                        <h3 className="text-2xl font-bold text-gray-800">Message Received!</h3>
                        <p className="text-gray-600 max-w-sm">Thanks for reaching out. We'll contact you within 1 business day — often the same day.</p>
                        <button onClick={() => setSubmitted(false)} className="mt-2 text-sm text-cyan-500 underline hover:text-cyan-600">
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <div>
                            <label className={labelClass} htmlFor="name">Full Name</label>
                            <input className={inputClass} id="name" name="name" type="text" placeholder="Your full name"
                              value={formData.name} onChange={handleChange} required />
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="email">Email Address</label>
                            <input className={inputClass} id="email" name="email" type="email" placeholder="you@example.com"
                              value={formData.email} onChange={handleChange} required />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="phone">Phone Number <span className="font-normal text-gray-400">(optional)</span></label>
                          <input className={inputClass} id="phone" name="phone" type="tel" placeholder="(321) 555-1234"
                            value={formData.phone} onChange={handleChange} />
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="message">Message</label>
                          <textarea className={inputClass} id="message" name="message" rows="5"
                            placeholder="How can we help you?" value={formData.message} onChange={handleChange} required />
                        </div>
                        {submitError && (
                          <div className="p-4 text-sm text-red-800 bg-red-50 border border-red-200 rounded-lg">{submitError}</div>
                        )}
                        <button type="submit" disabled={isSubmitting}
                          className="w-full py-3 px-6 font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </form>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* RIGHT — Info Sidebar */}
            <div className="flex flex-col gap-5">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-5 border-l-4 border-cyan-500 pl-3">Get In Touch</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <FaPhone className="text-cyan-500 w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Phone</p>
                      <a href="tel:+13219535199" className="text-gray-800 font-semibold hover:text-cyan-500 transition-colors">(321) 953-5199</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <FaEnvelope className="text-cyan-500 w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Email</p>
                      <a href="mailto:365techoncall@gmail.com" className="text-gray-800 font-semibold hover:text-cyan-500 transition-colors break-all">365techoncall@gmail.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt className="text-cyan-500 w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Service Area</p>
                      <p className="text-gray-800 font-semibold">Serving All 50 States</p>
                    </div>
                  </li>
                </ul>
              </div>

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

              <div className="bg-gray-900 rounded-2xl p-6 text-white text-center border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                  <FaCheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="font-bold text-lg">We Respond Fast</p>
                <p className="text-gray-400 text-sm mt-1">
                  We reply to all inquiries within <strong className="text-white">1 business day</strong> — often the same day.
                </p>
              </div>

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
