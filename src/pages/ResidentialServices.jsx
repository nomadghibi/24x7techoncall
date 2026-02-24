
// import React, { useState, useEffect, useCallback } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
//   FaTools,
//   FaBug,
//   FaNetworkWired,
//   FaDatabase,
//   FaLaptopHouse,
//   FaChalkboardTeacher,
//   FaCloud,
//   FaCheckCircle,
//   FaUsers,
//   FaDollarSign,
//   FaShieldAlt,
//   FaSave,
//   FaLaptop,
//   FaLifeRing,
//   FaPlay,
//   FaPhoneAlt // Added FaPhoneAlt for the CTA icon
// } from 'react-icons/fa';
// import './ResidentialServices.css';

// import heroImage from '../assets/optimized-hero/residentail-1152.jpg'; // The image used for both title and CTA
// import computerImage from '../assets/optimized-hero/computers-1152.jpg';

// const services = [
//   {
//     id: 'hardware-repairs',
//     title: 'Hardware Repairs',
//     description: 'Fixing broken screens, malfunctioning keyboards, and other hardware issues.',
//     icon: <FaTools className="mx-auto mb-4 text-4xl text-blue-500" />,
//   },
//   {
//     id: 'software-troubleshooting',
//     title: 'Software Troubleshooting',
//     description: 'Resolving operating system errors, application crashes, and software installation issues.',
//     icon: <FaBug className="mx-auto mb-4 text-4xl text-blue-500" />,
//   },
//   {
//     id: 'virus-malware-removal',
//     title: 'Virus and Malware Removal',
//     description: 'Protecting your computer from harmful viruses and ensuring your data is safe.',
//     icon: <FaBug className="mx-auto mb-4 text-4xl text-blue-500" />,
//   },
//   {
//     id: 'network-setup-support',
//     title: 'Network Setup and Support',
//     description: 'Setting up and maintaining secure and efficient home or office networks.',
//     icon: <FaNetworkWired className="mx-auto mb-4 text-4xl text-blue-500" />,
//   },
//   {
//     id: 'data-recovery',
//     title: 'Data Recovery',
//     description: 'Retrieving lost or corrupted data from hard drives and other storage devices.',
//     icon: <FaDatabase className="mx-auto mb-4 text-4xl text-blue-500" />,
//   },
//   {
//     id: 'remote-computer-support',
//     title: 'Remote Computer Support',
//     description: 'Providing professional support for your computer issues without the need for a technician visit.',
//     icon: <FaLaptopHouse className="mx-auto mb-4 text-4xl text-blue-500" />,
//   },
//   {
//     id: 'cloud-consulting',
//     title: 'Cloud Consulting',
//     description: 'Expert advice on leveraging cloud technology to enhance your business operations.',
//     icon: <FaCloud className="mx-auto mb-4 text-4xl text-blue-500" />,
//   },
//   {
//     id: 'computer-training',
//     title: 'Computer Training',
//     description: 'Learn how to use your computer more effectively with our professional training sessions.',
//     icon: <FaChalkboardTeacher className="mx-auto mb-4 text-4xl text-blue-500" />,
//   },
// ];

// const ServiceCard = React.memo(({ service, onClick }) => (
//   <motion.div
//     className="block"
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, delay: services.indexOf(service) * 0.1 }}
//   >
//     <div
//       className="flex flex-col h-full p-6 text-center transition-transform duration-300 transform bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl"
//       onClick={() => onClick(service.id)}
//     >
//       {service.icon}
//       <h2 className="mb-4 text-2xl font-semibold text-gray-800">{service.title}</h2>
//       <p className="flex-grow mb-4 text-gray-600">{service.description}</p>
//     </div>
//   </motion.div>
// ));

// ServiceCard.displayName = "ServiceCard";

// function ResidentialServices() {
//   const navigate = useNavigate();
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   const handleServiceClick = useCallback((serviceId) => {
//     switch (serviceId) {
//       case 'hardware-repairs':
//         navigate('/residential-support/pc-laptop-repairs');
//         break;
//       case 'software-troubleshooting':
//         navigate('/residential-support/software-troubleshooting');
//         break;
//       case 'virus-malware-removal':
//         navigate('/residential-support/virus-malware-removal');
//         break;
//       case 'network-setup-support':
//         navigate('/residential-support/network-setup-support');
//         break;
//       case 'data-recovery':
//         navigate('/residential-support/data-recovery');
//         break;
//       case 'remote-computer-support':
//         navigate('/residential-support/remote-support');
//         break;
//       case 'cloud-consulting':
//         navigate('/residential-support/cloud-consulting');
//         break;
//       case 'computer-training':
//         navigate('/residential-support/computer-training');
//         break;
//       default:
//         navigate(`/services/${serviceId}`);
//         break;
//     }
//   }, [navigate]);

//   const handleOrderNow = () => {
//     const subscriptionPlan = {
//       title: 'Annual Subscription Plan',
//       price: '$199.00',
//       description: 'Keep Your Computer Running Smoothly With Our Annual Subscription Plan!',
//     };

//     navigate('/checkout', { state: { service: subscriptionPlan } });
//   };

//   const handleBookServiceClick = () => {
//     navigate('/book-service');
//   };

//   const loadVideo = () => {
//     setVideoLoaded(true);
//   };

//   useEffect(() => {
//     if ('serviceWorker' in navigator) {
//       window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js').then(
//           (registration) => {
//             console.log('SW registered: ', registration);
//           },
//           (registrationError) => {
//             console.log('SW registration failed: ', registrationError);
//           }
//         );
//       });
//     }
//   }, []);

//   return (
//     <div>
//       <Helmet>
//         <title>Computer Repair Palm Bay Melbourne FL | Laptop Repair & Tech Support Services</title>
//         <meta name="description" content="Best Computer Repair and IT Support Services in Palm Bay/Melbourne, FL. We specialize in Laptop Repair, PC Repair, Network Setup, and Data Recovery. Call us for quick, reliable service." />
//         <meta name="keywords" content="Computer Repair Palm Bay/Melbourne FL, Tech Support Services, Laptop Repair, PC Repair, IT Support Palm bay/Melbourne, Virus Removal, Data Recovery, Network Setup" />
//       </Helmet>

//       {/* Combined Hero Section with Title and CTA */}
//       <div className="relative flex flex-col items-center justify-center w-full py-24 bg-center bg-cover h-96" style={{ backgroundImage: `url(${heroImage})` }}>
//         <div className="max-w-4xl p-6 text-center text-white bg-black bg-opacity-50 rounded-lg">
//           <h1 className="mb-4 text-5xl font-bold leading-tight">Our Residential Services</h1>
//           <p className="mb-4 text-xl">Best Computer Repair and IT Support Services in Palm Bay/Melbourne, FL.</p>
//           <p className="mb-4 text-xl">Get a free diagnostic over the phone. Call us now!</p>
//           <a href="tel:3219535199" className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700">
//             <FaPhoneAlt className="inline mr-2" /> Call Us: (321) 953-5199
//           </a>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto">
//           <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">Why Choose Us?</h2>
          
//           <div className="flex flex-wrap justify-center p-6 bg-white rounded-lg shadow-lg md:flex-nowrap">
//             {/* Left Section with Video */}
//             <div className="w-full md:w-1/2">
//               <div className="overflow-hidden rounded-lg">
//                 {!videoLoaded ? (
//                   <div className="relative cursor-pointer youtube-facade" onClick={loadVideo}>
//                     <img
//                       src="https://img.youtube.com/vi/8GOvDyPOW7c/maxresdefault.jpg"
//                       alt="Video Thumbnail"
//                       className="rounded-lg"
//                     />
//                     <FaPlay className="absolute text-6xl text-white inset-center" />
//                   </div>
//                 ) : (
//                   <iframe
//                     width="100%"
//                     height="315"
//                     src="https://www.youtube.com/embed/8GOvDyPOW7c?rel=0&autoplay=1&loop=0&playlist=8GOvDyPOW7c"
//                     title="Company Introduction Video"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="rounded-lg"
//                   ></iframe>
//                 )}
//               </div>
//             </div>

//             {/* Right Section with Three Circular Cards and Text Next to Circles */}
//             <div className="flex flex-col items-start justify-center w-full mt-6 space-y-6 md:w-1/2 md:mt-0 md:ml-8">
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center justify-center w-24 h-24 text-white bg-blue-500 rounded-full shadow-md">
//                   <FaCheckCircle className="text-3xl" />
//                 </div>
//                 <p className="text-lg font-semibold text-gray-800">Expert Technicians</p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center justify-center w-24 h-24 text-white bg-green-500 rounded-full shadow-md">
//                   <FaUsers className="text-3xl" />
//                 </div>
//                 <p className="text-lg font-semibold text-gray-800">Customer Satisfaction</p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center justify-center w-24 h-24 text-white bg-red-500 rounded-full shadow-md">
//                   <FaDollarSign className="text-3xl" />
//                 </div>
//                 <p className="text-lg font-semibold text-gray-800">Affordable Rates</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <div className="container p-8 mx-auto">
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
//           {services.map((service) => (
//             <ServiceCard key={service.id} service={service} onClick={handleServiceClick} />
//           ))}
//         </div>

//         {/* Annual Subscription Plan Card */}
//         <div className="flex flex-col mt-12 md:flex-row">
//           <div className="relative flex items-center justify-center w-full md:w-1/2 fade-image">
//             <img src={computerImage} alt="Subscription Plan" />
//           </div>
//           <div className="w-full p-6 bg-white rounded-lg shadow-lg md:w-1/2">
//             <h2 className="mb-4 text-3xl font-bold text-gray-800">Keep Your Computer Running Smoothly With Our Annual Subscription Plan!</h2>
//             <p className="mb-4 text-lg text-gray-700">For just $199/year, you'll get:</p>
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <div className="flex items-center">
//                 <FaBug className="mr-2 text-blue-500 w-7 h-7" />
//                 <p>Unlimited virus removal</p>
//               </div>
//               <div className="flex items-center">
//                 <FaLaptop className="mr-2 text-blue-500 w-7 h-7" />
//                 <p>Speed optimization</p>
//               </div>
//               <div className="flex items-center">
//                 <FaLaptopHouse className="mr-2 text-blue-500 w-7 h-7" />
//                 <p>Faster startup</p>
//               </div>
//               <div className="flex items-center">
//                 <FaLifeRing className="mr-2 text-blue-500 w-7 h-7" />
//                 <p>Routine checkups</p>
//               </div>
//               <div className="flex items-center">
//                 <FaShieldAlt className="mr-2 text-blue-500 w-7 h-7" />
//                 <p>24/7 phone support</p>
//               </div>
//               <div className="flex items-center">
//                 <FaSave className="mr-2 text-blue-500 w-7 h-7" />
//                 <p>Data backup</p>
//               </div>
//               <div className="flex items-center">
//                 <FaLaptopHouse className="mr-2 text-blue-500 w-7 h-7" />
//                 <p>Remote tech support</p>
//               </div>
//               <div className="flex items-center">
//                 <FaBug className="mr-2 text-blue-500 w-7 h-7" />
//                 <p>Anti-virus installation and maintenance</p>
//               </div>
//               <div className="flex items-center">
//                 <FaLaptop className="mr-2 text-blue-500 w-7 h-7" />
//                 <p>Computer tune-ups</p>
//               </div>
//             </div>
//             <p className="mb-4 text-lg text-gray-700">Don't wait, sign up today and keep your computer running like new!</p>
//             <p className="mb-4 text-lg text-gray-700">Here are some additional benefits of our annual subscription plan:</p>
//             <ul className="mb-4 text-left text-gray-700 list-disc list-inside">
//               <li>You'll save money over the long run by paying for a year's worth of service upfront.</li>
//               <li>You'll have peace of mind knowing that your computer is always in good hands with our team of experts.</li>
//               <li>You'll get access to our 24/7 support team, so you can get help whenever you need it.</li>
//             </ul>
//             <button
//               onClick={handleOrderNow}
//               className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700"
//             >
//               ORDER NOW!
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Contact and Booking Section */}
//       <section className="py-16 mt-16 text-center bg-blue-50">
//         <div className="container mx-auto">
//           <h2 className="mb-8 text-4xl font-bold">Get in Touch with Us</h2>
//           <p className="mb-8 text-lg text-gray-700">We'd love to hear from you! Whether you need tech support, want to book a service, or have questions, feel free to reach out.</p>
//           <div className="flex justify-center space-x-4">
//             <button onClick={() => navigate('/contact')} className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700">Contact Us</button>
//             <button onClick={handleBookServiceClick} className="px-6 py-3 font-semibold text-white bg-green-500 rounded-full hover:bg-green-700">Book a Service</button>
//             <button onClick={() => navigate('/subscribe')} className="px-6 py-3 font-semibold text-white bg-purple-500 rounded-full hover:bg-purple-700">Subscribe to Newsletter</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ResidentialServices;


import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaTools,
  FaBug,
  FaNetworkWired,
  FaDatabase,
  FaLaptopHouse,
  FaChalkboardTeacher,
  FaCloud,
  FaCheckCircle,
  FaUsers,
  FaDollarSign,
  FaShieldAlt,
  FaSave,
  FaLaptop,
  FaLifeRing,
  FaPlay,
  FaPhoneAlt // Added FaPhoneAlt for the CTA icon
} from 'react-icons/fa';
import './ResidentialServices.css';

import heroImage from '../assets/optimized-hero/residentail-1152.jpg'; // The image used for both title and CTA
import computerImage from '../assets/optimized-hero/computers-optimized-1152.jpg';

const services = [
  {
    id: 'hardware-repairs',
    title: 'Hardware Repairs',
    description: 'Fixing broken screens, malfunctioning keyboards, and other hardware issues.',
    icon: <FaTools className="mx-auto mb-4 text-4xl text-blue-500" />,
  },
  {
    id: 'software-troubleshooting',
    title: 'Software Troubleshooting',
    description: 'Resolving operating system errors, application crashes, and software installation issues.',
    icon: <FaBug className="mx-auto mb-4 text-4xl text-blue-500" />,
  },
  {
    id: 'virus-malware-removal',
    title: 'Virus and Malware Removal',
    description: 'Protecting your computer from harmful viruses and ensuring your data is safe.',
    icon: <FaBug className="mx-auto mb-4 text-4xl text-blue-500" />,
  },
  {
    id: 'network-setup-support',
    title: 'Network Setup and Support',
    description: 'Setting up and maintaining secure and efficient home or office networks.',
    icon: <FaNetworkWired className="mx-auto mb-4 text-4xl text-blue-500" />,
  },
  {
    id: 'data-recovery',
    title: 'Data Recovery',
    description: 'Retrieving lost or corrupted data from hard drives and other storage devices.',
    icon: <FaDatabase className="mx-auto mb-4 text-4xl text-blue-500" />,
  },
  {
    id: 'remote-computer-support',
    title: 'Remote Computer Support',
    description: 'Providing professional support for your computer issues without the need for a technician visit.',
    icon: <FaLaptopHouse className="mx-auto mb-4 text-4xl text-blue-500" />,
  },
  {
    id: 'cloud-consulting',
    title: 'Cloud Consulting',
    description: 'Expert advice on leveraging cloud technology to enhance your business operations.',
    icon: <FaCloud className="mx-auto mb-4 text-4xl text-blue-500" />,
  },
  {
    id: 'computer-training',
    title: 'Computer Training',
    description: 'Learn how to use your computer more effectively with our professional training sessions.',
    icon: <FaChalkboardTeacher className="mx-auto mb-4 text-4xl text-blue-500" />,
  },
];

const ServiceCard = React.memo(({ service, onClick }) => (
  <motion.div
    className="block"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: services.indexOf(service) * 0.1 }}
  >
    <div
      className="flex flex-col h-full p-6 text-center transition-transform duration-300 transform bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl"
      onClick={() => onClick(service.id)}
    >
      {service.icon}
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">{service.title}</h2>
      <p className="flex-grow mb-4 text-gray-600">{service.description}</p>
    </div>
  </motion.div>
));

ServiceCard.displayName = "ServiceCard";

function ResidentialServices() {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const canonicalUrl = 'https://bestcomputertec.com/residential-services';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://bestcomputertec.com${heroImage || ''}`;

  const handleServiceClick = useCallback((serviceId) => {
    switch (serviceId) {
      case 'hardware-repairs':
        navigate('/residential-support/pc-laptop-repairs');
        break;
      case 'software-troubleshooting':
        navigate('/residential-support/software-troubleshooting');
        break;
      case 'virus-malware-removal':
        navigate('/residential-support/virus-malware-removal');
        break;
      case 'network-setup-support':
        navigate('/residential-support/network-setup-support');
        break;
      case 'data-recovery':
        navigate('/residential-support/data-recovery');
        break;
      case 'remote-computer-support':
        navigate('/residential-support/remote-support');
        break;
      case 'cloud-consulting':
        navigate('/residential-support/cloud-consulting');
        break;
      case 'computer-training':
        navigate('/residential-support/computer-training');
        break;
      default:
        navigate(`/services/${serviceId}`);
        break;
    }
  }, [navigate]);

  const handleOrderNow = () => {
    const subscriptionPlan = {
      title: 'Annual Subscription Plan',
      price: '$199.00',
      description: 'Keep Your Computer Running Smoothly With Our Annual Subscription Plan!',
    };

    navigate('/checkout', { state: { service: subscriptionPlan } });
  };

  const handleBookServiceClick = () => {
    navigate('/book-service');
  };

  const loadVideo = () => {
    setVideoLoaded(true);
  };

  return (
    <div>
      <Helmet>
        <title>Computer Repair Palm Bay Melbourne FL | Laptop Repair & Tech Support Services</title>
        <meta name="description" content="Best Computer Repair and IT Support Services in Palm Bay/Melbourne, FL. We specialize in Laptop Repair, PC Repair, Network Setup, and Data Recovery. Call us for quick, reliable service." />
        <meta name="keywords" content="Computer Repair Palm Bay/Melbourne FL, Tech Support Services, Laptop Repair, PC Repair, IT Support Palm bay/Melbourne, Virus Removal, Data Recovery, Network Setup" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Computer Repair Palm Bay Melbourne FL | Best Computer Tech" />
        <meta property="og:description" content="Residential computer repair and IT support services in Palm Bay and Melbourne, FL." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Computer Repair Palm Bay Melbourne FL | Best Computer Tech" />
        <meta name="twitter:description" content="Fast and reliable residential tech support services from Best Computer Tech." />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* Combined Hero Section with Title and CTA */}
      <div className="relative flex flex-col items-center justify-center w-full py-24 bg-center bg-cover h-96" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="max-w-4xl p-6 text-center text-white bg-black bg-opacity-50 rounded-lg">
          <h1 className="mb-4 text-5xl font-bold leading-tight">Our Residential Services</h1>
          <p className="mb-4 text-xl">Best Computer Repair and IT Support Services in Palm Bay/Melbourne, FL.</p>
          <p className="mb-4 text-xl">Get a free diagnostic over the phone. Call us now!</p>
          <a href="tel:3219535199" className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700">
            <FaPhoneAlt className="inline mr-2" /> Call Us: (321) 953-5199
          </a>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">Why Choose Us?</h2>
          
          <div className="flex flex-wrap justify-center p-6 bg-white rounded-lg shadow-lg md:flex-nowrap">
            {/* Left Section with Video */}
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg">
                {!videoLoaded ? (
                  <div className="relative cursor-pointer youtube-facade" onClick={loadVideo}>
                    <img
                      src="https://img.youtube.com/vi/8GOvDyPOW7c/maxresdefault.jpg"
                      alt="Video Thumbnail"
                      className="rounded-lg"
                      loading="lazy"
                      decoding="async"
                    />
                    <FaPlay className="absolute text-6xl text-white inset-center" />
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/8GOvDyPOW7c?rel=0&autoplay=1&loop=0&playlist=8GOvDyPOW7c"
                    title="Company Introduction Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                )}
              </div>
            </div>

            {/* Right Section with Three Circular Cards and Text Next to Circles */}
            <div className="flex flex-col items-start justify-center w-full mt-6 space-y-6 md:w-1/2 md:mt-0 md:ml-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-24 h-24 text-white bg-blue-500 rounded-full shadow-md">
                  <FaCheckCircle className="text-3xl" />
                </div>
                <p className="text-lg font-semibold text-gray-800">Expert Technicians</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-24 h-24 text-white bg-green-500 rounded-full shadow-md">
                  <FaUsers className="text-3xl" />
                </div>
                <p className="text-lg font-semibold text-gray-800">Customer Satisfaction</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-24 h-24 text-white bg-red-500 rounded-full shadow-md">
                  <FaDollarSign className="text-3xl" />
                </div>
                <p className="text-lg font-semibold text-gray-800">Affordable Rates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="container p-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onClick={handleServiceClick} />
          ))}
        </div>

        {/* Annual Subscription Plan Coupon Style */}
        <div className="flex flex-col p-6 mt-12 bg-white border-2 border-gray-500 border-dashed rounded-lg shadow-lg md:flex-row">
          <div className="relative flex items-center justify-center w-full md:w-1/2 fade-image">
            <img src={computerImage} alt="Subscription Plan" loading="lazy" decoding="async" />
          </div>
          <div className="w-full p-6 bg-white md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">💻 Keep Your Computer Running Smoothly With Our Annual Subscription Plan!</h2>
            <p className="mb-4 text-lg text-center text-gray-700">For just $199/year, you'll get:</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center">
                <FaBug className="mr-2 text-blue-500 w-7 h-7" />
                <p>Unlimited virus removal</p>
              </div>
              <div className="flex items-center">
                <FaLaptop className="mr-2 text-blue-500 w-7 h-7" />
                <p>Speed optimization</p>
              </div>
              <div className="flex items-center">
                <FaLaptopHouse className="mr-2 text-blue-500 w-7 h-7" />
                <p>Faster startup</p>
              </div>
              <div className="flex items-center">
                <FaLifeRing className="mr-2 text-blue-500 w-7 h-7" />
                <p>Routine checkups</p>
              </div>
              <div className="flex items-center">
                <FaShieldAlt className="mr-2 text-blue-500 w-7 h-7" />
                <p>24/7 phone support</p>
              </div>
              <div className="flex items-center">
                <FaSave className="mr-2 text-blue-500 w-7 h-7" />
                <p>Data backup</p>
              </div>
              <div className="flex items-center">
                <FaLaptopHouse className="mr-2 text-blue-500 w-7 h-7" />
                <p>Remote tech support</p>
              </div>
              <div className="flex items-center">
                <FaBug className="mr-2 text-blue-500 w-7 h-7" />
                <p>Anti-virus installation and maintenance</p>
              </div>
              <div className="flex items-center">
                <FaLaptop className="mr-2 text-blue-500 w-7 h-7" />
                <p>Computer tune-ups</p>
              </div>
            </div>
            <p className="mb-4 text-lg text-center text-gray-700">Don't wait, sign up today and keep your computer running like new!</p>
            <p className="mb-4 text-lg text-center text-gray-700">Here are some additional benefits of our annual subscription plan:</p>
            <ul className="mb-4 text-left text-gray-700 list-disc list-inside">
              <li>You'll save money over the long run by paying for a year's worth of service upfront.</li>
              <li>You'll have peace of mind knowing that your computer is always in good hands with our team of experts.</li>
              <li>You'll get access to our 24/7 support team, so you can get help whenever you need it.</li>
            </ul>
            <div className="text-center">
              <button
                onClick={handleOrderNow}
                className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700"
              >
                ORDER NOW!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact and Booking Section */}
      <section className="py-16 mt-16 text-center bg-blue-50">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold">Get in Touch with Us</h2>
          <p className="mb-8 text-lg text-gray-700">We'd love to hear from you! Whether you need tech support, want to book a service, or have questions, feel free to reach out.</p>
          <div className="flex justify-center space-x-4">
            <button onClick={() => navigate('/contact')} className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700">Contact Us</button>
            <button onClick={handleBookServiceClick} className="px-6 py-3 font-semibold text-white bg-green-500 rounded-full hover:bg-green-700">Book a Service</button>
            <button onClick={() => navigate('/subscribe')} className="px-6 py-3 font-semibold text-white bg-purple-500 rounded-full hover:bg-purple-700">Subscribe to Newsletter</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResidentialServices;
