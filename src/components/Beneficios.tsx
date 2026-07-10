import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: ["Mejora en la seguridad", "y salud laboral"],
      description:
        "Reduce accidentes y enfermedades laborales, disminuyendo el ausentismo y contribuyendo a una mayor productividad.",
    },
       {
      title: ["Bienestar y motivación \nde las personas trabajadoras."],
      description:
        "Garantizar la Seguridad y Salud Laboral, fomentar la confianza y compromiso de quienes trabajan en la entidad empleadora.",
    },

  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#333333] mb-8">
         Impacto de tener una mejor gestión preventiva
        </h2>

    

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 mt-20">
          {benefits.map((benefit, index) => (
           <div
  key={index}
  className="bg-[#F2F1EC] rounded-[24px] md:rounded-[40px] p-6 md:p-10 flex flex-col justify-center items-center text-center min-h-[260px]"
>
              <h3 className="text-xl md:text-2xl font-bold text-[#606060] mb-6 whitespace-pre-line">
        {benefit.title.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < benefit.title.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h3>

      <p className="text-base md:text-xl text-[#606060] leading-relaxed whitespace-pre-line">
        {benefit.description}
      </p>
            </div>
          ))}
        </div>

        <div className="w-full">
          <img
            src="/lovable-uploads/image-2.png"
            alt="Beneficios DS44"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;