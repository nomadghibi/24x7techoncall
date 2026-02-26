import React, { useState } from 'react';
import heroImage from '../assets/optimized-hero/subscribe-1152.jpg';
import { Helmet } from 'react-helmet-async';

const newsletters = [
  {
    id: '2026-02',
    title: 'Identity-First Security',
    publishDate: 'February 2026',
    year: 2026,
    month: 2,
    summary:
      'Owner-friendly anti-fraud playbook for AI-powered phishing, invoice scams, and identity verification workflows.',
    category: 'Cybersecurity',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2026-02-identity-first-security-beating-ai-powered-phishing-and-fraud.pdf',
  },
  {
    id: '2026-01',
    title: 'Agents Become Co-Workers',
    publishDate: 'January 2026',
    year: 2026,
    month: 1,
    summary:
      'Delegation Mode playbook: how small businesses use agentic AI workflows with approvals, audit trails, and controlled permissions.',
    category: 'AI & Automation',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2026-01-agents-become-co-workers.pdf',
  },
  {
    id: '2025-12',
    title: 'From Tools to Systems',
    publishDate: 'December 2025',
    year: 2025,
    month: 12,
    summary:
      'Year-end framework for KPI-driven automation, stack consolidation, and stronger governance.',
    category: 'Strategy',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-12-from-tools-to-systems.pdf',
  },
  {
    id: '2025-11',
    title: 'Automation for Small Business',
    publishDate: 'November 2025',
    year: 2025,
    month: 11,
    summary:
      'Practical CRM and follow-up automations that drive faster lead response and measurable growth.',
    category: 'AI & Automation',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-11-automation-for-small-business.pdf',
  },
  {
    id: '2025-10',
    title: 'Fraud, Trust, and Verification',
    publishDate: 'October 2025',
    year: 2025,
    month: 10,
    summary:
      'Designing trust signals and verification steps that reduce fraud, chargebacks, and support burden.',
    category: 'Cybersecurity',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-10-fraud-trust-and-verification.pdf',
  },
  {
    id: '2025-09',
    title: 'The Interface Evolves',
    publishDate: 'September 2025',
    year: 2025,
    month: 9,
    summary:
      'Turning repetitive workflows into SOP-driven automation with intent-based interfaces.',
    category: 'AI & Automation',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-09-the-interface-evolves.pdf',
  },
  {
    id: '2025-08',
    title: 'Green Compute and Efficiency',
    publishDate: 'August 2025',
    year: 2025,
    month: 8,
    summary:
      'How to control AI energy and cloud spend with smarter model routing and usage dashboards.',
    category: 'Strategy',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-08-green-compute-and-efficiency.pdf',
  },
  {
    id: '2025-07',
    title: 'Post-Quantum Migration Planning',
    publishDate: 'July 2025',
    year: 2025,
    month: 7,
    summary:
      'A practical roadmap for encryption inventory, crypto agility, and phased post-quantum readiness.',
    category: 'Cybersecurity',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-07-post-quantum-migration-planning.pdf',
  },
  {
    id: '2025-06',
    title: 'Privacy and Compliance Catch Up',
    publishDate: 'June 2025',
    year: 2025,
    month: 6,
    summary:
      'Operational privacy controls, audit logs, and AI data boundaries for small business compliance.',
    category: 'Privacy & Compliance',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-06-privacy-and-compliance-catch-up.pdf',
  },
  {
    id: '2025-05',
    title: 'Customer Support Gets Rebuilt',
    publishDate: 'May 2025',
    year: 2025,
    month: 5,
    summary:
      'Building resolution pipelines with AI triage, better knowledge bases, and transparent human handoffs.',
    category: 'Operations',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-05-customer-support-gets-rebuilt.pdf',
  },
  {
    id: '2025-04',
    title: 'Robots in Real Businesses',
    publishDate: 'April 2025',
    year: 2025,
    month: 4,
    summary:
      'Robotics adoption strategy for measurable ROI in logistics, service operations, and repetitive tasks.',
    category: 'AI & Automation',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-04-robots-in-real-businesses.pdf',
  },
  {
    id: '2025-03',
    title: 'AI PCs and Local Inference',
    publishDate: 'March 2025',
    year: 2025,
    month: 3,
    summary:
      'How to reduce cloud costs and improve privacy with practical on-device AI workflows.',
    category: 'Hardware',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-03-ai-pcs-and-local-inference.pdf',
  },
  {
    id: '2025-02',
    title: 'AI Security Arms Race',
    publishDate: 'February 2025',
    year: 2025,
    month: 2,
    summary:
      'Identity-first security planning for smarter phishing, deepfake scams, and stronger verification controls.',
    category: 'Cybersecurity',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-02-ai-security-arms-race.pdf',
  },
  {
    id: '2025-01',
    title: 'Agents Become Co-Workers',
    publishDate: 'January 2025',
    year: 2025,
    month: 1,
    summary:
      'Agentic AI moves from pilots to production with workflow ownership, audit trails, and safer delegation.',
    category: 'AI & Automation',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-01-agents-become-co-workers.pdf',
  },
];

const categoryStyles = {
  'Cybersecurity':      { border: 'border-red-500',    badge: 'bg-red-100 text-red-700',    icon: '🛡️' },
  'AI & Automation':    { border: 'border-purple-500', badge: 'bg-purple-100 text-purple-700', icon: '🤖' },
  'Strategy':           { border: 'border-indigo-500', badge: 'bg-indigo-100 text-indigo-700', icon: '📈' },
  'Privacy & Compliance': { border: 'border-green-500', badge: 'bg-green-100 text-green-700', icon: '🔒' },
  'Hardware':           { border: 'border-orange-500', badge: 'bg-orange-100 text-orange-700', icon: '💻' },
  'Operations':         { border: 'border-cyan-500',   badge: 'bg-cyan-100 text-cyan-600',   icon: '⚙️' },
};

// Group newsletters by year (already sorted newest → oldest)
function groupByYear(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {});
}

// Newest issue is always first
const featuredIssue = newsletters[0];
const archiveIssues = newsletters.slice(1);
const groupedArchive = groupByYear(archiveIssues);
const sortedYears = Object.keys(groupedArchive).sort((a, b) => b - a);

function NewsletterCard({ issue }) {
  const style = categoryStyles[issue.category] || categoryStyles['Operations'];
  return (
    <article
      className={`bg-white rounded-lg shadow-sm border border-gray-200 border-l-4 ${style.border} flex flex-col overflow-hidden hover:shadow-md transition-shadow`}
    >
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${style.badge}`}>
            <span>{style.icon}</span>
            {issue.category}
          </span>
          <span className="text-xs text-gray-400">{issue.publishDate}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{issue.title}</h3>
        <p className="text-sm text-gray-600 flex-1 mb-4">{issue.summary}</p>
        <div className="flex gap-2 mt-auto">
          <a
            href={issue.file}
            download
            className="flex-1 text-center px-3 py-2 text-sm font-semibold text-gray-900 bg-cyan-500 rounded hover:bg-cyan-400 transition-colors"
          >
            Download PDF
          </a>
          <a
            href={issue.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-3 py-2 text-sm font-semibold text-cyan-600 bg-cyan-50 border border-cyan-200 rounded hover:bg-cyan-100 transition-colors"
          >
            Preview
          </a>
        </div>
      </div>
    </article>
  );
}

function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const canonicalUrl = 'https://bestcomputertec.com/subscribe';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://bestcomputertec.com${heroImage || ''}`;

  const newsletterSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Computer Tech 2025–2026 Monthly Newsletter Archive',
    itemListElement: newsletters.map((issue, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: issue.title,
        datePublished: issue.publishDate,
        url: `https://bestcomputertec.com${issue.file}`,
        description: issue.summary,
      },
    })),
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
  };

  const featuredStyle = categoryStyles[featuredIssue.category] || categoryStyles['Operations'];

  return (
    <div>
      <Helmet>
        <title>Subscribe to Our Newsletter | Best Computer Tech</title>
        <meta
          name="description"
          content="Subscribe for monthly IT newsletters and download practical issues on AI operations, cybersecurity, compliance, and business automation for Palm Bay and Melbourne, FL."
        />
        <meta
          name="keywords"
          content="monthly IT newsletter, Palm Bay technology updates, Melbourne FL cybersecurity newsletter, business automation tips"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Subscribe to Our Newsletter | Best Computer Tech" />
        <meta
          property="og:description"
          content="Join our newsletter for the latest tech support tips and offers."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Subscribe to Our Newsletter | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Download monthly newsletters with practical AI, cybersecurity, and operations guidance."
        />
        <meta name="twitter:image" content={pageImage} />
        <script type="application/ld+json">{JSON.stringify(newsletterSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section
        className="py-20 text-white bg-gray-900 hero-section"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="mb-4 text-5xl font-bold leading-tight">Subscribe to Our Newsletter</h1>
          <p className="mb-8 text-xl">Monthly IT insights for Palm Bay &amp; Melbourne, FL businesses.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">

        {/* Subscription Form */}
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md mb-14">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">Join Our Mailing List</h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              Get the latest issues delivered to your inbox — free, every month.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-6">
                <div className="text-5xl">✅</div>
                <p className="text-lg font-semibold text-gray-800">You're subscribed!</p>
                <p className="text-sm text-gray-500 text-center">
                  Thanks for joining. Check your inbox for your first issue and helpful tips.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-cyan-500 underline hover:text-gray-700"
                >
                  Subscribe another address
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="sub-name">
                    Your Name
                  </label>
                  <input
                    id="sub-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="First and last name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="sub-email">
                    Email Address
                  </label>
                  <input
                    id="sub-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 font-semibold text-gray-900 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition-colors"
                >
                  Subscribe Now
                </button>
                <p className="text-xs text-gray-400 text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Newsletter Archive */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Newsletter Archive</h2>
          <p className="text-gray-500 text-center mb-10">
            Download any issue below — practical guidance on IT, cybersecurity, AI, and business operations.
          </p>

          {/* Category Legend */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {Object.entries(categoryStyles).map(([label, style]) => (
              <span
                key={label}
                className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full ${style.badge}`}
              >
                {style.icon} {label}
              </span>
            ))}
          </div>

          {/* Featured Latest Issue */}
          <div className={`bg-white rounded-xl shadow-md border-l-8 ${featuredStyle.border} border border-gray-200 mb-10 overflow-hidden`}>
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="bg-cyan-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Latest Issue
                  </span>
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${featuredStyle.badge}`}>
                    {featuredStyle.icon} {featuredIssue.category}
                  </span>
                  <span className="text-sm text-gray-400">{featuredIssue.publishDate}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{featuredIssue.title}</h3>
                <p className="text-gray-600">{featuredIssue.summary}</p>
              </div>
              <div className="flex flex-col gap-3 min-w-[160px]">
                <a
                  href={featuredIssue.file}
                  download
                  className="text-center px-5 py-3 font-semibold text-gray-900 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition-colors"
                >
                  Download PDF
                </a>
                <a
                  href={featuredIssue.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-5 py-3 font-semibold text-cyan-600 bg-cyan-50 border border-cyan-200 rounded-lg hover:bg-cyan-100 transition-colors"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>

          {/* Archive grouped by year */}
          {sortedYears.map((year) => (
            <div key={year} className="mb-10">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-bold text-gray-700 whitespace-nowrap">{year} Issues</h3>
                <div className="flex-1 border-t border-gray-200" />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {groupedArchive[year].map((issue) => (
                  <NewsletterCard key={issue.id} issue={issue} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Subscribe;
