
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
  
  // Split the roles into two rows for mobile view
  const firstRowRoles = roles.slice(0, 3);
  const secondRowRoles = roles.slice(3);
  
  return (
    <div 
      ref={scrollRef} 
      className="w-full pb-3 hide-scrollbar"
    >
      {isMobile ? (
        // Mobile view with two-row grid layout
        <div className="space-y-2">
          {/* First row - 3 tabs */}
          <TabsList className="grid grid-cols-3 gap-2 mb-2 h-20">
            {firstRowRoles.map((role) => (
              <TabsTrigger 
                key={role.id}
                value={role.id} 
                className="h-full py-2 px-1 flex flex-col items-center justify-center text-center data-[state=active]:bg-azul data-[state=active]:text-white"
              >
                <span className="text-xl">{role.icon}</span>
                <span className="text-xs mt-1 line-clamp-1">
                  {role.shortTitle || role.title.split(' ')[0]}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Second row - 2 tabs centered */}
          <TabsList className="grid grid-cols-2 gap-2 mx-auto w-2/3 h-20">
            {secondRowRoles.map((role) => (
              <TabsTrigger 
                key={role.id}
                value={role.id} 
                className="h-full py-2 px-1 flex flex-col items-center justify-center text-center data-[state=active]:bg-azul data-[state=active]:text-white"
              >
                <span className="text-xl">{role.icon}</span>
                <span className="text-xs mt-1 line-clamp-1">
                  {role.shortTitle || role.title.split(' ')[0]}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      ) : (
        // Desktop view with consistent height
        <TabsList className="grid grid-cols-5 gap-2 mb-6 h-24">
          {roles.map((role) => (
            <TabsTrigger 
              key={role.id}
              value={role.id} 
              className="h-full py-3 px-4 flex flex-col items-center justify-center whitespace-nowrap data-[state=active]:bg-azul data-[state=active]:text-white"
            >
              <span className="text-xl">{role.icon}</span>
              <span className="text-sm mt-1">
                {role.shortTitle || role.title}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      )}
    </div>
  );
};

export default RoleTabsList;
