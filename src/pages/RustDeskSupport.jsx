import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import emailjs from 'emailjs-com';
import {
  FaCheckCircle,
  FaCopy,
  FaDownload,
  FaEnvelope,
  FaPhoneAlt,
  FaShieldAlt,
  FaSms,
} from 'react-icons/fa';
import heroImage from '../assets/optimized-hero/remotetechsupport-1152.jpg';
import {
  emailPublicKey,
  emailServiceId,
  emailTemplateId,
  isEmailJsConfigured,
} from '../utils/emailjsConfig';

const inputClass =
  'w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition bg-white';
const labelClass = 'block mb-1 text-sm font-semibold text-gray-700';

const steps = [
  'Download and install RustDesk using the official link below.',
  'Open RustDesk and keep it running on your screen.',
  'Send us your RustDesk ID and one-time password using the form, text, or email.',
  'We connect only when you approve the session, and you can end it any time.',
];

const rustDeskLatestReleaseApi = 'https://api.github.com/repos/rustdesk/rustdesk/releases/latest';
const rustDeskLatestReleasePage = 'https://github.com/rustdesk/rustdesk/releases/latest';

const detectClientPlatform = () => {
  if (typeof navigator === 'undefined') {
    return { platform: 'other', arch: '' };
  }

  const ua = navigator.userAgent.toLowerCase();
  const platformHint = (navigator.userAgentData?.platform || navigator.platform || '').toLowerCase();
  const archHint = (navigator.userAgentData?.architecture || '').toLowerCase();
  const archFromUa = /arm64|aarch64|apple silicon/.test(ua)
    ? 'arm64'
    : /x86_64|win64|x64|amd64|intel/.test(ua)
      ? 'x64'
      : '';
  const arch = archHint || archFromUa;

  if (platformHint.includes('win') || ua.includes('windows')) {
    return { platform: 'windows', arch };
  }
  if (platformHint.includes('mac') || ua.includes('mac os')) {
    return { platform: 'macos', arch };
  }
  if (platformHint.includes('linux') || ua.includes('linux')) {
    return { platform: 'linux', arch };
  }

  return { platform: 'other', arch };
};

const getPlatformLabel = (platform) => {
  if (platform === 'windows') return 'Windows';
  if (platform === 'macos') return 'macOS';
  if (platform === 'linux') return 'Linux';
  return 'Unknown';
};

const pickReleaseAssetUrl = (assets, clientPlatform) => {
  const normalized = assets
    .filter((asset) => asset && typeof asset.name === 'string')
    .map((asset) => ({ ...asset, normalizedName: asset.name.toLowerCase() }));
  const findAsset = (rules) => normalized.find((asset) => rules.every((rule) => rule(asset)));
  const has = (text) => (asset) => asset.normalizedName.includes(text);
  const endsWith = (extension) => (asset) => asset.normalizedName.endsWith(extension);

  if (clientPlatform.platform === 'windows') {
    return (
      findAsset([has('x86_64'), endsWith('.exe')])?.browser_download_url
      || findAsset([has('x86_64'), endsWith('.msi')])?.browser_download_url
      || findAsset([endsWith('.exe')])?.browser_download_url
      || findAsset([endsWith('.msi')])?.browser_download_url
      || null
    );
  }

  if (clientPlatform.platform === 'macos') {
    return (
      findAsset([has('universal'), endsWith('.dmg')])?.browser_download_url
      || (clientPlatform.arch === 'arm64'
        ? findAsset([has('aarch64'), endsWith('.dmg')])?.browser_download_url
        : null)
      || findAsset([has('x86_64'), endsWith('.dmg')])?.browser_download_url
      || findAsset([endsWith('.dmg')])?.browser_download_url
      || null
    );
  }

  return null;
};

const templateMessage = `RustDesk Help Request
Name:
RustDesk ID:
One-time password:
Issue:`;

const buildSupportMessage = (formData) => [
  'RustDesk Remote Support Request',
  `Client name: ${formData.name}`,
  `Phone: ${formData.phone}`,
  `Email: ${formData.email}`,
  `Device type: ${formData.deviceType || 'Not provided'}`,
  `RustDesk ID: ${formData.rustdeskId}`,
  `One-time password: ${formData.oneTimePassword}`,
  `Preferred contact method: ${formData.preferredContact}`,
  `Best time to reach: ${formData.bestTime || 'Not provided'}`,
  '',
  'Issue details:',
  formData.issueDetails,
].join('\n');

function RustDeskSupport() {
  const canonicalUrl = 'https://24x7techoncall.com/rustdesk-support';
  const pageImage = heroImage?.startsWith('http') ? heroImage : `https://24x7techoncall.com${heroImage || ''}`;
  const smsBody = useMemo(() => encodeURIComponent(templateMessage), []);
  const clientPlatform = useMemo(detectClientPlatform, []);
  const platformLabel = useMemo(() => getPlatformLabel(clientPlatform.platform), [clientPlatform.platform]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    rustdeskId: '',
    oneTimePassword: '',
    preferredContact: 'Text Message',
    bestTime: '',
    issueDetails: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copyLabel, setCopyLabel] = useState('Copy Message Template');
  const [isResolvingDownload, setIsResolvingDownload] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(templateMessage);
      setCopyLabel('Template Copied');
      window.setTimeout(() => setCopyLabel('Copy Message Template'), 1600);
    } catch {
      setCopyLabel('Copy Failed');
      window.setTimeout(() => setCopyLabel('Copy Message Template'), 1600);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!isEmailJsConfigured) {
      setSubmitError('This form is temporarily unavailable. Please text or email your RustDesk ID and one-time password.');
      return;
    }

    setIsSubmitting(true);
    try {
      const message = buildSupportMessage(formData);
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceType: 'RustDesk Remote Support',
          message,
        },
        emailPublicKey,
      );
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        deviceType: '',
        rustdeskId: '',
        oneTimePassword: '',
        preferredContact: 'Text Message',
        bestTime: '',
        issueDetails: '',
      });
    } catch {
      setSubmitError('We could not send your details right now. Please text (321) 953-5199 or email 365techoncall@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAutoDownload = async () => {
    setDownloadNotice('');
    setIsResolvingDownload(true);

    try {
      const response = await fetch(rustDeskLatestReleaseApi, {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      });

      if (!response.ok) {
        throw new Error(`GitHub API failed with status ${response.status}`);
      }

      const release = await response.json();
      const assets = Array.isArray(release.assets) ? release.assets : [];
      const directAssetUrl = pickReleaseAssetUrl(assets, clientPlatform);
      const fallbackUrl = release?.html_url || rustDeskLatestReleasePage;

      if (directAssetUrl) {
        window.open(directAssetUrl, '_blank', 'noopener,noreferrer');
      } else {
        window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
        setDownloadNotice('We opened the latest RustDesk downloads page because a direct installer was not detected for this device.');
      }
    } catch {
      window.open(rustDeskLatestReleasePage, '_blank', 'noopener,noreferrer');
      setDownloadNotice('Auto-detect could not complete right now, so we opened the latest RustDesk downloads page.');
    } finally {
      setIsResolvingDownload(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>RustDesk Remote Support Setup | 24/7 Tech On Call</title>
        <meta
          name="description"
          content="Install RustDesk in minutes and send your RustDesk ID and one-time password to 24/7 Tech On Call for fast remote support."
        />
        <meta
          name="keywords"
          content="RustDesk install help, RustDesk remote support, remote computer support setup, RustDesk ID and password help"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RustDesk Remote Support Setup | 24/7 Tech On Call" />
        <meta
          property="og:description"
          content="Step-by-step RustDesk setup instructions and direct contact form for remote support."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RustDesk Remote Support Setup | 24/7 Tech On Call" />
        <meta
          name="twitter:description"
          content="Download RustDesk, send your ID and one-time password, and connect with support fast."
        />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      <section
        className="relative min-h-[360px] flex items-end text-white"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/55 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-cyan-300 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">RustDesk Support</span>
          </nav>
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-cyan-300 border border-cyan-300/40 rounded-full bg-cyan-400/10">
            Remote Session Setup
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Install RustDesk and Connect Securely</h1>
          <p className="mt-3 text-cyan-100 text-lg max-w-3xl">
            Follow the steps below, then send your RustDesk ID and one-time password. We will connect only with your permission.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">1) Download RustDesk</h2>
                <p className="text-gray-600 mb-4">
                  Use official links only to avoid unsafe downloads.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={handleAutoDownload}
                    disabled={isResolvingDownload}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-full transition-colors ${
                      isResolvingDownload
                        ? 'text-gray-600 bg-gray-200 cursor-wait'
                        : 'text-gray-900 bg-cyan-500 hover:bg-cyan-400'
                    }`}
                  >
                    <FaDownload className="w-4 h-4" />
                    {isResolvingDownload ? 'Checking Platform...' : `Auto Download for ${platformLabel}`}
                  </button>
                  <a
                    href="https://rustdesk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-700 bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    Official Website
                  </a>
                  <a
                    href="https://github.com/rustdesk/rustdesk/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-700 bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    GitHub Releases
                  </a>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Detected platform: <strong>{platformLabel}</strong>. If this looks wrong, use the manual links above.
                </p>
                {downloadNotice && (
                  <p className="mt-3 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                    {downloadNotice}
                  </p>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2) Quick Setup Steps</h2>
                <div className="space-y-3">
                  {steps.map((step, index) => (
                    <div key={step} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 text-sm font-bold flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 text-sm sm:text-base">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Where to Find Your ID &amp; Password</h2>
                <p className="text-gray-500 text-sm mb-6">After RustDesk opens, you will see this screen. Your ID and one-time password are on the left side.</p>

                {/* RustDesk window mockup */}
                <div className="rounded-xl overflow-hidden border border-gray-300 shadow-md max-w-lg mx-auto">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 bg-gray-800 px-4 py-2.5">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-3 text-gray-300 text-xs font-medium tracking-wide">RustDesk</span>
                  </div>
                  {/* App body */}
                  <div className="bg-gray-100 p-5 flex flex-col sm:flex-row gap-4">
                    {/* Left panel — ID and password */}
                    <div className="flex-1 bg-white rounded-lg border border-gray-200 p-4 space-y-4">
                      <div className="relative">
                        <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">Your ID</p>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-gray-800 tracking-widest">123 456 789</span>
                        </div>
                        {/* Callout */}
                        <div className="mt-2 inline-flex items-center gap-1.5 bg-cyan-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                          <span>①</span> Copy &amp; share this number
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-4 relative">
                        <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">One-Time Password</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-gray-800 tracking-widest">abc · 123</span>
                        </div>
                        {/* Callout */}
                        <div className="mt-2 inline-flex items-center gap-1.5 bg-cyan-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                          <span>②</span> Share this password too
                        </div>
                      </div>
                    </div>
                    {/* Right panel — connect to remote (greyed out, not relevant) */}
                    <div className="flex-1 bg-white rounded-lg border border-gray-200 p-4 opacity-40">
                      <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">Control Remote Device</p>
                      <div className="h-8 bg-gray-200 rounded mb-3" />
                      <div className="h-9 bg-gray-300 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 bg-cyan-50 border border-cyan-200 rounded-xl p-3">
                    <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 text-xs font-bold flex items-center justify-center shrink-0">①</span>
                    <p className="text-sm text-gray-700"><strong>Your ID</strong> — the large number on the left. This is your device address. It never changes.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-cyan-50 border border-cyan-200 rounded-xl p-3">
                    <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 text-xs font-bold flex items-center justify-center shrink-0">②</span>
                    <p className="text-sm text-gray-700"><strong>One-Time Password</strong> — below the ID. It changes every session. Share it only with us.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">3) Send Your RustDesk Code</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Submit below, or send by text/email if that is easier.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center gap-4 py-8 text-center">
                    <FaCheckCircle className="text-cyan-500 w-16 h-16" />
                    <h3 className="text-2xl font-bold text-gray-800">Request Sent</h3>
                    <p className="text-gray-600 max-w-md">
                      We received your RustDesk details. Keep RustDesk open and available while we contact you.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm text-cyan-600 hover:text-cyan-700 underline"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="name">Full Name</label>
                        <input id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass} required />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="phone">Phone Number</label>
                        <input id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="(321) 555-1234" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} required />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="deviceType">Device Type</label>
                        <select id="deviceType" name="deviceType" value={formData.deviceType} onChange={handleChange} className={inputClass}>
                          <option value="">Select a device</option>
                          <option value="Windows">Windows</option>
                          <option value="Mac">Mac</option>
                          <option value="Linux">Linux</option>
                          <option value="Android">Android</option>
                          <option value="iPhone/iPad">iPhone/iPad</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="rustdeskId">RustDesk ID</label>
                        <input id="rustdeskId" name="rustdeskId" value={formData.rustdeskId} onChange={handleChange} className={inputClass} required />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="oneTimePassword">One-Time Password</label>
                        <input id="oneTimePassword" name="oneTimePassword" value={formData.oneTimePassword} onChange={handleChange} className={inputClass} required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="preferredContact">Preferred Contact Method</label>
                        <select id="preferredContact" name="preferredContact" value={formData.preferredContact} onChange={handleChange} className={inputClass}>
                          <option value="Text Message">Text Message</option>
                          <option value="Phone Call">Phone Call</option>
                          <option value="Email">Email</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="bestTime">Best Time to Contact</label>
                        <input id="bestTime" name="bestTime" value={formData.bestTime} onChange={handleChange} className={inputClass} placeholder="Example: Today after 2:00 PM" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="issueDetails">Issue Details</label>
                      <textarea
                        id="issueDetails"
                        name="issueDetails"
                        value={formData.issueDetails}
                        onChange={handleChange}
                        className={`${inputClass} min-h-[130px]`}
                        placeholder="Briefly describe what you need help with."
                        required
                      />
                    </div>

                    {submitError && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full sm:w-auto px-8 py-3.5 font-bold rounded-full transition-colors ${
                        isSubmitting
                          ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                          : 'bg-cyan-500 text-gray-900 hover:bg-cyan-400'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send RustDesk Details'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Send Code Fast</h3>
                <div className="space-y-3">
                  <a
                    href={`sms:+13219535199?&body=${smsBody}`}
                    className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 rounded-full transition-colors"
                  >
                    <FaSms className="w-4 h-4" /> Text Us the Code
                  </a>
                  <a
                    href="mailto:365techoncall@gmail.com?subject=RustDesk%20Support%20Request"
                    className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-200 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <FaEnvelope className="w-4 h-4" /> Email Us
                  </a>
                  <a
                    href="tel:3219535199"
                    className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-200 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <FaPhoneAlt className="w-4 h-4" /> Call (321) 953-5199
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyTemplate}
                  className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200 hover:bg-cyan-100 rounded-full transition-colors"
                >
                  <FaCopy className="w-3.5 h-3.5" /> {copyLabel}
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Security Reminder</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Share only your <strong>RustDesk ID</strong> and <strong>one-time password</strong> for the current session.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Never share bank passwords or permanent account credentials. You can end the session at any time.
                </p>
                <div className="mt-4 flex items-start gap-2 text-sm text-cyan-700 bg-cyan-50 border border-cyan-200 rounded-lg p-3">
                  <FaShieldAlt className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>We connect only when you approve access in RustDesk.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RustDeskSupport;
