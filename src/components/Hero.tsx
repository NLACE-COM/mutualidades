
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useParallax } from '@/hooks/use-parallax';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  const [scrollPosition, setScrollPosition] = useState(0);
  const parallaxOffset = useParallax({ speed: 0.15, reverse: true });
  
  // Track scroll position for advanced parallax effects
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate opacity based on scroll position
  const calculateOpacity = (baseOpacity: number = 1) => {
    const scrollFactor = Math.min(scrollPosition / 500, 1);
    return Math.max(baseOpacity - scrollFactor, 0);
  };
  
  return (
    <section 
      className="relative text-white overflow-hidden will-change-transform"
      style={{
        height: 'auto',
        zIndex: 1,
      }}
      aria-label="Sección principal"
    >
      {/* Background container with proper aspect ratio */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background image - hidden on mobile, with parallax effect */}
        {!isMobile && (
          <div 
            className="absolute inset-0 transition-transform duration-300 ease-out"
            style={{ 
              transform: `translate3d(0, ${parallaxOffset * 0.5}px, 0)`,
              willChange: 'transform'
            }}
          >
            <div 
              className="absolute inset-0 bg-[url('/lovable-uploads/470feb03-0913-4b9b-b12f-7c6a20f42ef0.png')] bg-center bg-no-repeat bg-cover" 
              role="img" 
              aria-label="Imagen de fondo representando un entorno laboral seguro y saludable"
            ></div>
          </div>
        )}
        
        {/* Mobile background color */}
        {isMobile && (
          <div className="absolute inset-0 bg-gradient-to-b from-azul to-azul-light"></div>
        )}
      </div>
      
      {/* Floating shapes for added dimension */}
      {!isMobile && (
        <>
          <div className="absolute top-[20%] left-[20%] w-32 h-32 rounded-full bg-[#F5A034]/10 float-slow" aria-hidden="true"></div>
          <div className="absolute top-[40%] right-[30%] w-24 h-24 rounded-full bg-[#108CB0]/10 float" aria-hidden="true"></div>
          <div className="absolute bottom-[30%] left-[40%] w-16 h-16 rounded-full bg-[#FFC000]/10 float-fast" aria-hidden="true"></div>
        </>
      )}
      
      {/* Content container with flexible padding based on viewport size */}
      <div 
        className={`container relative mx-auto z-10 flex flex-col justify-center ${
          isMobile ? 'py-12' : 'py-16 md:py-20 lg:py-24'
        }`}
        style={{ 
          opacity: calculateOpacity(1),
        }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side - Empty space for image (hidden on mobile) */}
          <div className={`${isMobile ? 'hidden' : 'w-full md:w-1/2'}`}></div>
          
          {/* Right side - Text content (full width on mobile) with automatic height */}
          <div 
            className={`${isMobile 
              ? 'w-full px-4 flex flex-col justify-center items-center text-center' 
              : 'w-full md:w-1/2 px-4 md:px-6 flex flex-col justify-center'}`}
            style={{ 
              transform: `translate3d(0, ${parallaxOffset * -0.2}px, 0)`,
              willChange: 'transform'
            }}
          >
            {/* Animated subtitle with staggered entry */}
            <p className={`${isMobile ? 'text-lg' : 'text-xl md:text-2xl'} mb-6 font-medium animate-[fadeInUp_1s_ease_0.2s_both]`}>
              Promovamos entornos de trabajo seguros y saludables, a través de una buena convivencia.
            </p>
            
            {/* Main headline with animated entry */}
            <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-7xl'} font-bold mb-8 leading-tight text-[#ffc000] animate-[fadeInUp_1s_ease_0.4s_both]`}>
              TÓMATELO<br />EN SERIO
            </h1>
            
            {/* Card with glass effect and hover animation */}
            <div 
              className={`${isMobile ? 'bg-white/20' : 'backdrop-blur-sm bg-white/10 hover:bg-white/20'} p-6 rounded-lg max-w-2xl border-t border-l border-white/30 transition-all duration-500 animate-[fadeInUp_1s_ease_0.6s_both] shadow-lg hover-lift mb-8`}
            >
              <p className="text-white text-base md:text-lg">
                En un entorno seguro y saludable, las personas trabajadoras se sienten escuchadas, pueden 
                desarrollarse con confianza y se relacionan desde el respeto mutuo. No te restes y sé parte de este cambio cultural en las organizaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Connection element for LeyKarin section - using a more reliable gradient approach */}
      <div 
        className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#f3f3e9]"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default Hero;
