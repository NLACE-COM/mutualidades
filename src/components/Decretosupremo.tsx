
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, BookOpen } from 'lucide-react';
const Decretosupremo: React.FC = () => {
  return <section id="decretosupremo" className="bg-[#f3f3e9] scroll-mt-20 pb-16 md:pb-24 relative" style={{
    position: 'relative',
    zIndex: 10
  }}>
      <div className="container mx-auto px-4 pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 fade-in-section">

      
            
            <div className="relative">
              <img alt="Personas trabajadoras en un entorno laboral seguro con elementos de protección adecuados" className="rounded-lg shadow-lg mb-8 w-full object-cover h-70" loading="lazy" src="/lovable-uploads/image-1.png" />
   
            </div>
            
    
            
          </div>
          <div className='hidden md:block md:col-span-1'></div>
          
      <Card className="md:col-span-6 border-none shadow-xl rounded-lg overflow-hidden bg-white relative fade-in-section">
  <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-b from-[#f5a034] to-[#ffc000]" aria-hidden="true"></div>
  <CardContent className="p-8">
    <div className="flex items-start gap-4 mb-6">
      <div>
        <h3 className="text-lg md:text-2xl font-bold mb-6 text-[#333333] leading-tight">DECRETO SUPREMO N° 44</h3>
        <ul className="list-disc pl-6 space-y-4 text-base md:text-2xl text-[#606060]">
          <li>Actualiza la gestión de riesgos con enfoque de género.</li>
          <li>Establece nuevas obligaciones para la Seguridad y Salud en el Trabajo.</li>
          <li>Define requisitos de acuerdo al tamaño de la entidad empleadora.</li>
          <li>Fomenta la capacitación de las personas trabajadoras.</li>

        </ul>
      </div>
    </div>
  </CardContent>
</Card>
        </div>
      </div>
    </section>;
};
export default Decretosupremo;
