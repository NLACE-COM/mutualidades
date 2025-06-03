
import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const ContactInfo: React.FC = () => {
  return <section id="contacto-info" className="bg-white py-16" aria-labelledby="contacto-info-heading">
      <div className="container mx-auto">
        <h2 id="contacto-info-heading" className="text-4xl font-bold text-center text-naranja mb-4">
          Estamos para ayudarte
        </h2>
        
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          ¿Tienes dudas sobre cómo implementar un entorno laboral seguro y saludable? Te responderemos a la brevedad.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ACHS */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                className="w-20 h-20 object-contain"
                alt="Logo de Asociación Chilena de Seguridad (ACHS)" 
                src="/lovable-uploads/215f8050-bf47-4a8b-8a47-5defd6c3c9a3.png" 
              />
              <h3 className="text-xl font-bold text-azul">Asociación Chilena de Seguridad</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-lg font-medium text-green-700">Teléfono</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-green-700" aria-hidden="true">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold"><a href="tel:6006002247" aria-label="Llamar a ACHS al número 600 600 22 47">600 600 22 47</a></p>
                </div>
              </div>
            </div>
            
            <Separator className="my-4 w-full" />
            
            <div>
              <p className="text-lg font-medium text-green-700">Oficinas Centrales</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-green-700" aria-hidden="true">
                  <MapPin size={24} />
                </div>
                <p>
                  <a href="https://maps.google.com/?q=Ramón+Carnicer+163,+Providencia,+Santiago" target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación de ACHS en Google Maps: Ramón Carnicer 163, Providencia, Santiago">
                    Ramón Carnicer 163, Providencia, Santiago.
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          {/* IST */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                className="w-24 h-24 object-contain"
                src="/lovable-uploads/05983157-652c-402e-aab0-332d1ed243a7.png" 
                alt="Logo del Instituto de Seguridad del Trabajo (IST)" 
              />
              <h3 className="text-xl font-bold text-azul">Instituto de Seguridad del Trabajo</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-lg font-medium text-naranja">Teléfono</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-naranja" aria-hidden="true">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold"><a href="tel:6005840000" aria-label="Llamar a IST al número 600 5840 000">600 5840 000</a></p>
                </div>
              </div>
            </div>
            
            <Separator className="my-4 w-full" />
            
            <div>
              <p className="text-lg font-medium text-naranja">Oficinas Centrales</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-naranja" aria-hidden="true">
                  <MapPin size={24} />
                </div>
                <p>
                  <a href="https://maps.google.com/?q=1/2+Oriente+1175,+Edificio+Plaza+O'Higgins,+Viña+del+Mar" target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación de IST en Google Maps: 1/2 Oriente 1175, Edificio Plaza O'Higgins, Viña del Mar">
                    1/2 Oriente 1175, Edificio Plaza O'Higgins, Viña del Mar.
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Mutual de Seguridad */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                className="w-28 h-28 object-contain"
                src="/lovable-uploads/a7ac7a98-7ccb-47fb-9357-e8a94c4194bc.png" 
                alt="Logo de Mutual de Seguridad" 
              />
              <h3 className="text-xl font-bold text-azul">Mutual de Seguridad</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-lg font-medium text-amarillo">Teléfono</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-amarillo" aria-hidden="true">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold"><a href="tel:6002000555" aria-label="Llamar a Mutual de Seguridad al número 600 2000 555">600 2000 555</a></p>
                </div>
              </div>
            </div>
            
            <Separator className="my-4 w-full" />
            
            <div>
              <p className="text-lg font-medium text-amarillo">Oficinas Centrales</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-amarillo" aria-hidden="true">
                  <MapPin size={24} />
                </div>
                <p>
                  <a href="https://maps.google.com/?q=Av.+Lib.+Bernardo+O'Higgins+194,+Santiago+de+Chile" target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación de Mutual de Seguridad en Google Maps: Av. Lib. Bernardo O'Higgins 194, Santiago de Chile">
                    Av. Lib. Bernardo O'Higgins 194, Santiago de Chile
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactInfo;
