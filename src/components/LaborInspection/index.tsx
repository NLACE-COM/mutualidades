
import React, { useRef } from 'react';
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
  
  // Use a higher threshold to ensure animation starts when more of the element is visible
  useIntersectionObserver(statsSectionRef, startCountAnimation, 0.4);

  return (
    <section id="inspeccion-trabajo" className="py-16 bg-gradient-to-br from-azul/5 to-azul/15">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-azul mb-12 border-b-2 border-azul pb-4 max-w-2xl mx-auto">
          ALGUNAS CIFRAS
        </h2>
        
        <div className="fade-in-section" id="stats-section" ref={statsSectionRef}>
          <StatCards animatedValues={animatedValues} />
        </div>
      </div>
      
      <style>
        {`
        .counter-animation {
          display: inline-block;
          font-variant-numeric: tabular-nums;
          text-align: center;
          min-width: 2ch;
        }
        `}
      </style>
    </section>
  );
};

export default LaborInspection;
