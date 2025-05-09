
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, ShieldCheck, BookOpen, Users, Book } from "lucide-react";

const SafeEnvironments: React.FC = () => {
  const requirements = [
    {
      title: "Evaluar los riesgos psicosociales",
      icon: <ClipboardCheck className="w-12 h-12 text-celeste mb-4" />
    },
    {
      title: "Elaborar un protocolo de prevención",
      icon: <ShieldCheck className="w-12 h-12 text-celeste mb-4" />
    },
    {
      title: "Actualizar los reglamentos internos",
      icon: <Book className="w-12 h-12 text-celeste mb-4" />
    },
    {
      title: "Capacitar a trabajadores y equipos",
      icon: <Users className="w-12 h-12 text-celeste mb-4" />
    },
    {
      title: "Definir y aplicar procedimientos de denuncia y medidas de resguardo",
      icon: <BookOpen className="w-12 h-12 text-celeste mb-4" />
    }
  ];

  return (
    <section id="entornos" className="bg-gris section-padding scroll-mt-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 fade-in-section">
          <h2 className="text-4xl font-bold text-azul">¿CÓMO CREAR ENTORNOS DE TRABAJO SEGUROS Y SALUDABLES?</h2>
          <div className="w-20 h-1 bg-naranja mx-auto my-6"></div>
          <p className="text-lg mb-8">
            Para construir entornos de trabajo seguros y saludables, es esencial implementar medidas de prevención, capacitación y protocolos de denuncia.
          </p>
          <p className="text-lg font-semibold text-azul mb-8">
            Para esto, la Ley exige a las empresas:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((item, index) => (
            <Card key={index} className="border-none shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-azul">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafeEnvironments;
