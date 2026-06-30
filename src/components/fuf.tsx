import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
const Formulariounico = () => {
  return <section id="fuf" className="bg-[#EFF2F3] scroll-mt-20 pb-16 md:pb-15 relative " style={{
    position: 'relative',
    zIndex: 10
  }}>
      <div className="container mx-auto px-4 pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 fade-in-section">
            <div className="flex items-start gap-4 mb-6">
    <img
      src="/lovable-uploads/ojo-2.png"
      alt="Icono representativo del Formulario Único de Fiscalización"
      className="w-30 h-30 md:w-25 md:h-25 object-contain flex-shrink-0"
    />
    <h2 className="text-lg md:text-2xl font-bold text-[#333333] leading-tight">
      Con el Formulario Único
      de Fiscalización,
      todos le ponemos más
      ojo a la seguridad
      y salud laboral
    </h2>
  </div>
            <div className="w-20 h-1 bg-[#f5a034] mb-8"></div>
                  <div className="flex items-start gap-4 mb-6">
     
                <div>
          <p className="text-sm md:text-md text-[#606060] texto-fuf">Porque cuando se trata de cuidar a las personas trabajadoras, el FUF cumple un rol clave.
Y en el mundo laboral, eso se traduce en algo concreto: revisar, evaluar y asegurar que las normas de seguridad se estén cumpliendo.</p>
        <h3 className="text-base md:text-lg font-bold text-[#333333] mt-4 mb-2">¿Qué es el FUF y a qué le ponemos ojo?</h3>
          <p className="text-sm md:text-md text-[#606060] texto-fuf">El Formulario Único de Fiscalización (FUF) del D.S. N.° 44/2024 sobre gestión preventiva de los riesgos 
            laborales para un entorno de trabajo seguro y saludable corresponde a un instrumento de fiscalización cuyo incumplimiento puede dar lugar 
            a sanciones y multas. Por ello, no debe entenderse como una guía, sino como una referencia técnica para los empleadores en materia 
            de seguridad y salud en el trabajo.
      </p>
      <p className="text-sm md:text-md text-[#606060] texto-fuf">Cuando se trata del cuidado de las personas trabajadoras en su entorno laboral, el FUF D.S. N.° 44 cumple un rol
         fundamental, ya que permite revisar, evaluar y verificar el cumplimiento de la normativa vigente. En concreto, este instrumento busca 
         fortalecer la forma en que se gestiona la prevención al interior de las organizaciones, más que centrarse únicamente en la ocurrencia 
         de accidentes laborales.</p>
                </div>
                
              </div>
      
          
            
          </div>
        
 <Card className="md:col-span-7 border-none shadow-xl rounded-lg bg-white relative fade-in-section overflow-visible">
  <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-b from-[#f5a034] to-[#ffc000] rounded-l-lg" aria-hidden="true"></div>
  <CardContent className="p-8 overflow-visible">
    <div className="flex items-start gap-4 mb-6">
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-5 text-[#333333]">¿Para qué sirve el FUF DS N°44?</h3>
        <ul className="list-disc pl-6 space-y-2 texto-fuf text-sm md:text-base text-[#333333]">
          <li>Unificar criterios de fiscalización entre las SEREMI de Salud y la Dirección del
          Trabajo.</li>
          <li>Identificar brechas preventivas antes de la ocurrencia de accidentes o
          enfermedades laborales.</li>
          <li>Promover entornos laborales seguros y saludables mediante una evaluación
          objetiva y técnica del cumplimiento normativo</li>
        </ul>
      </div>
    </div>

    {/* Segunda sección: imagen + texto + CTA */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mt-10 relative">
      {/* Columna imagen */}
      <div className="md:col-span-4 flex justify-center md:justify-start relative">
     <img
  src="/lovable-uploads/profesora.png"
  alt="Personaje con ojo gigante representando la fiscalización"
  className="w-full ojo-1 max-w-[180px] h-auto object-contain relative lg:absolute lg:bottom-0 lg:left-0 lg:-mb-0 lg:scale-150 drop-shadow-xl"
/>
      </div>

      {/* Columna texto + botón */}
      <div className="md:col-span-8">
        <h3 className="text-lg md:text-xl font-bold mb-4 text-[#333333] leading-snug">
          ¿Quién supervisa el cumplimiento<br />
          del FUF D.S. N° 44?
        </h3>

        <p className="text-sm md:text-md text-[#333333] mb-4 texto-fuf">
          La supervisión y fiscalización del cumplimiento del FUF D.S. N.° 44
          corresponde a la Dirección del Trabajo (DT) y a las SEREMI de Salud,
          organismos encargados de verificar en terreno el cumplimiento de las
          obligaciones en materia de seguridad y salud en el trabajo.
        </p>

        <p className="text-sm md:text-md text-[#333333] mb-6 texto-fuf">
          Para ello, la DT y las SEREMI de Salud utilizan el FUF como una
          referencia técnica objetiva que permite evaluar la gestión preventiva
          desarrollada por las empresas y verificar el cumplimiento de la
          normativa vigente. De esta forma, contribuyen a promover entornos
          laborales seguros y saludables, mediante procesos de fiscalización
          orientados a la protección de la vida y salud de las personas
          trabajadoras.
        </p>

        <a href="https://previsionsocial.gob.cl/wp-content/uploads/2025/01/FUF-DS-44-DEL-2024.pdf"
          target="_blank"
  rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-[#f5a034] to-[#ffc000] text-white font-bold text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
         Descargar FUF aquí
        </a>
      </div>
    </div>
  </CardContent>
</Card>
 
        </div>
      </div>
    </section>
};
export default Formulariounico;