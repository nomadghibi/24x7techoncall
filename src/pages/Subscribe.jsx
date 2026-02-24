import React from 'react';
import heroImage from '../assets/optimized-hero/subscribe-1152.jpg'; // Add a suitable hero image for the newsletter page
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Subscribe() {
  const navigate = useNavigate();
  const canonicalUrl = 'https://bestcomputertec.com/subscribe';
  const pageImage = heroImage?.startsWith('http')
    ? heroImage
    : `https://bestcomputertec.com${heroImage || ''}`;

  const handleSubscribe = (event) => {
    event.preventDefault();
    // Handle subscription logic here
    alert('Thanks for subscribing. Check your inbox for updates and helpful tips.');
    navigate('/');
  };

  return (
    <div>
      <Helmet>
        <title>Subscribe to Our Newsletter | Best Computer Tech</title>
        <meta
          name="description"
          content="Subscribe to Best Computer Tech updates for technology tips, service updates, and special offers in Palm Bay and Melbourne, FL."
        />
        <meta
          name="keywords"
          content="tech newsletter subscription, Best Computer Tech updates, Palm Bay IT tips, Melbourne FL computer tips"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Subscribe to Our Newsletter | Best Computer Tech" />
        <meta
          property="og:description"
          content="Join our newsletter for the latest tech support tips and offers."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Subscribe to Our Newsletter | Best Computer Tech" />
        <meta
          name="twitter:description"
          content="Stay updated with IT tips, cybersecurity advice, and promotions."
        />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>
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
