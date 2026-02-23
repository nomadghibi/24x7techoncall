import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const parseAmount = (value) => {
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

const PayNow = () => {
  const location = useLocation();
  const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
  const amount = parseAmount(location.state?.amount);
  const description = location.state?.description || 'Service payment';
  const canonicalUrl = 'https://bestcomputertec.com/paynow';

  if (!location.state?.amount) {
    return (
      <div className="container p-8 mx-auto">
        <Helmet>
          <title>Pay Now | Best Computer Tech</title>
          <meta name="description" content="Secure payment page for Best Computer Tech services." />
          <link rel="canonical" href={canonicalUrl} />
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <h1 className="mb-4 text-4xl font-bold">Pay Now</h1>
        <p className="mb-6">No payment details were provided.</p>
        <Link to="/pricing" className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700">
          Go to Pricing
        </Link>
      </div>
    );
  }

  return (
    <div className="container p-8 mx-auto">
      <Helmet>
        <title>Pay Now | Best Computer Tech</title>
        <meta name="description" content="Secure payment page for Best Computer Tech services." />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 className="mb-4 text-4xl font-bold">Pay Now</h1>
      <p className="mb-4">Amount: ${amount.toFixed(2)}</p>
      <p className="mb-8">Description: {description}</p>

      {!paypalClientId && (
        <p className="mb-4 text-sm text-red-600">
          Payment is temporarily unavailable. Set `VITE_PAYPAL_CLIENT_ID` in your environment.
        </p>
      )}

      {paypalClientId && (
        <PayPalScriptProvider options={{ 'client-id': paypalClientId, currency: 'USD' }}>
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(_data, actions) =>
              actions.order.create({
                purchase_units: [
                  {
                    amount: { value: amount.toFixed(2) },
                    description,
                  },
                ],
              })
            }
            onApprove={(_data, actions) =>
              actions.order.capture().then((details) => {
                const firstName = details?.payer?.name?.given_name || 'customer';
                alert(`Payment completed, ${firstName}. Your transaction was received successfully.`);
              })
            }
          />
        </PayPalScriptProvider>
      )}
    </div>
  );
};

export default PayNow;
