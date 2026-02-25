
import { createWriteStream } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

// Define all the static routes for the site
const staticRoutes = [
  '/',
  '/diagnose-my-issue',
  '/price-estimator',
  '/quick-tech-help',
  '/residential-services',
  '/residential-support/pc-laptop-repairs',
  '/residential-support/virus-malware-removal',
  '/residential-support/software-troubleshooting',
  '/residential-support/data-recovery',
  '/residential-support/network-setup-support',
  '/residential-support/remote-support',
  '/residential-support/tech-consultation',
  '/residential-support/computer-training',
  '/residential-support/home-office-setup',
  '/residential-support/backup-data-protection',
  '/residential-support/cybersecurity-home',
  '/business-services',
  '/business-solutions/it-consulting',
  '/business-solutions/network-setup',
  '/business-solutions/managed-it-services',
  '/business-solutions/data-recovery',
  '/business-solutions/cloud-solutions',
  '/business-solutions/cybersecurity',
  '/business-solutions/it-support',
  '/business-solutions/business-continuity',
  '/business-solutions/computer-training',
  '/business-solutions/digital-transformation',
  '/business-solutions/technical-support-maintenance',
  '/business-solutions/website-development',
  '/services',
  '/contact',
  '/how-to',
  '/how-to/fix-broken-screen',
  '/how-to/know-your-computer-has-virus',
  '/how-to/setup-network',
  '/how-to/recover-data',
  '/how-to/use-remote-support',
  '/how-to/improve-performance',
  '/how-to/be-safe-online',
  '/how-to/set-up-email',
  '/blog',
  '/blog/computer-repairs-near-you-palm-bay-melbourne-guide',
  '/blog/ai-trends-2026-what-businesses-should-do-next',
  '/blog/5-tips-to-keep-your-computer-running-smoothly',
  '/blog/how-to-protect-your-computer-from-malware',
  '/blog/the-benefits-of-regular-data-backup',
  '/blog/seo-tips-for-your-tech-website',
  '/blog/optimizing-your-site-speed-for-better-performance',
  '/blog/creating-quality-content-for-better-seo',
  '/blog/essential-it-support-tips-for-small-businesses',
  '/blog/how-to-secure-your-business-network',
  '/blog/top-remote-it-support-tools-2024',
  '/blog/improving-personal-computer-performance',
  '/blog/role-of-it-consulting-in-business-growth',
  '/blog/best-practices-for-data-recovery-and-backup',
  '/blog/how-to-be-safe-online',
  '/blog/the-future-of-ai',
  '/blog/how-chatgpt-is-transforming-customer-support',
  '/book-service',
  '/subscribe',
  '/newsletters/best-computer-tech-monthly-newsletter-2026-01-agents-become-co-workers.pdf',
  '/newsletters/best-computer-tech-monthly-newsletter-2026-02-ai-security-arms-race.pdf',
  '/newsletters/best-computer-tech-monthly-newsletter-2026-03-ai-pcs-and-local-inference.pdf',
  '/newsletters/best-computer-tech-monthly-newsletter-2026-04-robots-in-real-businesses.pdf',
  '/newsletters/best-computer-tech-monthly-newsletter-2026-05-customer-support-gets-rebuilt.pdf',
  '/newsletters/best-computer-tech-monthly-newsletter-2026-06-privacy-and-compliance-catch-up.pdf',
  '/newsletters/best-computer-tech-monthly-newsletter-2026-07-post-quantum-migration-planning.pdf',
  '/newsletters/best-computer-tech-monthly-newsletter-2026-08-green-compute-and-efficiency.pdf',
  '/newsletters/best-computer-tech-monthly-newsletter-2026-09-the-interface-evolves.pdf',
  '/newsletters/best-computer-tech-monthly-newsletter-2026-10-fraud-trust-and-verification.pdf',
  '/newsletters/best-computer-tech-monthly-newsletter-2026-11-automation-for-small-business.pdf',
  '/newsletters/best-computer-tech-monthly-newsletter-2026-12-from-tools-to-systems.pdf',
  '/pricing',
  '/about-us',
];

// Transform staticRoutes into the format expected by SitemapStream
const links = staticRoutes.map((route) => ({
  url: route,
  changefreq: 'weekly', // Set a default changefreq
  priority: 0.8, // Set a default priority
}));

const sitemapPath = resolve(__dirname, 'public', 'sitemap.xml');

const sitemapStream = new SitemapStream({ hostname: 'https://bestcomputertec.com' });
const writeStream = createWriteStream(sitemapPath);

sitemapStream.pipe(writeStream);

links.forEach((link) => sitemapStream.write(link));
sitemapStream.end();

streamToPromise(sitemapStream).then(() => {
  console.log('Sitemap successfully created!');
}).catch((err) => {
  console.error('Error generating sitemap', err);
});
