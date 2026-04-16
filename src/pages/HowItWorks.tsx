import { Link } from 'react-router';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Database, Brain, LineChart, Upload, Zap, BarChart3 } from 'lucide-react';
import { FadeInView } from '../components/FadeInView';
import { WorksWhereverBanner } from '../components/WorksWhereverBanner';

const EXECUTION_STEPS = [
  {
    key: 'automation-processing',
    title: 'Automation Processing',
    body: 'Theta automatically ingests, classifies, and processes operational records from connected systems. This removes repetitive manual effort, standardizes incoming data, and gives teams a clean, reliable starting point for execution.',
    outcome: 'Faster intake cycles, fewer manual errors, and better data consistency across teams.',
  },
  {
    key: 'human-validation',
    title: 'Human In The Loop Validation',
    body: 'Critical AI outputs are routed through human checkpoints for approval and correction. Domain experts can validate sensitive recommendations, handle exceptions, and ensure decisions align with business policy and field reality.',
    outcome: 'Higher trust in AI recommendations and stronger quality control before action.',
  },
  {
    key: 'ai-analysis',
    title: 'AI Analysis & Predictions',
    body: 'The platform analyzes trends, detects weak signals, and runs what-if scenarios to model different operational choices. Teams can compare paths side by side before committing resources, helping reduce risk and avoid avoidable delays.',
    outcome: 'Smarter planning, earlier risk mitigation, and more confident decision-making.',
  },
  {
    key: 'mobile-notifications',
    title: 'Mobile App Notifications',
    body: 'Time-sensitive alerts, follow-up tasks, and escalation prompts are delivered directly to field teams through mobile notifications. Teams receive exactly what to do next, who owns it, and when it is due.',
    outcome: 'Reduced response latency, clearer ownership, and faster closure of on-ground actions.',
  },
  {
    key: 'report-analysis',
    title: 'Reports & Analytics',
    body: 'Theta consolidates operational activity into clear dashboards and executive-ready reports. Leaders get live visibility into KPI trends, completion rates, bottlenecks, and performance movement across teams and projects.',
    outcome: 'Transparent performance tracking and quicker strategic decisions backed by evidence.',
  },
];

const MODEL_PILLARS = [
  {
    icon: Database,
    num: '01',
    title: 'Analysis',
    desc: 'We begin by deeply understanding your current operations, identifying inefficiencies, cost leakages, and optimization opportunities.',
    items: ['Data collection & integration', 'Process mapping', 'Baseline establishment', 'Gap analysis'],
  },
  {
    icon: Brain,
    num: '02',
    title: 'Prediction',
    desc: 'Our AI algorithms analyze patterns, forecast trends, and predict potential issues before they become problems.',
    items: ['AI-powered forecasting', 'Risk identification', 'Cost projection', 'Performance modeling'],
  },
  {
    icon: LineChart,
    num: '03',
    title: 'Strategies',
    desc: 'We implement targeted strategies and provide continuous optimization to achieve your operational goals.',
    items: ['Actionable recommendations', 'Implementation roadmap', 'Continuous monitoring', 'Performance optimization'],
  },
];

const SOLUTION_PROCESSES = [
  {
    icon: BarChart3,
    name: 'AI PMO Assistance',
    steps: [
      { title: 'Data Integration', desc: 'Connect your existing systems and import project, budget, and resource data' },
      { title: 'Real-Time Monitoring', desc: 'Track timelines, budgets, and resources with live dashboards' },
      { title: 'Variance Detection', desc: 'Automatically identify deviations from planned vs. actual metrics' },
      { title: 'Actionable Insights', desc: 'Receive recommendations and reports to optimize performance' },
    ],
  },
  {
    icon: Brain,
    name: 'AI Safety Guardian',
    steps: [
      { title: 'Edge Camera Deployment', desc: 'Install edge cameras and RFID sensors across your site for real-time monitoring' },
      { title: 'Personnel & Zone Tracking', desc: 'RFID-based personnel tracking with zone-level monitoring and access control' },
      { title: 'Real-Time Safety Alerts', desc: 'Instant notifications for PPE violations, unauthorized zone entry, and safety hazards' },
      { title: 'Safety Analytics Dashboard', desc: 'Comprehensive safety score, incident trends, and compliance reporting' },
    ],
  },
  {
    icon: Zap,
    name: 'AI Operations Assistant',
    steps: [
      { title: 'Process Automation', desc: 'Automate routine operational tasks and workflows for maximum efficiency' },
      { title: 'Intelligent Scheduling', desc: 'AI-powered resource allocation and task scheduling optimization' },
      { title: 'Performance Monitoring', desc: 'Real-time tracking of operational KPIs and efficiency metrics' },
      { title: 'Predictive Maintenance', desc: 'Anticipate issues and schedule maintenance before problems occur' },
    ],
  },
  {
    icon: LineChart,
    name: 'AI Procurement Assistant',
    steps: [
      { title: 'Smart Vendor Analysis', desc: 'AI-driven vendor evaluation and selection based on performance data' },
      { title: 'Cost Optimization', desc: 'Identify savings opportunities and negotiate better pricing automatically' },
      { title: 'Demand Forecasting', desc: 'Predict procurement needs and optimize inventory levels with AI' },
      { title: 'Compliance & Risk Management', desc: 'Automated compliance checks and risk assessment for all purchases' },
    ],
  },
];

const DIFFERENTIATORS = [
  { icon: Upload, title: 'Easy Integration', desc: 'Connect existing systems or upload data in any format' },
  { icon: Zap, title: 'Real-Time Processing', desc: 'Instant insights as soon as new data arrives' },
  { icon: Brain, title: 'AI-Powered', desc: 'Machine learning that gets smarter over time' },
  { icon: BarChart3, title: 'Custom Dashboards', desc: 'Reporting tailored to your specific needs' },
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
      {/* ── Hero ── */}
      <section className="pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#007695] uppercase mb-5">
            The Theta Methodology
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-normal tracking-tight lg:tracking-[-3px] text-[#111019] leading-[1.05] mb-6">
            How Theta Works
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] leading-[30px] text-[#3B394E] font-normal max-w-[720px] mx-auto">
            Our proven methodology combines AI-powered automation with operational
            expertise to deliver measurable results — from data intake to
            decision-ready reporting.
          </p>
        </div>
      </section>

      {/* ── 5-Step Execution Flow ── */}
      <section className="py-12 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-5">
                5-Step Execution Flow
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#3B394E] font-normal max-w-[680px] mx-auto">
                From automated data intake to decision-ready reporting — each step is
                intentionally designed to improve visibility, shorten cycle times, and
                create measurable outcomes.
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
                    <span className="text-[40px] font-normal text-[#007695] leading-none tracking-[-1px]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#111019] leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[14px] sm:text-[15px] leading-[24px] text-[#3B394E] mb-4">
                    {step.body}
                  </p>
                  <p className="text-[13px] sm:text-[14px] leading-[22px] text-[#007695] font-medium">
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
                    <div className="w-12 h-12 rounded-[14px] bg-[#E6F4F8] flex items-center justify-center flex-shrink-0">
                      <pillar.icon className="w-6 h-6 text-[#007695]" />
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
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-5">
                How Our Solutions Work
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#3B394E] font-normal">
                Four tailored AI products, one consistent execution playbook
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {SOLUTION_PROCESSES.map((solution) => (
                <div
                  key={solution.name}
                  className="bg-white rounded-[20px] px-8 py-10 sm:px-10 sm:py-12 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-8px_rgba(16,24,40,0.08)]"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-[14px] bg-[#E6F4F8] flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-[#007695]" />
                    </div>
                    <h3 className="text-[22px] sm:text-[24px] font-medium text-[#111019] tracking-[-0.3px]">
                      {solution.name}
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {solution.steps.map((step, idx) => (
                      <div key={step.title} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#E6F4F8] flex items-center justify-center flex-shrink-0 text-[13px] font-semibold text-[#007695]">
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
                  <div className="w-12 h-12 rounded-[14px] bg-[#E6F4F8] flex items-center justify-center mb-5">
                    <feature.icon className="w-6 h-6 text-[#007695]" />
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

      {/* ── CTA ── */}
      <section className="py-12 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[760px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[-2px] text-[#111019] leading-[1.15] mb-4">
              Ready to See It in Action?
            </h2>
            <p className="text-[15px] leading-[26px] text-[#6B6A7C] font-normal max-w-[520px] mx-auto mb-8">
              Schedule a demo and discover how Theta can transform your operations
              into a measurable, predictable system.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#007695] px-8 py-3.5 text-[15.6px] font-normal text-white shadow-[0_0_0_4.45px_#CCE4EC] hover:bg-[#005d77] transition-colors tracking-[0.08px] min-w-[200px]"
            >
              Get in Touch
            </Link>
          </div>
        </FadeInView>
      </section>

      <WorksWhereverBanner />
    </div>
  );
}
