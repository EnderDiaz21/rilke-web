'use client';

import { FAMILY_EVENT } from './productImages';

export default function QuoteLink({
  family,
  children,
  className
}: {
  family: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#rfq"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(FAMILY_EVENT, { detail: family }))}
    >
      {children}
    </a>
  );
}
