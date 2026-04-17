import { Link } from "react-router";
import {
  Sparkles,
  Brain,
  Zap,
  TrendingUp,
  Target,
  Activity,
  Layers,
  RefreshCw,
  ShieldCheck,
  Shield,
  Eye,
  Rocket,
  ArrowRight,
  BarChart3,
  MapPin,
  Clock,
  Truck,
  Check,
  Bell,
  LineChart,
  Users,
  Calendar,
} from "lucide-react";
import { FadeInView } from "../components/FadeInView";

// Real product/dashboard visuals we already have
import intelligenceHub from "../assets/intelligenceHub.png";
import projectHub from "../assets/projectHub.png";
import reports from "../assets/reports.png";
import aiAdvisor from "../assets/aiAdvisor.png";

// ── Capability rows ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  {
    title: "Intelligent Planning",
    kicker: "Plan smarter with AI",
    icon: Brain,
    description:
      "AI-powered planning and forecasting that adapts to demand variability and operational constraints. Our systems analyze historical data, predict future patterns, and generate optimal plans automatically.",
    tags: [
      "Demand Forecasting",
      "Resource Optimization",
      "Constraint Management",
    ],
    visual: "forecast" as const,
  },
  {
    title: "Real-Time Execution",
    kicker: "Live visibility, zero lag",
    icon: Zap,
    description:
      "Execute operations with confidence using real-time monitoring, automated workflows, and intelligent exception handling. Stay in control with live visibility and instant alerts.",
    tags: ["Live Tracking", "Automated Workflows", "Exception Handling"],
    visual: "tracking" as const,
  },
  {
    title: "Continuous Optimization",
    kicker: "Gets smarter with every cycle",
    icon: TrendingUp,
    description:
      "Learn from every operation to continuously improve performance. Our AI analyzes outcomes, identifies patterns, and automatically refines processes over time.",
    tags: [
      "Performance Analytics",
      "Self-Learning Systems",
      "Predictive Insights",
    ],
    visual: "analytics" as const,
  },
];

const CORE_PRINCIPLES = [
  {
    icon: Sparkles,
    title: "Intelligence First",
    description:
      "We embed AI and advanced analytics at the core of every solution, ensuring smarter planning, better forecasting, and optimized execution — not just automation.",
  },
  {
    icon: Target,
    title: "Built for Real Operations",
    description:
      "Our systems are designed around real operational challenges, including demand variability, resource constraints, time sensitivity, and exception handling.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "Every action, outcome, and deviation feeds back into the system, making continuous learning and ongoing performance improvements over time.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Brain,
    title: "AI-native architecture",
    description: "Not rule-based automation",
  },
  {
    icon: Layers,
    title: "End-to-end platforms",
    description: "Covering planning, execution, and analytics",
  },
  {
    icon: Activity,
    title: "Real-time decision-making",
    description: "Powered by live data",
  },
  {
    icon: RefreshCw,
    title: "Self-correcting systems",
    description: "That learn from actual outcomes",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    description: "And control",
  },
  {
    icon: Rocket,
    title: "Mission-critical reliability",
    description: "Built for 24/7 operations",
  },
];

const COMMITMENTS = [
  {
    icon: Shield,
    title: "Reliability",
    description: "In mission-critical environments",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Aligned with enterprise standards",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Through real-time visibility and reporting",
  },
  {
    icon: Rocket,
    title: "Scalability",
    description: "To support growth across teams, locations, and regions",
  },
];

// ── Visual components — crafted product mockups ──────────────────────────────
function CapabilityVisual({
  kind,
}: {
  kind: "forecast" | "tracking" | "analytics";
}) {
  if (kind === "forecast") {
    const bars = [55, 68, 62, 75, 82, 78, 88];
    return (
      <div className="relative h-full min-h-[340px] rounded-[24px] bg-gradient-to-br from-[#eff6ff] via-white to-[#e8f0f8] border border-[#e8f0f8] overflow-hidden p-6 sm:p-8">
        {/* soft ambient blobs */}
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#0066cc]/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#0f2d52]/8 blur-3xl" />

        {/* Floating stat card, top-left */}
        <div className="absolute top-5 left-5 rounded-xl bg-white px-3 py-2 shadow-[0_8px_24px_-8px_rgba(15,45,82,0.25)] border border-[#e8f0f8] flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0f2d52] text-white">
            <Brain className="w-3 h-3" />
          </div>
          <div>
            <p className="text-[9px] text-[#6B6A7C] uppercase tracking-wide leading-none">
              Accuracy
            </p>
            <p className="text-[13px] font-semibold text-[#0f2d52] leading-tight">
              94.2%
            </p>
          </div>
        </div>

        {/* Floating badge, top-right */}
        <div className="absolute top-5 right-5 rounded-full bg-white px-3 py-1.5 shadow-sm border border-[#e8f0f8] text-[10px] font-semibold text-[#0066cc]">
          7-day forecast
        </div>

        {/* Main chart card */}
        <div className="relative mt-20 rounded-[16px] bg-white border border-[#e8f0f8] p-5 shadow-[0_12px_32px_-12px_rgba(15,45,82,0.18)]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[11px] text-[#6B6A7C]">Demand Forecast</p>
              <p className="text-[15px] font-semibold text-[#0f2d52]">
                +12% vs last week
              </p>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-[#e8f0f8] px-2 py-1">
              <TrendingUp className="w-3 h-3 text-[#0066cc]" />
              <span className="text-[10px] font-medium text-[#0066cc]">
                Up trend
              </span>
            </div>
          </div>
          <div className="flex items-end gap-2 h-24">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full rounded-t-md transition-all ${
                    i === bars.length - 1
                      ? "bg-gradient-to-t from-[#0066cc] to-[#0f2d52]"
                      : "bg-[#c8d7ea]"
                  }`}
                  style={{ height: `${h}%` }}
                />
                <span className="text-[8px] text-[#6B6A7C]">
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating bottom chip */}
        <div className="absolute bottom-5 right-5 rounded-xl bg-[#0f2d52] text-white px-3 py-2 shadow-lg flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5" />
          <span className="text-[11px] font-medium">Next cycle · 2h</span>
        </div>
      </div>
    );
  }

  if (kind === "tracking") {
    return (
      <div className="relative h-full min-h-[340px] rounded-[24px] bg-gradient-to-br from-[#0f2d52] via-[#1a3d6b] to-[#2a5a8f] overflow-hidden p-6 sm:p-8">
        {/* Grid background */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Route line */}
        <svg
          viewBox="0 0 320 200"
          className="absolute inset-0 w-full h-full px-6 pt-20"
        >
          <defs>
            <linearGradient id="rt" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#4fa3ff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#4fa3ff" />
            </linearGradient>
          </defs>
          <path
            d="M20,170 Q80,130 120,140 T200,90 T300,40"
            stroke="url(#rt)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {[
            { cx: 20, cy: 170 },
            { cx: 120, cy: 140 },
            { cx: 200, cy: 90 },
            { cx: 300, cy: 40 },
          ].map((p, i) => (
            <g key={i}>
              <circle cx={p.cx} cy={p.cy} r="8" fill="white" opacity="0.2" />
              <circle cx={p.cx} cy={p.cy} r="4" fill="#4fa3ff" />
            </g>
          ))}
        </svg>

        {/* Live truck card */}
        <div className="absolute top-5 left-5 right-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4fa3ff] text-white">
            <Truck className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-semibold text-white leading-tight">
              Truck 024 · Live
            </p>
            <p className="text-[10px] text-[#c8d7ea]">
              ETA 14:32 · On schedule
            </p>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4fa3ff] animate-pulse" />
            Live
          </span>
        </div>

        {/* Floating pin near end of route */}
        <div className="absolute bottom-5 right-5 rounded-xl bg-white px-3 py-2 shadow-xl flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#0066cc]" />
          <div>
            <p className="text-[9px] text-[#6B6A7C] uppercase leading-none">
              Station #42
            </p>
            <p className="text-[11px] font-semibold text-[#0f2d52] leading-tight">
              Depot Alpha
            </p>
          </div>
        </div>

        {/* Alert chip */}
        <div className="absolute bottom-5 left-5 rounded-xl bg-white px-3 py-2 shadow-xl flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#e8f0f8]">
            <Bell className="w-3 h-3 text-[#0066cc]" />
          </div>
          <p className="text-[10px] font-medium text-[#0f2d52]">
            3 exceptions
            <br />
            <span className="text-[9px] text-[#6B6A7C]">auto-resolved</span>
          </p>
        </div>
      </div>
    );
  }

  // analytics
  return (
    <div className="relative h-full min-h-[340px] rounded-[24px] bg-gradient-to-br from-white via-[#f7f9fc] to-[#e8f0f8] border border-[#e8f0f8] overflow-hidden p-6 sm:p-8">
      {/* Soft decorative circle */}
      <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#0066cc]/10" />

      {/* KPI strip */}
      <div className="relative grid grid-cols-3 gap-2 mb-4">
        {[
          { label: "Uplift", value: "+18%", icon: TrendingUp },
          { label: "Cycles", value: "1.2k", icon: RefreshCw },
          { label: "Saved", value: "$2.4M", icon: BarChart3 },
        ].map((k) => (
          <div
            key={k.label}
            className="rounded-xl bg-white border border-[#e8f0f8] p-2.5 shadow-sm"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <k.icon className="w-3 h-3 text-[#0066cc]" />
              <p className="text-[9px] text-[#6B6A7C] uppercase tracking-wide">
                {k.label}
              </p>
            </div>
            <p className="text-[15px] font-bold text-[#0f2d52] leading-none">
              {k.value}
            </p>
          </div>
        ))}
      </div>

      {/* Area chart card */}
      <div className="relative rounded-2xl bg-white border border-[#e8f0f8] p-4 shadow-[0_12px_32px_-12px_rgba(15,45,82,0.18)] mb-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] font-semibold text-[#0f2d52]">
            Learning curve
          </p>
          <span className="text-[10px] text-[#6B6A7C]">Last 30 days</span>
        </div>
        <svg viewBox="0 0 280 100" className="w-full">
          <defs>
            <linearGradient id="ar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0066cc" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0066cc" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline
            points="5,85 35,75 65,80 95,65 125,58 155,48 185,38 215,32 245,25 275,18"
            stroke="#0066cc"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <polyline
            points="5,85 35,75 65,80 95,65 125,58 155,48 185,38 215,32 245,25 275,18 275,98 5,98"
            fill="url(#ar)"
          />
          <circle cx="275" cy="18" r="4" fill="#0f2d52" />
          <circle cx="275" cy="18" r="8" fill="#0f2d52" opacity="0.18" />
        </svg>
      </div>

      {/* Pattern chips */}
      <div className="flex flex-wrap gap-1.5">
        {["Pattern detected", "Auto-tuned", "Optimized"].map((p) => (
          <span
            key={p}
            className="inline-flex items-center gap-1 rounded-full bg-[#0f2d52] text-white px-2.5 py-1 text-[10px] font-medium"
          >
            <Check className="w-2.5 h-2.5" strokeWidth={3} /> {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AboutUs() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      {/* ── Hero (navy gradient + crafted right-side composition) ─────────── */}
      <section className="relative pt-[112px] sm:pt-[130px] lg:pt-[150px] pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f2d52] via-[#1a3d6b] to-[#2a5a8f] overflow-hidden">
        {/* Decorative grid + glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-[#4fa3ff]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#4fa3ff]/10 blur-3xl" />

        <div className="relative max-w-[900px] mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#4fa3ff]" /> About Us
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight lg:tracking-[-2.5px] text-white leading-[1.05] mb-6">
            Building Intelligent Systems for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#4fa3ff]">
                Smarter Operations
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#4fa3ff]/20 -z-0 rounded" />
            </span>
          </h1>
          <p className="text-[15px] sm:text-[17px] leading-[28px] text-[#c8d7ea] max-w-[640px] mx-auto mb-8">
            We are a technology-driven company focused on building intelligent,
            AI-powered platforms that help businesses plan, execute, and
            optimize their operations with precision and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-[#0f2d52] hover:bg-[#e8f0f8] transition-colors shadow-[0_10px_24px_-8px_rgba(0,0,0,0.3)]"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/platform"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-6 py-3 text-[14px] font-medium text-white hover:bg-white/20 transition-colors"
            >
              Explore Platform
            </Link>
          </div>

          {/* Tiny trust strip */}
          <div className="mt-10 flex items-center justify-center gap-6 text-[12px] text-[#c8d7ea]">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#4fa3ff]" />
              <span>Trusted by fleet teams</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#4fa3ff]" />
              <span>24/7 operations</span>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <svg
          aria-hidden
          viewBox="0 0 1440 80"
          className="absolute bottom-0 left-0 w-full h-12 sm:h-16"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </section>

      {/* ── What We Do ────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-3 py-1 bg-[#e8f0f8] text-[#0066cc] text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-3">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-1.5px] text-[#0f2d52] leading-[1.1] mb-4">
                End-to-End{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Intelligent Operations</span>
                  {/* <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-[#4fa3ff]/25 -z-0 rounded" /> */}
                </span>
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3B394E] max-w-[640px] mx-auto">
                We design and develop enterprise-grade AI systems that bring
                together data, automation, and intelligence into a single,
                unified platform.
              </p>
            </div>

            <div className="space-y-8 lg:space-y-12">
              {CAPABILITIES.map((cap, idx) => {
                const flipped = idx % 2 === 1;
                return (
                  <div
                    key={cap.title}
                    className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch"
                  >
                    {/* Visual */}
                    <div className={flipped ? "lg:order-2" : ""}>
                      <CapabilityVisual kind={cap.visual} />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex flex-col justify-center ${flipped ? "lg:order-1" : ""}`}
                    >
                      <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0066cc] mb-3">
                        <span className="h-px w-8 bg-[#0066cc]" />
                        {cap.kicker}
                      </span>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f2d52] to-[#2a5a8f] text-white mb-5 shadow-md">
                        <cap.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-[26px] sm:text-[32px] font-bold text-[#0f2d52] tracking-[-0.8px] mb-4 leading-[1.15]">
                        {cap.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] leading-[25px] text-[#3B394E] mb-6">
                        {cap.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cap.tags.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1.5 rounded-full border border-[#c8d7ea] bg-[#f7f9fc] px-3 py-1.5 text-[12px] font-medium text-[#0f2d52]"
                          >
                            <Check
                              className="w-3 h-3 text-[#0066cc]"
                              strokeWidth={3}
                            />
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── Three Core Principles ─────────────────────────────────────────── */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f7f9fc] overflow-hidden">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-[#0066cc]/5 blur-3xl" />
        <FadeInView>
          <div className="relative max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-white text-[#0066cc] text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-3 border border-[#e8f0f8]">
                Our Approach
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-1.5px] text-[#0f2d52] leading-[1.1] mb-4">
                Three Core Principles
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3B394E] max-w-[640px] mx-auto">
                Built on a foundation of intelligence, practicality, and
                continuous evolution.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
              {CORE_PRINCIPLES.map((p, i) => (
                <div
                  key={p.title}
                  className="group relative rounded-[20px] bg-white border border-[#e8f0f8] p-7 lg:p-8 hover:border-[#0066cc]/40 hover:-translate-y-1 transition-all duration-300 shadow-[0_1px_2px_rgba(15,45,82,0.04),0_8px_24px_-12px_rgba(15,45,82,0.12)]"
                >
                  <span className="absolute top-5 right-5 text-[44px] font-bold text-[#e8f0f8] leading-none group-hover:text-[#c8d7ea] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f2d52] to-[#2a5a8f] text-white mb-5 shadow-md">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#0f2d52] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-[#3B394E]">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── Our Mission ───────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Visual panel with real product image */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -top-4 -left-4 h-28 w-28 rounded-full bg-[#0066cc]/10 blur-2xl" />
                <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[#0f2d52]/10 blur-2xl" />
                <div className="relative rounded-[24px] overflow-hidden border border-[#e8f0f8] shadow-[0_30px_60px_-20px_rgba(15,45,82,0.25)]">
                  <img
                    src={projectHub}
                    alt="Unified project workspace"
                    className="w-full h-auto"
                  />
                </div>
                {/* Floating mission chip */}
                <div className="absolute -top-3 right-6 rounded-full bg-white shadow-md border border-[#e8f0f8] px-3 py-1.5 text-[10px] font-semibold text-[#0066cc] flex items-center gap-1.5">
                  <Target className="w-3 h-3" /> Purpose-driven
                </div>
              </div>

              {/* Text content */}
              <div className="order-1 lg:order-2">
                <span className="inline-block px-3 py-1 bg-[#e8f0f8] text-[#0066cc] text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-3">
                  Our Mission
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-1.5px] text-[#0f2d52] leading-[1.1] mb-5">
                  Why We Exist
                </h2>
                <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3B394E] mb-6">
                  Many organizations still rely on manual tools, disconnected
                  systems, and static planning methods.{" "}
                  <span className="font-semibold text-[#0f2d52]">
                    We exist to change that.
                  </span>
                </p>

                <div className="relative rounded-[20px] bg-gradient-to-br from-[#0f2d52] to-[#1a3d6b] p-6 sm:p-7 shadow-xl overflow-hidden">
                  {/* decorative quote mark */}
                  <span className="absolute -top-4 right-4 text-[120px] leading-none font-serif text-white/10 select-none">
                    "
                  </span>
                  <p className="relative text-[14px] sm:text-[15px] leading-[24px] text-white">
                    Our mission is to help enterprises transition from manual,
                    spreadsheet-driven processes to intelligent, AI-driven
                    operations that are scalable, transparent, and future-ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── What Makes Us Different ───────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f7f9fc]">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-white text-[#0066cc] text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-3 border border-[#e8f0f8]">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-1.5px] text-[#0f2d52] leading-[1.1] mb-4">
                What Makes Us Different
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3B394E] max-w-[640px] mx-auto">
                We don't just provide software —{" "}
                <span className="font-semibold text-[#0066cc]">
                  we deliver operational intelligence.
                </span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {DIFFERENTIATORS.map((d, i) => (
                <div
                  key={d.title}
                  className="group relative rounded-[18px] bg-white border border-[#e8f0f8] p-6 hover:border-[#0066cc]/40 hover:shadow-lg transition-all overflow-hidden"
                >
                  {/* Corner decoration that appears on hover */}
                  <span className="absolute top-0 right-0 h-20 w-20 rounded-full bg-[#0066cc]/5 -translate-y-1/2 translate-x-1/2 group-hover:bg-[#0066cc]/10 transition-colors" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f2d52] to-[#2a5a8f] text-white shadow-md flex-shrink-0">
                      <d.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#0f2d52] mb-1">
                        {d.title}
                      </h3>
                      <p className="text-[13px] leading-[20px] text-[#3B394E]">
                        {d.description}
                      </p>
                    </div>
                  </div>
                  <span className="absolute bottom-4 right-4 text-[11px] font-semibold text-[#c8d7ea] group-hover:text-[#0066cc] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── Our Vision ────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Visual panel */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#4fa3ff]/15 to-[#0066cc]/10 blur-2xl rounded-[32px]" />
                <div className="relative rounded-[24px] overflow-hidden border border-[#e8f0f8] shadow-[0_30px_60px_-20px_rgba(15,45,82,0.25)]">
                  <img
                    src={reports}
                    alt="Operational analytics"
                    className="w-full h-auto"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 rounded-2xl bg-[#0f2d52] text-white shadow-lg px-4 py-3 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#4fa3ff]" />
                  <div>
                    <p className="text-[9px] uppercase tracking-wide text-[#c8d7ea]">
                      Visibility
                    </p>
                    <p className="text-[12px] font-semibold leading-none">
                      End-to-end
                    </p>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <span className="inline-block px-3 py-1 bg-[#e8f0f8] text-[#0066cc] text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-3">
                  Our Vision
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-1.5px] text-[#0f2d52] leading-[1.1] mb-5">
                  The Future of Operations
                </h2>
                <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#3B394E] mb-6">
                  We envision a future where operational decisions are
                  data-driven, automated, and continuously optimized — enabling
                  businesses to operate{" "}
                  <span className="font-semibold text-[#0f2d52]">
                    faster, smarter, and with greater resilience.
                  </span>
                </p>
                <div className="relative rounded-[16px] bg-[#e8f0f8] border-l-4 border-[#0066cc] px-6 py-5">
                  <p className="text-[14px] leading-[22px] text-[#0f2d52]">
                    Our goal is to become a trusted partner for organizations
                    looking to adopt AI responsibly and effectively across their
                    core operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── What You Can Expect ───────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f7f9fc]">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-white text-[#0066cc] text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-3 border border-[#e8f0f8]">
                Our Commitment
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-1.5px] text-[#0f2d52] leading-[1.1] mb-2">
                What You Can Expect
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {COMMITMENTS.map((c) => (
                <div
                  key={c.title}
                  className="group relative rounded-[18px] bg-white border border-[#e8f0f8] p-6 sm:p-7 text-center hover:border-[#0066cc]/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  {/* Gradient top accent on hover */}
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-12 rounded-b-full bg-gradient-to-r from-[#0066cc] to-[#4fa3ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f2d52] to-[#2a5a8f] text-white mb-4 shadow-md">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#0f2d52] mb-1.5">
                    {c.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] leading-[18px] text-[#3B394E]">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f2d52] via-[#1a3d6b] to-[#2a5a8f] overflow-hidden">
        {/* Decorative layers */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-[#4fa3ff]/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-60 w-60 rounded-full bg-[#4fa3ff]/10 blur-3xl" />

        <FadeInView>
          <div className="relative max-w-[820px] mx-auto text-center">
            <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm shadow-lg">
              <Sparkles className="w-6 h-6 text-[#4fa3ff]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-[-1.5px] text-white leading-[1.15] mb-5">
              Let's Build Smarter Systems
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#4fa3ff]">Together</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#4fa3ff]/20 -z-0 rounded" />
              </span>
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[24px] text-[#c8d7ea] max-w-[620px] mx-auto mb-8">
              Whether you are starting your AI journey or scaling an existing
              operation, we are here to help you design, deploy, and evolve
              intelligent systems that deliver measurable value.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-[14px] font-medium text-[#0f2d52] hover:bg-[#e8f0f8] transition-colors min-w-[160px] shadow-[0_10px_24px_-8px_rgba(0,0,0,0.3)]"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/platform"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-7 py-3 text-[14px] font-medium text-white hover:bg-white/20 transition-colors min-w-[160px]"
              >
                Explore platform
              </Link>
            </div>
          </div>
        </FadeInView>
      </section>
    </div>
  );
}
