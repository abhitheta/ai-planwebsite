import { useState } from 'react';
import {
  Mail,
  Clock,
  Phone,
  MapPin,
  Send,
  BadgeCheck,
} from 'lucide-react';


const CONTACT_EMAIL = 'contact@ai-planning.io';

const INFO_CARDS: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  title: string;
  sub: string;
}[] = [
  {
    icon: Mail,
    label: 'Email',
    title: CONTACT_EMAIL,
    sub: 'Our team replies within 24 hours',
  },
  {
    icon: Clock,
    label: 'Support Hours',
    title: '24 / 7 Support',
    sub: 'Round-the-clock assistance',
  },
  {
    icon: Phone,
    label: 'Sales Hours',
    title: '9am – 5pm GMT',
    sub: 'Monday to Friday',
  },
  {
    icon: MapPin,
    label: 'Global Presence',
    title: 'Serving clients worldwide',
    sub: 'Europe, North America & beyond',
  },
];

// const INTEREST_OPTIONS = [
//   'Intelligent Operations Assistant',
//   'AI Safety Guardian',
//   'AI Operations Assistant',
//   'AI Procurement Assistant',
//   'AI Maintenance Assistant',
//   'General Inquiry',
// ];

export function Contact() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      <HeroSection />
      <ContactSection />
  
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════════════
function HeroSection() {
  return (
    <section className="relative pt-[112px] sm:pt-[130px] lg:pt-[150px] pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-[900px] mx-auto text-center">
        <p className="text-[12px] font-semibold tracking-[0.28em] uppercase text-[#0066cc] mb-5">
          Get in touch
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight lg:tracking-[-2px] text-[#0f2d52] leading-[1.08] mb-5">
          Let's talk about your operations.
        </h1>
        <p className="text-base sm:text-[17px] leading-[28px] text-[#3B394E] max-w-[640px] mx-auto">
          Ready to transform the way your teams plan, execute, and report? Tell
          us a little about your organization — we'll respond within one
          business day.
        </p>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// CONTACT INFO + FORM
// ═══════════════════════════════════════════════════════════════════════════
function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    // interest: INTEREST_OPTIONS[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* ── LEFT: Contact Information ─────────────────────────────────── */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0f2d52] tracking-[-0.8px] leading-[1.15] mb-3">
            Contact Information
          </h2>
          <p className="text-[15px] leading-[24px] text-[#3B394E] mb-8 max-w-[460px]">
            We're here to help. Reach out to our team and we'll respond as soon
            as possible.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {INFO_CARDS.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-[#e8f0f8] bg-white p-5 shadow-[0_2px_6px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(15,45,82,0.12)] hover:border-[#0066cc]/40 hover:shadow-[0_12px_32px_-16px_rgba(15,45,82,0.25)] transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f0f8] text-[#0066cc] mb-4">
                  <c.icon className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6B6A7C] mb-1.5">
                  {c.label}
                </p>
                {c.label === 'Email' ? (
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="block text-[14px] font-semibold text-[#0f2d52] hover:text-[#0066cc] mb-1 break-all transition-colors"
                  >
                    {c.title}
                  </a>
                ) : (
                  <p className="text-[14px] font-semibold text-[#0f2d52] mb-1">
                    {c.title}
                  </p>
                )}
                <p className="text-[12px] leading-[18px] text-[#6B6A7C]">
                  {c.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Send Us a Message ──────────────────────────────────── */}
        <div className="rounded-[24px] border border-[#e8f0f8] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_-15px_rgba(15,45,82,0.18),0_24px_60px_-30px_rgba(0,102,204,0.18)]">
          {submitted ? (
            <div className="text-center py-10">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#dcf3e4] text-[#1a7a3a]">
                <BadgeCheck className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-[28px] font-bold text-[#0f2d52] mb-2">
                Thank you!
              </h2>
              <p className="text-[15px] text-[#3B394E]">
                We've received your message and will get back to you within one
                business day.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0f2d52] tracking-[-0.6px] leading-[1.2] mb-2">
                Send Us a Message
              </h2>
              <p className="text-[13px] text-[#6B6A7C] mb-6">
                Fields marked <span className="text-[#0066cc]">*</span> are
                required
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    id="name"
                    name="name"
                    label="Full Name"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    required
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    id="company"
                    name="company"
                    label="Company Name"
                    placeholder="Your Company"
                    value={form.company}
                    onChange={handleChange}
                  />
                  <Field
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone Number"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* <div>
                  <label
                    htmlFor="interest"
                    className="block text-[13px] font-semibold text-[#0f2d52] mb-1.5"
                  >
                    I'm interested in <span className="text-[#0066cc]">*</span>
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-lg border border-[#c8d7ea] bg-white px-4 py-2.5 pr-10 text-[14px] text-[#0f2d52] focus:outline-none focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/15 transition"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230f2d52' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                    }}
                  >
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div> */}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[13px] font-semibold text-[#0f2d52] mb-1.5"
                  >
                    Message <span className="text-[#0066cc]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs and how we can help..."
                    className="w-full rounded-lg border border-[#c8d7ea] bg-white px-4 py-2.5 text-[14px] text-[#0f2d52] placeholder:text-[#9aa3b2] focus:outline-none focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/15 transition resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0f2d52] px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(15,45,82,0.55)] hover:bg-[#0066cc] hover:shadow-[0_12px_28px_-8px_rgba(0,102,204,0.65)] transition-all"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SHARED FIELD
// ═══════════════════════════════════════════════════════════════════════════
function Field({
  id,
  name,
  label,
  type = 'text',
  required,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[13px] font-semibold text-[#0f2d52] mb-1.5"
      >
        {label}
        {required && <span className="text-[#0066cc]"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#c8d7ea] bg-white px-4 py-2.5 text-[14px] text-[#0f2d52] placeholder:text-[#9aa3b2] focus:outline-none focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/15 transition"
      />
    </div>
  );
}
