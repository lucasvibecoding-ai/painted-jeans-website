'use client';

import { useEffect } from 'react';

export default function PurchaseFlag() {
  useEffect(() => {
    localStorage.setItem('bonsai_purchased', 'true');
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', { value: 47.00, currency: 'USD' });
    }
  }, []);

  return null;
}
