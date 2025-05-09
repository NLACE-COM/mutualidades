
import React from 'react';
import { Star, Heart, Users } from 'lucide-react';

const Importance: React.FC = () => {
  return (
    <section id="importancia" className="bg-gradient-to-b from-white to-gris section-padding scroll-mt-20 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-naranja/5 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-azul/5 rounded-tr-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 fade-in-section">
          <h2 className="text-4xl font-bold text-azul">¿POR QUÉ ES IMPORTANTE?</h2>
          <div className="w-20 h-1 bg-naranja mx-auto my-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 fade-in-section">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90" 
                alt="Trabajadores felices en su entorno laboral" 
                className="w-full h-auto rounded-lg shadow-lg object-cover aspect-4/3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-azul/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-lg font-semibold">
                    Un ambiente positivo transforma el día a día
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c" 
                alt="Colaboración entre trabajadores" 
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Equipo de trabajo" 
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div className="md:col-span-7 fade-in-section">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-naranja/10 rounded-bl-full -z-0"></div>
              
              <div className="mb-8 flex items-start gap-4">
                <div className="bg-amarillo/20 p-3 rounded-full">
                  <Star className="w-8 h-8 text-amarillo" />
                </div>
                <p className="text-lg">
                  En un entorno seguro y saludable, las personas trabajadoras se sienten escuchadas, pueden desarrollarse con confianza y se relacionan desde el respeto mutuo.
                </p>
              </div>
              
              <div className="mb-8 flex items-start gap-4">
                <div className="bg-naranja/20 p-3 rounded-full">
                  <Heart className="w-8 h-8 text-naranja" />
                </div>
                <p className="text-lg">
                  Cuando se fomenta el reconocimiento entre equipos o se abren espacios de diálogo para compartir ideas, se fortalece la colaboración y el bienestar.
                </p>
              </div>
              
              <div className="mb-8 flex items-start gap-4">
                <div className="bg-azul/20 p-3 rounded-full">
                  <Users className="w-8 h-8 text-azul" />
                </div>
                <p className="text-lg">
                  Un entorno así transforma el día a día de las personas trabajadoras: mejora su estado de ánimo, fortalece su bienestar y potencia su rendimiento.
                </p>
              </div>
              
              <div className="mt-10 p-6 bg-gradient-to-r from-naranja/20 to-amarillo/20 rounded-lg border-l-4 border-naranja">
                <p className="text-xl font-semibold text-azul text-center">
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
