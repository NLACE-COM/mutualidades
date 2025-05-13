
import React, { useState } from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { trackTabChange } from '../utils/analytics';
import SectionHeader from './carousel/SectionHeader';
import { rolesData } from '../data/rolesData';
import RoleContent from './roles/RoleContent';
import RoleTabsList from './roles/RoleTabsList';

const RolesResponsabilidades: React.FC = () => {
  const [activeTab, setActiveTab] = useState("mutualidades");
  
  // Handle tab change for analytics tracking
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
  };

  return (
    <section id="roles-responsabilidades" className="py-16 bg-white">
      <div className="container mx-auto fade-in-section">
        <SectionHeader 
          title="ROLES Y RESPONSABILIDADES" 
          description="Conoce la función de cada entidad en la implementación de la Ley Karin y cómo contribuyen a crear entornos laborales más seguros."
        />
        
        <div className="max-w-5xl mx-auto mt-10">
          <Tabs 
            defaultValue="mutualidades" 
            className="w-full"
            onValueChange={handleTabChange}
            value={activeTab}
          >
            <RoleTabsList roles={rolesData} />
            
            {rolesData.map((role) => (
              <TabsContent key={role.id} value={role.id} className="focus-visible:ring-0 focus-visible:outline-none">
                <RoleContent role={role} />
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-10 text-center">
            <p className="text-lg text-gray-700">
              Es importante conocer los roles de cada entidad para saber a quién acudir en caso de necesitar ayuda o información.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesResponsabilidades;
