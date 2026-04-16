import { Link } from 'react-router';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Database, Brain, LineChart, Upload, Zap, BarChart3 } from 'lucide-react';
import { FadeInView } from '../components/FadeInView';
import { WorksWhereverBanner } from '../components/WorksWhereverBanner';

const EXECUTION_STEPS = [
  {
    key: 'dynamic-orders',
    title: 'Stage 1: Dynamic Orders',
    body: 'Ingests regular and emergency orders and enriches them with optimization-ready data like locations, time windows, and constraints. The system collects orders from multiple sources and evaluates key factors such as priority level, delivery time windows, location, package type, and urgency.',
    outcome: 'Balanced order flow, fewer bottlenecks, every order enters the planning pipeline at the right time with the right priority.',
  },
  {
    key: 'optimized-trips',
    title: 'Stage 2: Optimized Trips',
    body: 'Builds efficient multi-drop trips using AI routing, live traffic, risk scoring, and operational constraints. Our engine balances driver hours, fuel requirements, and customer windows to deliver the most efficient plan every time.',
    outcome: 'Fewer miles, higher truck utilisation, and protected service levels — without manual re-planning.',
  },
  {
    key: 'resource-assignment',
    title: 'Stage 3: Intelligent Resource Assignment',
    body: 'Assigns the right truck and driver based on compatibility, certifications, capacity, and real-time status. AI matches trucks to trips by product compatibility, ELD hours, licence class, and proximity — in seconds, not hours.',
    outcome: 'Right driver, right truck, right trip — with compliance and capacity enforced automatically.',
  },
  {
    key: 'sequential-dispatch',
    title: 'Stage 4: Real-Time Sequential Dispatch',
    body: 'Monitors execution, tracks progress, handles exceptions, and dynamically re-optimizes plans in real time. When delays, breakdowns, or priority changes hit, the engine reshuffles remaining trips to protect SLAs.',
    outcome: 'Live visibility from depot to customer, with proactive recovery instead of reactive firefighting.',
  },
  {
    key: 'continuous-learning',
    title: 'Stage 5: Continuous Learning',
    body: 'The Continuous Learning engine improves system intelligence over time by learning from execution data such as actual delivery times, driver behaviour, route performance, and demand variations. This self-correcting feedback loop ensures every planning cycle becomes more accurate than the last.',
    outcome: 'Every trip makes the platform smarter — forecasting, routing, and planning improve continuously.',
  },
];

const MODEL_PILLARS = [
  {
    icon: Database,
    num: '01',
    title: 'Ingest',
    desc: 'Connect multiple data sources — orders, driver apps, telematics, sensors, and enterprise systems — into a unified planning layer.',
    items: ['Orders & schedules', 'Telematics & GPS', 'Tank & sensor feeds', 'ERP / CMMS / Excel'],
  },
  {
    icon: Brain,
    num: '02',
    title: 'Plan',
    desc: 'A custom AI processing layer forecasts demand from historical data, creates optimized orders and trips, and assigns the right drivers and trucks.',
    items: ['Demand forecasting', 'Multi-drop routing', 'Resource assignment', 'What-If simulations'],
  },
  {
    icon: LineChart,
    num: '03',
    title: 'Execute & Learn',
    desc: 'Continuously monitor execution with live traffic and operational data, handle exceptions, and feed outcomes back into the AI for continuous improvement.',
    items: ['Live tracking', 'Real-time re-planning', 'Exception handling', 'Self-correcting learning'],
  },
];

const SOLUTION_PROCESSES = [
  {
    icon: BarChart3,
    name: 'Regional Distribution Networks',
    steps: [
      { title: 'Unified Dispatch', desc: 'Coordinate deliveries across multiple stations with centralized dispatch' },
      { title: 'Real-time Visibility', desc: 'Live status for every station, truck, and driver in one view' },
      { title: 'Inventory Sync', desc: 'Tank levels and delivery schedules auto-synchronized across the network' },
      { title: 'Exception Handling', desc: 'Instant alerts and automated escalation when delays or runouts emerge' },
    ],
  },
  {
    icon: Brain,
    name: 'Logistics Providers',
    steps: [
      { title: 'Route Optimization', desc: 'AI finds the most efficient paths while respecting driver hours and fuel requirements' },
      { title: 'Cost Reduction', desc: 'Reduce miles, fuel spend, and manual dispatch effort through intelligent automation' },
      { title: 'Customer Experience', desc: 'Accurate ETAs and proactive communication improve customer satisfaction' },
      { title: 'Data-driven Insights', desc: 'Dashboards reveal where margin is won and lost across every lane' },
    ],
  },
  {
    icon: Zap,
    name: 'Enterprise Fleets',
    steps: [
      { title: 'Scalable Architecture', desc: 'From 10 stations to 1000+, the platform scales seamlessly without performance degradation' },
      { title: 'Enterprise-grade Security', desc: 'Bank-grade encryption, role-based access control, and SOC 2 compliance' },
      { title: 'Compliance & Audit', desc: 'Full audit trail and automated compliance reporting for regulated operations' },
      { title: 'Integration Ready', desc: 'APIs for ERP, telematics, tank sensors, and existing enterprise systems' },
    ],
  },
  {
    icon: LineChart,
    name: 'Collaborative Teams',
    steps: [
      { title: 'Shared Dashboards', desc: 'Enable cross-functional collaboration with live shared dashboards and task assignments' },
      { title: 'In-app Messaging', desc: 'Notifications and messaging for drivers, dispatchers, and managers' },
      { title: 'Mobile-first Field Ops', desc: 'Driver mobile app for iOS & Android with offline-safe trip updates' },
      { title: 'Approval Workflows', desc: 'Admin approvals and exception handling built into every planning cycle' },
    ],
  },
];

const DIFFERENTIATORS = [
  { icon: Upload, title: 'Easy Integration', desc: 'Connect Primavera, ERP, tank sensors, and telematics out of the box' },
  { icon: Zap, title: 'Real-Time Processing', desc: 'Instant insights and exception handling the moment events occur' },
  { icon: Brain, title: 'AI-Powered Routing', desc: 'Self-correcting routing engine that learns from every trip' },
  { icon: BarChart3, title: 'Operational Dashboards', desc: 'Live visibility into fleet, stations, and delivery performance' },
];

export function HowItWorks() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.replace('#', ''));
    if (target) {
      window.setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero with light-blue gradient ── */}
      <section className="pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eff6ff] via-white to-white">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#0066cc] uppercase mb-5">
            Solutions
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight lg:tracking-[-3px] text-[#0f2d52] leading-[1.05] mb-6">
            AI-Driven Intelligent Logistics Planning
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] leading-[30px] text-[#3B394E] font-normal max-w-[780px] mx-auto">
            AI Planning is an end-to-end intelligent logistics engine that automates, optimizes,
            and continuously improves the entire process from order intake to final dispatch.
          </p>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-[-2px] text-[#0f2d52] leading-[1.15] mb-4">
                What We Offer
              </h2>
            </div>
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
              <div>
                <h3 className="text-[26px] sm:text-[30px] font-semibold text-[#0f2d52] mb-4">
                  AI Planning
                </h3>
                <p className="text-[15px] leading-[26px] text-[#3B394E]">
                  AI Planning is an intelligent logistics planning system designed to manage the
                  complete journey from data ingestion to real-time dispatch and execution. It
                  connects multiple data sources such as orders, driver apps, telematics systems,
                  sensors, and existing enterprise systems into a unified platform. Using a custom
                  AI processing layer, the system generates demand from historical data, creates
                  optimized orders and trips, assigns the right drivers and trucks, and continuously
                  monitors execution using live traffic and operational data. The platform also
                  supports admin approvals, exception handling, ETA management, and real-time
                  re-planning, ensuring operations stay efficient and on track.
                </p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#e8f0f8] to-[#c8d7ea] p-6 sm:p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Order Intake', desc: 'Orders & emergency requests' },
                    { label: 'AI Optimization', desc: 'Routes, trips, assignments' },
                    { label: 'Live Dispatch', desc: 'Real-time field execution' },
                    { label: 'Continuous Learning', desc: 'Feedback loop to AI models' },
                  ].map((b) => (
                    <div key={b.label} className="rounded-xl bg-white p-4 shadow-sm">
                      <p className="text-[13px] font-semibold text-[#0f2d52] mb-1">{b.label}</p>
                      <p className="text-[11px] text-[#3B394E] leading-snug">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── How It Works (5-Stage Flow) ── */}
      <section className="py-12 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#0f2d52] leading-[1.1] mb-5">
                How It Works
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#3B394E] font-normal max-w-[720px] mx-auto">
                From dynamic order intake to real-time dispatch and continuous learning — every
                stage is designed to keep your fleet on-time and your network efficient.
              </p>
            </div>

            {/* Self-Correcting Learning Loop banner */}
            <div className="mb-10 rounded-2xl bg-gradient-to-r from-[#0f2d52] via-[#1a3d6b] to-[#2a5a8f] px-6 py-6 sm:px-10 sm:py-7 text-center shadow-lg">
              <p className="text-[13px] font-semibold tracking-[0.2em] text-[#c8d7ea] uppercase mb-1">
                The Self-Correcting Learning Loop
              </p>
              <p className="text-[17px] sm:text-[20px] font-semibold text-white leading-snug max-w-3xl mx-auto">
                Execution data continuously feeds back into the AI models to refine forecasting,
                routing, and planning for future operations.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 lg:gap-7">
              {EXECUTION_STEPS.map((step, index) => (
                <article
                  id={step.key}
                  key={step.key}
                  className="group relative h-full scroll-mt-28 bg-white rounded-[20px] p-4 sm:p-8 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-8px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(16,24,40,0.05),0_18px_36px_-10px_rgba(0,118,149,0.18)]"
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-[40px] font-normal text-[#0066cc] leading-none tracking-[-1px]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#111019] leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[14px] sm:text-[15px] leading-[24px] text-[#3B394E] mb-4">
                    {step.body}
                  </p>
                  <p className="text-[13px] sm:text-[14px] leading-[22px] text-[#0066cc] font-medium">
                    {step.outcome}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── Our Model (3 pillars) ── */}
      <section className="py-12 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-5">
                Our Model
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#3B394E] font-normal">
                A systematic approach to operational excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {MODEL_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-white rounded-[20px] px-8 py-10 sm:px-10 sm:py-12 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-8px_rgba(16,24,40,0.08)]"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-[14px] bg-[#e8f0f8] flex items-center justify-center flex-shrink-0">
                      <pillar.icon className="w-6 h-6 text-[#0066cc]" />
                    </div>
                    <span className="text-[14px] font-semibold tracking-[0.15em] text-[#6B6A7C]">
                      STEP {pillar.num}
                    </span>
                  </div>
                  <h3 className="text-[26px] sm:text-[28px] font-normal text-[#111019] tracking-[-0.5px] mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-[15px] leading-[26px] text-[#3B394E] mb-6">
                    {pillar.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] leading-[22px] text-[#3B394E]">
                        <span className="mt-[9px] w-1 h-1 bg-[#252434] rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── How Our Solutions Work ── */}
      <section className="py-12 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#0f2d52] leading-[1.1] mb-5">
                Trusted by industry leaders
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#3B394E] font-normal">
                Our platform serves fuel distributors, logistics companies, and fleet operators of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {SOLUTION_PROCESSES.map((solution) => (
                <div
                  key={solution.name}
                  className="bg-white rounded-[20px] px-8 py-10 sm:px-10 sm:py-12 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-8px_rgba(16,24,40,0.08)]"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-[14px] bg-[#e8f0f8] flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-[#0066cc]" />
                    </div>
                    <h3 className="text-[22px] sm:text-[24px] font-medium text-[#111019] tracking-[-0.3px]">
                      {solution.name}
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {solution.steps.map((step, idx) => (
                      <div key={step.title} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#e8f0f8] flex items-center justify-center flex-shrink-0 text-[13px] font-semibold text-[#0066cc]">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="text-[15px] font-semibold text-[#111019] mb-1">
                            {step.title}
                          </h4>
                          <p className="text-[13.5px] leading-[22px] text-[#3B394E]">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── What Makes Us Different ── */}
      <section className="py-12 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-5">
                What Makes Us Different
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#3B394E] font-normal">
                Built for teams that demand clarity, accountability, and real outcomes
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {DIFFERENTIATORS.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-[20px] p-4 sm:p-8 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-8px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-[14px] bg-[#e8f0f8] flex items-center justify-center mb-5">
                    <feature.icon className="w-6 h-6 text-[#0066cc]" />
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#111019] mb-2 tracking-[-0.3px]">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-[#3B394E]">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── Find the right solution CTA ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f2d52] via-[#1a3d6b] to-[#2a5a8f]">
        <FadeInView>
          <div className="max-w-[760px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-1.5px] text-white leading-[1.15] mb-4">
              Find the right solution for your business
            </h2>
            <p className="text-[15px] leading-[26px] text-[#c8d7ea] font-normal max-w-[520px] mx-auto mb-8">
              Talk to our team about your specific needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-[#0f2d52] hover:bg-[#e8f0f8] transition-colors min-w-[180px]"
              >
                Contact sales
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-[15px] font-medium text-white hover:bg-white/20 transition-colors min-w-[180px]"
              >
                View all features
              </Link>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* <WorksWhereverBanner /> */}
    </div>
  );
}
