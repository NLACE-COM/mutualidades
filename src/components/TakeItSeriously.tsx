
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TakeItSeriously: React.FC = () => {
  const gridItems = [
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      text: "Un entorno de trabajo seguro y saludable debe garantizar la protección y bienestar de todas las personas trabajadoras."
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      text: "Debemos fortalecer el respeto y la empatía para fomentar entornos laborales sin acoso y violencia."
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      text: "Informarse, participar y motivar es fundamental para crear un entorno libre de acoso."
    },
    {
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      text: "Cada persona trabajadora debe desarrollarse en un entorno respetuoso, con el apoyo de todos."
    }
  ];

  return (
    <section className="bg-azul text-white section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 fade-in-section">
          <h2 className="text-4xl font-bold">TÓMATELO EN SERIO</h2>
          <div className="w-20 h-1 bg-naranja mx-auto my-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridItems.map((item, index) => (
            <Card key={index} className="bg-transparent border-none overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <img 
                  src={item.image} 
                  alt={`Imagen ilustrativa ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-azul/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-lg font-medium">{item.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TakeItSeriously;
