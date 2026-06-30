
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
const Aplicacion = () => {
  return <section id="aplicacion" className="bg-[#F3F3EA] scroll-mt-20 pb-16 md:pb-15 relative " style={{
    position: 'relative',
    zIndex: 10
  }}>
      <div className="container mx-auto px-4 pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 fade-in-section">
    <h2 className="text-2xl font-bold text-[#333333]">
Cómo se aplica el DS N° 44 según el tamaño de las empresas
    </h2>


                  <div className="flex items-start gap-4 mb-6">
     
     <img
  src="/lovable-uploads/image-5.png"
  alt="Personaje con ojo gigante representando la fiscalización"
  className="w-full"
/>
                
              </div>
      
          
            
          </div>
        
 <Card className="md:col-span-7 border-none shadow-xl rounded-lg bg-white relative fade-in-section overflow-visible">
  <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-b from-[#f5a034] to-[#ffc000] rounded-l-lg" aria-hidden="true"></div>
  <CardContent className="p-8 overflow-visible">
    <div className="flex items-start gap-4 mb-2">
      <div>
        <h3 className="text-xl font-bold text-[#333333]">Micro y Pequeñas Empresas<br />
(1 a 24 personas trabajadoras).</h3>
   <p className="text-md text-[#333333]  texto-fuf">
Identificar riesgos y prevenirlos desde el inicio es fundamental. Cuenta con el apoyo de  Achs, IST, Mutual de Seguridad o el ISL, 
que ofrecen asesoría, herramientas y guías para implementar un plan de seguridad paso a paso.
        </p>
      </div>
    </div>

    {/* Segunda sección: imagen + texto + CTA */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end relative">
      {/* Columna imagen */}
  

      {/* Columna texto + botón */}
      <div className="md:col-span-8">
        <h3 className="text-xl font-bold text-[#333333] leading-snug">
        Medianas Empresa<br />
(25 a 99 personas trabajadoras).
        </h3>

        <p className="text-md text-[#333333] mb-4 texto-fuf">
El cumplimiento del Decreto Supremo N.° 44 es supervisado por la Dirección del Trabajo (DT) y 
las SEREMI de Salud, quienes verifican en terreno las obligaciones en materia de seguridad y salud laboral.
        </p>
  <h3 className="text-xl font-bold text-[#333333] leading-snug">
      Grandes Empresas <br />
(100 personas trabajadoras).
        </h3>
        <p className="text-md text-[#333333] mb-6 texto-fuf">
  La seguridad y salud laboral se gestionan mediante un sistema estructurado. Para ello, es obligatorio contar con un 
  Departamento de Prevención de Riesgos, encargado de evaluar riesgos, realizar 
  auditorías y asegurar condiciones de trabajo seguras en toda la organización.
        </p>

    
      </div>
          <div className="md:col-span-4 flex justify-center md:justify-start relative">
     <img
  src="/lovable-uploads/ojo-3.png"
  alt="Personaje con ojo gigante representando la fiscalización"
  className="w-full ojo-1 max-w-[170px] h-auto object-contain relative lg:absolute lg:bottom-0 lg:left-10 lg:-mb-0 lg:scale-150 drop-shadow-xl"
/>
      </div>
    </div>
  </CardContent>
</Card>
 
        </div>
      </div>
    </section>
};
export default Aplicacion;
