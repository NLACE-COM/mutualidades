
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useIsMobile } from "@/hooks/use-mobile";

interface HarassmentTypesChartProps {
  laborHarassment: number;
  sexualHarassment: number;
}

const HarassmentTypesChart: React.FC<HarassmentTypesChartProps> = ({ 
  laborHarassment, 
  sexualHarassment 
}) => {
  const isMobile = useIsMobile();
  
  // Colors for consistent styling
  const colors = {
    acoso_laboral: "#003c4e", // azul
    acoso_sexual: "#f5a034", // naranja
    violencia_trabajo: "#108cb0", // celeste
  };

  // Data for the pie chart
  const pieData = [
    {
      name: "Acoso Laboral",
      value: laborHarassment,
      color: colors.acoso_laboral
    }, 
    {
      name: "Acoso Sexual",
      value: sexualHarassment,
      color: colors.acoso_sexual
    }, 
    {
      name: "Violencia en el Trabajo",
      value: 100 - laborHarassment - sexualHarassment,
      color: colors.violencia_trabajo
    }
  ];

  // Custom label for pie charts to show percentages
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
    
    // On mobile devices, we might want to show smaller text or no text if the slices are small
    if (isMobile && percent < 0.1) return null;
    
    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor="middle" 
        dominantBaseline="central"
        fontSize={isMobile ? 10 : 12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card className="col-span-1 lg:col-span-2 border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="bg-naranja h-1.5"></div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-center">Tipos de Denuncias</h3>
        <div className="relative" style={{ height: "250px" }}>
          <ChartContainer 
            className="w-full h-full"
            config={{
              acoso_laboral: { color: colors.acoso_laboral },
              acoso_sexual: { color: colors.acoso_sexual },
              violencia_trabajo: { color: colors.violencia_trabajo }
            }}
          >
            <PieChart>
              <Pie 
                data={pieData} 
                cx="50%" 
                cy="50%" 
                labelLine={false} 
                outerRadius={isMobile ? 70 : 90} 
                innerRadius={isMobile ? 30 : 40} 
                fill="#8884d8" 
                dataKey="value" 
                nameKey="name" 
                label={renderCustomizedLabel}
              >
                {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </div>
        <div className={`flex ${isMobile ? 'flex-wrap text-xs' : ''} justify-center items-center gap-2 mt-4`}>
          {pieData.map((entry, index) => (
            <div key={index} className="flex items-center">
              <div className="w-3 h-3 mr-1" style={{
                backgroundColor: entry.color
              }}></div>
              <span className={isMobile ? "text-xs" : "text-sm"}>{entry.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HarassmentTypesChart;
