
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoPlay from 'embla-carousel-autoplay';
import { workplaceImages } from '../data/carouselImages';
import ImageCard from './carousel/ImageCard';
import CarouselIndicators from './carousel/CarouselIndicators';
import SectionHeader from './carousel/SectionHeader';
import useCarousel from '@/hooks/use-carousel';

const WorkplaceImageSlider: React.FC = () => {
  // Use our custom carousel hook
  const { activeIndex, setCarouselApi, carouselApi, autoplayOptions } = 
    useCarousel({ items: workplaceImages });
  
  // Create autoplay plugin instance
  const autoplayPlugin = React.useMemo(
    () => AutoPlay(autoplayOptions),
    [autoplayOptions]
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
