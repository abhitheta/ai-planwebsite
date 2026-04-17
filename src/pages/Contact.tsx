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
  Ticket,
  Sparkles,
  Building2,
  CheckCircle2,
  X,
  ArrowRight,
  ArrowUpRight,
  Users,
} from 'lucide-react';
import { FadeInView } from '../components/FadeInView';

type TabKey = 'new' | 'existing' | 'general' | 'offices';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'new', label: "I'm New Here" },
  { key: 'existing', label: 'Existing Customer' },
  { key: 'general', label: 'General Inquiries' },
  { key: 'offices', label: 'Our Offices' },
];

export function Contact() {
  const [tab, setTab] = useState<TabKey>('new');

  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      {/* ── Hero ── */}
      <section className="pt-[112px] sm:pt-[130px] lg:pt-[150px] pb-12 px-4 sm:px-6 lg:px-8 bg-[#f3f4f6] relative">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight lg:tracking-[-2px] text-[#0f2d52] leading-[1.05] mb-4">
            Get in touch
          </h1>
          <p className="text-base sm:text-[17px] leading-[28px] text-[#3B394E]">
            Ready to transform your fuel delivery operations? Let's talk about your needs.
          </p>
        </div>
      </section>

      {/* ── Tab nav ── */}
      <section className="bg-white border-b border-[#e8f0f8] sticky top-[80px] lg:top-[122px] z-40">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-1 sm:gap-6 lg:gap-10 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TABS.map((t) => {
              const active = t.key === tab;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`relative whitespace-nowrap py-4 px-3 sm:px-4 text-[13px] sm:text-[14px] font-medium transition-colors ${
                    active ? 'text-[#0066cc]' : 'text-[#3B394E] hover:text-[#0f2d52]'
                  }`}
                >
                  {t.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 sm:left-4 sm:right-4 h-[2px] bg-[#0066cc]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tab content ── */}
      {tab === 'new' && <NewHereTab />}
      {tab === 'existing' && <ExistingCustomerTab />}
      {tab === 'general' && <GeneralInquiriesTab />}
      {tab === 'offices' && <OfficesTab />}

      {/* ── Footer CTA ── */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f7f9fc]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-[-0.8px] text-[#0f2d52] leading-[1.2] mb-3">
            Ready to optimize your fuel delivery operations?
          </h2>
          <p className="text-[15px] text-[#3B394E] mb-8">
            Join hundreds of companies using AI-Planning.io to transform their logistics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/platform"
              className="inline-flex items-center justify-center rounded-full bg-[#0066cc] px-7 py-3 text-[14px] font-medium text-white hover:bg-[#0052a3] transition-colors min-w-[160px]"
            >
              View Pricing
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

      {/* <WorksWhereverBanner /> */}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// TAB 1 — I'M NEW HERE
// Feel: welcoming, discovery-focused, with a "concierge" featured block
// Layout: 4 quick-contact tiles (varied colors), big concierge panel,
// sales call-out strip with dialpad + flag mini-viz
// ═══════════════════════════════════════════════════════════════════════════
function NewHereTab() {
  const quickContacts = [
    {
      icon: Users,
      tag: "I'M NEW HERE",
      tagColor: 'bg-[#dcf3e4] text-[#1a7a3a]',
      accent: 'text-[#0066cc]',
      title: 'Looking for a demo, or have questions about our products and pricing?',
      email: 'sales@ai-planning.io',
    },
    {
      icon: Building2,
      tag: 'EXISTING CUSTOMER',
      tagColor: 'bg-[#ffe8d4] text-[#c4631b]',
      accent: 'text-[#0066cc]',
      title: 'Need help with adding licenses, changing plans, or additional services?',
      email: 'upgrade@ai-planning.io',
    },
    {
      icon: CheckCircle2,
      tag: '',
      tagColor: '',
      accent: 'text-[#0066cc]',
      title: 'Want to renew your subscription or need details about your current plan?',
      email: 'renewal@ai-planning.io',
    },
    {
      icon: FileText,
      tag: '',
      tagColor: '',
      accent: 'text-[#0066cc]',
      title: 'Need to cancel or downgrade your subscription? We\'re sad to see you go, but ready to help.',
      email: 'cancellation@ai-planning.io',
    },
  ];

  return (
    <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Quick-contact row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {quickContacts.map((q, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-[#e8f0f8] bg-white p-5 hover:border-[#0066cc]/40 hover:shadow-[0_12px_32px_-16px_rgba(15,45,82,0.25)] transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f0f8] text-[#0066cc] mb-4">
                <q.icon className="w-5 h-5" />
              </div>
              {q.tag && (
                <span
                  className={`inline-block text-[10px] font-bold tracking-[0.15em] uppercase rounded px-2 py-0.5 mb-3 ${q.tagColor}`}
                >
                  {q.tag}
                </span>
              )}
              <p className="text-[14px] leading-[22px] text-[#0f2d52] font-medium mb-4 min-h-[66px]">
                {q.title}
              </p>
              <a
                href={`mailto:${q.email}`}
                className={`text-[13px] font-medium ${q.accent} hover:underline break-all`}
              >
                {q.email}
              </a>
            </div>
          ))}
        </div>

        {/* Concierge feature block */}
        <div className="relative rounded-[24px] border border-[#e8f0f8] bg-[#fcfcfc] overflow-hidden mb-6">
          <div className="grid lg:grid-cols-[320px_1fr] gap-0">
            {/* Illustration side */}
            <div className="relative bg-gradient-to-br from-[#eff6ff] via-white to-[#e8f0f8] p-8 min-h-[240px] flex items-center justify-center">
              <svg viewBox="0 0 200 160" className="w-full max-w-[200px] h-auto" aria-hidden>
                {/* Monitor */}
                <rect x="30" y="45" width="80" height="55" rx="4" fill="#fff" stroke="#c8d7ea" strokeWidth="2" />
                <rect x="38" y="55" width="64" height="4" rx="1" fill="#c8d7ea" />
                <rect x="38" y="64" width="40" height="3" rx="1" fill="#e8f0f8" />
                <rect x="38" y="71" width="50" height="3" rx="1" fill="#e8f0f8" />
                <rect x="60" y="100" width="20" height="10" rx="1" fill="#c8d7ea" />
                {/* Person icon */}
                <circle cx="90" cy="70" r="18" fill="#f4bb3a" />
                <path d="M72,88 Q90,78 108,88 L108,95 L72,95 Z" fill="#f4bb3a" />
                <circle cx="90" cy="65" r="7" fill="#f7d07a" />
                {/* Green underline */}
                <path d="M40,130 Q100,150 160,125" stroke="#2ba868" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Person & bubble */}
                <circle cx="140" cy="55" r="12" fill="#4fa3ff" />
                <circle cx="140" cy="50" r="5" fill="#b9d9ff" />
                <rect x="128" y="64" width="24" height="8" rx="2" fill="#4fa3ff" />
                <rect x="158" y="40" width="28" height="20" rx="4" fill="#fff" stroke="#c8d7ea" strokeWidth="1.5" />
                <circle cx="166" cy="50" r="1.5" fill="#c8d7ea" />
                <circle cx="172" cy="50" r="1.5" fill="#c8d7ea" />
                <circle cx="178" cy="50" r="1.5" fill="#c8d7ea" />
              </svg>
            </div>

            {/* Text side */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase rounded bg-[#dcf3e4] text-[#1a7a3a] px-2 py-0.5 mb-3 self-start">
                I'M NEW HERE
              </span>
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0f2d52] leading-[1.2] mb-3">
                Find your way around AI-Planning.io with Concierge
              </h3>
              <p className="text-[14px] leading-[22px] text-[#3B394E] mb-5">
                Not sure which AI-Planning.io product is the right fit for your company? No worries.
                We'll work with you to determine what solutions will best suit your business.
              </p>
              <Link
                to="/platform"
                className="inline-flex items-center gap-2 self-start rounded-md bg-[#0066cc] px-5 py-2.5 text-[12px] font-bold tracking-[0.1em] uppercase text-white hover:bg-[#0052a3] transition-colors"
              >
                Get in touch <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Sales call-out */}
        <div className="rounded-[24px] border border-[#e8f0f8] bg-[#fcfcfc] p-6 sm:p-8 lg:p-10">
          <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase rounded bg-[#dcf3e4] text-[#1a7a3a] px-2 py-0.5 mb-3">
            I'M NEW HERE
          </span>
          <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0f2d52] leading-[1.2] mb-3">
            Interested in a product? Talk to our sales team
          </h3>
          <p className="text-[14px] leading-[22px] text-[#3B394E] mb-6 max-w-[560px]">
            From questions about pricing to one-on-one personalized demos, we'd love to connect and
            help get you started.
          </p>

          <div className="rounded-xl border border-[#e8f0f8] bg-white p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Flag + country */}
            <div className="flex items-center gap-3 pr-6 sm:border-r sm:border-[#e8f0f8]">
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

            {/* Phones */}
            <div className="flex-1 flex flex-col sm:flex-row gap-3 sm:gap-8 text-[13px] text-[#0f2d52]">
              <a href="tel:18001031123" className="font-semibold hover:text-[#0066cc]">
                1800 103 1123
              </a>
              <a href="tel:18005723535" className="font-semibold hover:text-[#0066cc]">
                1800 572 3535
              </a>
            </div>

            {/* Hours */}
            <div className="text-[12px] text-[#6B6A7C] whitespace-nowrap">
              Mon – Fri · 09:30 AM to 7:00 PM IST
            </div>
          </div>

          <div className="mt-4 pl-1">
            <a
              href="mailto:sales@ai-planning.io"
              className="text-[13px] font-medium text-[#0066cc] hover:underline"
            >
              sales@ai-planning.io
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// TAB 2 — EXISTING CUSTOMER
// Feel: support-first, with two large action blocks using illustrations
// ═══════════════════════════════════════════════════════════════════════════
function ExistingCustomerTab() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-7">
          {/* Help center card */}
          <div className="rounded-[24px] border border-[#e8f0f8] bg-white p-6 sm:p-8 hover:shadow-[0_20px_40px_-20px_rgba(15,45,82,0.2)] transition-shadow">
            <div className="relative h-[180px] rounded-2xl bg-gradient-to-br from-[#eff6ff] via-white to-[#e8f0f8] flex items-center justify-center mb-6 overflow-hidden">
              <svg viewBox="0 0 200 160" className="w-44 h-auto" aria-hidden>
                {/* Person */}
                <circle cx="60" cy="85" r="22" fill="#f4bb3a" />
                <path d="M38,107 Q60,96 82,107 L82,130 L38,130 Z" fill="#f4bb3a" />
                <circle cx="60" cy="79" r="9" fill="#f7d07a" />
                {/* Chat bubble */}
                <rect x="98" y="60" width="90" height="40" rx="8" fill="#fff" stroke="#c8d7ea" strokeWidth="1.5" />
                <rect x="106" y="68" width="50" height="4" rx="2" fill="#c8d7ea" />
                <rect x="106" y="76" width="70" height="4" rx="2" fill="#e8f0f8" />
                <rect x="106" y="84" width="40" height="4" rx="2" fill="#e8f0f8" />
                <path d="M98,88 L92,100 L106,92 Z" fill="#fff" stroke="#c8d7ea" strokeWidth="1.5" />
                {/* Green accent */}
                <path d="M30,140 Q100,155 180,135" stroke="#2ba868" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase rounded bg-[#ffe8d4] text-[#c4631b] px-2 py-0.5 mb-3">
              EXISTING CUSTOMER
            </span>
            <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0f2d52] leading-[1.25] mb-3">
              Visit our help forum for technical support
            </h3>
            <p className="text-[13.5px] leading-[22px] text-[#3B394E] mb-6">
              Experiencing issues with a product you're already using? Browse through our help
              docs, videos, and tutorials, or engage with experts from the AI-Planning.io support
              community.
            </p>

            <button className="inline-flex items-center gap-2 rounded-md border border-[#0066cc] bg-white px-4 py-2.5 text-[11.5px] font-bold tracking-[0.1em] uppercase text-[#0066cc] hover:bg-[#0066cc] hover:text-white transition-colors">
              Take me to the help center <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Submit request card */}
          <div className="rounded-[24px] border border-[#e8f0f8] bg-white p-6 sm:p-8 hover:shadow-[0_20px_40px_-20px_rgba(15,45,82,0.2)] transition-shadow">
            <div className="relative h-[180px] rounded-2xl bg-gradient-to-br from-[#eff6ff] via-white to-[#e8f0f8] flex items-center justify-center mb-6 overflow-hidden">
              <svg viewBox="0 0 200 160" className="w-40 h-auto" aria-hidden>
                {/* Ticket/ribbon */}
                <circle cx="100" cy="70" r="28" fill="#4fa3ff" />
                <rect x="92" y="58" width="16" height="26" fill="#fff" />
                <circle cx="100" cy="82" r="3" fill="#4fa3ff" />
                {/* Yellow ribbon behind */}
                <path d="M115,75 L140,100 L128,108 Z" fill="#f4bb3a" />
                <path d="M115,75 L140,90 L140,100 Z" fill="#f7d07a" />
                {/* underline */}
                <path d="M40,125 Q100,140 160,118" stroke="#c8d7ea" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase rounded bg-[#ffe8d4] text-[#c4631b] px-2 py-0.5 mb-3">
              EXISTING CUSTOMER
            </span>
            <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0f2d52] leading-[1.25] mb-3">
              If you can't find what you're looking for…
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
// TAB 3 — GENERAL INQUIRIES
// Feel: bold blue canvas, PR/analyst/customer relations cards + partnerships block
// ═══════════════════════════════════════════════════════════════════════════
function GeneralInquiriesTab() {
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
    <section className="bg-gradient-to-b from-[#0066cc] via-[#0066cc] to-[#0052a3] py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-1px] text-white leading-[1.1] mb-3">
            General Inquiries
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#c8d7ea]">
            Want to get in touch? Drop us a line.
          </p>
        </div>

        {/* Relations cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {relations.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-[16px] p-6 sm:p-7 text-center hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] transition-shadow"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f0f8] text-[#0066cc] mb-4">
                <r.icon className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0f2d52] mb-2">{r.title}</h3>
              {r.contact && (
                <a
                  href={r.contact.href}
                  className="block text-[13px] font-medium text-[#0066cc] hover:underline mb-4"
                >
                  {r.contact.label}
                </a>
              )}
              {!r.contact && <div className="h-[22px] mb-4" />}
              <div className="pt-4 border-t border-[#e8f0f8]">
                <p className="text-[14px] font-medium text-[#0f2d52] mb-1">{r.person}</p>
                <a
                  href={`mailto:${r.personEmail}`}
                  className="text-[12px] text-[#0066cc] hover:underline break-all"
                >
                  {r.personEmail}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership block */}
        <div className="bg-white rounded-[16px] p-6 sm:p-8 lg:p-10">
          <div className="grid sm:grid-cols-[1fr_200px] gap-6 items-center">
            <div>
              <h3 className="text-[22px] sm:text-[24px] font-bold text-[#0f2d52] mb-3">
                Partnership Opportunities
              </h3>
              <p className="text-[14px] leading-[22px] text-[#3B394E] mb-4 max-w-[520px]">
                Interested in partnering with AI-Planning.io? We'd love to explore collaboration
                opportunities with your organization.
              </p>
              <a
                href="mailto:partnerships@ai-planning.io"
                className="text-[14px] font-medium text-[#0066cc] hover:underline"
              >
                partnerships@ai-planning.io
              </a>
            </div>

            {/* Small abstract partnership illustration */}
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
// TAB 4 — OUR OFFICES
// Feel: region-switched directory with address cards
// ═══════════════════════════════════════════════════════════════════════════
type Region = 'na' | 'eu' | 'apac';

interface Office {
  city: string;
  address: string;
  phone: string;
  email: string;
  region: Region;
}

const OFFICES: Office[] = [
  {
    city: 'San Francisco',
    address: '123 Innovation Drive, Tech Valley, CA 94025',
    phone: '+1 (800) 555-PLAN',
    email: 'sales@ai-planning.io',
    region: 'na',
  },
  {
    city: 'New York',
    address: '456 Business Plaza, New York, NY 10001',
    phone: '+1 (800) 555-EAST',
    email: 'sales-ny@ai-planning.io',
    region: 'na',
  },
  {
    city: 'London',
    address: '789 Tech Square, London EC2A 4BX, UK',
    phone: '+44 20 7123 4567',
    email: 'sales.uk@ai-planning.io',
    region: 'eu',
  },
  {
    city: 'Berlin',
    address: 'Alexanderplatz 10, 10178 Berlin, Germany',
    phone: '+49 30 1234 5678',
    email: 'sales.de@ai-planning.io',
    region: 'eu',
  },
  {
    city: 'Singapore',
    address: '321 Marina Boulevard, Singapore 018972',
    phone: '+65 6123 4567',
    email: 'sales.sg@ai-planning.io',
    region: 'apac',
  },
  {
    city: 'Mumbai',
    address: 'BKC Tower, Mumbai 400051, India',
    phone: '+91 22 1234 5678',
    email: 'sales.in@ai-planning.io',
    region: 'apac',
  },
];

function OfficesTab() {
  const [region, setRegion] = useState<Region | 'all'>('na');
  const filtered = region === 'all' ? OFFICES : OFFICES.filter((o) => o.region === region);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f0f8] ring-4 ring-[#f7f9fc]">
            <Globe className="w-6 h-6 text-[#0066cc]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0f2d52] tracking-[-1px] leading-[1.15] mb-3">
            Our offices around the world
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[22px] text-[#3B394E] max-w-[520px] mx-auto">
            Connect with one of our global offices… or feel free to just send us a nifty postcard.
            We won't mind!
          </p>
        </div>

        {/* Region toggles */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
          {[
            { key: 'na', label: 'North America' },
            { key: 'eu', label: 'Europe' },
            { key: 'apac', label: 'Asia-Pacific' },
          ].map((r) => {
            const active = region === r.key;
            return (
              <button
                key={r.key}
                onClick={() => setRegion(r.key as Region)}
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

        {/* Office cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((o) => (
            <div
              key={o.city}
              className="rounded-[14px] border border-[#e8f0f8] bg-white p-5 hover:border-[#0066cc]/40 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e8f0f8] text-[#0066cc]">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <h3 className="text-[17px] font-bold text-[#0f2d52]">{o.city}</h3>
              </div>
              <p className="text-[13px] leading-[20px] text-[#3B394E] mb-3 pl-[38px]">
                {o.address}
              </p>
              <div className="pl-[38px] space-y-1.5">
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
