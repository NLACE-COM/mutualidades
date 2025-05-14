
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TotalCasesCardProps {
  cases: number;
}

const TotalCasesCard: React.FC<TotalCasesCardProps> = ({ cases }) => {
  return (
    <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center">
      <div className="bg-azul h-1.5"></div>
      <CardContent className="p-6">
        <div className="text-5xl font-bold mb-3 text-azul flex items-center justify-center">
          <span className="counter-animation">{cases}</span>
        </div>
        <p className="text-center text-lg font-medium">Denuncias ingresadas bajo la Ley Karin</p>
      </CardContent>
    </Card>
  );
};

export default TotalCasesCard;
