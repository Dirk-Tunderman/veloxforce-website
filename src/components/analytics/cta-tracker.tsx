'use client';

import React, { useCallback } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';

interface CTATrackerProps {
  eventName: string;
  eventData?: Record<string, any>;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

export function CTATracker({
  eventName,
  eventData,
  onClick,
  children,
}: CTATrackerProps) {
  const { trackEvent } = useAnalytics();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      trackEvent(eventName, eventData);

      if (onClick) {
        onClick(e);
      }
    },
    [trackEvent, eventName, eventData, onClick]
  );

  // Clone the child element and add the onClick handler
  const child = React.Children.only(children) as React.ReactElement;

  return React.cloneElement(child, {
    onClick: handleClick,
  });
}
