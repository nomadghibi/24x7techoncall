import React from 'react';
import heroImage from '../assets/optimized-hero/subscribe-1152.jpg'; // Add a suitable hero image for the newsletter page
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const monthlyNewsletters2025 = [
  {
    id: '2026-01',
    title: 'January 2026 - Agents Become Co-Workers',
    publishDate: 'January 2026',
    summary: 'Delegation Mode playbook: how small businesses use agentic AI workflows with approvals, audit trails, and controlled permissions.',
    seoFocus: 'agentic AI workflows, IT support Palm Bay, business automation Melbourne FL',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2026-01-agents-become-co-workers.pdf',
  },
  {
    id: '2025-01',
    title: 'January 2025 - Agents Become Co-Workers',
    publishDate: 'January 2025',
    summary: 'Agentic AI moves from pilots to production with workflow ownership, audit trails, and safer delegation.',
    seoFocus: 'agentic AI workflows, IT support Palm Bay, business automation Melbourne FL',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-01-agents-become-co-workers.pdf',
  },
  {
    id: '2025-02',
    title: 'February 2025 - AI Security Arms Race',
    publishDate: 'February 2025',
    summary: 'Identity-first security planning for smarter phishing, deepfake scams, and stronger verification controls.',
    seoFocus: 'MFA setup, phishing protection, cybersecurity Palm Bay',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-02-ai-security-arms-race.pdf',
  },
  {
    id: '2025-03',
    title: 'March 2025 - AI PCs and Local Inference',
    publishDate: 'March 2025',
    summary: 'How to reduce cloud costs and improve privacy with practical on-device AI workflows.',
    seoFocus: 'AI PC setup, local inference, managed IT Melbourne FL',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-03-ai-pcs-and-local-inference.pdf',
  },
  {
    id: '2025-04',
    title: 'April 2025 - Robots in Real Businesses',
    publishDate: 'April 2025',
    summary: 'Robotics adoption strategy for measurable ROI in logistics, service operations, and repetitive tasks.',
    seoFocus: 'robotics ROI, IT consulting Palm Bay, operations automation',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-04-robots-in-real-businesses.pdf',
  },
  {
    id: '2025-05',
    title: 'May 2025 - Customer Support Gets Rebuilt',
    publishDate: 'May 2025',
    summary: 'Building resolution pipelines with AI triage, better knowledge bases, and transparent human handoffs.',
    seoFocus: 'AI customer support, helpdesk optimization, IT support Melbourne FL',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-05-customer-support-gets-rebuilt.pdf',
  },
  {
    id: '2025-06',
    title: 'June 2025 - Privacy and Compliance Catch Up',
    publishDate: 'June 2025',
    summary: 'Operational privacy controls, audit logs, and AI data boundaries for small business compliance.',
    seoFocus: 'AI compliance policy, audit logs, managed IT Palm Bay',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-06-privacy-and-compliance-catch-up.pdf',
  },
  {
    id: '2025-07',
    title: 'July 2025 - Post-Quantum Migration Planning',
    publishDate: 'July 2025',
    summary: 'A practical roadmap for encryption inventory, crypto agility, and phased post-quantum readiness.',
    seoFocus: 'post-quantum planning, encryption inventory, Brevard County IT consulting',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-07-post-quantum-migration-planning.pdf',
  },
  {
    id: '2025-08',
    title: 'August 2025 - Green Compute and Efficiency',
    publishDate: 'August 2025',
    summary: 'How to control AI energy and cloud spend with smarter model routing and usage dashboards.',
    seoFocus: 'AI cost optimization, green compute strategy, IT cost control Palm Bay',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-08-green-compute-and-efficiency.pdf',
  },
  {
    id: '2025-09',
    title: 'September 2025 - The Interface Evolves',
    publishDate: 'September 2025',
    summary: 'Turning repetitive workflows into SOP-driven automation with intent-based interfaces.',
    seoFocus: 'workflow SOP automation, multimodal interfaces, business IT productivity',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-09-the-interface-evolves.pdf',
  },
  {
    id: '2025-10',
    title: 'October 2025 - Fraud, Trust, and Verification',
    publishDate: 'October 2025',
    summary: 'Designing trust signals and verification steps that reduce fraud, chargebacks, and support burden.',
    seoFocus: 'fraud prevention workflows, trust signals, cybersecurity Melbourne FL',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-10-fraud-trust-and-verification.pdf',
  },
  {
    id: '2025-11',
    title: 'November 2025 - Automation for Small Business',
    publishDate: 'November 2025',
    summary: 'Practical CRM and follow-up automations that drive faster lead response and measurable growth.',
    seoFocus: 'small business automation, CRM workflows, managed IT Palm Bay',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-11-automation-for-small-business.pdf',
  },
  {
    id: '2025-12',
    title: 'December 2025 - From Tools to Systems',
    publishDate: 'December 2025',
    summary: 'Year-end framework for KPI-driven automation, stack consolidation, and stronger governance.',
    seoFocus: 'automation KPI tracking, stack consolidation, business IT strategy',
    file: '/newsletters/best-computer-tech-monthly-newsletter-2025-12-from-tools-to-systems.pdf',
  },
];

function Subscribe() {
  const navigate = useNavigate();
  const canonicalUrl = 'https://bestcomputertec.com/subscribe';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://bestcomputertec.com${heroImage || ''}`;
  const newsletterSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Computer Tech 2025-2026 Monthly Newsletter Archive',
    itemListElement: monthlyNewsletters2025.map((issue, index) => ({
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

  const handleSubscribe = (event) => {
    event.preventDefault();
    // Handle subscription logic here
    alert('Thanks for subscribing. Check your inbox for updates and helpful tips.');
    navigate('/');
  };

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
      <section className="py-20 text-white bg-gray-900 hero-section" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold leading-tight">Subscribe to Our Newsletter</h1>
          <p className="mb-8 text-xl">Stay updated with the latest news and special offers.</p>
        </div>
      </section>
      <div className="container p-8 mx-auto">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md">
          <div className="p-6 text-center">
            <h2 className="mb-4 text-3xl font-semibold">Join Our Mailing List</h2>
            <p className="mb-8 text-gray-700">Subscribe to our newsletter to receive the latest updates and promotions.</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your Email Address"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>

        <section className="max-w-5xl mx-auto mt-12">
          <h2 className="mb-4 text-3xl font-semibold text-center">Monthly Newsletter Downloads</h2>
          <p className="mb-8 text-center text-gray-700">
            Download each monthly issue with practical guidance for local computer repair, IT support, cybersecurity, and business operations.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {monthlyNewsletters2025.map((issue) => (
              <article key={issue.id} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{issue.title}</h3>
                <p className="mb-3 text-sm text-gray-600">Published: {issue.publishDate}</p>
                <p className="mb-3 text-gray-700">{issue.summary}</p>
                <p className="mb-4 text-sm text-gray-600">
                  <strong>SEO focus:</strong> {issue.seoFocus}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={issue.file}
                    download
                    className="px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Download PDF
                  </a>
                  <a
                    href={issue.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 font-semibold text-blue-700 bg-blue-100 rounded hover:bg-blue-200"
                  >
                    Preview
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Subscribe;
