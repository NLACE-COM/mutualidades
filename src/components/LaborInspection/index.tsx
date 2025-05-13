
import React, { useRef } from 'react';
import LaborInspectionDescription from './LaborInspectionDescription';
import StatCards from './StatCards';
import { useCounterAnimation } from '@/hooks/use-counter-animation';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const LaborInspection: React.FC = () => {
  const statsSectionRef = useRef<HTMLDivElement>(null);
  
  const targetValues = {
    cases: 151,
    laborHarassment: 58,
    sexualHarassment: 25,
    largeCompanies: 64,
    womenReporters: 60
  };

  const { animatedValues, startCountAnimation } = useCounterAnimation(targetValues);
  
  useIntersectionObserver(statsSectionRef, startCountAnimation);

  return (
    <section id="inspeccion-trabajo" className="py-16 bg-gradient-to-br from-azul/5 to-azul/15">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-azul mb-12 border-b-2 border-azul pb-4 max-w-2xl mx-auto">
          EL ROL DE LA INSPECCIÓN DEL TRABAJO
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <LaborInspectionDescription />
          
          <div className="fade-in-section" id="stats-section" ref={statsSectionRef}>
            <h2 className="text-3xl font-bold text-azul mb-6 text-center">
              ALGUNAS CIFRAS
            </h2>
            
            <StatCards animatedValues={animatedValues} />
          </div>
        </div>
      </div>
      
      <style>
        {`
        .counter-animation {
          display: inline-block;
        }
        `}
      </style>
    </section>
  );
};

export default LaborInspection;
