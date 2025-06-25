import React from 'react';

type TabType = 'market' | 'competitors' | 'audience' | 'strategy' | 'execution';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'market', label: 'Market Overview' },
    { id: 'competitors', label: 'Competition' },
    { id: 'audience', label: 'Target Audience' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'execution', label: 'Execution' },
  ] as const;

  const handleTabClick = (tabId: TabType) => {
    onTabChange(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-10 shadow-sm rounded-lg mb-8">
      <div className="flex justify-center border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`text-sm md:text-base py-4 px-3 md:px-6 transition-colors duration-300 ${
              activeTab === tab.id ? 'tab-active' : 'tab-inactive'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;