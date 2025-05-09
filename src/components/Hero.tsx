
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const leykarin = document.getElementById('leykarin');
    if (leykarin) {
      leykarin.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-azul to-celeste text-white py-24 md:py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978')] bg-cover bg-center bg-fixed opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-azul/90 to-celeste/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          {/* Animated subtitle with staggered entry */}
          <p className="text-xl md:text-2xl mb-8 font-medium animate-[fadeInUp_1s_ease_0.2s_both]">
            Promovamos entornos de trabajo seguros y saludables, a través de una buena convivencia.
          </p>
          
          {/* Main headline with animated entry */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 leading-tight text-amarillo animate-[fadeInUp_1s_ease_0.4s_both]">
            TÓMATELO<br />EN SERIO
          </h1>
          
          {/* Card with glass effect and hover animation */}
          <div className="backdrop-blur-sm p-6 rounded-lg max-w-2xl mt-12 border-t border-l border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-300 animate-[fadeInUp_1s_ease_0.6s_both] shadow-lg">
            <p className="text-white text-lg">
              En un entorno seguro y saludable, las personas trabajadoras se sienten escuchadas, pueden 
              desarrollarse con confianza y se relacionan desde el respeto mutuo. No te restes y sé parte de este cambio cultural en las organizaciones.
            </p>
          </div>

          {/* Scroll down button */}
          <div className="mt-16 flex justify-center animate-[fadeInUp_1s_ease_0.8s_both]">
            <Button 
              variant="outline" 
              className="rounded-full border-white/50 text-white hover:bg-white/20 hover:text-white"
              onClick={scrollToNextSection}
            >
              <span className="mr-2">Conoce más</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
      <div className="absolute -bottom-10 right-10 w-40 h-40 bg-amarillo/20 rounded-full blur-3xl"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-naranja/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
