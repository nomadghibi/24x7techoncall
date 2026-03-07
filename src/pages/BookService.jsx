import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import emailjs from 'emailjs-com';
import {
  FaEnvelope, FaPhone, FaCheckCircle,
  FaPhoneAlt, FaClock, FaMapMarkerAlt,
} from 'react-icons/fa';
import socialImage from '../assets/optimized-hero/heroimage100-1152.jpg';

const inputClass =
  'w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition bg-white';
const labelClass = 'block mb-1 text-sm font-semibold text-gray-700';

const steps = [
  { n: '1', text: 'Fill out the form with your contact info and service type.' },
  { n: '2', text: 'We\'ll review your request and call or email you within 1 business day.' },
  { n: '3', text: 'We confirm your appointment time — remote or onsite.' },
  { n: '4', text: 'Our technician resolves your issue and follows up to make sure everything works.' },
];

const BookService = () => {
  const canonicalUrl = 'https://24x7techoncall.com/book-service';
  const pageImage = socialImage?.startsWith('http') ? socialImage : `https://24x7techoncall.com${socialImage || ''}`;

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', serviceType: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const prefill = location.state?.prefill;

  const hasPrefillNotice = useMemo(
    () => Boolean(prefill?.serviceType || prefill?.message),
    [prefill]
  );

  useEffect(() => {
    if (!prefill) return;
    setFormData((prev) => {
      let changed = false;
      const next = { ...prev };

      if (!next.serviceType && typeof prefill.serviceType === 'string' && prefill.serviceType.trim()) {
        next.serviceType = prefill.serviceType.trim();
        changed = true;
      }

      const incomingMessage = typeof prefill.message === 'string' ? prefill.message.trim() : '';
      if (incomingMessage && !next.message.includes(incomingMessage)) {
        next.message = next.message.trim()
          ? `${incomingMessage}\n\n---\n${next.message.trim()}`
          : incomingMessage;
        changed = true;
      }

      return changed ? next : prev;
    });
  }, [prefill]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setSubmitError('Booking is temporarily unavailable. Please call (321) 953-5199 or email 365techoncall@gmail.com.');
      return;
    }

    setIsSubmitting(true);
    emailjs.sendForm(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' });
        navigate('/confirmation');
      })
      .catch(() => {
        setSubmitError('We could not submit your booking right now. Please try again, or call (321) 953-5199.');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div>
      <Helmet>
        <title>Book a Service | 24x7 Tech On Call | Nationwide</title>
        <meta name="description" content="Book computer repair, IT support, and technology services with 24x7 Tech On Call in Nationwide." />
        <meta name="keywords" content="book remote computer service, schedule IT support online, remote computer repair appointment" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Book a Service | 24x7 Tech On Call" />
        <meta property="og:description" content="Schedule your computer and IT service appointment with 24x7 Tech On Call." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Book a Service | 24x7 Tech On Call" />
        <meta name="twitter:description" content="Book a computer or IT support service appointment online." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* ── Hero ── */}
      <section
        className="relative min-h-[360px] flex items-end text-white"
        style={{ backgroundImage: `url(${socialImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/55 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-cyan-300 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Book a Service</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Book a Service</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-2xl">
            Schedule your computer repair or IT support appointment — remote or onsite. We respond within 1 business day.
          </p>
          <a
            href="tel:3219535199"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold rounded-full transition-colors shadow-lg"
          >
            <FaPhoneAlt className="w-4 h-4" /> Prefer to call? (321) 953-5199
          </a>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

            {/* LEFT — Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Request an Appointment</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Fill out the form and we'll confirm your booking within 1 business day.
                </p>

                {hasPrefillNotice && (
                  <div className="p-4 mb-6 text-sm text-cyan-800 border border-cyan-200 rounded-lg bg-cyan-50">
                    We pre-filled this request using your estimate details. Edit anything before submitting.
                  </div>
                )}

                {submitted ? (
                  <div className="flex flex-col items-center gap-4 py-10 text-center">
                    <FaCheckCircle className="text-cyan-500 w-16 h-16" />
                    <h3 className="text-2xl font-bold text-gray-800">Booking Received!</h3>
                    <p className="text-gray-600 max-w-sm">
                      Thanks! We'll contact you within 1 business day to confirm your appointment.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-sm text-cyan-500 underline hover:text-cyan-600"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="phone">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="(321) 555-1234"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className={labelClass} htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className={labelClass} htmlFor="service">Type of Service</label>
                      <select
                        id="service"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      >
                        <option value="" disabled>Select a service</option>
                        <optgroup label="Residential">
                          <option value="PC & Laptop Repair">PC &amp; Laptop Repair</option>
                          <option value="Virus & Malware Removal">Virus &amp; Malware Removal</option>
                          <option value="Network Setup & Support">Network Setup &amp; Support</option>
                          <option value="Data Recovery">Data Recovery</option>
                          <option value="Remote Support">Remote Support</option>
                          <option value="Computer Training">Computer Training</option>
                        </optgroup>
                        <optgroup label="Business">
                          <option value="IT Consultancy">IT Consultancy</option>
                          <option value="Cybersecurity">Cybersecurity</option>
                          <option value="Managed IT Services">Managed IT Services</option>
                          <option value="Data Backup and Recovery">Data Backup and Recovery</option>
                          <option value="Cloud Migration Services">Cloud Migration Services</option>
                          <option value="Website Development">Website Development</option>
                          <option value="Network Setup">Network Setup</option>
                          <option value="IT Support">IT Support</option>
                          <option value="Technical Support and Maintenance">Technical Support &amp; Maintenance</option>
                          <option value="Digital Transformation">Digital Transformation</option>
                          <option value="Business Continuity">Business Continuity</option>
                        </optgroup>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className={labelClass} htmlFor="message">
                        Details <span className="font-normal text-gray-400">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Any specific details, symptoms, or requirements..."
                        rows="4"
                      />
                    </div>

                    {submitError && (
                      <div className="p-4 text-sm text-red-800 bg-red-50 border border-red-200 rounded-lg">
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Book Service'}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      Or call us directly at{' '}
                      <a href="tel:3219535199" className="text-cyan-500 hover:underline">(321) 953-5199</a>
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT — Sidebar */}
            <div className="flex flex-col gap-5">

              {/* What to Expect */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-5 border-l-4 border-cyan-500 pl-3">What to Expect</h2>
                <ol className="space-y-4">
                  {steps.map((step) => (
                    <li key={step.n} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-500 text-gray-900 text-xs font-bold flex items-center justify-center">
                        {step.n}
                      </span>
                      <p className="text-sm text-gray-600 leading-relaxed pt-0.5">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-5 border-l-4 border-cyan-500 pl-3">Contact Us Directly</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <FaPhone className="text-cyan-500 w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Phone</p>
                      <a href="tel:+13219535199" className="text-gray-800 font-semibold hover:text-cyan-500 transition-colors">
                        (321) 953-5199
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <FaEnvelope className="text-cyan-500 w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Email</p>
                      <a href="mailto:365techoncall@gmail.com" className="text-gray-800 font-semibold hover:text-cyan-500 transition-colors break-all">
                        365techoncall@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt className="text-cyan-500 w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Service Area</p>
                      <p className="text-gray-800 font-semibold">Nationwide<br /><span className="font-normal text-gray-500 text-sm">Remote support available nationwide</span></p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4 border-l-4 border-cyan-500 pl-3">
                  <FaClock className="text-cyan-500 shrink-0" />
                  <h2 className="text-lg font-bold text-gray-900">Business Hours</h2>
                </div>
                <table className="w-full text-sm text-gray-700">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-semibold">Monday – Friday</td>
                      <td className="py-2 text-right text-cyan-500 font-semibold">9am – 6pm</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-semibold">Saturday</td>
                      <td className="py-2 text-right text-gray-400">Closed</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold">Sunday</td>
                      <td className="py-2 text-right text-gray-400">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Response Promise */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white text-center border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                  <FaCheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="font-bold text-lg">Fast Response</p>
                <p className="text-gray-400 text-sm mt-1">
                  We confirm all bookings within <strong className="text-white">1 business day</strong> — often the same day.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookService;
