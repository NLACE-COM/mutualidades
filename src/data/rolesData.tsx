
import React, { ReactNode } from 'react';
import { Briefcase, Building, Shield, User, Gavel, Hospital, FileText } from "lucide-react";

export interface RoleData {
  id: string;
  title: string;
  shortTitle?: string;
  icon: ReactNode;
  content: {
    description: string[];
    source: {
      name: string;
      url: string;
    };
  };
}

export const rolesData: RoleData[] = [
  {
    id: "mutualidades",
    title: "Mutualidades (Organismos Administradores del Seguro de la Ley 16.744)",
    shortTitle: "Mutualidades",
    icon: <Hospital className="h-5 w-5 mr-2" />,
    content: {
      description: [
        "Brindar asistencia técnica a los empleadores para la elaboración e implementación de protocolos de prevención del acoso sexual, laboral y violencia en el trabajo.",
        "Ofrecer capacitaciones, talleres y materiales informativos para promover ambientes laborales seguros y saludables.",
        "Proporcionar atención psicológica temprana a las víctimas de acoso y violencia laboral."
      ],
      source: {
        name: "Superintendencia de Seguridad Social (SUSESO) – Circular N° 3813",
        url: "https://www.suseso.cl/612/w3-article-732037.html"
      }
    }
  },
  {
    id: "suseso",
    title: "Superintendencia de Seguridad Social (SUSESO)",
    shortTitle: "SUSESO",
    icon: <Shield className="h-5 w-5 mr-2" />,
    content: {
      description: [
        "Establecer directrices y protocolos que deben seguir los empleadores y organismos administradores para prevenir y abordar el acoso y la violencia en el trabajo.",
        "Supervisar y fiscalizar el cumplimiento de las obligaciones establecidas en la Ley Karin por parte de los empleadores y mutualidades."
      ],
      source: {
        name: "SUSESO – Circular N° 3813",
        url: "https://www.suseso.cl/612/w3-article-732037.html"
      }
    }
  },
  {
    id: "empleadores",
    title: "Empleadores",
    icon: <Building className="h-5 w-5 mr-2" />,
    content: {
      description: [
        "Elaborar e implementar un protocolo de prevención del acoso sexual, laboral y violencia en el trabajo. Este protocolo debe ser difundido entre los trabajadores y formar parte del Reglamento Interno de Orden, Higiene y Seguridad.",
        "Informar semestralmente a los trabajadores sobre los canales disponibles para la recepción de denuncias relacionadas con acoso sexual, laboral y violencia en el trabajo, así como las instancias estatales para denunciar incumplimientos y acceder a prestaciones de seguridad social.",
        "Ante una denuncia, el empleador debe iniciar una investigación interna en un plazo de 30 días. Si decide no realizarla, debe remitir la denuncia a la Inspección del Trabajo en un plazo de 3 días.",
        "Proporcionar atención psicológica temprana a través de los programas que dispone el respectivo organismo administrador de la Ley N° 16.744.",
        "Informar de manera continua, actualizada y periódicamente al organismo administrador sobre las denuncias presentadas y las medidas adoptadas en cada caso."
      ],
      source: {
        name: "Instituto de Seguridad Laboral (ISL) – Ley Karin",
        url: "https://www.suseso.cl/605/w3-article-732062.html"
      }
    }
  },
  {
    id: "trabajadores",
    title: "Trabajadores",
    icon: <User className="h-5 w-5 mr-2" />,
    content: {
      description: [
        "Derecho a un ambiente laboral libre de violencia: Las relaciones laborales deben fundarse en un trato libre de violencia, compatible con la dignidad de la persona y con perspectiva de género.",
        "Derecho a denunciar: Los trabajadores pueden presentar denuncias por acoso sexual, laboral o violencia en el trabajo ante su empleador, la Inspección del Trabajo o los tribunales laborales.",
        "Colaborar en investigaciones: Los trabajadores deben colaborar en las investigaciones internas, proporcionando información y facilitando el proceso.",
        "Acceso a medidas de resguardo: Durante el proceso de investigación, los trabajadores tienen derecho a medidas de resguardo, como la separación física del denunciado, redistribución de la jornada laboral y atención psicológica."
      ],
      source: {
        name: "Dirección del Trabajo – Derechos Fundamentales Trabajadores(as)/ Ley Karin",
        url: "https://www.suseso.cl/605/w3-article-732062.html"
      }
    }
  },
  {
    id: "inspeccion",
    title: "Inspección del Trabajo",
    icon: <Gavel className="h-5 w-5 mr-2" />,
    content: {
      description: [
        "Recibir y tramitar denuncias relacionadas con acoso sexual, laboral y violencia en el trabajo.",
        "Fiscalizar el cumplimiento de las obligaciones de los empleadores en materia de prevención y sanción de estas conductas.",
        "Realizar investigaciones cuando los empleadores no lo hagan o cuando se presenten denuncias directamente ante la Inspección.",
        "Aplicar sanciones en caso de incumplimientos por parte de los empleadores."
      ],
      source: {
        name: "Dirección del Trabajo – Minisitio Ley Karin",
        url: "https://www.suseso.cl/605/w3-article-732062.html"
      }
    }
  }
];
