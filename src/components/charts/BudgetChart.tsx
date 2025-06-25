import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface BudgetChartProps {
  selectedMonth: number;
}

const BudgetChart: React.FC<BudgetChartProps> = ({ selectedMonth }) => {
  const budgetData = {
    1: {
      labels: ['Marketing Tools', 'Contingency'],
      data: [20, 30],
      total: 50,
    },
    2: {
      labels: ['Facebook / Instagram Ads', 'Marketing Tools', 'Contingency'],
      data: [200, 20, 30],
      total: 250,
    },
    3: {
      labels: ['Facebook / Instagram Ads', 'Google Search Ads', 'Marketing Tools', 'Contingency'],
      data: [150, 100, 20, 30],
      total: 300,
    },
  };

  const currentData = budgetData[selectedMonth as keyof typeof budgetData];

  const data = {
    labels: currentData.labels,
    datasets: [
      {
        data: currentData.data,
        backgroundColor: [
          'rgba(251, 146, 60, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
        ],
        borderColor: [
          'rgba(251, 146, 60, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(139, 92, 246, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: { size: 10 },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += new Intl.NumberFormat('en-AU', { 
                style: 'currency', 
                currency: 'AUD' 
              }).format(context.raw);
            }
            return label;
          },
        },
      },
      title: {
        display: true,
        text: `Month ${selectedMonth} Spend: ${new Intl.NumberFormat('en-AU', { 
          style: 'currency', 
          currency: 'AUD' 
        }).format(currentData.total)}`,
        font: {
          size: 14,
          weight: 'bold' as const,
        },
      },
    },
    cutout: '50%',
  };

  return <Doughnut data={data} options={options} />;
};

export default BudgetChart;