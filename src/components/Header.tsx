
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-azul">
            <a href="/" className="flex items-center">
              MUTUALIDADESDECHILE.CL
            </a>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#leykarin" className="text-gray-700 hover:text-azul transition-colors">
            Ley Karin
          </a>
          <a href="#entornos" className="text-gray-700 hover:text-azul transition-colors">
            Entornos Seguros
          </a>
          <a href="#importancia" className="text-gray-700 hover:text-azul transition-colors">
            Importancia
          </a>
          <a href="#contacto" className="text-gray-700 hover:text-azul transition-colors">
            Contacto
          </a>
        </nav>
        <Button 
          className="bg-naranja hover:bg-naranja/90 text-white rounded-lg shadow-sm hidden md:block"
          asChild
        >
          <a href="#leykarin">TÓMATELO EN SERIO</a>
        </Button>
        <Button 
          variant="ghost" 
          className="md:hidden" 
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
