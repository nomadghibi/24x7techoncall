import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowRight, FaCalendarAlt, FaTag } from 'react-icons/fa';

import heroImage          from '../assets/optimized-blog/5-tips-512.jpg';
import protectImage       from '../assets/optimized-blog/protect-malware-512.jpg';
import seoImage           from '../assets/optimized-blog/seo-512.jpg';
import webspeedImage      from '../assets/optimized-blog/webspeed-512.jpg';
import qualityImage       from '../assets/optimized-blog/quality-content-512.jpg';
import backupImage        from '../assets/optimized-blog/backup-512.jpg';
import itSupportImage     from '../assets/optimized-blog/it-support-512.jpg';
import cyberImage         from '../assets/optimized-blog/business-cybersecurity-512.jpg';
import remoteImage        from '../assets/optimized-blog/remote-it-support-512.jpg';
import businessImage      from '../assets/optimized-blog/business-services-512.jpg';
import itConsultingImage  from '../assets/optimized-blog/it-consulting-512.jpg';
import dataRecoveryImage  from '../assets/optimized-blog/data-recovery-512.jpg';
import onlineSafetyImage  from '../assets/optimized-blog/online-safety-512.jpg';
import aiImage            from '../assets/optimized-blog/ai-optimized-512.jpg';
import ai2Image           from '../assets/optimized-blog/ai2-512.jpg';
import chatgptImage       from '../assets/optimized-blog/chatgpt-512.jpg';

// ── Category badge config ──────────────────────────────────────────────────
const categoryColors = {
  'Local Guide':    'bg-cyan-100 text-cyan-700',
  'AI & Tech':      'bg-purple-100 text-purple-700',
  'Computer Tips':  'bg-green-100 text-green-700',
  'Cybersecurity':  'bg-red-100 text-red-700',
  'Data & Backup':  'bg-amber-100 text-amber-700',
  'Business IT':    'bg-indigo-100 text-indigo-700',
  'Business & Web': 'bg-orange-100 text-orange-700',
  'Remote Support': 'bg-teal-100 text-teal-700',
};

// ── Blog posts ─────────────────────────────────────────────────────────────
const blogPosts = [
  {
    title:    'What Is Remote Computer Support? How It Works and Why Americans Are Choosing It',
    summary:  'Everything you need to know about remote computer support — how it works, what it fixes, and why it is the fastest way to get tech help in the USA.',
    link:     '/blog/what-is-remote-computer-support',
    date:     'March 7, 2026',
    image:    remoteImage,
    category: 'Remote Support',
    featured: true,
  },
  {
    title:    'Remote IT Support vs On-Site IT: Which Is Right for Your Business?',
    summary:  'Compare remote IT support and on-site IT by cost, speed, and use case to find the best model for your business in 2026.',
    link:     '/blog/remote-it-support-vs-on-site-it',
    date:     'March 7, 2026',
    image:    itSupportImage,
    category: 'Business IT',
  },
  {
    title:    '5 Signs You Need Remote Tech Support Right Now',
    summary:  'Slow PC, pop-ups, error messages, broken software — 5 signs your computer needs professional remote tech support today.',
    link:     '/blog/5-signs-you-need-remote-tech-support',
    date:     'March 7, 2026',
    image:    heroImage,
    category: 'Remote Support',
  },
  {
    title:    'How to Choose a Remote IT Support Company in the USA',
    summary:  'Key criteria, red flags, and pricing models to help you pick the right remote IT support provider for your home or business.',
    link:     '/blog/how-to-choose-remote-it-support-company-usa',
    date:     'March 7, 2026',
    image:    itConsultingImage,
    category: 'Remote Support',
  },
  {
    title:    'Is Remote Computer Repair Safe? What You Need to Know',
    summary:  'Remote computer repair is safe when done right. Learn how to verify a legitimate provider and protect yourself from tech support scams.',
    link:     '/blog/is-remote-computer-repair-safe',
    date:     'March 7, 2026',
    image:    cyberImage,
    category: 'Cybersecurity',
  },
  {
    title:    'Computer Repairs Near You: Local Guide for Nationwide',
    summary:  'Use this local checklist to find trusted computer repair near you, compare options, and choose the right service in Nationwide.',
    link:     '/blog/computer-repairs-near-you-palm-bay-melbourne-guide',
    date:     'February 24, 2026',
    image:    businessImage,
    category: 'Local Guide',
  },
  {
    title:    'AI Trends in 2026: What Businesses Should Do Next',
    summary:  'A practical 2026 guide to AI trends, agents, governance, and realistic adoption steps for growing companies.',
    link:     '/blog/ai-trends-2026-what-businesses-should-do-next',
    date:     'February 24, 2026',
    image:    aiImage,
    category: 'AI & Tech',
  },
  {
    title:    '5 Tips to Keep Your Computer Running Smoothly',
    summary:  'Use this maintenance checklist to keep your computer stable, secure, and fast.',
    link:     '/blog/5-tips-to-keep-your-computer-running-smoothly',
    date:     'February 10, 2026',
    image:    heroImage,
    category: 'Computer Tips',
  },
  {
    title:    'How to Protect Your Computer from Malware',
    summary:  'Reduce malware risk with layered security, MFA, safer downloads, and backup recovery.',
    link:     '/blog/how-to-protect-your-computer-from-malware',
    date:     'February 5, 2026',
    image:    protectImage,
    category: 'Cybersecurity',
  },
  {
    title:    'The Benefits of Regular Data Backup',
    summary:  'Build a stronger backup strategy with the 3-2-1 rule, versioning, and restore testing.',
    link:     '/blog/the-benefits-of-regular-data-backup',
    date:     'January 28, 2026',
    image:    backupImage,
    category: 'Data & Backup',
  },
  {
    title:    'SEO Tips for Your Tech Website',
    summary:  'Use practical local SEO tactics to improve rankings and generate better leads.',
    link:     '/blog/seo-tips-for-your-tech-website',
    date:     'January 20, 2026',
    image:    seoImage,
    category: 'Business & Web',
  },
  {
    title:    'Optimizing Your Site Speed for Better Performance',
    summary:  'Improve Core Web Vitals with a focused speed checklist for service business websites.',
    link:     '/blog/optimizing-your-site-speed-for-better-performance',
    date:     'January 12, 2026',
    image:    webspeedImage,
    category: 'Business & Web',
  },
  {
    title:    'Creating Quality Content for Better SEO',
    summary:  'Build stronger SEO content using topic clusters, local context, and quarterly refreshes.',
    link:     '/blog/creating-quality-content-for-better-seo',
    date:     'January 6, 2026',
    image:    qualityImage,
    category: 'Business & Web',
  },
  {
    title:    'Essential IT Support Tips for Small Businesses',
    summary:  'Use a proactive IT support framework to reduce downtime and improve business security.',
    link:     '/blog/essential-it-support-tips-for-small-businesses',
    date:     'December 30, 2025',
    image:    itSupportImage,
    category: 'Business IT',
  },
  {
    title:    'How to Secure Your Business Network',
    summary:  'Strengthen network security with segmentation, firewall hardening, and clear response planning.',
    link:     '/blog/how-to-secure-your-business-network',
    date:     'December 18, 2025',
    image:    cyberImage,
    category: 'Cybersecurity',
  },
  {
    title:    'Top Remote IT Support Tools for Small Businesses',
    summary:  'Select remote support tools using security, performance, and integration requirements.',
    link:     '/blog/top-remote-it-support-tools-2024',
    date:     'December 9, 2025',
    image:    remoteImage,
    category: 'Business IT',
  },
  {
    title:    'Improving Personal Computer Performance: A Comprehensive Guide',
    summary:  'Boost your personal computer performance with expert tips on hardware, software, and maintenance.',
    link:     '/blog/improving-personal-computer-performance',
    date:     'August 15, 2024',
    image:    heroImage,
    category: 'Computer Tips',
  },
  {
    title:    'The Role of IT Consulting in Business Growth',
    summary:  'Understand how IT consulting can help your business achieve new heights.',
    link:     '/blog/role-of-it-consulting-in-business-growth',
    date:     'August 20, 2024',
    image:    itConsultingImage,
    category: 'Business IT',
  },
  {
    title:    'Best Practices for Data Recovery and Backup',
    summary:  'Ensure your data is safe with proven data recovery and backup best practices.',
    link:     '/blog/best-practices-for-data-recovery-and-backup',
    date:     'August 25, 2024',
    image:    dataRecoveryImage,
    category: 'Data & Backup',
  },
  {
    title:    'How to Be Safe Online: A Guide for Older Adults',
    summary:  'Learn how older adults can stay safe and confident while navigating the internet.',
    link:     '/blog/how-to-be-safe-online',
    date:     'August 30, 2024',
    image:    onlineSafetyImage,
    category: 'Cybersecurity',
  },
  {
    title:    'The Future of AI: Trends and Predictions',
    summary:  'Explore the latest trends and predictions shaping the field of artificial intelligence.',
    link:     '/blog/the-future-of-ai',
    date:     'September 5, 2024',
    image:    ai2Image,
    category: 'AI & Tech',
  },
  {
    title:    'How ChatGPT is Transforming Customer Support',
    summary:  'Learn how ChatGPT is revolutionizing the customer support industry.',
    link:     '/blog/how-chatgpt-is-transforming-customer-support',
    date:     'September 10, 2024',
    image:    chatgptImage,
    category: 'AI & Tech',
  },
];

const featuredPost = blogPosts.find((p) => p.featured);
const regularPosts = blogPosts.filter((p) => !p.featured);

// ── Sub-components ─────────────────────────────────────────────────────────
const CategoryBadge = ({ category }) => (
  <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[category] || 'bg-gray-100 text-gray-600'}`}>
    <FaTag className="w-2.5 h-2.5" />
    {category}
  </span>
);

const BlogCard = ({ post, index }) => (
  <article className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
    {post.image && (
      <Link to={post.link} tabIndex={-1} aria-hidden className="overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
          loading={index < 6 ? 'eager' : 'lazy'}
          decoding="async"
          width={512}
          height={512}
        />
      </Link>
    )}
    <div className="flex flex-col flex-1 p-5">
      <div className="flex items-center justify-between mb-3">
        <CategoryBadge category={post.category} />
        <span className="flex items-center gap-1 text-xs text-gray-400">
          <FaCalendarAlt className="w-3 h-3" /> {post.date}
        </span>
      </div>
      <h2 className="text-base font-bold text-gray-800 mb-2 leading-snug">{post.title}</h2>
      <p className="text-sm text-gray-500 flex-1 mb-4 leading-relaxed">{post.summary}</p>
      <Link
        to={post.link}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-500 hover:text-cyan-600 transition-colors"
      >
        Read Article <FaArrowRight className="w-3 h-3" />
      </Link>
    </div>
  </article>
);

// ── Page ───────────────────────────────────────────────────────────────────
const BlogOverview = () => {
  const canonicalUrl      = 'https://24x7techoncall.com/blog';
  const blogOverviewImage = `https://24x7techoncall.com${featuredPost?.image || ''}`;

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: '24x7 Tech On Call Blog',
    url: canonicalUrl,
    description: 'Tech support and cybersecurity insights for home users and small businesses in Nationwide.',
    publisher: { '@type': 'Organization', name: '24x7 Tech On Call', logo: { '@type': 'ImageObject', url: 'https://24x7techoncall.com/favicon.ico' } },
  };

  const blogItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://24x7techoncall.com${post.link}`,
      name: post.title,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://24x7techoncall.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: canonicalUrl },
    ],
  };

  return (
    <div>
      <Helmet>
        <title>Blog | IT Support & Tech Tips | 24x7 Tech On Call</title>
        <meta name="description" content="Stay ahead in the tech world with our latest blog posts on IT support, cybersecurity, cloud solutions, digital transformation, and more. Serving Nationwide." />
        <meta name="keywords" content="IT blog, tech blog, cybersecurity tips, cloud solutions, digital transformation, IT consulting, small business IT, remote tech blog, nationwide IT news" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blog | 24x7 Tech On Call" />
        <meta property="og:description" content="Explore the 24x7 Tech On Call blog for insights on IT support, cybersecurity, cloud solutions, and more." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={blogOverviewImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Discover the latest blog posts from 24x7 Tech On Call on IT support, cybersecurity, and more." />
        <meta name="twitter:image" content={blogOverviewImage} />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(blogItemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-gray-900 border-b-4 border-cyan-500 text-white py-16">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <nav className="flex items-center justify-center gap-2 text-sm text-cyan-300 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">Blog</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            Tech Tips &amp; IT Insights
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Practical guides, security tips, and IT news for homes and businesses across the USA.
          </p>
        </div>
      </section>

      <div className="bg-gray-50 py-14">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* ── Featured post ── */}
          {featuredPost && (
            <div className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-cyan-500 inline-block"></span>
                Featured Article
              </p>
              <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <Link to={featuredPost.link} tabIndex={-1} aria-hidden className="overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="object-cover w-full h-64 md:h-full group-hover:scale-105 transition-transform duration-300"
                      loading="eager"
                      decoding="async"
                      width={512}
                      height={512}
                    />
                  </Link>
                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <CategoryBadge category={featuredPost.category} />
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <FaCalendarAlt className="w-3 h-3" /> {featuredPost.date}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-snug">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-6">{featuredPost.summary}</p>
                    <Link
                      to={featuredPost.link}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-gray-900 text-sm font-bold rounded-full transition-colors self-start shadow-sm"
                    >
                      Read Article <FaArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* ── All articles ── */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-cyan-500 pl-4">All Articles</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post, index) => (
              <BlogCard key={post.link} post={post} index={index} />
            ))}
          </div>

        </div>
      </div>

      {/* ── Newsletter CTA ── */}
      <section className="py-16 bg-gray-900 border-t-4 border-cyan-500 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-3">Stay Updated</p>
          <h2 className="text-3xl font-bold mb-3">Stay in the Loop</h2>
          <p className="text-gray-400 mb-8">
            Get the latest tech tips and IT news delivered straight to your inbox. No spam — just useful content.
          </p>
          <Link
            to="/subscribe"
            className="inline-flex items-center gap-2 px-8 py-3 font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 rounded-full transition-colors shadow-lg"
          >
            Subscribe to Newsletter <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogOverview;
