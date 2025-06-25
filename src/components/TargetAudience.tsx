import React from 'react';
import { MessageCircle, TrendingUp } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const schools = [
    'Garden Int\'l School',
    'ISKL',
    'BSKL',
    'Mont\'Kiara Int\'l',
    'Fairview Int\'l',
    'Alice Smith School',
    'Sri KDU',
    'Tenby Schools'
  ];

  const parentPersona = {
    title: 'Primary Persona: The Parent',
    subtitle: 'The "Education Project Manager" for their child\'s future.',
    demographics: 'Age 35-55, high-income (T20), lives in affluent KL suburbs (e.g., Mont Kiara, Bangsar).',
    motivations: 'Secure top grades (A/A*) for entry into elite universities; persuaded by results and expert qualifications.',
    painPoints: 'Fears child is falling behind; time-poor due to career; frustrated with one-size-fits-all schooling.',
    digitalHabits: 'Researches on Facebook, WhatsApp, and education portals like EduAdvisor. Trusts parent-to-parent referrals.',
    insight: 'The lowest-friction Call-to-Action for parents is "Chat on WhatsApp". This should be the primary conversion point.',
    insightColor: 'green'
  };

  const studentPersona = {
    title: 'Secondary Persona: The Student',
    subtitle: 'The tech-savvy learner seeking support and stress reduction.',
    demographics: 'Age 13-18, enrolled in an international school in KL.',
    motivations: 'Reduce academic stress and anxiety, learn at their own pace, and understand difficult concepts more easily.',
    painPoints: 'Targeted help with difficult topics, effective exam strategies, and engaging teaching methods.',
    digitalHabits: 'Immersed in TikTok, Instagram, and YouTube for social connection and informal learning.',
    insight: 'Reach students with valuable, snackable video content on TikTok & Instagram Reels (e.g., exam tips, concept explanations).',
    insightColor: 'blue'
  };

  const PersonaCard: React.FC<{ persona: typeof parentPersona }> = ({ persona }) => (
    <div className="p-6 border border-gray-200 rounded-lg">
      <h3 className="text-xl font-semibold mb-3">{persona.title}</h3>
      <p className="font-medium text-gray-700 mb-4">{persona.subtitle}</p>
      <ul className="space-y-3 text-gray-600 list-disc list-inside">
        <li><strong>Demographics:</strong> {persona.demographics}</li>
        <li><strong>Motivations:</strong> {persona.motivations}</li>
        <li><strong>Pain Points:</strong> {persona.painPoints}</li>
        <li><strong>Digital Habits:</strong> {persona.digitalHabits}</li>
      </ul>
      <div className={`mt-4 p-3 bg-${persona.insightColor}-50 rounded-lg`}>
        <p className={`text-sm text-${persona.insightColor}-800`}>
          <span className="font-bold">Key Insight:</span> {persona.insight}
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Defining the Target Audience</h2>
      <p className="text-gray-600 mb-6">
        Effective marketing requires a deep understanding of the customer. Our strategy targets two distinct but 
        connected personas: the "Aspiration-Driven Parent" who makes the purchasing decision, and the "Self-Motivated 
        Student" who is the end-user. All communications and channel choices are tailored to the unique needs, 
        motivations, and digital behaviors of these two groups.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <PersonaCard persona={parentPersona} />
        <PersonaCard persona={studentPersona} />
      </div>
      
      <h3 className="text-xl font-semibold mt-8 mb-4">Hyper-Local Targeting: Key Feeder Schools in KL</h3>
      <p className="text-gray-600 mb-4">
        Our ad campaigns will be precisely targeted at parents associated with these key international and private 
        schools in Kuala Lumpur.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
        {schools.map((school, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded text-center hover:bg-gray-200 transition-colors duration-200">
            {school}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TargetAudience;