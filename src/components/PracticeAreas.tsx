const practiceAreas = [
  {
    title: 'Real Estate',
    description: 'Residential and commercial real estate transactions, title review, and closing representation.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Estate Planning',
    description: 'Wills, trusts, and comprehensive estate plans to protect your family and assets for generations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: 'Family Law',
    description: 'Divorce, child custody, prenuptial agreements, and family law matters handled with care.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Municipal Law',
    description: 'Land use, zoning, liquor licenses, and representation before local boards and commissions.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <polyline points="6 8 6 8 10 12 14 8 18 12" />
      </svg>
    ),
  },
  {
    title: 'Personal Injury',
    description: 'Auto accidents, slip and fall, and injury claims. We fight for the compensation you deserve.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Criminal Defense',
    description: 'DUI, assault and battery, and criminal charges. Aggressive defense from experienced counsel.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Probate & Estate Administration',
    description: 'Guiding families through probate court and estate settlement with clarity and efficiency.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
        <rect x="12" y="12" width="6" height="3" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Civil Litigation',
    description: 'Contract disputes, business disagreements, and civil matters tried before Massachusetts courts.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="4" y1="4" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Business & Commercial Law',
    description: 'Entity formation, contracts, commercial transactions, and business counsel for local enterprises.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <rect x="9" y="12" width="6" height="4" rx="1" />
      </svg>
    ),
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-section px-4 md:px-6 bg-canvas">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-caption text-accent uppercase tracking-[0.15em] font-semibold mb-3">
            Practice Areas
          </p>
          <h2 className="font-serif text-h2 text-primary mb-4">
            Comprehensive Legal Services
          </h2>
          <p className="text-body text-text-muted max-w-[560px] mx-auto">
            Nine practice areas serving individuals, families, and businesses throughout Middlesex County.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group bg-surface border border-border rounded-md p-6 md:p-8 hover:shadow-elevated hover:border-primary-light transition-all duration-300"
            >
              <div className="text-accent mb-4">
                {area.icon}
              </div>
              <h3 className="font-sans text-h3 text-primary mb-2">
                {area.title}
              </h3>
              <p className="text-[15px] text-text-muted leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
