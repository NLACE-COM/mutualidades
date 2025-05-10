
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { trackAccordionInteraction, trackExternalLinkClick } from '../utils/analytics';

const FrequentQuestions: React.FC = () => {
  // Handler for accordion state changes
  const handleAccordionChange = (value: string, isOpen: boolean, title: string) => {
    trackAccordionInteraction(title, isOpen);
  };
  
  // Handler for external link clicks
  const handleExternalLinkClick = (linkName: string, url: string) => {
    trackExternalLinkClick(linkName, url);
  };

  return (
    <section id="preguntas-frecuentes" className="bg-gris py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-azul mb-12">
          PREGUNTAS FRECUENTES
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full" onValueChange={(value) => {
            // Only track when an item is opened (value is not empty)
            if (value) {
              const title = {
                'item-1': '¿A quiénes protege la Ley Karin?',
                'item-2': '¿Qué se entiende por acoso sexual?',
                'item-3': '¿Qué se entiende por acoso laboral?',
                'item-4': '¿Qué se entiende por violencia en el trabajo?',
                'item-5': '¿Dónde puedo realizar una denuncia?',
                'item-6': '¿Cuáles son las medidas básicas que deben tomar las personas que trabajan?',
                'item-7': '¿Cuáles son las responsabilidades básicas del empleador?',
                'item-8': '¿Cuál es el rol de los organismos administradores de la Ley 16.744?'
              }[value as string] || value;
              
              handleAccordionChange(value, true, title);
            }
          }}>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-azul hover:no-underline">
                ¿A quiénes protege la Ley Karin?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                La Ley Karin protege a todos los trabajadores en Chile, tanto del sector público como privado. 
                Esto incluye a trabajadores a plazo fijo, indefinido, por obra o faena, y a los trabajadores 
                independientes que presten servicios en forma habitual en un mismo lugar de trabajo.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-azul hover:no-underline">
                ¿Qué se entiende por acoso sexual?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Acoso sexual es cuando una persona realiza, en forma indebida, por cualquier medio, 
                requerimientos de carácter sexual, no consentidos por quien los recibe, y que amenazan 
                o perjudican su situación laboral o sus oportunidades en el trabajo.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-azul hover:no-underline">
                ¿Qué se entiende por acoso laboral?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Acoso laboral es toda conducta que constituye agresión u hostigamiento ejercida por el 
                empleador o por uno o más trabajadores, en contra de otro trabajador, por cualquier medio, 
                ya sea que se realice una sola vez o de manera reiterada, y que resulte para la persona 
                afectada un menoscabo, maltrato o humillación, o bien que amenace o perjudique su situación 
                laboral o sus oportunidades en el empleo.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-azul hover:no-underline">
                ¿Qué se entiende por violencia en el trabajo?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Violencia en el trabajo es aquella ejercida por terceros ajenos a la relación laboral, 
                entendiéndose como aquellas conductas que afecten a las trabajadoras y trabajadores, al 
                momento de prestar sus servicios, por parte de clientes, proveedores o usuarios, entre otros.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold text-azul hover:no-underline">
                ¿Dónde puedo realizar una denuncia?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Para denunciar acoso laboral, sexual o violencia en el trabajo puedes hacerlo ante tu empleador, 
                la <Link to="https://www.dt.gob.cl/portal/1626/w3-channel.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" onClick={() => handleExternalLinkClick("Dirección del Trabajo", "https://www.dt.gob.cl/portal/1626/w3-channel.html")}>Inspección del Trabajo</Link> o 
                <Link to="https://www.contraloria.cl/portalweb/web/cgr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" onClick={() => handleExternalLinkClick("Contraloría General", "https://www.contraloria.cl/portalweb/web/cgr/")}> Contraloría General de la República</Link> para 
                los funcionarios públicos o los tribunales laborales.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold text-azul hover:no-underline">
                ¿Cuáles son las medidas básicas que deben tomar las personas que trabajan?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p>Los trabajadores pueden tomar las siguientes medidas para prevenir el acoso laboral, sexual o la violencia en el trabajo:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Informarse sobre sus derechos y las obligaciones de su empleador en materia de acoso y violencia.</li>
                  <li>Conocer los canales de denuncia disponibles en su lugar de trabajo.</li>
                  <li>Denunciar cualquier situación de acoso o violencia que observe o sufra.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold text-azul hover:no-underline">
                ¿Cuáles son las responsabilidades básicas del empleador?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <ul className="list-disc pl-6">
                  <li>Elaborar e implementar un protocolo de prevención del acoso laboral, sexual y la violencia en el trabajo.</li>
                  <li>Actualizar y difundir el reglamento interno en torno a la Ley N° 21.643 (Ley Karin).</li>
                  <li>Informar y capacitar a todas las personas.</li>
                  <li>Elaborar un procedimiento de denuncia, investigación y sanción.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-semibold text-azul hover:no-underline">
                ¿Cuál es el rol de los organismos administradores de la Ley 16.744?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <ul className="list-disc pl-6">
                  <li>Otorgar asistencia técnica a las entidades empleadoras para la elaboración e implementación del Protocolo de Prevención de Acoso Sexual, Laboral y Violencia en el Trabajo, la sensibilización y difusión.</li>
                  <li>Para la elaboración del procedimiento de investigación y sanción, el empleador podrá contar con la asistencia técnica del organismo administrador (en empresas con menos de 10 trabajadores).</li>
                  <li>Disponer de programas de atención psicológica temprana al denunciante, en caso de acoso laboral, sexual o violencia en el trabajo.</li>
                  <li>Implementar normas complementarias para el proceso de calificación del origen de las enfermedades asociadas a estos eventos.</li>
                  <li>Para conocer a qué mutualidad estás adherido <a href="https://www.asociaciondemutuales.cl/buscador-mutualidades/" 
                        onClick={() => handleExternalLinkClick("Buscador de Mutualidades", "https://www.asociaciondemutuales.cl/buscador-mutualidades/")}
                        target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">pincha aquí</a></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestions;
