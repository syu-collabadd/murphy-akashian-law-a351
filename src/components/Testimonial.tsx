export default function Testimonial() {
  return (
    <section id="testimonial" className="py-section px-4 md:px-6 bg-canvas">
      <div className="max-w-[720px] mx-auto">
        {/* Gold quote mark */}
        <div className="text-center mb-8">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="#C8A44E"
            className="mx-auto mb-6"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote className="text-body-lg text-text italic leading-relaxed mb-6">
            &ldquo;Kevin Murphy is an excellent lawyer. He treats each client with respect.
            He has a longstanding reputation as a person who will fight for you.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="font-serif text-[14px] font-semibold text-text-on-dark">KA</span>
            </div>
            <div className="text-left">
              <p className="text-[15px] font-semibold text-primary">Kerry A.</p>
              <p className="text-caption text-text-muted">Former Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
