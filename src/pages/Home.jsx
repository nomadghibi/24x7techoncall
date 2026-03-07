import React, { useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FaBug, FaNetworkWired, FaDatabase, FaLaptopHouse, FaWifi,
  FaQuestionCircle, FaChalkboardTeacher, FaCloud,
  FaStar, FaMapMarkerAlt, FaBolt, FaShieldAlt, FaHandshake,
  FaPhoneAlt, FaAward, FaUsers, FaRegClock, FaArrowRight,
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import blogImage1  from '../assets/optimized-blog/5-tips-512.jpg';
import blogImage2  from '../assets/optimized-blog/protect-malware-512.jpg';
import blogImage3  from '../assets/optimized-blog/backup-512.jpg';
import blogImage4  from '../assets/optimized-blog/seo-512.jpg';
import blogImage5  from '../assets/optimized-blog/webspeed-512.jpg';
import blogImage6  from '../assets/optimized-blog/quality-content-512.jpg';
import blogImage7  from '../assets/optimized-blog/it-support-512.jpg';
import blogImage8  from '../assets/optimized-blog/business-cybersecurity-512.jpg';
import blogImage10 from '../assets/optimized-blog/ai-optimized-512.jpg';

const homeBlogPool = [
  { title: 'AI Trends in 2026: What Businesses Should Do Next', summary: 'A practical 2026 guide to AI trends, governance, and realistic adoption steps for growing companies.', link: '/blog/ai-trends-2026-what-businesses-should-do-next', date: 'February 24, 2026', image: blogImage10 },
  { title: '5 Tips to Keep Your Computer Running Smoothly', summary: 'Use this maintenance checklist to keep your computer stable, secure, and fast.', link: '/blog/5-tips-to-keep-your-computer-running-smoothly', date: 'February 10, 2026', image: blogImage1 },
  { title: 'How to Protect Your Computer from Malware', summary: 'Reduce malware risk with layered security, MFA, safer downloads, and backup recovery.', link: '/blog/how-to-protect-your-computer-from-malware', date: 'February 5, 2026', image: blogImage2 },
  { title: 'The Benefits of Regular Data Backup', summary: 'Build a stronger backup strategy with the 3-2-1 rule, versioning, and restore testing.', link: '/blog/the-benefits-of-regular-data-backup', date: 'January 28, 2026', image: blogImage3 },
  { title: 'SEO Tips for Your Tech Website', summary: 'Use practical local SEO tactics to improve rankings and generate better leads.', link: '/blog/seo-tips-for-your-tech-website', date: 'January 20, 2026', image: blogImage4 },
  { title: 'Optimizing Your Site Speed for Better Performance', summary: 'Improve Core Web Vitals with a focused speed checklist for service business websites.', link: '/blog/optimizing-your-site-speed-for-better-performance', date: 'January 12, 2026', image: blogImage5 },
  { title: 'Creating Quality Content for Better SEO', summary: 'Build stronger SEO content using topic clusters, local context, and refresh workflows.', link: '/blog/creating-quality-content-for-better-seo', date: 'January 6, 2026', image: blogImage6 },
  { title: 'Essential IT Support Tips for Small Businesses', summary: 'Use a proactive IT support framework to reduce downtime and improve business security.', link: '/blog/essential-it-support-tips-for-small-businesses', date: 'December 30, 2025', image: blogImage7 },
  { title: 'How to Secure Your Business Network', summary: 'Strengthen network security with segmentation, firewall hardening, and clear response planning.', link: '/blog/how-to-secure-your-business-network', date: 'December 18, 2025', image: blogImage8 },
];

const pickRandomPosts = (posts, count) => {
  const shuffled = [...posts];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

const heroImageMobile  = '/hero-home-640.jpg';
const heroImageMid     = '/hero-home-768.jpg';
const heroImageLarge   = '/hero-home-896.jpg';
const heroImageDesktop = '/hero-home-1024.jpg';
const heroImageSocial  = 'https://24x7techoncall.com/hero-home-1024.jpg';

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <FaStar key={i} className="text-yellow-400 w-4 h-4" />
    ))}
  </div>
);

const ServiceCard = React.memo(({ service, onReadMore }) => (
  <div
    className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-cyan-200 hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
    onClick={() => onReadMore(service.id)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onReadMore(service.id)}
  >
    <div className="mb-4 w-14 h-14 bg-gray-50 group-hover:bg-cyan-50 rounded-xl flex items-center justify-center transition-colors">
      {service.icon}
    </div>
    <h3 className="mb-2 text-base font-bold text-gray-800">{service.title}</h3>
    <p className="mb-4 text-sm text-gray-500 flex-1">{service.description}</p>
    <span className="text-sm font-semibold text-cyan-600 group-hover:text-cyan-700 flex items-center gap-1">
      Learn More <FaArrowRight className="w-3 h-3" />
    </span>
  </div>
));
ServiceCard.displayName = 'ServiceCard';

const TestimonialCard = React.memo(({ testimonial }) => (
  <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <StarRating />
    <p className="text-gray-600 leading-relaxed mb-5 italic text-sm">"{testimonial.feedback}"</p>
    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
        {testimonial.name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
        <p className="text-xs text-gray-400">{testimonial.date}</p>
      </div>
    </div>
  </div>
));
TestimonialCard.displayName = 'TestimonialCard';

const BlogPostCard = React.memo(({ post }) => (
  <article className="flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200">
    {post.image && (
      <img src={post.image} alt={post.title} className="object-cover w-full h-44" loading="lazy" decoding="async" fetchPriority="low" width={512} height={512} />
    )}
    <div className="flex flex-col flex-1 p-5">
      <p className="text-xs text-cyan-600 font-medium mb-2">{post.date}</p>
      <h3 className="text-base font-bold text-gray-800 mb-2 leading-snug">{post.title}</h3>
      <p className="text-sm text-gray-500 flex-1 mb-4">{post.summary}</p>
      <Link to={post.link} className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors">
        Read Article <FaArrowRight className="w-3 h-3" />
      </Link>
    </div>
  </article>
));
BlogPostCard.displayName = 'BlogPostCard';

function Home() {
  const navigate = useNavigate();

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '24x7 Tech On Call',
    url: 'https://24x7techoncall.com/',
    telephone: '+1-321-953-5199',
    email: '365techoncall@gmail.com',
    priceRange: '$$',
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' }],
    areaServed: 'United States',
    serviceType: ['Remote Computer Support', 'Remote IT Support', 'Software Troubleshooting', 'Virus and Malware Removal', 'Data Recovery', 'Cloud Consulting'],
  };

  const handleReadMoreClick = useCallback((serviceId) => {
    const routes = {
      'remote-computer-support':  '/residential-support/remote-support',
      'virus-malware-removal':    '/residential-support/virus-malware-removal',
      'network-setup-support':    '/residential-support/network-setup-support',
      'software-troubleshooting': '/residential-support/software-troubleshooting',
      'data-recovery':            '/residential-support/data-recovery',
      'cloud-consulting':         '/business-solutions/cloud-solutions',
      'managed-it':               '/business-solutions/managed-it-services',
      'quick-tech-help':          '/residential-support/senior-tech-help',
    };
    navigate(routes[serviceId] || '/residential-services');
  }, [navigate]);

  const services = useMemo(() => [
    { id: 'remote-computer-support',  title: 'Computer Repair & Troubleshooting', description: 'Remote diagnosis and repair for crashes, freezes, slow performance, and system errors.', icon: <FaLaptopHouse size={28} color="#14B8A6" /> },
    { id: 'virus-malware-removal',    title: 'Virus & Malware Removal',           description: 'Remove viruses, spyware, ransomware, pop-ups, and browser hijackers — fast and thorough.', icon: <FaBug size={28} color="#EF4444" /> },
    { id: 'network-setup-support',    title: 'Wi-Fi & Internet Help',             description: 'Fix slow internet, dropped connections, router issues, and Wi-Fi dead zones remotely.', icon: <FaWifi size={28} color="#8B5CF6" /> },
    { id: 'software-troubleshooting', title: 'Email, Printer & Software Support', description: 'Setup and troubleshoot email, printers, Zoom, Microsoft Office, and everyday apps.', icon: <FaChalkboardTeacher size={28} color="#10B981" /> },
    { id: 'data-recovery',            title: 'Data Backup & File Transfer',       description: 'Cloud backup setup, OneDrive sync, and file transfer from old PC to new.', icon: <FaDatabase size={28} color="#FBBF24" /> },
    { id: 'cloud-consulting',         title: 'Microsoft 365 Support',             description: 'Setup, troubleshooting, and admin support for Microsoft 365, Teams, and SharePoint.', icon: <FaCloud size={28} color="#6366F1" /> },
    { id: 'managed-it',               title: 'Managed IT Support',                description: 'Proactive remote monitoring, patching, and maintenance for businesses of all sizes.', icon: <FaNetworkWired size={28} color="#0891b2" /> },
    { id: 'quick-tech-help',          title: 'Tech Help for Seniors',             description: 'Patient, plain-language remote support for seniors — email, Zoom, tablets, and more.', icon: <FaQuestionCircle size={28} color="#EC4899" /> },
  ], []);

  const testimonials = useMemo(() => [
    { name: 'J Nash',       feedback: 'The remote support was amazing — they fixed my laptop in no time without any visit. The service was excellent and the staff were very friendly. Highly recommended!', date: 'July 10, 2023' },
    { name: 'Jane Smith',   feedback: 'Great service and affordable rates. They helped me recover all my lost data remotely. I am very grateful.', date: 'June 22, 2023' },
    { name: 'Dan Johnson',  feedback: 'I needed urgent help with my network setup and the team came through with flying colors. Fast and reliable remote service.', date: 'May 30, 2023' },
  ], []);

  const blogPosts = useMemo(() => pickRandomPosts(homeBlogPool, 3), []);

  const { ref: servicesRef,     inView: servicesInView }     = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: whyUsRef,        inView: whyUsInView }        = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: blogRef,         inView: blogInView }         = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      <Helmet>
        <title>Nationwide Remote Tech Support 24/7 | 24x7 Tech On Call</title>
        <meta name="description" content="24x7 Tech On Call provides professional remote tech support for homes and businesses nationwide. Available 24/7 — no fix, no fee." />
        <meta name="keywords" content="remote tech support, remote IT support, 24/7 computer help, online computer repair, nationwide tech support, remote computer support, remote virus removal, remote data recovery" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://24x7techoncall.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nationwide Remote Tech Support 24/7 | 24x7 Tech On Call" />
        <meta property="og:description" content="Professional remote tech support for homes and businesses nationwide. Available 24/7 — no fix, no fee." />
        <meta property="og:url" content="https://24x7techoncall.com/" />
        <meta property="og:image" content={heroImageSocial} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="24x7 Tech On Call | Nationwide Remote Tech Support" />
        <meta name="twitter:description" content="Remote computer support, IT help, virus removal, and data recovery — available 24/7 across the USA." />
        <meta name="twitter:image" content={heroImageSocial} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative">
        <img
          src={heroImageMobile}
          srcSet={`${heroImageMobile} 640w, ${heroImageMid} 768w, ${heroImageLarge} 896w, ${heroImageDesktop} 1024w`}
          sizes="100vw"
          alt="24x7 Tech On Call — nationwide remote computer and IT support"
          className="object-cover w-full"
          style={{ minHeight: '600px', maxHeight: '720px' }}
          width={1024}
          height={1024}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/40 rounded-full bg-cyan-400/10">
              Serving All 50 States
            </span>
            <h1 className="mb-5 text-4xl sm:text-6xl font-extrabold leading-tight">
              Expert IT Help Delivered to Your <span className="text-cyan-400">Screen</span><br className="hidden sm:block" /> — No Visit Required
            </h1>
            <p className="mb-8 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Professional remote tech support for homes and businesses nationwide. Available 24/7 — no fix, no fee.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/diagnose-my-issue" className="px-8 py-3.5 font-bold text-gray-900 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors shadow-lg">
                Diagnose My Issue
              </Link>
              <Link to="/contact" className="px-8 py-3.5 font-semibold text-white border-2 border-white/40 rounded-full hover:bg-white/10 transition-colors">
                Get a Free Quote
              </Link>
              <a href="tel:+13219535199" className="flex items-center gap-2 px-8 py-3.5 font-semibold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors">
                <FaPhoneAlt className="w-4 h-4" /> Call: (321) 953-5199
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-gray-900 border-y border-gray-800 py-7">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: FaAward,    stat: '10+',      label: 'Years of Experience' },
              { icon: FaUsers,    stat: '500+',     label: 'Happy Clients' },
              { icon: FaRegClock, stat: 'Same Day', label: 'Response Time' },
              { icon: FaStar,     stat: '5-Star',   label: 'Google Rated' },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="text-cyan-400 w-6 h-6 mb-1" />
                <span className="text-2xl font-bold text-white">{stat}</span>
                <span className="text-sm text-gray-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        ref={servicesRef}
        className={`py-20 bg-gray-50 transition-opacity duration-700 ${servicesInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Our Services</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              From quick fixes to full IT management — we keep your technology running so you don't have to worry.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} onReadMore={handleReadMoreClick} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/residential-services" className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
              See All Services <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section
        ref={whyUsRef}
        className={`py-20 bg-white transition-opacity duration-700 ${whyUsInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">Why Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Why Choose 24x7 Tech On Call?</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              We're your remote IT experts — not a call center, not a chain. Just real technicians who care.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FaMapMarkerAlt,
                title: 'Nationwide Service',
                text: 'We serve all 50 states remotely. Wherever you are, we can help.',
                borderClass: 'border-cyan-400',
                iconBgClass: 'bg-cyan-50',
                iconTextClass: 'text-cyan-500',
              },
              {
                icon: FaBolt,
                title: 'Fast Turnaround',
                text: 'Most issues resolved same day. No long waits, no on-site visits.',
                borderClass: 'border-green-400',
                iconBgClass: 'bg-green-50',
                iconTextClass: 'text-green-500',
              },
              {
                icon: FaShieldAlt,
                title: 'Trusted & Secure',
                text: 'We protect your data and privacy on every job, guaranteed.',
                borderClass: 'border-purple-400',
                iconBgClass: 'bg-purple-50',
                iconTextClass: 'text-purple-500',
              },
              {
                icon: FaHandshake,
                title: 'No Fix, No Fee',
                text: "If we can't fix it, you don't pay. Simple, honest service.",
                borderClass: 'border-yellow-400',
                iconBgClass: 'bg-yellow-50',
                iconTextClass: 'text-yellow-500',
              },
            ].map(({ icon: Icon, title, text, borderClass, iconBgClass, iconTextClass }) => (
              <div
                key={title}
                className={`flex flex-col items-center text-center p-7 rounded-2xl border-t-4 ${borderClass} bg-white shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className={`mb-4 w-14 h-14 ${iconBgClass} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${iconTextClass}`} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        ref={testimonialsRef}
        className={`py-20 bg-gray-50 transition-opacity duration-700 ${testimonialsInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">What Our Customers Say</h2>
            <p className="text-lg text-gray-500">Real reviews from real clients across the USA.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://www.google.com/maps/search/24x7+Tech+On+Call" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
              <FaStar className="text-yellow-400" /> Read more reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section
        ref={blogRef}
        className={`py-20 bg-white transition-opacity duration-700 ${blogInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">Resources</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Latest from Our Blog</h2>
            <p className="text-lg text-gray-500">Tech tips, guides, and IT news for homes and businesses.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={post.link || index} post={post} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200 rounded-full hover:bg-cyan-100 transition-colors">
              View All Articles <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gray-900 border-t-4 border-cyan-500 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Fix Your Tech?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Call us, send a message, or book a service online. We're here Mon–Fri, 9am–6pm.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:+13219535199" className="flex items-center gap-2 px-7 py-3.5 font-bold text-gray-900 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors shadow-lg">
              <FaPhoneAlt className="w-4 h-4" /> (321) 953-5199
            </a>
            <Link to="/contact" className="px-7 py-3.5 font-semibold text-white border border-gray-600 rounded-full hover:bg-white/10 transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
