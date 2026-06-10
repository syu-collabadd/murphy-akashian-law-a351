import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-canvas border-b border-divider h-[72px]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-xl md:text-[22px] font-bold text-primary tracking-tight leading-tight">
          Murphy Akashian Law
        </a>

        {/* Desktop nav items */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#practice-areas" className="text-[15px] font-medium text-text-muted hover:text-primary transition-colors">
            Practice Areas
          </a>
          <a href="#attorneys" className="text-[15px] font-medium text-text-muted hover:text-primary transition-colors">
            Attorneys
          </a>
          <a href="#testimonial" className="text-[15px] font-medium text-text-muted hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-[15px] font-medium text-text-muted hover:text-primary transition-colors">
            Contact
          </a>
          <a
            href="tel:+19784596320"
            className="text-[15px] font-semibold text-primary hover:text-primary-light transition-colors"
          >
            (978) 459-6320
          </a>
          <a
            href="#contact"
            className="inline-block bg-primary text-text-on-dark font-sans text-[16px] font-semibold px-8 py-[14px] rounded-md hover:bg-primary-light transition-colors"
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-primary transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-canvas border-b border-divider px-4 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            <a href="#practice-areas" className="text-[15px] font-medium text-text-muted hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Practice Areas</a>
            <a href="#attorneys" className="text-[15px] font-medium text-text-muted hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Attorneys</a>
            <a href="#testimonial" className="text-[15px] font-medium text-text-muted hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="text-[15px] font-medium text-text-muted hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="tel:+19784596320" className="text-[15px] font-semibold text-primary">(978) 459-6320</a>
            <a
              href="#contact"
              className="inline-block w-fit bg-primary text-text-on-dark font-sans text-[16px] font-semibold px-8 py-[14px] rounded-md hover:bg-primary-light transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
