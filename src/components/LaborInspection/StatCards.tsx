
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface StatCardsProps {
  animatedValues: {
    cases: number;
    laborHarassment: number;
    sexualHarassment: number;
    largeCompanies: number;
    womenReporters: number;
  };
}

const StatCards: React.FC<StatCardsProps> = ({ animatedValues }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="bg-azul h-1.5"></div>
        <CardContent className="p-6">
          <div className="text-4xl font-bold mb-2 text-naranja flex items-center justify-center">
            <span className="counter-animation">{animatedValues.cases}</span>
          </div>
          <p className="text-center">denuncias ingresadas bajo la Ley Karin entre el 1 de agosto y el 31 de diciembre de 2024.</p>
        </CardContent>
      </Card>
      
      <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="bg-naranja h-1.5"></div>
        <CardContent className="p-6">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-bold text-azul text-xl">{animatedValues.laborHarassment}%</p>
              <p>acoso laboral</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-azul h-2.5 rounded-full" style={{ width: `${animatedValues.laborHarassment}%` }}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="font-bold text-naranja text-xl">{animatedValues.sexualHarassment}%</p>
              <p>acoso sexual</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-naranja h-2.5 rounded-full" style={{ width: `${animatedValues.sexualHarassment}%` }}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="font-bold text-celeste text-xl">{100 - animatedValues.laborHarassment - animatedValues.sexualHarassment}%</p>
              <p>violencia en el trabajo</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-celeste h-2.5 rounded-full" style={{ width: `${100 - animatedValues.laborHarassment - animatedValues.sexualHarassment}%` }}></div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="bg-celeste h-1.5"></div>
        <CardContent className="p-6">
          <div className="text-4xl font-bold mb-2 text-celeste flex items-center justify-center">
            <span className="counter-animation">{animatedValues.largeCompanies}%</span>
          </div>
          <p className="text-center">de las denuncias provienen de grandes empresas (más de 200 trabajadores).</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
            <div className="bg-celeste h-3 rounded-full" style={{ width: `${animatedValues.largeCompanies}%` }}></div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="bg-naranja h-1.5"></div>
        <CardContent className="p-6">
          <div className="text-4xl font-bold mb-2 text-naranja flex items-center justify-center">
            +<span className="counter-animation">{animatedValues.womenReporters}</span>%
          </div>
          <p className="text-center">de las personas denunciantes son mujeres.</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
            <div className="bg-naranja h-3 rounded-full" style={{ width: `${animatedValues.womenReporters}%` }}></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatCards;
