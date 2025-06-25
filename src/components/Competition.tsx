import React, { useState } from 'react';

interface CompetitorData {
  tier: string;
  name: string;
  strengths: string;
  weaknesses: string;
}

const Competition: React.FC = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState<string | null>(null);

  const competitorData: Record<string, CompetitorData> = {
    axiom: {
      tier: 'Tier 1: Premium, Holistic Centre',
      name: 'Axiom Learning',
      strengths: 'Exceptional brand prestige, holistic approach (executive function coaching), powerful testimonials, appeals to aspirational high-net-worth parents.',
      weaknesses: 'Very high price point, making it inaccessible to most. Less flexible due to reliance on physical centers.'
    },
    mypro: {
      tier: 'Tier 2: Specialist Online Provider',
      name: 'MyPro Tutor',
      strengths: 'Clear online-first value prop. Trust-building policies ("No Contract"), free trial, and detailed tutor profiles are highly effective.',
      weaknesses: 'Lacks the prestige of Tier 1. Service quality is dependent on the individual tutor assigned.'
    },
    golearn: {
      tier: 'Tier 3: Marketplace Aggregator',
      name: 'GoLearn / Superprof',
      strengths: 'Massive selection of tutors and subjects, transparent low pricing, and convenience of a one-stop-shop.',
      weaknesses: 'Major lack of quality control and accountability. Parents may feel they are taking a risk on an unvetted individual.'
    }
  };

  const tiers = [
    { name: 'Tier 1: Premium Centres', competitors: ['axiom'], color: 'red' },
    { name: 'Tier 2: Specialist Online', competitors: ['mypro'], color: 'blue' },
    { name: 'Tier 3: Marketplaces', competitors: ['golearn'], color: 'green' }
  ];

  const pricingData = [
    { provider: 'GoLearn / Superprof', tier: 'Tier 3: Marketplace', igcse: '~54 - 70', alevel: '~85 - 90' },
    { provider: 'Studytomy.com (Proposed)', tier: 'Tier 2: Boutique Online', igcse: '100 - 130', alevel: '100 - 130', highlight: true },
    { provider: 'ACE Education / Axiom', tier: 'Tier 1: Premium Centre', igcse: '110 - 250+', alevel: '110 - 250+' }
  ];

  const handleCompetitorClick = (competitorId: string) => {
    setSelectedCompetitor(competitorId);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Competitive Intelligence: The KL Tutoring Landscape</h2>
      <p className="text-gray-600 mb-6">
        The Kuala Lumpur market is a mature ecosystem of providers, from premium physical centres to large digital 
        marketplaces. This analysis reveals a clear market gap for a "boutique online collective" that combines 
        curated, expert-led quality with online flexibility and accessibility. Studytomy's strategy is to occupy 
        this premium-value space.
      </p>

      <div className="space-y-6 mb-8">
        {tiers.map((tier, index) => (
          <div key={index} className={`p-4 border-l-4 border-${tier.color}-500 bg-${tier.color}-50 rounded-r-lg`}>
            <h4 className={`font-semibold text-lg text-${tier.color}-800`}>{tier.name}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {tier.competitors.map((competitorId) => {
                const competitor = competitorData[competitorId];
                return (
                  <button
                    key={competitorId}
                    onClick={() => handleCompetitorClick(competitorId)}
                    className={`competitor-btn ${selectedCompetitor === competitorId ? 'active' : ''}`}
                  >
                    {competitor.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 min-h-[120px]">
        {selectedCompetitor ? (
          <div>
            <h4 className="font-bold text-lg mb-2">
              {competitorData[selectedCompetitor].name}{' '}
              <span className="text-sm font-medium text-gray-500">
                ({competitorData[selectedCompetitor].tier})
              </span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold text-green-700 mb-1">Strengths</h5>
                <p className="text-gray-600">{competitorData[selectedCompetitor].strengths}</p>
              </div>
              <div>
                <h5 className="font-semibold text-red-700 mb-1">Weaknesses</h5>
                <p className="text-gray-600">{competitorData[selectedCompetitor].weaknesses}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">Click on a competitor above to see their details.</p>
        )}
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Hourly Rate Comparison (IGCSE/A-Level)</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-sm">Provider</th>
              <th className="text-left py-3 px-4 font-semibold text-sm">Market Tier</th>
              <th className="text-center py-3 px-4 font-semibold text-sm">IGCSE Rate (MYR/hr)</th>
              <th className="text-center py-3 px-4 font-semibold text-sm">A-Level Rate (MYR/hr)</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((row, index) => (
              <tr key={index} className={`border-b ${row.highlight ? 'bg-blue-50' : ''}`}>
                <td className={`py-3 px-4 ${row.highlight ? 'font-semibold' : ''}`}>{row.provider}</td>
                <td className={`py-3 px-4 ${row.highlight ? 'font-semibold' : ''}`}>{row.tier}</td>
                <td className={`py-3 px-4 text-center ${row.highlight ? 'font-semibold' : ''}`}>{row.igcse}</td>
                <td className={`py-3 px-4 text-center ${row.highlight ? 'font-semibold' : ''}`}>{row.alevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Competition;