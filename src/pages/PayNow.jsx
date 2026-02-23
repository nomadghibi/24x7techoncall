import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useLocation } from 'react-router-dom';

const PayNow = () => {
  const location = useLocation();
  const { amount, description } = location.state;

  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">Pay Now</h1>
      <p className="mb-4">Amount: ${amount}</p>
      <p className="mb-8">Description: {description}</p>
      <PayPalScriptProvider options={{ "client-id": "your-client-id-here" }}>
        <PayPalButtons
          style={{ layout: 'vertical' }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                  description: description,
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert('Transaction completed by ' + details.payer.name.given_name);
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayNow;
