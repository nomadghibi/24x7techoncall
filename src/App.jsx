
import { Suspense, lazy, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

const lazyWithRetry = (importer, retries = 2, retryDelayMs = 350) =>
  lazy(async () => {
    let lastError;

    for (let attempt = 0; attempt <= retries; attempt += 1) {
      try {
        return await importer();
      } catch (error) {
        lastError = error;
        if (attempt === retries) {
          throw error;
        }
        await new Promise((resolve) => {
          window.setTimeout(resolve, retryDelayMs * (attempt + 1));
        });
      }
    }

    throw lastError;
  });

// Dynamic imports for code-splitting
const Home = lazyWithRetry(() => import('./pages/Home'));
const ResidentialServices = lazyWithRetry(() => import('./pages/ResidentialServices'));
const PcLaptopRepairs = lazyWithRetry(() => import('./pages/residentialsupport/PcLaptopRepairs'));
const VirusMalwareRemoval = lazyWithRetry(() => import('./pages/residentialsupport/VirusMalwareRemoval'));
const SoftwareTroubleshooting = lazyWithRetry(() => import('./pages/residentialsupport/SoftwareTroubleshooting'));
const DataRecovery = lazyWithRetry(() => import('./pages/residentialsupport/DataRecovery'));
const NetworkSetupSupport = lazyWithRetry(() => import('./pages/residentialsupport/NetworkSetupSupport'));
const RemoteSupport = lazyWithRetry(() => import('./pages/residentialsupport/RemoteSupport'));
const CloudConsulting = lazyWithRetry(() => import('./pages/CloudConsulting'));
const TechConsultation = lazyWithRetry(() => import('./pages/residentialsupport/TechConsultation'));
const ComputerTraining = lazyWithRetry(() => import('./pages/residentialsupport/ComputerTraining'));
const HomeOfficeSetup = lazyWithRetry(() => import('./pages/residentialsupport/HomeOfficeSetup'));
const BackupDataProtection = lazyWithRetry(() => import('./pages/residentialsupport/BackupDataProtection'));
const CybersecurityHome = lazyWithRetry(() => import('./pages/residentialsupport/CybersecurityHome'));
const BusinessServices = lazyWithRetry(() => import('./pages/BusinessServices'));
const ITConsulting = lazyWithRetry(() => import('./pages/businesssolutions/ITConsulting'));
const NetworkSetup = lazyWithRetry(() => import('./pages/businesssolutions/NetworkSetup'));
const ManagedITServices = lazyWithRetry(() => import('./pages/businesssolutions/ManagedITServices'));
const BusinessDataRecovery = lazyWithRetry(() => import('./pages/businesssolutions/BusinessDataRecovery'));
const CloudSolutions = lazyWithRetry(() => import('./pages/businesssolutions/CloudSolutions'));
const BusinessCybersecurity = lazyWithRetry(() => import('./pages/businesssolutions/BusinessCybersecurity'));
const ITSupport = lazyWithRetry(() => import('./pages/businesssolutions/ITSupport'));
const BusinessContinuity = lazyWithRetry(() => import('./pages/businesssolutions/BusinessContinuity'));
const BusinessComputerTraining = lazyWithRetry(() => import('./pages/businesssolutions/BusinessComputerTraining'));
const DigitalTransformation = lazyWithRetry(() => import('./pages/businesssolutions/DigitalTransformation'));
const TechnicalSupportMaintenance = lazyWithRetry(() => import('./pages/businesssolutions/TechnicalSupportMaintenance'));
const WebsiteDevelopment = lazyWithRetry(() => import('./pages/businesssolutions/WebsiteDevelopment'));
const Services = lazyWithRetry(() => import('./pages/Services'));
const ServiceDetail = lazyWithRetry(() => import('./pages/ServiceDetail'));
const Contact = lazyWithRetry(() => import('./pages/Contact'));
const HowTo = lazyWithRetry(() => import('./pages/HowTo'));
const PayNow = lazyWithRetry(() => import('./pages/PayNow'));
const Checkout = lazyWithRetry(() => import('./pages/Checkout'));
const BlogPost = lazyWithRetry(() => import('./pages/BlogPost'));
const BlogOverview = lazyWithRetry(() => import('./pages/BlogOverview'));
const BookService = lazyWithRetry(() => import('./pages/BookService'));
const Subscribe = lazyWithRetry(() => import('./pages/Subscribe'));
const Pricing = lazyWithRetry(() => import('./pages/Pricing'));
const AboutUs = lazyWithRetry(() => import('./pages/AboutUs'));
const FixBrokenScreen = lazyWithRetry(() => import('./pages/tutorials/FixBrokenScreen'));
const KnowYourComputerHasVirus = lazyWithRetry(() => import('./pages/tutorials/KnowYourComputerHasVirus'));
const SetupNetwork = lazyWithRetry(() => import('./pages/tutorials/SetupNetwork'));
const RecoverData = lazyWithRetry(() => import('./pages/tutorials/RecoverData'));
const UseRemoteSupport = lazyWithRetry(() => import('./pages/tutorials/UseRemoteSupport'));
const ImprovePerformance = lazyWithRetry(() => import('./pages/tutorials/ImprovePerformance'));
const BeSafeOnline = lazyWithRetry(() => import('./pages/tutorials/BeSafeOnline'));
const SetupEmail = lazyWithRetry(() => import('./pages/tutorials/SetUpemail'));
const QuickTechHelp = lazyWithRetry(() => import('./pages/QuickTechHelp'));
const DiagnoseMyIssue = lazyWithRetry(() => import('./pages/DiagnoseMyIssue'));
const ConfirmationPage = lazyWithRetry(() => import('./pages/ConfirmationPage'));
const BuyConfirmationPage = lazyWithRetry(() => import('./pages/BuyConfirmationPage'));

const routePrefetchers = [
  () => import('./pages/Home'),
  () => import('./pages/DiagnoseMyIssue'),
  () => import('./pages/ResidentialServices'),
  () => import('./pages/BusinessServices'),
  () => import('./pages/Services'),
  () => import('./pages/HowTo'),
  () => import('./pages/BlogOverview'),
  () => import('./pages/Contact'),
  () => import('./pages/Pricing'),
  () => import('./pages/AboutUs'),
  () => import('./pages/BookService'),
];

const BASE_URL = 'https://bestcomputertec.com';
const NOINDEX_PATHS = new Set(['/checkout', '/paynow', '/confirmation', '/buy-confirmation']);
const SERVICE_ROOT_PATHS = new Set(['/residential-services', '/business-services', '/services']);
const SERVICE_PATH_PREFIXES = ['/residential-support/', '/business-solutions/', '/services/'];

const areaServed = [
  { '@type': 'City', name: 'Palm Bay' },
  { '@type': 'City', name: 'Melbourne' },
  { '@type': 'City', name: 'West Melbourne' },
  { '@type': 'AdministrativeArea', name: 'Brevard County' },
];

const localBusinessProvider = {
  '@type': 'LocalBusiness',
  name: 'Best Computer Tech LLC',
  url: `${BASE_URL}/`,
  telephone: '+1-321-953-5199',
  email: '365techoncall@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '602 Hurst Rd NE',
    addressLocality: 'Palm Bay',
    addressRegion: 'FL',
    postalCode: '32907',
    addressCountry: 'US',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Best Computer Tech LLC',
  url: `${BASE_URL}/`,
  telephone: '+1-321-953-5199',
  email: '365techoncall@gmail.com',
  priceRange: '$$',
  areaServed,
  address: localBusinessProvider.address,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Best Computer Tech',
  url: `${BASE_URL}/`,
  inLanguage: 'en-US',
};

const toTitleCase = (value) =>
  value
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const getServiceName = (pathname) => {
  if (pathname === '/residential-services') return 'Residential Computer Services';
  if (pathname === '/business-services') return 'Business IT Services';
  if (pathname === '/services') return 'Computer and IT Services';

  const segments = pathname.split('/').filter(Boolean);
  const lastSegment = segments[segments.length - 1];

  if (!lastSegment) return 'Computer and IT Services';
  if (pathname.startsWith('/services/')) return `${toTitleCase(lastSegment)} Service`;

  return toTitleCase(lastSegment);
};

const NotFound = () => (
  <section className="max-w-2xl px-6 py-16 mx-auto text-center">
    <h1 className="mb-4 text-4xl font-bold text-gray-900">Page not found</h1>
    <p className="mb-8 text-lg text-gray-600">
      The page you requested does not exist or may have moved.
    </p>
    <Link
      to="/"
      className="inline-flex items-center px-5 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
    >
      Back to Home
    </Link>
  </section>
);

const App = () => {
  const location = useLocation();
  const normalizedPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '');
  const isNoindexPath = NOINDEX_PATHS.has(normalizedPath);
  const isServicePath =
    SERVICE_ROOT_PATHS.has(normalizedPath) ||
    SERVICE_PATH_PREFIXES.some((prefix) => normalizedPath.startsWith(prefix));
  const canonicalUrl = normalizedPath === '/' ? `${BASE_URL}/` : `${BASE_URL}${normalizedPath}`;
  const serviceName = getServiceName(normalizedPath);
  const serviceSchema = isServicePath
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        serviceType: serviceName,
        description: `Professional ${serviceName.toLowerCase()} in Palm Bay, Melbourne, and Brevard County, Florida.`,
        url: canonicalUrl,
        areaServed,
        provider: localBusinessProvider,
      }
    : null;

  useEffect(() => {
    let cancelled = false;

    const runPrefetch = () => {
      routePrefetchers.forEach((prefetch, index) => {
        window.setTimeout(() => {
          if (!cancelled) {
            void prefetch();
          }
        }, index * 120);
      });
    };

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(runPrefetch, { timeout: 1200 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
      };
    }

    const timeoutId = window.setTimeout(runPrefetch, 300);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <HelmetProvider> {/* Wrap the entire app in HelmetProvider */}
    {!isNoindexPath && (
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        {serviceSchema && (
          <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        )}
      </Helmet>
    )}
    <div className="flex flex-col min-h-screen">
      <NavMenu />
      <main id="main-content" tabIndex={-1} className="flex-grow mt-16">
        <ErrorBoundary key={normalizedPath}>
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[40vh]" role="status" aria-live="polite">
                <div className="w-8 h-8 border-4 border-blue-200 rounded-full border-t-blue-600 animate-spin" aria-hidden="true"></div>
                <span className="sr-only">Loading page</span>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/diagnose-my-issue" element={<DiagnoseMyIssue />} />
              <Route path="/quick-tech-help" element={<QuickTechHelp />} />
              <Route path="/residential-services" element={<ResidentialServices />} />
              <Route path="/residential-support/pc-laptop-repairs" element={<PcLaptopRepairs />} />
              <Route path="/residential-support/virus-malware-removal" element={<VirusMalwareRemoval />} />
              <Route path="/residential-support/software-troubleshooting" element={<SoftwareTroubleshooting />} />
              <Route path="/residential-support/data-recovery" element={<DataRecovery />} />
              <Route path="/residential-support/network-setup-support" element={<NetworkSetupSupport />} />
              <Route path="/residential-support/remote-support" element={<RemoteSupport />} />
              <Route path="/residential-support/cloud-consulting" element={<CloudConsulting />} />
              <Route path="/residential-support/tech-consultation" element={<TechConsultation />} />
              <Route path="/residential-support/computer-training" element={<ComputerTraining />} />
              <Route path="/residential-support/home-office-setup" element={<HomeOfficeSetup />} />
              <Route path="/residential-support/backup-data-protection" element={<BackupDataProtection />} />
              <Route path="/residential-support/cybersecurity-home" element={<CybersecurityHome />} />
              <Route path="/business-services" element={<BusinessServices />} />
              <Route path="/business-solutions/it-consulting" element={<ITConsulting />} />
              <Route path="/business-solutions/network-setup" element={<NetworkSetup />} />
              <Route path="/business-solutions/managed-it-services" element={<ManagedITServices />} />
              <Route path="/business-solutions/data-recovery" element={<BusinessDataRecovery />} />
              <Route path="/business-solutions/cloud-solutions" element={<CloudSolutions />} />
              <Route path="/business-solutions/cybersecurity" element={<BusinessCybersecurity />} />
              <Route path="/business-solutions/it-support" element={<ITSupport />} />
              <Route path="/business-solutions/business-continuity" element={<BusinessContinuity />} />
              <Route path="/business-solutions/computer-training" element={<BusinessComputerTraining />} />
              <Route path="/business-solutions/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/business-solutions/technical-support-maintenance" element={<TechnicalSupportMaintenance />} />
              <Route path="/business-solutions/website-development" element={<WebsiteDevelopment />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/how-to" element={<HowTo />} />
              <Route path="/how-to/fix-broken-screen" element={<FixBrokenScreen />} />
              <Route path="/how-to/know-your-computer-has-virus" element={<KnowYourComputerHasVirus />} />
              <Route path="/how-to/setup-network" element={<SetupNetwork />} />
              <Route path="/how-to/recover-data" element={<RecoverData />} />
              <Route path="/how-to/use-remote-support" element={<UseRemoteSupport />} />
              <Route path="/how-to/improve-performance" element={<ImprovePerformance />} />
              <Route path="/how-to/be-safe-online" element={<BeSafeOnline />} />
              <Route path="/how-to/buy-computer" element={<Navigate to="/how-to" replace />} />
              <Route path="/how-to/set-up-email" element={<SetupEmail />} />
              <Route path="/paynow" element={<PayNow />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/blog" element={<BlogOverview />} />
              <Route path="/book-service" element={<BookService />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/buy-computers" element={<Navigate to="/services" replace />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="/buy-confirmation" element={<BuyConfirmationPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
    </HelmetProvider> // Wrap the entire app in HelmetProvider
   
  );
};

export default App;
