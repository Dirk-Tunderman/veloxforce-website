// Type definitions for Google Analytics gtag.js
interface Window {
  gtag: (
    command: 'event' | 'config' | 'consent' | 'set',
    targetId: string,
    params?: Record<string, any> | null,
    callback?: () => void
  ) => void;
  dataLayer: Record<string, any>[];
}

// Google Analytics gtag function
declare function gtag(
  command: 'event' | 'config' | 'consent' | 'set',
  targetId: string,
  params?: Record<string, any> | null,
  callback?: () => void
): void;
