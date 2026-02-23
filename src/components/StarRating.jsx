// src/components/StarRating.jsx

import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const StarRating = ({ rating, maxRating = 5 }) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    if (rating >= i) {
      // Full Star
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (rating >= i - 0.5) {
      // Half Star
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      // Empty Star
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }

  return <div className="flex items-center">{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
};

export default StarRating;
