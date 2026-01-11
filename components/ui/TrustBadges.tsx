import React from 'react';

export function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: "24hr",
      label: "Response Time"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      value: "50+",
      label: "Expert Advisors"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      value: "10k+",
      label: "Consultations"
    }
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
      {badges.map((badge, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
            {badge.icon}
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{badge.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">{badge.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
