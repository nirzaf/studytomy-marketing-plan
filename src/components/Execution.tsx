import React, { useState } from 'react';
import BudgetChart from './charts/BudgetChart';

const Execution: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(1);

  const timeline = [
    {
      month: 1,
      title: 'Foundation Building',
      description: 'Optimize website/SEO, set up social profiles, publish 2 pillar blog posts, and begin community engagement.',
      spend: '~50 AUD'
    },
    {
      month: 2,
      title: 'Initial Paid Campaigns',
      description: 'Launch test "Messages" campaigns on Meta, monitor performance, and systematize testimonial collection.',
      spend: '~200 AUD'
    },
    {
      month: 3,
      title: 'Optimization & Expansion',
      description: 'Scale winning Meta ads and launch a small, targeted Google Search Ads test to compare channel efficiency.',
      spend: '~250 AUD'
    }
  ];

  const kpis = [
    { label: 'Number of', metric: 'Qualified Inquiries' },
    { label: 'Cost Per', metric: 'Inquiry (CPI)' },
    { label: 'Consultation-to-Client', metric: 'Conversion Rate' },
    { label: 'Customer', metric: 'Acquisition Cost (CAC)' }
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Execution Roadmap & Performance Measurement</h2>
      <p className="text-gray-600 mb-6">
        This section translates strategy into a concrete, 90-day action plan. We prioritize foundational work before 
        spending on ads to ensure maximum effectiveness. Success will be measured not by vanity metrics like 'likes', 
        but by hard business metrics like Cost Per Inquiry and Customer Acquisition Cost.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Phased 90-Day Action Plan</h3>
          <div className="relative pl-6 border-l-2 border-gray-200">
            {timeline.map((phase, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="timeline-dot"></div>
                <h4 className="font-bold text-lg">Month {phase.month}: {phase.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{phase.description}</p>
                <p className="text-sm font-medium text-blue-600 mt-2">(Spend: {phase.spend})</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Monthly Budget Allocation (500 AUD)</h3>
          <p className="text-gray-600 mb-4">
            Select a month to see the planned budget breakdown. The focus is on direct-response channels with measurable ROI.
          </p>
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3].map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`btn-secondary ${selectedMonth === month ? 'active' : ''}`}
              >
                Month {month}
              </button>
            ))}
          </div>
          <div className="chart-container h-64 md:h-72">
            <BudgetChart selectedMonth={selectedMonth} />
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mt-8 mb-4">Key Performance Indicators (KPIs)</h3>
      <p className="text-gray-600 mb-6">
        We will ignore vanity metrics and focus exclusively on KPIs that measure business impact and marketing efficiency.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <div key={index} className="p-4 rounded-lg kpi-card shadow-sm text-center hover:shadow-md transition-shadow duration-200">
            <p className="text-gray-500 text-sm">{kpi.label}</p>
            <p className="text-xl font-bold text-gray-800">{kpi.metric}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Execution;