export default function Hero() {
  return (
    <section className="bg-primary text-text-on-dark py-section px-4 md:px-6">
      <div className="max-w-[720px] mx-auto text-center">
        {/* Tagline */}
        <p className="font-serif text-[36px] leading-[1.15] tracking-[-0.5px] font-bold md:text-hero mb-6">
          Providing Sound Legal Representation for Over 42 Years
        </p>

        {/* Description */}
        <p className="text-body-lg text-white/80 mb-10 max-w-[600px] mx-auto">
          A general practice firm serving Greater Lowell, Chelmsford, and Middlesex County, MA.
          Familiar with local judges and Massachusetts law. Free initial consultation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="inline-block bg-accent text-primary font-sans text-[16px] font-semibold px-8 py-[14px] rounded-md hover:bg-accent-hover transition-colors"
          >
            Free Consultation
          </a>
          <a
            href="tel:+19784596320"
            className="inline-block border-[1.5px] border-white/30 text-text-on-dark font-sans text-[16px] font-semibold px-8 py-[14px] rounded-md hover:bg-white/[0.06] transition-colors"
          >
            Call (978) 459-6320
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A44E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span className="text-[14px] font-medium text-white/70">42+ Years</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A44E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-[14px] font-medium text-white/70">Massachusetts Bar</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A44E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <span className="text-[14px] font-medium text-white/70">Free Consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
