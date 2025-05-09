
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email("Ingresa un correo electrónico válido"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

const Footer: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      mensaje: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
    form.reset();
    alert("Mensaje enviado con éxito");
  }

  return (
    <footer id="contacto" className="bg-white pt-16 pb-8 scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-azul mb-6">CONTÁCTANOS</h3>
            <p className="text-gray-600 mb-6">
              ¿Tienes dudas sobre cómo implementar un entorno laboral seguro y saludable? 
              Escríbenos y te responderemos a la brevedad.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input placeholder="tu@correo.cl" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Input placeholder="Escribe tu consulta aquí..." {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-naranja hover:bg-naranja/90 text-white w-full"
                >
                  Enviar mensaje
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-azul mb-6">ENTIDADES ASOCIADAS</h3>
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="bg-gris p-4 rounded-lg flex items-center justify-center w-40 h-16">
                <span className="font-bold text-azul">ACHS</span>
              </div>
              <div className="bg-gris p-4 rounded-lg flex items-center justify-center w-40 h-16">
                <span className="font-bold text-azul">IST</span>
              </div>
              <div className="bg-gris p-4 rounded-lg flex items-center justify-center w-40 h-16">
                <span className="font-bold text-azul">Mutual de Seguridad</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-auto">
              Las Mutualidades de Empleadores son fiscalizadas por la Superintendencia de Seguridad Social (www.suseso.cl)
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-xl font-bold text-azul">MUTUALIDADESDECHILE.CL</p>
          <p className="text-sm text-gray-500 mt-4">© 2025 - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
