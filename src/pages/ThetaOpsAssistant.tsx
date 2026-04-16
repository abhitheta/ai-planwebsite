import { Link } from 'react-router';
import { useState } from 'react';
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
import { WorksWhereverBanner } from '../components/WorksWhereverBanner';
import { FadeInView } from '../components/FadeInView';

// ── Feature category pills (hero) ────────────────────────────────────────────
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

// ── Interactive tabs ─────────────────────────────────────────────────────────
type TabKey =
  | 'ai-scheduling'
  | 'demand-planner'
  | 'auto-stock'
  | 'alerts'
  | 'visualisation'
  | 'continuous-learning'
  | 'security';

interface Tab {
  key: TabKey;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  mockup: 'map' | 'forecast' | 'dashboard' | 'alerts' | 'chart' | 'loop' | 'shield';
}

const TABS: Tab[] = [
  {
    key: 'ai-scheduling',
    label: 'AI Scheduling',
    title: 'AI Scheduling',
    description:
      'Our AI Scheduling engine automatically creates the most efficient delivery and operational schedules by analyzing real-time demand, resource availability, traffic conditions, and business constraints. It intelligently prioritizes tasks, minimizes idle time, reduces operational costs, and dynamically re-adjusts schedules when disruptions occur — ensuring on-time execution without manual intervention.',
    bullets: ['Route Efficiency', 'Fuel Savings', 'On-time Deliveries'],
    mockup: 'map',
  },
  {
    key: 'demand-planner',
    label: 'Demand Planner',
    title: 'Demand Planner',
    description:
      'The Demand Planner uses historical data, seasonal trends, and recent activity patterns to forecast demand across multiple time horizons — immediate shifts, weekly planning, and monthly capacity planning. This enables businesses to proactively allocate resources, avoid shortages, and maintain optimal service levels with data-driven accuracy.',
    bullets: ['Immediate shifts', 'Weekly planning', 'Monthly capacity planning'],
    mockup: 'forecast',
  },
  {
    key: 'auto-stock',
    label: 'Auto Stock Reconciliation',
    title: 'Auto Stock Reconciliation',
    description:
      'Auto Stock Reconciliation continuously synchronizes physical stock levels with system records using live inputs from deliveries, sensors, driver confirmations, and system updates. It eliminates manual reconciliation errors, ensures real-time stock visibility, flags discrepancies instantly, and supports accurate inventory and financial reporting.',
    bullets: ['Real-time stock visibility', 'Instant discrepancy flags', 'Accurate financial reporting'],
    mockup: 'chart',
  },
  {
    key: 'alerts',
    label: 'Alerts & Notifications',
    title: 'Alerts & Notifications',
    description:
      'Automated notifications for low inventory, delivery delays, and critical events. Delays trigger alerts and escalations automatically so you stay ahead of problems before they impact your customers. Smart notifications keep dispatchers, drivers, and managers informed in real time.',
    bullets: ['Low inventory alerts', 'Delivery-delay escalations', 'Critical-event notifications'],
    mockup: 'alerts',
  },
  {
    key: 'visualisation',
    label: 'Visualisation',
    title: 'Visualisation',
    description:
      'Interactive dashboards and visual reports to explore delivery metrics, on-time performance, and station health at a glance. Comprehensive reporting on delivery performance, efficiency, and cost optimization — so every stakeholder sees what matters.',
    bullets: ['Delivery performance', 'On-time metrics', 'Station health overview'],
    mockup: 'dashboard',
  },
  {
    key: 'continuous-learning',
    label: 'Continuous Learning',
    title: 'Continuous Learning',
    description:
      'The Continuous Learning engine improves system intelligence over time by learning from execution data such as actual delivery times, driver behaviour, route performance, and demand variations. This self-correcting feedback loop ensures that every planning cycle becomes more accurate, efficient, and reliable than the last.',
    bullets: ['Route performance feedback', 'Driver-behaviour insights', 'Self-correcting forecasts'],
    mockup: 'loop',
  },
  {
    key: 'security',
    label: 'Security & Enterprise Controls',
    title: 'Security & Enterprise Controls',
    description:
      'Bank-grade encryption, role-based access control, and SOC 2 compliance. Your data is always protected. 99.9% uptime, automated backups, and enterprise-ready APIs make deployment and integration straightforward.',
    bullets: ['Compliance & Safety', 'API Integration', '99.9% Uptime'],
    mockup: 'shield',
  },
];

// ── Mockup components (lightweight inline visuals for each tab) ──────────────
function TabMockup({ mockup }: { mockup: Tab['mockup'] }) {
  const base =
    'relative rounded-[18px] border border-[#e8f0f8] bg-white shadow-[0_8px_32px_-12px_rgba(15,45,82,0.25)] overflow-hidden';

  if (mockup === 'map') {
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
              <path d="M30,180 Q90,140 130,150 T220,100 T280,50" stroke="#0066cc" strokeWidth="2.5" fill="none" />
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

  if (mockup === 'forecast') {
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
      <div className={base + ' p-5'}>
        <p className="text-[11px] font-semibold text-[#0f2d52] mb-3">7-Day Forecast</p>
        <div className="space-y-2">
          {days.map((d) => (
            <div key={d.d} className="flex items-center gap-3">
              <span className="w-8 text-[10px] font-medium text-[#3B394E]">{d.d}</span>
              <div className="flex-1 h-3 rounded-full bg-[#e8f0f8] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0066cc] to-[#0f2d52] rounded-full"
                  style={{ width: `${d.v}%` }}
                />
              </div>
              <span className="text-[10px] font-semibold text-[#0f2d52] w-8 text-right">{d.v}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mockup === 'chart') {
    return (
      <div className={base + ' aspect-[4/3] p-4'}>
        <p className="text-[11px] font-semibold text-[#0f2d52] mb-3">Stock vs Sensor Reading</p>
        <svg viewBox="0 0 300 180" className="w-full h-auto">
          <defs>
            <linearGradient id="gr1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0066cc" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0066cc" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline points="10,140 50,120 90,130 130,90 170,110 210,70 250,85 290,55" stroke="#0066cc" strokeWidth="2.5" fill="none" />
          <polyline points="10,140 50,120 90,130 130,90 170,110 210,70 250,85 290,55 290,160 10,160" fill="url(#gr1)" />
          <polyline points="10,150 50,145 90,155 130,115 170,130 210,95 250,110 290,80" stroke="#0f2d52" strokeWidth="2" strokeDasharray="4,3" fill="none" />
        </svg>
        <div className="flex gap-4 mt-2 text-[10px]">
          <span className="flex items-center gap-1 text-[#0066cc]">
            <span className="w-3 h-0.5 bg-[#0066cc]" /> Physical
          </span>
          <span className="flex items-center gap-1 text-[#0f2d52]">
            <span className="w-3 h-0.5 bg-[#0f2d52]" /> System
          </span>
        </div>
      </div>
    );
  }

  if (mockup === 'alerts') {
    const items = [
      { t: 'Delivery delayed 18 min', tag: 'Critical', color: 'bg-[#0f2d52] text-white' },
      { t: 'Low inventory at Station #42', tag: 'Warning', color: 'bg-[#0066cc] text-white' },
      { t: 'Trip completed on time', tag: 'Info', color: 'bg-[#e8f0f8] text-[#0f2d52]' },
      { t: 'ETA updated: Trip 9018', tag: 'Info', color: 'bg-[#e8f0f8] text-[#0f2d52]' },
    ];
    return (
      <div className={base + ' p-4'}>
        <p className="text-[11px] font-semibold text-[#0f2d52] mb-3">Recent Alerts</p>
        <div className="space-y-2">
          {items.map((a, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-[#e8f0f8] p-2.5">
              <Bell className="w-4 h-4 text-[#0066cc]" />
              <span className="flex-1 text-[11px] text-[#0f2d52] font-medium">{a.t}</span>
              <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${a.color}`}>
                {a.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mockup === 'dashboard') {
    return (
      <div className={base + ' aspect-[4/3] p-4'}>
        <p className="text-[11px] font-semibold text-[#0f2d52] mb-3">Operational Overview</p>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { l: 'On-time', v: '96%' },
            { l: 'Active', v: '214' },
            { l: 'Fuel Saved', v: '18%' },
          ].map((s) => (
            <div key={s.l} className="rounded-lg bg-[#eff6ff] p-2 text-center">
              <p className="text-[9px] text-[#3B394E] uppercase tracking-wide">{s.l}</p>
              <p className="text-[14px] font-bold text-[#0f2d52]">{s.v}</p>
            </div>
          ))}
        </div>
        <svg viewBox="0 0 300 90" className="w-full">
          {[60, 50, 70, 45, 55, 30, 40, 55, 35, 25, 45, 30].map((h, i) => (
            <rect key={i} x={i * 25 + 5} y={90 - h} width="14" height={h} rx="2" fill="#0066cc" opacity={0.2 + i * 0.06} />
          ))}
        </svg>
      </div>
    );
  }

  if (mockup === 'loop') {
    return (
      <div className={base + ' aspect-[4/3] p-5 flex items-center justify-center'}>
        <svg viewBox="0 0 280 220" className="w-full h-auto">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
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
              <circle cx={n.cx} cy={n.cy} r="28" fill="#e8f0f8" stroke="#0066cc" strokeWidth="2" />
              <text x={n.cx} y={n.cy + 4} textAnchor="middle" fontSize="11" fontWeight="600" fill="#0f2d52">
                {n.t}
              </text>
            </g>
          ))}
          <path d="M168,50 Q210,70 212,90" stroke="#0066cc" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          <path d="M210,135 Q180,165 168,170" stroke="#0066cc" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          <path d="M112,170 Q75,150 72,135" stroke="#0066cc" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          <path d="M75,85 Q100,60 112,50" stroke="#0066cc" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
        </svg>
      </div>
    );
  }

  // shield
  return (
    <div className={base + ' aspect-[4/3] p-4 flex flex-col items-center justify-center gap-3'}>
      <div className="w-20 h-20 rounded-full bg-[#0f2d52] flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
          <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-2 w-full px-2">
        {['SOC 2', 'GDPR', 'ISO 27001'].map((b) => (
          <div key={b} className="rounded-lg border border-[#e8f0f8] py-2 text-center text-[10px] font-semibold text-[#0f2d52]">
            {b}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ThetaOpsAssistant() {
  const [activeTab, setActiveTab] = useState<TabKey>('ai-scheduling');
  const tab = TABS.find((t) => t.key === activeTab) ?? TABS[0];

  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      {/* ── Hero ── */}
      <section className="pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-12 sm:pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f7f9fc] via-white to-white">
        <div className="max-w-[1100px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight lg:tracking-[-2.5px] text-[#0f2d52] leading-[1.05] mb-5">
            Built for real-world operations
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] leading-[30px] text-[#3B394E] font-normal max-w-[720px] mx-auto mb-10">
            From forecasting to final delivery, everything you need to manage a reliable, on-time
            fuel network.
          </p>

          {/* Category pills — 2 rows × 4 on desktop, compact grid on mobile */}
          <div className="rounded-2xl bg-gradient-to-b from-[#eff6ff] to-[#e8f0f8] border border-[#c8d7ea] px-4 sm:px-6 py-5 sm:py-6 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {CATEGORIES.map((c) => (
                <div
                  key={c.label}
                  className="group flex items-center gap-2 sm:gap-3 rounded-xl bg-white border border-[#c8d7ea] px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm hover:border-[#0066cc] hover:shadow-md transition-all cursor-pointer"
                >
                  <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-[#e8f0f8] text-[#0066cc] group-hover:bg-[#0066cc] group-hover:text-white transition-colors flex-shrink-0">
                    <c.icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-semibold text-[#0f2d52] uppercase tracking-wide leading-tight text-left">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12px] text-[#6B6A7C] italic">
              Explore categories — each pill maps to the features below.
            </p>
          </div>
        </div>
      </section>

      {/* ── Interactive Feature Tabs ── */}
      <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            {/* Tab navigation — horizontal scroll on mobile */}
            <div className="relative mb-10 border-b border-[#e8f0f8]">
              <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {TABS.map((t) => {
                  const isActive = t.key === activeTab;
                  return (
                    <button
                      key={t.key}
                      onClick={() => setActiveTab(t.key)}
                      className={`whitespace-nowrap px-4 sm:px-5 py-3 text-[13px] sm:text-[14px] font-medium transition-colors border-b-2 -mb-[1px] ${
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

            {/* Active tab content — 2 column layout */}
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-center">
              {/* Left: title + description + bullet chips */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f2d52] tracking-[-1.2px] leading-[1.1] mb-5">
                  {tab.title}
                </h2>
                <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3B394E] mb-7">
                  {tab.description}
                </p>
                <div className="rounded-2xl bg-gradient-to-br from-[#eff6ff] to-[#e8f0f8] border border-[#c8d7ea] p-4 sm:p-5 space-y-2">
                  {tab.bullets.map((b) => (
                    <div
                      key={b}
                      className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 border border-[#e8f0f8]"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0066cc] text-white flex-shrink-0">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-[14px] font-medium text-[#0f2d52]">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: mockup illustration (changes per tab) */}
              <div className="relative">
                <TabMockup mockup={tab.mockup} />
                {/* soft blue glow behind mockup */}
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

      {/* ── Complete Feature Set ── */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f7f9fc]">
        <FadeInView>
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-1.5px] text-[#0f2d52] leading-[1.1] mb-4">
                Complete feature set
              </h2>
              <p className="text-[15px] sm:text-[17px] leading-[26px] text-[#3B394E] max-w-[640px] mx-auto">
                Powerful features designed to optimize every aspect of your fuel delivery operations.
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
