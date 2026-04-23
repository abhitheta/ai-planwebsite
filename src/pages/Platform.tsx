import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  DollarSign,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Zap,
  Shield,
  FileText,
  Target,
  Activity,
  Calendar,
  MessageSquare,
  FolderOpen,
  Settings,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Database,
  CloudIcon,
  Smartphone,
  Globe,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { WorksWhereverBanner } from "../components/WorksWhereverBanner";
import { FadeInView } from "../components/FadeInView";

// Import software screenshots
import pmoDocuments from "figma:asset/0b8b34e319edaa379d7942ebe47a7de00e6a4c56.png";
import pmoSettings from "figma:asset/da9160705c98e71563d498abb92c880ae16f869c.png";
import pmoChatbot from "figma:asset/55bd9df31d3d41ca985fa863b692724889969aa2.png";

// Platform screenshots for carousel
import shotDashboard from "../assets/screens/dashboard.png";
import shotTracking from "../assets/screens/tracking.png";
import shotTrips from "../assets/screens/trips.png";
import shotStations from "../assets/screens/stations.png";

export function Platform() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      {/* ── Hero Section ── */}
      <section className="pt-[112px] sm:pt-[130px] lg:pt-[150px] pb-16 px-4 sm:px-6 lg:px-8 bg-white overflow-x-clip">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-[#e8f0f8] text-[#0066cc] text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-4">
            Platform
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-bold tracking-tight sm:tracking-[-3px] text-[#0f2d52] leading-[1.05] mb-7">
            Enterprise fuel delivery platform
          </h1>

          <p className="text-base sm:text-lg lg:text-[18px] leading-[30px] text-[#3B394E] font-normal max-w-[760px] mx-auto mb-10">
            Cloud-based software designed specifically for fuel distributors.
            Manage stations, drivers, trucks, and deliveries from one unified
            platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a
              href="https://tpanel.thetadynamics.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0066cc] px-8 py-3.5 text-[15.6px] font-normal text-white shadow-[0_0_0_4.45px_#c8d7ea] hover:bg-[#0052a3] transition-colors tracking-[0.08px] min-w-[200px]"
            >
              Start Free Trial
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0066cc] px-8 py-3.5 text-[15.6px] font-normal text-white shadow-[0_0_0_4.45px_#c8d7ea] hover:bg-[#0052a3] transition-colors tracking-[0.08px] min-w-[200px]"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[12px] text-[#6B6A7C]">
            <span>No credit card required</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>
      {/* ── Platform in action — screenshot carousel ── */}
      <PlatformCarousel />
      {/* ── What is AI PMO Assistance? ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[860px] mx-auto text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-8">
              Built for the modern fuel distributor
            </h2>
            <p className="text-[16px] leading-[28px] text-[#3B394E] font-normal mb-6">
              Everything you need to run efficient, reliable operations. A
              single unified platform that brings stations, drivers, trucks, and
              deliveries together — with cloud-based infrastructure, bank-grade
              security, and the ability to scale from 10 stations to 1000+
              without performance degradation.
            </p>
            {/* <p className="text-[16px] leading-[28px] text-[#3B394E] font-normal">
              No servers to maintain, automatic updates, 99.9% uptime, and SOC 2
              compliance out of the box — so your team can focus on operations,
              not infrastructure.
            </p> */}
          </div>

          {/* 3-column feature strip on cyan background */}
          <div className="max-w-[1240px] mx-auto">
            <div className="bg-[#c8d7ea] px-8 sm:px-14 lg:px-[72px] py-12 sm:py-14 lg:py-[60px]">
              <div className="grid md:grid-cols-3 gap-y-10 gap-x-12 lg:gap-x-20">
                <div>
                  <h3 className="text-[26px] sm:text-[28px] lg:text-[30px] font-semibold text-[#111019] leading-[1.2] mb-6">
                    Powerful desktop interface
                  </h3>
                  <p className="text-[16px] leading-[32px] text-[#252434] font-normal">
                    Powerful desktop interface for managers and dispatchers.
                    Monitor operations, approve trips, and generate reports from
                    any browser.
                  </p>
                </div>
                <div>
                  <h3 className="text-[26px] sm:text-[28px] lg:text-[30px] font-semibold text-[#111019] leading-[1.2] mb-6">
                    No servers to maintain
                  </h3>
                  <p className="text-[16px] leading-[32px] text-[#252434] font-normal">
                    Cloud-based. Access from anywhere with automatic updates,
                    backups, and 99.9% uptime guarantee.
                  </p>
                </div>
                <div>
                  <h3 className="text-[26px] sm:text-[28px] lg:text-[30px] font-semibold text-[#111019] leading-[1.2] mb-6">
                    Bank-grade encryption
                  </h3>
                  <p className="text-[16px] leading-[32px] text-[#252434] font-normal">
                    Enterprise security with bank-grade encryption, role-based
                    access control, and SOC 2 compliance. Your data is always
                    protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── Ready to modernize your operations? ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f2d52] via-[#1a3d6b] to-[#2a5a8f]">
        <FadeInView>
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-[-1.5px] text-white leading-[1.15] mb-5">
              Ready to modernize your operations?
            </h2>
            <p className="text-[16px] leading-[28px] text-[#c8d7ea] font-normal max-w-[680px] mx-auto mb-8">
              Join leading fuel distributors using AI-Planning.io to optimize
              their delivery networks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-[#0f2d52] hover:bg-[#e8f0f8] transition-colors min-w-[180px]"
              >
                Schedule a demo
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-[15px] font-medium text-white hover:bg-white/20 transition-colors min-w-[180px]"
              >
                View pricing
              </Link>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* <WorksWhereverBanner /> */}
    </div>
  );
}

/* ── Our Approach Accordion Component ── */
function OurApproachSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const steps = [
    {
      title: "Identify",
      subtitle: "What is the size of the prize?",
      desc: "We begin by understanding your current state, pain points, and the potential value that can be unlocked through better project management.",
    },
    {
      title: "Process & Plan",
      subtitle: "Clear process to achieve goals",
      desc: "Clear process to engage in to achieve the goals. Make a Gantt chart and define milestones, timelines, and success criteria.",
    },
    {
      title: "Demonstrate Value",
      subtitle: "Get a handshake for the journey",
      desc: "Quick wins and proof of concept demonstrate immediate value. Get stakeholder buy-in and commitment for the full journey.",
    },
    {
      title: "Deliver the Value",
      subtitle: "Quantify the Results",
      desc: "Full platform deployment with training, adoption support, and continuous optimization. Measure and quantify results against baseline.",
    },
    {
      title: "Manage Engagement",
      subtitle: "Monitor management support",
      desc: "Ongoing support, monitoring, and optimization. Regular check-ins with leadership to ensure sustained value and continuous improvement.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#c8d7ea]">
      <FadeInView>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            {/* Left: Title */}
            <div className="lg:pt-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-4">
                Our Approach
              </h2>
              <p className="text-[15px] leading-[26px] text-[#252434] font-normal max-w-[380px]">
                Our common approach template which is tweaked to the specific
                challenges of the organisation
              </p>
            </div>

            {/* Right: Accordion */}
            <div className="space-y-0 divide-y divide-[#252434]/15">
              {steps.map((step, index) => (
                <div key={index}>
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="flex items-center justify-between w-full py-5 text-left"
                  >
                    <span className="text-[18px] font-medium text-[#111019]">
                      {step.title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#252434] transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="pb-5">
                      <p className="text-[13px] font-medium text-[#3B394E] mb-2">
                        {step.subtitle}
                      </p>
                      <p className="text-[14px] leading-[22px] text-[#3B394E]">
                        {step.desc}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}

/* ── Platform Carousel ─────────────────────────────────────────────────────
   Center-focused slider: active slide scales up & crisp, neighbours peek
   smaller and dimmed. Auto-advance every 5s (paused on hover/focus), with
   arrows, clickable dots, and keyboard support.
─────────────────────────────────────────────────────────────────────────── */
interface PlatformShot {
  src: string;
  title: string;
  caption: string;
}

const PLATFORM_SHOTS: PlatformShot[] = [
  {
    src: shotDashboard,
    title: "Operations Dashboard",
    caption:
      "KPI cards, tank monitoring insights, and daily consumption at a glance.",
  },
  {
    src: shotTracking,
    title: "Live Tracking",
    caption:
      "Real-time fleet map with ETA, route progress, and delivery status.",
  },
  {
    src: shotTrips,
    title: "Trip Management",
    caption:
      "Filter, approve, and edit trips — with utilization and live routes.",
  },
  {
    src: shotStations,
    title: "Stations Overview",
    caption: "Full station directory with capacity, product, and daily sales.",
  },
];

function PlatformCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = PLATFORM_SHOTS.length;
  const touchStartX = useRef<number | null>(null);

  const go = (next: number) => setIndex(((next % total) + total) % total);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  const current = PLATFORM_SHOTS[index];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f7f9fc] to-white overflow-x-clip">
      <FadeInView>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-5">
            <span className="inline-block px-3 py-1 bg-[#e8f0f8] text-[#0066cc] text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-4">
              Platform in Action
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-[-1.2px] text-[#0f2d52] leading-[1.1] mb-4">
              A closer look at every screen
            </h2>
            <p className="text-[15px] sm:text-[17px] leading-[28px] text-[#3B394E] max-w-[620px] mx-auto">
              From the operations dashboard to live tracking — swipe through the
              core surfaces your team will use every day.
            </p>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70%] rounded-[60px] blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,102,204,0.22) 0%, rgba(0,102,204,0.08) 45%, rgba(0,102,204,0) 75%)",
              }}
            />

            {/* Stage */}
            <div className="relative mx-auto max-w-[1080px] h-[240px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
              {PLATFORM_SHOTS.map((shot, i) => {
                // Relative position: -1, 0, +1 (others off-stage)
                let offset = i - index;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isActive = offset === 0;
                const isSide = Math.abs(offset) === 1;
                const visible = isActive || isSide;

                return (
                  <button
                    key={shot.title}
                    type="button"
                    onClick={() => !isActive && go(index + offset)}
                    tabIndex={isActive ? 0 : -1}
                    aria-label={`${shot.title} — ${isActive ? "current" : "go to slide"}`}
                    aria-hidden={!visible}
                    className={`absolute top-1/2 left-1/2 w-[82%] sm:w-[70%] md:w-[62%] -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? "z-20 -translate-x-1/2 scale-100 opacity-100 shadow-[0_30px_60px_-20px_rgba(0,102,204,0.45)]"
                        : isSide
                          ? `z-10 scale-[0.82] opacity-40 hover:opacity-70 cursor-pointer shadow-[0_20px_40px_-18px_rgba(0,102,204,0.3)] ${
                              offset < 0
                                ? "-translate-x-[92%] sm:-translate-x-[88%]"
                                : "-translate-x-[8%] sm:-translate-x-[12%]"
                            }`
                          : "z-0 scale-[0.7] opacity-0 pointer-events-none -translate-x-1/2"
                    } rounded-[16px] sm:rounded-[22px] overflow-hidden border border-white bg-white`}
                  >
                    <img
                      src={shot.src}
                      alt={shot.title}
                      loading="lazy"
                      className="block w-full h-auto"
                    />
                  </button>
                );
              })}
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="absolute z-30 top-1/2 left-1 sm:left-3 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[#0f2d52] border border-[#c8d7ea] shadow-md hover:bg-[#0066cc] hover:text-white hover:border-[#0066cc] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="absolute z-30 top-1/2 right-1 sm:right-3 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[#0f2d52] border border-[#c8d7ea] shadow-md hover:bg-[#0066cc] hover:text-white hover:border-[#0066cc] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Caption + dots */}
          <div className="mt-5 text-center">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0066cc] mb-2">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
            <h3 className="text-xl sm:text-[24px] font-bold text-[#0f2d52] mb-2">
              {current.title}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#3B394E] max-w-[560px] mx-auto mb-6">
              {current.caption}
            </p>

            <div className="flex items-center justify-center gap-2.5">
              {PLATFORM_SHOTS.map((_, i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={active}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active
                        ? "w-8 bg-[#0066cc]"
                        : "w-2 bg-[#c8d7ea] hover:bg-[#0066cc]/50"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}
