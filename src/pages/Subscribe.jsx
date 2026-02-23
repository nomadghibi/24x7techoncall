import React from 'react';
import heroImage from '../assets/Subscribe.webp'; // Add a suitable hero image for the newsletter page
import { useNavigate } from 'react-router-dom';

function Subscribe() {
  const navigate = useNavigate();

  const handleSubscribe = (event) => {
    event.preventDefault();
    // Handle subscription logic here
    alert('Thank you for subscribing!');
    navigate('/');
  };

  return (
    <div>
      <section className="py-20 text-white bg-gray-900 hero-section" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold leading-tight">Subscribe to Our Newsletter</h1>
          <p className="mb-8 text-xl">Stay updated with the latest news and special offers.</p>
        </div>
      </section>
      <div className="container p-8 mx-auto">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md">
          <div className="p-6 text-center">
            <h2 className="mb-4 text-3xl font-semibold">Join Our Mailing List</h2>
            <p className="mb-8 text-gray-700">Subscribe to our newsletter to receive the latest updates and promotions.</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your Email Address"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
