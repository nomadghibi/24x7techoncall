import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { locationsByRegion, regionOrder } from '../data/locations';

const BASE_URL = 'https://24x7techoncall.com';
const PHONE_HREF = 'tel:+13219535199';
const PHONE_LABEL = '(321) 953-5199';

const regionColors = {
  'Northeast':    'border-cyan-400   text-cyan-600',
  'Mid-Atlantic': 'border-blue-400   text-blue-600',
  'Southeast':    'border-green-400  text-green-600',
  'Midwest':      'border-yellow-400 text-yellow-600',
  'South':        'border-orange-400 text-orange-600',
  'Mountain':     'border-purple-400 text-purple-600',
  'Pacific':      'border-indigo-400 text-indigo-600',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '24/7 Tech On Call',
  url: `${BASE_URL}/`,
  telephone: '+1-321-953-5199',
  email: '365techoncall@gmail.com',
  areaServed: 'United States',
  priceRange: '$$',
};

function ServiceAreas() {
  const totalCities = regionOrder.reduce((sum, r) => sum + locationsByRegion[r].length, 0);

  return (
    <div>
      <Helmet>
        <title>Remote Tech Support Service Areas | 24/7 Tech On Call</title>
        <meta name="description" content={`24/7 Tech On Call provides remote computer and IT support across all 50 US states. Browse our ${totalCities}+ service area cities and get same-day tech help.`} />
        <meta name="keywords" content="remote tech support service areas, computer help near me, IT support USA, tech support all states, remote computer repair cities" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/service-areas`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Remote Tech Support Service Areas | 24/7 Tech On Call" />
        <meta property="og:description" content={`Remote computer and IT support across ${totalCities}+ US cities. Serving all 50 states.`} />
        <meta property="og:url" content={`${BASE_URL}/service-areas`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-gray-900 py-20 px-6 text-white text-center border-b-4 border-cyan-500">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/40 rounded-full bg-cyan-400/10">
            Nationwide Coverage
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Remote Tech Support <span className="text-cyan-400">Service Areas</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We provide fast, professional remote computer and IT support to homes and businesses in {totalCities}+ cities across all 50 states. No on-site visit required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF}
              className="flex items-center gap-2 px-7 py-3.5 font-bold text-gray-900 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors shadow-lg">
              <FaPhoneAlt className="w-4 h-4" /> {PHONE_LABEL}
            </a>
            <Link to="/book-service"
              className="px-7 py-3.5 font-semibold text-white border border-gray-600 rounded-full hover:bg-white/10 transition-colors">
              Book a Service
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-gray-800 border-b border-gray-700 py-8">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-extrabold text-cyan-400">{totalCities}+</p>
              <p className="text-sm text-gray-400 mt-1">Cities Served</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-cyan-400">50</p>
              <p className="text-sm text-gray-400 mt-1">States Covered</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-cyan-400">100%</p>
              <p className="text-sm text-gray-400 mt-1">Remote Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cities by region ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">Browse by Region</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Find Your City</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Click any city below for a dedicated tech support page with local information and service details.
            </p>
          </div>

          <div className="space-y-14">
            {regionOrder.map((region) => {
              const cities = locationsByRegion[region];
              const colors = regionColors[region] || 'border-gray-400 text-gray-600';
              const [borderColor, textColor] = colors.split(' ');
              return (
                <div key={region}>
                  <div className={`flex items-center gap-3 mb-6 pb-3 border-b-2 ${borderColor}`}>
                    <FaMapMarkerAlt className={`w-5 h-5 ${textColor}`} />
                    <h3 className={`text-xl font-bold text-gray-900`}>{region}</h3>
                    <span className="text-sm text-gray-400">({cities.length} cities)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {cities.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/tech-support/${loc.slug}`}
                        className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-700 hover:shadow-sm transition-all duration-150 group"
                      >
                        <FaMapMarkerAlt className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 shrink-0 transition-colors" />
                        <span className="truncate">{loc.city}, {loc.stateAbbr}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Info section ── */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Don't See Your City?
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Our services are 100% remote — meaning we can help anyone across the United States regardless of location. All you need is a working internet connection. If your city isn't listed, we can still help you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF}
              className="flex items-center gap-2 px-7 py-3.5 font-bold text-gray-900 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors shadow-lg">
              <FaPhoneAlt className="w-4 h-4" /> {PHONE_LABEL}
            </a>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-gray-700 border border-gray-300 rounded-full hover:border-cyan-400 hover:text-cyan-700 transition-colors">
              Send a Message <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gray-900 border-t-4 border-cyan-500 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">Ready to Get Help?</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fast Remote Support, Anywhere in the USA</h2>
          <p className="text-lg text-gray-400 mb-8">
            Call us or book online. Most issues resolved same day. No travel, no waiting.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={PHONE_HREF}
              className="flex items-center gap-2 px-7 py-3.5 font-bold text-gray-900 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors shadow-lg">
              <FaPhoneAlt className="w-4 h-4" /> {PHONE_LABEL}
            </a>
            <Link to="/book-service"
              className="px-7 py-3.5 font-semibold text-white border border-gray-600 rounded-full hover:bg-white/10 transition-colors">
              Book a Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceAreas;
