import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: ["Mejora en la seguridad", "y salud laboral"],
      description:
        "Reduce accidentes y enfermedades laborales, \naumentando la productividad \ny reduciendo costos.",
    },
    {
      title: ["Mejora en la", "productividad"],
      description:
        "Un entorno seguro disminuye \nel ausentismo, mejora la moral \ny aumenta el rendimiento de la empresa.",
    },
    {
      title: ["Fortalecimiento de la " , "reputación empresarial"],
      description:
        "Promover la seguridad laboral mejora \nla imagen corporativa y atrae talento, \nclientes e inversionistas.",
    },
    {
      title: ["Bienestar y motivación", "de los empleados"],
      description:
        "Garantizar la seguridad laboral \nfomenta confianza, \nsatisfacción y compromiso en \nlos trabajadores.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#333333] mb-8">
          Ahora todos le ponemos más ojo a la seguridad
          <br />
          y salud laboral con el DS N° 44
        </h2>

        <p className="text-xl md:text-2xl font-semibold text-center text-[#333333] mb-16">
          Conoce los beneficios de tener una mejor gestión preventiva.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F2F1EC] rounded-[40px] p-10 flex flex-col justify-center items-center text-center min-h-[260px]"
            >
              <h3 className="text-2xl font-bold text-[#606060] mb-6 whitespace-pre-line">
                {benefit.title.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < benefit.title.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>

              <p className="text-xl text-[#606060] leading-relaxed whitespace-pre-line">
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