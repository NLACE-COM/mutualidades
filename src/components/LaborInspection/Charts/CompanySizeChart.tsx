
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useIsMobile } from "@/hooks/use-mobile";

interface CompanySizeChartProps {
  largeCompanies: number;
}

const CompanySizeChart: React.FC<CompanySizeChartProps> = ({ largeCompanies }) => {
  const isMobile = useIsMobile();
  
  // Colors for consistent styling
  const colors = {
    empresas: "#108cb0", // celeste
  };

  // Data for the company size bar chart
  const companyData = [
    {
      name: "Grandes",
      value: largeCompanies,
      color: colors.empresas
    }, 
    {
      name: "Otras",
      value: 100 - largeCompanies,
      color: "#9ca3af" // gray
    }
  ];

  return (
    <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="bg-celeste h-1.5"></div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-center">Denuncias por Tamaño de Empresa</h3>
        <div className="relative" style={{ height: "250px" }}>
          <ChartContainer 
            className="w-full h-full" 
            config={{ empresas: { color: colors.empresas } }}
          >
            <BarChart data={companyData}>
              <XAxis dataKey="name" />
              <YAxis label={isMobile ? undefined : {
                value: 'Porcentaje (%)',
                angle: -90,
                position: 'insideLeft'
              }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value">
                {companyData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          <strong>{largeCompanies}%</strong> de las denuncias provienen de grandes empresas (más de 200 trabajadores)
        </p>
      </CardContent>
    </Card>
  );
};

export default CompanySizeChart;
