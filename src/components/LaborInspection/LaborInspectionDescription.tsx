
import React from 'react';
import { Check, ChartBar } from 'lucide-react';

const LaborInspectionDescription: React.FC = () => {
  return (
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
  );
};

export default LaborInspectionDescription;
