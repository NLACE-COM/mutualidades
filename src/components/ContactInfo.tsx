
import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const ContactInfo: React.FC = () => {
  return (
    <section id="contacto-info" className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-naranja mb-12">
          Estamos para ayudarte
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ACHS */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold text-azul mb-4">Asociación Chilena de Seguridad</h3>
            
            <div className="mb-6">
              <p className="text-lg font-medium text-green-700">Teléfono</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-green-700">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-blue-600 font-medium">Llámanos</p>
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
            <h3 className="text-xl font-bold text-azul mb-4">Instituto de Seguridad del Trabajo</h3>
            
            <div className="mb-6">
              <p className="text-lg font-medium text-naranja">Teléfono</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-naranja">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-blue-600 font-medium">Llámanos</p>
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
            <h3 className="text-xl font-bold text-azul mb-4">Mutual de Seguridad</h3>
            
            <div className="mb-6">
              <p className="text-lg font-medium text-amarillo">Teléfono</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="text-amarillo">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-blue-600 font-medium">Llámanos</p>
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
    </section>
  );
};

export default ContactInfo;
