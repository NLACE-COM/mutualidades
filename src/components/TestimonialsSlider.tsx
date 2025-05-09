
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Implementar las medidas de prevención nos ha ayudado a mejorar el ambiente laboral y la productividad de nuestro equipo.",
    name: "María González",
    position: "Gerente de Recursos Humanos",
    company: "Empresa de Tecnología",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "La capacitación en prevención de acoso laboral nos ha permitido crear un entorno más seguro y respetuoso para todos.",
    name: "Pedro Sánchez",
    position: "Director de Operaciones",
    company: "Industria Manufacturera",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "Desde que implementamos los protocolos de la Ley Karin, nuestros trabajadores se sienten más protegidos y valorados.",
    name: "Carolina Pérez",
    position: "Jefa de Personal",
    company: "Comercio Minorista",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "El apoyo de las mutualidades ha sido fundamental para crear un entorno laboral libre de violencia y acoso.",
    name: "Roberto Mendoza",
    position: "Supervisor General",
    company: "Construcción",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  }
];

const TestimonialsSlider: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 bg-gradient-to-b from-gris to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 fade-in-section">
          <h2 className="text-4xl font-bold text-azul">EXPERIENCIAS QUE TRANSFORMAN</h2>
          <div className="w-20 h-1 bg-naranja mx-auto my-6"></div>
          <p className="text-lg text-gray-700 mb-8">
            Conoce los testimonios de quienes ya están implementando entornos laborales seguros y saludables.
          </p>
        </div>

        <Carousel 
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="py-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-6">
                <Card className="border-none shadow-lg bg-white h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <svg className="w-10 h-10 text-naranja/30" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                    
                    <div className="flex items-center mt-4">
                      <Avatar className="h-12 w-12 border-2 border-naranja">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="font-bold text-azul">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static rounded-full transform-none mx-2 bg-naranja hover:bg-naranja/80 text-white" />
            <CarouselNext className="static rounded-full transform-none mx-2 bg-naranja hover:bg-naranja/80 text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
