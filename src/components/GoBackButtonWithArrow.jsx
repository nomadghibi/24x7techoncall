// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';

// function GoBackButtonWithArrow() {
//   const navigate = useNavigate();

//   return (
//     <button
//       onClick={() => navigate(-1)}
//       className="flex items-center px-4 py-2 mb-4 font-bold text-blue-500 hover:text-blue-700"
//     >
//       <FaArrowLeft className="mr-2" />
//       Go Back
//     </button>
//   );
// }

// export default GoBackButtonWithArrow;
// src/components/GoBackButtonWithArrow.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function GoBackButtonWithArrow() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will navigate to the previous page in history
  };

  return (
    <button onClick={handleGoBack} className="flex items-center mb-4 text-blue-500 hover:text-blue-700">
      <FaArrowLeft className="mr-2" />
      Go Back
    </button>
  );
}

export default GoBackButtonWithArrow;

