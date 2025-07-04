'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { GA_EVENTS, GA_PARAMETERS, sendGAEvent } from '@/lib/analytics';

function PageViewTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // Construct the URL with search parameters
      const url = searchParams?.size
        ? `${pathname}?${searchParams.toString()}`
        : pathname;

      // Send page view event
      sendGAEvent(GA_EVENTS.PAGE_VIEW, {
        [GA_PARAMETERS.PAGE_PATH]: url,
        [GA_PARAMETERS.PAGE_TITLE]: document.title,
        [GA_PARAMETERS.PAGE_REFERRER]: document.referrer || '',
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function PageViewTracker() {
  return (
    <Suspense fallback={null}>
      <PageViewTrackerInner />
    </Suspense>
  );
}
