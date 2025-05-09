
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const images = [
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    alt: "Equipo de trabajo en una reunión",
    caption: "Diálogo y colaboración"
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    alt: "Personas en una oficina moderna",
    caption: "Respeto y profesionalismo"
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    alt: "Trabajadores en una fábrica",
    caption: "Seguridad y protección"
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    alt: "Equipo diverso colaborando",
    caption: "Diversidad e inclusión"
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    alt: "Capacitación de trabajadores en sala de clases",
    caption: "Formación continua"
  }
];

const WorkplaceImageSlider: React.FC = () => {
  return (
    <section className="py-16 bg-[#f3f3e9]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 fade-in-section">
          <h2 className="text-4xl font-bold text-[#333333]">CONSTRUYENDO JUNTOS</h2>
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
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                <div className="overflow-hidden rounded-lg bg-white shadow-xl h-64 relative">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[#108CB0]/90 py-2 px-3">
                    <p className="text-white font-medium text-center">{image.caption}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static rounded-full transform-none mx-2 bg-[#F5A034] hover:bg-[#F5A034]/80 text-white" />
            <CarouselNext className="static rounded-full transform-none mx-2 bg-[#F5A034] hover:bg-[#F5A034]/80 text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default WorkplaceImageSlider;
