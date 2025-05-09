
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
    <section className="relative text-white overflow-hidden h-[70vh] border-b-0 perspective-1000">
      {/* Background image - hidden on mobile, with parallax effect */}
      {!isMobile && (
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ 
            transform: `translate3d(0, ${parallaxOffset * 0.5}px, 0)`
          }}
        >
          <div className="absolute inset-0 bg-[url('/lovable-uploads/e3ae013f-26b3-4e07-8d93-03dae9c815b9.png')] bg-left-top bg-no-repeat bg-contain opacity-100"></div>
        </div>
      )}
      
      {/* Mobile background color */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-b from-azul to-azul-light"></div>
      )}
      
      {/* Floating shapes for added dimension */}
      {!isMobile && (
        <>
          <div className="absolute top-[20%] left-[20%] w-32 h-32 rounded-full bg-[#F5A034]/10 float-slow"></div>
          <div className="absolute top-[40%] right-[30%] w-24 h-24 rounded-full bg-[#108CB0]/10 float"></div>
          <div className="absolute bottom-[30%] left-[40%] w-16 h-16 rounded-full bg-[#FFC000]/10 float-fast"></div>
        </>
      )}
      
      {/* Content */}
      <div 
        className="container mx-auto h-full relative z-10"
        style={{ 
          opacity: calculateOpacity(1),
        }}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Left side - Empty space for image (hidden on mobile) */}
          <div className={`${isMobile ? 'hidden' : 'w-full md:w-1/2'}`}></div>
          
          {/* Right side - Text content (full width on mobile) */}
          <div 
            className={`${isMobile ? 'w-full px-4 flex flex-col justify-center items-center text-center' : 'w-full md:w-1/2 px-4 md:px-6 flex flex-col justify-start md:pt-16 pt-48'}`}
            style={{ 
              transform: `translate3d(0, ${parallaxOffset * -0.2}px, 0)`
            }}
          >
            {/* Animated subtitle with staggered entry */}
            <p className={`${isMobile ? 'text-lg' : 'text-xl md:text-2xl'} mb-6 font-medium animate-[fadeInUp_1s_ease_0.2s_both]`}>
              Promovamos entornos de trabajo seguros y saludables, a través de una buena convivencia.
            </p>
            
            {/* Main headline with animated entry */}
            <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-6xl lg:text-7xl'} font-bold mb-8 leading-tight text-[#ffc000] animate-[fadeInUp_1s_ease_0.4s_both]`}>
              TÓMATELO<br />EN SERIO
            </h1>
            
            {/* Card with glass effect and hover animation */}
            <div 
              className={`${isMobile ? 'bg-white/20' : 'backdrop-blur-sm bg-white/10 hover:bg-white/20'} p-6 rounded-lg max-w-2xl border-t border-l border-white/30 transition-all duration-500 animate-[fadeInUp_1s_ease_0.6s_both] shadow-lg hover-lift`}
            >
              <p className="text-white text-base md:text-lg">
                En un entorno seguro y saludable, las personas trabajadoras se sienten escuchadas, pueden 
                desarrollarse con confianza y se relacionan desde el respeto mutuo. No te restes y sé parte de este cambio cultural en las organizaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
