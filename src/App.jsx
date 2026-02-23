
import { Suspense, lazy, useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

// Dynamic imports for code-splitting
const Home = lazy(() => import('./pages/Home'));
const ResidentialServices = lazy(() => import('./pages/ResidentialServices'));
const PcLaptopRepairs = lazy(() => import('./pages/residentialsupport/PcLaptopRepairs'));
const VirusMalwareRemoval = lazy(() => import('./pages/residentialsupport/VirusMalwareRemoval'));
const SoftwareTroubleshooting = lazy(() => import('./pages/residentialsupport/SoftwareTroubleshooting'));
const DataRecovery = lazy(() => import('./pages/residentialsupport/DataRecovery'));
const NetworkSetupSupport = lazy(() => import('./pages/residentialsupport/NetworkSetupSupport'));
const RemoteSupport = lazy(() => import('./pages/residentialsupport/RemoteSupport'));
const CloudConsulting = lazy(() => import('./pages/CloudConsulting'));
const TechConsultation = lazy(() => import('./pages/residentialsupport/TechConsultation'));
const ComputerTraining = lazy(() => import('./pages/residentialsupport/ComputerTraining'));
const HomeOfficeSetup = lazy(() => import('./pages/residentialsupport/HomeOfficeSetup'));
const BackupDataProtection = lazy(() => import('./pages/residentialsupport/BackupDataProtection'));
const CybersecurityHome = lazy(() => import('./pages/residentialsupport/CybersecurityHome'));
const BusinessServices = lazy(() => import('./pages/BusinessServices'));
const ITConsulting = lazy(() => import('./pages/businesssolutions/ITConsulting'));
const NetworkSetup = lazy(() => import('./pages/businesssolutions/NetworkSetup'));
const ManagedITServices = lazy(() => import('./pages/businesssolutions/ManagedITServices'));
const BusinessDataRecovery = lazy(() => import('./pages/businesssolutions/BusinessDataRecovery'));
const CloudSolutions = lazy(() => import('./pages/businesssolutions/CloudSolutions'));
const BusinessCybersecurity = lazy(() => import('./pages/businesssolutions/BusinessCybersecurity'));
const ITSupport = lazy(() => import('./pages/businesssolutions/ITSupport'));
const BusinessContinuity = lazy(() => import('./pages/businesssolutions/BusinessContinuity'));
const BusinessComputerTraining = lazy(() => import('./pages/businesssolutions/BusinessComputerTraining'));
const DigitalTransformation = lazy(() => import('./pages/businesssolutions/DigitalTransformation'));
const TechnicalSupportMaintenance = lazy(() => import('./pages/businesssolutions/TechnicalSupportMaintenance'));
const WebsiteDevelopment = lazy(() => import('./pages/businesssolutions/WebsiteDevelopment'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const HowTo = lazy(() => import('./pages/HowTo'));
const PayNow = lazy(() => import('./pages/PayNow'));
const Checkout = lazy(() => import('./pages/Checkout'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const BlogOverview = lazy(() => import('./pages/BlogOverview'));
const BookService = lazy(() => import('./pages/BookService'));
const Subscribe = lazy(() => import('./pages/Subscribe'));
const Pricing = lazy(() => import('./pages/Pricing'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const FixBrokenScreen = lazy(() => import('./pages/tutorials/FixBrokenScreen'));
const KnowYourComputerHasVirus = lazy(() => import('./pages/tutorials/KnowYourComputerHasVirus'));
const SetupNetwork = lazy(() => import('./pages/tutorials/SetupNetwork'));
const RecoverData = lazy(() => import('./pages/tutorials/RecoverData'));
const UseRemoteSupport = lazy(() => import('./pages/tutorials/UseRemoteSupport'));
const ImprovePerformance = lazy(() => import('./pages/tutorials/ImprovePerformance'));
const BeSafeOnline = lazy(() => import('./pages/tutorials/BeSafeOnline'));
const SetupEmail = lazy(() => import('./pages/tutorials/SetUpemail'));
const QuickTechHelp = lazy(() => import('./pages/QuickTechHelp'));
const ConfirmationPage = lazy(() => import('./pages/ConfirmationPage'));
const BuyConfirmationPage = lazy(() => import('./pages/BuyConfirmationPage'));

const App = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    void import('./pages/Home');
    void import('./pages/ResidentialServices');
  }, []);

  const handleMouseMove = (e) => {
    setCirclePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <HelmetProvider> {/* Wrap the entire app in HelmetProvider */}
    <div className="flex flex-col min-h-screen" onMouseMove={handleMouseMove}>
      <div className={`dim-overlay ${isHovered ? 'visible' : ''}`}></div>
      <div
        className="circle"
        style={{ left: circlePosition.x, top: circlePosition.y }}
      ></div>
      <NavMenu handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
      <main id="main-content" tabIndex={-1} className="flex-grow mt-16">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
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
