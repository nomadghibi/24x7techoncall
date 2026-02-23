import React from 'react';
import { useLocation } from 'react-router-dom';

const BuyConfirmationPage = () => {
  const location = useLocation();
  const { orderNumber, orderDetails } = location.state || {};

  return (
    <div className="container p-8 mx-auto text-center">
      <h1 className="mb-4 text-4xl font-bold text-green-600">Thank You for Your Order!</h1>
      <p className="mb-8 text-lg">
        Your order <strong>{orderNumber}</strong> has been successfully placed.
      </p>
      <div className="p-6 mb-8 bg-white rounded-md shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Order Summary</h2>
        <ul className="mb-4 text-left">
          <li><strong>Item:</strong> {orderDetails?.item}</li>
          <li><strong>Total:</strong> ${orderDetails?.total.toFixed(2)}</li>
          <li><strong>Payment Method:</strong> {orderDetails?.paymentMethod}</li>
        </ul>
        <p>We’ve sent a confirmation email to your provided email address.</p>
        <p>If you have any questions, feel free to <a href="/contact" className="text-blue-500 underline">contact us</a>.</p>
      </div>
      <a href="/" className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700">
        Continue Shopping
      </a>
    </div>
  );
};

export default BuyConfirmationPage;
