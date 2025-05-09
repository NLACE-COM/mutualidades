
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageSquare, Users, CircleCheck, Info, Check } from "lucide-react";

const PositiveWorkplace: React.FC = () => {
  const positiveActions = [
    {
      title: "Trata bien a tus compañeros",
      icon: <Heart className="w-8 h-8 text-[#f5a034] mb-4" />
    },
    {
      title: "Evita gritar o descalificar",
      icon: <MessageSquare className="w-8 h-8 text-[#f5a034] mb-4" />
    },
    {
      title: "Sé empático con las emociones de otros",
      icon: <Heart className="w-8 h-8 text-[#f5a034] mb-4" />
    },
    {
      title: "Respeta la diversidad",
      icon: <Users className="w-8 h-8 text-[#f5a034] mb-4" />
    },
    {
      title: "Comparte tus ideas y escucha con apertura",
      icon: <MessageSquare className="w-8 h-8 text-[#f5a034] mb-4" />
    },
    {
      title: "Apoya a quien lo necesita",
      icon: <Check className="w-8 h-8 text-[#f5a034] mb-4" />
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 fade-in-section">
          <h2 className="text-4xl font-bold text-[#333333]">¿QUÉ SIGNIFICA APORTAR A UN ENTORNO LABORAL POSITIVO?</h2>
          <div className="w-20 h-1 bg-[#f5a034] mx-auto my-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positiveActions.map((action, index) => (
            <Card 
              key={index} 
              className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden bg-gradient-to-br from-white to-[#f3f3e9]"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-4">
                  {action.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositiveWorkplace;
