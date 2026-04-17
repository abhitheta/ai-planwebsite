import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import {
  MapPin,
  Target,
  ClipboardList,
  Bell,
  Package,
  Route,
  CheckCircle2,
  Zap,
  Check,
} from 'lucide-react';
import { FadeInView } from '../components/FadeInView';

const CATEGORIES = [
  { icon: MapPin, label: 'Location Tracking' },
  { icon: Target, label: 'Accurate Predictions' },
  { icon: ClipboardList, label: 'Precise Logging' },
  { icon: Bell, label: 'Smart Notifications' },
  { icon: Package, label: 'Capacity Management' },
  { icon: Route, label: 'Optimized Paths' },
  { icon: CheckCircle2, label: 'Reliable Service' },
  { icon: Zap, label: 'Improved Efficiency' },
];

// ── Feature sections (rendered as long-scroll page) ──────────────────────────
type MockupKind = 'map' | 'forecast' | 'dashboard' | 'alerts' | 'chart' | 'loop' | 'shield';

interface Feature {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  mockup: MockupKind;
}

const FEATURES: Feature[] = [
  {
    id: 'ai-scheduling',
    label: 'AI Scheduling',
    title: 'AI Scheduling',
    description:
      'Our AI Scheduling engine automatically creates the most efficient delivery and operational schedules by analyzing real-time demand, resource availability, traffic conditions, and business constraints. It intelligently prioritizes tasks, minimizes idle time, reduces operational costs, and dynamically re-adjusts schedules when disruptions occur — ensuring on-time execution without manual intervention.',
    bullets: ['Route Efficiency', 'Fuel Savings', 'On-time Deliveries'],
    mockup: 'map',
  },
  {
    id: 'demand-planner',
    label: 'Demand Planner',
    title: 'Demand Planner',
    description:
      'The Demand Planner uses historical data, seasonal trends, and recent activity patterns to forecast demand across multiple time horizons — immediate shifts, weekly planning, and monthly capacity planning. This enables businesses to proactively allocate resources, avoid shortages, and maintain optimal service levels with data-driven accuracy.',
    bullets: ['Immediate shifts', 'Weekly planning', 'Monthly capacity planning'],
    mockup: 'forecast',
  },
  {
    id: 'auto-stock',
    label: 'Auto Stock Reconciliation',
    title: 'Auto Stock Reconciliation',
    description:
      'Auto Stock Reconciliation continuously synchronizes physical stock levels with system records using live inputs from deliveries, sensors, driver confirmations, and system updates. It eliminates manual reconciliation errors, ensures real-time stock visibility, flags discrepancies instantly, and supports accurate inventory and financial reporting.',
    bullets: ['Real-time stock visibility', 'Instant discrepancy flags', 'Accurate financial reporting'],
    mockup: 'chart',
  },
  {
    id: 'alerts',
    label: 'Alerts & Notifications',
    title: 'Alerts & Notifications',
    description:
      'Automated notifications for low inventory, delivery delays, and critical events. Delays trigger alerts and escalations automatically so you stay ahead of problems before they impact your customers. Smart notifications keep dispatchers, drivers, and managers informed in real time.',
    bullets: ['Low inventory alerts', 'Delivery-delay escalations', 'Critical-event notifications'],
    mockup: 'alerts',
  },
  {
    id: 'visualisation',
    label: 'Visualisation',
    title: 'Visualisation',
    description:
      'Interactive dashboards and visual reports to explore delivery metrics, on-time performance, and station health at a glance. Comprehensive reporting on delivery performance, efficiency, and cost optimization — so every stakeholder sees what matters.',
    bullets: ['Delivery performance', 'On-time metrics', 'Station health overview'],
    mockup: 'dashboard',
  },
  {
    id: 'continuous-learning',
    label: 'Continuous Learning',
    title: 'Continuous Learning',
    description:
      'The Continuous Learning engine improves system intelligence over time by learning from execution data such as actual delivery times, driver behaviour, route performance, and demand variations. This self-correcting feedback loop ensures that every planning cycle becomes more accurate, efficient, and reliable than the last.',
    bullets: ['Route performance feedback', 'Driver-behaviour insights', 'Self-correcting forecasts'],
    mockup: 'loop',
  },
  {
    id: 'security',
    label: 'Security & Enterprise Controls',
    title: 'Security & Enterprise Controls',
    description:
      'Bank-grade encryption, role-based access control, and SOC 2 compliance. Your data is always protected. 99.9% uptime, automated backups, and enterprise-ready APIs make deployment and integration straightforward.',
    bullets: ['Compliance & Safety', 'API Integration', '99.9% Uptime'],
    mockup: 'shield',
  },
];

// ── Mockup visuals ───────────────────────────────────────────────────────────
function Mockup({ kind }: { kind: MockupKind }) {
  const base =
    'relative rounded-[18px] border border-[#e8f0f8] bg-white shadow-[0_14px_40px_-16px_rgba(15,45,82,0.25)] overflow-hidden';

  if (kind === 'map') {
    return (
      <div className={base + ' aspect-[4/3]'}>
        <div className="absolute inset-0 flex">
          <div className="w-1/4 bg-[#0f2d52] p-3 flex flex-col gap-2">
            {['Dashboard', 'Orders', 'Trips', 'Drivers', 'Trucks'].map((i) => (
              <div key={i} className="h-3 rounded bg-white/20" />
            ))}
          </div>
          <div className="flex-1 relative bg-gradient-to-br from-[#eff6ff] to-[#c8d7ea]">
            <svg viewBox="0 0 300 220" className="absolute inset-0 w-full h-full">
              <path
                d="M30,180 Q90,140 130,150 T220,100 T280,50"
                stroke="#0066cc"
                strokeWidth="2.5"
                fill="none"
              />
              <circle cx="30" cy="180" r="6" fill="#0066cc" />
              <circle cx="130" cy="150" r="5" fill="#0066cc" />
              <circle cx="220" cy="100" r="5" fill="#0066cc" />
              <circle cx="280" cy="50" r="7" fill="#0f2d52" />
            </svg>
            <div className="absolute top-3 right-3 rounded-lg bg-white px-3 py-2 shadow-sm text-[10px] font-semibold text-[#0f2d52]">
              Live Tracking
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'forecast') {
    const days = [
      { d: 'Mon', v: 65 },
      { d: 'Tue', v: 78 },
      { d: 'Wed', v: 75 },
      { d: 'Thu', v: 86 },
      { d: 'Fri', v: 83 },
      { d: 'Sat', v: 90 },
      { d: 'Sun', v: 95 },
    ];
    return (
      <div className={base + ' p-5 sm:p-6'}>
        <p className="text-[12px] font-semibold text-[#0f2d52] mb-4">7-Day Forecast</p>
        <div className="space-y-3">
          {days.map((d) => (
            <div key={d.d} className="flex items-center gap-3">
              <span className="w-10 text-[11px] font-medium text-[#3B394E]">{d.d}</span>
              <div className="flex-1 h-3.5 rounded-full bg-[#e8f0f8] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0066cc] to-[#0f2d52] rounded-full"
                  style={{ width: `${d.v}%` }}
                />
              </div>
              <span className="text-[11px] font-semibold text-[#0f2d52] w-10 text-right">
                {d.v}%
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === 'chart') {
    return (
      <div className={base + ' aspect-[4/3] p-5'}>
        <p className="text-[12px] font-semibold text-[#0f2d52] mb-3">Stock vs Sensor Reading</p>
        <svg viewBox="0 0 300 180" className="w-full h-auto">
          <defs>
            <linearGradient id="gr1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0066cc" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0066cc" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline
            points="10,140 50,120 90,130 130,90 170,110 210,70 250,85 290,55"
            stroke="#0066cc"
            strokeWidth="2.5"
            fill="none"
          />
          <polyline
            points="10,140 50,120 90,130 130,90 170,110 210,70 250,85 290,55 290,160 10,160"
            fill="url(#gr1)"
          />
          <polyline
            points="10,150 50,145 90,155 130,115 170,130 210,95 250,110 290,80"
            stroke="#0f2d52"
            strokeWidth="2"
            strokeDasharray="4,3"
            fill="none"
          />
        </svg>
        <div className="flex gap-4 mt-2 text-[11px]">
          <span className="flex items-center gap-1.5 text-[#0066cc]">
            <span className="w-3 h-0.5 bg-[#0066cc]" /> Physical
          </span>
          <span className="flex items-center gap-1.5 text-[#0f2d52]">
            <span className="w-3 h-0.5 bg-[#0f2d52]" /> System
          </span>
        </div>
      </div>
    );
  }

  if (kind === 'alerts') {
    const items = [
      { t: 'Delivery delayed 18 min', tag: 'Critical', color: 'bg-[#0f2d52] text-white' },
      { t: 'Low inventory at Station #42', tag: 'Warning', color: 'bg-[#0066cc] text-white' },
      { t: 'Trip completed on time', tag: 'Info', color: 'bg-[#e8f0f8] text-[#0f2d52]' },
      { t: 'ETA updated: Trip 9018', tag: 'Info', color: 'bg-[#e8f0f8] text-[#0f2d52]' },
    ];
    return (
      <div className={base + ' p-5'}>
        <p className="text-[12px] font-semibold text-[#0f2d52] mb-4">Recent Alerts</p>
        <div className="space-y-2.5">
          {items.map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-[#e8f0f8] p-3"
            >
              <Bell className="w-4 h-4 text-[#0066cc]" />
              <span className="flex-1 text-[12px] text-[#0f2d52] font-medium">{a.t}</span>
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${a.color}`}>
                {a.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === 'dashboard') {
    return (
      <div className={base + ' aspect-[4/3] p-5'}>
        <p className="text-[12px] font-semibold text-[#0f2d52] mb-3">Operational Overview</p>
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {[
            { l: 'On-time', v: '96%' },
            { l: 'Active', v: '214' },
            { l: 'Fuel Saved', v: '18%' },
          ].map((s) => (
            <div key={s.l} className="rounded-lg bg-[#eff6ff] p-2.5 text-center">
              <p className="text-[9px] text-[#3B394E] uppercase tracking-wide">{s.l}</p>
              <p className="text-[16px] font-bold text-[#0f2d52]">{s.v}</p>
            </div>
          ))}
        </div>
        <svg viewBox="0 0 300 90" className="w-full">
          {[60, 50, 70, 45, 55, 30, 40, 55, 35, 25, 45, 30].map((h, i) => (
            <rect
              key={i}
              x={i * 25 + 5}
              y={90 - h}
              width="14"
              height={h}
              rx="2"
              fill="#0066cc"
              opacity={0.2 + i * 0.06}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (kind === 'loop') {
    return (
      <div className={base + ' aspect-[4/3] p-6 flex items-center justify-center'}>
        <svg viewBox="0 0 280 220" className="w-full h-auto">
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#0066cc" />
            </marker>
          </defs>
          {[
            { cx: 140, cy: 40, t: 'Plan' },
            { cx: 220, cy: 110, t: 'Execute' },
            { cx: 140, cy: 180, t: 'Learn' },
            { cx: 60, cy: 110, t: 'Refine' },
          ].map((n) => (
            <g key={n.t}>
              <circle cx={n.cx} cy={n.cy} r="30" fill="#e8f0f8" stroke="#0066cc" strokeWidth="2" />
              <text
                x={n.cx}
                y={n.cy + 4}
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
                fill="#0f2d52"
              >
                {n.t}
              </text>
            </g>
          ))}
          <path
            d="M168,50 Q210,70 212,90"
            stroke="#0066cc"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />
          <path
            d="M210,135 Q180,165 168,170"
            stroke="#0066cc"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />
          <path
            d="M112,170 Q75,150 72,135"
            stroke="#0066cc"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />
          <path
            d="M75,85 Q100,60 112,50"
            stroke="#0066cc"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />
        </svg>
      </div>
    );
  }

  // shield
  return (
    <div className={base + ' aspect-[4/3] p-5 flex flex-col items-center justify-center gap-4'}>
      <div className="w-24 h-24 rounded-full bg-[#0f2d52] flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor">
          <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-2 w-full px-4">
        {['SOC 2', 'GDPR', 'ISO 27001'].map((b) => (
          <div
            key={b}
            className="rounded-lg border border-[#e8f0f8] py-2.5 text-center text-[11px] font-semibold text-[#0f2d52]"
          >
            {b}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Scroll helper for tab clicks ─────────────────────────────────────────────
function scrollToFeature(id: string) {
  const el = document.getElementById(id);
  if (el) {
    // Navbar (88) + sticky tab bar (~52) on desktop; a little less on mobile
    const navOffset = window.innerWidth >= 1024 ? 180 : 140;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export function ThetaOpsAssistant() {
  const [activeId, setActiveId] = useState<string>(FEATURES[0].id);

  // Observe which feature section is most in view to highlight its tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId((visible[0].target as HTMLElement).id);
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-140px 0px -40% 0px' }
    );
    FEATURES.forEach((f) => {
      const el = document.getElementById(f.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      {/* ── Hero ── */}
      <section className="pt-[112px] sm:pt-[130px] lg:pt-[150px] pb-12 sm:pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f7f9fc] via-white to-white">
        <div className="max-w-[1100px] mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight lg:tracking-[-2.5px] text-[#0f2d52] leading-[1.05] mb-5">
            Built for real-world operations
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] leading-[30px] text-[#3B394E] font-normal max-w-[720px] mx-auto mb-10">
            From forecasting to final delivery, everything you need to manage a reliable, on-time
            fuel network.
          </p>

          {/* ── Platform Impact card — single clean card with 4 headline metrics ── */}
          <div className="relative mx-auto max-w-[900px]">
            {/* Soft cyan glow behind the card for depth */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-[60px] blur-3xl"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(99,200,240,0.35) 0%, rgba(103,232,249,0.22) 38%, rgba(99,200,240,0.08) 62%, rgba(99,200,240,0) 80%)',
              }}
            />

            <div className="relative rounded-[28px] bg-white px-5 py-9 sm:px-14 sm:py-12 shadow-[0_0_20px_rgba(99,200,240,0.22),0_0_40px_rgba(99,200,240,0.18),0_0_70px_rgba(103,232,249,0.14)]">
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 sm:gap-x-16 gap-y-8 sm:gap-y-10 list-none p-0 m-0">
                {CATEGORIES.map((c) => (
                  <li key={c.label} className="flex items-center gap-4 text-left">
                    <c.icon className="h-6 w-6 text-[#111019] flex-shrink-0" strokeWidth={1.75} />
                    <span className="text-[16px] sm:text-[18px] font-medium text-[#111019] leading-tight">
                      {c.label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-12 text-center text-[14px] text-[#6B6A7C] italic">
                Explore categories — each item maps to the features below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky anchor tab bar ── */}
      <section className="sticky top-[80px] lg:top-[122px] z-40 bg-white/90 backdrop-blur-md border-y border-[#e8f0f8]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FEATURES.map((t) => {
              const isActive = t.id === activeId;
              return (
                <button
                  key={t.id}
                  onClick={() => scrollToFeature(t.id)}
                  className={`whitespace-nowrap px-4 sm:px-5 py-3.5 text-[13px] sm:text-[14px] font-medium transition-colors border-b-2 -mb-[1px] ${
                    isActive
                      ? 'text-[#0066cc] border-[#0066cc]'
                      : 'text-[#3B394E] border-transparent hover:text-[#0f2d52]'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Feature sections — alternating layout ── */}
      {FEATURES.map((f, idx) => {
        const flipped = idx % 2 === 1;
        const bg = idx % 2 === 0 ? 'bg-white' : 'bg-[#f7f9fc]';
        return (
          <section
            key={f.id}
            id={f.id}
            className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 ${bg} scroll-mt-[140px] lg:scroll-mt-[180px]`}
          >
            <FadeInView>
              <div className="max-w-[1200px] mx-auto">
                <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
                  {/* Text column */}
                  <div className={flipped ? 'lg:order-2' : ''}>
                    <span className="inline-block px-3 py-1 bg-[#e8f0f8] text-[#0066cc] text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-4">
                      Feature · {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f2d52] tracking-[-1.2px] leading-[1.1] mb-5">
                      {f.title}
                    </h2>
                    <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3B394E] mb-6">
                      {f.description}
                    </p>
                    <div className="rounded-2xl bg-white border border-[#c8d7ea] p-4 sm:p-5 space-y-2 shadow-sm">
                      {f.bullets.map((b) => (
                        <div
                          key={b}
                          className="flex items-center gap-3 rounded-xl bg-[#f7f9fc] px-4 py-3 border border-[#e8f0f8]"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0066cc] text-white flex-shrink-0">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </span>
                          <span className="text-[14px] font-medium text-[#0f2d52]">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual column */}
                  <div className={`relative ${flipped ? 'lg:order-1' : ''}`}>
                    <Mockup kind={f.mockup} />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] blur-3xl opacity-50"
                      style={{
                        background:
                          'radial-gradient(circle at center, rgba(0,102,204,0.22) 0%, rgba(0,102,204,0) 70%)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </FadeInView>
          </section>
        );
      })}

      {/* ── Complete Feature Set ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#f7f9fc]">
        <FadeInView>
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-1.5px] text-[#0f2d52] leading-[1.1] mb-4">
                Complete feature set
              </h2>
              <p className="text-[15px] sm:text-[17px] leading-[26px] text-[#3B394E] max-w-[640px] mx-auto">
                Powerful features designed to optimize every aspect of your fuel delivery
                operations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  title: 'Compliance & Safety',
                  desc: 'Automated compliance tracking, safety checklists, and regulatory reporting for peace of mind.',
                },
                {
                  title: 'API Integration',
                  desc: 'Connect with existing systems via robust APIs and webhooks — ERP, telematics, tank sensors, and more.',
                },
                {
                  title: '99.9% Uptime',
                  desc: 'Enterprise-grade reliability with automated backups, disaster recovery, and global redundancy.',
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="group rounded-2xl border border-[#e8f0f8] bg-white p-6 sm:p-7 hover:border-[#0066cc] hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#e8f0f8] group-hover:bg-[#0066cc] text-[#0066cc] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-[17px] font-semibold text-[#0f2d52] mb-2">{c.title}</h3>
                  <p className="text-[13px] leading-[20px] text-[#3B394E]">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f2d52] via-[#1a3d6b] to-[#2a5a8f]">
        <FadeInView>
          <div className="max-w-[820px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-1.5px] text-white leading-[1.15] mb-4">
              Ready to optimize your fuel delivery operations?
            </h2>
            <p className="text-[15px] leading-[26px] text-[#c8d7ea] max-w-[620px] mx-auto mb-8">
              Join leading fuel distributors who've reduced delays by 18% and improved on-time
              delivery to 96%.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-[#0f2d52] hover:bg-[#e8f0f8] transition-colors min-w-[180px]"
              >
                Schedule a demo
              </Link>
              <Link
                to="/platform"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-[15px] font-medium text-white hover:bg-white/20 transition-colors min-w-[180px]"
              >
                View platform
              </Link>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* <WorksWhereverBanner /> */}
    </div>
  );
}
