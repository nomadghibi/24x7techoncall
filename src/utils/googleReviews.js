import axios from 'axios';

const fetchGoogleReviews = async () => {
  const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
  const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    throw new Error('Missing Google reviews configuration');
  }

  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
  );

  if (response.data?.result?.reviews) {
    return response.data.result.reviews;
  }

  throw new Error('No reviews found');
};

export default fetchGoogleReviews;
