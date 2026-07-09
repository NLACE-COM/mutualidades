import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useParallax } from '@/hooks/use-parallax';
const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  const [scrollPosition, setScrollPosition] = useState(0);
  const parallaxOffset = useParallax({
    speed: 0.15,
    reverse: true
  });

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
  return <section className="relative text-white overflow-hidden will-change-transform" style={{
    height: isMobile ? 'auto' : '850px',
    zIndex: 1
  }} aria-label="Sección principal">
      {/* Background container with proper aspect ratio */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background image - hidden on mobile, with parallax effect */}
        {!isMobile && <div className="absolute inset-0 transition-transform duration-300 ease-out" style={{
        transform: `translate3d(0, ${parallaxOffset * 0.5}px, 0)`,
        willChange: 'transform'
      }}>
            <div className="absolute inset-0 bg-[url('/lovable-uploads/hero1.png')] bg-cover bg-no-repeat bg-bottom" role="img" aria-label="Imagen de fondo representando un entorno laboral seguro y saludable"></div>
          </div>}
        
        {/* Mobile background color */}
        {isMobile && <div className="absolute inset-0 bg-gradient-to-b from-azul to-azul-light"></div>}
      </div>
      
      {/* Floating shapes for added dimension */}
      {!isMobile && <>
          <div className="absolute top-[20%] left-[20%] w-32 h-32 rounded-full bg-[#F5A034]/10 float-slow" aria-hidden="true"></div>
          <div className="absolute top-[40%] right-[30%] w-24 h-24 rounded-full bg-[#108CB0]/10 float" aria-hidden="true"></div>
          <div className="absolute bottom-[30%] left-[40%] w-16 h-16 rounded-full bg-[#FFC000]/10 float-fast" aria-hidden="true"></div>
        </>}
      
      {/* Content container with flexible padding based on viewport size */}
      <div className={`container relative mx-auto z-10 flex flex-col justify-center ${isMobile ? 'py-12' : 'py-16 md:py-20 lg:py-24'}`} style={{
    }}>
        <div className="flex flex-col md:flex-row">

          
          {/* Right side - Text content (full width on mobile) with automatic height */}
          <div className={`${isMobile ? 'w-full px-4 flex flex-col justify-center items-center text-center' : 'w-full md:w-1/2 px-4 md:px-6 flex flex-col justify-center'}`} style={{
          transform: `translate3d(0, ${parallaxOffset * -0.2}px, 0)`,
          willChange: 'transform'
        }}>
           
   
            
            {/* Main headline with animated entry - Now moved below the card */}
            <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl md:text-4xl lg:text-6xl'} font-bold mb-8 leading-tight text-[#fff] animate-[fadeInUp_1s_ease_0.6s_both]`}>
              AHORA <span className="text-[#E6BE4D]">TODOS</span><br />
              LE PONEMOS <br />
              <span className="text-[#E6BE4D]">MÁS OJO</span> A LA<br />
              SEGURIDAD Y SALUD
              LABORAL CON EL<br />
              <span className="text-[#E6BE4D]">Decreto Supremo<br /> N° 44 </span>
            </h1>
             {/* Animated subtitle with staggered entry */}
                        <p className={`${isMobile ? 'text-lg' : 'text-xl md:text-2xl'} mb-6 font-medium animate-[fadeInUp_1s_ease_0.2s_both]`}>
                          El Decreto Supremo N°44 actualiza la gestión preventiva de riesgos laborales en Chile, estableciendo nuevas obligaciones,
                           con la finalidad de asegurar entornos de trabajo seguros y saludables.
                        </p>
            
          </div>
        </div>
                  {/* Right side - Empty space for image (hidden on mobile) */}
          <div className={`${isMobile ? 'hidden' : 'w-full md:w-1/2'}`}></div>
      </div>

    </section>;
};
export default Hero;