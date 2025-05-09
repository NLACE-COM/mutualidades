import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
const ContactInfo: React.FC = () => {
  return <section id="contacto-info" className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-naranja mb-4">
          Estamos para ayudarte
        </h2>
        
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          ¿Tienes dudas sobre cómo implementar un entorno laboral seguro y saludable? Llámanos y te responderemos a la brevedad.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ACHS */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/lovable-uploads/66786ae1-0547-4488-a338-c25149a77bf9.png" alt="ACHS" />
              </Avatar>
              <h3 className="text-xl font-bold text-azul">Asociación Chilena de Seguridad</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-lg font-medium text-green-700">Teléfono</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-green-700">
                  <Phone size={24} />
                </div>
                <div>
                  
                  <p>600 600 22 47</p>
                </div>
              </div>
            </div>
            
            <Separator className="my-4 w-full" />
            
            <div>
              <p className="text-lg font-medium text-green-700">Oficinas Centrales</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-green-700">
                  <MapPin size={24} />
                </div>
                <p>Ramón Carnicer 163, Providencia, Santiago.</p>
              </div>
            </div>
          </div>
          
          {/* IST */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/lovable-uploads/05983157-652c-402e-aab0-332d1ed243a7.png" alt="IST" />
              </Avatar>
              <h3 className="text-xl font-bold text-azul">Instituto de Seguridad del Trabajo</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-lg font-medium text-naranja">Teléfono</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-naranja">
                  <Phone size={24} />
                </div>
                <div>
                  
                  <p>600 5840 000</p>
                </div>
              </div>
            </div>
            
            <Separator className="my-4 w-full" />
            
            <div>
              <p className="text-lg font-medium text-naranja">Oficinas Centrales</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-naranja">
                  <MapPin size={24} />
                </div>
                <p>1/2 Oriente 1175, Edificio Plaza O'Higgins, Viña del Mar.</p>
              </div>
            </div>
          </div>
          
          {/* Mutual de Seguridad */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/lovable-uploads/a7ac7a98-7ccb-47fb-9357-e8a94c4194bc.png" alt="Mutual de Seguridad" />
              </Avatar>
              <h3 className="text-xl font-bold text-azul">Mutual de Seguridad</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-lg font-medium text-amarillo">Teléfono</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-amarillo">
                  <Phone size={24} />
                </div>
                <div>
                  
                  <p>600 2000 555</p>
                </div>
              </div>
            </div>
            
            <Separator className="my-4 w-full" />
            
            <div>
              <p className="text-lg font-medium text-amarillo">Oficinas Centrales</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-amarillo">
                  <MapPin size={24} />
                </div>
                <p>Av. Lib. Bernardo O'Higgins 194, Santiago de Chile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactInfo;