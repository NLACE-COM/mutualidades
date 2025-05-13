
import { useState, useEffect, useCallback } from 'react';
import { CarouselApi } from '@/components/ui/carousel';
import { trackCarouselSlide } from '../utils/analytics';

interface UseCarouselProps {
  items: Array<any>;
  autoPlayDelay?: number;
}

const useCarousel = ({ items, autoPlayDelay = 4000 }: UseCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  // Track selected index and debug
  useEffect(() => {
    if (!carouselApi) {
      console.log("Carousel API not initialized yet");
      return;
    }
    
    console.log("Carousel API initialized in custom hook");
    
    const onSelect = () => {
      const selectedIndex = carouselApi.selectedScrollSnap();
      console.log("Selected index:", selectedIndex);
      setActiveIndex(selectedIndex);
      
      // Track carousel slide view for analytics
      if (selectedIndex >= 0 && selectedIndex < items.length) {
        if ('caption' in items[selectedIndex]) {
          trackCarouselSlide(selectedIndex, items[selectedIndex].caption);
        } else {
          trackCarouselSlide(selectedIndex, `Item ${selectedIndex + 1}`);
        }
      }
    };
    
    carouselApi.on("select", onSelect);
    // Initialize carousel
    carouselApi.reInit();
    onSelect();
    
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi, items]);

  // Debug initialization
  useEffect(() => {
    console.log("Carousel hook initialized");
    return () => console.log("Carousel hook cleanup");
  }, []);

  // Create autoplay plugin options
  const autoplayOptions = {
    delay: autoPlayDelay,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
  };

  return {
    activeIndex,
    setCarouselApi,
    carouselApi,
    autoplayOptions
  };
};

export default useCarousel;
