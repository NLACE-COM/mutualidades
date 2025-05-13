
import React, { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { trackCarouselSlide } from '../utils/analytics';
import AutoPlay from 'embla-carousel-autoplay';
import { workplaceImages } from '../data/carouselImages';
import ImageCard from './carousel/ImageCard';
import CarouselIndicators from './carousel/CarouselIndicators';
import SectionHeader from './carousel/SectionHeader';

const WorkplaceImageSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  
  // Track selected index and debug
  useEffect(() => {
    if (!carouselApi) {
      console.log("Carousel API not initialized yet");
      return;
    }
    
    console.log("Carousel API initialized in WorkplaceImageSlider");
    
    const onSelect = () => {
      const selectedIndex = carouselApi.selectedScrollSnap();
      console.log("Selected index:", selectedIndex);
      setActiveIndex(selectedIndex);
      
      // Track carousel slide view for analytics
      if (selectedIndex >= 0 && selectedIndex < workplaceImages.length) {
        trackCarouselSlide(selectedIndex, workplaceImages[selectedIndex].caption);
      }
    };
    
    carouselApi.on("select", onSelect);
    // Initialize carousel
    carouselApi.reInit();
    onSelect();
    
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  // Debug initialization
  useEffect(() => {
    console.log("WorkplaceImageSlider mounted");
    return () => console.log("WorkplaceImageSlider unmounted");
  }, []);

  // Create autoplay plugin instance
  const autoplayPlugin = React.useMemo(
    () =>
      AutoPlay({
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      }),
    []
  );

  return (
    <section className="py-16 bg-[#f3f3e9] relative overflow-hidden" aria-labelledby="construyendo-juntos-heading">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="CONSTRUYENDO JUNTOS" 
          description="Un entorno laboral seguro y saludable se construye con el compromiso de todos"
        />

        <div className="max-w-6xl mx-auto relative">
          <Carousel 
            className="w-full" 
            opts={{
              loop: true,
              align: "center",
              containScroll: "trimSnaps",
              dragFree: false,
            }}
            setApi={setCarouselApi}
            plugins={[autoplayPlugin]}
          >
            <CarouselContent>
              {workplaceImages.map((image, index) => (
                <CarouselItem 
                  key={index} 
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4"
                >
                  <ImageCard image={image} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10">
              <CarouselPrevious 
                className="relative bg-[#F5A034] hover:bg-[#F5A034]/80 text-white hover:scale-110 transition-transform"
              />
            </div>
            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10">
              <CarouselNext 
                className="relative bg-[#F5A034] hover:bg-[#F5A034]/80 text-white hover:scale-110 transition-transform"
              />
            </div>
          </Carousel>

          <CarouselIndicators 
            images={workplaceImages}
            activeIndex={activeIndex}
            carouselApi={carouselApi}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkplaceImageSlider;
