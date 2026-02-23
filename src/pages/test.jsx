import React from 'react';
import { FaUserTie, FaLaptopHouse, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import heroImage from '../assets/computers.jpg'; // Ensure this path is correct

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div>
      <HeroSection title="About Us" image={heroImage}>
        <div className="relative flex justify-center mt-12">
          <div className="relative z-10 w-full max-w-lg p-6 text-center bg-white border border-gray-300 rounded-lg shadow-lg">
            <h1 className="mb-4 text-4xl font-bold text-gray-800">
              <span className="text-blue-500">Skilled IT Experts, Ready to Assist You</span>
            </h1>
            <p className="mb-4 text-lg text-gray-700">
              The dedicated team at Best Computer Tech is committed to ensuring computer users have positive, trouble-free experiences with all of their devices.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Established in 2009, BCT IT Support Services provides onsite and remote IT support for residential and business customers across the Space Coast of FL and all around the USA.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Our mission is to ensure that all computer users have a smooth and trouble-free experience with their devices. We strive to provide high-quality, reliable, and accessible tech support.
            </p>
          </div>
        </div>
      </HeroSection>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold text-gray-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 text-white bg-blue-500 rounded-lg shadow-md">
              <div className="mb-4 text-5xl">
                <FaUserTie />
              </div>
              <h3 className="mb-2 text-2xl font-semibold">Professionalism</h3>
              <p className="text-white">Our team of certified professionals is dedicated to delivering exceptional service.</p>
            </div>
            <div className="p-6 text-white bg-green-500 rounded-lg shadow-md">
              <div className="mb-4 text-5xl">
                <FaLaptopHouse />
              </div>
              <h3 className="mb-2 text-2xl font-semibold">Accessibility</h3>
              <p className="text-white">We offer both onsite and remote support to ensure we can help you no matter where you are.</p>
            </div>
            <div className="p-6 text-white bg-red-500 rounded-lg shadow-md">
              <div className="mb-4 text-5xl">
                <FaShieldAlt />
              </div>
              <h3 className="mb-2 text-2xl font-semibold">Security</h3>
              <p className="text-white">We prioritize your security with robust solutions to protect your data and devices.</p>
            </div>
          </div>
        </div>
      </section>

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

export default AboutUs;