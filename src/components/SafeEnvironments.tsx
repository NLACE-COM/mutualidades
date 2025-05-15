
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, ShieldCheck, BookOpen, Users, Book } from "lucide-react";

const SafeEnvironments: React.FC = () => {
  const requirements = [
    {
      title: "Evaluar los riesgos psicosociales",
      icon: <ClipboardCheck className="w-12 h-12 text-celeste mb-4" />,
      description: "Identificar los factores que pueden afectar la salud mental y el bienestar de los trabajadores."
    },
    {
      title: "Elaborar un protocolo de prevención",
      icon: <ShieldCheck className="w-12 h-12 text-naranja mb-4" />,
      description: "Establecer medidas preventivas claras para evitar situaciones de acoso y violencia."
    },
    {
      title: "Actualizar los reglamentos internos",
      icon: <Book className="w-12 h-12 text-amarillo mb-4" />,
      description: "Incorporar las disposiciones de la Ley Karin en los documentos normativos de la empresa."
    },
    {
      title: "Capacitar a trabajadores y equipos",
      icon: <Users className="w-12 h-12 text-azul mb-4" />,
      description: "Formar a todo el personal sobre prevención, identificación y manejo de situaciones de acoso."
    },
    {
      title: "Definir procedimientos de denuncia y medidas de resguardo",
      icon: <BookOpen className="w-12 h-12 text-celeste mb-4" />,
      description: "Crear canales seguros para reportar situaciones y proteger a las personas afectadas."
    }
  ];

  return (
    <section id="entornos" className="bg-gradient-to-b from-gris to-white py-10 md:py-16 mt-0 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="relative">
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
          
          <div className="absolute inset-0 -z-10 flex justify-center" aria-hidden="true">
            <div className="w-full max-w-md h-full bg-naranja/5 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {requirements.slice(0, 3).map((item, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-white group relative fade-in-section"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-celeste to-naranja transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true"></div>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-azul">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img 
              src="/lovable-uploads/16405927-b1e6-474d-a725-c025481732c6.png" 
              alt="Grupo de profesionales participando activamente en una capacitación sobre prevención de acoso laboral"
              className="w-full h-52 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azul/70 to-transparent flex items-end">
              <p className="p-4 text-white">Capacitación continua para prevenir el acoso laboral</p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/d64beb54-1784-4013-8994-7f936ba8b032.png" 
              alt="Trabajadores con cascos de seguridad colaborando en un entorno de construcción"
              className="w-full h-52 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azul/70 to-transparent flex items-end">
              <p className="p-4 text-white">Colaboración y respeto en el ambiente laboral</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {requirements.slice(3).map((item, index) => (
            <Card 
              key={index + 3} 
              className="border-none shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-white group relative fade-in-section"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amarillo to-naranja transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true"></div>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-azul">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafeEnvironments;
