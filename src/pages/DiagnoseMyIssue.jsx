import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const diagnosticSteps = [
  {
    id: 'deviceType',
    question: 'What device do you need help with?',
    options: [
      { value: 'desktop', label: 'Desktop PC' },
      { value: 'laptop', label: 'Laptop' },
      { value: 'mac', label: 'Mac' },
      { value: 'not-sure', label: 'Not sure' },
    ],
  },
  {
    id: 'primaryIssue',
    question: 'What is the main issue?',
    options: [
      { value: 'no-power', label: "Won't turn on" },
      { value: 'slow', label: 'Very slow performance' },
      { value: 'malware', label: 'Virus or pop-up alerts' },
      { value: 'hardware', label: 'Broken screen or hardware damage' },
      { value: 'network', label: 'Wi-Fi or internet issues' },
      { value: 'data-loss', label: 'Lost files or data access issue' },
      { value: 'business', label: 'Business multi-device or network issue' },
    ],
  },
  {
    id: 'urgency',
    question: 'How urgent is this issue?',
    options: [
      { value: 'today', label: 'Need help today' },
      { value: 'week', label: 'Within this week' },
      { value: 'flexible', label: 'Flexible timing' },
    ],
  },
  {
    id: 'dataImportance',
    question: 'How important is recovering your files?',
    options: [
      { value: 'critical', label: 'Critical, I need files ASAP' },
      { value: 'important', label: 'Important, but not urgent' },
      { value: 'low', label: 'Not a major concern' },
    ],
  },
  {
    id: 'supportPreference',
    question: 'What support style do you prefer?',
    options: [
      { value: 'remote', label: 'Remote support first' },
      { value: 'onsite', label: 'On-site support' },
      { value: 'shop', label: 'Drop-off / in-shop repair' },
      { value: 'either', label: 'Whichever is fastest' },
    ],
  },
  {
    id: 'customerType',
    question: 'Who is this for?',
    options: [
      { value: 'home', label: 'Home user' },
      { value: 'small-business', label: 'Small business' },
    ],
  },
];

const optionLabelMap = diagnosticSteps.reduce((acc, step) => {
  const mapForStep = step.options.reduce((map, option) => {
    map[option.value] = option.label;
    return map;
  }, {});
  acc[step.id] = mapForStep;
  return acc;
}, {});

const getRecommendation = (answers) => {
  const issueToService = {
    'no-power': {
      title: 'PC and Laptop Repairs',
      route: '/residential-support/pc-laptop-repairs',
      reason: 'Power issues usually require hardware diagnostics and repair.',
    },
    slow: {
      title: 'Software Troubleshooting',
      route: '/residential-support/software-troubleshooting',
      reason: 'Slow systems are often resolved through cleanup, updates, and configuration fixes.',
    },
    malware: {
      title: 'Virus and Malware Removal',
      route: '/residential-support/virus-malware-removal',
      reason: 'Malware symptoms need immediate cleanup and security hardening.',
    },
    hardware: {
      title: 'PC and Laptop Repairs',
      route: '/residential-support/pc-laptop-repairs',
      reason: 'Physical damage and component issues are best handled through hardware service.',
    },
    network: {
      title: 'Network Setup and Support',
      route: '/residential-support/network-setup-support',
      reason: 'Unstable internet and Wi-Fi issues usually need network-level troubleshooting.',
    },
    'data-loss': {
      title: 'Data Recovery',
      route: '/residential-support/data-recovery',
      reason: 'File loss needs recovery-first handling before major system changes.',
    },
    business: {
      title: 'Business IT Services',
      route: '/business-services',
      reason: 'Multi-device and office-wide issues are best solved with business IT support.',
    },
  };

  const selected = issueToService[answers.primaryIssue] || {
    title: 'Contact Support',
    route: '/contact',
    reason: 'A technician can help confirm the best service path.',
  };

  const quickTechEligible =
    answers.urgency === 'today' &&
    answers.supportPreference !== 'onsite' &&
    ['slow', 'malware', 'network'].includes(answers.primaryIssue);

  const notes = [];

  if (answers.dataImportance === 'critical') {
    notes.push('Avoid repeated restarts or DIY repairs until your important files are secured.');
  }

  if (answers.customerType === 'small-business') {
    notes.push('For business systems, ask for a prevention plan to reduce repeat downtime.');
  }

  if (answers.urgency === 'today') {
    notes.push('Based on your urgency, request same-day availability when you book.');
  }

  return {
    ...selected,
    quickTechEligible,
    notes,
  };
};

const buildDiagnosisSummary = (answers, recommendation) => {
  const safeLabel = (stepId) => optionLabelMap[stepId]?.[answers[stepId]] || 'Not provided';
  const lines = [
    'Diagnose My Issue Summary',
    `Recommended Service: ${recommendation.title}`,
    `Recommended Path: https://bestcomputertec.com${recommendation.route}`,
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
    recommendation.notes.forEach((note) => {
      lines.push(`- ${note}`);
    });
  }

  return lines.join('\n');
};

function DiagnoseMyIssue() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const canonicalUrl = 'https://bestcomputertec.com/diagnose-my-issue';
  const isComplete = stepIndex >= diagnosticSteps.length;
  const safeStepIndex = Math.min(stepIndex, diagnosticSteps.length - 1);
  const currentStep = diagnosticSteps[safeStepIndex];
  const currentValue = isComplete ? null : answers[currentStep.id];
  const progressPercent = ((safeStepIndex + 1) / diagnosticSteps.length) * 100;

  const recommendation = useMemo(() => {
    if (!isComplete) {
      return null;
    }
    return getRecommendation(answers);
  }, [answers, isComplete]);

  const contactPrefillState = useMemo(() => {
    if (!recommendation) {
      return null;
    }
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
      {
        '@type': 'Question',
        name: 'Do you offer same-day computer repair in Palm Bay and Melbourne?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, same-day service is often available depending on issue type and schedule. Contact us to confirm current availability.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help with virus removal and slow computer performance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide malware cleanup, security hardening, and system optimization for home and small business devices.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide remote and on-site support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide remote support for many software issues and on-site support for network, hardware, and office setup needs.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://bestcomputertec.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Diagnose My Issue',
        item: canonicalUrl,
      },
    ],
  };

  const handleSelect = (value) => {
    setAnswers((prev) => ({ ...prev, [currentStep.id]: value }));
  };

  const handleNext = () => {
    if (!currentValue) {
      return;
    }
    setStepIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleRestart = () => {
    setAnswers({});
    setStepIndex(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Diagnose My Issue | Computer Repair Near You | Best Computer Tech</title>
        <meta
          name="description"
          content="Use our step-by-step diagnosis wizard to find the right computer repair service in Palm Bay and Melbourne, FL. Fast recommendations for malware, slow PCs, data recovery, and network issues."
        />
        <meta
          name="keywords"
          content="computer repairs near you, computer repair near me, laptop repair near me, Palm Bay computer repair, Melbourne FL computer support, diagnose computer issue"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Diagnose My Issue | Best Computer Tech" />
        <meta
          property="og:description"
          content="Answer a few questions and get the right support path for your computer issue in Palm Bay and Melbourne."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Diagnose My Issue | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Find the right local repair service with our quick diagnosis wizard."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="py-16 text-white bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-3 text-4xl font-bold">Diagnose My Issue</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Answer a few quick questions and get the best support path for your issue.
          </p>
        </div>
      </section>

      <section className="container px-4 py-10 mx-auto">
        {!isComplete ? (
          <div className="max-w-3xl p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
                <span>
                  Step {stepIndex + 1} of {diagnosticSteps.length}
                </span>
                <span>{Math.round(progressPercent)}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 transition-all duration-300 bg-blue-600 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <h2 className="mb-6 text-2xl font-bold text-gray-900">{currentStep.question}</h2>

            <div className="grid gap-3 sm:grid-cols-2">
              {currentStep.options.map((option) => {
                const active = currentValue === option.value;
                return (
                  <button
                    type="button"
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`p-4 text-left border rounded-lg transition ${
                      active
                        ? 'border-blue-600 bg-blue-50 text-blue-900'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 mt-8 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={handleBack}
                disabled={stepIndex === 0}
                className="px-5 py-2 font-semibold text-gray-700 bg-gray-200 rounded disabled:opacity-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!currentValue}
                className="px-5 py-2 font-semibold text-white bg-blue-600 rounded disabled:opacity-50"
              >
                {stepIndex === diagnosticSteps.length - 1 ? 'See Recommendation' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Recommended Next Step</h2>
            <p className="mb-5 text-gray-700">{recommendation.reason}</p>

            <div className="p-4 mb-5 border border-blue-200 rounded bg-blue-50">
              <h3 className="mb-2 text-xl font-semibold text-blue-900">{recommendation.title}</h3>
              <p className="text-sm text-blue-900">
                Based on your answers, this service gives the fastest path to resolution.
              </p>
            </div>

            <div className="grid gap-4 p-4 mb-5 border border-gray-200 rounded bg-gray-50 sm:grid-cols-2">
              {diagnosticSteps.map((step) => (
                <div key={step.id}>
                  <p className="text-xs tracking-wide text-gray-500 uppercase">{step.question}</p>
                  <p className="font-medium text-gray-800">{optionLabelMap[step.id]?.[answers[step.id]]}</p>
                </div>
              ))}
            </div>

            {recommendation.notes.length > 0 && (
              <div className="p-4 mb-5 border border-yellow-200 rounded bg-yellow-50">
                <h4 className="mb-2 font-semibold text-yellow-900">Important Notes</h4>
                <ul className="space-y-1 text-sm text-yellow-900">
                  {recommendation.notes.map((note) => (
                    <li key={note}>- {note}</li>
                  ))}
                </ul>
              </div>
            )}

            {recommendation.quickTechEligible && (
              <div className="p-4 mb-5 border border-green-200 rounded bg-green-50">
                <h4 className="mb-2 font-semibold text-green-900">Fast Option Available</h4>
                <p className="text-sm text-green-900">
                  You may qualify for Quick Tech Help (15-minute remote support) for faster first response.
                </p>
                <Link to="/quick-tech-help" className="inline-block mt-3 text-green-800 underline">
                  View Quick Tech Help
                </Link>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to={recommendation.route}
                className="px-5 py-2 font-semibold text-center text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Go to Recommended Service
              </Link>
              <Link
                to="/book-service"
                className="px-5 py-2 font-semibold text-center text-white bg-green-600 rounded hover:bg-green-700"
              >
                Book Service
              </Link>
              <Link
                to="/contact"
                state={contactPrefillState}
                className="px-5 py-2 font-semibold text-center text-white bg-gray-700 rounded hover:bg-gray-800"
              >
                Contact Us
              </Link>
              <a
                href="tel:3219535199"
                className="px-5 py-2 font-semibold text-center text-blue-700 bg-blue-100 rounded hover:bg-blue-200"
              >
                Call (321) 953-5199
              </a>
              <button
                type="button"
                onClick={handleRestart}
                className="px-5 py-2 font-semibold text-gray-700 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default DiagnoseMyIssue;
