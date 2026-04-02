import type { Metadata } from 'next';
import CheckoutClient from './CheckoutClient';

export const metadata: Metadata = {
  title: 'Checkout — The Painted Jeans Masterclass',
  description: 'Complete your purchase',
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
