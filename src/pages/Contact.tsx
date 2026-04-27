import { useState } from 'react';
import { Link } from 'react-router';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  FileText,
  Headphones,
  Globe,
  LifeBuoy,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Handshake,
  BadgeCheck,
  RefreshCw,
  XCircle,
  Briefcase,
  Send,
} from 'lucide-react';

const NAV_PILLS: { label: string; href: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { label: 'New Customer', href: '#new-customer', icon: Sparkles },
  { label: 'Existing Customer', href: '#existing-customer', icon: LifeBuoy },
  { label: 'General', href: '#general', icon: MessageSquare },
  { label: 'Offices', href: '#offices', icon: Globe },
];

export function Contact() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      <HeroSection />
      <ContactFormSection />
      {/*
      <NewCustomerSection />
      <ExistingCustomerSection />
      <GeneralInquiriesSection />
      <OfficesSection />
      <FooterCTA />
      */}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════════════
function HeroSection() {
  return (
    <section className="relative pt-[112px] sm:pt-[130px] lg:pt-[150px] pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eff6ff] via-[#f7f9fc] to-white overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,102,204,0.18) 0%, rgba(0,102,204,0.06) 45%, rgba(255,255,255,0) 75%)',
        }}
      />
      <div className="relative max-w-[900px] mx-auto text-center">
        <span className="inline-block px-3 py-1 bg-[#e8f0f8] text-[#0066cc] text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-4">
          Contact Us
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight lg:tracking-[-2px] text-[#0f2d52] leading-[1.05] mb-4">
          Get in touch
        </h1>
        <p className="text-base sm:text-[17px] leading-[28px] text-[#3B394E] max-w-[640px] mx-auto">
          Ready to transform your fuel delivery operations? Let's talk about your needs.
        </p>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// CONTACT FORM
// ═══════════════════════════════════════════════════════════════════════════
function ContactFormSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f7f9fc]">
      <div className="max-w-[720px] mx-auto">
        <div className="rounded-[24px] border border-[#e8f0f8] bg-white p-6 sm:p-10 shadow-[0_10px_30px_-15px_rgba(15,45,82,0.18)]">
          {submitted ? (
            <div className="text-center py-10">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#dcf3e4] text-[#1a7a3a]">
                <BadgeCheck className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-[28px] font-bold text-[#0f2d52] mb-2">
                Thank you!
              </h2>
              <p className="text-[15px] text-[#3B394E]">
                We've received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0f2d52] tracking-[-0.6px] leading-[1.2] mb-2">
                  Send us a message
                </h2>
                <p className="text-[14px] sm:text-[15px] text-[#3B394E]">
                  Fill out the form and our team will reach out to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[13px] font-semibold text-[#0f2d52] mb-1.5"
                    >
                      Full name <span className="text-[#0066cc]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-[#c8d7ea] bg-white px-4 py-2.5 text-[14px] text-[#0f2d52] placeholder:text-[#9aa3b2] focus:outline-none focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/15 transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[13px] font-semibold text-[#0f2d52] mb-1.5"
                    >
                      Email <span className="text-[#0066cc]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-[#c8d7ea] bg-white px-4 py-2.5 text-[14px] text-[#0f2d52] placeholder:text-[#9aa3b2] focus:outline-none focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/15 transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-[13px] font-semibold text-[#0f2d52] mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full rounded-lg border border-[#c8d7ea] bg-white px-4 py-2.5 text-[14px] text-[#0f2d52] placeholder:text-[#9aa3b2] focus:outline-none focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/15 transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[13px] font-semibold text-[#0f2d52] mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className="w-full rounded-lg border border-[#c8d7ea] bg-white px-4 py-2.5 text-[14px] text-[#0f2d52] placeholder:text-[#9aa3b2] focus:outline-none focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/15 transition"
                    />
                  </div>
                </div>

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
                    placeholder="Tell us a little about what you need..."
                    className="w-full rounded-lg border border-[#c8d7ea] bg-white px-4 py-2.5 text-[14px] text-[#0f2d52] placeholder:text-[#9aa3b2] focus:outline-none focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/15 transition resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0066cc] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(0,102,204,0.55)] hover:bg-[#0052a3] hover:shadow-[0_12px_28px_-8px_rgba(0,102,204,0.75)] transition-all"
                  >
                    Send message <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/*
// ═══════════════════════════════════════════════════════════════════════════
// NEW CUSTOMER (commented — content under review)
// ═══════════════════════════════════════════════════════════════════════════
function NewCustomerSection() {
  const cards = [
    {
      icon: BadgeCheck,
      title: 'Looking for a demo or pricing?',
      email: 'sales@ai-planning.io',
    },
    {
      icon: Briefcase,
      title: 'Need help with licenses or plans?',
      email: 'upgrade@ai-planning.io',
    },
    {
      icon: RefreshCw,
      title: 'Renew your subscription',
      email: 'renewal@ai-planning.io',
    },
    {
      icon: XCircle,
      title: 'Cancel your subscription',
      email: 'cancellation@ai-planning.io',
    },
  ];

  return (
    <section id="new-customer" className="scroll-mt-24 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f7f9fc]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          tag="New Customer"
          tagColor="bg-[#dcf3e4] text-[#1a7a3a]"
          title="Start your journey with AI-Planning.io"
          subtitle="From one-on-one demos to simple plan changes — the right team is one email away."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {cards.map((c) => (
            <div
              key={c.email}
              className="group relative rounded-2xl border border-[#e8f0f8] bg-white p-5 hover:border-[#0066cc]/40 hover:shadow-[0_12px_32px_-16px_rgba(15,45,82,0.25)] transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f0f8] text-[#0066cc] mb-4">
                <c.icon className="w-5 h-5" />
              </div>
              <p className="text-[14px] leading-[22px] text-[#0f2d52] font-semibold mb-4 min-h-[44px]">
                {c.title}
              </p>
              <a
                href={`mailto:${c.email}`}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0066cc] hover:underline break-all"
              >
                {c.email} <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
              </a>
            </div>
          ))}
        </div>

        <div className="rounded-[24px] border border-[#e8f0f8] bg-white p-6 sm:p-8 lg:p-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase rounded bg-[#dcf3e4] text-[#1a7a3a] px-2 py-0.5 mb-3">
                Sales · India
              </span>
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0f2d52] leading-[1.2] mb-3">
                Talk to our sales team
              </h3>
              <p className="text-[14px] leading-[22px] text-[#3B394E] max-w-[520px]">
                From questions about pricing to personalized demos, we'd love to connect and help
                get you started.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e8f0f8] bg-[#f7f9fc] p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:pr-6 sm:border-r sm:border-[#e8f0f8]">
                <div className="flex flex-col overflow-hidden rounded shadow-sm">
                  <span className="h-2 w-12 bg-[#ff9933]" />
                  <span className="h-2 w-12 bg-white relative">
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full border border-[#0066cc]" />
                    </span>
                  </span>
                  <span className="h-2 w-12 bg-[#138808]" />
                </div>
                <span className="text-[14px] font-semibold text-[#0f2d52]">India</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <a
                  href="tel:18001031123"
                  className="flex items-center gap-2 text-[14px] font-semibold text-[#0f2d52] hover:text-[#0066cc]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0066cc]" /> 1800 103 1123
                </a>
                <a
                  href="tel:18005723535"
                  className="flex items-center gap-2 text-[14px] font-semibold text-[#0f2d52] hover:text-[#0066cc]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0066cc]" /> 1800 572 3535
                </a>
                <a
                  href="mailto:sales@ai-planning.io"
                  className="flex items-center gap-2 text-[13px] font-medium text-[#0066cc] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" /> sales@ai-planning.io
                </a>
                <div className="flex items-center gap-2 text-[12px] text-[#6B6A7C] mt-1">
                  <Clock className="w-3.5 h-3.5" /> Mon – Fri · 09:30 AM – 7:00 PM IST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// EXISTING CUSTOMER (commented — content under review)
// ═══════════════════════════════════════════════════════════════════════════
function ExistingCustomerSection() {
  return (
    <section id="existing-customer" className="scroll-mt-24 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader
          tag="Existing Customer"
          tagColor="bg-[#ffe8d4] text-[#c4631b]"
          title="Already using AI-Planning.io?"
          subtitle="Tap into our help center or raise a ticket — we've got your back."
        />

        <div className="grid md:grid-cols-2 gap-5 lg:gap-7">
          <div className="rounded-[24px] border border-[#e8f0f8] bg-white p-6 sm:p-8 hover:shadow-[0_20px_40px_-20px_rgba(15,45,82,0.2)] transition-shadow">
            <div className="relative h-[180px] rounded-2xl bg-gradient-to-br from-[#eff6ff] via-white to-[#e8f0f8] flex items-center justify-center mb-6 overflow-hidden">
              <svg viewBox="0 0 200 160" className="w-44 h-auto" aria-hidden>
                <circle cx="60" cy="85" r="22" fill="#f4bb3a" />
                <path d="M38,107 Q60,96 82,107 L82,130 L38,130 Z" fill="#f4bb3a" />
                <circle cx="60" cy="79" r="9" fill="#f7d07a" />
                <rect x="98" y="60" width="90" height="40" rx="8" fill="#fff" stroke="#c8d7ea" strokeWidth="1.5" />
                <rect x="106" y="68" width="50" height="4" rx="2" fill="#c8d7ea" />
                <rect x="106" y="76" width="70" height="4" rx="2" fill="#e8f0f8" />
                <rect x="106" y="84" width="40" height="4" rx="2" fill="#e8f0f8" />
                <path d="M98,88 L92,100 L106,92 Z" fill="#fff" stroke="#c8d7ea" strokeWidth="1.5" />
                <path d="M30,140 Q100,155 180,135" stroke="#2ba868" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0f2d52] leading-[1.25] mb-3">
              Visit our help forum for technical support
            </h3>
            <p className="text-[13.5px] leading-[22px] text-[#3B394E] mb-6">
              Browse through our help docs, videos, and tutorials, or engage with experts from the
              AI-Planning.io support community.
            </p>

            <button className="inline-flex items-center gap-2 rounded-md border border-[#0066cc] bg-white px-4 py-2.5 text-[11.5px] font-bold tracking-[0.1em] uppercase text-[#0066cc] hover:bg-[#0066cc] hover:text-white transition-colors">
              Take me to the help center <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="rounded-[24px] border border-[#e8f0f8] bg-white p-6 sm:p-8 hover:shadow-[0_20px_40px_-20px_rgba(15,45,82,0.2)] transition-shadow">
            <div className="relative h-[180px] rounded-2xl bg-gradient-to-br from-[#eff6ff] via-white to-[#e8f0f8] flex items-center justify-center mb-6 overflow-hidden">
              <svg viewBox="0 0 200 160" className="w-40 h-auto" aria-hidden>
                <circle cx="100" cy="70" r="28" fill="#4fa3ff" />
                <rect x="92" y="58" width="16" height="26" fill="#fff" />
                <circle cx="100" cy="82" r="3" fill="#4fa3ff" />
                <path d="M115,75 L140,100 L128,108 Z" fill="#f4bb3a" />
                <path d="M115,75 L140,90 L140,100 Z" fill="#f7d07a" />
                <path d="M40,125 Q100,140 160,118" stroke="#c8d7ea" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0f2d52] leading-[1.25] mb-3">
              Can't find what you're looking for?
            </h3>
            <p className="text-[13.5px] leading-[22px] text-[#3B394E] mb-6">
              Raise a ticket and detail what you need help with. Our support team will be happy to
              lend a helping hand.
            </p>

            <button className="inline-flex items-center gap-2 rounded-md border border-[#0066cc] bg-white px-4 py-2.5 text-[11.5px] font-bold tracking-[0.1em] uppercase text-[#0066cc] hover:bg-[#0066cc] hover:text-white transition-colors">
              Submit a request <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// GENERAL INQUIRIES (commented — content under review)
// ═══════════════════════════════════════════════════════════════════════════
function GeneralInquiriesSection() {
  const relations = [
    {
      icon: MessageSquare,
      title: 'Public Relations',
      contact: { label: 'press@ai-planning.io', href: 'mailto:press@ai-planning.io' },
      person: 'Sarah Mitchell',
      personEmail: 'sarah.mitchell@ai-planning.io',
    },
    {
      icon: FileText,
      title: 'Analyst Relations',
      contact: { label: '+1-925-924-9500', href: 'tel:+19259249500' },
      person: 'David Chen',
      personEmail: 'david.chen@ai-planning.io',
    },
    {
      icon: Headphones,
      title: 'Customer Relations',
      contact: null,
      person: 'Peter S. Balaji',
      personEmail: 'peter.balaji@ai-planning.io',
    },
  ];

  return (
    <section
      id="general"
      className="scroll-mt-24 relative bg-gradient-to-b from-[#0066cc] via-[#0066cc] to-[#0052a3] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 80% 20%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 70%)',
        }}
      />
      <div className="relative max-w-[1100px] mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-4">
            General Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-1px] text-white leading-[1.1] mb-3">
            Want to get in touch?
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#c8d7ea]">Drop us a line — we're listening.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {relations.map((r) => (
            <div
              key={r.title}
              className="group relative bg-white rounded-[20px] p-6 sm:p-7 text-center ring-1 ring-white/0 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)] hover:-translate-y-1.5 hover:shadow-[0_30px_50px_-15px_rgba(0,0,0,0.35)] hover:ring-white/40 transition-all duration-300 ease-out overflow-hidden"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-1 h-24 bg-gradient-to-b from-[#4fa3ff]/0 to-transparent group-hover:from-[#4fa3ff]/20 transition-all duration-500"
              />

              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f0f8] text-[#0066cc] mb-4 ring-4 ring-[#f7f9fc] group-hover:bg-[#0066cc] group-hover:text-white group-hover:scale-110 group-hover:rotate-[-4deg] transition-all duration-300 ease-out">
                <r.icon className="w-6 h-6" />
              </div>
              <h3 className="relative text-[18px] font-bold text-[#0f2d52] mb-2 group-hover:text-[#0066cc] transition-colors">
                {r.title}
              </h3>
              {r.contact ? (
                <a
                  href={r.contact.href}
                  className="relative inline-flex items-center gap-1 text-[13px] font-semibold text-[#0066cc] mb-4 group/link"
                >
                  <span className="bg-[linear-gradient(#0066cc,#0066cc)] bg-[length:0%_1.5px] bg-no-repeat bg-[position:0_100%] group-hover/link:bg-[length:100%_1.5px] transition-[background-size] duration-300">
                    {r.contact.label}
                  </span>
                </a>
              ) : (
                <div className="h-[22px] mb-4" />
              )}
              <div className="relative pt-4 border-t border-[#e8f0f8] group-hover:border-[#c8d7ea] transition-colors">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#6B6A7C] mb-1">
                  Point of contact
                </p>
                <p className="text-[14px] font-semibold text-[#0f2d52] mb-1">{r.person}</p>
                <a
                  href={`mailto:${r.personEmail}`}
                  className="inline-flex items-center gap-1 text-[12px] text-[#0066cc] hover:underline break-all"
                >
                  <Mail className="w-3 h-3 flex-shrink-0" />
                  {r.personEmail}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="group relative bg-white rounded-[20px] p-6 sm:p-8 lg:p-10 overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_50px_-15px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300 ease-out">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-gradient-to-tr from-[#4fa3ff]/10 via-[#f4bb3a]/5 to-transparent group-hover:from-[#4fa3ff]/20 transition-all duration-500"
          />
          <div className="relative grid sm:grid-cols-[1fr_200px] gap-6 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#e8f0f8] to-[#dbeafe] text-[#0066cc] ring-4 ring-[#f7f9fc] group-hover:from-[#0066cc] group-hover:to-[#003d7a] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Handshake className="w-5 h-5" />
                </span>
                <h3 className="text-[22px] sm:text-[24px] font-bold text-[#0f2d52] group-hover:text-[#0066cc] transition-colors">
                  Partnership Opportunities
                </h3>
              </div>
              <p className="text-[14px] leading-[22px] text-[#3B394E] mb-5 max-w-[520px]">
                Interested in partnering with AI-Planning.io? We'd love to explore collaboration
                opportunities with your organization.
              </p>
              <a
                href="mailto:partnerships@ai-planning.io"
                className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(0,102,204,0.55)] hover:bg-[#0052a3] hover:shadow-[0_12px_28px_-8px_rgba(0,102,204,0.75)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                partnerships@ai-planning.io
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="hidden sm:flex justify-center items-center h-[120px]">
              <svg viewBox="0 0 160 120" className="w-32 h-auto" aria-hidden>
                <circle cx="40" cy="30" r="16" fill="#4fa3ff" />
                <circle cx="120" cy="30" r="16" fill="#f4bb3a" />
                <circle cx="80" cy="85" r="6" fill="#2ba868" />
                <line x1="40" y1="46" x2="80" y2="85" stroke="#4fa3ff" strokeWidth="2.5" />
                <line x1="120" y1="46" x2="80" y2="85" stroke="#f4bb3a" strokeWidth="2.5" />
                <line x1="40" y1="46" x2="40" y2="100" stroke="#4fa3ff" strokeWidth="1.5" strokeDasharray="3,3" />
                <line x1="120" y1="46" x2="120" y2="100" stroke="#f4bb3a" strokeWidth="1.5" strokeDasharray="3,3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// OFFICES (commented — content under review)
// ═══════════════════════════════════════════════════════════════════════════
type Region = 'na' | 'eu' | 'apac';

interface Office {
  city: string;
  address: string;
  phone: string;
  email: string;
  region: Region;
  flag: string;
}

const OFFICES: Office[] = [
  {
    city: 'San Francisco',
    address: '123 Innovation Drive, CA',
    phone: '+1 (800) 555-PLAN',
    email: 'sales-us@ai-planning.io',
    region: 'na',
    flag: '🇺🇸',
  },
  {
    city: 'New York',
    address: '456 Business Plaza, NY',
    phone: '+1 (800) 555-EAST',
    email: 'sales-ny@ai-planning.io',
    region: 'na',
    flag: '🇺🇸',
  },
  {
    city: 'London',
    address: '789 Tech Square, UK',
    phone: '+44 20 7123 4567',
    email: 'sales-uk@ai-planning.io',
    region: 'eu',
    flag: '🇬🇧',
  },
  {
    city: 'Berlin',
    address: 'Alexanderplatz 10, Germany',
    phone: '+49 30 1234 5678',
    email: 'sales-de@ai-planning.io',
    region: 'eu',
    flag: '🇩🇪',
  },
  {
    city: 'Singapore',
    address: '321 Marina Boulevard',
    phone: '+65 6123 4567',
    email: 'sales-sg@ai-planning.io',
    region: 'apac',
    flag: '🇸🇬',
  },
  {
    city: 'Mumbai',
    address: 'BKC Tower, India',
    phone: '+91 22 1234 5678',
    email: 'sales-in@ai-planning.io',
    region: 'apac',
    flag: '🇮🇳',
  },
];

function OfficesSection() {
  const [region, setRegion] = useState<Region | 'all'>('all');
  const filtered = region === 'all' ? OFFICES : OFFICES.filter((o) => o.region === region);

  return (
    <section id="offices" className="scroll-mt-24 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f7f9fc]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white ring-4 ring-[#e8f0f8] shadow-sm">
            <Globe className="w-6 h-6 text-[#0066cc]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0f2d52] tracking-[-1px] leading-[1.15] mb-3">
            Our offices around the world
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[22px] text-[#3B394E] max-w-[520px] mx-auto">
            Connect with one of our global offices — or feel free to just send us a nifty postcard.
            We won't mind.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
          {[
            { key: 'all', label: 'All regions' },
            { key: 'na', label: 'North America' },
            { key: 'eu', label: 'Europe' },
            { key: 'apac', label: 'Asia-Pacific' },
          ].map((r) => {
            const active = region === r.key;
            return (
              <button
                key={r.key}
                onClick={() => setRegion(r.key as Region | 'all')}
                className={`rounded-full px-5 py-2 text-[13px] font-medium transition-colors border ${
                  active
                    ? 'bg-[#0066cc] text-white border-[#0066cc]'
                    : 'bg-white text-[#0f2d52] border-[#c8d7ea] hover:border-[#0066cc] hover:text-[#0066cc]'
                }`}
              >
                {r.label}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((o) => (
            <div
              key={o.city}
              className="rounded-[14px] border border-[#e8f0f8] bg-white p-5 hover:border-[#0066cc]/40 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8f0f8] text-base">
                  {o.flag}
                </span>
                <h3 className="text-[17px] font-bold text-[#0f2d52]">{o.city}</h3>
              </div>
              <p className="flex items-start gap-2 text-[13px] leading-[20px] text-[#3B394E] mb-3">
                <MapPin className="w-3.5 h-3.5 text-[#0066cc] mt-0.5 flex-shrink-0" />
                <span>{o.address}</span>
              </p>
              <div className="space-y-1.5">
                <a
                  href={`tel:${o.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-[12.5px] text-[#0066cc] hover:underline"
                >
                  <Phone className="w-3 h-3" /> {o.phone}
                </a>
                <a
                  href={`mailto:${o.email}`}
                  className="flex items-center gap-2 text-[12.5px] text-[#0066cc] hover:underline break-all"
                >
                  <Mail className="w-3 h-3" /> {o.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// FOOTER CTA (commented — content under review)
// ═══════════════════════════════════════════════════════════════════════════
function FooterCTA() {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-[-0.8px] text-[#0f2d52] leading-[1.2] mb-3">
          Ready to optimize your fuel delivery operations?
        </h2>
        <p className="text-[15px] text-[#3B394E] mb-8">
          Join hundreds of companies using AI-Planning.io to transform logistics.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/platform"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0066cc] px-7 py-3 text-[14px] font-medium text-white hover:bg-[#0052a3] transition-colors min-w-[160px]"
          >
            View Pricing <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center rounded-full border border-[#c8d7ea] bg-white px-7 py-3 text-[14px] font-medium text-[#0f2d52] hover:bg-[#e8f0f8] transition-colors min-w-[160px]"
          >
            Explore Platform
          </Link>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SHARED
// ═══════════════════════════════════════════════════════════════════════════
function SectionHeader({
  tag,
  tagColor,
  title,
  subtitle,
}: {
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center mb-10 sm:mb-12">
      <span
        className={`inline-block text-[10px] font-bold tracking-[0.2em] uppercase rounded-full px-3 py-1 mb-4 ${tagColor}`}
      >
        {tag}
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-[-0.8px] text-[#0f2d52] leading-[1.2] mb-3">
        {title}
      </h2>
      <p className="text-[14px] sm:text-[15px] leading-[22px] text-[#3B394E] max-w-[580px] mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
*/
