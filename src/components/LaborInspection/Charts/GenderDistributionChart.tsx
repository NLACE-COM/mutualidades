
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Legend, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useIsMobile } from "@/hooks/use-mobile";

interface GenderDistributionChartProps {
  womenReporters: number;
}

const GenderDistributionChart: React.FC<GenderDistributionChartProps> = ({ womenReporters }) => {
  const isMobile = useIsMobile();
  
  // Colors for consistent styling
  const colors = {
    mujeres: "#f5a034", // naranja
    hombres: "#9ca3af" // gray
  };

  // Data for the gender distribution pie chart
  const genderData = [
    {
      name: "Mujeres",
      value: womenReporters,
      fill: colors.mujeres
    }, 
    {
      name: "Hombres",
      value: 100 - womenReporters,
      fill: colors.hombres
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
    <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="bg-naranja h-1.5"></div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-center">Distribución por Género de Denunciantes</h3>
        <div className="relative" style={{ height: "250px" }}>
          <ChartContainer
            className="w-full h-full" 
            config={{
              mujeres: { color: colors.mujeres },
              hombres: { color: colors.hombres }
            }}
          >
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={isMobile ? 70 : 90}
                innerRadius={isMobile ? 30 : 40}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={renderCustomizedLabel}
                startAngle={0}
                endAngle={360}
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Legend 
                iconSize={10} 
                layout="horizontal" 
                verticalAlign="bottom" 
                wrapperStyle={{
                  bottom: 0,
                  padding: '10px 0',
                  fontSize: isMobile ? '10px' : 'inherit'
                }} 
              />
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          <strong>+{womenReporters}%</strong> de las personas denunciantes son mujeres
        </p>
      </CardContent>
    </Card>
  );
};

export default GenderDistributionChart;
