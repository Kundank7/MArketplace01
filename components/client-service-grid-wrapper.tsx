'use client';

import { Suspense } from 'react';
import { ServiceGrid } from './service-grid';
import { ServiceSkeleton } from './service-skeleton';

export default function ClientServiceGridWrapper() {
  return (
    <Suspense fallback={<ServiceSkeleton count={6} />}>
      <ServiceGrid />
    </Suspense>
  );
}
