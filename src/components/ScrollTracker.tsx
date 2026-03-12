
import React, { useEffect, useRef, useState } from 'react';
import { trackScrollDepth, trackSectionView, trackTimeOnPage } from '../utils/analytics';

interface SectionRef {
  ref: React.RefObject<HTMLElement | null>;
  id: string;
  name: string;
}

const ScrollTracker: React.FC<{
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
  sectionNames: Record<string, string>;
}> = ({ sectionRefs, sectionNames }) => {
  // Track scroll position
  const scrollRef = useRef<number>(0);
  // Track sections that have already been viewed
  const [viewedSections, setViewedSections] = useState<Set<string>>(new Set());
  
  // Track time on page for anti-bounce metrics
  useEffect(() => {
    // Page view tracking is now handled in the main layout component
    
    // Time on page tracking for anti-bounce
    const timeIntervals = [10, 30, 60, 120, 300]; // seconds
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];
    
    timeIntervals.forEach(seconds => {
      const timeoutId = setTimeout(() => {
        trackTimeOnPage(seconds);
      }, seconds * 1000);
      timeoutIds.push(timeoutId);
    });
    
    return () => {
      // Clear all timeouts when component unmounts
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, []);
  
  useEffect(() => {
    // Observer for section visibility tracking (analytics)
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id) {
            const sectionId = entry.target.id;
            
            // Only track each section view once per session
            if (!viewedSections.has(sectionId)) {
              const sectionName = sectionNames[sectionId] || sectionId;
              trackSectionView(sectionId, sectionName);
              setViewedSections(prev => new Set(prev).add(sectionId));
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    
    // Observe all main sections for analytics
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        sectionObserver.observe(ref.current);
      }
    });
    
    // Handle scroll direction for parallax effects and track scroll depth
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollDirection = currentScrollPos > scrollRef.current ? 'down' : 'up';
      
      // Apply different parallax speeds based on scroll direction
      document.querySelectorAll('.parallax-element').forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.1');
        const offset = scrollDirection === 'down' ? 
          currentScrollPos * speed : 
          currentScrollPos * (speed * 0.8);
          
        (el as HTMLElement).style.transform = `translateY(${offset}px)`;
      });
      
      // Track scroll depth for analytics
      const docHeight = Math.max(
        document.body.scrollHeight, 
        document.documentElement.scrollHeight,
        document.body.offsetHeight, 
        document.documentElement.offsetHeight
      );
      const viewportHeight = window.innerHeight;
      const scrollableDistance = docHeight - viewportHeight;
      
      if (scrollableDistance > 0) {
        const scrollDepth = Math.floor((currentScrollPos / scrollableDistance) * 100);
        // Track at 25%, 50%, 75% and 90%
        if (scrollDepth === 25 || scrollDepth === 50 || scrollDepth === 75 || scrollDepth === 90) {
          trackScrollDepth(scrollDepth);
        }
      }
      
      scrollRef.current = currentScrollPos;
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [viewedSections, sectionRefs, sectionNames]);

  return null; // This is a utility component with no UI
};

export default ScrollTracker;
