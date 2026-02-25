import React from 'react';
import heroImage from '../assets/optimized-hero/subscribe-1152.jpg'; // Add a suitable hero image for the newsletter page
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const newsletters2025 = [
  {
    id: '2025-q1',
    title: '2025 Q1 Local Security and Performance Brief',
    publishDate: 'January 2025',
    summary: 'Actionable guidance for computer repair prevention, endpoint hardening, and performance recovery for Palm Bay and Melbourne.',
    seoFocus: 'computer repair Palm Bay, IT support Melbourne FL, virus removal Palm Bay, computer tune up Melbourne',
    file: '/newsletters/best-computer-tech-newsletter-2025-q1-local-security-performance.pdf',
  },
  {
    id: '2025-q2',
    title: '2025 Q2 AI, Backup, and Cybersecurity Operations Brief',
    publishDate: 'April 2025',
    summary: 'Practical roadmap for AI adoption, backup resilience, and cybersecurity operations for small businesses in Brevard County.',
    seoFocus: 'managed IT services Palm Bay, business cybersecurity Melbourne FL, data backup and recovery Brevard County',
    file: '/newsletters/best-computer-tech-newsletter-2025-q2-ai-backup-cybersecurity.pdf',
  },
  {
    id: '2025-q3',
    title: '2025 Q3 Business Continuity and Endpoint Lifecycle Brief',
    publishDate: 'July 2025',
    summary: 'Mid-year execution plan for endpoint lifecycle planning, continuity drills, and IT service quality improvements.',
    seoFocus: 'business continuity planning Palm Bay, managed IT support Melbourne FL, endpoint lifecycle management Brevard County',
    file: '/newsletters/best-computer-tech-newsletter-2025-q3-business-continuity-endpoint-lifecycle.pdf',
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
    name: 'Best Computer Tech 2025 Newsletter Archive',
    itemListElement: newsletters2025.map((issue, index) => ({
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
          content="Subscribe to Best Computer Tech updates and download 2025 newsletters with local IT tips, cybersecurity checklists, and performance guidance for Palm Bay and Melbourne, FL."
        />
        <meta
          name="keywords"
          content="2025 tech newsletter PDF download, computer repair Palm Bay tips, IT support Melbourne FL updates, cybersecurity checklist newsletter"
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
          content="Download 2025 newsletters and stay updated with IT tips, cybersecurity advice, and local support guidance."
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
          <h2 className="mb-4 text-3xl font-semibold text-center">2025 Newsletter Downloads</h2>
          <p className="mb-8 text-center text-gray-700">
            Download our professional 2025 issues with practical guidance for local computer repair, IT support, cybersecurity, and operations.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {newsletters2025.map((issue) => (
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
