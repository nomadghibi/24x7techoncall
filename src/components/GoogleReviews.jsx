import { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
  const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

  useEffect(() => {
    const fetchReviews = async () => {
      if (!placeId || !apiKey) {
        setError('Google reviews are unavailable due to missing configuration.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
        );

        if (response.data.result && response.data.result.reviews) {
          setReviews(response.data.result.reviews);
        } else {
          setError('No reviews found');
        }
      } catch (error) {
        setError('Error fetching reviews');
      } finally {
        setLoading(false);
      }
    };

    void fetchReviews();
  }, [apiKey, placeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Customer Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p><strong>{review.author_name}</strong></p>
            <p>Rating: {review.rating}</p>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleReviews;
