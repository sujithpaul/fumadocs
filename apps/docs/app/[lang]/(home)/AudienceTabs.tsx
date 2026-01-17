'use client';

import { useState } from 'react';
import {
  Users,
  ClipboardCheck,
  Building2,
  CheckCircle2,
} from 'lucide-react';

const audiences = [
  {
    id: 'owners',
    label: 'Clinic Owners',
    icon: Building2,
    title: 'Grow your practice with confidence',
    description:
      'Get a complete view of your practice performance. Track revenue, monitor therapist productivity, and make data-driven decisions to scale your clinic.',
    features: [
      'Real-time revenue dashboards',
      'Multi-location management',
      'Staff performance insights',
      'Compliance & audit trails',
    ],
  },
  {
    id: 'therapists',
    label: 'Therapists & Educators',
    icon: Users,
    title: 'Focus on therapy, not paperwork',
    description:
      'Spend more time with clients and less time on documentation. Our intuitive tools help you deliver better outcomes while staying organized.',
    features: [
      'Quick SOAP note templates',
      'Goal tracking & progress reports',
      'Assessment library',
      'Mobile-friendly scheduling',
    ],
  },
  {
    id: 'admins',
    label: 'Clinic Admins',
    icon: ClipboardCheck,
    title: 'Streamline daily operations',
    description:
      'Manage scheduling, billing, and client communications from one place. Reduce errors and save hours every week on administrative tasks.',
    features: [
      'Automated appointment reminders',
      'Insurance claim management',
      'Client intake workflows',
      'Billing & invoicing',
    ],
  },
];

export function AudienceTabs() {
  const [activeTab, setActiveTab] = useState('owners');

  const activeAudience = audiences.find((a) => a.id === activeTab) || audiences[0];
  const Icon = activeAudience.icon;

  return (
    <>
      <div className="mint-audience-tabs">
        {audiences.map((audience) => {
          const TabIcon = audience.icon;
          return (
            <button
              key={audience.id}
              className={`mint-audience-tab ${activeTab === audience.id ? 'mint-audience-tab-active' : ''}`}
              onClick={() => setActiveTab(audience.id)}
            >
              <TabIcon className="w-5 h-5" />
              {audience.label}
            </button>
          );
        })}
      </div>

      <div className="mint-audience-content">
        <div className="mint-audience-card">
          <div className="mint-audience-graphic">
            <div className="mint-audience-placeholder">
              <Icon className="w-16 h-16 text-[var(--mint-brand)]" />
              <p>{activeAudience.label} Graphic</p>
            </div>
          </div>
          <div className="mint-audience-info">
            <h3>{activeAudience.title}</h3>
            <p className="mint-audience-desc">{activeAudience.description}</p>
            <ul className="mint-check-list">
              {activeAudience.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 className="w-5 h-5 text-[var(--mint-brand)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
