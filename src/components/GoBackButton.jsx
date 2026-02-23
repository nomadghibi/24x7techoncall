import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="px-4 py-2 mb-4 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"
    >
      Go Back
    </button>
  );
}

export default GoBackButton;
