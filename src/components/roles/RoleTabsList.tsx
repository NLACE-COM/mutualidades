
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RoleData } from '../../data/rolesData';
import { useIsMobile } from '../../hooks/use-mobile';
import { ScrollArea } from '../ui/scroll-area';

interface RoleTabsListProps {
  roles: RoleData[];
}

const RoleTabsList: React.FC<RoleTabsListProps> = ({ roles }) => {
  const isMobile = useIsMobile();
  
  return (
    <ScrollArea className={`${isMobile ? 'max-w-[95vw] pb-4' : 'w-full'}`}>
      <TabsList className={`${isMobile ? 'flex w-max gap-2' : 'grid grid-cols-5 gap-2'} mb-8`}>
        {roles.map((role) => (
          <TabsTrigger 
            key={role.id}
            value={role.id} 
            className="flex items-center justify-center py-3 px-4 whitespace-nowrap data-[state=active]:bg-azul data-[state=active]:text-white"
          >
            <span className={`${isMobile ? 'text-xl' : ''}`}>{role.icon}</span>
            <span className={`${isMobile ? 'ml-2' : 'hidden md:inline ml-2'}`}>
              {isMobile ? role.shortTitle || role.title.split(' ')[0] : role.shortTitle || role.title}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
    </ScrollArea>
  );
};

export default RoleTabsList;
