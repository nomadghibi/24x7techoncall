import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import '../pages/Checkout.css';

const TAX_RATE = 0.07;

const parsePrice = (value) => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const normalized = value.replace(/[^0-9.]/g, '');
    const parsed = Number.parseFloat(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
};

const normalizeService = (state) => {
  const service = state?.service;

  if (service && typeof service === 'object') {
    return {
      title: service.title || service.item || 'Service',
      price: parsePrice(service.price ?? state?.price),
      isProduct: Boolean(service.isProduct),
    };
  }

  if (typeof service === 'string') {
    return {
      title: service,
      price: parsePrice(state?.price),
      isProduct: false,
    };
  }

  return null;
};

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  const service = useMemo(() => normalizeService(location.state), [location.state]);

  useEffect(() => {
    if (!service) {
      navigate('/', { replace: true });
    }
  }, [service, navigate]);

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

  if (!service) {
    return null;
  }

  const tax = service.isProduct ? service.price * TAX_RATE : 0;
  const total = service.price + tax;

  const validate = () => {
    const nextErrors = {};

    if (!billingDetails.firstName.trim()) nextErrors.firstName = 'First name is required';
    if (!billingDetails.lastName.trim()) nextErrors.lastName = 'Last name is required';
    if (!billingDetails.streetAddress.trim()) nextErrors.streetAddress = 'Street address is required';
    if (!billingDetails.city.trim()) nextErrors.city = 'City is required';
    if (!billingDetails.state.trim()) nextErrors.state = 'State is required';
    if (!billingDetails.zip.trim()) nextErrors.zip = 'ZIP/Postal code is required';

    return nextErrors;
  };

  const handleBillingDetailsChange = (event) => {
    const { name, value } = event.target;
    setBillingDetails((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const checkoutTitle = `Checkout | ${service.title}`;

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://bestcomputertec.com/checkout" />
        <title>{checkoutTitle}</title>
        <meta
          name="description"
          content={`Complete your purchase of ${service.title} securely with PayPal.`}
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-4xl p-6 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center">Checkout</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Billing Details</h2>
            <form noValidate>
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={billingDetails.firstName}
                  onChange={handleBillingDetailsChange}
                  className={`w-full p-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                  aria-invalid={errors.firstName ? 'true' : 'false'}
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-500" id="firstName-error">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={billingDetails.lastName}
                  onChange={handleBillingDetailsChange}
                  className={`w-full p-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                  aria-invalid={errors.lastName ? 'true' : 'false'}
                  aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-500" id="lastName-error">
                    {errors.lastName}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="streetAddress">
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  value={billingDetails.streetAddress}
                  onChange={handleBillingDetailsChange}
                  placeholder="House number and street name"
                  className={`w-full p-2 border ${errors.streetAddress ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                  aria-invalid={errors.streetAddress ? 'true' : 'false'}
                  aria-describedby={errors.streetAddress ? 'streetAddress-error' : undefined}
                />
                {errors.streetAddress && (
                  <p className="mt-1 text-xs text-red-500" id="streetAddress-error">
                    {errors.streetAddress}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="apartment">
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

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="city">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={billingDetails.city}
                    onChange={handleBillingDetailsChange}
                    className={`w-full p-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                    aria-invalid={errors.city ? 'true' : 'false'}
                    aria-describedby={errors.city ? 'city-error' : undefined}
                  />
                  {errors.city && (
                    <p className="mt-1 text-xs text-red-500" id="city-error">
                      {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="state">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={billingDetails.state}
                    onChange={handleBillingDetailsChange}
                    className={`w-full p-2 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                    aria-invalid={errors.state ? 'true' : 'false'}
                    aria-describedby={errors.state ? 'state-error' : undefined}
                  />
                  {errors.state && (
                    <p className="mt-1 text-xs text-red-500" id="state-error">
                      {errors.state}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="zip">
                    ZIP / Postal Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    value={billingDetails.zip}
                    onChange={handleBillingDetailsChange}
                    className={`w-full p-2 border ${errors.zip ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                    aria-invalid={errors.zip ? 'true' : 'false'}
                    aria-describedby={errors.zip ? 'zip-error' : undefined}
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

          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Your Order</h2>
            <ul className="mb-6">
              <li className="mb-2 text-lg">{service.title}</li>
              <li className="mb-1 text-gray-700">Subtotal: ${service.price.toFixed(2)}</li>
              <li className="mb-1 text-gray-700">Free shipping</li>
              {service.isProduct && <li className="mb-1 text-gray-700">Tax: ${tax.toFixed(2)}</li>}
              <li className="text-xl font-semibold">Total: ${total.toFixed(2)}</li>
            </ul>

            {!paypalClientId && (
              <p className="mb-4 text-sm text-red-600">
                Payment is temporarily unavailable. Set `VITE_PAYPAL_CLIENT_ID` in your environment.
              </p>
            )}

            {paypalClientId && (
              <PayPalScriptProvider options={{ 'client-id': paypalClientId, currency: 'USD' }}>
                <PayPalButtons
                  style={{ layout: 'vertical' }}
                  onClick={(_data, actions) => {
                    const validationErrors = validate();
                    setErrors(validationErrors);
                    if (Object.keys(validationErrors).length > 0) {
                      return actions.reject();
                    }
                    return actions.resolve();
                  }}
                  createOrder={(_data, actions) =>
                    actions.order.create({
                      purchase_units: [
                        {
                          amount: { value: total.toFixed(2) },
                          description: service.title,
                        },
                      ],
                    })
                  }
                  onApprove={async (_data, actions) => {
                    const details = await actions.order.capture();
                    navigate('/buy-confirmation', {
                      state: {
                        orderNumber: details.id || Math.floor(Math.random() * 1000000),
                        orderDetails: {
                          item: service.title,
                          total,
                          paymentMethod: 'PayPal',
                          billingDetails,
                        },
                      },
                    });
                  }}
                  onError={(error) => {
                    console.error('PayPal checkout error', error);
                    setPaymentError('Payment processing failed. Please try again.');
                  }}
                />
              </PayPalScriptProvider>
            )}

            {paymentError && <p className="mt-4 text-red-500">{paymentError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
