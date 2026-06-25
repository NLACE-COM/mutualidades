
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
const Aplicacion = () => {
  return <section id="decretosupremo" className="bg-[#F3F3EA] scroll-mt-20 pb-16 md:pb-15 relative " style={{
    position: 'relative',
    zIndex: 10
  }}>
      <div className="container mx-auto px-4 pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 fade-in-section">
    <h2 className="text-2xl font-bold text-[#333333]">
¿Cómo se aplica el DS N° 44 según el tamaño de las empresas?
    </h2>
    <p className="text-xl text-[#606060]"> Acá te contamos a lo que tienes<br />
que poner más ojo.</p>

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
    Aquí el compromiso empieza por casa. Como dueño o encargado, tu misión es identificar qué podría salir mal y cómo evitarlo.
Y no estás solo. Tienes derecho a que tu Mutual o el ISL te den asesoría prioritaria. Pídeles plantillas y guías; ellos te ayudan a armar tu plan de seguridad paso a paso.
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
          La supervisión y fiscalización del cumplimiento del FUF D.S. N.° 44
          corresponde a la Dirección del Trabajo (DT) y a las SEREMI de Salud,
          organismos encargados de verificar en terreno el cumplimiento de las
          obligaciones en materia de seguridad y salud en el trabajo.
        </p>
  <h3 className="text-xl font-bold text-[#333333] leading-snug">
      Grandes Empresas <br />
(100 personas trabajadoras).
        </h3>
        <p className="text-md text-[#333333] mb-6 texto-fuf">
  Aquí la seguridad es un sistema más estructurado. Es obligatorio contar con un Departamento de Prevención de Riesgos.
Tu experto en prevención es el responsable que diseña auditorías, mapas de riesgo complejos y asegura que cada rincón de 
la empresa sea un lugar seguro para trabajar.
        </p>

        <a href="#"
          className="inline-block bg-gradient-to-r from-[#f5a034] to-[#ffc000] text-white font-bold text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
         Descubre más aquí.
        </a>
      </div>
          <div className="md:col-span-4 flex justify-center md:justify-start relative">
     <img
  src="/lovable-uploads/ojo-3.png"
  alt="Personaje con ojo gigante representando la fiscalización"
  className="w-full max-w-[180px] h-auto object-contain relative lg:absolute lg:bottom-0 lg:left-10 lg:-mb-0 lg:scale-150 drop-shadow-xl"
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
