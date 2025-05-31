'use client';

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useAnalytics } from '@/hooks/use-analytics';

interface SectionTrackerProps {
  sectionName: string;
  sectionPosition?: number;
  threshold?: number;
  children: React.ReactNode;
  className?: string;
}

export function SectionTracker({
  sectionName,
  sectionPosition = 0,
  threshold = 0.5,
  children,
  className,
}: SectionTrackerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const { trackSection } = useAnalytics();
  
  useEffect(() => {
    if (isInView) {
      trackSection(sectionName, sectionPosition);
    }
  }, [isInView, sectionName, sectionPosition, trackSection]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
