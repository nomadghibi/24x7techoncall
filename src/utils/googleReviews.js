import axios from 'axios';

const fetchGoogleReviews = async () => {
  const placeId = 'YOUR_PLACE_ID'; // Replace with your actual place ID
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${REDACTED_PLACE_ID
602 Hurst Rd NE, Palm Bay, FL 32907, USA'}&fields=reviews&key=${REDACTED_API_KEY}`
    );

    if (response.data.result && response.data.result.reviews) {
      return response.data.result.reviews;
    } else {
      throw new Error('No reviews found');
    }
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export default fetchGoogleReviews;
