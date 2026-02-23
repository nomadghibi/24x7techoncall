

import React from 'react';
import { FaTools, FaBug, FaNetworkWired, FaDatabase, FaLaptopHouse, FaQuestionCircle, FaChalkboardTeacher, FaUserTie, FaShieldAlt, FaSave, FaServer, FaHeadset, FaLifeRing, FaDigitalOcean, FaCloudUploadAlt, FaCheckCircle, FaUsers, FaDollarSign } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/ourservices.webp';

const residentialServices = [
  { id: 'pc-laptop-repairs', title: 'PC and Laptop Repairs', icon: <FaTools className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/residential-support/pc-laptop-repairs' },
  { id: 'virus-malware-removal', title: 'Virus and Malware Removal', icon: <FaBug className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/residential-support/virus-malware-removal' },
  { id: 'software-troubleshooting', title: 'Software Troubleshooting', icon: <FaBug className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/residential-support/software-troubleshooting' },
  { id: 'data-recovery', title: 'Data Recovery', icon: <FaDatabase className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/residential-support/data-recovery' },
  { id: 'network-setup-support', title: 'Network Setup and Support', icon: <FaNetworkWired className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/residential-support/network-setup-support' },
  { id: 'remote-support', title: 'Remote Support', icon: <FaLaptopHouse className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/residential-support/remote-support' },
  { id: 'tech-consultation', title: 'Personalized Tech Consultation', icon: <FaQuestionCircle className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/residential-support/tech-consultation' },
  { id: 'computer-training', title: 'Computer Training', icon: <FaChalkboardTeacher className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/residential-support/computer-training' },
  { id: 'home-office-setup', title: 'Home Office Setup', icon: <FaNetworkWired className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/residential-support/home-office-setup' },
  { id: 'backup-data-protection', title: 'Backup and Data Protection', icon: <FaSave className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/residential-support/backup-data-protection' },
  { id: 'cybersecurity-home', title: 'Cybersecurity for Home Users', icon: <FaShieldAlt className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/residential-support/cybersecurity-home' }
];

const businessSolutions = [
  { id: 'it-consulting', title: 'IT Consulting', icon: <FaUserTie className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/business-solutions/it-consulting' },
  { id: 'network-setup', title: 'Network Setup', icon: <FaNetworkWired className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/business-solutions/network-setup' },
  { id: 'managed-it-services', title: 'Managed IT Services', icon: <FaServer className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/business-solutions/managed-it-services' },
  { id: 'data-recovery', title: 'Data Recovery', icon: <FaDatabase className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/business-solutions/data-recovery' },
  { id: 'cloud-solutions', title: 'Cloud Solutions', icon: <FaCloudUploadAlt className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/business-solutions/cloud-solutions' },
  { id: 'cybersecurity', title: 'Cybersecurity', icon: <FaShieldAlt className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/business-solutions/cybersecurity' },
  { id: 'it-support', title: 'IT Support', icon: <FaHeadset className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/business-solutions/it-support' },
  { id: 'business-continuity', title: 'Business Continuity', icon: <FaLifeRing className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/business-solutions/business-continuity' },
  { id: 'computer-training', title: 'Computer Training', icon: <FaChalkboardTeacher className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/business-solutions/computer-training' },
  { id: 'digital-transformation', title: 'Digital Transformation', icon: <FaDigitalOcean className="mx-auto mb-4 text-4xl text-blue-500" />, path: '/business-solutions/digital-transformation' }
];

function Services() {
  const navigate = useNavigate();
  const canonicalUrl = 'https://bestcomputertec.com/services';
  const servicesPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Computer Repair and IT Support Services',
    serviceType: [
      'Computer Repair',
      'Laptop Repair',
      'Virus and Malware Removal',
      'Network Setup and Support',
      'Data Recovery',
      'Managed IT Services',
    ],
    areaServed: [
      { '@type': 'City', name: 'Palm Bay' },
      { '@type': 'City', name: 'Melbourne' },
      { '@type': 'City', name: 'West Melbourne' },
      { '@type': 'AdministrativeArea', name: 'Brevard County' },
    ],
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://bestcomputertec.com/#localbusiness',
      name: 'Best Computer Tech LLC',
      url: 'https://bestcomputertec.com/',
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
    },
  };

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <div>
        <Helmet>
        <title>Computer Repair Services in Palm Bay & Melbourne, FL | Best Computer Tech</title>
        <meta
          name="description"
          content="Explore local computer repair and IT support services in Palm Bay, Melbourne, and Brevard County, FL. Best Computer Tech offers laptop repair, virus removal, network setup, and data recovery."
        />
        <meta
          name="keywords"
          content="computer repair Palm Bay FL, computer repair Melbourne FL, laptop repair Brevard County, local IT support, virus removal, network setup, data recovery"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Computer Repair Services in Palm Bay & Melbourne, FL | Best Computer Tech" />
        <meta
          property="og:description"
          content="Local computer repair and IT support services for Palm Bay, Melbourne, and nearby Brevard County areas."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Computer Tech Services | Palm Bay & Melbourne, FL" />
        <meta
          name="twitter:description"
          content="Browse local computer repair and IT support services from Best Computer Tech in Palm Bay and Melbourne, Florida."
        />
        <meta name="twitter:image" content={heroImage} />
        <script type="application/ld+json">{JSON.stringify(servicesPageSchema)}</script>
      </Helmet>
      <HeroSection title="Our Services" image={heroImage} />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold text-gray-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative flex items-center justify-center p-6 text-white bg-blue-500 rounded-full shadow-md">
              <div className="flex flex-col items-center">
                <FaCheckCircle className="mb-4 text-5xl" />
                <h3 className="mb-2 text-2xl font-semibold">Expert Technicians</h3>
                <p className="text-white">Our certified technicians are experienced in handling all kinds of computer issues.</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center p-6 text-white bg-green-500 rounded-full shadow-md">
              <div className="flex flex-col items-center">
                <FaUsers className="mb-4 text-5xl" />
                <h3 className="mb-2 text-2xl font-semibold">Customer Satisfaction</h3>
                <p className="text-white">We prioritize our customers' satisfaction and strive to provide top-notch service.</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center p-6 text-white bg-red-500 rounded-full shadow-md">
              <div className="flex flex-col items-center">
                <FaDollarSign className="mb-4 text-5xl" />
                <h3 className="mb-2 text-2xl font-semibold">Affordable Rates</h3>
                <p className="text-white">We offer competitive pricing without compromising on quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold text-gray-800">Residential Services</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {residentialServices.map((service) => (
              <motion.div
                key={service.id}
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: residentialServices.indexOf(service) * 0.1 }}
              >
                <div
                  className="flex flex-col h-full p-6 text-center transition-transform duration-300 transform bg-gray-100 rounded-full shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleServiceClick(service.path)}
                >
                  {service.icon}
                  <h2 className="mt-4 text-xl font-semibold text-gray-800">{service.title}</h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold text-gray-800">Business Solutions</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {businessSolutions.map((service) => (
              <motion.div
                key={service.id}
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: businessSolutions.indexOf(service) * 0.1 }}
              >
                <div
                  className="flex flex-col h-full p-6 text-center transition-transform duration-300 transform bg-white rounded-full shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleServiceClick(service.path)}
                >
                  {service.icon}
                  <h2 className="mt-4 text-xl font-semibold text-gray-800">{service.title}</h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 mt-16 text-center bg-blue-50">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold">Get in Touch with Us</h2>
          <p className="mb-8 text-lg text-gray-700">We'd love to hear from you! Whether you need tech support, want to book a service, or have questions, feel free to reach out.</p>
          <div className="flex justify-center space-x-4">
            <button onClick={() => navigate('/contact')} className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700">Contact Us</button>
            <button onClick={() => navigate('/book-service')} className="px-6 py-3 font-semibold text-white bg-green-500 rounded-full hover:bg-green-700">Book a Service</button>
            <button onClick={() => navigate('/subscribe')} className="px-6 py-3 font-semibold text-white bg-purple-500 rounded-full hover:bg-purple-700">Subscribe to Newsletter</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
