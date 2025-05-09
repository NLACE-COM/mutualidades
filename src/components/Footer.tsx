
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

  return (
    <footer id="contacto" className="bg-[#f3f3e9] pt-16 pb-8 scroll-mt-20">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-col items-center text-center max-w-4xl">
          <div className="flex flex-wrap gap-10 mb-10 justify-center">
            <a 
              href="https://www.achs.cl/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg flex items-center justify-center w-48 h-32 shadow-sm hover:shadow-md transition-shadow"
              aria-label="Visitar sitio web de ACHS"
            >
              <img src="/lovable-uploads/66786ae1-0547-4488-a338-c25149a77bf9.png" alt="ACHS" className="h-24 w-auto" />
            </a>
            <a 
              href="https://ist.cl/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg flex items-center justify-center w-48 h-32 shadow-sm hover:shadow-md transition-shadow"
              aria-label="Visitar sitio web de IST"
            >
              <img src="/lovable-uploads/05983157-652c-402e-aab0-332d1ed243a7.png" alt="IST" className="h-24 w-auto" />
            </a>
            <a 
              href="https://www.mutual.cl/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg flex items-center justify-center w-48 h-32 shadow-sm hover:shadow-md transition-shadow"
              aria-label="Visitar sitio web de Mutual de Seguridad"
            >
              <img src="/lovable-uploads/a7ac7a98-7ccb-47fb-9357-e8a94c4194bc.png" alt="Mutual de Seguridad" className="h-24 w-auto" />
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            Las Mutualidades de Empleadores son fiscalizadas por la Superintendencia de Seguridad Social <a href="http://www.suseso.cl" className="text-[#108cb0] hover:underline" target="_blank" rel="noopener noreferrer">www.suseso.cl</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
