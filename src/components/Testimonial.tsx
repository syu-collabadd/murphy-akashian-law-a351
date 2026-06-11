const testimonials = [
  {
    quote: "Kevin Murphy is an excellent lawyer. He treats each client with respect. He has a longstanding reputation as a person who will fight for you.",
    name: 'Kerry A.',
    role: 'Former Client',
    initials: 'KA',
  },
  {
    quote: "Brian Akashian handled our real estate closing with absolute professionalism. He caught issues we never would have seen and got it done on time.",
    name: 'Michael T.',
    role: 'Real Estate Client',
    initials: 'MT',
  },
  {
    quote: "We've trusted Murphy Akashian Law with our family's legal matters for over 20 years. Estate planning, real estate — they've always been there for us.",
    name: 'The Richards Family',
    role: 'Estate Planning Clients',
    initials: 'RF',
  },
];

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-section px-4 md:px-6 bg-canvas">
      <div className="max-w-[960px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-caption text-accent uppercase tracking-[0.15em] font-semibold mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-h2 text-primary mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface border border-divider rounded-lg p-6 md:p-8 shadow-card flex flex-col"
            >
              {/* Gold quote icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="#C8A44E"
                className="mb-4 flex-shrink-0"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-[15px] text-text italic leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-divider">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-[14px] font-semibold text-text-on-dark">{t.initials}</span>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-primary">{t.name}</p>
                  <p className="text-caption text-text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
