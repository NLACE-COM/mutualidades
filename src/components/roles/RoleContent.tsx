
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { RoleData } from '../../data/rolesData';
import { useIsMobile } from '../../hooks/use-mobile';

interface RoleContentProps {
  role: RoleData;
}

const RoleContent: React.FC<RoleContentProps> = ({ role }) => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-gray-50 p-3 md:p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-azul mb-3 md:mb-4 flex items-center`}>
        {role.icon}
        <span className="ml-2">{role.title}</span>
      </h3>
      
      <Separator className="my-3 md:my-4 bg-azul/20" />
      
      <div>
        <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-naranja mb-2 md:mb-3`}>
          Rol y Responsabilidades:
        </h4>
        <ul className="space-y-2 md:space-y-3 list-disc pl-4 md:pl-5">
          {role.content.description.map((item, index) => (
            <li key={index} className="text-gray-700 text-xs md:text-base">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoleContent;
