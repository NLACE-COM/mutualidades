import React from 'react';
const MutualSearch: React.FC = () => {
  return <section id="buscador-mutualidades" className="section-padding bg-gris">
      <div className="container mx-auto">
        <div className="fade-in-section">
          
          
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-azul.light text-white">
              <h3 className="text-xl font-semibold">Sistema de Búsqueda de Mutualidades</h3>
            </div>
            <div className="iframe-container w-full" style={{
            height: '600px'
          }}>
              <iframe src="https://www.asociaciondemutuales.cl/suseso/mutualsearch.html" title="Buscador de Mutualidades" className="w-full h-full border-0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            
          </div>
        </div>
      </div>
    </section>;
};
export default MutualSearch;