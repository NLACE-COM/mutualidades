
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import type { CarouselApi } from "@/components/ui/carousel";

interface CarouselIndicatorsProps {
  images: Array<{src: string; alt: string; caption: string}>;
  activeIndex: number;
  carouselApi: CarouselApi | null;
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ 
  images, 
  activeIndex, 
  carouselApi 
}) => {
  const { toast } = useToast();

  return (
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
  );
};

export default CarouselIndicators;
