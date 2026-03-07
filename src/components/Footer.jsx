import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook, FaInstagram, FaGoogle,
  FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope, FaArrowRight,
} from 'react-icons/fa';

const quickLinks = [
  { label: 'Home',        to: '/' },
  { label: 'About Us',    to: '/about-us' },
  { label: 'Pricing',     to: '/pricing' },
  { label: 'Blog',        to: '/blog' },
  { label: 'How To',      to: '/how-to' },
  { label: 'Contact',     to: '/contact' },
];

const serviceLinks = [
  { label: 'Remote Computer Support',  to: '/residential-support/remote-support' },
  { label: 'Virus & Malware Removal',  to: '/residential-support/virus-malware-removal' },
  { label: 'Software Troubleshooting', to: '/residential-support/software-troubleshooting' },
  { label: 'Data Recovery',            to: '/residential-support/data-recovery' },
  { label: 'Cloud Consulting',         to: '/business-solutions/cloud-solutions' },
  { label: 'Managed IT Services',      to: '/business-solutions/managed-it-services' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t-4 border-cyan-500">

      {/* ── Main columns ── */}
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-extrabold text-white tracking-tight">24x7</span>
              <span className="block text-xs font-bold tracking-widest text-cyan-400 uppercase">Tech On Call</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Your trusted remote IT experts, available 24/7 across the USA.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-500 hover:text-gray-900 transition-colors text-gray-400">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-500 hover:text-gray-900 transition-colors text-gray-400">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://www.google.com/search?q=24x7+Tech+On+Call" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-500 hover:text-gray-900 transition-colors text-gray-400">
                <FaGoogle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-5 border-l-2 border-cyan-500 pl-3">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors group">
                    <FaArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-5 border-l-2 border-cyan-500 pl-3">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors group">
                    <FaArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-5 border-l-2 border-cyan-500 pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:3219535199" className="flex items-start gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <FaPhoneAlt className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className="pt-1">(321) 953-5199</span>
                </a>
              </li>
              <li>
                <a href="mailto:365techoncall@gmail.com" className="flex items-start gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <FaEnvelope className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className="pt-1">365techoncall@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className="pt-1">Serving All 50 States</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                  <FaClock className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className="pt-1">Mon – Fri: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-5 max-w-7xl flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; 2009–{currentYear} 24x7 Tech On Call. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Designed by{' '}
            <a href="https://reliablewebstudio.com" target="_blank" rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-400 transition-colors">
              reliablewebstudio.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
