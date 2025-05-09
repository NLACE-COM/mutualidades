
import React from 'react';

const Importance: React.FC = () => {
  return (
    <section id="importancia" className="bg-gris section-padding scroll-mt-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 fade-in-section">
          <h2 className="text-4xl font-bold text-azul">¿POR QUÉ ES IMPORTANTE?</h2>
          <div className="w-20 h-1 bg-naranja mx-auto my-6"></div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto">
          <p className="text-lg mb-6">
            En un entorno seguro y saludable, las personas trabajadoras se sienten escuchadas, pueden desarrollarse con confianza y se relacionan desde el respeto mutuo. Cuando se fomenta el reconocimiento entre equipos o se abren espacios de diálogo para compartir ideas, se fortalece la colaboración y el bienestar.
          </p>
          <p className="text-lg mb-6">
            Un entorno así transforma el día a día de las personas trabajadoras: mejora su estado de ánimo, fortalece su bienestar y potencia su rendimiento.
          </p>
          <p className="text-xl font-semibold text-azul">
            No te restes y sé parte de este cambio cultural en las organizaciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Importance;
