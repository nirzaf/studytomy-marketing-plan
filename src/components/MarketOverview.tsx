import React from 'react';
import MarketSegmentsChart from './charts/MarketSegmentsChart';
import { TrendingUp, Globe, Users } from 'lucide-react';

const MarketOverview: React.FC = () => {
  const kpiData = [
    { value: '15.6%', label: 'APAC Online Tutoring CAGR (2023-29)', icon: TrendingUp, color: 'blue' },
    { value: '$2.1B', label: 'Projected Malaysia Market Size by 2028', icon: Globe, color: 'green' },
    { value: '>97%', label: 'Internet Penetration in Malaysia', icon: Users, color: 'indigo' },
  ];

  const demandDrivers = [
    {
      title: 'Intense Academic Competition',
      description: 'High-stakes exams (IGCSE, A-Levels) are critical for university admission, driving parents to seek a competitive edge for their children.',
    },
    {
      title: 'Need for Personalization & Flexibility',
      description: 'Parents and students seek one-on-one attention and flexible scheduling that traditional schools cannot offer.',
    },
    {
      title: 'Digital Shift & Government Support',
      description: 'Pro-digital government policies and the normalization of online learning post-pandemic have solidified online tutoring as a mainstream choice.',
    },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">The Malaysian Tutoring Market: A Sector Primed for Growth</h2>
      <p className="text-gray-600 mb-6">
        This section provides a data-driven overview of the Malaysian online tutoring market. The key takeaway is that 
        Studytomy is entering a large, validated, and rapidly growing market. This strong demand is not a temporary trend 
        but a sustained shift in the educational landscape, fueled by intense academic competition and widespread digital adoption.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className={`p-4 bg-${kpi.color}-50 rounded-lg text-center hover:shadow-md transition-shadow duration-200`}>
              <div className="flex justify-center mb-2">
                <Icon className={`w-6 h-6 text-${kpi.color}-600`} />
              </div>
              <p className={`text-3xl font-bold text-${kpi.color}-600`}>{kpi.value}</p>
              <p className="text-gray-600 text-sm mt-1">{kpi.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h3 className="text-xl font-semibold mb-4">Market Demand Drivers</h3>
          <p className="text-gray-600 mb-6">
            Several powerful, long-term forces propel the market, ensuring sustainable demand. These drivers validate 
            Studytomy's core business model and value proposition.
          </p>
          <div className="space-y-4">
            {demandDrivers.map((driver, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                <h4 className="font-semibold mb-2">{driver.title}</h4>
                <p className="text-sm text-gray-600">{driver.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Dominant Market Segments</h3>
          <div className="chart-container h-80 md:h-96">
            <MarketSegmentsChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;