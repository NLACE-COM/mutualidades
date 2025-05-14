
import { useState, useEffect } from 'react';

interface ParallaxOptions {
  speed?: number;
  reverse?: boolean;
  min?: number;
  max?: number;
}

export const useParallax = ({ 
  speed = 0.1, 
  reverse = false, 
  min = -20, 
  max = 20 
}: ParallaxOptions = {}) => {
  const [offset, setOffset] = useState(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Set flag to identify user-initiated scrolling
      setIsUserScrolling(true);
      
      // Clear any existing timeout
      clearTimeout(scrollTimeout);
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      
      // Calculate scroll percentage (0 to 1)
      const scrollPercentage = Math.min(scrollPosition / (documentHeight - windowHeight), 1);
      
      // Calculate parallax offset based on scroll percentage
      const calculatedOffset = min + (scrollPercentage * (max - min));
      
      // Apply speed factor and reverse if needed
      const finalOffset = reverse ? -calculatedOffset * speed : calculatedOffset * speed;
      
      setOffset(finalOffset);
      
      // Reset the flag after a small delay to indicate scrolling has finished
      scrollTimeout = setTimeout(() => {
        setIsUserScrolling(false);
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [speed, reverse, min, max]);

  return offset;
};
