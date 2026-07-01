import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const formSchema = z.object({
  email: z.string().email("Ingresa un correo electrónico válido"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres")
});
const Footer: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      mensaje: ""
    }
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
    form.reset();
    alert("Mensaje enviado con éxito");
  }
  return <footer id="contacto" className="bg-[#fff] pt-16 pb-8 scroll-mt-20">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-col items-center text-center max-w-4xl">
          <div className="flex flex-wrap gap-10 mb-10 justify-center">
            <a href="https://www.achs.cl/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg flex items-center justify-center w-48 h-32 shadow-sm hover:shadow-md transition-shadow" aria-label="Visitar sitio web de ACHS">
              <img alt="ACHS" className="h-24 w-auto" src="/lovable-uploads/02e5885b-efd3-40b3-8d2c-57670263e2bc.png" />
            </a>
            <a href="https://ist.cl/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg flex items-center justify-center w-48 h-32 shadow-sm hover:shadow-md transition-shadow" aria-label="Visitar sitio web de IST">
              <img alt="IST" className="h-24 w-auto" src="/lovable-uploads/f7c1a926-5ada-44d8-b066-58b80841b046.png" />
            </a>
            <a href="https://www.mutual.cl/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg flex items-center justify-center w-48 h-32 shadow-sm hover:shadow-md transition-shadow" aria-label="Visitar sitio web de Mutual de Seguridad">
              <img alt="Mutual de Seguridad" src="/lovable-uploads/logo-mutual.png" className="h-13 w-auto" />
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            Las Mutualidades de Empleadores son fiscalizadas por la Superintendencia de Seguridad Social <a href="http://www.suseso.cl" className="text-[#108cb0] hover:underline" target="_blank" rel="noopener noreferrer">www.suseso.cl</a>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;