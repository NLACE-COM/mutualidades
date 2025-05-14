
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="max-w-4xl mx-auto text-center mb-6 md:mb-12 fade-in-section px-2">
      <h2 
        id="construyendo-juntos-heading" 
        className={`${isMobile ? 'text-xl sm:text-2xl px-1 sm:px-2 break-words' : 'text-4xl'} font-bold text-[#333333] relative`}
      >
        {title}
        <div className="absolute -z-10 w-full h-full flex justify-center items-center opacity-10" aria-hidden="true">
          <div className="bg-[#F5A034] w-32 h-32 rounded-full blur-2xl"></div>
        </div>
      </h2>
      <div className="w-20 h-1 bg-[#F5A034] mx-auto my-3 md:my-6"></div>
      <p className={`${isMobile ? 'text-sm sm:text-base px-2 sm:px-3' : 'text-lg'} text-gray-700 mb-4 md:mb-8`}>
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
