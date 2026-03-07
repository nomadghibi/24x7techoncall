import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FaDesktop, FaLaptop, FaMicrochip, FaQuestionCircle,
  FaPowerOff, FaBug, FaTools, FaWifi, FaDatabase,
  FaBuilding, FaBolt, FaCalendarAlt, FaClock,
  FaExclamationTriangle, FaShieldAlt, FaCheck,
  FaHome, FaBriefcase,
  FaPhoneAlt, FaCheckCircle, FaRedo, FaEnvelope,
  FaChevronRight, FaChevronLeft, FaTachometerAlt,
} from 'react-icons/fa';

// ── Option icon map ────────────────────────────────────────────────────────
const optionIcons = {
  desktop:        FaDesktop,
  laptop:         FaLaptop,
  mac:            FaMicrochip,
  'not-sure':     FaQuestionCircle,
  'no-power':     FaPowerOff,
  slow:           FaTachometerAlt,
  malware:        FaBug,
  hardware:       FaTools,
  network:        FaWifi,
  'data-loss':    FaDatabase,
  business:       FaBuilding,
  today:          FaBolt,
  week:           FaCalendarAlt,
  flexible:       FaClock,
  critical:       FaExclamationTriangle,
  important:      FaShieldAlt,
  low:            FaCheck,
  remote:         FaDesktop,
  'remote-now':   FaBolt,
  'remote-scheduled': FaCalendarAlt,
  home:           FaHome,
  'small-business': FaBriefcase,
};

// ── Diagnostic steps ───────────────────────────────────────────────────────
const diagnosticSteps = [
  {
    id: 'deviceType',
    question: 'What device do you need help with?',
    options: [
      { value: 'desktop',  label: 'Desktop PC' },
      { value: 'laptop',   label: 'Laptop' },
      { value: 'mac',      label: 'Mac' },
      { value: 'not-sure', label: 'Not sure' },
    ],
  },
  {
    id: 'primaryIssue',
    question: 'What is the main issue?',
    options: [
      { value: 'no-power',   label: "Won't turn on" },
      { value: 'slow',       label: 'Very slow performance' },
      { value: 'malware',    label: 'Virus or pop-up alerts' },
      { value: 'hardware',   label: 'Broken screen or hardware damage' },
      { value: 'network',    label: 'Wi-Fi or internet issues' },
      { value: 'data-loss',  label: 'Lost files or data access issue' },
      { value: 'business',   label: 'Business multi-device or network issue' },
    ],
  },
  {
    id: 'urgency',
    question: 'How urgent is this issue?',
    options: [
      { value: 'today',    label: 'Need help today' },
      { value: 'week',     label: 'Within this week' },
      { value: 'flexible', label: 'Flexible timing' },
    ],
  },
  {
    id: 'dataImportance',
    question: 'How important is recovering your files?',
    options: [
      { value: 'critical',  label: 'Critical, I need files ASAP' },
      { value: 'important', label: 'Important, but not urgent' },
      { value: 'low',       label: 'Not a major concern' },
    ],
  },
  {
    id: 'supportPreference',
    question: 'Choose your remote support option',
    options: [
      { value: 'remote-now',       label: 'Start remote diagnosis ASAP' },
      { value: 'remote-scheduled', label: 'Schedule a remote session' },
    ],
  },
  {
    id: 'customerType',
    question: 'Who is this for?',
    options: [
      { value: 'home',           label: 'Home user' },
      { value: 'small-business', label: 'Small business' },
    ],
  },
];

const optionLabelMap = diagnosticSteps.reduce((acc, step) => {
  acc[step.id] = step.options.reduce((map, opt) => {
    map[opt.value] = opt.label;
    return map;
  }, {});
  return acc;
}, {});

// ── Recommendation engine ──────────────────────────────────────────────────
const getRecommendation = (answers) => {
  const issueToService = {
    'no-power':  { title: 'Remote Diagnosis Session',    route: '/contact',                                    reason: 'Power issues often need hands-on repair. We start with remote triage and guide the safest next step.' },
    slow:        { title: 'Computer Repair & Troubleshooting', route: '/residential-support/computer-repair',  reason: 'Slow systems are usually fixed remotely through cleanup, updates, and optimization.' },
    malware:     { title: 'Virus and Malware Removal',   route: '/residential-support/virus-malware-removal',  reason: 'Malware symptoms are typically resolved in secure remote cleanup sessions.' },
    hardware:    { title: 'Remote Diagnosis Session',    route: '/contact',                                    reason: 'Physical damage cannot be repaired remotely, but we can diagnose the impact and advise immediate next actions.' },
    network:     { title: 'Wi-Fi and Internet Help',     route: '/residential-support/wifi-internet-help',     reason: 'Most internet and Wi-Fi issues can be diagnosed and fixed remotely.' },
    'data-loss': { title: 'Data Recovery',               route: '/residential-support/data-recovery',          reason: 'Data loss should be assessed remotely first to reduce recovery risk.' },
    business:    { title: 'Remote Help Desk',            route: '/business-solutions/remote-help-desk',        reason: 'Multi-device business issues are best handled through structured remote support.' },
  };

  const selected = issueToService[answers.primaryIssue] || {
    title: 'Contact Support',
    route: '/contact',
    reason: 'A technician can help confirm the best service path.',
  };

  const quickTechEligible =
    answers.urgency === 'today' &&
    answers.supportPreference === 'remote-now' &&
    ['slow', 'malware', 'network'].includes(answers.primaryIssue);

  const notes = [];
  if (answers.dataImportance === 'critical')
    notes.push('Avoid repeated restarts or DIY repairs until your important files are secured.');
  if (answers.customerType === 'small-business')
    notes.push('For business systems, ask for a prevention plan to reduce repeat downtime.');
  if (answers.urgency === 'today')
    notes.push('Based on your urgency, request same-day availability when you book.');
  if (answers.supportPreference === 'remote-scheduled')
    notes.push('Book a scheduled remote session to reserve a dedicated technician window.');

  return { ...selected, quickTechEligible, notes };
};

const buildDiagnosisSummary = (answers, recommendation) => {
  const safeLabel = (stepId) => optionLabelMap[stepId]?.[answers[stepId]] || 'Not provided';
  const lines = [
    'Diagnose My Issue Summary',
    `Recommended Service: ${recommendation.title}`,
    `Recommended Path: https://24x7techoncall.com${recommendation.route}`,
    '',
    'Answers:',
    `- Device: ${safeLabel('deviceType')}`,
    `- Main Issue: ${safeLabel('primaryIssue')}`,
    `- Urgency: ${safeLabel('urgency')}`,
    `- Data Importance: ${safeLabel('dataImportance')}`,
    `- Support Preference: ${safeLabel('supportPreference')}`,
    `- Customer Type: ${safeLabel('customerType')}`,
    '',
    `Reason: ${recommendation.reason}`,
  ];
  if (recommendation.notes.length > 0) {
    lines.push('', 'Important Notes:');
    recommendation.notes.forEach((note) => lines.push(`- ${note}`));
  }
  return lines.join('\n');
};

// ── Component ──────────────────────────────────────────────────────────────
function DiagnoseMyIssue() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers]     = useState({});

  const canonicalUrl   = 'https://24x7techoncall.com/diagnose-my-issue';
  const isComplete     = stepIndex >= diagnosticSteps.length;
  const safeStepIndex  = Math.min(stepIndex, diagnosticSteps.length - 1);
  const currentStep    = diagnosticSteps[safeStepIndex];
  const currentValue   = isComplete ? null : answers[currentStep.id];
  const progressPercent = ((safeStepIndex + 1) / diagnosticSteps.length) * 100;

  const recommendation = useMemo(() => {
    if (!isComplete) return null;
    return getRecommendation(answers);
  }, [answers, isComplete]);

  const contactPrefillState = useMemo(() => {
    if (!recommendation) return null;
    return {
      prefill: {
        source: 'diagnose-my-issue',
        recommendedService: recommendation.title,
        recommendedRoute: recommendation.route,
        message: buildDiagnosisSummary(answers, recommendation),
      },
    };
  }, [answers, recommendation]);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Do you offer same-day computer repair in Nationwide?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, same-day service is often available depending on issue type and schedule. Contact us to confirm current availability.' } },
      { '@type': 'Question', name: 'Can you help with virus removal and slow computer performance?',   acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide malware cleanup, security hardening, and system optimization for home and small business devices.' } },
      { '@type': 'Question', name: 'Is this diagnosis flow for remote support only?',                 acceptedAnswer: { '@type': 'Answer', text: 'Yes. This flow is designed for remote-first service nationwide. If a hardware issue needs in-person repair, we provide next-step guidance after remote triage.' } },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',             item: 'https://24x7techoncall.com/' },
      { '@type': 'ListItem', position: 2, name: 'Diagnose My Issue', item: canonicalUrl },
    ],
  };

  const handleSelect  = (value) => setAnswers((prev) => ({ ...prev, [currentStep.id]: value }));
  const handleNext    = () => { if (currentValue) setStepIndex((p) => p + 1); };
  const handleBack    = () => setStepIndex((p) => Math.max(p - 1, 0));
  const handleRestart = () => { setAnswers({}); setStepIndex(0); };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Diagnose My Issue | Computer Repair Near You | 24/7 Tech On Call</title>
        <meta name="description" content="Use our step-by-step diagnosis wizard to find the right computer repair service in Nationwide. Fast recommendations for malware, slow PCs, data recovery, and network issues." />
        <meta name="keywords" content="computer repairs near you, computer repair near me, laptop repair near me, Palm Bay computer repair, Melbourne FL computer support, diagnose computer issue" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Diagnose My Issue | 24/7 Tech On Call" />
        <meta property="og:description" content="Answer a few questions and get the right support path for your computer issue in Nationwide." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Diagnose My Issue | 24/7 Tech On Call" />
        <meta name="twitter:description" content="Find the right local repair service with our quick diagnosis wizard." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300 mb-3">
            Free Diagnostic Tool
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Diagnose My Issue</h1>
          <p className="text-lg text-gray-300 mb-8">
            Answer 6 quick questions and get a remote-first recommendation for the right service.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: FaDesktop,     text: 'Remote Service Only' },
              { icon: FaBolt,        text: 'Instant Recommendation' },
              { icon: FaShieldAlt,   text: 'Free to Use' },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm text-cyan-100 border border-white/20">
                <Icon className="w-3.5 h-3.5 text-cyan-300" /> {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wizard ── */}
      <section className="container mx-auto px-4 py-12 max-w-2xl">
        {!isComplete ? (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">

            {/* Progress header */}
            <div className="px-8 pt-8 pb-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-3 text-sm font-medium text-gray-500">
                <span>Step {stepIndex + 1} of {diagnosticSteps.length}</span>
                <span className="text-cyan-500">{Math.round(progressPercent)}% complete</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div
                  className="h-2 bg-cyan-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              {/* Step dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {diagnosticSteps.map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all duration-300 ${
                      i < stepIndex
                        ? 'w-3 h-3 bg-cyan-500'
                        : i === stepIndex
                        ? 'w-4 h-4 bg-cyan-500 ring-4 ring-cyan-100'
                        : 'w-3 h-3 bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question + options */}
            <div className="px-8 py-8">
              <div className="mb-6 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-1">Remote Service Only</p>
                <p className="text-sm text-cyan-900">This wizard recommends remote support paths and remote triage for every issue type.</p>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentStep.question}</h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {currentStep.options.map((option) => {
                  const active = currentValue === option.value;
                  const Icon = optionIcons[option.value] || FaQuestionCircle;
                  return (
                    <button
                      type="button"
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      className={`flex items-center gap-3 p-4 text-left border-2 rounded-xl transition-all duration-200 ${
                        active
                          ? 'border-cyan-500 bg-cyan-50 text-gray-900 shadow-sm'
                          : 'border-gray-200 hover:border-cyan-300 hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className={`shrink-0 w-9 h-9 flex items-center justify-center rounded-lg ${
                        active ? 'bg-cyan-500 text-gray-900' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-sm">{option.label}</span>
                      {active && <FaCheckCircle className="w-4 h-4 text-cyan-500 ml-auto shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="px-8 pb-8 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleBack}
                disabled={stepIndex === 0}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <FaChevronLeft className="w-3 h-3" /> Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!currentValue}
                className="flex items-center gap-2 px-7 py-2.5 text-sm font-semibold text-gray-900 bg-cyan-500 rounded-full hover:bg-cyan-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
              >
                {stepIndex === diagnosticSteps.length - 1 ? 'See Recommendation' : 'Next'}
                <FaChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        ) : (
          /* ── Results ── */
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">

            {/* Success header */}
            <div className="bg-gray-900 px-8 py-8 text-white text-center">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-1">We Found Your Match!</h2>
              <p className="text-cyan-100 text-sm">Based on your answers, here's the best path forward.</p>
            </div>

            <div className="px-8 py-8 space-y-6">

              {/* Recommended service */}
              <div className="p-5 bg-cyan-50 border-2 border-cyan-200 rounded-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-1">Recommended Service</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{recommendation.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{recommendation.reason}</p>
                <p className="text-xs font-semibold text-cyan-700 mt-3">Service mode: Remote support only</p>
              </div>

              {/* Answers summary */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Your Answers</p>
                <div className="grid grid-cols-2 gap-3">
                  {diagnosticSteps.map((step) => (
                    <div key={step.id} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <p className="text-xs text-gray-400 mb-0.5">{step.question}</p>
                      <p className="text-sm font-semibold text-gray-800">{optionLabelMap[step.id]?.[answers[step.id]]}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {recommendation.notes.length > 0 && (
                <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <FaExclamationTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                    <h4 className="font-bold text-amber-900">Important Notes</h4>
                  </div>
                  <ul className="space-y-2">
                    {recommendation.notes.map((note) => (
                      <li key={note} className="flex items-start gap-2 text-sm text-amber-900">
                        <FaCheck className="w-3 h-3 mt-0.5 shrink-0 text-amber-600" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quick tech eligible */}
              {recommendation.quickTechEligible && (
                <div className="p-5 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <FaBolt className="w-4 h-4 text-green-600 shrink-0" />
                    <h4 className="font-bold text-green-900">Fast Option Available</h4>
                  </div>
                  <p className="text-sm text-green-800 mb-3">
                    You may qualify for Quick Tech Help — a 15-minute remote session for faster first response.
                  </p>
                  <Link to="/quick-tech-help" className="text-sm font-semibold text-green-700 hover:text-green-900 underline">
                    View Quick Tech Help →
                  </Link>
                </div>
              )}

              {/* CTA buttons */}
              <div className="pt-2 space-y-3">
                <Link
                  to={recommendation.route}
                  className="flex items-center justify-center gap-2 w-full py-3 font-bold text-gray-900 bg-cyan-500 rounded-xl hover:bg-cyan-400 transition-colors shadow-sm"
                >
                  Go to Recommended Service <FaChevronRight className="w-3 h-3" />
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/book-service"
                    className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors"
                  >
                    Book Remote Service
                  </Link>
                  <Link
                    to="/contact"
                    state={contactPrefillState}
                    className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <FaEnvelope className="w-3.5 h-3.5" /> Contact Us
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:3219535199"
                    className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-cyan-600 bg-cyan-50 border border-cyan-200 rounded-xl hover:bg-cyan-100 transition-colors"
                  >
                    <FaPhoneAlt className="w-3.5 h-3.5" /> Call Remote Support
                  </a>
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-gray-500 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <FaRedo className="w-3 h-3" /> Start Over
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default DiagnoseMyIssue;
