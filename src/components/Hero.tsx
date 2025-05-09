
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-azul to-celeste text-white py-24 md:py-32 overflow-hidden">
      {/* Background image of workers */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-40"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto px-4 fade-in-section">
          <p className="text-xl md:text-2xl mb-8 font-medium">
            Promovamos entornos de trabajo seguros y saludables, a través de una buena convivencia.
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 leading-tight text-amarillo">
            TÓMATELO<br />EN SERIO
          </h1>
          
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg max-w-2xl mt-12 border border-white/30">
            <p className="text-white text-lg">
              En un entorno seguro y saludable, las personas trabajadoras se sienten escuchadas, pueden 
              desarrollarse con confianza y se relacionan desde el respeto mutuo. No te restes y sé parte de este cambio cultural en las organizaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
