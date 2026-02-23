// src/pages/ConfirmationPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaArrowRight, FaEnvelope } from 'react-icons/fa';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-16 mx-auto text-center">
      <div className="max-w-xl p-8 mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-4xl font-bold text-blue-500">Thank You!</h1>
        <p className="mb-6 text-lg text-gray-700">
          Your request has been successfully submitted. We appreciate your interest in our services and will be in touch with you shortly.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          >
            <FaHome className="mr-2" /> Go to Homepage
          </button>
          <button
            onClick={() => navigate('/services')}
            className="flex items-center px-6 py-3 font-semibold text-white bg-green-500 rounded-full hover:bg-green-700"
          >
            <FaArrowRight className="mr-2" /> Explore Services
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="flex items-center px-6 py-3 font-semibold text-white bg-purple-500 rounded-full hover:bg-purple-700"
          >
            <FaEnvelope className="mr-2" /> Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
