// Google Analytics Configuration
export const GA_MEASUREMENT_ID = 'G-MXZQGTT8EW';
export const GA_STREAM_ID = '10421361982';

// Custom event names
export const GA_EVENTS = {
  // Page view events
  PAGE_VIEW: 'page_view',

  // CTA interaction events
  CTA_CLICK: 'cta_click',

  // Section visibility events
  SECTION_VISIBLE: 'section_visible',

  // Form interaction events
  FORM_START: 'form_start',
  FORM_STEP_COMPLETE: 'form_step_complete',
  FORM_SUBMISSION: 'form_submission',
  FORM_ERROR: 'form_error',

  // Content engagement events
  SCROLL_MILESTONE: 'scroll_milestone',
  EXIT_INTENT: 'exit_intent',

  // Video engagement events (for future use)
  VIDEO_START: 'video_start',
  VIDEO_PROGRESS: 'video_progress',
  VIDEO_COMPLETE: 'video_complete',
};

// Event parameters
export const GA_PARAMETERS = {
  // CTA parameters
  CTA_LABEL: 'cta_label',
  CTA_LOCATION: 'cta_location',
  CTA_DESTINATION: 'cta_destination',

  // Section parameters
  SECTION_NAME: 'section_name',
  SECTION_POSITION: 'section_position',

  // Form parameters
  FORM_NAME: 'form_name',
  FORM_STEP: 'form_step',
  FORM_LENGTH: 'form_length',
  ERROR_TYPE: 'error_type',
  ERROR_MESSAGE: 'error_message',

  // Scroll parameters
  SCROLL_DEPTH: 'scroll_depth',
  SCROLL_UNIT: 'scroll_unit',

  // Page parameters
  PAGE_TITLE: 'page_title',
  PAGE_PATH: 'page_path',
  PAGE_REFERRER: 'page_referrer',

  // User parameters
  USER_TYPE: 'user_type',

  // A/B testing parameters (for future use)
  TEST_ID: 'test_id',
  VARIANT: 'variant',
};

// Helper function to send events to GA4
export function sendGAEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

// Helper function to track CTA clicks
export function trackCTAClick(
  label: string,
  location: string,
  destination: string
) {
  sendGAEvent(GA_EVENTS.CTA_CLICK, {
    [GA_PARAMETERS.CTA_LABEL]: label,
    [GA_PARAMETERS.CTA_LOCATION]: location,
    [GA_PARAMETERS.CTA_DESTINATION]: destination,
  });
}

// Helper function to track section visibility
export function trackSectionVisible(
  sectionName: string,
  sectionPosition: number
) {
  sendGAEvent(GA_EVENTS.SECTION_VISIBLE, {
    [GA_PARAMETERS.SECTION_NAME]: sectionName,
    [GA_PARAMETERS.SECTION_POSITION]: sectionPosition,
  });
}

// Helper function to track form interactions
export function trackFormInteraction(
  eventName: string,
  formName: string,
  params: Record<string, string | number | boolean> = {}
) {
  sendGAEvent(eventName, {
    [GA_PARAMETERS.FORM_NAME]: formName,
    ...params,
  });
}

// Helper function to track scroll depth
export function trackScrollDepth(
  depth: number,
  unit: 'percent' | 'pixels' = 'percent'
) {
  sendGAEvent(GA_EVENTS.SCROLL_MILESTONE, {
    [GA_PARAMETERS.SCROLL_DEPTH]: depth,
    [GA_PARAMETERS.SCROLL_UNIT]: unit,
  });
}

// Generic event tracking function
export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
) {
  sendGAEvent(eventName, params);
}
