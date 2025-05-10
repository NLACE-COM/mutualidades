
import React, { useEffect } from 'react';

interface AnimationsObserverProps {
  // No props needed for this component, but we could add options in the future
}

const AnimationsObserver: React.FC<AnimationsObserverProps> = () => {
  useEffect(() => {
    // Set up intersection observer for fade-in animations with different directions
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add staggered animation for children with stagger-item class
            const staggeredElements = entry.target.querySelectorAll('.stagger-item');
            staggeredElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 150); // 150ms delay between each element
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    // Observe all animated sections
    document.querySelectorAll('.fade-in-section, .fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down').forEach(section => {
      animationObserver.observe(section);
    });

    return () => {
      animationObserver.disconnect();
    };
  }, []);

  return null; // This is a utility component with no UI
};

export default AnimationsObserver;
