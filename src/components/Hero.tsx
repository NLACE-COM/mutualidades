
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative text-white overflow-hidden h-auto min-h-[80vh] border-b-0 pb-0 pt-0 m-0">
      {/* Background image without overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/e3ae013f-26b3-4e07-8d93-03dae9c815b9.png')] bg-left-top bg-no-repeat bg-contain opacity-100"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left side - Empty space for image */}
          <div className="w-full md:w-1/2"></div>
          
          {/* Right side - Text content */}
          <div className="w-full md:w-1/2 px-4 md:px-6 flex flex-col justify-start md:pt-16 pt-48">
            {/* Animated subtitle with staggered entry */}
            <p className="text-xl md:text-2xl mb-6 font-medium animate-[fadeInUp_1s_ease_0.2s_both]">
              Promovamos entornos de trabajo seguros y saludables, a través de una buena convivencia.
            </p>
            
            {/* Main headline with animated entry */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-[#ffc000] animate-[fadeInUp_1s_ease_0.4s_both]">
              TÓMATELO<br />EN SERIO
            </h1>
            
            {/* Card with glass effect and hover animation - no margin bottom */}
            <div className="backdrop-blur-sm p-6 rounded-lg max-w-2xl mb-0 border-t border-l border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-300 animate-[fadeInUp_1s_ease_0.6s_both] shadow-lg">
              <p className="text-white text-base md:text-lg">
                En un entorno seguro y saludable, las personas trabajadoras se sienten escuchadas, pueden 
                desarrollarse con confianza y se relacionan desde el respeto mutuo. No te restes y sé parte de este cambio cultural en las organizaciones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Keep only the other decorative elements */}
      <div className="absolute -bottom-10 right-10 w-40 h-40 bg-[#ffc000]/20 rounded-full blur-3xl"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#f5a034]/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
