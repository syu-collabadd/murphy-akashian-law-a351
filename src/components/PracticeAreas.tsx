const practiceAreas = [
  {
    title: 'Real Estate',
    services: [
      'Residential & commercial purchases and sales',
      'Title examination and title insurance',
      'Refinancing and home equity lines',
      'Landlord-tenant disputes and evictions',
      'Zoning and land use matters',
    ],
  },
  {
    title: 'Estate Planning',
    services: [
      'Wills and living trusts',
      'Durable powers of attorney',
      'Health care proxies',
      'Estate tax planning',
      'Trust administration',
    ],
  },
  {
    title: 'Family Law',
    services: [
      'Divorce — contested and uncontested',
      'Child custody, visitation, and support',
      'Alimony and division of assets',
      'Prenuptial & postnuptial agreements',
      'Restraining orders (209A), adoptions, guardianships',
    ],
  },
  {
    title: 'Municipal Law',
    services: [
      'Land use and zoning permits',
      'Liquor license applications and renewals',
      'Municipal permitting and appeals',
      'Representation before city boards and commissions',
    ],
  },
  {
    title: 'Personal Injury',
    services: [
      'Automobile accidents',
      'Slip and fall / premises liability',
      'Wrongful death claims',
      'Insurance negotiations and settlements',
      'No fee unless we recover',
    ],
  },
  {
    title: 'Criminal Defense',
    services: [
      'DUI / OUI defense',
      'Assault and battery',
      'Drug offenses — possession and distribution',
      'Theft and property crimes',
      'District Court and Superior Court',
    ],
  },
  {
    title: 'Probate & Estate Administration',
    services: [
      'Probate court proceedings',
      'Estate administration — testate and intestate',
      'Guardianship and conservatorship',
      'Asset distribution to heirs and beneficiaries',
    ],
  },
  {
    title: 'Civil Litigation',
    services: [
      'Contract disputes',
      'Business litigation',
      'Real estate litigation',
      'Employment disputes',
    ],
  },
  {
    title: 'Business & Commercial Law',
    services: [
      'Business formation — LLC, corporation, partnership',
      'Commercial leases',
      'Contract drafting and review',
      'Business purchases and sales',
    ],
  },
];

const icons: Record<string, JSX.Element> = {
  'Real Estate': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  'Estate Planning': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  'Family Law': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  'Municipal Law': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  'Personal Injury': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  'Criminal Defense': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  'Probate & Estate Administration': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  'Civil Litigation': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  ),
  'Business & Commercial Law': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><rect x="9" y="12" width="6" height="4" rx="1" />
    </svg>
  ),
};

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-section px-4 md:px-6 bg-canvas">
      <div className="max-w-[1200px] mx-auto">
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
                {icons[area.title] || null}
              </div>
              <h3 className="font-sans text-h3 text-primary mb-3">
                {area.title}
              </h3>
              <ul className="space-y-2">
                {area.services.map((svc) => (
                  <li key={svc} className="flex items-start gap-2.5 text-[14px] text-text-muted leading-snug">
                    <span className="mt-1 w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                    <span>{svc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
