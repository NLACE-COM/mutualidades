
import { useEffect, RefObject } from 'react';

type IntersectionCallback = () => void;

export const useIntersectionObserver = (
  elementRef: RefObject<HTMLElement>,
  callback: IntersectionCallback,
  threshold = 0.3
): void => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold }
    );
    
    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, callback, threshold]);
};
