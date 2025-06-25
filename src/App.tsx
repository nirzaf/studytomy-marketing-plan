import React, { useState } from 'react';
import Navigation from './components/Navigation';
import MarketOverview from './components/MarketOverview';
import Competition from './components/Competition';
import TargetAudience from './components/TargetAudience';
import Strategy from './components/Strategy';
import Execution from './components/Execution';

type TabType = 'market' | 'competitors' | 'audience' | 'strategy' | 'execution';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('market');

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'market':
        return <MarketOverview />;
      case 'competitors':
        return <Competition />;
      case 'audience':
        return <TargetAudience />;
      case 'strategy':
        return <Strategy />;
      case 'execution':
        return <Execution />;
      default:
        return <MarketOverview />;
    }
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#FDFBF8' }}>
      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Studytomy.com Marketing Plan</h1>
          <p className="text-lg text-gray-600 mt-2">Interactive Dashboard for Kuala Lumpur Market Entry</p>
        </header>

        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="animate-fade-in">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
}

export default App;