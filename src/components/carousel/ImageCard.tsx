
import React from 'react';

interface ImageCardProps {
  image: {
    src: string;
    alt: string;
    caption: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-xl h-64 relative transition-all duration-500">
      <img 
        src={image.src} 
        alt={image.alt} 
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 bg-[#108CB0]/90 py-2 px-3 transition-transform duration-300">
        <p className="text-white font-medium text-center">{image.caption}</p>
      </div>
    </div>
  );
};

export default ImageCard;
