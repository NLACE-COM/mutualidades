
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const LeyKarin: React.FC = () => {
  return (
    <section id="leykarin" className="bg-white section-padding scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 text-azul leading-tight">LEY KARIN</h2>
            <div className="w-20 h-1 bg-naranja mb-8"></div>
          </div>
          
          <Card className="md:col-span-7 border-none shadow-lg rounded-lg overflow-hidden bg-white">
            <CardContent className="p-8">
              <p className="text-lg mb-4">
                La Ley Karin (21.643) representa un hito importante en la prevención e intervención en acoso laboral, sexual y violencia en el trabajo.
              </p>
              <p className="text-lg mb-4">
                La ley modifica el Código del Trabajo y otros cuerpos legales, para incorporar disposiciones específicas relacionadas con la prevención, investigación y sanción del acoso laboral, sexual y la violencia en el ámbito laboral y exige a empresas y organismos estatales implementar protocolos de prevención en el tema, asegurando la adopción de medidas preventivas adecuadas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeyKarin;
