
import React from 'react';
import TotalCasesCard from './Charts/TotalCasesCard';
import HarassmentTypesChart from './Charts/HarassmentTypesChart';
import CompanySizeChart from './Charts/CompanySizeChart';
import GenderDistributionChart from './Charts/GenderDistributionChart';

interface StatCardsProps {
  animatedValues: {
    cases: number;
    laborHarassment: number;
    sexualHarassment: number;
    largeCompanies: number;
    womenReporters: number;
  };
}

const StatCards: React.FC<StatCardsProps> = ({ animatedValues }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Total Cases Card */}
        <TotalCasesCard cases={animatedValues.cases} />

        {/* Harassment Types Pie Chart */}
        <HarassmentTypesChart 
          laborHarassment={animatedValues.laborHarassment}
          sexualHarassment={animatedValues.sexualHarassment}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Company Size Bar Chart */}
        <CompanySizeChart largeCompanies={animatedValues.largeCompanies} />

        {/* Gender Distribution Pie Chart */}
        <GenderDistributionChart womenReporters={animatedValues.womenReporters} />
      </div>
    </div>
  );
};

export default StatCards;
