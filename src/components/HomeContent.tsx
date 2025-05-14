
import React, { useRef } from 'react';
import Hero from './Hero';
import LeyKarin from './LeyKarin';
import SafeEnvironments from './SafeEnvironments';
import PositiveWorkplace from './PositiveWorkplace';
import ContactInfo from './ContactInfo';
import FrequentQuestions from './FrequentQuestions';
import LaborInspection from './LaborInspection';
import MutualSearch from './MutualSearch';
import WorkplaceImageSlider from './WorkplaceImageSlider';
import ParallaxBackground from './ParallaxBackground';
import AnimationsObserver from './AnimationsObserver';
import ScrollTracker from './ScrollTracker';
import RolesResponsabilidades from './RolesResponsabilidades';

const HomeContent: React.FC = () => {
  // Refs for each section to track visibility
  const sectionRefs = {
    leykarin: useRef<HTMLElement | null>(null),
    entornos: useRef<HTMLElement | null>(null),
    inspeccion: useRef<HTMLElement | null>(null),
    preguntas: useRef<HTMLElement | null>(null),
    roles: useRef<HTMLElement | null>(null),
    contacto: useRef<HTMLElement | null>(null)
  };
  
  // Section names mapping for analytics
  const sectionNames: Record<string, string> = {
    'leykarin': 'Ley Karin',
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
      <div className="relative z-20" ref={(el) => { sectionRefs.leykarin.current = el as HTMLElement | null }}>
        <LeyKarin />
      </div>
      
      {/* SafeEnvironments with parallax effect */}
      <div ref={(el) => { sectionRefs.entornos.current = el as HTMLElement | null }}>
        <SafeEnvironments />
      </div>
      
      {/* WorkplaceImageSlider with dynamic background */}
      <ParallaxBackground density="medium" colors={['#F5A034', '#FFC000', '#108CB0']}>
        <WorkplaceImageSlider />
      </ParallaxBackground>
      
      <PositiveWorkplace />
      
      <div ref={(el) => { sectionRefs.inspeccion.current = el as HTMLElement | null }}>
        <LaborInspection />
      </div>
      
      {/* FAQ section with enhanced animations */}
      <div ref={(el) => { sectionRefs.preguntas.current = el as HTMLElement | null }}>
        <ParallaxBackground density="low" colors={['#108CB0', '#F5A034', '#108CB0']}>
          <FrequentQuestions />
        </ParallaxBackground>
      </div>
      
      {/* Roles y Responsabilidades section */}
      <div ref={(el) => { sectionRefs.roles.current = el as HTMLElement | null }}>
        <RolesResponsabilidades />
      </div>
      
      <div ref={(el) => { sectionRefs.contacto.current = el as HTMLElement | null }}>
        <ContactInfo />
      </div>
      
      <MutualSearch />
    </>
  );
};

export default HomeContent;
