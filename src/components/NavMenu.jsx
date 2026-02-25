import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaBars, FaTimes, FaChevronDown, FaPhoneAlt,
  FaLaptop, FaBug, FaTools, FaHdd, FaWifi, FaDesktop,
  FaComments, FaGraduationCap, FaHome, FaShieldAlt, FaLock,
  FaSearch, FaServer, FaCogs, FaDatabase, FaCloud,
  FaCheckCircle, FaChartLine, FaHeadphones,
} from 'react-icons/fa';
import logoNew from '../assets/optimized-logo/logo-transparent.png';

// ── Route prefetching ──────────────────────────────────────────────────────
const routePrefetchers = {
  '/': () => import('../pages/Home'),
  '/about-us': () => import('../pages/AboutUs'),
  '/diagnose-my-issue': () => import('../pages/DiagnoseMyIssue'),
  '/residential-services': () => import('../pages/ResidentialServices'),
  '/residential-support/pc-laptop-repairs': () => import('../pages/residentialsupport/PcLaptopRepairs'),
  '/residential-support/virus-malware-removal': () => import('../pages/residentialsupport/VirusMalwareRemoval'),
  '/residential-support/software-troubleshooting': () => import('../pages/residentialsupport/SoftwareTroubleshooting'),
  '/residential-support/data-recovery': () => import('../pages/residentialsupport/DataRecovery'),
  '/residential-support/network-setup-support': () => import('../pages/residentialsupport/NetworkSetupSupport'),
  '/residential-support/remote-support': () => import('../pages/residentialsupport/RemoteSupport'),
  '/residential-support/tech-consultation': () => import('../pages/residentialsupport/TechConsultation'),
  '/residential-support/computer-training': () => import('../pages/residentialsupport/ComputerTraining'),
  '/residential-support/home-office-setup': () => import('../pages/residentialsupport/HomeOfficeSetup'),
  '/residential-support/backup-data-protection': () => import('../pages/residentialsupport/BackupDataProtection'),
  '/residential-support/cybersecurity-home': () => import('../pages/residentialsupport/CybersecurityHome'),
  '/business-services': () => import('../pages/BusinessServices'),
  '/business-solutions/it-consulting': () => import('../pages/businesssolutions/ITConsulting'),
  '/business-solutions/network-setup': () => import('../pages/businesssolutions/NetworkSetup'),
  '/business-solutions/managed-it-services': () => import('../pages/businesssolutions/ManagedITServices'),
  '/business-solutions/data-recovery': () => import('../pages/businesssolutions/BusinessDataRecovery'),
  '/business-solutions/cloud-solutions': () => import('../pages/businesssolutions/CloudSolutions'),
  '/business-solutions/cybersecurity': () => import('../pages/businesssolutions/BusinessCybersecurity'),
  '/business-solutions/it-support': () => import('../pages/businesssolutions/ITSupport'),
  '/business-solutions/business-continuity': () => import('../pages/businesssolutions/BusinessContinuity'),
  '/business-solutions/computer-training': () => import('../pages/businesssolutions/BusinessComputerTraining'),
  '/business-solutions/digital-transformation': () => import('../pages/businesssolutions/DigitalTransformation'),
  '/contact': () => import('../pages/Contact'),
  '/how-to': () => import('../pages/HowTo'),
  '/blog': () => import('../pages/BlogOverview'),
};

const prefetchedPaths = new Set();

// ── Dropdown data ──────────────────────────────────────────────────────────
const residentialLinks = [
  { label: 'PC & Laptop Repairs',        to: '/residential-support/pc-laptop-repairs',       icon: FaLaptop },
  { label: 'Virus & Malware Removal',    to: '/residential-support/virus-malware-removal',    icon: FaBug },
  { label: 'Software Troubleshooting',   to: '/residential-support/software-troubleshooting', icon: FaTools },
  { label: 'Data Recovery',              to: '/residential-support/data-recovery',            icon: FaHdd },
  { label: 'Network Setup & Support',    to: '/residential-support/network-setup-support',    icon: FaWifi },
  { label: 'Remote Support',             to: '/residential-support/remote-support',           icon: FaDesktop },
  { label: 'Tech Consultation',          to: '/residential-support/tech-consultation',        icon: FaComments },
  { label: 'Computer Training',          to: '/residential-support/computer-training',        icon: FaGraduationCap },
  { label: 'Home Office Setup',          to: '/residential-support/home-office-setup',        icon: FaHome },
  { label: 'Backup & Data Protection',   to: '/residential-support/backup-data-protection',   icon: FaShieldAlt },
  { label: 'Cybersecurity for Home',     to: '/residential-support/cybersecurity-home',       icon: FaLock },
];

const businessLinks = [
  { label: 'IT Consulting',              to: '/business-solutions/it-consulting',             icon: FaSearch },
  { label: 'Network Setup',              to: '/business-solutions/network-setup',             icon: FaServer },
  { label: 'Managed IT Services',        to: '/business-solutions/managed-it-services',       icon: FaCogs },
  { label: 'Data Recovery',              to: '/business-solutions/data-recovery',             icon: FaDatabase },
  { label: 'Cloud Solutions',            to: '/business-solutions/cloud-solutions',           icon: FaCloud },
  { label: 'Cybersecurity',              to: '/business-solutions/cybersecurity',             icon: FaShieldAlt },
  { label: 'IT Support',                 to: '/business-solutions/it-support',                icon: FaHeadphones },
  { label: 'Business Continuity',        to: '/business-solutions/business-continuity',       icon: FaCheckCircle },
  { label: 'Computer Training',          to: '/business-solutions/computer-training',         icon: FaGraduationCap },
  { label: 'Digital Transformation',     to: '/business-solutions/digital-transformation',    icon: FaChartLine },
];

// ── Component ──────────────────────────────────────────────────────────────
const NavMenu = () => {
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [businessOpen, setBusinessOpen]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen]   = useState(false);
  const [scrolled, setScrolled]               = useState(false);
  const location  = useLocation();
  const navigate  = useNavigate();

  // Close menus on route change
  useEffect(() => {
    closeSubmenus();
    setMobileMenuOpen(false);
  }, [location]);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeSubmenus = () => {
    setResidentialOpen(false);
    setBusinessOpen(false);
  };

  const handleSubmenuToggle = (menu) => {
    if (menu === 'residential') {
      setResidentialOpen((v) => !v);
      setBusinessOpen(false);
      prefetchPath('/residential-services');
    } else {
      setBusinessOpen((v) => !v);
      setResidentialOpen(false);
      prefetchPath('/business-services');
    }
  };

  const handleMenuClick = (path) => {
    prefetchPath(path);
    if (location.pathname !== path) navigate(path);
    closeSubmenus();
    focusMain();
  };

  const handleSubmenuItemClick = () => {
    closeSubmenus();
    setMobileMenuOpen(false);
    focusMain();
  };

  const handleDirectLinkClick = () => {
    closeSubmenus();
    focusMain();
  };

  const focusMain = () => {
    const el = document.getElementById('main-content');
    if (el) window.setTimeout(() => el.focus(), 0);
  };

  const prefetchPath = (path) => {
    const prefetch = routePrefetchers[path];
    if (!prefetch || prefetchedPaths.has(path)) return;
    prefetchedPaths.add(path);
    void prefetch();
  };

  const prefetchFromLink = (target) => {
    const link = target?.closest?.('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href?.startsWith('/')) prefetchPath(href);
  };

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  const mainNavButtonClass = (isCurrent = false) =>
    `inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
      isCurrent
        ? 'bg-white/20 text-white ring-1 ring-white/40 shadow-sm'
        : 'bg-white/10 text-gray-100 ring-1 ring-white/20 hover:bg-white/20 hover:text-white'
    }`;

  const linkClass = (path) => mainNavButtonClass(isActive(path));

  // ── Dropdown panel ────────────────────────────────────────────────────
  const DropdownPanel = ({ links, viewAllTo, viewAllLabel, open }) => (
    <div
      className={`absolute left-0 top-full z-50 mt-0 min-w-max bg-white rounded-b-xl shadow-2xl border-t-4 border-blue-600 ${
        open ? 'block' : 'hidden'
      }`}
    >
      <div className="p-3 grid grid-cols-2 gap-0.5">
        {links.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors whitespace-nowrap"
            onClick={handleSubmenuItemClick}
          >
            <item.icon className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            {item.label}
          </Link>
        ))}
      </div>
      <div className="border-t border-gray-100 px-4 py-2.5">
        <Link
          to={viewAllTo}
          className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          onClick={handleSubmenuItemClick}
        >
          {viewAllLabel} →
        </Link>
      </div>
    </div>
  );

  return (
    <nav
      className="fixed top-7 z-40 w-full px-4 pt-2 text-white"
      onMouseOver={(e) => prefetchFromLink(e.target)}
      onFocusCapture={(e) => prefetchFromLink(e.target)}
    >
      <div className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl shadow-black/50 ring-1 ring-white/10'
          : 'bg-gray-900/72 backdrop-blur-sm shadow-lg shadow-black/35 ring-1 ring-white/10'
      }`}>
      <div className="flex items-center justify-between px-6 py-3">

        {/* ── Logo ── */}
        <Link
          to="/"
          className="flex items-center shrink-0 rounded-xl px-2 py-1.5"
          onClick={handleDirectLinkClick}
        >
          <img
            src={logoNew}
            alt="Best Computer Tech"
            className="h-10 w-auto sm:h-12"
            decoding="async"
          />
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-3 lg:gap-4">
          <li>
            <Link to="/about-us" className={linkClass('/about-us')} onClick={handleDirectLinkClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/diagnose-my-issue" className={linkClass('/diagnose-my-issue')} onClick={handleDirectLinkClick}>
              Diagnose My Issue
            </Link>
          </li>

          {/* Residential dropdown */}
          <li
            className="relative"
            onMouseEnter={() => { setResidentialOpen(true); prefetchPath('/residential-services'); }}
            onMouseLeave={closeSubmenus}
          >
            <button
              className={mainNavButtonClass(
                isActive('/residential-services') || isActive('/residential-support')
              )}
              onClick={(e) => { e.preventDefault(); handleMenuClick('/residential-services'); }}
            >
              Residential Services
              <FaChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${residentialOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <DropdownPanel
              links={residentialLinks}
              viewAllTo="/residential-services"
              viewAllLabel="View All Residential Services"
              open={residentialOpen}
            />
          </li>

          {/* Business dropdown */}
          <li
            className="relative"
            onMouseEnter={() => { setBusinessOpen(true); prefetchPath('/business-services'); }}
            onMouseLeave={closeSubmenus}
          >
            <button
              className={mainNavButtonClass(
                isActive('/business-services') || isActive('/business-solutions')
              )}
              onClick={(e) => { e.preventDefault(); handleMenuClick('/business-services'); }}
            >
              Business Solutions
              <FaChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${businessOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <DropdownPanel
              links={businessLinks}
              viewAllTo="/business-services"
              viewAllLabel="View All Business Solutions"
              open={businessOpen}
            />
          </li>

          <li>
            <Link to="/pricing" className={linkClass('/pricing')} onClick={handleDirectLinkClick}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/blog" className={linkClass('/blog')} onClick={handleDirectLinkClick}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/how-to" className={linkClass('/how-to')} onClick={handleDirectLinkClick}>
              How To
            </Link>
          </li>
          <li>
            <Link to="/contact" className={linkClass('/contact')} onClick={handleDirectLinkClick}>
              Contact
            </Link>
          </li>
        </ul>

        {/* ── Phone CTA (desktop) ── */}
        <a
          href="tel:3219535199"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-semibold rounded-full shrink-0"
        >
          <FaPhoneAlt className="w-3.5 h-3.5" />
          (321) 953-5199
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden p-2 text-gray-200 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 border-t border-gray-700/60 rounded-b-2xl overflow-hidden">
          <div className="flex flex-col">
            <Link to="/" className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>Home</Link>
            <Link to="/about-us" className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>About Us</Link>
            <Link to="/diagnose-my-issue" className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>Diagnose My Issue</Link>

            {/* Residential mobile toggle */}
            <button
              className="flex items-center justify-between px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors text-left"
              onClick={() => handleSubmenuToggle('residential')}
            >
              <span>Residential Services</span>
              <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${residentialOpen ? 'rotate-180' : ''}`} />
            </button>
            {residentialOpen && (
              <div className="bg-gray-800 border-l-4 border-blue-600 ml-6">
                {residentialLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-2.5 px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                    onClick={handleSubmenuItemClick}
                  >
                    <item.icon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Business mobile toggle */}
            <button
              className="flex items-center justify-between px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors text-left"
              onClick={() => handleSubmenuToggle('business')}
            >
              <span>Business Solutions</span>
              <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${businessOpen ? 'rotate-180' : ''}`} />
            </button>
            {businessOpen && (
              <div className="bg-gray-800 border-l-4 border-blue-600 ml-6">
                {businessLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-2.5 px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                    onClick={handleSubmenuItemClick}
                  >
                    <item.icon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/pricing" className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>Pricing</Link>
            <Link to="/blog" className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>Blog</Link>
            <Link to="/how-to" className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>How To</Link>
            <Link to="/contact" className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>Contact</Link>

            {/* Mobile phone CTA */}
            <div className="px-6 py-4 border-t border-gray-700">
              <a
                href="tel:3219535199"
                className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-semibold rounded-full"
              >
                <FaPhoneAlt className="w-3.5 h-3.5" />
                Call Us: (321) 953-5199
              </a>
            </div>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
};

export default NavMenu;
