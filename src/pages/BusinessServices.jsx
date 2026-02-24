

// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { FaCheckCircle, FaUsers, FaDollarSign, FaPlay } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import businessImage from '../assets/optimized-hero/businessservices-1152.jpg';

// const services = [
//   {
//     id: 'it-consulting',
//     title: 'IT Consultancy',
//     description: 'Providing expert advice on IT infrastructure, software solutions, and technology strategy to help your business thrive.',
//     icon: <FaCheckCircle className="mx-auto mb-4 text-4xl text-blue-500" />
//   },
//   {
//     id: 'cybersecurity',
//     title: 'Cybersecurity',
//     description: 'Protecting your business from cyber threats with robust security solutions and proactive monitoring.',
//     icon: <FaCheckCircle className="mx-auto mb-4 text-4xl text-blue-500" />
//   },
//   {
//     id: 'data-recovery',
//     title: 'Data Backup and Recovery',
//     description: 'Ensuring your data is safely backed up and can be quickly restored in case of a disaster.',
//     icon: <FaCheckCircle className="mx-auto mb-4 text-4xl text-blue-500" />
//   },
//   {
//     id: 'website-development',
//     title: 'Website Development',
//     description: 'Creating custom, responsive websites tailored to your business needs, from design to deployment.',
//     icon: <FaCheckCircle className="mx-auto mb-4 text-4xl text-blue-500" />
//   },
//   {
//     id: 'managed-it-services',
//     title: 'Managed IT Services',
//     description: 'Comprehensive IT management for your business.',
//     icon: <FaCheckCircle className="mx-auto mb-4 text-4xl text-blue-500" />
//   },
//   {
//     id: 'cloud-solutions',
//     title: 'Cloud Migration Services',
//     description: 'Seamlessly transition your business to the cloud, ensuring minimal disruption and optimal performance.',
//     icon: <FaCheckCircle className="mx-auto mb-4 text-4xl text-blue-500" />
//   }
// ];

// function BusinessServices() {
//   const navigate = useNavigate();
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   const handleServiceClick = (serviceId) => {
//     navigate(`/business-solutions/${serviceId}`);
//   };

//   const handleBookServiceClick = () => {
//     navigate('/book-service');
//   };

//   const loadVideo = () => {
//     setVideoLoaded(true);
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>Comprehensive Business IT Services | Best Computer Tech</title>
//         <meta name="description" content="Comprehensive IT services for businesses, including consultancy, cybersecurity, data recovery, website development, and more. We help your business thrive." />
//         <meta name="keywords" content="IT consultancy, cybersecurity, data recovery, website development, cloud migration, managed IT services, business continuity, technical support" />
//         <link rel="canonical" href="https://bestcomputertec.com/business-services" />
//       </Helmet>

//       <div className="relative flex flex-col items-center justify-center w-full py-20 bg-center bg-cover h-96" style={{ backgroundImage: `url(${businessImage})` }}>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="p-4 bg-white bg-opacity-75 rounded-lg">
//             <h1 className="text-5xl font-bold leading-tight text-center text-gray-900">Comprehensive Business IT Services | Best Computer Tech</h1>
//           </div>
//         </div>

//         {/* Ensure the CTA is on the right side and vertically centered at the bottom */}
//         <div className="absolute bottom-0 right-0 flex items-center justify-center p-4 mb-8 mr-8 text-center bg-white border-2 border-blue-500 rounded-lg shadow-lg sm:w-1/4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
//           <div>
//             <h3 className="mb-2 text-lg font-bold text-blue-600">STARTING AT</h3>
//             <p className="mb-2 text-5xl font-bold text-blue-500">$95</p>
//             <button
//               onClick={handleBookServiceClick}
//               className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto">
//           <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">Why Choose Us?</h2>
          
//           {/* Combined Card */}
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

//       <div className="container p-8 mx-auto">
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
//           {services.map((service) => (
//             <motion.div
//               key={service.id}
//               className="block"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: services.indexOf(service) * 0.1 }}
//             >
//               <div
//                 className="flex flex-col h-full p-6 text-center transition-transform duration-300 transform bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl"
//                 onClick={() => handleServiceClick(service.id)}
//               >
//                 {service.icon}
//                 <h2 className="mb-4 text-2xl font-semibold text-gray-800">{service.title}</h2>
//                 <p className="flex-grow mb-4 text-gray-600">{service.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

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

// export default BusinessServices;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaUsers, FaDollarSign, FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import businessImage from '../assets/optimized-hero/businessservices-1152.jpg';

const services = [
  {
    id: 'it-consulting',
    title: 'IT Consultancy',
    description: 'Providing expert advice on IT infrastructure, software solutions, and technology strategy to help your business thrive.',
    icon: <FaCheckCircle className="mx-auto mb-4 text-4xl text-blue-500" />
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protecting your business from cyber threats with robust security solutions and proactive monitoring.',
    icon: <FaCheckCircle className="mx-auto mb-4 text-4xl text-blue-500" />
  },
  {
    id: 'data-recovery',
    title: 'Data Backup and Recovery',
    description: 'Ensuring your data is safely backed up and can be quickly restored in case of a disaster.',
    icon: <FaCheckCircle className="mx-auto mb-4 text-4xl text-blue-500" />
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Creating custom, responsive websites tailored to your business needs, from design to deployment.',
    icon: <FaCheckCircle className="mx-auto mb-4 text-4xl text-blue-500" />
  },
  {
    id: 'managed-it-services',
    title: 'Managed IT Services',
    description: 'Comprehensive IT management for your business.',
    icon: <FaCheckCircle className="mx-auto mb-4 text-4xl text-blue-500" />
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Migration Services',
    description: 'Seamlessly transition your business to the cloud, ensuring minimal disruption and optimal performance.',
    icon: <FaCheckCircle className="mx-auto mb-4 text-4xl text-blue-500" />
  }
];

const managedContractPlans = [
  {
    id: 'business-core',
    name: 'Business Core',
    price: '$125',
    billing: 'per user / month (10-user minimum, annual term)',
    sla: 'Business-hours support SLA',
    summary: 'Best for stable teams that need proactive IT management and predictable support.',
    features: [
      'Help desk support during business hours',
      'Device monitoring, patching, and maintenance',
      'Backup health checks and recovery guidance',
      'Microsoft 365 and basic user admin support',
      'Remote support and vendor coordination',
    ],
  },
  {
    id: 'business-secure',
    name: 'Business Secure',
    price: '$165',
    billing: 'per user / month (10-user minimum, annual term)',
    sla: 'Faster priority queue during business hours',
    summary: 'Adds stronger security controls for teams with higher risk or compliance pressure.',
    features: [
      'Everything in Business Core',
      'Endpoint protection and threat monitoring',
      'Email security hardening and anti-phishing controls',
      'Security awareness training for staff',
      'Quarterly security review with action plan',
    ],
    highlight: true,
  },
  {
    id: 'business-complete',
    name: 'Business Complete',
    price: '$215',
    billing: 'per user / month (10-user minimum, annual term)',
    sla: 'Priority response plus scheduled onsite time',
    summary: 'For growing teams that want strategy, priority handling, and regular onsite support.',
    features: [
      'Everything in Business Secure',
      'Scheduled onsite support blocks',
      'Vendor and ISP escalation management',
      'Quarterly vCIO roadmap and budgeting review',
      'Priority issue triage for critical business systems',
    ],
  },
];

const contractTerms = [
  'One-time onboarding is quoted separately based on users, devices, and environment complexity.',
  'Hardware, software licenses, major project work, and compliance audits are outside monthly contract scope.',
  'After-hours support is available as an add-on or billed at premium emergency rates.',
  'Annual prepay discount available for qualified contracts.',
];

function BusinessServices() {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const canonicalUrl = 'https://bestcomputertec.com/business-services';

  const handleServiceClick = (serviceId) => {
    navigate(`/business-solutions/${serviceId}`);
  };

  const handleBookServiceClick = () => {
    navigate('/book-service');
  };

  const handleManagedPlanQuote = (plan) => {
    const prefillMessage = [
      'Managed IT Contract Inquiry',
      `Plan: ${plan.name} (${plan.price} ${plan.billing})`,
      '',
      'Company Information',
      '- Company name:',
      '- Contact person:',
      '- Contact email:',
      '- Contact phone:',
      '- Industry:',
      '- Number of users:',
      '- Number of devices (PC/Mac/Server):',
      '- Office locations:',
      '',
      'Current IT Setup',
      '- Microsoft 365 or Google Workspace:',
      '- Backup solution:',
      '- Security tools:',
      '- Current IT provider (if any):',
      '',
      'Project priorities',
      '- Top issues to solve:',
      '- Business-critical systems:',
      '- Target start date:',
      '- Preferred contact method (phone/email):',
      '- Best time for a discovery call:',
    ].join('\n');

    navigate('/contact', {
      state: {
        prefill: {
          source: 'business-contract',
          message: prefillMessage,
          planName: plan.name,
          pricingBaseline: `${plan.price} ${plan.billing}`,
          recommendedService: 'Managed IT Services',
          recommendedRoute: '/business-services',
        },
      },
    });
  };

  const loadVideo = () => {
    setVideoLoaded(true);
  };

  return (
    <div>
      <Helmet>
        <title>Comprehensive Business IT Services | Best Computer Tech</title>
        <meta name="description" content="Comprehensive IT services for businesses, including consultancy, cybersecurity, data recovery, website development, and more. We help your business thrive." />
        <meta name="keywords" content="IT consultancy, cybersecurity, data recovery, website development, cloud migration, managed IT services, business continuity, technical support" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Comprehensive Business IT Services | Best Computer Tech" />
        <meta
          property="og:description"
          content="Explore business IT support services including cybersecurity, cloud solutions, managed IT, and data recovery."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={businessImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business IT Services | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Business-focused IT services in Palm Bay and Melbourne, Florida."
        />
        <meta name="twitter:image" content={businessImage} />

        {/* Preload LCP image */}
        <link rel="preload" as="image" href={businessImage} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center w-full py-20 bg-center bg-cover h-96" style={{ backgroundImage: `url(${businessImage})` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-4 bg-white bg-opacity-75 rounded-lg">
            <h1 className="text-5xl font-bold leading-tight text-center text-gray-900">Comprehensive Business IT Services | Best Computer Tech</h1>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">Why Choose Us?</h2>

          {/* Video and Info Cards */}
          <div className="flex flex-wrap justify-center p-6 bg-white rounded-lg shadow-lg md:flex-nowrap">
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
                      width={1280}
                      height={720}
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

            {/* Circular Cards */}
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

      {/* CTA Section (STARTING AT $95) */}
      <section className="py-16 text-center">
        <div className="flex items-center justify-center p-4 mx-auto text-center bg-white border-2 border-blue-500 rounded-lg shadow-lg sm:w-1/4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
          <div>
            <h3 className="mb-2 text-lg font-bold text-blue-600">STARTING AT</h3>
            <p className="mb-2 text-5xl font-bold text-blue-500">$95</p>
            <button
              onClick={handleBookServiceClick}
              className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="container p-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: services.indexOf(service) * 0.1 }}
            >
              <div
                className="flex flex-col h-full p-6 text-center transition-transform duration-300 transform bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl"
                onClick={() => handleServiceClick(service.id)}
              >
                {service.icon}
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">{service.title}</h2>
                <p className="flex-grow mb-4 text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Yearly Managed IT Contracts */}
      <section className="py-16 bg-gray-50">
        <div className="container p-8 mx-auto">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Yearly Managed IT Contracts</h2>
            <p className="text-lg text-gray-700">
              Transparent annual contract options for Palm Bay and Melbourne businesses that want predictable IT support, stronger security,
              and fewer operational disruptions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {managedContractPlans.map((plan) => (
              <article
                key={plan.id}
                className={`flex flex-col h-full p-6 bg-white border rounded-xl shadow-sm ${
                  plan.highlight ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wide text-blue-800 bg-blue-100 rounded-full">
                    MOST SELECTED
                  </span>
                )}
                <h3 className="mb-2 text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mb-1 text-4xl font-bold text-blue-600">{plan.price}</p>
                <p className="mb-3 text-sm text-gray-600">{plan.billing}</p>
                <p className="mb-3 text-sm font-medium text-gray-700">{plan.sla}</p>
                <p className="mb-4 text-gray-700">{plan.summary}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-700">
                      <FaCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleManagedPlanQuote(plan)}
                  className="w-full px-4 py-3 mt-auto font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Request {plan.name} Quote
                </button>
              </article>
            ))}
          </div>

          <div className="max-w-4xl p-5 mx-auto mt-8 border border-blue-100 rounded-lg bg-blue-50">
            <h3 className="mb-2 text-xl font-semibold text-blue-900">Contract Terms at a Glance</h3>
            <ul className="space-y-2 text-blue-900">
              {contractTerms.map((term) => (
                <li key={term} className="flex items-start">
                  <FaCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-700 shrink-0" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
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

export default BusinessServices;
