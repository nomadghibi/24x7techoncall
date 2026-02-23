import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/QuickTechHelp.webp'; // Adjust the path according to your file structure

const QuickTechHelp = () => {
  const navigate = useNavigate();
  const canonicalUrl = 'https://bestcomputertec.com/quick-tech-help';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://bestcomputertec.com${heroImage || ''}`;

  const handleBuyNowClick = () => {
    navigate('/checkout', { state: { service: 'Quick Tech Help', price: '19.95' } });
  };

  return (
    <div>
      <Helmet>
        <title>Quick Tech Help | 15-Minute Remote Tech Support | Best Computer Tech</title>
        <meta
          name="description"
          content="Get fast 15-minute remote tech support for common computer issues in Palm Bay, Melbourne, and Brevard County. Immediate help from certified technicians."
        />
        <meta
          name="keywords"
          content="quick tech help, 15 minute tech support, remote computer support, Palm Bay computer help, Melbourne FL tech support"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Quick Tech Help | Best Computer Tech" />
        <meta
          property="og:description"
          content="Fast remote support for urgent computer problems from Best Computer Tech."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quick Tech Help | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Need immediate computer help? Get 15-minute quick tech support from our experts."
        />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>
      <HeroSection title="Quick Tech Help" image={heroImage} />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold">Quick Tech Support - 15 Minutes Help Desk</h2>
        <p className="mb-8">
          Welcome to our Quick Tech Support service, your go-to solution for fast and efficient computer assistance. Our 15-minute help desk is designed to address your urgent tech issues with speed and precision. Whether you're experiencing software glitches, network connectivity problems, or any other tech-related issues, our expert technicians are here to help.
        </p>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Why Choose Our Quick Tech Support?</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>Immediate assistance from certified technicians</li>
              <li>Fast resolution of common tech problems</li>
              <li>Affordable and convenient service</li>
              <li>Perfect for small businesses and home users</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">How It Works</h3>
            <p className="mb-4">
              Our Quick Tech Support is simple and easy to use. Just follow these steps:
            </p>
            <ol className="mb-4 list-decimal list-inside">
              <li>Contact our help desk via phone or chat</li>
              <li>Describe your tech issue to our technician</li>
              <li>Receive immediate assistance and guidance</li>
              <li>Get your problem resolved within 15 minutes</li>
            </ol>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Common Issues We Handle</h3>
            <ul className="mb-4 list-disc list-inside">
              <li>Software troubleshooting and installation</li>
              <li>Virus and malware removal</li>
              <li>Network setup and connectivity issues</li>
              <li>System optimization and performance enhancement</li>
              <li>Email configuration and support</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-2xl font-semibold">Get Started Today</h3>
            <p>
              Don't let tech issues slow you down. Our Quick Tech Support is just a call away. Experience fast and reliable tech assistance from the comfort of your home or office. Contact us now and let our experts handle your tech problems efficiently.
            </p>
            <button
              onClick={handleBuyNowClick}
              className="inline-block px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Buy Now for $19.95
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTechHelp;
