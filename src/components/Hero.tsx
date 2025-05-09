
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-azul text-white py-24 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-40"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            UN ENTORNO DE TRABAJO SEGURO Y SALUDABLE ES UN DERECHO DE TODAS LAS PERSONAS TRABAJADORAS
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Informarse, participar y motivar a nuestros compañeros y compañeras de trabajo es fundamental para lograr un espacio laboral libre de acoso y violencia.
          </p>
          <Button 
            size="lg" 
            className="bg-naranja hover:bg-naranja/90 text-white font-bold text-lg px-10 py-6 rounded-lg shadow-lg"
            asChild
          >
            <a href="#leykarin">TÓMATELO EN SERIO</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
