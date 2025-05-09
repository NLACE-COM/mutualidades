
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const LaborInspection: React.FC = () => {
  return (
    <section id="inspeccion-trabajo" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="fade-in-section">
            <h2 className="text-4xl font-bold text-azul mb-6">
              EL ROL DE LA INSPECCIÓN DEL TRABAJO
            </h2>
            
            <p className="mb-6">
              La Inspección del Trabajo es el organismo estatal que supervisa el cumplimiento 
              de la Ley Karin y protege los derechos laborales.
            </p>
            
            <p className="mb-4">Su rol incluye:</p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-600 mt-1 flex-shrink-0" />
                <span>Recibir denuncias de acoso laboral, sexual y violencia en el trabajo.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-600 mt-1 flex-shrink-0" />
                <span>Investigar los hechos denunciados, con independencia y objetividad.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-600 mt-1 flex-shrink-0" />
                <span>Exigir a las empresas el cumplimiento de la ley, incluyendo la existencia y aplicación de protocolos.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-600 mt-1 flex-shrink-0" />
                <span>Aplicar sanciones a los empleadores que incumplan sus obligaciones o permitan prácticas abusivas.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-600 mt-1 flex-shrink-0" />
                <span>Orientar a los trabajadores y las trabajadoras sobre sus derechos y los pasos para denunciar.</span>
              </li>
            </ul>
            
            <p className="text-lg font-semibold flex items-center">
              <span className="inline-block mr-2">👉</span> La Inspección del Trabajo es una vía segura y oficial para proteger tus derechos.
            </p>
          </div>
          
          <div className="fade-in-section">
            <h2 className="text-4xl font-bold text-azul mb-6">
              ALGUNAS CIFRAS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-2 border-azul">
                <CardContent className="p-6">
                  <p className="text-3xl font-bold mb-2 text-azul">151</p>
                  <p>denuncias ingresadas bajo la Ley Karin entre el 1 de agosto y el 31 de diciembre de 2024.</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-azul">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <p className="font-bold inline-block mr-2">58%</p>
                    <p className="inline-block">acoso laboral</p>
                  </div>
                  <div className="mb-2">
                    <p className="font-bold inline-block mr-2">25%</p>
                    <p className="inline-block">acoso sexual</p>
                  </div>
                  <div>
                    <p className="font-bold inline-block mr-2">17%</p>
                    <p className="inline-block">violencia en el trabajo</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-azul">
                <CardContent className="p-6">
                  <p className="text-3xl font-bold mb-2 text-azul">64%</p>
                  <p>de las denuncias provienen de grandes empresas (más de 200 trabajadores).</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-azul">
                <CardContent className="p-6">
                  <p className="text-3xl font-bold mb-2 text-azul">+60%</p>
                  <p>de las personas denunciantes son mujeres.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaborInspection;
