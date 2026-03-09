import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaBars, FaTimes, FaChevronDown, FaPhoneAlt,
  FaBug, FaWifi, FaDesktop,
  FaShieldAlt,
  FaCogs, FaDatabase, FaCloud,
  FaChartLine, FaHeadphones,
  FaEnvelope, FaTachometerAlt, FaUsers, FaNetworkWired, FaUserCog, FaLaptopHouse,
} from 'react-icons/fa';

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
  '/residential-support/computer-repair': () => import('../pages/residentialsupport/ComputerRepair'),
  '/residential-support/wifi-internet-help': () => import('../pages/residentialsupport/WifiInternetHelp'),
  '/residential-support/email-printer-software': () => import('../pages/residentialsupport/EmailPrinterSoftware'),
  '/residential-support/pc-tune-up': () => import('../pages/residentialsupport/PcTuneUp'),
  '/residential-support/data-backup-transfer': () => import('../pages/residentialsupport/DataBackupTransfer'),
  '/residential-support/new-computer-setup': () => import('../pages/residentialsupport/NewComputerSetup'),
  '/residential-support/senior-tech-help': () => import('../pages/residentialsupport/SeniorTechHelp'),
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
  '/business-solutions/remote-help-desk': () => import('../pages/businesssolutions/RemoteHelpDesk'),
  '/business-solutions/microsoft-365-support': () => import('../pages/businesssolutions/Microsoft365Support'),
  '/business-solutions/user-device-management': () => import('../pages/businesssolutions/UserDeviceManagement'),
  '/business-solutions/backup-recovery-support': () => import('../pages/businesssolutions/BackupRecoverySupport'),
  '/business-solutions/network-remote-access': () => import('../pages/businesssolutions/NetworkRemoteAccess'),
  '/contact': () => import('../pages/Contact'),
  '/how-to': () => import('../pages/HowTo'),
  '/blog': () => import('../pages/BlogOverview'),
  '/rustdesk-support': () => import('../pages/RustDeskSupport'),
  '/service-areas': () => import('../pages/ServiceAreas'),
};

const prefetchedPaths = new Set();

// ── Dropdown data ──────────────────────────────────────────────────────────
const residentialLinks = [
  { label: 'Computer Repair & Troubleshooting', to: '/residential-support/computer-repair',       icon: FaLaptopHouse },
  { label: 'Virus & Malware Removal',           to: '/residential-support/virus-malware-removal', icon: FaBug },
  { label: 'Wi-Fi & Internet Help',             to: '/residential-support/wifi-internet-help',    icon: FaWifi },
  { label: 'Email, Printer & Software Support', to: '/residential-support/email-printer-software', icon: FaEnvelope },
  { label: 'PC Tune-Up & Optimization',         to: '/residential-support/pc-tune-up',            icon: FaTachometerAlt },
  { label: 'Data Backup & File Transfer',        to: '/residential-support/data-backup-transfer',  icon: FaDatabase },
  { label: 'New Computer Setup',                to: '/residential-support/new-computer-setup',    icon: FaDesktop },
  { label: 'Tech Help for Seniors',             to: '/residential-support/senior-tech-help',      icon: FaUsers },
];

const businessLinks = [
  { label: 'Managed IT Support',          to: '/business-solutions/managed-it-services',    icon: FaCogs },
  { label: 'Remote Help Desk',            to: '/business-solutions/remote-help-desk',       icon: FaHeadphones },
  { label: 'Microsoft 365 Support',       to: '/business-solutions/microsoft-365-support',  icon: FaCloud },
  { label: 'User & Device Management',    to: '/business-solutions/user-device-management', icon: FaUserCog },
  { label: 'Cybersecurity Support',       to: '/business-solutions/cybersecurity',          icon: FaShieldAlt },
  { label: 'Backup & Recovery Support',   to: '/business-solutions/backup-recovery-support', icon: FaDatabase },
  { label: 'Network & Remote Access',     to: '/business-solutions/network-remote-access',  icon: FaNetworkWired },
  { label: 'Monthly IT Support Plans',    to: '/business-services#managed-plans',           icon: FaChartLine },
];

// ── Component ──────────────────────────────────────────────────────────────
const NavMenu = () => {
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [businessOpen, setBusinessOpen]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen]   = useState(false);
  const [scrolled, setScrolled]               = useState(false);
  const closeTimer = useRef(null);
  const location  = useLocation();
  const navigate  = useNavigate();

  useEffect(() => {
    closeSubmenus();
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeSubmenus = () => {
    setResidentialOpen(false);
    setBusinessOpen(false);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(closeSubmenus, 200);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
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

  const isResidentialContext =
    location.pathname === '/residential-services' ||
    location.pathname.startsWith('/residential-support');
  const isBusinessContext =
    location.pathname === '/business-services' ||
    location.pathname.startsWith('/business-solutions');
  const menuProfile = isResidentialContext
    ? 'residential'
    : isBusinessContext
      ? 'business'
      : 'default';
  const isHome = location.pathname === '/';

  const linkClass = (path) =>
    `text-sm font-medium transition-colors hover:text-cyan-400 ${
      isActive(path) ? 'text-cyan-400 border-b-2 border-cyan-400 pb-0.5' : 'text-gray-200'
    }`;

  if (isHome) {
    return (
      <nav
        className="fixed top-0 z-40 w-full text-white"
        onMouseOver={(e) => prefetchFromLink(e.target)}
        onFocusCapture={(e) => prefetchFromLink(e.target)}
      >
        <div className={`w-full border-b-2 border-cyan-500 transition-all duration-300 ${
          scrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900'
        }`}>
          <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 max-w-7xl">
            <Link to="/" className="text-lg sm:text-xl font-extrabold tracking-tight text-white" onClick={handleDirectLinkClick}>
              24/7 Tech On Call
            </Link>
            <a
              href="tel:3219535199"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan-500 hover:bg-cyan-400 transition-colors text-gray-900 text-xs sm:text-sm font-bold rounded-full shrink-0"
            >
              <FaPhoneAlt className="w-3.5 h-3.5" />
              (321) 953-5199
            </a>
          </div>
          <div className="border-t border-gray-700/60">
            <div className="container mx-auto grid grid-cols-2 gap-2 px-4 sm:px-6 py-2.5 max-w-7xl">
              <Link
                to="/residential-services"
                className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700 transition-colors"
                onClick={handleDirectLinkClick}
              >
                Residential Services
              </Link>
              <Link
                to="/business-services"
                className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700 transition-colors"
                onClick={handleDirectLinkClick}
              >
                Business Services
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // ── Dropdown panel ────────────────────────────────────────────────────
  const DropdownPanel = ({ links, viewAllTo, viewAllLabel, open }) => (
    <div
      className={`absolute left-0 top-full z-50 mt-1 min-w-max bg-white rounded-xl shadow-2xl border-t-4 border-cyan-500 ${
        open ? 'block' : 'hidden'
      }`}
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
    >
      <div className="p-3 grid grid-cols-2 gap-0.5">
        {links.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-cyan-50 hover:text-cyan-700 transition-colors whitespace-nowrap"
            onClick={handleSubmenuItemClick}
          >
            <item.icon className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
            {item.label}
          </Link>
        ))}
      </div>
      <div className="border-t border-gray-100 px-4 py-2.5">
        <Link
          to={viewAllTo}
          className="text-xs font-semibold text-cyan-600 hover:text-cyan-800 transition-colors"
          onClick={handleSubmenuItemClick}
        >
          {viewAllLabel} →
        </Link>
      </div>
    </div>
  );

  return (
    <nav
      className="fixed top-0 z-40 w-full text-white"
      onMouseOver={(e) => prefetchFromLink(e.target)}
      onFocusCapture={(e) => prefetchFromLink(e.target)}
    >
      <div className={`w-full border-b-2 border-cyan-500 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900'
      }`}>
        <div className="container mx-auto flex items-center justify-between px-6 py-4 max-w-7xl">

          {/* ── Text Logo ── */}
          <Link to="/" className="flex flex-col leading-tight shrink-0" onClick={handleDirectLinkClick}>
            <span className="text-2xl font-extrabold tracking-tight text-white">24/7</span>
            <span className="text-sm font-bold tracking-widest text-cyan-400 uppercase">Tech On Call</span>
          </Link>

          {/* ── Desktop nav links ── */}
          <ul className="hidden md:flex items-center gap-5 lg:gap-7">
            <li>
              <Link to="/about-us" className={linkClass('/about-us')} onClick={handleDirectLinkClick}>
                About Us
              </Link>
            </li>
            {menuProfile !== 'business' && (
              <li
                className="relative"
                onMouseEnter={() => { cancelClose(); setResidentialOpen(true); prefetchPath('/residential-services'); }}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-cyan-400 ${
                    isActive('/residential-services') || isActive('/residential-support')
                      ? 'text-cyan-400'
                      : 'text-gray-200'
                  }`}
                  onClick={(e) => { e.preventDefault(); handleMenuClick('/residential-services'); }}
                >
                  Residential Services
                  <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${residentialOpen ? 'rotate-180' : ''}`} />
                </button>
                <DropdownPanel
                  links={residentialLinks}
                  viewAllTo="/residential-services"
                  viewAllLabel="View All Residential Services"
                  open={residentialOpen}
                />
              </li>
            )}

            {menuProfile !== 'residential' && (
              <li
                className="relative"
                onMouseEnter={() => { cancelClose(); setBusinessOpen(true); prefetchPath('/business-services'); }}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-cyan-400 ${
                    isActive('/business-services') || isActive('/business-solutions')
                      ? 'text-cyan-400'
                      : 'text-gray-200'
                  }`}
                  onClick={(e) => { e.preventDefault(); handleMenuClick('/business-services'); }}
                >
                  Business Solutions
                  <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${businessOpen ? 'rotate-180' : ''}`} />
                </button>
                <DropdownPanel
                  links={businessLinks}
                  viewAllTo="/business-services"
                  viewAllLabel="View All Business Solutions"
                  open={businessOpen}
                />
              </li>
            )}

            <li>
              <Link
                to={isBusinessContext ? '/business-services#managed-plans' : '/pricing'}
                className={linkClass(isBusinessContext ? '/business-services' : '/pricing')}
                onClick={handleDirectLinkClick}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/service-areas" className={linkClass('/service-areas')} onClick={handleDirectLinkClick}>
                Service Areas
              </Link>
            </li>
            {menuProfile !== 'business' && (
              <li>
                <Link to="/rustdesk-support" className={linkClass('/rustdesk-support')} onClick={handleDirectLinkClick}>
                  Remote Support
                </Link>
              </li>
            )}
            <li>
              <Link to="/blog" className={linkClass('/blog')} onClick={handleDirectLinkClick}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                state={isBusinessContext ? { prefill: { source: 'business-contact' } } : undefined}
                className={linkClass('/contact')}
                onClick={handleDirectLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* ── Phone CTA (desktop) ── */}
          <a
            href="tel:3219535199"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 transition-colors text-gray-900 text-sm font-bold rounded-full shrink-0"
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
          <div className="md:hidden border-t border-gray-700/60 rounded-b-2xl overflow-hidden">
            <div className="flex flex-col bg-gray-900">
              <Link to="/" className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>Home</Link>
              <Link to="/about-us" className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>About Us</Link>
              {menuProfile !== 'business' && (
                <>
                  <button
                    className="flex items-center justify-between px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors text-left"
                    onClick={() => handleSubmenuToggle('residential')}
                  >
                    <span>Residential Services</span>
                    <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${residentialOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {residentialOpen && (
                    <div className="bg-gray-800 border-l-4 border-cyan-500 ml-6">
                      {residentialLinks.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="flex items-center gap-2.5 px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                          onClick={handleSubmenuItemClick}
                        >
                          <item.icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}

              {menuProfile !== 'residential' && (
                <>
                  <button
                    className="flex items-center justify-between px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors text-left"
                    onClick={() => handleSubmenuToggle('business')}
                  >
                    <span>Business Solutions</span>
                    <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${businessOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {businessOpen && (
                    <div className="bg-gray-800 border-l-4 border-cyan-500 ml-6">
                      {businessLinks.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="flex items-center gap-2.5 px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                          onClick={handleSubmenuItemClick}
                        >
                          <item.icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}

              <Link to={isBusinessContext ? '/business-services#managed-plans' : '/pricing'} className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>Pricing</Link>
              <Link to="/service-areas" className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>Service Areas</Link>
              {menuProfile !== 'business' && (
                <Link to="/rustdesk-support" className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>Remote Support</Link>
              )}
              <Link to="/blog" className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>Blog</Link>
              <Link to="/contact" state={isBusinessContext ? { prefill: { source: 'business-contact' } } : undefined} className="px-6 py-3 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-colors" onClick={handleSubmenuItemClick}>Contact</Link>

              {/* Mobile phone CTA */}
              <div className="px-6 py-4 border-t border-gray-700">
                <a
                  href="tel:3219535199"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-cyan-500 hover:bg-cyan-400 transition-colors text-gray-900 text-sm font-bold rounded-full"
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
