'use client';

import { useState } from 'react';
import {
  PaymentElement,
  ExpressCheckoutElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

export default function StripeForm({ email, onEmailChange, isEmailValid, paypalSlot }: { email: string; onEmailChange: (v: string) => void; isEmailValid: boolean; paypalSlot?: React.ReactNode }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || !isEmailValid) return;

    setIsProcessing(true);
    setError('');

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
        receipt_email: email || undefined,
      },
    });

    if (submitError) {
      setError(submitError.message || 'Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  const onExpressCheckoutConfirm = async () => {
    if (!stripe || !elements || !isEmailValid) return;
    setIsProcessing(true);
    setError('');

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
        receipt_email: email || undefined,
      },
    });

    if (confirmError) {
      setError(confirmError.message || 'Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <ExpressCheckoutElement
        onConfirm={onExpressCheckoutConfirm}
        options={{
          buttonType: {
            applePay: 'buy',
            googlePay: 'buy',
          },
        }}
      />

      {paypalSlot && <div style={{ marginTop: 12 }}>{paypalSlot}</div>}

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '24px 0' }}>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
        <span style={{ fontSize: 13, color: '#9a9689', whiteSpace: 'nowrap' }}>Or pay with card</span>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
      </div>

      <form onSubmit={handleSubmit}>
        <PaymentElement
          options={{
            wallets: {
              applePay: 'never',
              googlePay: 'never',
            },
          }}
        />
        {error && (
          <p style={{ color: '#df1b41', fontSize: '14px', marginTop: '12px' }}>
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={!stripe || isProcessing || !isEmailValid}
          style={{
            width: '100%',
            marginTop: '24px',
            padding: '12px 24px',
            background: (isProcessing || !isEmailValid) ? '#a3acb9' : '#635BFF',
            border: 'none',
            borderRadius: '6px',
            color: '#ffffff',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: '16px',
            fontWeight: 600,
            cursor: (isProcessing || !isEmailValid) ? 'not-allowed' : 'pointer',
            transition: 'all 0.15s ease',
            letterSpacing: '0.01em',
          }}
        >
          {isProcessing ? 'Processing...' : 'Pay $47.00'}
        </button>
      </form>
    </div>
  );
}
