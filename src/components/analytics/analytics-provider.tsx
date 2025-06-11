'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect, Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GA_MEASUREMENT_ID, GA_EVENTS, GA_PARAMETERS } from '@/lib/analytics';

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views
  useEffect(() => {
    if (pathname) {
      // Wait for gtag to be available
      if (window.gtag) {
        // Construct the URL with search parameters
        const url = searchParams?.size
          ? `${pathname}?${searchParams.toString()}`
          : pathname;

        // Send page view event
        window.gtag('event', GA_EVENTS.PAGE_VIEW, {
          [GA_PARAMETERS.PAGE_PATH]: url,
          [GA_PARAMETERS.PAGE_TITLE]: document.title,
          [GA_PARAMETERS.PAGE_REFERRER]: document.referrer || '',
        });
      }
    }
  }, [pathname, searchParams]);

  // Track scroll depth
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scrollDepths = [25, 50, 75, 90];
      let trackedDepths: number[] = [];

      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        scrollDepths.forEach((depth) => {
          if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
            trackedDepths.push(depth);
            window.gtag('event', GA_EVENTS.SCROLL_MILESTONE, {
              [GA_PARAMETERS.SCROLL_DEPTH]: depth,
              [GA_PARAMETERS.SCROLL_UNIT]: 'percent',
              [GA_PARAMETERS.PAGE_PATH]: pathname,
            });
          }
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [pathname]);

  // Track exit intent
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let exitIntentTracked = false;

      const handleExitIntent = (e: MouseEvent) => {
        if (e.clientY <= 0 && !exitIntentTracked) {
          exitIntentTracked = true;
          window.gtag('event', GA_EVENTS.EXIT_INTENT, {
            [GA_PARAMETERS.PAGE_PATH]: pathname,
            [GA_PARAMETERS.PAGE_TITLE]: document.title,
          });
        }
      };

      window.addEventListener('mouseleave', handleExitIntent);

      return () => {
        window.removeEventListener('mouseleave', handleExitIntent);
      };
    }
  }, [pathname]);

  return null;
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: false
            });
          `,
        }}
      />

      {/* Vercel Speed Insights - Performance Monitoring */}
      <SpeedInsights />

      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
      {children}
    </>
  );
}
