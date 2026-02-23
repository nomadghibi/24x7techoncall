


import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';  // Import Helmet for SEO
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

const generateRandomDate = (start, end) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
};

const start = new Date('2024-01-01');
const end = new Date();

const blogPosts = [
  {
    title: '5 Tips to Keep Your Computer Running Smoothly',
    summary: 'Learn the best practices to ensure your computer remains fast and efficient.',
    link: '/blog/5-tips-to-keep-your-computer-running-smoothly',
    date: generateRandomDate(start, end),
    image: heroImage
  },
  {
    title: 'How to Protect Your Computer from Malware',
    summary: 'Understand how to safeguard your computer from various malware threats.',
    link: '/blog/how-to-protect-your-computer-from-malware',
    date: generateRandomDate(start, end),
    image: protectHeroImage
  },
  {
    title: 'The Benefits of Regular Data Backup',
    summary: 'Discover why regular data backups are crucial for protecting your important files.',
    link: '/blog/the-benefits-of-regular-data-backup',
    date: generateRandomDate(start, end),
    image: backupHeroImage
  },
  {
    title: 'SEO Tips for Your Tech Website',
    summary: 'Learn essential SEO strategies to improve your tech website’s search engine ranking.',
    link: '/blog/seo-tips-for-your-tech-website',
    date: generateRandomDate(start, end),
    image: protectHeroImage2
  },
  {
    title: 'Optimizing Your Site Speed for Better Performance',
    summary: 'Understand how to improve your site speed and enhance user experience.',
    link: '/blog/optimizing-your-site-speed-for-better-performance',
    date: generateRandomDate(start, end),
    image: protectHeroImage3
  },
  {
    title: 'Creating Quality Content for Better SEO',
    summary: 'Discover how creating high-quality content can boost your SEO efforts.',
    link: '/blog/creating-quality-content-for-better-seo',
    date: generateRandomDate(start, end),
    image: protectHeroImage4
  },
  {
    title: 'Essential IT Support Tips for Small Businesses',
    summary: 'Discover crucial IT support strategies to keep your small business running smoothly.',
    link: '/blog/essential-it-support-tips-for-small-businesses',
    date: generateRandomDate(start, end),
    image: itSupportImage
  },
  {
    title: 'How to Secure Your Business Network',
    summary: 'Learn how to protect your business network from potential threats.',
    link: '/blog/how-to-secure-your-business-network',
    date: generateRandomDate(start, end),
    image: networkSecurityImage
  },
  {
    title: 'Top Remote IT Support Tools for 2024',
    summary: 'Explore the best remote IT support tools to enhance your business operations.',
    link: '/blog/top-remote-it-support-tools-2024',
    date: generateRandomDate(start, end),
    image: remoteItSupportImage
  },
  {
    title: 'Improving Personal Computer Performance: A Comprehensive Guide',
    summary: 'Boost your personal computer’s performance with these expert tips.',
    link: '/blog/improving-personal-computer-performance',
    date: generateRandomDate(start, end),
    image: pcPerformanceImage
  },
  {
    title: 'The Role of IT Consulting in Business Growth',
    summary: 'Understand how IT consulting can help your business achieve new heights.',
    link: '/blog/role-of-it-consulting-in-business-growth',
    date: generateRandomDate(start, end),
    image: itConsultingImage
  },
  {
    title: 'Best Practices for Data Recovery and Backup',
    summary: 'Ensure your data is safe with these data recovery and backup best practices.',
    link: '/blog/best-practices-for-data-recovery-and-backup',
    date: generateRandomDate(start, end),
    image: dataBackupImage
  },
  {
    title: 'How to Be Safe Online: A Guide for Older Adults',
    summary: 'Learn how older adults can stay safe while navigating the internet.',
    link: '/blog/how-to-be-safe-online',
    date: generateRandomDate(start, end),
    image: onlineSafetyImage
  },
  {
    title: 'The Future of AI: Trends and Predictions',
    summary: 'Explore the latest trends and predictions in the field of artificial intelligence.',
    link: '/blog/the-future-of-ai',
    date: generateRandomDate(start, end),
    image: aiImage
  },
  {
    title: 'How ChatGPT is Transforming Customer Support',
    summary: 'Learn how ChatGPT is revolutionizing the customer support industry.',
    link: '/blog/how-chatgpt-is-transforming-customer-support',
    date: generateRandomDate(start, end),
    image: chatgptImage
  }
];

const BlogOverview = () => {
  return (
    <div className="container p-8 mx-auto">
      <Helmet>
      <title>Blog Overview | Best Computer Tech | Palm Bay & Melbourne, FL</title>
<meta name="description" content="Stay ahead in the tech world with our latest blog posts on IT support, cybersecurity, cloud solutions, digital transformation, and more. Serving Palm Bay and Melbourne, FL." />
<meta name="keywords" content="IT blog, tech blog, cybersecurity tips, cloud solutions, digital transformation, IT consulting, small business IT, Palm Bay tech blog, Melbourne FL IT news" />
<link rel="canonical" href="https://bestcomputertec.com/blog" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="Blog Overview | Best Computer Tech | Palm Bay & Melbourne, FL" />
<meta property="og:description" content="Explore the Best Computer Tech blog for insights on IT support, cybersecurity, cloud solutions, and more. Serving Palm Bay and Melbourne, FL." />
<meta property="og:url" content="https://bestcomputertec.com/blog" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://bestcomputertec.com/images/blog-overview.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Blog Overview | Best Computer Tech" />
<meta name="twitter:description" content="Discover the latest blog posts from Best Computer Tech on IT support, cybersecurity, and more. Stay informed with insights from Palm Bay and Melbourne, FL." />
<meta name="twitter:image" content="https://bestcomputertec.com/images/blog-overview.jpg" />

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
