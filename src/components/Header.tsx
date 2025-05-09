
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`py-4 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-6">
            <img src="/lovable-uploads/66786ae1-0547-4488-a338-c25149a77bf9.png" alt="ACHS Logo" className="h-14 w-auto transition-transform hover:scale-105" />
            <img src="/lovable-uploads/05983157-652c-402e-aab0-332d1ed243a7.png" alt="IST Logo" className="h-14 w-auto transition-transform hover:scale-105" />
            <img src="/lovable-uploads/a7ac7a98-7ccb-47fb-9357-e8a94c4194bc.png" alt="Mutual de Seguridad Logo" className="h-14 w-auto transition-transform hover:scale-105" />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#leykarin" className="text-gray-700 hover:text-azul transition-colors after:content-[''] after:block after:w-0 after:h-0.5 after:bg-naranja after:transition-all hover:after:w-full">
            Ley Karin
          </a>
          <a href="#entornos" className="text-gray-700 hover:text-azul transition-colors after:content-[''] after:block after:w-0 after:h-0.5 after:bg-naranja after:transition-all hover:after:w-full">
            Entornos Seguros
          </a>
          <a href="#importancia" className="text-gray-700 hover:text-azul transition-colors after:content-[''] after:block after:w-0 after:h-0.5 after:bg-naranja after:transition-all hover:after:w-full">
            Importancia
          </a>
          <a href="#inspeccion-trabajo" className="text-gray-700 hover:text-azul transition-colors after:content-[''] after:block after:w-0 after:h-0.5 after:bg-naranja after:transition-all hover:after:w-full">
            Inspección
          </a>
          <a href="#preguntas-frecuentes" className="text-gray-700 hover:text-azul transition-colors after:content-[''] after:block after:w-0 after:h-0.5 after:bg-naranja after:transition-all hover:after:w-full">
            FAQ
          </a>
          <a href="#contacto-info" className="text-gray-700 hover:text-azul transition-colors after:content-[''] after:block after:w-0 after:h-0.5 after:bg-naranja after:transition-all hover:after:w-full">
            Contacto
          </a>
        </nav>

        <Button 
          variant="ghost" 
          className="md:hidden"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden z-50">
            <nav className="flex flex-col space-y-4">
              <a href="#leykarin" className="text-gray-700 hover:text-azul py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Ley Karin
              </a>
              <a href="#entornos" className="text-gray-700 hover:text-azul py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Entornos Seguros
              </a>
              <a href="#importancia" className="text-gray-700 hover:text-azul py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Importancia
              </a>
              <a href="#inspeccion-trabajo" className="text-gray-700 hover:text-azul py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Inspección
              </a>
              <a href="#preguntas-frecuentes" className="text-gray-700 hover:text-azul py-2 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
              <a href="#contacto-info" className="text-gray-700 hover:text-azul py-2" onClick={() => setMobileMenuOpen(false)}>
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
