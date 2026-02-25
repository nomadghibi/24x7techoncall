import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function GoBackButtonWithArrow() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-800 font-medium transition-colors group"
    >
      <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
      Go Back
    </button>
  );
}

export default GoBackButtonWithArrow;
