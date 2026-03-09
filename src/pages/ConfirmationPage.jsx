import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FaCheckCircle, FaPhoneAlt, FaDownload,
  FaDesktop, FaKey, FaWrench, FaHome,
} from 'react-icons/fa';

const steps = [
  {
    icon: FaPhoneAlt,
    color: 'bg-cyan-500',
    title: 'We Contact You',
    desc: 'Our team will call or email you within 1 business day to confirm your appointment and discuss your issue.',
  },
  {
    icon: FaDownload,
    color: 'bg-blue-500',
    title: 'Download RustDesk',
    desc: 'Before your session, download RustDesk — the secure remote tool our technician uses to connect to your computer.',
  },
  {
    icon: FaKey,
    color: 'bg-purple-500',
    title: 'Share Your ID & Password',
    desc: 'Open RustDesk and share your 9-digit ID and one-time password with our technician at session time.',
  },
  {
    icon: FaDesktop,
    color: 'bg-green-500',
    title: 'We Connect & Fix It',
    desc: 'Our technician connects securely to your screen and resolves the issue — you can watch the whole time.',
  },
  {
    icon: FaWrench,
    color: 'bg-orange-500',
    title: 'Follow-Up',
    desc: 'We confirm everything is working and provide tips to prevent the issue from happening again.',
  },
];

const ConfirmationPage = () => (
  <div>
    <Helmet>
      <title>Booking Confirmed | 24/7 Tech On Call</title>
      <meta name="description" content="Your service request has been received. Here's what happens next." />
      <link rel="canonical" href="https://24x7techoncall.com/confirmation" />
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    {/* ── Success Banner ── */}
    <section className="bg-gray-900 border-b-4 border-cyan-500 py-16 px-6 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-5">
          <FaCheckCircle className="w-10 h-10 text-cyan-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Booking Received!</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Thanks for reaching out. We'll contact you within <strong className="text-white">1 business day</strong> to confirm your appointment.
        </p>
      </div>
    </section>

    {/* ── What Happens Next ── */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">Next Steps</p>
          <h2 className="text-3xl font-bold text-gray-900">What Happens Next</h2>
          <p className="text-gray-500 mt-2">Here's the full remote support process from booking to resolution.</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 relative">
                <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center shrink-0 z-10`}>
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step {i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── RustDesk CTA ── */}
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-gray-900 rounded-2xl p-8 text-white text-center border border-gray-800">
          <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
            <FaDownload className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Get Ready for Your Session</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Download RustDesk now so you're ready when our technician calls. It only takes 1 minute to set up.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/rustdesk-support"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-bold text-gray-900 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors shadow-lg"
            >
              <FaDownload className="w-4 h-4" /> Download RustDesk — Step by Step
            </Link>
            <a
              href="tel:3219535199"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-white border border-gray-600 rounded-full hover:bg-white/10 transition-colors"
            >
              <FaPhoneAlt className="w-4 h-4" /> (321) 953-5199
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ── Bottom nav ── */}
    <section className="py-10 bg-gray-50 border-t border-gray-200 text-center">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-600 border border-gray-300 rounded-full hover:border-cyan-400 hover:text-cyan-700 transition-colors"
      >
        <FaHome className="w-3.5 h-3.5" /> Back to Home
      </Link>
    </section>
  </div>
);

export default ConfirmationPage;
