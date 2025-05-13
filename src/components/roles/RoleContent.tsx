
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";
import { trackExternalLinkClick } from '../../utils/analytics';
import { RoleData } from '../../data/rolesData';
import { useIsMobile } from '../../hooks/use-mobile';

interface RoleContentProps {
  role: RoleData;
}

const RoleContent: React.FC<RoleContentProps> = ({ role }) => {
  const isMobile = useIsMobile();
  
  const handleExternalLinkClick = (linkName: string, url: string) => {
    trackExternalLinkClick(linkName, url);
  };

  return (
    <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-azul mb-4 flex items-center`}>
        {role.icon}
        <span className="ml-2">{role.title}</span>
      </h3>
      
      <Separator className="my-4 bg-azul/20" />
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-naranja mb-3">Rol y Responsabilidades:</h4>
        <ul className="space-y-3 list-disc pl-5">
          {role.content.description.map((item, index) => (
            <li key={index} className="text-gray-700 text-sm md:text-base">{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="bg-blue-50 p-3 md:p-4 rounded-md border-l-4 border-azul text-sm md:text-base">
        <h4 className="text-base md:text-lg font-semibold mb-2">Fuente:</h4>
        <a 
          href={role.content.source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline flex items-center"
          onClick={() => handleExternalLinkClick(role.content.source.name, role.content.source.url)}
        >
          <FileText className="h-4 w-4 mr-2" />
          {role.content.source.name}
        </a>
      </div>
    </div>
  );
};

export default RoleContent;
