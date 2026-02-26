import { useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaLock, FaCheckCircle, FaArrowLeft, FaShieldAlt } from 'react-icons/fa';

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

const helmet = (canonicalUrl) => (
  <Helmet>
    <title>Pay Now | Best Computer Tech</title>
    <meta name="description" content="Secure payment page for Best Computer Tech services." />
    <link rel="canonical" href={canonicalUrl} />
    <meta name="robots" content="noindex, nofollow" />
  </Helmet>
);

const PayNow = () => {
  const location = useLocation();
  const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
  const amount = parseAmount(location.state?.amount);
  const description = location.state?.description || 'Service payment';
  const canonicalUrl = 'https://bestcomputertec.com/paynow';
  const [paid, setPaid] = useState(false);
  const [payerName, setPayerName] = useState('');

  /* ── No payment details ── */
  if (!location.state?.amount) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
        {helmet(canonicalUrl)}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
            <FaLock className="text-gray-400 text-xl" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">No Payment Details</h1>
          <p className="text-gray-500 text-sm mb-8">
            A payment amount is required to use this page. Please visit our pricing page to select a plan.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold px-6 py-3 rounded-full transition-colors shadow"
          >
            <FaArrowLeft className="w-3.5 h-3.5" /> View Pricing
          </Link>
        </div>
      </div>
    );
  }

  /* ── Payment success ── */
  if (paid) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
        {helmet(canonicalUrl)}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <FaCheckCircle className="text-cyan-500 w-16 h-16 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 text-sm mb-1">
            {payerName ? `Thank you, ${payerName}!` : 'Thank you!'} Your payment of{' '}
            <strong className="text-gray-800">${amount.toFixed(2)}</strong> was received.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            A confirmation has been sent. We'll be in touch shortly.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold px-6 py-3 rounded-full transition-colors shadow"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  /* ── Main payment page ── */
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      {helmet(canonicalUrl)}
      <div className="w-full max-w-md space-y-4">

        {/* Header card */}
        <div className="bg-gray-900 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
              <FaShieldAlt className="text-cyan-400 w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-cyan-400 font-semibold uppercase tracking-widest">Secure Payment</p>
              <h1 className="text-xl font-bold leading-tight">Best Computer Tech</h1>
            </div>
          </div>
          <div className="border-t border-white/10 pt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Service</span>
              <span className="text-white font-semibold text-sm text-right max-w-[60%]">{description}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Amount Due</span>
              <span className="text-cyan-400 font-bold text-2xl">${amount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-5 border-l-4 border-cyan-500 pl-3">
            Complete Your Payment
          </h2>

          {!paypalClientId && (
            <div className="mb-5 p-4 text-sm text-red-800 bg-red-50 border border-red-200 rounded-lg">
              Payment is temporarily unavailable. Please call{' '}
              <a href="tel:3219535199" className="font-semibold underline">(321) 953-5199</a>{' '}
              to arrange payment.
            </div>
          )}

          {paypalClientId && (
            <PayPalScriptProvider options={{ 'client-id': paypalClientId, currency: 'USD' }}>
              <PayPalButtons
                style={{ layout: 'vertical', shape: 'rect', label: 'pay' }}
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
                    const firstName = details?.payer?.name?.given_name || '';
                    setPayerName(firstName);
                    setPaid(true);
                  })
                }
              />
            </PayPalScriptProvider>
          )}

          <p className="mt-5 text-xs text-gray-400 text-center flex items-center justify-center gap-1.5">
            <FaLock className="w-3 h-3" /> Payments are secured and processed by PayPal
          </p>
        </div>

        {/* Back link */}
        <p className="text-center text-sm text-gray-500">
          Questions?{' '}
          <a href="tel:3219535199" className="text-cyan-500 font-semibold hover:underline">
            Call (321) 953-5199
          </a>
        </p>

      </div>
    </div>
  );
};

export default PayNow;
