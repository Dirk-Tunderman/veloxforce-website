'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAnalytics } from '@/hooks/use-analytics';

interface FormTrackerProps {
  formName: string;
  formLength?: number;
  children: React.ReactNode;
  className?: string;
}

export function FormTracker({
  formName,
  formLength = 1,
  children,
  className,
}: FormTrackerProps) {
  const { trackFormStart, trackFormSubmit, trackFormError } = useAnalytics();
  
  // Track form start when component mounts
  useEffect(() => {
    trackFormStart(formName, formLength);
  }, [formName, formLength, trackFormStart]);
  
  // Clone the form element and add tracking
  const child = React.Children.only(children) as React.ReactElement;
  
  // Get the original onSubmit handler
  const originalOnSubmit = child.props.onSubmit;
  
  // Create a new onSubmit handler that tracks the submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    trackFormSubmit(formName);
    
    if (originalOnSubmit) {
      originalOnSubmit(event);
    }
  };
  
  // Create a new onError handler that tracks errors
  const handleError = (error: any) => {
    trackFormError(formName, 'validation', JSON.stringify(error));
    
    if (child.props.onError) {
      child.props.onError(error);
    }
  };
  
  return React.cloneElement(child, {
    onSubmit: handleSubmit,
    onError: handleError,
    className,
  });
}
