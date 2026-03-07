import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const estimatorSteps = [
  {
    id: 'issueType',
    question: 'What kind of issue are you trying to fix?',
    options: [
      { value: 'slow', label: 'Slow computer performance' },
      { value: 'malware', label: 'Virus or malware cleanup' },
      { value: 'hardware', label: 'Hardware repair (screen, battery, power)' },
      { value: 'data', label: 'Data recovery or backup restoration' },
      { value: 'network', label: 'Network or Wi-Fi troubleshooting' },
      { value: 'business', label: 'Business IT issue (multiple users/devices)' },
    ],
  },
  {
    id: 'supportModel',
    question: 'Which support model do you prefer?',
    options: [
      { value: 'remote', label: 'Remote support first' },
      { value: 'onsite', label: 'On-site visit' },
      { value: 'shop', label: 'Drop-off / in-shop service' },
    ],
  },
  {
    id: 'urgency',
    question: 'How soon do you need service?',
    options: [
      { value: 'same-day', label: 'Same day' },
      { value: 'standard', label: 'Within 2-3 days' },
      { value: 'flexible', label: 'Flexible schedule' },
    ],
  },
  {
    id: 'deviceCount',
    question: 'How many devices are involved?',
    options: [
      { value: 'one', label: '1 device' },
      { value: 'two-five', label: '2-5 devices' },
      { value: 'six-plus', label: '6+ devices' },
    ],
  },
  {
    id: 'customerType',
    question: 'Who is this estimate for?',
    options: [
      { value: 'home', label: 'Home user' },
      { value: 'business', label: 'Business' },
    ],
  },
];

const optionLabelMap = estimatorSteps.reduce((acc, step) => {
  const optionMap = step.options.reduce((map, option) => {
    map[option.value] = option.label;
    return map;
  }, {});
  acc[step.id] = optionMap;
  return acc;
}, {});

const issueProfiles = {
  slow: {
    title: 'Software Troubleshooting',
    route: '/residential-support/software-troubleshooting',
    bookServiceType: 'Technical Support and Maintenance',
    baseMin: 89,
    baseMax: 159,
    reason: 'Performance issues are typically resolved through diagnostics, cleanup, and optimization.',
  },
  malware: {
    title: 'Virus and Malware Removal',
    route: '/residential-support/virus-malware-removal',
    bookServiceType: 'Cybersecurity',
    baseMin: 109,
    baseMax: 229,
    reason: 'Security incidents require cleanup, hardening, and verification steps before normal use.',
  },
  hardware: {
    title: 'PC and Laptop Repairs',
    route: '/residential-support/pc-laptop-repairs',
    bookServiceType: 'Technical Support and Maintenance',
    baseMin: 95,
    baseMax: 289,
    reason: 'Hardware repairs vary by parts and labor, so diagnosis determines the final quote.',
  },
  data: {
    title: 'Data Recovery',
    route: '/residential-support/data-recovery',
    bookServiceType: 'Data Backup and Recovery',
    baseMin: 129,
    baseMax: 399,
    reason: 'Recovery pricing depends on storage condition and urgency, with safer first-pass diagnostics.',
  },
  network: {
    title: 'Network Setup and Support',
    route: '/residential-support/network-setup-support',
    bookServiceType: 'Network Setup',
    baseMin: 95,
    baseMax: 249,
    reason: 'Network issues often involve router, ISP, and device-side troubleshooting in one visit.',
  },
  business: {
    title: 'Business IT Services',
    route: '/business-services',
    bookServiceType: 'IT Support',
    baseMin: 149,
    baseMax: 499,
    reason: 'Business environments usually need multi-device analysis and continuity-focused planning.',
  },
};

const supportModifiers = {
  remote: { min: -15, max: -5 },
  onsite: { min: 40, max: 90 },
  shop: { min: 0, max: 20 },
};

const urgencyModifiers = {
  'same-day': { min: 20, max: 70 },
  standard: { min: 0, max: 0 },
  flexible: { min: -10, max: 0 },
};

const customerModifiers = {
  home: { min: 0, max: 0 },
  business: { min: 35, max: 110 },
};

const deviceMultipliers = {
  one: 1,
  'two-five': 1.45,
  'six-plus': 2.3,
};

const roundToNearest5 = (value) => Math.max(25, Math.round(value / 5) * 5);

const calculateEstimate = (answers) => {
  const profile = issueProfiles[answers.issueType] || issueProfiles.slow;
  const support = supportModifiers[answers.supportModel] || supportModifiers.shop;
  const urgency = urgencyModifiers[answers.urgency] || urgencyModifiers.standard;
  const customer = customerModifiers[answers.customerType] || customerModifiers.home;
  const multiplier = deviceMultipliers[answers.deviceCount] || 1;

  const baseLow = profile.baseMin + support.min + urgency.min + customer.min;
  const baseHigh = profile.baseMax + support.max + urgency.max + customer.max;

  const low = roundToNearest5(baseLow * multiplier);
  const high = roundToNearest5(baseHigh * multiplier);

  const rangeLabel = answers.deviceCount === 'six-plus' ? `$${low}+` : `$${low} - $${high}`;

  return {
    ...profile,
    low,
    high,
    rangeLabel,
    quickOption: answers.supportModel === 'remote' && ['slow', 'malware', 'network'].includes(answers.issueType),
  };
};

const buildEstimateSummary = (answers, result) => {
  const safeLabel = (stepId) => optionLabelMap[stepId]?.[answers[stepId]] || 'Not provided';
  return [
    'Price Estimator Summary',
    `Estimated Range: ${result.rangeLabel}`,
    `Recommended Service: ${result.title}`,
    `Recommended Path: https://24x7techoncall.com${result.route}`,
    '',
    'Selections:',
    `- Issue Type: ${safeLabel('issueType')}`,
    `- Support Model: ${safeLabel('supportModel')}`,
    `- Urgency: ${safeLabel('urgency')}`,
    `- Device Count: ${safeLabel('deviceCount')}`,
    `- Customer Type: ${safeLabel('customerType')}`,
    '',
    `Recommendation Notes: ${result.reason}`,
    'Note: Final quote is confirmed after live diagnosis and scope validation.',
  ].join('\n');
};

function PriceEstimator() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const canonicalUrl = 'https://24x7techoncall.com/price-estimator';
  const isComplete = stepIndex >= estimatorSteps.length;
  const safeStepIndex = Math.min(stepIndex, estimatorSteps.length - 1);
  const currentStep = estimatorSteps[safeStepIndex];
  const currentValue = isComplete ? null : answers[currentStep.id];
  const progressPercent = ((safeStepIndex + 1) / estimatorSteps.length) * 100;

  const result = useMemo(() => {
    if (!isComplete) {
      return null;
    }
    return calculateEstimate(answers);
  }, [answers, isComplete]);

  const prefillState = useMemo(() => {
    if (!result) {
      return null;
    }

    return {
      prefill: {
        source: 'price-estimator',
        serviceType: result.bookServiceType,
        recommendedService: result.title,
        recommendedRoute: result.route,
        estimatedRange: result.rangeLabel,
        message: buildEstimateSummary(answers, result),
      },
    };
  }, [answers, result]);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are these computer repair prices final?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The estimator provides a practical range. Final pricing is confirmed after diagnosis, device condition, parts needs, and scope are validated.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide same-day service in Nationwide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, same-day options are often available for eligible issues. Contact us or submit a booking request to confirm current availability.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use this estimator for business IT support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The estimator includes business scenarios and can prefill your booking request with scope details for faster triage.',
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
        item: 'https://24x7techoncall.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Price Estimator',
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
        <title>Computer Repair Price Estimator | 24/7 Tech On Call</title>
        <meta
          name="description"
          content="Get a fast local computer repair price range estimate for Nationwide. Compare support types and submit a pre-filled booking request."
        />
        <meta
          name="keywords"
          content="computer repair price estimator, computer repair cost Palm Bay, laptop repair cost Melbourne FL, IT support pricing estimate, virus removal cost near me"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Computer Repair Price Estimator | 24/7 Tech On Call" />
        <meta
          property="og:description"
          content="Estimate your repair price range in minutes and send pre-filled details to our support team."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Computer Repair Price Estimator | 24/7 Tech On Call" />
        <meta
          name="twitter:description"
          content="Use our interactive estimator to get a practical service price range."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="py-16 text-white bg-gray-900 border-t-4 border-cyan-500">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-3 text-4xl font-bold">Price Range Estimator</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Get a practical local estimate in under a minute. Final pricing is confirmed after diagnosis.
          </p>
        </div>
      </section>

      <section className="container px-4 py-10 mx-auto">
        {!isComplete ? (
          <div className="max-w-3xl p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
                <span>
                  Step {safeStepIndex + 1} of {estimatorSteps.length}
                </span>
                <span>{Math.round(progressPercent)}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 transition-all duration-300 bg-indigo-600 rounded-full"
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
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                        : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
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
                disabled={safeStepIndex === 0}
                className="px-5 py-2 font-semibold text-gray-700 bg-gray-200 rounded disabled:opacity-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!currentValue}
                className="px-5 py-2 font-semibold text-white bg-indigo-600 rounded disabled:opacity-50"
              >
                {safeStepIndex === estimatorSteps.length - 1 ? 'See Estimate' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Estimated Price Range</h2>
            <div className="p-4 mb-5 text-center border border-indigo-200 rounded bg-indigo-50">
              <p className="text-sm font-medium tracking-wide text-indigo-700 uppercase">Estimated Range</p>
              <p className="text-4xl font-extrabold text-indigo-900">{result.rangeLabel}</p>
              <p className="mt-2 text-sm text-indigo-900">
                Final quote is confirmed after diagnosis, parts review, and full scope validation.
              </p>
            </div>

            <div className="p-4 mb-5 border border-cyan-200 rounded bg-cyan-50">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Recommended Service: {result.title}</h3>
              <p className="text-sm text-gray-900">{result.reason}</p>
            </div>

            <div className="grid gap-4 p-4 mb-5 border border-gray-200 rounded bg-gray-50 sm:grid-cols-2">
              {estimatorSteps.map((step) => (
                <div key={step.id}>
                  <p className="text-xs tracking-wide text-gray-500 uppercase">{step.question}</p>
                  <p className="font-medium text-gray-800">{optionLabelMap[step.id]?.[answers[step.id]]}</p>
                </div>
              ))}
            </div>

            {result.quickOption && (
              <div className="p-4 mb-5 border border-green-200 rounded bg-green-50">
                <h4 className="mb-2 font-semibold text-green-900">Quick Option Available</h4>
                <p className="text-sm text-green-900">
                  Your selections may qualify for Quick Tech Help remote-first support.
                </p>
                <Link to="/quick-tech-help" className="inline-block mt-3 text-green-800 underline">
                  View Quick Tech Help
                </Link>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/book-service"
                state={prefillState}
                className="px-5 py-2 font-semibold text-center text-white bg-indigo-600 rounded hover:bg-indigo-700"
              >
                Book With This Estimate
              </Link>
              <Link
                to="/contact"
                state={prefillState}
                className="px-5 py-2 font-semibold text-center text-white bg-gray-700 rounded hover:bg-gray-800"
              >
                Send Estimate to Support
              </Link>
              <Link
                to={result.route}
                className="px-5 py-2 font-semibold text-center text-gray-900 bg-cyan-500 rounded hover:bg-cyan-400"
              >
                View Recommended Service
              </Link>
              <a
                href="tel:3219535199"
                className="px-5 py-2 font-semibold text-center text-cyan-600 bg-cyan-100 rounded hover:bg-cyan-100"
              >
                Call (321) 953-5199
              </a>
              <button
                type="button"
                onClick={handleRestart}
                className="px-5 py-2 font-semibold text-gray-700 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
              >
                New Estimate
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default PriceEstimator;
