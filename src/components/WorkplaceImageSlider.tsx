
import React, { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { useToast } from '@/hooks/use-toast';
import { trackCarouselSlide } from '../utils/analytics';
import AutoPlay from 'embla-carousel-autoplay';

// Original images array
const images = [
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    alt: "Grupo diverso de profesionales colaborando en una reunión de trabajo",
    caption: "Diálogo y colaboración"
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    alt: "Equipo de trabajo en un ambiente moderno y colaborativo discutiendo ideas",
    caption: "Respeto y profesionalismo"
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    alt: "Personal en ambiente industrial con equipos de protección y seguridad adecuados",
    caption: "Seguridad y protección"
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    alt: "Equipo multidisciplinario y multicultural trabajando en conjunto en proyecto",
    caption: "Diversidad e inclusión"
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    alt: "Sesión de capacitación profesional sobre prevención de acoso laboral",
    caption: "Formación continua"
  }
];

const WorkplaceImageSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const { toast } = useToast();
  
  // Basic image card component
  const ImageCard = ({ image }: { image: typeof images[0] }) => {    
    return (
      <div className="overflow-hidden rounded-lg bg-white shadow-xl h-64 relative transition-all duration-500">
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 bg-[#108CB0]/90 py-2 px-3 transition-transform duration-300">
          <p className="text-white font-medium text-center">{image.caption}</p>
        </div>
      </div>
    );
  };

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
      if (selectedIndex >= 0 && selectedIndex < images.length) {
        trackCarouselSlide(selectedIndex, images[selectedIndex].caption);
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
        <div className="max-w-4xl mx-auto text-center mb-12 fade-in-section">
          <h2 id="construyendo-juntos-heading" className="text-4xl font-bold text-[#333333] relative">
            CONSTRUYENDO JUNTOS
            <div className="absolute -z-10 w-full h-full flex justify-center items-center opacity-10" aria-hidden="true">
              <div className="bg-[#F5A034] w-32 h-32 rounded-full blur-2xl"></div>
            </div>
          </h2>
          <div className="w-20 h-1 bg-[#F5A034] mx-auto my-6"></div>
          <p className="text-lg text-gray-700 mb-8">
            Un entorno laboral seguro y saludable se construye con el compromiso de todos
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Add relative positioning for proper navigation button placement */}
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
              {images.map((image, index) => (
                <CarouselItem 
                  key={index} 
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4"
                >
                  <ImageCard image={image} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Fix navigation buttons - use absolute positioning */}
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

          {/* Indicator dots moved below for better UI organization */}
          <div className="flex justify-center mt-6 gap-2" role="tablist" aria-label="Navegación de imágenes">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-[#F5A034]' : 'w-2 bg-[#F5A034]/40'
                }`}
                onClick={() => {
                  if (carouselApi) {
                    console.log(`Clicking on dot ${index}`);
                    carouselApi.scrollTo(index);
                    // Event tracking happens in the useEffect onSelect handler
                  } else {
                    console.error("Carousel API not available");
                    toast({
                      title: "Error",
                      description: "No se pudo navegar a la imagen seleccionada",
                      variant: "destructive"
                    });
                  }
                }}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkplaceImageSlider;
