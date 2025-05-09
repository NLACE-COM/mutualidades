
import React, { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { useTilt } from "@/hooks/use-tilt";
import { useParallax } from "@/hooks/use-parallax";

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
  const parallaxOffset = useParallax({ speed: 0.05 });

  // Create animated shapes for background
  const shapes = [
    { top: '15%', left: '5%', size: '4rem', color: '#108CB0', delay: 0, className: 'float-slow' },
    { top: '70%', left: '10%', size: '3rem', color: '#F5A034', delay: 1, className: 'float' },
    { top: '20%', left: '85%', size: '5rem', color: '#FFC000', delay: 0.5, className: 'float-fast' },
    { top: '80%', left: '80%', size: '2rem', color: '#108CB0', delay: 1.5, className: 'float-slow' },
  ];

  // Set up auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Update active index when carousel changes
  useEffect(() => {
    if (!carouselApi) return;
    
    const handleSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };
    
    carouselApi.on("select", handleSelect);
    
    // Set initial index
    handleSelect();
    
    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);

  // Custom card component with tilt effect
  const ImageCard = ({ image, index }: { image: typeof images[0], index: number }) => {
    const { ref, tiltStyle } = useTilt({ max: 5, scale: 1.02 });
    
    return (
      <div 
        ref={ref} 
        style={tiltStyle}
        className="overflow-hidden rounded-lg bg-white shadow-xl h-64 relative hover-lift"
      >
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 bg-[#108CB0]/90 py-2 px-3 transform transition-transform duration-300">
          <p className="text-white font-medium text-center">{image.caption}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-[#f3f3e9] relative overflow-hidden" aria-labelledby="construyendo-juntos-heading">
      {/* Animated background shapes */}
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute rounded-full pointer-events-none ${shape.className}`}
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            opacity: 0.1,
            animationDelay: `${shape.delay}s`,
            transform: `translateY(${parallaxOffset * 0.5}px)`,
          }}
          aria-hidden="true"
        />
      ))}

      <div 
        className="container mx-auto px-4"
        style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
      >
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

        <Carousel 
          className="w-full max-w-6xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
          setApi={setCarouselApi}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem 
                key={index} 
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4 transform transition-transform duration-500"
                style={{
                  transform: index === activeIndex 
                    ? 'scale(1.05) translateY(-5px)' 
                    : 'scale(1) translateY(0)'
                }}
              >
                <ImageCard image={image} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static rounded-full transform-none mx-2 bg-[#F5A034] hover:bg-[#F5A034]/80 text-white hover:scale-110 transition-transform" />
            <CarouselNext className="static rounded-full transform-none mx-2 bg-[#F5A034] hover:bg-[#F5A034]/80 text-white hover:scale-110 transition-transform" />
          </div>
        </Carousel>
        
        {/* Indicator dots */}
        <div className="flex justify-center mt-6 gap-2" role="tablist" aria-label="Navegación de imágenes">
          {images.map((_, index) => (
            <div 
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-[#F5A034]' : 'w-2 bg-[#F5A034]/40'
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              style={{ cursor: 'pointer' }}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Imagen ${index + 1}`}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkplaceImageSlider;
