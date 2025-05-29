import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { trackNavClick } from '../utils/analytics';
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle navigation clicks with analytics tracking and smooth scroll
  const handleNavClick = (linkName: string, href: string) => {
    trackNavClick(linkName, href);
    setMobileMenuOpen(false);

    // Prevent default anchor link behavior
    event?.preventDefault();

    // Extract the ID from href
    const targetId = href.startsWith('#') ? href.substring(1) : href;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Set scrolling state to true to potentially pause parallax effects
      setIsScrolling(true);

      // Get header height for offset
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;

      // Calculate scroll position with offset
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 16; // 16px extra padding

      // Use smooth scrolling
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Reset scrolling state after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // 1 second should be enough for most scroll animations to complete
    }
  };
  return <header className={`py-4 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-6">
            <img alt="ACHS Logo" className="h-14 md:h-20 w-auto transition-transform hover:scale-105" src="/lovable-uploads/92cbeb0a-0a49-4b7c-a682-f18c3effd7ab.png" />
            <img alt="IST Logo" className="h-14 md:h-20 w-auto transition-transform hover:scale-105" src="/lovable-uploads/80023b50-526a-4ac3-bbe0-8700f5524db5.png" />
            <img alt="Mutual de Seguridad Logo" src="/lovable-uploads/e553e536-691a-4d35-86b3-8f401cf79873.png" className="h-14 md:h-15 w-auto transition-transform hover:scale-95" />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#leykarin" className="text-gray-700 hover:text-azul transition-colors after:content-[''] after:block after:w-0 after:h-0.5 after:bg-naranja after:transition-all hover:after:w-full" onClick={e => {
          e.preventDefault();
          handleNavClick("Ley Karin", "#leykarin");
        }}>
            Ley Karin
          </a>
          <a href="#entornos" className="text-gray-700 hover:text-azul transition-colors after:content-[''] after:block after:w-0 after:h-0.5 after:bg-naranja after:transition-all hover:after:w-full" onClick={e => {
          e.preventDefault();
          handleNavClick("Entornos Seguros", "#entornos");
        }}>
            Entornos Seguros
          </a>
          <a href="#inspeccion-trabajo" className="text-gray-700 hover:text-azul transition-colors after:content-[''] after:block after:w-0 after:h-0.5 after:bg-naranja after:transition-all hover:after:w-full" onClick={e => {
          e.preventDefault();
          handleNavClick("Cifras", "#inspeccion-trabajo");
        }}>
            Cifras
          </a>
          <a href="#preguntas-frecuentes" className="text-gray-700 hover:text-azul transition-colors after:content-[''] after:block after:w-0 after:h-0.5 after:bg-naranja after:transition-all hover:after:w-full" onClick={e => {
          e.preventDefault();
          handleNavClick("FAQ", "#preguntas-frecuentes");
        }}>
            FAQ
          </a>
          <a href="#roles-responsabilidades" className="text-gray-700 hover:text-azul transition-colors after:content-[''] after:block after:w-0 after:h-0.5 after:bg-naranja after:transition-all hover:after:w-full" onClick={e => {
          e.preventDefault();
          handleNavClick("Roles", "#roles-responsabilidades");
        }}>
            Roles y Resp.
          </a>
          <a href="#contacto-info" className="text-gray-700 hover:text-azul transition-colors after:content-[''] after:block after:w-0 after:h-0.5 after:bg-naranja after:transition-all hover:after:w-full" onClick={e => {
          e.preventDefault();
          handleNavClick("Contacto", "#contacto-info");
        }}>
            Contacto
          </a>
        </nav>

        <Button variant="ghost" className="md:hidden" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile menu */}
        {mobileMenuOpen && <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden z-50">
            <nav className="flex flex-col space-y-4">
              <a href="#leykarin" className="text-gray-700 hover:text-azul py-2 border-b border-gray-100" onClick={e => {
            e.preventDefault();
            handleNavClick("Ley Karin (móvil)", "#leykarin");
          }}>
                Ley Karin
              </a>
              <a href="#entornos" className="text-gray-700 hover:text-azul py-2 border-b border-gray-100" onClick={e => {
            e.preventDefault();
            handleNavClick("Entornos Seguros (móvil)", "#entornos");
          }}>
                Entornos Seguros
              </a>
              <a href="#inspeccion-trabajo" className="text-gray-700 hover:text-azul py-2 border-b border-gray-100" onClick={e => {
            e.preventDefault();
            handleNavClick("Cifras (móvil)", "#inspeccion-trabajo");
          }}>
                Cifras
              </a>
              <a href="#preguntas-frecuentes" className="text-gray-700 hover:text-azul py-2 border-b border-gray-100" onClick={e => {
            e.preventDefault();
            handleNavClick("FAQ (móvil)", "#preguntas-frecuentes");
          }}>
                FAQ
              </a>
              <a href="#roles-responsabilidades" className="text-gray-700 hover:text-azul py-2 border-b border-gray-100" onClick={e => {
            e.preventDefault();
            handleNavClick("Roles (móvil)", "#roles-responsabilidades");
          }}>
                Roles y Resp.
              </a>
              <a href="#contacto-info" className="text-gray-700 hover:text-azul py-2" onClick={e => {
            e.preventDefault();
            handleNavClick("Contacto (móvil)", "#contacto-info");
          }}>
                Contacto
              </a>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;