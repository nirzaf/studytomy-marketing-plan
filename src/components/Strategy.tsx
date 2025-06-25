import React from 'react';
import { Globe, Users, MessageSquare } from 'lucide-react';

const Strategy: React.FC = () => {
  const foundationalAssets = [
    {
      title: 'Website & SEO Optimization',
      description: 'Optimize homepage with a clear USP, testimonials, and a "Chat on WhatsApp" CTA. Create hyper-local service pages (e.g., "IGCSE Biology Tutor Mont Kiara").',
      icon: Globe
    },
    {
      title: 'Expert Tutor Profiles',
      description: 'Build trust with detailed profiles showcasing each tutor\'s qualifications, experience, and teaching philosophy.',
      icon: Users
    },
    {
      title: 'Content Marketing',
      description: 'Develop "pillar" blog posts addressing parent/student pain points to build authority and attract organic traffic. (e.g., "Guide to Choosing an IGCSE Tutor in KL").',
      icon: MessageSquare
    }
  ];

  const leadGenChannels = [
    {
      title: 'Precision-Targeted Meta Ads',
      description: 'Run "Messages" campaigns on Facebook/Instagram targeting parents in affluent KL postcodes with interests in specific international schools.',
    },
    {
      title: 'Digital Community Engagement',
      description: 'Become a trusted authority by providing genuine help and advice in KL parent Facebook groups, not by spamming.',
    },
    {
      title: 'Systematized Referrals',
      description: 'Launch a simple referral program ("Refer a friend, get one lesson free") to turn happy clients into brand advocates.',
    }
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">The High-ROI Marketing Blueprint</h2>
      <p className="text-gray-600 mb-6">
        With a modest budget of 500 AUD/month, our strategy is "digital spearfishing," not "net casting." We will 
        focus on hyper-targeted, high-efficiency activities that generate measurable leads. The plan prioritizes 
        building a trustworthy digital foundation before scaling paid advertising.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Foundational Assets (Highest ROI)</h3>
          <div className="space-y-4">
            {foundationalAssets.map((asset, index) => {
              const Icon = asset.icon;
              return (
                <div key={index} className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                  <div className="flex items-start space-x-3">
                    <Icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-900">{asset.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{asset.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Lead Generation Channels</h3>
          <div className="space-y-4">
            {leadGenChannels.map((channel, index) => (
              <div key={index} className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                <h4 className="font-semibold text-green-900">{channel.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;