


import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';  // Import Helmet for SEO
import { Paper, Typography } from '@mui/material';
import heroImage from '../assets/5-tips-blog-image.webp';
import protectHeroImage from '../assets/ProtectYourComputerFromMalware.webp';
import protectHeroImage2 from '../assets/seo.webp';
import protectHeroImage3 from '../assets/webspeed.webp';
import protectHeroImage4 from '../assets/qcontent.webp';
import backupHeroImage from '../assets/backupHeroImage.webp';
import itSupportImage from '../assets/itSupportImage.webp';
import networkSecurityImage from '../assets/businesscybersecurity.webp';
import remoteItSupportImage from '../assets/remotetechsupport.webp';
import pcPerformanceImage from '../assets/businessservices.webp';
import itConsultingImage from '../assets/itconsulting.webp';
import dataBackupImage from '../assets/datarecovery.webp';
import onlineSafetyImage from '../assets/howtobesafe.webp';
import aiImage from '../assets/ai-optimized.jpg';
import chatgptImage from '../assets/chatgpt.webp';

const blogPosts = [
  {
    title: '5 Tips to Keep Your Computer Running Smoothly',
    summary: 'Use this 2026 maintenance checklist to keep your computer stable, secure, and fast.',
    link: '/blog/5-tips-to-keep-your-computer-running-smoothly',
    date: 'February 10, 2026',
    image: heroImage
  },
  {
    title: 'How to Protect Your Computer from Malware',
    summary: 'Reduce malware risk with layered security, MFA, safer downloads, and backup recovery.',
    link: '/blog/how-to-protect-your-computer-from-malware',
    date: 'February 5, 2026',
    image: protectHeroImage
  },
  {
    title: 'The Benefits of Regular Data Backup',
    summary: 'Build a stronger backup strategy with the 3-2-1 rule, versioning, and restore testing.',
    link: '/blog/the-benefits-of-regular-data-backup',
    date: 'January 28, 2026',
    image: backupHeroImage
  },
  {
    title: 'SEO Tips for Your Tech Website',
    summary: 'Use practical 2026 local SEO tactics to improve rankings and generate better leads.',
    link: '/blog/seo-tips-for-your-tech-website',
    date: 'January 20, 2026',
    image: protectHeroImage2
  },
  {
    title: 'Optimizing Your Site Speed for Better Performance',
    summary: 'Improve Core Web Vitals with a focused speed checklist for service business websites.',
    link: '/blog/optimizing-your-site-speed-for-better-performance',
    date: 'January 12, 2026',
    image: protectHeroImage3
  },
  {
    title: 'Creating Quality Content for Better SEO',
    summary: 'Build stronger SEO content using topic clusters, local context, and quarterly refreshes.',
    link: '/blog/creating-quality-content-for-better-seo',
    date: 'January 6, 2026',
    image: protectHeroImage4
  },
  {
    title: 'Essential IT Support Tips for Small Businesses',
    summary: 'Use a proactive IT support framework to reduce downtime and improve business security.',
    link: '/blog/essential-it-support-tips-for-small-businesses',
    date: 'December 30, 2025',
    image: itSupportImage
  },
  {
    title: 'How to Secure Your Business Network',
    summary: 'Strengthen network security with segmentation, firewall hardening, and clear response planning.',
    link: '/blog/how-to-secure-your-business-network',
    date: 'December 18, 2025',
    image: networkSecurityImage
  },
  {
    title: 'Top Remote IT Support Tools for Small Businesses',
    summary: 'Select remote support tools using security, performance, and integration requirements.',
    link: '/blog/top-remote-it-support-tools-2024',
    date: 'December 9, 2025',
    image: remoteItSupportImage
  },
  {
    title: 'Improving Personal Computer Performance: A Comprehensive Guide',
    summary: 'Boost your personal computer’s performance with these expert tips.',
    link: '/blog/improving-personal-computer-performance',
    date: 'August 15, 2024',
    image: pcPerformanceImage
  },
  {
    title: 'The Role of IT Consulting in Business Growth',
    summary: 'Understand how IT consulting can help your business achieve new heights.',
    link: '/blog/role-of-it-consulting-in-business-growth',
    date: 'August 20, 2024',
    image: itConsultingImage
  },
  {
    title: 'Best Practices for Data Recovery and Backup',
    summary: 'Ensure your data is safe with these data recovery and backup best practices.',
    link: '/blog/best-practices-for-data-recovery-and-backup',
    date: 'August 25, 2024',
    image: dataBackupImage
  },
  {
    title: 'How to Be Safe Online: A Guide for Older Adults',
    summary: 'Learn how older adults can stay safe while navigating the internet.',
    link: '/blog/how-to-be-safe-online',
    date: 'August 30, 2024',
    image: onlineSafetyImage
  },
  {
    title: 'The Future of AI: Trends and Predictions',
    summary: 'Explore the latest trends and predictions in the field of artificial intelligence.',
    link: '/blog/the-future-of-ai',
    date: 'September 5, 2024',
    image: aiImage
  },
  {
    title: 'How ChatGPT is Transforming Customer Support',
    summary: 'Learn how ChatGPT is revolutionizing the customer support industry.',
    link: '/blog/how-chatgpt-is-transforming-customer-support',
    date: 'September 10, 2024',
    image: chatgptImage
  }
];

const BlogOverview = () => {
  const canonicalUrl = 'https://bestcomputertec.com/blog';
  const blogOverviewImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://bestcomputertec.com${heroImage || ''}`;
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Best Computer Tech Blog',
    url: canonicalUrl,
    description:
      'Tech support and cybersecurity insights for home users and small businesses in Palm Bay and Melbourne, FL.',
    publisher: {
      '@type': 'Organization',
      name: 'Best Computer Tech LLC',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bestcomputertec.com/favicon.ico'
      }
    }
  };
  const blogItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://bestcomputertec.com${post.link}`,
      name: post.title
    }))
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://bestcomputertec.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: canonicalUrl
      }
    ]
  };

  return (
    <div className="container p-8 mx-auto">
      <Helmet>
        <title>Blog Overview | Best Computer Tech | Palm Bay & Melbourne, FL</title>
        <meta name="description" content="Stay ahead in the tech world with our latest blog posts on IT support, cybersecurity, cloud solutions, digital transformation, and more. Serving Palm Bay and Melbourne, FL." />
        <meta name="keywords" content="IT blog, tech blog, cybersecurity tips, cloud solutions, digital transformation, IT consulting, small business IT, Palm Bay tech blog, Melbourne FL IT news" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blog Overview | Best Computer Tech | Palm Bay & Melbourne, FL" />
        <meta property="og:description" content="Explore the Best Computer Tech blog for insights on IT support, cybersecurity, cloud solutions, and more. Serving Palm Bay and Melbourne, FL." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={blogOverviewImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Overview | Best Computer Tech" />
        <meta name="twitter:description" content="Discover the latest blog posts from Best Computer Tech on IT support, cybersecurity, and more. Stay informed with insights from Palm Bay and Melbourne, FL." />
        <meta name="twitter:image" content={blogOverviewImage} />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(blogItemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <h1 className="mb-8 text-4xl font-bold text-center">Tech Insights and IT Support Tips | Best Computer Tech Blog</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Link to={post.link} key={index} className="block">
            <Paper elevation={3} className="flex flex-col justify-between p-4 border border-gray-300 h-80">
              {post.image && (
                <img src={post.image} alt={post.title} className="object-cover w-full h-32 mb-4 bg-gray-300 rounded" />
              )}
              <div>
                <Typography variant="h6" component="h3" className="mb-2">
                  {post.title}
                </Typography>
                <Typography variant="body2" component="p" className="mb-4 text-gray-700">
                  {post.summary}
                </Typography>
                <Typography variant="caption" component="p" className="text-gray-500">
                  {post.date}
                </Typography>
              </div>
            </Paper>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogOverview;
