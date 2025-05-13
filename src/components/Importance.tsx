
import React, { useRef, useEffect } from 'react';
import { Star, Heart, Users } from 'lucide-react';
import { useTilt } from '@/hooks/use-tilt';

const Importance: React.FC = () => {
  const { ref: cardRef, tiltStyle } = useTilt({ max: 5 });
  const shapesRef = useRef<HTMLDivElement>(null);
  
  // Create parallax effect for background shapes
  useEffect(() => {
    if (!shapesRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const shapes = shapesRef.current?.querySelectorAll('.bg-shape');
      if (!shapes) return;
      
      shapes.forEach((shape, i) => {
        const speed = 1 - (i * 0.1);
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        (shape as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="importancia" className="bg-gradient-to-b from-white to-[#f3f3e9] section-padding scroll-mt-20 relative overflow-hidden">
      {/* Animated background shapes */}
      <div ref={shapesRef} className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="bg-shape absolute top-0 right-0 w-1/3 h-1/2 bg-[#f5a034]/5 rounded-bl-full transition-transform duration-200"></div>
        <div className="bg-shape absolute bottom-0 left-0 w-1/4 h-1/3 bg-[#108cb0]/5 rounded-tr-full transition-transform duration-300 delay-100"></div>
        <div className="bg-shape absolute top-1/2 left-1/3 w-16 h-16 bg-[#ffc000]/5 rounded-full transition-transform duration-500 float"></div>
        <div className="bg-shape absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#108cb0]/5 rounded-full transition-transform duration-400 float-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 fade-in-section">
          <h2 className="text-4xl font-bold text-[#333333]">¿POR QUÉ ES IMPORTANTE?</h2>
          <div className="w-20 h-1 bg-[#f5a034] mx-auto my-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 fade-in-left">
            <div className="relative overflow-hidden rounded-lg hover-lift">
              <img 
                src="/lovable-uploads/470feb03-0913-4b9b-b12f-7c6a20f42ef0.png" 
                alt="Profesionales sonrientes colaborando en un ambiente laboral positivo y seguro" 
                className="w-full h-auto rounded-lg shadow-lg object-cover aspect-4/3 transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#108cb0]/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-lg font-semibold transform transition-transform duration-300">
                    Un ambiente positivo transforma el día a día
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="overflow-hidden rounded-lg hover-lift">
                <img 
                  src="/lovable-uploads/83040761-4c26-44a4-9dfa-4d0b4db3ea55.png" 
                  alt="Mujeres sonrientes trabajando juntas en un taller creativo" 
                  className="w-full h-40 object-cover rounded-lg shadow-md transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-lg hover-lift">
                <img 
                  src="/lovable-uploads/a7ac7a98-7ccb-47fb-9357-e8a94c4194bc.png" 
                  alt="Grupo de profesionales en una reunión productiva mostrando respeto y comunicación efectiva" 
                  className="w-full h-40 object-cover rounded-lg shadow-md transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 fade-in-right">
            <div 
              ref={cardRef}
              style={tiltStyle}
              className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#f5a034]/10 rounded-bl-full -z-0" aria-hidden="true"></div>
              
              <div className="mb-8 flex items-start gap-4 stagger-item">
                <div className="bg-[#ffc000]/20 p-3 rounded-full transform transition-transform hover:scale-110 hover:rotate-[360deg] duration-500" aria-hidden="true">
                  <Star className="w-8 h-8 text-[#ffc000]" />
                </div>
                <p className="text-lg">
                  En un entorno seguro y saludable, las personas trabajadoras se sienten escuchadas, pueden desarrollarse con confianza y se relacionan desde el respeto mutuo.
                </p>
              </div>
              
              <div className="mb-8 flex items-start gap-4 stagger-item" style={{ transitionDelay: '150ms' }}>
                <div className="bg-[#f5a034]/20 p-3 rounded-full transform transition-transform hover:scale-110 hover:rotate-[360deg] duration-500" aria-hidden="true">
                  <Heart className="w-8 h-8 text-[#f5a034]" />
                </div>
                <p className="text-lg">
                  Cuando se fomenta el reconocimiento entre equipos o se abren espacios de diálogo para compartir ideas, se fortalece la colaboración y el bienestar.
                </p>
              </div>
              
              <div className="mb-8 flex items-start gap-4 stagger-item" style={{ transitionDelay: '300ms' }}>
                <div className="bg-[#108cb0]/20 p-3 rounded-full transform transition-transform hover:scale-110 hover:rotate-[360deg] duration-500" aria-hidden="true">
                  <Users className="w-8 h-8 text-[#108cb0]" />
                </div>
                <p className="text-lg">
                  Un entorno así transforma el día a día de las personas trabajadoras: mejora su estado de ánimo, fortalece su bienestar y potencia su rendimiento.
                </p>
              </div>
              
              <div 
                className="mt-10 p-6 bg-gradient-to-r from-[#f5a034]/20 to-[#ffc000]/20 rounded-lg border-l-4 border-[#f5a034] transform transition-transform hover:translate-y-[-5px] duration-300 stagger-item"
                style={{ transitionDelay: '450ms' }}
              >
                <p className="text-xl font-semibold text-[#333333] text-center">
                  No te restes y sé parte de este cambio cultural en las organizaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importance;
