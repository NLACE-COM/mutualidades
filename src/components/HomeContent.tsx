
import React, { useRef } from 'react';
import Hero from './Hero';
import Decretosupremo from './Decretosupremo';
import ContactInfo from './ContactInfo';
import MutualSearch from './MutualSearch';
import AnimationsObserver from './AnimationsObserver';
import ScrollTracker from './ScrollTracker';
import BenefitsSection from './Beneficios';
import Formulariounico from './fuf';
import Aplicacion from './aplicacion';


const HomeContent: React.FC = () => {
  // Refs for each section to track visibility
  const sectionRefs = {
    'decretosupremo': useRef<HTMLElement | null>(null),
    'entornos': useRef<HTMLElement | null>(null),
    'inspeccion-trabajo': useRef<HTMLElement | null>(null),
    'preguntas-frecuentes': useRef<HTMLElement | null>(null),
    'roles-responsabilidades': useRef<HTMLElement | null>(null),
    'contacto-info': useRef<HTMLElement | null>(null)
  };
  
  // Section names mapping for analytics
  const sectionNames: Record<string, string> = {
    'Decretosupremo': 'Decreto Supremo',
    'entornos': 'Entornos Seguros',
    'inspeccion-trabajo': 'Cifras',
    'preguntas-frecuentes': 'Preguntas Frecuentes',
    'roles-responsabilidades': 'Roles y Responsabilidades',
    'contacto-info': 'Información de Contacto',
    'buscador-mutualidades': 'Buscador de Mutualidades'
  };

  return (
    <>
      {/* Observer components for animations and analytics */}
      <AnimationsObserver />
      <ScrollTracker sectionRefs={sectionRefs} sectionNames={sectionNames} />
      
      {/* Hero section with seamless connection to LeyKarin */}
      <div className="relative z-10">
        <Hero />
      </div>
      
      {/* LeyKarin with proper positioning */}
      <div className="relative z-20" ref={(el) => { sectionRefs['decretosupremo'].current = el as HTMLElement | null }}>
        <Decretosupremo />
      </div>
    <div className="relative z-20" ref={(el) => { sectionRefs['decretosupremo'].current = el as HTMLElement | null }}>
      <BenefitsSection />
      </div>
      <div className="relative z-20" ref={(el) => { sectionRefs['decretosupremo'].current = el as HTMLElement | null }}>
      <Formulariounico />
      </div>
       <div className="relative z-20" ref={(el) => { sectionRefs['decretosupremo'].current = el as HTMLElement | null }}>
      <Aplicacion />
      </div>
  
  
      
      <MutualSearch />
    </>
  );
};

export default HomeContent;
