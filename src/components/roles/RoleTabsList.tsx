
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RoleData } from '../../data/rolesData';
import { useIsMobile } from '../../hooks/use-mobile';

interface RoleTabsListProps {
  roles: RoleData[];
  scrollRef?: React.RefObject<HTMLDivElement>;
}

const RoleTabsList: React.FC<RoleTabsListProps> = ({ roles, scrollRef }) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      ref={scrollRef} 
      className="w-full overflow-x-auto pb-3 hide-scrollbar"
    >
      <TabsList 
        className={`${isMobile 
          ? 'flex w-max gap-1 px-1' 
          : 'grid grid-cols-5 gap-2'} mb-6`}
      >
        {roles.map((role) => (
          <TabsTrigger 
            key={role.id}
            value={role.id} 
            className={`${isMobile 
              ? 'min-w-[90px] px-2 py-3' 
              : 'py-3 px-4'} flex flex-col items-center justify-center whitespace-nowrap data-[state=active]:bg-azul data-[state=active]:text-white`}
          >
            <span className={`${isMobile ? 'text-2xl' : ''}`}>{role.icon}</span>
            <span className={`${isMobile ? 'text-xs mt-1' : 'text-sm ml-2'}`}>
              {isMobile 
                ? (role.shortTitle || role.title.split(' ')[0]) 
                : role.shortTitle || role.title}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
};

export default RoleTabsList;
