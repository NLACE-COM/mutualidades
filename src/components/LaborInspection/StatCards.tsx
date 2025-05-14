
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, RadialBarChart, RadialBar, Legend } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

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
    mujeres: "#f5a034" // naranja
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

  // Data for the reporter gender radial bar
  const genderData = [{
    name: "Mujeres",
    value: animatedValues.womenReporters,
    fill: colors.mujeres
  }, {
    name: "Hombres",
    value: 100 - animatedValues.womenReporters,
    fill: "#9ca3af"
  } // gray
  ];
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
            <div className="h-64 w-full flex items-center justify-center">
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
                <PieChart margin={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }}>
                  <Pie data={pieData} cx="50%" cy="50%" labelLine={false} outerRadius={80} innerRadius={40} fill="#8884d8" dataKey="value" nameKey="name" label={({
                  name,
                  percent
                }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                    {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </div>
            <div className="flex justify-center items-center gap-4 mt-4">
              {pieData.map((entry, index) => <div key={index} className="flex items-center">
                  <div className="w-3 h-3 mr-1" style={{
                backgroundColor: entry.color
              }}></div>
                  <span className="text-sm">{entry.name}</span>
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
            <div className="h-64 w-full">
              <ChartContainer config={{
              empresas: {
                color: colors.empresas
              }
            }}>
                <BarChart data={companyData} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}>
                  <XAxis dataKey="name" />
                  <YAxis label={{
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

        {/* Gender Distribution Radial Chart */}
        <Card className="border-2 border-azul overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="bg-naranja h-1.5"></div>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-center">Distribución por Género de Denunciantes</h3>
            <div className="h-80 w-full">
              <ChartContainer config={{
              mujeres: {
                color: colors.mujeres
              }
            }}>
                <RadialBarChart innerRadius="30%" outerRadius="85%" data={genderData} startAngle={180} endAngle={0} cx="50%" cy="60%">
                  <RadialBar label={{
                  fill: '#666',
                  position: 'insideStart'
                }} background dataKey="value" />
                  <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" wrapperStyle={{
                  bottom: 0
                }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadialBarChart>
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
