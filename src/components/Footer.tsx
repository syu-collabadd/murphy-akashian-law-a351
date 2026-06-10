const practiceLinks = [
  'Real Estate',
  'Estate Planning — Wills & Trusts',
  'Family Law',
  'Municipal Law',
  'Personal Injury',
  'Criminal Defense',
  'Probate & Estate Administration',
  'Civil Litigation',
  'Business & Commercial Law',
];

export default function Footer() {
  return (
    <footer className="bg-primary text-text-on-dark pt-20 pb-10 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Firm info */}
          <div>
            <p className="font-serif text-[22px] font-semibold mb-4">Murphy Akashian Law</p>
            <p className="text-[14px] text-white/60 leading-relaxed mb-4">
              Providing Sound Legal Representation for Over 42 Years. A general practice firm serving
              Greater Lowell, Chelmsford, and Middlesex County, Massachusetts.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.1em] text-white/50 mb-5">
              Contact
            </p>
            <div className="space-y-3 text-[14px] text-white/70">
              <p>
                One Courthouse Lane<br />
                Chelmsford, MA 01824
              </p>
              <p>
                <a href="tel:+19784596320" className="hover:text-white transition-colors">
                  (978) 459-6320
                </a>
              </p>
              <p className="space-y-1">
                <a href="mailto:kevin@themurphylawoffices.com" className="block hover:text-white transition-colors">
                  kevin@themurphylawoffices.com
                </a>
                <a href="mailto:brian@themurphylawoffices.com" className="block hover:text-white transition-colors">
                  brian@themurphylawoffices.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.1em] text-white/50 mb-5">
              Office Hours
            </p>
            <div className="space-y-2 text-[14px] text-white/70">
              <div className="flex justify-between max-w-[200px]">
                <span>Mon – Fri</span>
                <span>8:00am – 5:00pm</span>
              </div>
              <div className="flex justify-between max-w-[200px]">
                <span>Sat – Sun</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.1em] text-white/50 mb-5">
              Practice Areas
            </p>
            <ul className="space-y-2">
              {practiceLinks.map((area) => (
                <li key={area}>
                  <a
                    href="#practice-areas"
                    className="text-[14px] text-white/60 hover:text-white transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} Murphy Akashian Law. All rights reserved.
          </p>
          <p className="text-[13px] text-white/40">
            One Courthouse Lane, Chelmsford, MA 01824
          </p>
        </div>
      </div>
    </footer>
  );
}
