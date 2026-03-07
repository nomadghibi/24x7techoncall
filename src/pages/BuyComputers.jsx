
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet
import computerImage1 from '../assets/optimized-hero/computers-optimized-1152.jpg';
import computerImage2 from '../assets/optimized-hero/computers-optimized-1152.jpg';
import computerImage3 from '../assets/optimized-hero/computers-optimized-1152.jpg';

const BuyComputers = () => {
  const navigate = useNavigate();

  const bundles = [
    {
      title: 'BCT 17.3” HP Bundle',
      specs: [
        '17.3 inch brightview touch screen',
        'AMD Ryzen 5500 Processor',
        '12 GB Memory',
        '1 TB Hard Drive',
      ],
      services: [
        'Operating System Installation and Software Setup',
        'Data Migration Service',
        'Performance Optimization',
        'Security Setup',
        'Warranty and Customer Support',
      ],
      price: '$930.00',
      image: computerImage1,
      isProduct: true, // This is a product, so it's taxable
    },
    {
      title: 'BCT 15.6” Dell Bundle',
      specs: [
        '15.6 inch FHD display',
        'Intel i7 11th Gen Processor',
        '16 GB Memory',
        '512 GB SSD',
      ],
      services: [
        'Operating System Installation and Software Setup',
        'Data Migration Service',
        'Performance Optimization',
        'Security Setup',
        'Warranty and Customer Support',
      ],
      price: '$850.00',
      image: computerImage2,
      isProduct: true, // This is a product, so it's taxable
    },
    {
      title: 'BCT 13.3” MacBook Bundle',
      specs: [
        '13.3 inch Retina display',
        'Apple M1 Processor',
        '8 GB Memory',
        '256 GB SSD',
      ],
      services: [
        'Operating System Installation and Software Setup',
        'Data Migration Service',
        'Performance Optimization',
        'Security Setup',
        'Warranty and Customer Support',
      ],
      price: '$1200.00',
      image: computerImage3,
      isProduct: true, // This is a product, so it's taxable
    },
  ];

  const handlePurchase = (bundle) => {
    navigate('/checkout', { state: { service: bundle } });
  };

  return (
    <div className="container p-8 mx-auto">
      <Helmet>
        <title>Buy Computers - 24/7 Tech On Call</title>
        <link rel="canonical" href="https://24x7techoncall.com/buy-computers" />
      </Helmet>
      <h1 className="mb-4 text-4xl font-bold">Buy Computers</h1>
      {bundles.map((bundle, index) => (
        <div key={index} className="mb-12">
          <h2 className="mb-4 text-3xl font-bold">{bundle.title}</h2>
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
              <img
                src={bundle.image}
                alt={bundle.title}
                className="w-full h-auto lg:max-w-md"
                loading="lazy"
                decoding="async"
                width={1152}
                height={1152}
              />
            </div>
            <div className="flex-1 lg:ml-8">
              <ul className="mb-4 list-disc list-inside">
                {bundle.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
              <h3 className="mb-4 text-2xl font-bold">Seamless Transition Package:</h3>
              <p className="mb-4">
                Every computer purchased from 24/7 Tech On Call comes with an all-inclusive data transfer service. This service ensures that all your files are seamlessly transferred from your old computer to your new one. Plus, it also includes:
              </p>
              <ul className="mb-4 list-disc list-inside">
                {bundle.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <h3 className="mb-4 text-2xl font-bold">Total: {bundle.price}</h3>
              <button
                onClick={() => handlePurchase(bundle)}
                className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700"
              >
                PURCHASE {bundle.title.split(' ')[2].toUpperCase()} BUNDLE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyComputers;
