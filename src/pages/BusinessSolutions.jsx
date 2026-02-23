

import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import HeroSection from '../../components/HeroSection'; // Adjust the path according to your file structure
import heroImage from '../../assets/businessservices.webp'; // Adjust the path according to your file structure
import { FaCheckCircle, FaUsers, FaDollarSign } from 'react-icons/fa'; // Import necessary icons

const BusinessSolutions = () => {
  return (
    <div>
      <Helmet>
        <title>Business Solutions - Managed IT Support | Best Computer Tech</title>
        <meta name="description" content="Explore our comprehensive business solutions, including IT consulting, managed IT services, cybersecurity, and more to help your company thrive in the digital age." />
        <meta name="keywords" content="business solutions, managed IT support, IT consulting, network setup, data recovery, cloud solutions, cybersecurity, IT support, business continuity, computer training, digital transformation" />
        <link rel="canonical" href="https://bestcomputertec.com/business-solutions" />
      </Helmet>

      <HeroSection title="MANAGED BUSINESS IT SUPPORT" image={heroImage} />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">Why Choose Us?</h2>
          
          {/* Combined Card */}
          <div className="flex flex-wrap justify-center p-6 bg-white rounded-lg shadow-lg md:flex-nowrap">
            
            {/* Left Section with Video */}
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/8GOvDyPOW7c?rel=0&autoplay=0&loop=0&playlist=8GOvDyPOW7c"
                  title="Company Introduction Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
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

      {/* Other sections... */}
    </div>
  );
};

export default BusinessSolutions;

