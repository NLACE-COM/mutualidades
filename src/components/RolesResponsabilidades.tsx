
import React, { useState, useRef } from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { trackTabChange } from '../utils/analytics';
import SectionHeader from './carousel/SectionHeader';
import { rolesData } from '../data/rolesData';
import RoleContent from './roles/RoleContent';
import RoleTabsList from './roles/RoleTabsList';
import { useIsMobile } from '../hooks/use-mobile';

const RolesResponsabilidades: React.FC = () => {
  const [activeTab, setActiveTab] = useState("mutualidades");
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Handle tab change for analytics tracking and scrolling
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const tabTitles: Record<string, string> = {
      'mutualidades': 'Mutualidades',
      'suseso': 'SUSESO',
      'empleadores': 'Empleadores',
      'trabajadores': 'Trabajadores',
      'inspeccion': 'Inspección del Trabajo'
    };
    
    trackTabChange(tabTitles[value] || value);
    
    // Scroll to content on mobile for better UX
    if (isMobile && contentRef.current) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <section id="roles-responsabilidades" className="py-6 md:py-16 bg-white">
      <div className="container mx-auto px-3 md:px-4 fade-in-section">
        <SectionHeader 
          title="ROLES Y RESPONSABILIDADES" 
          description="Conoce la función de cada entidad en la implementación de la Ley Karin y cómo contribuyen a crear entornos laborales más seguros."
        />
        
        <div className="max-w-5xl mx-auto mt-4 md:mt-10" ref={contentRef}>
          <Tabs 
            defaultValue="mutualidades" 
            className="w-full"
            onValueChange={handleTabChange}
            value={activeTab}
          >
            <div className="relative">
              <RoleTabsList roles={rolesData} />
            </div>
            
            {rolesData.map((role) => (
              <TabsContent key={role.id} value={role.id} className="focus-visible:ring-0 focus-visible:outline-none">
                <RoleContent role={role} />
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-6 md:mt-10 text-center">
            <p className="text-base md:text-lg text-gray-700">
              Es importante conocer los roles de cada entidad para saber a quién acudir en caso de necesitar ayuda o información.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesResponsabilidades;
