
import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-12 fade-in-section">
      <h2 id="construyendo-juntos-heading" className="text-4xl font-bold text-[#333333] relative">
        {title}
        <div className="absolute -z-10 w-full h-full flex justify-center items-center opacity-10" aria-hidden="true">
          <div className="bg-[#F5A034] w-32 h-32 rounded-full blur-2xl"></div>
        </div>
      </h2>
      <div className="w-20 h-1 bg-[#F5A034] mx-auto my-6"></div>
      <p className="text-lg text-gray-700 mb-8">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
