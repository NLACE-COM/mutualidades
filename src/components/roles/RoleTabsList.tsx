
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RoleData } from '../../data/rolesData';

interface RoleTabsListProps {
  roles: RoleData[];
}

const RoleTabsList: React.FC<RoleTabsListProps> = ({ roles }) => {
  return (
    <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
      {roles.map((role) => (
        <TabsTrigger 
          key={role.id}
          value={role.id} 
          className="flex items-center justify-center py-3 data-[state=active]:bg-azul data-[state=active]:text-white"
        >
          {role.icon}
          <span className="hidden md:inline">{role.shortTitle || role.title}</span>
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default RoleTabsList;
