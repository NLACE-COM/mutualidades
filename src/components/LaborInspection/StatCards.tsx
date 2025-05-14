
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Legend } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useIsMobile } from "@/hooks/use-mobile";

interface StatCardsProps {
  animatedValues: {
    cases: number;
    laborHarassment: number;
    sexualHarassment: number;
    largeCompanies: number;
    womenReporters: number;
  };
}

const StatCards: React.FC<StatCardsProps> = ({
  animatedValues
}) => {
  // Check if device is mobile
  const isMobile = useIsMobile();
  
  // Colors for consistent styling across charts
  const colors = {
    acoso_laboral: "#003c4e",
    // azul
    acoso_sexual: "#f5a034",
    // naranja
    violencia_trabajo: "#108cb0",
    // celeste
    empresas: "#108cb0",
    // celeste
    mujeres: "#f5a034", // naranja
    hombres: "#9ca3af" // gray
  };

  // Data for the pie chart
  const pieData = [{
    name: "Acoso Laboral",
    value: animatedValues.laborHarassment,
    color: colors.acoso_laboral
  }, {
    name: "Acoso Sexual",
    value: animatedValues.sexualHarassment,
    color: colors.acoso_sexual
  }, {
    name: "Violencia en el Trabajo",
    value: 100 - animatedValues.laborHarassment - animatedValues.sexualHarassment,
    color: colors.violencia_trabajo
  }];

  // Data for the company size bar chart
  const companyData = [{
    name: "Grandes",
    value: animatedValues.largeCompanies,
    color: colors.empresas
  }, {
    name: "Otras",
    value: 100 - animatedValues.largeCompanies,
    color: "#9ca3af"
  } // gray
  ];

  // Data for the gender distribution pie chart
  const genderData = [{
    name: "Mujeres",
    value: animatedValues.womenReporters,
    fill: colors.mujeres
  }, {
    name: "Hombres",
    value: 100 - animatedValues.womenReporters,
    fill: colors.hombres
  }];
  
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

  // Adjust chart dimensions based on device
  const chartHeight = isMobile ? 180 : 256; // h-64 = 256px, h-48 = 192px (reduced for mobile)
  const genderChartHeight = isMobile ? 200 : 320; // h-80 = 320px
  const pieOuterRadius = isMobile ? 70 : 100;
  const pieInnerRadius = isMobile ? 30 : 40;
  const legendVerticalAlign = isMobile ? "bottom" : "bottom";

  return <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Total Cases Card */}
        <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center">
          <div className="bg-azul h-1.5"></div>
          <CardContent className="p-6">
            <div className="text-5xl font-bold mb-3 text-azul flex items-center justify-center">
              <span className="counter-animation">{animatedValues.cases}</span>
            </div>
            <p className="text-center text-lg font-medium">Denuncias ingresadas bajo la Ley Karin</p>
            
          </CardContent>
        </Card>

        {/* Harassment Types Pie Chart */}
        <Card className="col-span-1 lg:col-span-2 border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="bg-naranja h-1.5"></div>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-center">Tipos de Denuncias</h3>
            <div className="h-[200px] md:h-[256px] w-full flex items-center justify-center" style={{ minHeight: isMobile ? "200px" : "256px" }}>
              <ChartContainer config={{
                acoso_laboral: {
                  color: colors.acoso_laboral
                },
                acoso_sexual: {
                  color: colors.acoso_sexual
                },
                violencia_trabajo: {
                  color: colors.violencia_trabajo
                }
              }}>
                <PieChart width={isMobile ? 250 : 400} height={isMobile ? 180 : 220} margin={{
                  top: 10,
                  right: isMobile ? 5 : 10,
                  bottom: isMobile ? 5 : 10,
                  left: isMobile ? 5 : 10
                }}>
                  <Pie 
                    data={pieData} 
                    cx="50%" 
                    cy="50%" 
                    labelLine={false} 
                    outerRadius={pieOuterRadius} 
                    innerRadius={pieInnerRadius} 
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
              {pieData.map((entry, index) => <div key={index} className="flex items-center">
                  <div className="w-3 h-3 mr-1" style={{
                backgroundColor: entry.color
              }}></div>
                  <span className={isMobile ? "text-xs" : "text-sm"}>{entry.name}</span>
                </div>)}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Company Size Bar Chart */}
        <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="bg-celeste h-1.5"></div>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-center">Denuncias por Tamaño de Empresa</h3>
            <div className="w-full h-[180px] md:h-[256px]" style={{ minHeight: isMobile ? "180px" : "256px" }}>
              <ChartContainer config={{
              empresas: {
                color: colors.empresas
              }
            }}>
                <BarChart width={isMobile ? 250 : 400} height={isMobile ? 160 : 200} data={companyData} margin={{
                top: 20,
                right: isMobile ? 20 : 30,
                left: isMobile ? 10 : 20,
                bottom: 5
              }}>
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
              <strong>{animatedValues.largeCompanies}%</strong> de las denuncias provienen de grandes empresas (más de 200 trabajadores)
            </p>
          </CardContent>
        </Card>

        {/* Gender Distribution Pie Chart (replaced RadialBarChart) */}
        <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="bg-naranja h-1.5"></div>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-center">Distribución por Género de Denunciantes</h3>
            <div className="w-full h-[200px] md:h-[320px] flex items-center justify-center" style={{ minHeight: isMobile ? "200px" : "320px" }}>
              <ChartContainer config={{
              mujeres: {
                color: colors.mujeres
              },
              hombres: {
                color: colors.hombres
              }
            }}>
                <PieChart width={isMobile ? 250 : 400} height={isMobile ? 180 : 220} margin={{
                  top: 10,
                  right: 10,
                  bottom: isMobile ? 10 : 30,
                  left: 10
                }}>
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
                    verticalAlign={legendVerticalAlign} 
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
              <strong>+{animatedValues.womenReporters}%</strong> de las personas denunciantes son mujeres
            </p>
          </CardContent>
        </Card>
      </div>
    </div>;
};

export default StatCards;
