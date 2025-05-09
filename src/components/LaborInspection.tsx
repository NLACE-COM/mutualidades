
import React, { useState, useEffect } from 'react';
import { Check, ChartBar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const LaborInspection: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState({
    cases: 0,
    laborHarassment: 0,
    sexualHarassment: 0,
    largeCompanies: 0,
    womenReporters: 0
  });

  const targetValues = {
    cases: 151,
    laborHarassment: 58,
    sexualHarassment: 25,
    largeCompanies: 64,
    womenReporters: 60
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCountAnimation();
        }
      },
      { threshold: 0.3 }
    );
    
    const section = document.getElementById('stats-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const startCountAnimation = () => {
    const duration = 1500;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setAnimatedValues({
        cases: Math.floor(targetValues.cases * Math.min(progress, 1)),
        laborHarassment: Math.floor(targetValues.laborHarassment * Math.min(progress, 1)),
        sexualHarassment: Math.floor(targetValues.sexualHarassment * Math.min(progress, 1)),
        largeCompanies: Math.floor(targetValues.largeCompanies * Math.min(progress, 1)),
        womenReporters: Math.floor(targetValues.womenReporters * Math.min(progress, 1))
      });
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  return (
    <section id="inspeccion-trabajo" className="py-16 bg-gradient-to-br from-azul/5 to-azul/15">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-azul mb-12 border-b-2 border-azul pb-4 max-w-2xl mx-auto">
          EL ROL DE LA INSPECCIÓN DEL TRABAJO
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="fade-in-section">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full border-l-4 border-azul">
              <p className="mb-6 text-lg font-medium text-azul">
                La Inspección del Trabajo es el organismo estatal que supervisa el cumplimiento 
                de la Ley Karin y protege los derechos laborales.
              </p>
              
              <p className="mb-4 text-lg font-semibold text-azul flex items-center">
                <ChartBar className="h-5 w-5 mr-2 text-naranja" />
                Su rol incluye:
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start bg-gradient-to-r from-white to-azul/5 p-3 rounded-md transform hover:translate-x-1 transition-transform duration-300">
                  <Check className="h-5 w-5 mr-3 text-naranja mt-1 flex-shrink-0" />
                  <span>Recibir denuncias de acoso laboral, sexual y violencia en el trabajo.</span>
                </li>
                <li className="flex items-start bg-gradient-to-r from-white to-azul/5 p-3 rounded-md transform hover:translate-x-1 transition-transform duration-300">
                  <Check className="h-5 w-5 mr-3 text-naranja mt-1 flex-shrink-0" />
                  <span>Investigar los hechos denunciados, con independencia y objetividad.</span>
                </li>
                <li className="flex items-start bg-gradient-to-r from-white to-azul/5 p-3 rounded-md transform hover:translate-x-1 transition-transform duration-300">
                  <Check className="h-5 w-5 mr-3 text-naranja mt-1 flex-shrink-0" />
                  <span>Exigir a las empresas el cumplimiento de la ley, incluyendo la existencia y aplicación de protocolos.</span>
                </li>
                <li className="flex items-start bg-gradient-to-r from-white to-azul/5 p-3 rounded-md transform hover:translate-x-1 transition-transform duration-300">
                  <Check className="h-5 w-5 mr-3 text-naranja mt-1 flex-shrink-0" />
                  <span>Aplicar sanciones a los empleadores que incumplan sus obligaciones o permitan prácticas abusivas.</span>
                </li>
                <li className="flex items-start bg-gradient-to-r from-white to-azul/5 p-3 rounded-md transform hover:translate-x-1 transition-transform duration-300">
                  <Check className="h-5 w-5 mr-3 text-naranja mt-1 flex-shrink-0" />
                  <span>Orientar a los trabajadores y las trabajadoras sobre sus derechos y los pasos para denunciar.</span>
                </li>
              </ul>
              
              <p className="text-lg font-semibold flex items-center bg-naranja/10 p-4 rounded-lg border-l-4 border-naranja">
                <span className="inline-block mr-2 text-2xl">👉</span> La Inspección del Trabajo es una vía segura y oficial para proteger tus derechos.
              </p>
            </div>
          </div>
          
          <div className="fade-in-section" id="stats-section">
            <h2 className="text-3xl font-bold text-azul mb-6 text-center">
              ALGUNAS CIFRAS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-azul h-1.5"></div>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold mb-2 text-naranja flex items-center justify-center">
                    <span className="counter-animation">{animatedValues.cases}</span>
                  </div>
                  <p className="text-center">denuncias ingresadas bajo la Ley Karin entre el 1 de agosto y el 31 de diciembre de 2024.</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-naranja h-1.5"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-azul text-xl">{animatedValues.laborHarassment}%</p>
                      <p>acoso laboral</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-azul h-2.5 rounded-full" style={{ width: `${animatedValues.laborHarassment}%` }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-naranja text-xl">{animatedValues.sexualHarassment}%</p>
                      <p>acoso sexual</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-naranja h-2.5 rounded-full" style={{ width: `${animatedValues.sexualHarassment}%` }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-celeste text-xl">{100 - animatedValues.laborHarassment - animatedValues.sexualHarassment}%</p>
                      <p>violencia en el trabajo</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-celeste h-2.5 rounded-full" style={{ width: `${100 - animatedValues.laborHarassment - animatedValues.sexualHarassment}%` }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-celeste h-1.5"></div>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold mb-2 text-celeste flex items-center justify-center">
                    <span className="counter-animation">{animatedValues.largeCompanies}%</span>
                  </div>
                  <p className="text-center">de las denuncias provienen de grandes empresas (más de 200 trabajadores).</p>
                  <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                    <div className="bg-celeste h-3 rounded-full" style={{ width: `${animatedValues.largeCompanies}%` }}></div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-naranja h-1.5"></div>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold mb-2 text-naranja flex items-center justify-center">
                    +<span className="counter-animation">{animatedValues.womenReporters}</span>%
                  </div>
                  <p className="text-center">de las personas denunciantes son mujeres.</p>
                  <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                    <div className="bg-naranja h-3 rounded-full" style={{ width: `${animatedValues.womenReporters}%` }}></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .counter-animation {
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default LaborInspection;
