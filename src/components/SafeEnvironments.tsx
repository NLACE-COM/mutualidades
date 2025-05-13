import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const SafeEnvironments: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="entornos"
      className="relative overflow-hidden text-white scroll-mt-20"
      style={{
        height: 'auto',
        zIndex: 20,
      }}
      aria-label="Sección sobre entornos de trabajo seguros"
    >
      {/* Background container with proper aspect ratio */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop background image with parallax effect */}
        {!isMobile && (
          <div 
            className="absolute inset-0 bg-[url('/lovable-uploads/470feb03-0913-4b9b-b12f-7c6a20f42ef0.png')] bg-center bg-no-repeat bg-cover" 
            role="img" 
            aria-label="Imagen de fondo representando un entorno laboral seguro y saludable"
          ></div>
        )}
        
        {/* Mobile background color */}
        {isMobile && (
          <div className="absolute inset-0 bg-gradient-to-b from-azul-light to-azul"></div>
        )}
      </div>
      
      {/* Content container with flexible padding based on viewport size */}
      <div 
        className={`container relative mx-auto z-10 flex flex-col justify-center ${
          isMobile ? 'py-12' : 'py-16 md:py-20 lg:py-24'
        }`}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side - Text content (full width on mobile) */}
          <div className={`${isMobile ? 'w-full px-4' : 'w-full md:w-1/2 px-4 md:px-6'} flex flex-col justify-center`}>
            {/* Section title */}
            <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold mb-6 leading-tight`}>
              ¿POR QUÉ SON IMPORTANTES LOS<br />
              <span className="text-[#ffc000]">ENTORNOS SEGUROS</span>?
            </h2>
            
            {/* Section description */}
            <p className={`${isMobile ? 'text-lg' : 'text-xl md:text-2xl'} mb-8 font-medium`}>
              Un entorno laboral seguro y saludable es fundamental para el bienestar y el rendimiento de los trabajadores.
            </p>
            
            {/* List of key benefits */}
            <ul className="list-disc pl-5">
              <li className="mb-2">
                <p className="text-base md:text-lg">
                  <span className="font-semibold">Mejora la productividad</span> al reducir el estrés y aumentar la motivación.
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base md:text-lg">
                  <span className="font-semibold">Disminuye el ausentismo</span> al prevenir enfermedades y accidentes laborales.
                </p>
              </li>
              <li>
                <p className="text-base md:text-lg">
                  <span className="font-semibold">Fortalece el compromiso</span> al fomentar un sentido de pertenencia y valoración.
                </p>
              </li>
            </ul>
          </div>
          
          {/* Right side - Image with overlay gradient (hidden on mobile) */}
          {!isMobile && (
            <div className="w-full md:w-1/2 relative">
              <img 
                src="/lovable-uploads/c465be10-a2ef-4c0c-b904-868749018b12.png" 
                alt="Personas trabajando en un entorno seguro y colaborativo" 
                className="rounded-lg shadow-lg w-full object-cover h-full" 
                loading="lazy"
                style={{ minHeight: '300px' }}
              />
              
              {/* Overlay gradient with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-azul/70 to-transparent flex items-end" style={{
                backgroundImage: `url('/lovable-uploads/fd7c1cec-2fc4-486f-8f7a-4d844d3dda8c.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
              }}>
                <p className="text-sm md:text-base p-4">
                  <span className="font-semibold">Colaboración y respeto:</span> Claves para un ambiente laboral positivo.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SafeEnvironments;
