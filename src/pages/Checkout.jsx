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
    const price = parsePrice(service.price ?? state?.price);
    if (price <= 0) return null;
    return {
      title: service.title || service.item || 'Service',
      price,
      isProduct: Boolean(service.isProduct),
    };
  }

  if (typeof service === 'string') {
    const price = parsePrice(state?.price);
    if (price <= 0) return null;
    return {
      title: service,
      price,
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
    email: '',
    phone: '',
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
    if (!billingDetails.email.trim()) nextErrors.email = 'Email is required';
    if (!billingDetails.phone.trim()) nextErrors.phone = 'Phone number is required';
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
        <link rel="canonical" href="https://24x7techoncall.com/checkout" />
        <title>{checkoutTitle}</title>
        <meta
          name="description"
          content={`Complete your purchase of ${service.title} securely with PayPal.`}
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-4xl p-6 mx-auto">
        <h1 className="mb-2 text-3xl font-bold text-center">Complete Your Order</h1>
        <p className="text-center text-gray-500 mb-8 text-sm">Remote service — no visit required. We'll contact you to schedule your session after payment.</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <h2 className="mb-1 text-xl font-bold text-gray-900">Your Details</h2>
            <p className="text-sm text-gray-400 mb-5">We'll use this to confirm your appointment.</p>
            <form noValidate className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-semibold text-gray-700" htmlFor="firstName">First Name</label>
                  <input
                    type="text" name="firstName" id="firstName"
                    value={billingDetails.firstName} onChange={handleBillingDetailsChange}
                    placeholder="Jane"
                    className={`w-full p-2.5 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    required
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block mb-1 text-sm font-semibold text-gray-700" htmlFor="lastName">Last Name</label>
                  <input
                    type="text" name="lastName" id="lastName"
                    value={billingDetails.lastName} onChange={handleBillingDetailsChange}
                    placeholder="Smith"
                    className={`w-full p-2.5 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    required
                  />
                  {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm font-semibold text-gray-700" htmlFor="email">Email Address</label>
                <input
                  type="email" name="email" id="email"
                  value={billingDetails.email} onChange={handleBillingDetailsChange}
                  placeholder="you@example.com"
                  className={`w-full p-2.5 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                  required
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label className="block mb-1 text-sm font-semibold text-gray-700" htmlFor="phone">Phone Number</label>
                <input
                  type="tel" name="phone" id="phone"
                  value={billingDetails.phone} onChange={handleBillingDetailsChange}
                  placeholder="(321) 555-1234"
                  className={`w-full p-2.5 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                  required
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>
            </form>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Order Summary</h2>
            <div className="bg-gray-50 rounded-xl p-4 mb-5 space-y-2">
              <div className="flex justify-between text-sm text-gray-700">
                <span>{service.title}</span>
                <span>${service.price.toFixed(2)}</span>
              </div>
              {service.isProduct && (
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              )}
              <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

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
