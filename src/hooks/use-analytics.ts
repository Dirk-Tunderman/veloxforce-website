'use client';

import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import {
  GA_EVENTS,
  GA_PARAMETERS,
  sendGAEvent,
  trackCTAClick,
  trackFormInteraction,
  trackSectionVisible,
} from '@/lib/analytics';

export function useAnalytics() {
  const pathname = usePathname();

  // Track CTA clicks
  const trackCTA = useCallback(
    (label: string, location: string, destination: string) => {
      trackCTAClick(label, location, destination);
    },
    []
  );

  // Track section visibility
  const trackSection = useCallback(
    (sectionName: string, sectionPosition: number) => {
      trackSectionVisible(sectionName, sectionPosition);
    },
    []
  );

  // Track form start
  const trackFormStart = useCallback(
    (formName: string, formLength: number = 1) => {
      trackFormInteraction(GA_EVENTS.FORM_START, formName, {
        [GA_PARAMETERS.FORM_LENGTH]: formLength,
        [GA_PARAMETERS.PAGE_PATH]: pathname,
      });
    },
    [pathname]
  );

  // Track form step completion
  const trackFormStep = useCallback(
    (formName: string, stepNumber: number, formLength: number = 1) => {
      trackFormInteraction(GA_EVENTS.FORM_STEP_COMPLETE, formName, {
        [GA_PARAMETERS.FORM_STEP]: stepNumber,
        [GA_PARAMETERS.FORM_LENGTH]: formLength,
        [GA_PARAMETERS.PAGE_PATH]: pathname,
      });
    },
    [pathname]
  );

  // Track form submission
  const trackFormSubmit = useCallback(
    (formName: string) => {
      trackFormInteraction(GA_EVENTS.FORM_SUBMISSION, formName, {
        [GA_PARAMETERS.PAGE_PATH]: pathname,
      });
    },
    [pathname]
  );

  // Track form errors
  const trackFormError = useCallback(
    (formName: string, errorType: string, errorMessage: string) => {
      trackFormInteraction(GA_EVENTS.FORM_ERROR, formName, {
        [GA_PARAMETERS.ERROR_TYPE]: errorType,
        [GA_PARAMETERS.ERROR_MESSAGE]: errorMessage,
        [GA_PARAMETERS.PAGE_PATH]: pathname,
      });
    },
    [pathname]
  );

  // Generic event tracking
  const trackEvent = useCallback(
    (eventName: string, params: Record<string, any> = {}) => {
      sendGAEvent(eventName, {
        ...params,
        [GA_PARAMETERS.PAGE_PATH]: pathname,
      });
    },
    [pathname]
  );

  return {
    trackCTA,
    trackSection,
    trackFormStart,
    trackFormStep,
    trackFormSubmit,
    trackFormError,
    trackEvent,
  };
}
