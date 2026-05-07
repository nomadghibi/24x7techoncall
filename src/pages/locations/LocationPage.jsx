import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FaLaptopHouse, FaBug, FaWifi, FaChalkboardTeacher, FaDatabase,
  FaCloud, FaNetworkWired, FaQuestionCircle, FaPhoneAlt,
  FaMapMarkerAlt, FaBolt, FaShieldAlt, FaHandshake, FaArrowRight,
} from 'react-icons/fa';
import { locationBySlug } from '../../data/locations';

const BASE_URL = 'https://24x7techoncall.com';
const PHONE_HREF = 'tel:+13219535199';
const PHONE_LABEL = '(321) 953-5199';

const services = [
  { icon: <FaLaptopHouse size={26} color="#14B8A6" />, title: 'Computer Repair & Troubleshooting', desc: 'Remote diagnosis and fix for crashes, freezes, slow performance, and system errors.' },
  { icon: <FaBug size={26} color="#EF4444" />,         title: 'Virus & Malware Removal',           desc: 'Fast, thorough removal of viruses, spyware, ransomware, and browser hijackers.' },
  { icon: <FaWifi size={26} color="#8B5CF6" />,        title: 'Wi-Fi & Internet Help',             desc: 'Fix slow internet, dropped connections, router issues, and Wi-Fi dead zones.' },
  { icon: <FaChalkboardTeacher size={26} color="#10B981" />, title: 'Email, Printer & Software Support', desc: 'Setup and troubleshoot email, printers, Zoom, Microsoft Office, and everyday apps.' },
  { icon: <FaDatabase size={26} color="#FBBF24" />,    title: 'Data Backup & File Transfer',       desc: 'Cloud backup setup, OneDrive sync, and file transfer from old PC to new.' },
  { icon: <FaCloud size={26} color="#6366F1" />,       title: 'Microsoft 365 & Cloud Support',     desc: 'Setup, troubleshooting, and admin support for Microsoft 365 and Teams.' },
  { icon: <FaNetworkWired size={26} color="#0891b2" />,title: 'Managed IT Support',                desc: 'Proactive remote monitoring, patching, and maintenance for businesses.' },
  { icon: <FaQuestionCircle size={26} color="#EC4899" />, title: 'Tech Help for Seniors',         desc: 'Patient, plain-language remote support for seniors — email, Zoom, tablets, and more.' },
];

const whyUs = [
  { icon: FaMapMarkerAlt, title: 'Nationwide Service',     text: 'We serve all 50 states remotely — no on-site visit needed.',   color: 'border-cyan-400',   iconBg: 'bg-cyan-50',   iconText: 'text-cyan-500' },
  { icon: FaBolt,         title: 'Fast Turnaround',        text: 'Most issues resolved same day. No long waits.',                 color: 'border-green-400',  iconBg: 'bg-green-50',  iconText: 'text-green-500' },
  { icon: FaShieldAlt,    title: 'Trusted & Secure',       text: 'We protect your data and privacy on every job, guaranteed.',    color: 'border-purple-400', iconBg: 'bg-purple-50', iconText: 'text-purple-500' },
  { icon: FaHandshake,    title: 'Clear, Honest Pricing',  text: 'Straightforward support with fair, upfront pricing.',           color: 'border-yellow-400', iconBg: 'bg-yellow-50', iconText: 'text-yellow-500' },
];

function LocationPage() {
  const { citySlug } = useParams();
  const loc = locationBySlug[citySlug];

  if (!loc) return <Navigate to="/service-areas" replace />;

  const { city, state, stateAbbr } = loc;
  const displayName = `${city}, ${stateAbbr}`;
  const fullTitle = `Remote Tech Support in ${displayName} | 24/7 Tech On Call`;
  const metaDesc = `Professional remote computer and IT support for homes and businesses in ${city}, ${state}. Virus removal, repairs, Wi-Fi help, and more — no visit required. Call (321) 953-5199.`;
  const canonicalUrl = `${BASE_URL}/tech-support/${citySlug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '24/7 Tech On Call',
    url: `${BASE_URL}/`,
    telephone: '+1-321-953-5199',
    email: '365techoncall@gmail.com',
    priceRange: '$$',
    areaServed: { '@type': 'City', name: city, containedInPlace: { '@type': 'State', name: state } },
    serviceType: ['Remote Computer Support', 'Virus Removal', 'Software Troubleshooting', 'Data Recovery', 'Wi-Fi Help', 'Microsoft 365 Support'],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '10:00', closes: '17:00' },
    ],
  };

  return (
    <div>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={`remote tech support ${city}, computer repair ${city} ${stateAbbr}, IT support ${city}, virus removal ${city}, tech help ${state}`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative bg-gray-900 py-20 px-6 text-white text-center border-b-4 border-cyan-500">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/40 rounded-full bg-cyan-400/10">
            Remote Tech Support — {displayName}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
            Expert Tech Support in <span className="text-cyan-400">{city}</span>, {stateAbbr}
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Fast, reliable remote computer and IT support for homes and businesses in {city}, {state}. No visit needed — we fix it remotely, same day.
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

      {/* ── Services ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Services Available in {city}, {stateAbbr}
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              All services are delivered 100% remotely — available to any home or business in {city} and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="mb-4 w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center">{s.icon}</div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/residential-services"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
              View All Services <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">Why Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Why {city} Residents Choose 24/7 Tech On Call
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Real technicians, fast response, and fair pricing — serving {city} and all of {state}.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ icon: Icon, title, text, color, iconBg, iconText }) => (
              <div key={title} className={`flex flex-col items-center text-center p-7 rounded-2xl border-t-4 ${color} bg-white shadow-sm hover:shadow-md transition-shadow`}>
                <div className={`mb-4 w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${iconText}`} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local Context ── */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Serving {city}, {state} and Surrounding Areas
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Whether you're a homeowner, small business, or enterprise in {city}, our remote technicians are ready to help. We connect securely to your computer within minutes and resolve most issues the same day — without any on-site visit.
          </p>
          <p className="text-gray-500 mb-8 leading-relaxed">
            We proudly serve customers throughout {state}, including {city} and nearby communities. All you need is a working internet connection.
          </p>
          <Link to="/service-areas" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors">
            View all service areas <FaArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gray-900 border-t-4 border-cyan-500 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">Get Help Now</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Tech Support in {city}?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Call us now or book online. We're available Monday-Friday, 10:00 AM-5:00 PM.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={PHONE_HREF}
              className="flex items-center gap-2 px-7 py-3.5 font-bold text-gray-900 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors shadow-lg">
              <FaPhoneAlt className="w-4 h-4" /> {PHONE_LABEL}
            </a>
            <Link to="/contact"
              className="px-7 py-3.5 font-semibold text-white border border-gray-600 rounded-full hover:bg-white/10 transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LocationPage;
