'use client';

import { useTimerExpired } from './CountdownTimer';

export default function MegaBonusBadge({ text }: { text: string }) {
  const expired = useTimerExpired();

  if (expired) {
    return <span style={{ textDecoration: 'line-through', color: 'rgba(26,46,26,0.4)' }}>{text} (expired)</span>;
  }

  return <span>{text}</span>;
}
