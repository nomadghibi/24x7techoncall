import React, { useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FaTools,
  FaBug,
  FaNetworkWired,
  FaDatabase,
  FaLaptopHouse,
  FaQuestionCircle,
  FaChalkboardTeacher,
  FaCloud,
  FaCamera,
  FaLaptop,
  FaStar,
  FaMapMarkerAlt,
  FaBolt,
  FaShieldAlt,
  FaHandshake,
  FaPhoneAlt,
  FaAward,
  FaUsers,
  FaRegClock,
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import logo256Png from '../assets/optimized-logo/logo-256.png';
import logo384Png from '../assets/optimized-logo/logo-384.png';
import blogImage1 from '../assets/optimized-blog/5-tips-512.jpg';
import blogImage2 from '../assets/optimized-blog/protect-malware-512.jpg';
import blogImage3 from '../assets/optimized-blog/backup-512.jpg';
import blogImage4 from '../assets/optimized-blog/seo-512.jpg';
import blogImage5 from '../assets/optimized-blog/webspeed-512.jpg';
import blogImage6 from '../assets/optimized-blog/quality-content-512.jpg';
import blogImage7 from '../assets/optimized-blog/it-support-512.jpg';
import blogImage8 from '../assets/optimized-blog/business-cybersecurity-512.jpg';
import blogImage9 from '../assets/optimized-blog/business-services-512.jpg';
import blogImage10 from '../assets/optimized-blog/ai-optimized-512.jpg';

const homeBlogPool = [
  {
    title: 'Computer Repairs Near You: Local Guide for Palm Bay and Melbourne',
    summary:
      'Use this local checklist to find trusted computer repair near you, compare options, and choose the right service in Palm Bay and Melbourne.',
    link: '/blog/computer-repairs-near-you-palm-bay-melbourne-guide',
    date: 'February 24, 2026',
    image: blogImage9,
  },
  {
    title: 'AI Trends in 2026: What Businesses Should Do Next',
    summary:
      'A practical 2026 guide to AI trends, governance, and realistic adoption steps for growing companies.',
    link: '/blog/ai-trends-2026-what-businesses-should-do-next',
    date: 'February 24, 2026',
    image: blogImage10,
  },
  {
    title: '5 Tips to Keep Your Computer Running Smoothly',
    summary: 'Use this maintenance checklist to keep your computer stable, secure, and fast.',
    link: '/blog/5-tips-to-keep-your-computer-running-smoothly',
    date: 'February 10, 2026',
    image: blogImage1,
  },
  {
    title: 'How to Protect Your Computer from Malware',
    summary: 'Reduce malware risk with layered security, MFA, safer downloads, and backup recovery.',
    link: '/blog/how-to-protect-your-computer-from-malware',
    date: 'February 5, 2026',
    image: blogImage2,
  },
  {
    title: 'The Benefits of Regular Data Backup',
    summary: 'Build a stronger backup strategy with the 3-2-1 rule, versioning, and restore testing.',
    link: '/blog/the-benefits-of-regular-data-backup',
    date: 'January 28, 2026',
    image: blogImage3,
  },
  {
    title: 'SEO Tips for Your Tech Website',
    summary: 'Use practical local SEO tactics to improve rankings and generate better leads.',
    link: '/blog/seo-tips-for-your-tech-website',
    date: 'January 20, 2026',
    image: blogImage4,
  },
  {
    title: 'Optimizing Your Site Speed for Better Performance',
    summary: 'Improve Core Web Vitals with a focused speed checklist for service business websites.',
    link: '/blog/optimizing-your-site-speed-for-better-performance',
    date: 'January 12, 2026',
    image: blogImage5,
  },
  {
    title: 'Creating Quality Content for Better SEO',
    summary: 'Build stronger SEO content using topic clusters, local context, and refresh workflows.',
    link: '/blog/creating-quality-content-for-better-seo',
    date: 'January 6, 2026',
    image: blogImage6,
  },
  {
    title: 'Essential IT Support Tips for Small Businesses',
    summary: 'Use a proactive IT support framework to reduce downtime and improve business security.',
    link: '/blog/essential-it-support-tips-for-small-businesses',
    date: 'December 30, 2025',
    image: blogImage7,
  },
  {
    title: 'How to Secure Your Business Network',
    summary: 'Strengthen network security with segmentation, firewall hardening, and clear response planning.',
    link: '/blog/how-to-secure-your-business-network',
    date: 'December 18, 2025',
    image: blogImage8,
  },
];

const pickRandomPosts = (posts, count) => {
  const shuffled = [...posts];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

const heroImageMobile = '/hero-home-640.jpg';
const heroImageMid = '/hero-home-768.jpg';
const heroImageLarge = '/hero-home-896.jpg';
const heroImageDesktop = '/hero-home-1024.jpg';
const heroImageSocial = 'https://bestcomputertec.com/hero-home-1024.jpg';

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <FaStar key={i} className="text-yellow-400 w-4 h-4" />
    ))}
  </div>
);

const ServiceCard = React.memo(({ service, onReadMore }) => (
  <div
    className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
    onClick={() => onReadMore(service.id)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onReadMore(service.id)}
  >
    <div className="mb-4 p-3 rounded-full bg-gray-50">
      {service.icon}
    </div>
    <h3 className="mb-2 text-lg font-bold text-gray-800">{service.title}</h3>
    <p className="mb-5 text-sm text-gray-600 flex-1">{service.description}</p>
    <span className="text-sm font-semibold text-blue-600 hover:text-blue-800">
      Learn More →
    </span>
  </div>
));
ServiceCard.displayName = 'ServiceCard';

const TestimonialCard = React.memo(({ testimonial }) => (
  <div className="p-6 text-left bg-white rounded-xl shadow-sm border border-gray-100">
    <StarRating />
    <p className="text-gray-700 leading-relaxed mb-4 italic">"{testimonial.feedback}"</p>
    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
      <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
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
  <article className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
    {post.image && (
      <img
        src={post.image}
        alt={post.title}
        className="object-cover w-full h-44"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        width={512}
        height={512}
      />
    )}
    <div className="flex flex-col flex-1 p-5">
      <p className="text-xs text-gray-400 mb-2">{post.date}</p>
      <h3 className="text-base font-bold text-gray-800 mb-2 leading-snug">{post.title}</h3>
      <p className="text-sm text-gray-600 flex-1 mb-4">{post.summary}</p>
      <Link
        to={post.link}
        className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
      >
        Read Article →
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
    name: 'Best Computer Tech LLC',
    url: 'https://bestcomputertec.com/',
    telephone: '+1-321-953-5199',
    email: '365techoncall@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '602 Hurst Rd NE',
      addressLocality: 'Palm Bay',
      addressRegion: 'FL',
      postalCode: '32907',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.0836,
      longitude: -80.6081,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Palm Bay' },
      { '@type': 'City', name: 'Melbourne' },
      { '@type': 'City', name: 'West Melbourne' },
      { '@type': 'AdministrativeArea', name: 'Brevard County' },
    ],
    serviceType: [
      'Computer Repair',
      'IT Support',
      'Network Setup',
      'Virus and Malware Removal',
      'Data Recovery',
    ],
  };

  const handleReadMoreClick = useCallback((serviceId) => {
    const routes = {
      'personal-technology-solutions': '/residential-services',
      'hardware-repairs': '/residential-support/pc-laptop-repairs',
      'software-troubleshooting': '/residential-support/software-troubleshooting',
      'virus-malware-removal': '/residential-support/virus-malware-removal',
      'network-setup-support': '/residential-support/network-setup-support',
      'data-recovery': '/residential-support/data-recovery',
      'remote-computer-support': '/residential-support/remote-support',
      'computer-training': '/residential-support/computer-training',
      'quick-tech-help': '/quick-tech-help',
      'cloud-consulting': '/business-solutions/cloud-solutions',
      'business-it-support': '/business-services',
    };
    navigate(routes[serviceId] || `/services/${serviceId}`);
  }, [navigate]);

  const services = useMemo(
    () => [
      {
        id: 'hardware-repairs',
        title: 'Hardware Repairs',
        description: 'Fixing broken screens, malfunctioning keyboards, and other hardware issues.',
        icon: <FaTools size={32} color="#3B82F6" />,
      },
      {
        id: 'software-troubleshooting',
        title: 'Software Troubleshooting',
        description: 'Resolving operating system errors, application crashes, and software installation issues.',
        icon: <FaLaptop size={32} color="#10B981" />,
      },
      {
        id: 'virus-malware-removal',
        title: 'Virus & Malware Removal',
        description: 'Protecting your computer from harmful viruses and ensuring your data is safe.',
        icon: <FaBug size={32} color="#EF4444" />,
      },
      {
        id: 'network-setup-support',
        title: 'Network Setup & Support',
        description: 'Setting up and maintaining secure and efficient home or office networks.',
        icon: <FaNetworkWired size={32} color="#8B5CF6" />,
      },
      {
        id: 'data-recovery',
        title: 'Data Recovery',
        description: 'Retrieving lost or corrupted data from hard drives and other storage devices.',
        icon: <FaDatabase size={32} color="#FBBF24" />,
      },
      {
        id: 'remote-computer-support',
        title: 'Remote Computer Support',
        description: 'Professional support for your computer issues without the need for a technician visit.',
        icon: <FaLaptopHouse size={32} color="#14B8A6" />,
      },
      {
        id: 'quick-tech-help',
        title: 'Quick Tech Help',
        description: 'Have a question about your computer? Get a quick repair quote before taking it to the shop.',
        icon: <FaQuestionCircle size={32} color="#EC4899" />,
      },
      {
        id: 'cloud-consulting',
        title: 'Cloud Consulting',
        description: 'Get expert cloud support and migration guidance from the comfort of your home.',
        icon: <FaCloud size={32} color="#6366F1" />,
      },
      {
        id: 'computer-training',
        title: 'Computer Training',
        description: 'Learn how to use your computer more effectively with our professional training sessions.',
        icon: <FaChalkboardTeacher size={32} color="#F97316" />,
      },
      {
        id: 'security-camera-installation',
        title: 'Security Camera & Cabling',
        description: 'Professional installation of security cameras and network cabling for your home or office.',
        icon: <FaCamera size={32} color="#6B7280" />,
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: 'J Nash',
        feedback:
          'Best Computer Tech fixed my laptop in no time. The service was excellent and the staff were very friendly. Highly recommended!',
        date: 'July 10, 2023',
      },
      {
        name: 'Jane Smith',
        feedback:
          'Great service and affordable rates. They helped me recover all my lost data. I am very grateful.',
        date: 'June 22, 2023',
      },
      {
        name: 'Dan Johnson',
        feedback:
          'I needed urgent help with my network setup and Best Computer Tech came through with flying colors. Fast and reliable service.',
        date: 'May 30, 2023',
      },
    ],
    []
  );

  const blogPosts = useMemo(() => pickRandomPosts(homeBlogPool, 3), []);

  const { ref: techSolutionsRef, inView: techSolutionsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: whyUsRef, inView: whyUsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: blogRef, inView: blogInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      <Helmet>
        <title>Computer Repair & IT Support in Palm Bay & Melbourne, FL | Best Computer Tech</title>
        <meta
          name="description"
          content="Best Computer Tech provides local computer repair and IT support in Palm Bay, Melbourne, and Brevard County, FL. Fast hardware repair, virus removal, network setup, and data recovery."
        />
        <meta
          name="keywords"
          content="computer repair Palm Bay FL, computer repair Melbourne FL, local IT support Brevard County, virus removal Palm Bay, data recovery Melbourne, network setup Florida"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bestcomputertec.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Computer Repair & IT Support in Palm Bay & Melbourne, FL | Best Computer Tech" />
        <meta property="og:description" content="Local computer repair and IT support services for Palm Bay, Melbourne, and nearby Brevard County areas." />
        <meta property="og:url" content="https://bestcomputertec.com/" />
        <meta property="og:image" content={heroImageSocial} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Computer Tech | Palm Bay & Melbourne, FL" />
        <meta name="twitter:description" content="Computer repair, IT support, network setup, and data recovery in Palm Bay and Melbourne, Florida." />
        <meta name="twitter:image" content={heroImageSocial} />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Palm Bay, Melbourne, Florida" />
        <meta name="geo.position" content="28.0836;-80.6081" />
        <meta name="ICBM" content="28.0836, -80.6081" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative hero-section">
        <img
          src={heroImageMobile}
          srcSet={`${heroImageMobile} 640w, ${heroImageMid} 768w, ${heroImageLarge} 896w, ${heroImageDesktop} 1024w`}
          sizes="100vw"
          alt="Best Computer Tech computer repair and IT support in Palm Bay and Melbourne"
          className="object-cover w-full"
          style={{ minHeight: '580px', maxHeight: '680px' }}
          width={1024}
          height={1024}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl mx-auto">
            <picture>
              <img
                src={logo384Png}
                srcSet={`${logo256Png} 256w, ${logo384Png} 384w`}
                sizes="(max-width: 640px) 240px, 384px"
                alt="Best Computer Tech"
                className="w-[240px] h-auto mx-auto mb-5 drop-shadow-xl sm:w-[340px]"
                width={384}
                height={177}
                decoding="async"
                fetchPriority="high"
              />
            </picture>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-3">
              Palm Bay &amp; Melbourne, FL
            </p>
            <h1 className="mb-4 text-4xl sm:text-5xl font-bold leading-tight">
              Fast, Reliable Computer Repair &amp; IT Support
            </h1>
            <p className="mb-8 text-lg sm:text-xl text-gray-200">
              Local experts you can trust — serving Brevard County homes and businesses since day one.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/diagnose-my-issue"
                className="px-7 py-3 font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors shadow-lg"
              >
                Diagnose My Issue
              </Link>
              <Link
                to="/services"
                className="px-7 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
              >
                View All Services
              </Link>
              <a
                href="tel:+13219535199"
                className="px-7 py-3 font-semibold text-white bg-white/10 border border-white/40 rounded-full hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <FaPhoneAlt className="w-4 h-4" />
                (321) 953-5199
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-blue-700 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-1">
              <FaAward className="w-7 h-7 opacity-80 mb-1" />
              <span className="text-2xl font-bold">10+</span>
              <span className="text-sm text-blue-200">Years of Experience</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FaUsers className="w-7 h-7 opacity-80 mb-1" />
              <span className="text-2xl font-bold">500+</span>
              <span className="text-sm text-blue-200">Happy Clients</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FaRegClock className="w-7 h-7 opacity-80 mb-1" />
              <span className="text-2xl font-bold">Same Day</span>
              <span className="text-sm text-blue-200">Response Time</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FaStar className="w-7 h-7 opacity-80 mb-1" />
              <span className="text-2xl font-bold">5-Star</span>
              <span className="text-sm text-blue-200">Google Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        className={`py-16 bg-gray-50 ${techSolutionsInView ? 'animate-fadeIn' : 'opacity-0'}`}
        ref={techSolutionsRef}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Services</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              From quick fixes to full IT management — we keep your technology running so you don't have to worry.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} onReadMore={handleReadMoreClick} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block px-8 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section
        className={`py-16 bg-white ${whyUsInView ? 'animate-fadeIn' : 'opacity-0'}`}
        ref={whyUsRef}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Why Choose Best Computer Tech?</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              We're your local Brevard County team — not a call center, not a chain. Just real experts who care.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-blue-50">
              <div className="mb-4 p-3 bg-blue-100 rounded-full">
                <FaMapMarkerAlt className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Locally Based</h3>
              <p className="text-sm text-gray-600">We live and work in Palm Bay &amp; Melbourne. We know your community.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-green-50">
              <div className="mb-4 p-3 bg-green-100 rounded-full">
                <FaBolt className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Fast Turnaround</h3>
              <p className="text-sm text-gray-600">Most repairs completed same day or next day. No long waits.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-purple-50">
              <div className="mb-4 p-3 bg-purple-100 rounded-full">
                <FaShieldAlt className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Trusted &amp; Secure</h3>
              <p className="text-sm text-gray-600">We protect your data and privacy on every job, guaranteed.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-yellow-50">
              <div className="mb-4 p-3 bg-yellow-100 rounded-full">
                <FaHandshake className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">No Fix, No Fee</h3>
              <p className="text-sm text-gray-600">If we can't fix it, you don't pay. Simple, honest service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className={`py-16 bg-gray-50 ${testimonialsInView ? 'animate-fadeIn' : 'opacity-0'}`}
        ref={testimonialsRef}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">What Our Customers Say</h2>
            <p className="text-lg text-gray-500">
              Real reviews from real clients across Palm Bay and Melbourne.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/Best+Computer+Tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaStar className="text-yellow-400" />
              Read more reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section
        className={`py-16 bg-white ${blogInView ? 'animate-fadeIn' : 'opacity-0'}`}
        ref={blogRef}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Latest from Our Blog</h2>
            <p className="text-lg text-gray-500">Tech tips, guides, and IT news for homes and businesses.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={post.link || index} post={post} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-block px-8 py-3 font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Fix Your Tech?</h2>
          <p className="text-lg text-blue-200 mb-8">
            Call us, send a message, or book a service online. We're here Mon–Fri, 9am–6pm.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+13219535199"
              className="flex items-center gap-2 px-7 py-3 font-bold text-blue-900 bg-white rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              <FaPhoneAlt className="w-4 h-4" />
              (321) 953-5199
            </a>
            <Link
              to="/contact"
              className="px-7 py-3 font-semibold text-white bg-white/10 border border-white/40 rounded-full hover:bg-white/20 transition-colors"
            >
              Send a Message
            </Link>
            <Link
              to="/book-service"
              className="px-7 py-3 font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors"
            >
              Book a Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
