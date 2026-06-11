const attorneys = [
  {
    name: 'Kevin J. Murphy',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    credentials: [
      'J.D., Suffolk University Law School, 1983',
      'B.A., Boston College, 1974',
      'Massachusetts Bar, 1983',
      'U.S. District Court, District of Massachusetts, 1983',
      'Former City Manager, City of Lowell (2014–2018)',
      'Former State Representative, Massachusetts House (1997–2014)',
      'Past President, Greater Lowell Bar Association (1992–1993)',
    ],
    email: 'kevin@themurphylawoffices.com',
  },
  {
    name: 'Brian T. Akashian',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    credentials: [
      'J.D., Suffolk University Law School, 2004',
      'A.B., College of the Holy Cross, 2001',
      'Massachusetts Bar, 2004',
      'U.S. District Court, District of Massachusetts, 2007',
      'Past President, Greater Lowell Bar Association (2015–2016)',
      'Chairman, City of Lowell License Commission (2007–2014)',
      'Head Hockey Coach, Lowell High School (2014–Present)',
    ],
    email: 'brian@themurphylawoffices.com',
  },
];

export default function Attorneys() {
  return (
    <section id="attorneys" className="py-section px-4 md:px-6 bg-surface">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-caption text-accent uppercase tracking-[0.15em] font-semibold mb-3">
            Our Team
          </p>
          <h2 className="font-serif text-h2 text-primary mb-4">
            Experienced Counsel
          </h2>
          <p className="text-body text-text-muted max-w-[560px] mx-auto">
            Two attorneys with deep roots in the Greater Lowell community and decades of combined experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {attorneys.map((attorney) => (
            <div
              key={attorney.email}
              className="bg-canvas border border-divider rounded-lg p-6 md:p-8 lg:p-10 shadow-card"
            >
              <div className="flex items-start gap-5 mb-6">
                <img
                  src={attorney.photo}
                  alt={attorney.name}
                  className="w-[80px] h-[80px] rounded-full object-cover flex-shrink-0 border-2 border-accent/20"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-serif text-[22px] md:text-[24px] font-semibold text-primary leading-tight mb-1">
                    {attorney.name}
                  </h3>
                  <a
                    href={`mailto:${attorney.email}`}
                    className="text-[14px] text-accent hover:text-accent-hover transition-colors"
                  >
                    {attorney.email}
                  </a>
                </div>
              </div>

              <ul className="space-y-2.5">
                {attorney.credentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-3 text-[15px] text-text">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{cred}</span>
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
