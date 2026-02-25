import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-teal-900 text-gray-300 text-xs py-1.5 px-4 border-b border-teal-800">
      <div className="container mx-auto max-w-7xl flex items-center justify-between gap-4">

        {/* Left: phone + email */}
        <div className="flex items-center gap-4">
          <a
            href="tel:3219535199"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <FaPhoneAlt className="w-3 h-3 text-teal-300" />
            (321) 953-5199
          </a>
          <a
            href="mailto:support@bestcomputertec.com"
            className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <FaEnvelope className="w-3 h-3 text-teal-300" />
            support@bestcomputertec.com
          </a>
        </div>

        {/* Right: hours + location */}
        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-1.5">
            <FaClock className="w-3 h-3 text-teal-300" />
            Mon – Fri: 9:00 AM – 6:00 PM
          </span>
          <span className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="w-3 h-3 text-teal-300" />
            Palm Bay &amp; Melbourne, FL
          </span>
        </div>

      </div>
    </div>
  );
}

export default TopBar;
