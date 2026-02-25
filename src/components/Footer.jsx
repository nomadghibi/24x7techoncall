import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook, FaInstagram, FaGoogle,
  FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope,
} from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Blog', to: '/blog' },
  { label: 'How To', to: '/how-to' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'PC & Laptop Repairs', to: '/residential-support/pc-laptop-repairs' },
  { label: 'Virus & Malware Removal', to: '/residential-support/virus-malware-removal' },
  { label: 'Network Setup & Support', to: '/residential-support/network-setup-support' },
  { label: 'Remote Support', to: '/residential-support/remote-support' },
  { label: 'Managed IT Services', to: '/business-solutions/managed-it-services' },
  { label: 'Cybersecurity', to: '/business-solutions/cybersecurity' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-300">
      {/* ── Main columns ── */}
      <div className="container mx-auto px-6 py-14 max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-white text-lg font-bold mb-2">Best Computer Tech LLC</h2>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Your local IT experts serving Palm Bay, Melbourne, and all of Brevard County, FL since 2009.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition-colors text-white"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-pink-500 transition-colors text-white"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.google.com/search?q=best+computer+tech+palm+bay+fl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Reviews"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-500 transition-colors text-white"
              >
                <FaGoogle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <FaPhoneAlt className="mt-0.5 shrink-0 text-blue-400" />
                <a href="tel:3219535199" className="text-gray-400 hover:text-white transition-colors">
                  (321) 953-5199
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <FaEnvelope className="mt-0.5 shrink-0 text-blue-400" />
                <a href="mailto:support@bestcomputertec.com" className="text-gray-400 hover:text-white transition-colors">
                  support@bestcomputertec.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-blue-400" />
                <span className="text-gray-400">Palm Bay &amp; Melbourne, FL<br />Brevard County</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <FaClock className="mt-0.5 shrink-0 text-blue-400" />
                <span className="text-gray-400">Mon – Fri: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-5 max-w-7xl flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; 2009–{currentYear} Best Computer Tech LLC. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Designed by{' '}
            <a
              href="https://reliablewebstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              reliablewebstudio.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
