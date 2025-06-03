import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, BookOpen } from 'lucide-react';
const LeyKarin: React.FC = () => {
  return <section id="leykarin" className="bg-[#f3f3e9] scroll-mt-20 pb-16 md:pb-24 relative" style={{
    position: 'relative',
    zIndex: 10
  }}>
      <div className="container mx-auto px-4 pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 fade-in-section">
            <h2 className="text-4xl font-bold mb-6 text-[#333333] leading-tight">LEY KARIN</h2>
            <div className="w-20 h-1 bg-[#f5a034] mb-8"></div>
            
            <div className="relative">
              <img alt="Personas trabajadoras en un entorno laboral seguro con elementos de protección adecuados" className="rounded-lg shadow-lg mb-8 w-full object-cover h-64" loading="lazy" src="/lovable-uploads/4f6e8837-042f-4093-92f3-367caf48964f.jpg" />
              <div className="absolute -bottom-4 -right-4 bg-[#f5a034]/10 w-full h-full rounded-lg -z-10" aria-hidden="true"></div>
            </div>
            
            
          </div>
          
          <Card className="md:col-span-7 border-none shadow-xl rounded-lg overflow-hidden bg-white relative fade-in-section">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#f5a034] to-[#ffc000]" aria-hidden="true"></div>
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="w-10 h-10 text-[#f5a034] flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#333333]">Una norma que protege a todas las personas en su entorno laboral</h3>
                  <p className="text-lg mb-4">
                    La Ley Karin (21.643) representa un hito importante en la prevención e intervención en acoso laboral, sexual y violencia en el trabajo.
                  </p>
                </div>
              </div>
              
              <p className="text-lg mb-4">
                La ley modifica el Código del Trabajo y otros cuerpos legales, para incorporar disposiciones específicas relacionadas con la prevención, investigación y sanción del acoso laboral, sexual y la violencia en el ámbito laboral.
              </p>
              
              <p className="text-lg mb-4 bg-[#f5a034]/10 p-4 rounded-lg border-l-2 border-[#f5a034]">
                Exige a empresas y organismos estatales implementar protocolos de prevención en el tema, asegurando la adopción de medidas preventivas adecuadas.
              </p>
              
              <div className="mt-8 flex justify-center">
                <img alt="Equipo de profesionales colaborando en un ambiente de respeto y comunicación efectiva" className="rounded-lg w-full max-w-md h-48 object-cover" loading="lazy" src="/lovable-uploads/e5efd92e-3647-4fbb-9f0d-a74bade87366.jpg" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default LeyKarin;