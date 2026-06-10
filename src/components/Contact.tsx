import { useState, type FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  caseType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  caseType?: string;
  message?: string;
}

const caseTypes = [
  'Real Estate',
  'Estate Planning — Wills & Trusts',
  'Family Law — Divorce, Child Custody, Prenuptial',
  'Municipal Law — Land Use, Liquor Licenses',
  'Personal Injury — Auto Accidents, Slip & Fall',
  'Criminal Defense — DUI, Assault & Battery',
  'Probate & Estate Administration',
  'Civil Litigation',
  'Business & Commercial Law',
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return /^[\d\s()+\-.]{7,}$/.test(phone);
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!validateEmail(form.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!validatePhone(form.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!form.caseType) errs.caseType = 'Please select a case type.';
    if (!form.message.trim()) errs.message = 'Please describe your legal matter.';
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-[14px] text-[16px] text-text bg-canvas border ${
      errors[field] ? 'border-error' : 'border-border'
    } rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary transition-colors font-sans`;

  if (submitted) {
    return (
      <section id="contact" className="py-section px-4 md:px-6 bg-canvas">
        <div className="max-w-[640px] mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="font-serif text-h2 text-primary mb-4">Thank You</h2>
          <p className="text-body text-text-muted">
            Your message has been received. Our office will review your inquiry and respond within one business day.
            If your matter is urgent, please call us at{' '}
            <a href="tel:+19784596320" className="text-primary font-semibold hover:text-primary-light transition-colors">
              (978) 459-6320
            </a>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-section px-4 md:px-6 bg-canvas">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: heading + info */}
          <div>
            <p className="text-caption text-accent uppercase tracking-[0.15em] font-semibold mb-3">
              Contact Us
            </p>
            <h2 className="font-serif text-h2 text-primary mb-4">
              Free Initial Consultation
            </h2>
            <p className="text-body text-text-muted mb-8">
              Tell us about your legal matter. We&rsquo;ll review your situation and let you know how we can help — at no cost for the first conversation.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A44E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-primary">Phone</p>
                  <a href="tel:+19784596320" className="text-[15px] text-text-muted hover:text-primary transition-colors">
                    (978) 459-6320
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A44E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-primary">Email</p>
                  <a href="mailto:kevin@themurphylawoffices.com" className="text-[15px] text-text-muted hover:text-primary transition-colors">
                    kevin@themurphylawoffices.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A44E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-primary">Office</p>
                  <p className="text-[15px] text-text-muted">One Courthouse Lane<br />Chelmsford, MA 01824</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-surface rounded-lg p-6 md:p-8 lg:p-10">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-[14px] font-medium text-text mb-1.5">
                  Full Name <span className="text-error">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={inputClass('name')}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-[13px] text-error mt-1.5">{errors.name}</p>}
              </div>

              {/* Email + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-[14px] font-medium text-text mb-1.5">
                    Email <span className="text-error">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={inputClass('email')}
                    placeholder="you@email.com"
                  />
                  {errors.email && <p className="text-[13px] text-error mt-1.5">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[14px] font-medium text-text mb-1.5">
                    Phone <span className="text-error">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={inputClass('phone')}
                    placeholder="(978) 555-0123"
                  />
                  {errors.phone && <p className="text-[13px] text-error mt-1.5">{errors.phone}</p>}
                </div>
              </div>

              {/* Case type dropdown */}
              <div>
                <label htmlFor="caseType" className="block text-[14px] font-medium text-text mb-1.5">
                  Case Type <span className="text-error">*</span>
                </label>
                <select
                  id="caseType"
                  value={form.caseType}
                  onChange={(e) => handleChange('caseType', e.target.value)}
                  className={inputClass('caseType')}
                >
                  <option value="" disabled>
                    Select a practice area...
                  </option>
                  {caseTypes.map((ct) => (
                    <option key={ct} value={ct}>
                      {ct}
                    </option>
                  ))}
                </select>
                {errors.caseType && <p className="text-[13px] text-error mt-1.5">{errors.caseType}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[14px] font-medium text-text mb-1.5">
                  Tell Us About Your Case <span className="text-error">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={inputClass('message')}
                  placeholder="Briefly describe your legal matter and what you're hoping to achieve..."
                />
                {errors.message && <p className="text-[13px] text-error mt-1.5">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-primary text-text-on-dark font-sans text-[16px] font-semibold px-8 py-[14px] rounded-md hover:bg-primary-light transition-colors"
              >
                Send Message
              </button>

              <p className="text-caption text-text-muted text-center">
                By submitting, you agree to our review of your inquiry. This does not create an attorney-client relationship.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
