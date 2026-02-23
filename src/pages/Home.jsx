
// import React, { useMemo, useState, useCallback } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import {
//   FaTools,
//   FaBug,
//   FaNetworkWired,
//   FaDatabase,
//   FaLaptopHouse,
//   FaQuestionCircle,
//   FaChalkboardTeacher,
//   FaCloud,
//   FaCamera,
//   FaPlay,
// } from 'react-icons/fa';
// import { useInView } from 'react-intersection-observer';
// import heroImage1 from '../assets/heroimage100.webp';
// import blogImage1 from '../assets/5-tips-blog-image.webp';
// import blogImage2 from '../assets/ProtectYourComputerFromMalware.webp';
// import blogImage3 from '../assets/backupHeroImage.webp';
// import personalTechImage from '../assets/homeimage.webp';
// import businessITImage from '../assets/ITsolution.webp';
// import tiredOfComputerIssuesImage from '../assets/computer-training.webp';
// import 'tailwindcss/tailwind.css';

// // Memoized static components to prevent unnecessary re-renders
// const ServiceCard = React.memo(({ service, onReadMore }) => (
//   <div className="flex flex-col items-center w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//     <div className="w-1/3">
//       {service.icon}
//     </div>
//     <h3 className="mb-2 text-xl font-semibold text-gray-800">{service.title}</h3>
//     <p className="mb-4 text-gray-700">{service.description}</p>
//     <button
//       onClick={() => onReadMore(service.id)}
//       className="px-4 py-2 font-bold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700"
//       aria-label={`Read more about ${service.title}`}
//     >
//       Read More
//     </button>
//   </div>
// ));

// const TestimonialCard = React.memo(({ testimonial }) => (
//   <div className="p-6 text-left bg-white rounded-lg shadow-lg">
//     <div className="mb-4">
//       <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
//       <p className="text-sm text-gray-500">{testimonial.date}</p>
//     </div>
//     <p className="text-sm leading-relaxed text-gray-700">
//       {testimonial.feedback}
//     </p>
//   </div>
// ));


// const BlogPostCard = React.memo(({ post }) => (
//   <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow-md h-80">
//     {post.image && (
//       <img
//         src={post.image}
//         alt={post.title}
//         className="object-cover w-full h-32 mb-4 bg-gray-300 rounded"
//         loading="lazy"
//       />
//     )}
//     <h3 className="mb-2 text-xl font-semibold text-gray-800">{post.title}</h3>
//     <p className="mb-4 text-gray-700">{post.summary}</p>
//     <p className="text-sm text-gray-500">{post.date}</p>
//     <Link to={post.link} className="mt-2 text-blue-500 hover:underline">
//       Read More
//     </Link>
//   </div>
// ));

// function Home() {
//   const navigate = useNavigate();
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   const handleReadMoreClick = useCallback((serviceId) => {
//     const routes = {
//       'personal-technology-solutions': '/residential-services',
//       'hardware-repairs': '/residential-support/pc-laptop-repairs',
//       'software-troubleshooting': '/residential-support/software-troubleshooting',
//       'virus-malware-removal': '/residential-support/virus-malware-removal',
//       'network-setup-support': '/residential-support/network-setup-support',
//       'data-recovery': '/residential-support/data-recovery',
//       'remote-computer-support': '/residential-support/remote-support',
//       'computer-training': '/residential-support/computer-training',
//       'quick-tech-help': '/quick-tech-help',
//       'cloud-consulting': '/business-solutions/cloud-solutions',
//       'business-it-support': '/business-services',
//     };
//     navigate(routes[serviceId] || `/services/${serviceId}`);
//   }, [navigate]);

//   const services = useMemo(
//     () => [
//       {
//         id: 'hardware-repairs',
//         title: 'Hardware Repairs',
//         description: 'Fixing broken screens, malfunctioning keyboards, and other hardware issues.',
//         icon: <FaTools size={40} color="#3B82F6" />,
//         color: 'bg-blue-500',
//       },
//       {
//         id: 'software-troubleshooting',
//         title: 'Software Troubleshooting',
//         description: 'Resolving operating system errors, application crashes, and software installation issues.',
//         icon: <FaBug size={40} color="#10B981" />,
//         color: 'bg-green-500',
//       },
//       {
//         id: 'virus-malware-removal',
//         title: 'Virus and Malware Removal',
//         description: 'Protecting your computer from harmful viruses and ensuring your data is safe.',
//         icon: <FaBug size={40} color="#EF4444" />,
//         color: 'bg-red-500',
//       },
//       {
//         id: 'network-setup-support',
//         title: 'Network Setup and Support',
//         description: 'Setting up and maintaining secure and efficient home or office networks.',
//         icon: <FaNetworkWired size={40} color="#8B5CF6" />,
//         color: 'bg-purple-500',
//       },
//       {
//         id: 'data-recovery',
//         title: 'Data Recovery',
//         description: 'Retrieving lost or corrupted data from hard drives and other storage devices.',
//         icon: <FaDatabase size={40} color="#FBBF24" />,
//         color: 'bg-yellow-500',
//       },
//       {
//         id: 'remote-computer-support',
//         title: 'Remote Computer Support',
//         description: 'Providing professional support for your computer issues without the need for a technician visit.',
//         icon: <FaLaptopHouse size={40} color="#14B8A6" />,
//         color: 'bg-teal-500',
//       },
//       {
//         id: 'quick-tech-help',
//         title: 'Quick Tech Help',
//         description: 'Have a question about your computer? Get a quick repair quote before taking it to the shop.',
//         icon: <FaQuestionCircle size={40} color="#EC4899" />,
//         color: 'bg-pink-500',
//       },
//       {
//         id: 'cloud-consulting',
//         title: 'Cloud Consulting',
//         description: 'Get expert cloud support from the comfort of your home.',
//         icon: <FaCloud size={40} color="#6366F1" />,
//         color: 'bg-indigo-500',
//       },
//       {
//         id: 'computer-training',
//         title: 'Computer Training',
//         description: 'Learn how to use your computer more effectively with our professional training sessions.',
//         icon: <FaChalkboardTeacher size={40} color="#F97316" />,
//         color: 'bg-orange-500',
//       },
//       {
//         id: 'security-camera-installation',
//         title: 'Security Camera and Network Cabling Installation',
//         description: 'Professional installation of security cameras and network cabling for your home or office.',
//         icon: <FaCamera size={40} color="#6B7280" />,
//         color: 'bg-gray-500',
//       },
//     ],
//     []
//   );

//   const testimonials = useMemo(
//     () => [
//       {
//         name: 'J Nash',
//         feedback:
//           'Best Computer Tech fixed my laptop in no time. The service was excellent and the staff were very friendly. Highly recommended!',
//         // avatar: '/path/to/avatar1.jpg',
//         date: 'July 10, 2023',
//       },
//       {
//         name: 'Jane Smith',
//         feedback:
//           'Great service and affordable rates. They helped me recover all my lost data. I am very grateful.',
//         // avatar: '/path/to/avatar2.jpg',
//         date: 'June 22, 2023',
//       },
//       {
//         name: 'Dan Johnson',
//         feedback:
//           'I needed urgent help with my network setup and Best Computer Tech came through with flying colors. Fast and reliable service.',
//         // avatar: '/path/to/avatar3.jpg',
//         date: 'May 30, 2023',
//       },
//       {
//         name: 'Sarah Williams',
//         feedback:
//           'The computer training sessions were fantastic. I learned so much and the instructor was very knowledgeable.',
//         // avatar: '/path/to/avatar4.jpg',
//         date: 'April 18, 2023',
//       },
//       {
//         name: 'David Brown',
//         feedback:
//           'Quick Tech Help was a lifesaver! Got my issue resolved quickly and professionally.',
//         // avatar: '/path/to/avatar5.jpg',
//         date: 'March 5, 2023',
//       },
//     ],
//     []
//   );

//   const blogPosts = useMemo(
//     () => [
//       {
//         title: '5 Tips to Keep Your Computer Running Smoothly',
//         summary: 'Learn the best practices to ensure your computer remains fast and efficient.',
//         link: '/blog/5-tips-to-keep-your-computer-running-smoothly',
//         date: 'July 1, 2024',
//         image: blogImage1,
//       },
//       {
//         title: 'How to Protect Your Computer from Malware',
//         summary: 'Understand how to safeguard your computer from various malware threats.',
//         link: '/blog/how-to-protect-your-computer-from-malware',
//         date: 'June 25, 2024',
//         image: blogImage2,
//       },
//       {
//         title: 'The Benefits of Regular Data Backup',
//         summary: 'Discover why regular data backups are crucial for protecting your important files.',
//         link: '/blog/the-benefits-of-regular-data-backup',
//         date: 'June 20, 2024',
//         image: blogImage3,
//       },
//     ],
//     []
//   );

//   const { ref: techSolutionsRef, inView: techSolutionsInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   const { ref: promiseRef, inView: promiseInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   const { ref: blogRef, inView: blogInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const loadVideo = useCallback(() => {
//     setVideoLoaded(true);
//   }, []);

//   return (
//     <div>
//       <Helmet>
//         <title>Best Computer Tech | Computer Repair & IT Support in Palm Bay/ Melbourne, FL</title>
//         <meta
//           name="description"
//           content="Best Computer Tech LLC offers expert tech solutions in Palm Bay/ Melbourne, FL, including hardware repairs, software troubleshooting, virus removal, network setup, and reliable IT support. Contact us today for professional tech services."
//         />
//         <meta
//           name="keywords"
//           content="computer repair, IT support, Palm Bay, Melbourne FL, hardware repairs, software troubleshooting, virus removal, network setup, data recovery, tech services, cloud consulting, computer training"
//         />
//         <meta name="robots" content="index, follow" />
//         <meta
//           property="og:title"
//           content="Best Computer Tech | Computer Repair & IT Support in Palm Bay/ Melbourne, FL"
//         />
//         <meta
//           property="og:description"
//           content="Expert computer repair and IT support services in Palm Bay/ Melbourne, FL. From hardware repairs to cloud consulting, we offer comprehensive tech solutions for both residential and business needs."
//         />
//         <meta property="og:image" content={heroImage1} />
//         <meta property="og:url" content="http://bestcomputertec.com" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta property="og:site_name" content="Best Computer Tech" />
//         <link rel="canonical" href="http://bestcomputertec.com" />
//         <meta property="og:type" content="website" />
//         <meta
//           name="twitter:title"
//           content="Best Computer Tech | Computer Repair & IT Support in Palm Bay/ Melbourne, FL"
//         />
//         <meta
//           name="twitter:description"
//           content="Best Computer Tech LLC provides expert tech solutions including hardware repairs, software troubleshooting, and IT support."
//         />
//         {/* Preload the Hero image to improve LCP */}
//         <link
//           rel="preload"
//           href={heroImage1}
//           as="image"
//           type="image/webp"
//           crossOrigin="anonymous"
//         />
//       </Helmet>

//       {/* Hero Section with Eager Loading */}
//       <section className="relative hero-section">
//         <div className="relative">
//           <img
//             src={heroImage1}
//             alt="Hero"
//             className="object-cover w-full h-96"
//             /* Removed loading="lazy" to prioritize loading */
//           />
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="text-center text-white">
//               <h1 className="mb-4 text-5xl font-bold leading-tight">
//                 Welcome to Best Computer Tech
//               </h1>
//               <p className="mb-8 text-xl">
//                 Your Computer, Our Expertise - Best Computer Tech Support!
//               </p>
//               <Link
//                 to="/services"
//                 className="px-6 py-3 font-semibold text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-700"
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Personal Technology Solutions and IT Support Section */}
//       <section
//         className={`py-16 bg-gray-100 ${techSolutionsInView ? 'animate-fadeIn' : 'opacity-0'}`}
//         ref={techSolutionsRef}
//       >
//         <div className="container mx-auto text-center">
//           <h2 className="mb-8 text-4xl font-bold text-gray-800">
//             Personal Technology Solutions and Reliable IT Support
//           </h2>
//           <p className="mb-32 text-lg text-gray-700">
//             Technology is an integral part of our lives, connecting us, entertaining us, and enabling our businesses to thrive. At Best Computer Tech LLC, we ensure your technology runs smoothly with expert solutions, from support to personalized recommendations.
//           </p>
//           <div className="flex flex-wrap justify-center gap-8">
//             {services.map((service) => (
//               <ServiceCard key={service.id} service={service} onReadMore={handleReadMoreClick} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Promise Section with Video */}
//       <section
//         className={`py-32 bg-gray-50 ${promiseInView ? 'animate-fadeIn' : 'opacity-0'}`}
//         ref={promiseRef}
//       >
//         <div className="container mx-auto text-center">
//           <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
//             {/* Are You Tired of Computer Issues? Card */}
//             <div className="flex flex-col items-center w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
//               <img
//                 src={tiredOfComputerIssuesImage}
//                 alt="Are You Tired of Computer Issues?"
//                 className="object-cover w-full h-64 mb-4 rounded"
//                 loading="lazy"
//               />
//               <h2 className="mb-4 text-2xl font-bold text-gray-800">
//                 Are You Tired of Computer Issues?
//               </h2>
//               <p className="text-lg text-gray-700">
//                 Are you tired of dealing with computer issues that disrupt your
//                 productivity and peace of mind? Look no further! At Best Computer
//                 Tech, we provide top-notch tech support services tailored to your
//                 needs.
//               </p>
//             </div>

//             {/* Our Promise Card with Video on the Left */}
//             <div className="flex flex-col items-center w-full max-w-4xl p-6 bg-white rounded-lg shadow-md md:flex-row">
//               {/* Video on the left */}
//               <div className="w-full md:w-1/2">
//                 {!videoLoaded ? (
//                   <div
//                     className="relative cursor-pointer"
//                     onClick={loadVideo}
//                     aria-label="Play Our Promise Video"
//                   >
//                     <img
//                       src="https://img.youtube.com/vi/NJj29C48nMU/maxresdefault.jpg"
//                       alt="Video Thumbnail"
//                       className="rounded-lg"
//                       loading="lazy"
//                     />
//                     <FaPlay className="absolute inset-0 m-auto text-6xl text-white" />
//                   </div>
//                 ) : (
//                   <iframe
//                     width="100%"
//                     height="315"
//                     src="https://www.youtube.com/embed/NJj29C48nMU?rel=0&autoplay=1&loop=0&playlist=NJj29C48nMU" // Replace with your YouTube video ID
//                     title="Our Promise Video"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="rounded-lg"
//                   ></iframe>
//                 )}
//               </div>
//               {/* Text content on the right */}
//               <div className="w-full mt-4 text-left md:w-1/2 md:ml-6 md:mt-0">
//                 <h2 className="mb-4 text-2xl font-bold text-gray-800">
//                   Our Promise
//                 </h2>
//                 <p className="text-lg text-gray-700">
//                   We are committed to providing the best tech support to ensure your
//                   computer is always running smoothly and efficiently.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     {/* Testimonials Section */}
// <section className={`mt-10 mb-10 text-center ${testimonialsInView ? 'animate-fadeIn' : 'opacity-0'}`} ref={testimonialsRef}>
//   <h2 className="mb-5 text-4xl font-bold text-gray-800">What Our Customers Are Saying</h2>
//   <p className="mb-8 text-lg text-gray-600">
//     See why our clients love working with us. Their experiences speak for our commitment to excellent service.
//   </p>
//   <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3">
//     {testimonials.slice(0, 3).map((testimonial, index) => (
//       <TestimonialCard key={index} testimonial={testimonial} />
//     ))}
//   </div>
// </section>


//       {/* Blog Section */}
//       <section
//         className={`text-center ${blogInView ? 'animate-fadeIn' : 'opacity-0'}`}
//         ref={blogRef}
//       >
//         <h2 className="mb-8 text-4xl font-bold">Blog Posts</h2>
//         <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
//           {blogPosts.map((post, index) => (
//             <BlogPostCard key={index} post={post} />
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16 mt-16 text-center bg-blue-50">
//         <h2 className="mb-8 text-4xl font-bold">Get in Touch with Us</h2>
//         <p className="mb-8 text-lg text-gray-700">
//           We'd love to hear from you! Whether you need tech support, want to book a service, or have questions, feel free to reach out.
//         </p>
//         <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
//           <Link
//             to="/contact"
//             className="px-6 py-3 font-semibold text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-700"
//           >
//             Contact Us
//           </Link>
//           <Link
//             to="/book-service"
//             className="px-6 py-3 font-semibold text-white transition duration-300 bg-green-500 rounded-full hover:bg-green-700"
//           >
//             Book a Service
//           </Link>
//           <Link
//             to="/subscribe"
//             className="px-6 py-3 font-semibold text-white transition duration-300 bg-purple-500 rounded-full hover:bg-purple-700"
//           >
//             Subscribe to Newsletter
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;








import React, { useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FaTools,
  FaBug,
  FaNetworkWired,
  FaDatabase,
  FaLaptopHouse,
  FaQuestionCircle,
  FaChalkboardTeacher,
  FaCloud,
  FaCamera,
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import heroImage1 from '../assets/heroimage100.webp';
import blogImage1 from '../assets/5-tips-blog-image.webp';
import blogImage2 from '../assets/ProtectYourComputerFromMalware.webp';
import blogImage3 from '../assets/backupHeroImage.webp';
import 'tailwindcss/tailwind.css';

// Memoized static components to prevent unnecessary re-renders
const ServiceCard = React.memo(({ service, onReadMore }) => (
  <div className="flex flex-col items-center w-full max-w-md p-6 bg-white rounded-lg shadow-md">
    <div className="w-1/3">
      {service.icon}
    </div>
    <h3 className="mb-2 text-xl font-semibold text-gray-800">{service.title}</h3>
    <p className="mb-4 text-gray-700">{service.description}</p>
    <button
      onClick={() => onReadMore(service.id)}
      className="px-4 py-2 font-bold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700"
    >
      Read More
    </button>
  </div>
));
ServiceCard.displayName = 'ServiceCard';

const TestimonialCard = React.memo(({ testimonial }) => (
  <div className="p-6 text-left bg-white rounded-lg shadow-lg">
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
      <p className="text-sm text-gray-500">{testimonial.date}</p>
    </div>
    <p className="text-sm leading-relaxed text-gray-700">
      {testimonial.feedback}
    </p>
  </div>
));
TestimonialCard.displayName = 'TestimonialCard';

const BlogPostCard = React.memo(({ post }) => (
  <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow-md h-80">
    {post.image && (
      <img
        src={post.image}
        alt={post.title}
        className="object-cover w-full h-32 mb-4 bg-gray-300 rounded"
      />
    )}
    <h3 className="mb-2 text-xl font-semibold text-gray-800">{post.title}</h3>
    <p className="mb-4 text-gray-700">{post.summary}</p>
    <p className="text-sm text-gray-500">{post.date}</p>
    <Link to={post.link} className="mt-2 text-blue-500 hover:underline">
      Read More
    </Link>
  </div>
));
BlogPostCard.displayName = 'BlogPostCard';

function Home() {
  const navigate = useNavigate();
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Best Computer Tech LLC',
    url: 'https://bestcomputertec.com/',
    telephone: '+1-321-953-5199',
    email: '365techoncall@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '602 Hurst Rd NE',
      addressLocality: 'Palm Bay',
      addressRegion: 'FL',
      postalCode: '32907',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.0836,
      longitude: -80.6081,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Palm Bay' },
      { '@type': 'City', name: 'Melbourne' },
      { '@type': 'City', name: 'West Melbourne' },
      { '@type': 'AdministrativeArea', name: 'Brevard County' },
    ],
    serviceType: [
      'Computer Repair',
      'IT Support',
      'Network Setup',
      'Virus and Malware Removal',
      'Data Recovery',
    ],
  };

  const handleReadMoreClick = useCallback((serviceId) => {
    const routes = {
      'personal-technology-solutions': '/residential-services',
      'hardware-repairs': '/residential-support/pc-laptop-repairs',
      'software-troubleshooting': '/residential-support/software-troubleshooting',
      'virus-malware-removal': '/residential-support/virus-malware-removal',
      'network-setup-support': '/residential-support/network-setup-support',
      'data-recovery': '/residential-support/data-recovery',
      'remote-computer-support': '/residential-support/remote-support',
      'computer-training': '/residential-support/computer-training',
      'quick-tech-help': '/quick-tech-help',
      'cloud-consulting': '/business-solutions/cloud-solutions',
      'business-it-support': '/business-services',
    };
    navigate(routes[serviceId] || `/services/${serviceId}`);
  }, [navigate]);

  const services = useMemo(
    () => [
      {
        id: 'hardware-repairs',
        title: 'Hardware Repairs',
        description: 'Fixing broken screens, malfunctioning keyboards, and other hardware issues.',
        icon: <FaTools size={40} color="#3B82F6" />,
      },
      {
        id: 'software-troubleshooting',
        title: 'Software Troubleshooting',
        description: 'Resolving operating system errors, application crashes, and software installation issues.',
        icon: <FaBug size={40} color="#10B981" />,
      },
      {
        id: 'virus-malware-removal',
        title: 'Virus and Malware Removal',
        description: 'Protecting your computer from harmful viruses and ensuring your data is safe.',
        icon: <FaBug size={40} color="#EF4444" />,
      },
      {
        id: 'network-setup-support',
        title: 'Network Setup and Support',
        description: 'Setting up and maintaining secure and efficient home or office networks.',
        icon: <FaNetworkWired size={40} color="#8B5CF6" />,
      },
      {
        id: 'data-recovery',
        title: 'Data Recovery',
        description: 'Retrieving lost or corrupted data from hard drives and other storage devices.',
        icon: <FaDatabase size={40} color="#FBBF24" />,
      },
      {
        id: 'remote-computer-support',
        title: 'Remote Computer Support',
        description: 'Providing professional support for your computer issues without the need for a technician visit.',
        icon: <FaLaptopHouse size={40} color="#14B8A6" />,
      },
      {
        id: 'quick-tech-help',
        title: 'Quick Tech Help',
        description: 'Have a question about your computer? Get a quick repair quote before taking it to the shop.',
        icon: <FaQuestionCircle size={40} color="#EC4899" />,
      },
      {
        id: 'cloud-consulting',
        title: 'Cloud Consulting',
        description: 'Get expert cloud support from the comfort of your home.',
        icon: <FaCloud size={40} color="#6366F1" />,
      },
      {
        id: 'computer-training',
        title: 'Computer Training',
        description: 'Learn how to use your computer more effectively with our professional training sessions.',
        icon: <FaChalkboardTeacher size={40} color="#F97316" />,
      },
      {
        id: 'security-camera-installation',
        title: 'Security Camera and Network Cabling Installation',
        description: 'Professional installation of security cameras and network cabling for your home or office.',
        icon: <FaCamera size={40} color="#6B7280" />,
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: 'J Nash',
        feedback:
          'Best Computer Tech fixed my laptop in no time. The service was excellent and the staff were very friendly. Highly recommended!',
        date: 'July 10, 2023',
      },
      {
        name: 'Jane Smith',
        feedback:
          'Great service and affordable rates. They helped me recover all my lost data. I am very grateful.',
        date: 'June 22, 2023',
      },
      {
        name: 'Dan Johnson',
        feedback:
          'I needed urgent help with my network setup and Best Computer Tech came through with flying colors. Fast and reliable service.',
        date: 'May 30, 2023',
      },
    ],
    []
  );

  const blogPosts = useMemo(
    () => [
      {
        title: '5 Tips to Keep Your Computer Running Smoothly',
        summary: 'Learn the best practices to ensure your computer remains fast and efficient.',
        link: '/blog/5-tips-to-keep-your-computer-running-smoothly',
        date: 'July 1, 2024',
        image: blogImage1,
      },
      {
        title: 'How to Protect Your Computer from Malware',
        summary: 'Understand how to safeguard your computer from various malware threats.',
        link: '/blog/how-to-protect-your-computer-from-malware',
        date: 'June 25, 2024',
        image: blogImage2,
      },
      {
        title: 'The Benefits of Regular Data Backup',
        summary: 'Discover why regular data backups are crucial for protecting your important files.',
        link: '/blog/the-benefits-of-regular-data-backup',
        date: 'June 20, 2024',
        image: blogImage3,
      },
    ],
    []
  );

  const { ref: techSolutionsRef, inView: techSolutionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: blogRef, inView: blogInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <Helmet>
        <title>Computer Repair & IT Support in Palm Bay & Melbourne, FL | Best Computer Tech</title>
        <meta
          name="description"
          content="Best Computer Tech provides local computer repair and IT support in Palm Bay, Melbourne, and Brevard County, FL. Fast hardware repair, virus removal, network setup, and data recovery."
        />
        <meta
          name="keywords"
          content="computer repair Palm Bay FL, computer repair Melbourne FL, local IT support Brevard County, virus removal Palm Bay, data recovery Melbourne, network setup Florida"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bestcomputertec.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Computer Repair & IT Support in Palm Bay & Melbourne, FL | Best Computer Tech" />
        <meta
          property="og:description"
          content="Local computer repair and IT support services for Palm Bay, Melbourne, and nearby Brevard County areas."
        />
        <meta property="og:url" content="https://bestcomputertec.com/" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Computer Tech | Palm Bay & Melbourne, FL" />
        <meta
          name="twitter:description"
          content="Computer repair, IT support, network setup, and data recovery in Palm Bay and Melbourne, Florida."
        />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Palm Bay, Melbourne, Florida" />
        <meta name="geo.position" content="28.0836;-80.6081" />
        <meta name="ICBM" content="28.0836, -80.6081" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative hero-section">
        <div className="relative">
          <img src={heroImage1} alt="Hero" className="object-cover w-full h-96" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <h1 className="mb-4 text-5xl font-bold leading-tight">
                Welcome to Best Computer Tech
              </h1>
              <p className="mb-8 text-xl">
                Your Computer, Our Expertise - Best Computer Tech Support!
              </p>
              <Link
                to="/services"
                className="px-6 py-3 font-semibold text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className={`py-16 bg-gray-100 ${techSolutionsInView ? 'animate-fadeIn' : 'opacity-0'}`}
        ref={techSolutionsRef}
      >
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold text-gray-800">
            Personal Technology Solutions and Reliable IT Support
          </h2>
          <p className="mb-32 text-lg text-gray-700">
            Technology is an integral part of our lives. At Best Computer Tech LLC, we ensure your technology runs smoothly with expert solutions, from support to personalized recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} onReadMore={handleReadMoreClick} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={`mt-10 mb-10 text-center ${testimonialsInView ? 'animate-fadeIn' : 'opacity-0'}`}
        ref={testimonialsRef}
      >
        <h2 className="mb-5 text-4xl font-bold text-gray-800">What Our Customers Are Saying</h2>
        <p className="mb-8 text-lg text-gray-600">
          See why our clients love working with us. Their experiences speak for our commitment to excellent service.
        </p>
        <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className={`text-center ${blogInView ? 'animate-fadeIn' : 'opacity-0'}`} ref={blogRef}>
        <h2 className="mb-8 text-4xl font-bold">Blog Posts</h2>
        <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 mt-16 text-center bg-blue-50">
        <h2 className="mb-8 text-4xl font-bold">Get in Touch with Us</h2>
        <p className="mb-8 text-lg text-gray-700">
          We'd love to hear from you! Whether you need tech support, want to book a service, or have questions, feel free to reach out.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="px-6 py-3 font-semibold text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-700"
          >
            Contact Us
          </Link>
          <Link
            to="/book-service"
            className="px-6 py-3 font-semibold text-white transition duration-300 bg-green-500 rounded-full hover:bg-green-700"
          >
            Book a Service
          </Link>
          <Link
            to="/subscribe"
            className="px-6 py-3 font-semibold text-white transition duration-300 bg-purple-500 rounded-full hover:bg-purple-700"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
