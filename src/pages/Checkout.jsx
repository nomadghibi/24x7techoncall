
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import '../pages/Checkout.css'; // Ensure Tailwind CSS is included

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const service = location.state?.service;

//   if (!service) {
//     navigate('/'); // Redirect to home if no service is selected (avoiding direct access to the checkout page)
//     return null;
//   }

//   const isProduct = service?.isProduct || false;
//   const [orderDetails, setOrderDetails] = useState({
//     item: service?.title || 'Default Service',
//     price: parseFloat(service?.price.replace('$', '')) || 0,
//     shipping: 'Free shipping',
//     tax: 0.0,
//     total: parseFloat(service?.price.replace('$', '')) || 0,
//   });

//   useEffect(() => {
//     if (isProduct) {
//       const taxAmount = orderDetails.price * 0.07; // Assuming a 7% sales tax rate
//       setOrderDetails((prevDetails) => ({
//         ...prevDetails,
//         tax: taxAmount,
//         total: prevDetails.price + taxAmount,
//       }));
//     }
//   }, [isProduct, orderDetails.price]);

//   const [billingDetails, setBillingDetails] = useState({
//     firstName: '',
//     lastName: '',
//     streetAddress: '',
//     apartment: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: 'United States',
//   });

//   const [paymentError, setPaymentError] = useState('');

//   const handleBillingDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setBillingDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     // Load PayPal script
//     const script = document.createElement('script');
//     script.src =
//       'https://www.paypal.com/sdk/js?client-id=AU7xP5heE34hNJdS6nkH-9elJjzlpTyh3VbaXgm7SaGgbLwcXLslaw9BRkFJKZhu7HEku-9PuZl34gMm'; // Replace with your PayPal Client ID
//     script.addEventListener('load', () => {
//       window.paypal.Buttons({
//         createOrder: (data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: orderDetails.total.toFixed(2), // Total amount to charge
//                 },
//                 description: orderDetails.item,
//               },
//             ],
//           });
//         },
//         onApprove: async (data, actions) => {
//           return actions.order.capture().then((details) => {
//             const orderNumber = Math.floor(Math.random() * 1000000);

//             navigate('/buy-confirmation', {
//               state: {
//                 orderNumber,
//                 orderDetails: {
//                   item: orderDetails.item,
//                   total: orderDetails.total,
//                   paymentMethod: 'PayPal',
//                   billingDetails,
//                 },
//               },
//             });
//           });
//         },
//         onError: (err) => {
//           setPaymentError('Payment processing failed. Please try again.');
//           console.error('PayPal Checkout onError', err);
//         },
//       }).render('#paypal-button-container');
//     });

//     document.body.appendChild(script);

//     return () => {
//       script.removeEventListener('load', null);
//       document.body.removeChild(script);
//     };
//   }, [orderDetails, billingDetails, navigate]);

//   return (
//     <div className="max-w-4xl p-6 mx-auto">
//       <h1 className="mb-8 text-3xl font-bold text-center">Checkout</h1>
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//         <div className="p-6 bg-white rounded-md shadow-md">
//           <h2 className="mb-4 text-2xl font-semibold">Billing Details</h2>
//           <form>
//             <div className="mb-4">
//               <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={billingDetails.firstName}
//                 onChange={handleBillingDetailsChange}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1 text-sm font-medium text-gray-700">Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={billingDetails.lastName}
//                 onChange={handleBillingDetailsChange}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1 text-sm font-medium text-gray-700">Street Address</label>
//               <input
//                 type="text"
//                 name="streetAddress"
//                 value={billingDetails.streetAddress}
//                 onChange={handleBillingDetailsChange}
//                 placeholder="House number and street name"
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1 text-sm font-medium text-gray-700">
//                 Apartment, Suite, Unit, etc. (optional)
//               </label>
//               <input
//                 type="text"
//                 name="apartment"
//                 value={billingDetails.apartment}
//                 onChange={handleBillingDetailsChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="grid grid-cols-3 gap-4 mb-4">
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={billingDetails.city}
//                   onChange={handleBillingDetailsChange}
//                   required
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">State</label>
//                 <input
//                   type="text"
//                   name="state"
//                   value={billingDetails.state}
//                   onChange={handleBillingDetailsChange}
//                   required
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">ZIP / Postal Code</label>
//                 <input
//                   type="text"
//                   name="zip"
//                   value={billingDetails.zip}
//                   onChange={handleBillingDetailsChange}
//                   required
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                 />
//               </div>
//             </div>
//           </form>
//         </div>
//         <div className="p-6 bg-white rounded-md shadow-md">
//           <h2 className="mb-4 text-2xl font-semibold">Your Order</h2>
//           <ul className="mb-6">
//             <li className="mb-2 text-lg">{orderDetails.item}</li>
//             <li className="mb-1 text-gray-700">Subtotal: ${orderDetails.price.toFixed(2)}</li>
//             <li className="mb-1 text-gray-700">{orderDetails.shipping}</li>
//             {isProduct && <li className="mb-1 text-gray-700">Tax: ${orderDetails.tax.toFixed(2)}</li>}
//             <li className="text-xl font-semibold">Total: ${orderDetails.total.toFixed(2)}</li>
//           </ul>
//           <div id="paypal-button-container"></div>
//           {paymentError && <p className="mb-4 text-red-500">{paymentError}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;



import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import '../pages/Checkout.css'; // Ensure Tailwind CSS is included

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state?.service;

  // Redirect to home if no service is selected (avoiding direct access to the checkout page)
  useEffect(() => {
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  const isProduct = service?.isProduct || false;
  const [orderDetails, setOrderDetails] = useState({
    item: service?.title || 'Default Service',
    price: parseFloat(service?.price.replace('$', '')) || 0,
    shipping: 'Free shipping',
    tax: 0.0,
    total: parseFloat(service?.price.replace('$', '')) || 0,
  });

  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
  });

  const [errors, setErrors] = useState({});
  const [paymentError, setPaymentError] = useState('');

  // Calculate tax and total if the service is a product
  useEffect(() => {
    if (isProduct) {
      const taxAmount = orderDetails.price * 0.07; // Assuming a 7% sales tax rate
      setOrderDetails((prevDetails) => ({
        ...prevDetails,
        tax: taxAmount,
        total: parseFloat(prevDetails.price) + taxAmount,
      }));
    }
  }, [isProduct, orderDetails.price]);

  const handleBillingDetailsChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    // Clear error for the field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  useEffect(() => {
    // Load PayPal script
    const script = document.createElement('script');
    script.src =
      'https://www.paypal.com/sdk/js?client-id=AU7xP5heE34hNJdS6nkH-9elJjzlpTyh3VbaXgm7SaGgbLwcXLslaw9BRkFJKZhu7HEku-9PuZl34gMm'; // Replace with your PayPal Client ID
    script.addEventListener('load', () => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: orderDetails.total.toFixed(2), // Total amount to charge
                  },
                  description: orderDetails.item,
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            return actions.order.capture().then((details) => {
              const orderNumber = Math.floor(Math.random() * 1000000);

              navigate('/buy-confirmation', {
                state: {
                  orderNumber,
                  orderDetails: {
                    item: orderDetails.item,
                    total: orderDetails.total,
                    paymentMethod: 'PayPal',
                    billingDetails,
                  },
                },
              });
            });
          },
          onError: (err) => {
            setPaymentError('Payment processing failed. Please try again.');
            console.error('PayPal Checkout onError', err);
          },
        })
        .render('#paypal-button-container');
    });

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', null);
      document.body.removeChild(script);
    };
  }, [orderDetails, billingDetails, navigate]);

  const validate = () => {
    const newErrors = {};
    if (!billingDetails.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!billingDetails.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!billingDetails.streetAddress.trim()) newErrors.streetAddress = 'Street address is required';
    if (!billingDetails.city.trim()) newErrors.city = 'City is required';
    if (!billingDetails.state.trim()) newErrors.state = 'State is required';
    if (!billingDetails.zip.trim()) newErrors.zip = 'ZIP/Postal code is required';
    // Country is pre-filled; if dynamic, validate as needed
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This form submission is handled by PayPal, so no action is needed here
  };

  // Define the canonical URL for this page
  const canonicalUrl = 'https://www.yourdomain.com/checkout'; // Replace with your actual URL

  return (
    <div>
      {/* Helmet for canonical URL and SEO metadata */}
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>Checkout | Your Company Name</title>
        <meta
          name="description"
          content={`Complete your purchase of ${orderDetails.item} securely using PayPal.`}
        />
      </Helmet>

      <div className="max-w-4xl p-6 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center">Checkout</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Billing Details Section */}
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Billing Details</h2>
            <form onSubmit={handleSubmit} noValidate>
              {/* First Name Field */}
              <div className="mb-4">
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={billingDetails.firstName}
                  onChange={handleBillingDetailsChange}
                  className={`w-full p-2 border ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                  aria-invalid={errors.firstName ? 'true' : 'false'}
                  aria-describedby={errors.firstName ? 'firstName-error' : null}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-500" id="firstName-error">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name Field */}
              <div className="mb-4">
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={billingDetails.lastName}
                  onChange={handleBillingDetailsChange}
                  className={`w-full p-2 border ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                  aria-invalid={errors.lastName ? 'true' : 'false'}
                  aria-describedby={errors.lastName ? 'lastName-error' : null}
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-500" id="lastName-error">
                    {errors.lastName}
                  </p>
                )}
              </div>

              {/* Street Address Field */}
              <div className="mb-4">
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="streetAddress"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  value={billingDetails.streetAddress}
                  onChange={handleBillingDetailsChange}
                  placeholder="House number and street name"
                  className={`w-full p-2 border ${
                    errors.streetAddress ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                  aria-invalid={errors.streetAddress ? 'true' : 'false'}
                  aria-describedby={errors.streetAddress ? 'streetAddress-error' : null}
                />
                {errors.streetAddress && (
                  <p className="mt-1 text-xs text-red-500" id="streetAddress-error">
                    {errors.streetAddress}
                  </p>
                )}
              </div>

              {/* Apartment/Suite/Unit Field */}
              <div className="mb-4">
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="apartment"
                >
                  Apartment, Suite, Unit, etc. (optional)
                </label>
                <input
                  type="text"
                  name="apartment"
                  id="apartment"
                  value={billingDetails.apartment}
                  onChange={handleBillingDetailsChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* City, State, ZIP Fields */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                {/* City */}
                <div>
                  <label
                    className="block mb-1 text-sm font-medium text-gray-700"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={billingDetails.city}
                    onChange={handleBillingDetailsChange}
                    className={`w-full p-2 border ${
                      errors.city ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                    aria-invalid={errors.city ? 'true' : 'false'}
                    aria-describedby={errors.city ? 'city-error' : null}
                  />
                  {errors.city && (
                    <p className="mt-1 text-xs text-red-500" id="city-error">
                      {errors.city}
                    </p>
                  )}
                </div>

                {/* State */}
                <div>
                  <label
                    className="block mb-1 text-sm font-medium text-gray-700"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={billingDetails.state}
                    onChange={handleBillingDetailsChange}
                    className={`w-full p-2 border ${
                      errors.state ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                    aria-invalid={errors.state ? 'true' : 'false'}
                    aria-describedby={errors.state ? 'state-error' : null}
                  />
                  {errors.state && (
                    <p className="mt-1 text-xs text-red-500" id="state-error">
                      {errors.state}
                    </p>
                  )}
                </div>

                {/* ZIP / Postal Code */}
                <div>
                  <label
                    className="block mb-1 text-sm font-medium text-gray-700"
                    htmlFor="zip"
                  >
                    ZIP / Postal Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    value={billingDetails.zip}
                    onChange={handleBillingDetailsChange}
                    className={`w-full p-2 border ${
                      errors.zip ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                    aria-invalid={errors.zip ? 'true' : 'false'}
                    aria-describedby={errors.zip ? 'zip-error' : null}
                  />
                  {errors.zip && (
                    <p className="mt-1 text-xs text-red-500" id="zip-error">
                      {errors.zip}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Your Order</h2>
            <ul className="mb-6">
              <li className="mb-2 text-lg">{orderDetails.item}</li>
              <li className="mb-1 text-gray-700">Subtotal: ${orderDetails.price.toFixed(2)}</li>
              <li className="mb-1 text-gray-700">{orderDetails.shipping}</li>
              {isProduct && (
                <li className="mb-1 text-gray-700">Tax: ${orderDetails.tax.toFixed(2)}</li>
              )}
              <li className="text-xl font-semibold">Total: ${orderDetails.total.toFixed(2)}</li>
            </ul>
            <div id="paypal-button-container"></div>
            {paymentError && <p className="mb-4 text-red-500">{paymentError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
