import { Link } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router";
import {
  Database,
  Brain,
  LineChart,
  Upload,
  Zap,
  BarChart3,
} from "lucide-react";
import { FadeInView } from "../components/FadeInView";
import { WorksWhereverBanner } from "../components/WorksWhereverBanner";

const EXECUTION_STEPS = [
  {
    key: "dynamic-orders",
    title: "Stage 1: Dynamic Orders",
    body: "Ingests regular and emergency orders and enriches them with optimization-ready data like locations, time windows, and constraints. The system collects orders from multiple sources and evaluates key factors such as priority level, delivery time windows, location, package type, and urgency.",
    outcome:
      "Balanced order flow, fewer bottlenecks, every order enters the planning pipeline at the right time with the right priority.",
  },
  {
    key: "optimized-trips",
    title: "Stage 2: Optimized Trips",
    body: "Builds efficient multi-drop trips using AI routing, live traffic, risk scoring, and operational constraints. Our engine balances driver hours, fuel requirements, and customer windows to deliver the most efficient plan every time.",
    outcome:
      "Fewer miles, higher truck utilisation, and protected service levels — without manual re-planning.",
  },
  {
    key: "resource-assignment",
    title: "Stage 3: Intelligent Resource Assignment",
    body: "Assigns the right truck and driver based on compatibility, certifications, capacity, and real-time status. AI matches trucks to trips by product compatibility, ELD hours, licence class, and proximity — in seconds, not hours.",
    outcome:
      "Right driver, right truck, right trip — with compliance and capacity enforced automatically.",
  },
  {
    key: "sequential-dispatch",
    title: "Stage 4: Real-Time Sequential Dispatch",
    body: "Monitors execution, tracks progress, handles exceptions, and dynamically re-optimizes plans in real time. When delays, breakdowns, or priority changes hit, the engine reshuffles remaining trips to protect SLAs.",
    outcome:
      "Live visibility from depot to customer, with proactive recovery instead of reactive firefighting.",
  },
  {
    key: "continuous-learning",
    title: "Stage 5: Continuous Learning",
    body: "The Continuous Learning engine improves system intelligence over time by learning from execution data such as actual delivery times, driver behaviour, route performance, and demand variations. This self-correcting feedback loop ensures every planning cycle becomes more accurate than the last.",
    outcome:
      "Every trip makes the platform smarter — forecasting, routing, and planning improve continuously.",
  },
];

const MODEL_PILLARS = [
  {
    icon: Database,
    num: "01",
    title: "Ingest",
    desc: "Connect multiple data sources — orders, driver apps, telematics, sensors, and enterprise systems — into a unified planning layer.",
    items: [
      "Orders & schedules",
      "Telematics & GPS",
      "Tank & sensor feeds",
      "ERP / CMMS / Excel",
    ],
  },
  {
    icon: Brain,
    num: "02",
    title: "Plan",
    desc: "A custom AI processing layer forecasts demand from historical data, creates optimized orders and trips, and assigns the right drivers and trucks.",
    items: [
      "Demand forecasting",
      "Multi-drop routing",
      "Resource assignment",
      "What-If simulations",
    ],
  },
  {
    icon: LineChart,
    num: "03",
    title: "Execute & Learn",
    desc: "Continuously monitor execution with live traffic and operational data, handle exceptions, and feed outcomes back into the AI for continuous improvement.",
    items: [
      "Live tracking",
      "Real-time re-planning",
      "Exception handling",
      "Self-correcting learning",
    ],
  },
];

const SOLUTION_PROCESSES = [
  {
    icon: BarChart3,
    name: "Regional Distribution Networks",
    steps: [
      {
        title: "Unified Dispatch",
        desc: "Coordinate deliveries across multiple stations with centralized dispatch",
      },
      {
        title: "Real-time Visibility",
        desc: "Live status for every station, truck, and driver in one view",
      },
      {
        title: "Inventory Sync",
        desc: "Tank levels and delivery schedules auto-synchronized across the network",
      },
      {
        title: "Exception Handling",
        desc: "Instant alerts and automated escalation when delays or runouts emerge",
      },
    ],
  },
  {
    icon: Brain,
    name: "Logistics Providers",
    steps: [
      {
        title: "Route Optimization",
        desc: "AI finds the most efficient paths while respecting driver hours and fuel requirements",
      },
      {
        title: "Cost Reduction",
        desc: "Reduce miles, fuel spend, and manual dispatch effort through intelligent automation",
      },
      {
        title: "Customer Experience",
        desc: "Accurate ETAs and proactive communication improve customer satisfaction",
      },
      {
        title: "Data-driven Insights",
        desc: "Dashboards reveal where margin is won and lost across every lane",
      },
    ],
  },
  {
    icon: Zap,
    name: "Enterprise Fleets",
    steps: [
      {
        title: "Scalable Architecture",
        desc: "From 10 stations to 1000+, the platform scales seamlessly without performance degradation",
      },
      {
        title: "Enterprise-grade Security",
        desc: "Bank-grade encryption, role-based access control, and SOC 2 compliance",
      },
      {
        title: "Compliance & Audit",
        desc: "Full audit trail and automated compliance reporting for regulated operations",
      },
      {
        title: "Integration Ready",
        desc: "APIs for ERP, telematics, tank sensors, and existing enterprise systems",
      },
    ],
  },
  {
    icon: LineChart,
    name: "Collaborative Teams",
    steps: [
      {
        title: "Shared Dashboards",
        desc: "Enable cross-functional collaboration with live shared dashboards and task assignments",
      },
      {
        title: "In-app Messaging",
        desc: "Notifications and messaging for drivers, dispatchers, and managers",
      },
      {
        title: "Mobile-first Field Ops",
        desc: "Driver mobile app for iOS & Android with offline-safe trip updates",
      },
      {
        title: "Approval Workflows",
        desc: "Admin approvals and exception handling built into every planning cycle",
      },
    ],
  },
];

const DIFFERENTIATORS = [
  {
    icon: Upload,
    title: "Easy Integration",
    desc: "Connect Primavera, ERP, tank sensors, and telematics out of the box",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    desc: "Instant insights and exception handling the moment events occur",
  },
  {
    icon: Brain,
    title: "AI-Powered Routing",
    desc: "Self-correcting routing engine that learns from every trip",
  },
  {
    icon: BarChart3,
    title: "Operational Dashboards",
    desc: "Live visibility into fleet, stations, and delivery performance",
  },
];

export function HowItWorks() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.replace("#", ""));
    if (target) {
      window.setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero with light-blue gradient ── */}
      <section className="pt-[112px] sm:pt-[130px] lg:pt-[150px] pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eff6ff] via-white to-white">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-[#e8f0f8] text-[#0066cc] text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-4">
            Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight lg:tracking-[-3px] text-[#0f2d52] leading-[1.05] mb-6">
            AI-Driven Intelligent Logistics Planning
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] leading-[30px] text-[#3B394E] font-normal max-w-[780px] mx-auto">
            AI Planning is an end-to-end intelligent logistics engine that
            automates, optimizes, and continuously improves the entire process
            from order intake to final dispatch.
          </p>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-[-1.5px] text-[#0f2d52] leading-[1.15]">
                Intelligent Logistics, Reimagined
              </h2>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 sm:gap-10 lg:gap-14 items-center">
              {/* Text column */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0066cc] to-[#0f2d52] px-3 py-1 mb-4 shadow-[0_6px_20px_-8px_rgba(0,102,204,0.6)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                    What We Provide
                  </span>
                </div>
                <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#0f2d52] leading-[1.15] mb-5 tracking-[-0.8px]">
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-[#0066cc] via-[#0057b3] to-[#0f2d52] bg-clip-text text-transparent">
                      AI Planning
                    </span>
                    <span
                      aria-hidden
                      className="absolute -bottom-1 left-0 right-0 h-3 bg-[#4fa3ff]/25 rounded"
                    />
                  </span>
                </h3>
                <p className="text-[14.5px] sm:text-[15px] leading-[26px] text-[#3B394E] mb-6">
                  AI Planning is an intelligent logistics planning system
                  designed to manage the complete journey from data ingestion to
                  real-time dispatch and execution. It connects multiple data
                  sources such as orders, driver apps, telematics systems,
                  sensors, and existing enterprise systems into a unified
                  platform. Using a custom AI processing layer, the system
                  generates demand from historical data, creates optimized
                  orders and trips, assigns the right drivers and trucks, and
                  continuously monitors execution using live traffic and
                  operational data.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    {
                      label: "Order Intake",
                      desc: "Orders & emergency requests",
                    },
                    {
                      label: "AI Optimization",
                      desc: "Routes, trips, assignments",
                    },
                    {
                      label: "Live Dispatch",
                      desc: "Real-time field execution",
                    },
                    {
                      label: "Continuous Learning",
                      desc: "Feedback loop to AI models",
                    },
                  ].map((b) => (
                    <div
                      key={b.label}
                      className="rounded-xl bg-[#f7f9fc] border border-[#e8f0f8] p-3.5 hover:border-[#0066cc]/40 hover:bg-white hover:shadow-md transition-all"
                    >
                      <p className="text-[13px] font-semibold text-[#0f2d52] mb-0.5">
                        {b.label}
                      </p>
                      <p className="text-[11px] text-[#6B6A7C] leading-snug">
                        {b.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated visual */}
              <AIPlanningVisual />
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── How It Works (SVG zig-zag flow, blue-tinted shadows) ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <FadeInView>
          <div className="max-w-[1286px] mx-auto">
            {/* Desktop — SVG-based layout with blue-tinted shadows */}
            <div className="hidden md:block">
              <svg
                className="w-full h-auto"
                viewBox="0 0 1286 716"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ── Section title ── */}
                <text
                  x="643"
                  y="60"
                  textAnchor="middle"
                  fontFamily="inherit"
                  fontSize="52"
                  fontWeight="400"
                  fill="#0f2d52"
                  letterSpacing="-2.5"
                >
                  How It Works
                </text>
                <text
                  x="643"
                  y="105"
                  textAnchor="middle"
                  fontFamily="inherit"
                  fontSize="16"
                  fill="#6B6A7C"
                  fontStyle="italic"
                >
                  From order intake to real-time dispatch — intelligent
                  orchestration end-to-end
                </text>

                {/* ── Dashed connector masks ── */}
                <mask id="flow-m1" fill="white">
                  <path d="M163 429C163 411.327 177.327 397 195 397H324C341.673 397 356 411.327 356 429V584C356 601.673 341.673 616 324 616H195C177.327 616 163 601.673 163 584V429Z" />
                </mask>
                <path
                  d="M163 429C163 411.327 177.327 397 195 397H324C341.673 397 356 411.327 356 429V584C356 601.673 341.673 616 324 616H195C177.327 616 163 601.673 163 584V429Z"
                  fill=""
                />
                <path
                  d="M191.154 613.755C191.176 613.758 191.198 613.76 191.22 613.763C191.451 613.792 191.682 613.818 191.915 613.842C191.924 613.843 191.933 613.844 191.942 613.845C192.186 613.869 192.43 613.891 192.675 613.91C192.692 613.911 192.709 613.913 192.726 613.914C192.95 613.931 193.175 613.945 193.401 613.957C193.425 613.958 193.449 613.96 193.473 613.961C193.707 613.973 193.942 613.982 194.178 613.988C194.214 613.989 194.251 613.989 194.287 613.99C194.524 613.996 194.762 614 195 614V618C193.524 618 192.069 617.905 190.641 617.722C190.614 617.718 190.588 617.714 190.562 617.711L190.82 615.729L191.079 613.746C191.104 613.749 191.129 613.752 191.154 613.755ZM200.375 614V618H195V614H200.375ZM221.875 614V618H211.125V614H221.875ZM243.375 614V618H232.625V614H243.375ZM264.875 614V618H254.125V614H264.875ZM286.375 614V618H275.625V614H286.375ZM307.875 614V618H297.125V614H307.875ZM328.18 615.729L328.396 617.396C326.325 617.79 324.187 618 322 618H318.625V614H324C324.222 614 324.444 613.996 324.665 613.991C324.772 613.989 324.878 613.987 324.984 613.984C324.993 613.984 325.002 613.984 325.011 613.983C325.994 613.955 326.965 613.884 327.924 613.774L328.18 615.729ZM176.737 607.803C177.194 608.154 177.662 608.491 178.139 608.815C178.18 608.844 178.221 608.872 178.263 608.9C178.44 609.02 178.618 609.136 178.798 609.252C178.828 609.271 178.858 609.291 178.889 609.311C179.049 609.413 179.211 609.514 179.374 609.613C179.411 609.636 179.448 609.659 179.485 609.682C179.672 609.794 179.859 609.905 180.048 610.014C180.07 610.026 180.092 610.039 180.114 610.052C180.708 610.392 181.314 610.711 181.932 611.011C181.967 611.028 182.002 611.045 182.037 611.062C182.447 611.258 182.862 611.447 183.282 611.625C183.306 611.635 183.33 611.645 183.354 611.655C183.408 611.678 183.462 611.702 183.517 611.725L182.751 613.572L181.984 615.417C181.953 615.404 181.922 615.392 181.891 615.379C179.528 614.391 177.301 613.145 175.246 611.676C174.926 611.447 174.612 611.211 174.301 610.972L175.519 609.389L176.737 607.803ZM343.481 609.389L343.933 609.977C341.742 611.828 339.315 613.409 336.702 614.664L336.249 613.572L335.585 611.971C338.125 611.045 340.508 609.825 342.686 608.354L343.481 609.389ZM167.344 595.646C167.35 595.661 167.357 595.675 167.363 595.69C167.545 596.119 167.737 596.543 167.938 596.962C167.954 596.997 167.971 597.032 167.988 597.067C168.388 597.893 168.825 598.697 169.297 599.479C169.316 599.51 169.335 599.541 169.354 599.572C169.45 599.732 169.55 599.89 169.649 600.047C169.682 600.098 169.714 600.15 169.747 600.201C169.862 600.38 169.979 600.558 170.098 600.734C170.126 600.777 170.155 600.818 170.184 600.86C170.508 601.338 170.846 601.806 171.197 602.263L169.611 603.481L168.027 604.698C167.788 604.387 167.552 604.073 167.323 603.753C166.173 602.144 165.16 600.43 164.3 598.628C164.103 598.215 163.914 597.798 163.733 597.377C163.695 597.288 163.658 597.198 163.62 597.108C163.607 597.077 163.595 597.046 163.582 597.015L165.428 596.249L167.275 595.483C167.298 595.538 167.321 595.591 167.344 595.646ZM353.572 596.249L353.703 596.303C352.674 598.952 351.325 601.441 349.699 603.72L349.389 603.481L348.763 603C350.578 600.923 352.101 598.613 353.275 596.126L353.572 596.249ZM165 584C165 584.227 165.003 584.454 165.008 584.68C165.009 584.744 165.011 584.809 165.013 584.873C165.042 585.903 165.123 586.92 165.254 587.921L163.271 588.18L161.289 588.438C161.286 588.411 161.282 588.385 161.278 588.358C161.095 586.93 161 585.476 161 584V579.156H165V584ZM356 584C356 585.416 355.911 586.811 355.743 588.181L355.729 588.18L355.689 588.174C355.892 586.81 356 585.417 356 584ZM165 559.781V569.469H161V559.781H165ZM165 540.406V550.094H161V540.406H165ZM165 521.031V530.719H161V521.031H165ZM165 501.656V511.344H161V501.656H165ZM165 482.281V491.969H161V482.281H165ZM165 462.906V472.594H161V462.906H165ZM165 443.531V453.219H161V443.531H165ZM165 433.844H161V431C161 428.813 161.21 426.675 161.604 424.603L163.271 424.82L165.225 425.075C165.101 426.154 165.027 427.249 165.007 428.358C165.002 428.572 165 428.786 165 429V433.844ZM169.611 409.519L170.646 410.313C169.174 412.491 167.954 414.874 167.028 417.414L165.428 416.751L164.505 416.368V416.367L164.335 416.297C165.59 413.684 167.171 411.257 169.022 409.066L169.611 409.519ZM182.751 399.428L182.873 399.724C180.386 400.898 178.076 402.421 175.999 404.236L175.519 403.611L175.279 403.3C177.558 401.674 180.047 400.325 182.696 399.296L182.751 399.428ZM195 397C193.583 397 192.19 397.107 190.825 397.31L190.82 397.271L190.818 397.256C192.189 397.088 193.584 397 195 397Z"
                  fill="#0066cc"
                  mask="url(#flow-m1)"
                />

                <mask id="flow-m2" fill="white">
                  <path d="M570 546C552.327 546 538 531.673 538 514V385C538 367.327 552.327 353 570 353H725C742.673 353 757 367.327 757 385V514C757 531.673 742.673 546 725 546H570Z" />
                </mask>
                <path
                  d="M570 546C552.327 546 538 531.673 538 514V385C538 367.327 552.327 353 570 353H725C742.673 353 757 367.327 757 385V514C757 531.673 742.673 546 725 546H570Z"
                  fill=""
                />
                <path
                  d="M754.755 517.846C754.758 517.824 754.76 517.802 754.763 517.78C754.792 517.549 754.818 517.318 754.842 517.085C754.843 517.076 754.844 517.067 754.845 517.058C754.869 516.814 754.891 516.57 754.91 516.325C754.911 516.308 754.913 516.291 754.914 516.274C754.931 516.05 754.945 515.825 754.957 515.599C754.958 515.575 754.96 515.551 754.961 515.527C754.973 515.293 754.982 515.058 754.988 514.822C754.989 514.786 754.989 514.749 754.99 514.713C754.996 514.476 755 514.238 755 514H759C759 515.476 758.905 516.931 758.722 518.359C758.718 518.386 758.714 518.412 758.711 518.438L756.729 518.18L754.746 517.921C754.749 517.896 754.752 517.871 754.755 517.846ZM755 508.625H759V514H755V508.625ZM755 487.125H759V497.875H755V487.125ZM755 465.625H759V476.375H755V465.625ZM755 444.125H759V454.875H755V444.125ZM755 422.625H759V433.375H755V422.625ZM755 401.125H759V411.875H755V401.125ZM756.729 380.82L758.396 380.604C758.79 382.675 759 384.813 759 387V390.375H755V385C755 384.778 754.996 384.556 754.991 384.335C754.989 384.228 754.987 384.122 754.984 384.016C754.984 384.007 754.984 383.998 754.983 383.989C754.955 383.006 754.884 382.035 754.774 381.076L756.729 380.82ZM748.803 532.263C749.154 531.806 749.491 531.338 749.815 530.861C749.844 530.82 749.872 530.779 749.9 530.737C750.02 530.56 750.136 530.382 750.252 530.202C750.271 530.172 750.291 530.142 750.311 530.111C750.413 529.951 750.514 529.789 750.613 529.626C750.636 529.589 750.659 529.552 750.682 529.515C750.794 529.328 750.905 529.141 751.014 528.952C751.026 528.93 751.039 528.908 751.052 528.886C751.392 528.292 751.711 527.686 752.011 527.068C752.028 527.033 752.045 526.998 752.062 526.963C752.258 526.553 752.447 526.138 752.625 525.718C752.635 525.694 752.645 525.67 752.655 525.646C752.678 525.592 752.702 525.538 752.725 525.483L754.572 526.249L756.417 527.016C756.404 527.047 756.392 527.078 756.379 527.109C755.391 529.472 754.145 531.699 752.676 533.754C752.447 534.074 752.211 534.388 751.972 534.699L750.389 533.481L748.803 532.263ZM750.389 365.519L750.977 365.067C752.828 367.258 754.409 369.685 755.664 372.298L754.572 372.751L752.971 373.415C752.045 370.875 750.825 368.492 749.354 366.314L750.389 365.519ZM736.646 541.656C736.661 541.65 736.675 541.643 736.69 541.637C737.119 541.455 737.543 541.263 737.962 541.062C737.997 541.046 738.032 541.029 738.067 541.012C738.893 540.612 739.697 540.175 740.479 539.703C740.51 539.684 740.541 539.665 740.572 539.646C740.732 539.55 740.89 539.45 741.047 539.351C741.098 539.318 741.15 539.286 741.201 539.253C741.38 539.138 741.558 539.021 741.734 538.902C741.777 538.874 741.818 538.845 741.86 538.816C742.338 538.492 742.806 538.154 743.263 537.803L744.481 539.389L745.698 540.973C745.387 541.212 745.073 541.448 744.753 541.677C743.144 542.827 741.43 543.84 739.628 544.7C739.215 544.897 738.798 545.086 738.377 545.267C738.288 545.305 738.198 545.342 738.108 545.38C738.077 545.393 738.046 545.405 738.015 545.418L737.249 543.572L736.483 541.725C736.538 541.702 736.591 541.679 736.646 541.656ZM737.249 355.428L737.303 355.297C739.952 356.326 742.441 357.675 744.72 359.301L744.481 359.611L744 360.237C741.923 358.422 739.613 356.899 737.126 355.725L737.249 355.428ZM725 544C725.227 544 725.454 543.997 725.68 543.992C725.744 543.991 725.809 543.989 725.873 543.987C726.903 543.958 727.92 543.877 728.921 543.746L729.18 545.729L729.438 547.711C729.411 547.714 729.385 547.718 729.358 547.722C727.93 547.905 726.476 548 725 548H720.156V544H725ZM725 353C726.416 353 727.811 353.089 729.181 353.257L729.18 353.271L729.174 353.311C727.81 353.108 726.417 353 725 353ZM700.781 544H710.469V548H700.781V544ZM681.406 544H691.094V548H681.406V544ZM662.031 544H671.719V548H662.031V544ZM642.656 544H652.344V548H642.656V544ZM623.281 544H632.969V548H623.281V544ZM603.906 544H613.594V548H603.906V544ZM584.531 544H594.219V548H584.531V544ZM574.844 544V548H572C569.813 548 567.675 547.79 565.603 547.396L565.82 545.729L566.075 543.775C567.154 543.899 568.249 543.973 569.358 543.993C569.572 543.998 569.786 544 570 544H574.844ZM550.519 539.389L551.313 538.354C553.491 539.826 555.874 541.046 558.414 541.972L557.751 543.572L557.368 544.495H557.367L557.297 544.665C554.684 543.41 552.257 541.829 550.066 539.978L550.519 539.389ZM540.428 526.249L540.724 526.127C541.898 528.614 543.421 530.924 545.236 533.001L544.611 533.481L544.3 533.721C542.674 531.442 541.325 528.953 540.296 526.304L540.428 526.249ZM538 514C538 515.417 538.107 516.81 538.31 518.175L538.271 518.18L538.256 518.182C538.088 516.811 538 515.416 538 514Z"
                  fill="#0066cc"
                  mask="url(#flow-m2)"
                />

                <mask id="flow-m3" fill="white">
                  <path d="M1028 527C1028 544.673 1013.67 559 996 559H867C849.327 559 835 544.673 835 527V372C835 354.327 849.327 340 867 340H996C1013.67 340 1028 354.327 1028 372V527Z" />
                </mask>
                <path
                  d="M1028 527C1028 544.673 1013.67 559 996 559H867C849.327 559 835 544.673 835 527V372C835 354.327 849.327 340 867 340H996C1013.67 340 1028 354.327 1028 372V527Z"
                  fill=""
                />
                <path
                  d="M999.846 342.245C999.824 342.242 999.802 342.24 999.78 342.237C999.549 342.208 999.318 342.182 999.085 342.158C999.076 342.157 999.067 342.156 999.058 342.155C998.814 342.131 998.57 342.109 998.325 342.09C998.308 342.089 998.291 342.087 998.274 342.086C998.05 342.069 997.825 342.055 997.599 342.043C997.575 342.042 997.551 342.04 997.527 342.039C997.293 342.027 997.058 342.018 996.822 342.012C996.786 342.011 996.749 342.011 996.713 342.01C996.476 342.004 996.238 342 996 342V338C997.476 338 998.931 338.095 1000.36 338.278C1000.39 338.282 1000.41 338.286 1000.44 338.289L1000.18 340.271L999.921 342.254C999.896 342.251 999.871 342.248 999.846 342.245ZM990.625 342V338H996V342H990.625ZM969.125 342V338H979.875V342H969.125ZM947.625 342V338H958.375V342H947.625ZM926.125 342V338H936.875V342H926.125ZM904.625 342V338H915.375V342H904.625ZM883.125 342V338H893.875V342H883.125ZM862.82 340.271L862.604 338.604C864.675 338.21 866.813 338 869 338H872.375V342H867C866.778 342 866.556 342.004 866.335 342.009C866.228 342.011 866.122 342.013 866.016 342.016C866.007 342.016 865.998 342.016 865.989 342.017C865.006 342.045 864.035 342.116 863.076 342.226L862.82 340.271ZM1014.26 348.197C1013.81 347.846 1013.34 347.509 1012.86 347.185C1012.82 347.156 1012.78 347.128 1012.74 347.1C1012.56 346.98 1012.38 346.864 1012.2 346.748C1012.17 346.729 1012.14 346.709 1012.11 346.689C1011.95 346.587 1011.79 346.486 1011.63 346.387C1011.59 346.364 1011.55 346.341 1011.51 346.318C1011.33 346.206 1011.14 346.095 1010.95 345.986C1010.93 345.974 1010.91 345.961 1010.89 345.948C1010.29 345.608 1009.69 345.289 1009.07 344.989C1009.03 344.972 1009 344.955 1008.96 344.938C1008.55 344.742 1008.14 344.553 1007.72 344.375C1007.69 344.365 1007.67 344.355 1007.65 344.345C1007.59 344.322 1007.54 344.298 1007.48 344.275L1008.25 342.428L1009.02 340.583C1009.05 340.596 1009.08 340.608 1009.11 340.621C1011.47 341.609 1013.7 342.855 1015.75 344.324C1016.07 344.553 1016.39 344.789 1016.7 345.028L1015.48 346.611L1014.26 348.197ZM847.519 346.611L847.067 346.023C849.258 344.172 851.685 342.591 854.298 341.336L854.751 342.428L855.415 344.029C852.875 344.955 850.492 346.175 848.314 347.646L847.519 346.611ZM1023.66 360.354C1023.65 360.339 1023.64 360.325 1023.64 360.31C1023.45 359.881 1023.26 359.457 1023.06 359.038C1023.05 359.003 1023.03 358.968 1023.01 358.933C1022.61 358.107 1022.17 357.303 1021.7 356.521C1021.68 356.49 1021.67 356.459 1021.65 356.428C1021.55 356.268 1021.45 356.11 1021.35 355.953C1021.32 355.902 1021.29 355.85 1021.25 355.799C1021.14 355.62 1021.02 355.442 1020.9 355.266C1020.87 355.223 1020.85 355.182 1020.82 355.14C1020.49 354.662 1020.15 354.194 1019.8 353.737L1021.39 352.519L1022.97 351.302C1023.21 351.613 1023.45 351.927 1023.68 352.247C1024.83 353.856 1025.84 355.57 1026.7 357.372C1026.9 357.785 1027.09 358.202 1027.27 358.623C1027.3 358.712 1027.34 358.802 1027.38 358.892C1027.39 358.923 1027.41 358.954 1027.42 358.985L1025.57 359.751L1023.72 360.517C1023.7 360.462 1023.68 360.409 1023.66 360.354ZM837.428 359.751L837.297 359.697C838.326 357.048 839.675 354.559 841.301 352.28L841.611 352.519L842.237 353C840.422 355.077 838.899 357.387 837.725 359.874L837.428 359.751ZM1026 372C1026 371.773 1026 371.546 1025.99 371.32C1025.99 371.256 1025.99 371.191 1025.99 371.127C1025.96 370.097 1025.88 369.08 1025.75 368.079L1027.73 367.82L1029.71 367.562C1029.71 367.589 1029.72 367.615 1029.72 367.642C1029.9 369.07 1030 370.524 1030 372V376.844H1026V372ZM835 372C835 370.584 835.089 369.189 835.257 367.819L835.271 367.82L835.311 367.826C835.108 369.19 835 370.583 835 372ZM1026 396.219V386.531H1030V396.219H1026ZM1026 415.594V405.906H1030V415.594H1026ZM1026 434.969V425.281H1030V434.969H1026ZM1026 454.344V444.656H1030V454.344H1026ZM1026 473.719V464.031H1030V473.719H1026ZM1026 493.094V483.406H1030V493.094H1026ZM1026 512.469V502.781H1030V512.469H1026ZM1026 522.156H1030V525C1030 527.187 1029.79 529.325 1029.4 531.397L1027.73 531.18L1025.78 530.925C1025.9 529.846 1025.97 528.751 1025.99 527.642C1026 527.428 1026 527.214 1026 527V522.156ZM1021.39 546.481L1020.35 545.687C1021.83 543.509 1023.05 541.126 1023.97 538.586L1025.57 539.249L1026.5 539.632V539.633L1026.67 539.703C1025.41 542.316 1023.83 544.743 1021.98 546.934L1021.39 546.481ZM1008.25 556.572L1008.13 556.276C1010.61 555.102 1012.92 553.579 1015 551.764L1015.48 552.389L1015.72 552.7C1013.44 554.326 1010.95 555.675 1008.3 556.704L1008.25 556.572ZM996 559C997.417 559 998.81 558.893 1000.17 558.69L1000.18 558.729L1000.18 558.744C998.811 558.912 997.416 559 996 559Z"
                  fill="#0066cc"
                  mask="url(#flow-m3)"
                />

                {/* ── Card 1: Dynamic Orders (top-left) ── */}
                <g filter="url(#flow-f0)">
                  <rect
                    x="8"
                    y="224"
                    width="400"
                    height="200"
                    rx="20"
                    fill="white"
                    shapeRendering="crispEdges"
                  />
                </g>
                <text
                  x="40"
                  y="274"
                  fontFamily="inherit"
                  fontSize="40"
                  fontWeight="300"
                  fill="#0f2d52"
                >
                  1
                </text>
                <text
                  x="78"
                  y="275"
                  fontFamily="inherit"
                  fontSize="22"
                  fontWeight="600"
                  fill="#0f2d52"
                >
                  Dynamic Orders
                </text>
                <text
                  x="40"
                  y="315"
                  fontFamily="inherit"
                  fontSize="15"
                  fill="#3B394E"
                >
                  Ingests regular &amp; emergency orders and enriches
                </text>
                <text
                  x="40"
                  y="337"
                  fontFamily="inherit"
                  fontSize="15"
                  fill="#3B394E"
                >
                  them with optimization-ready data — locations,
                </text>
                <text
                  x="40"
                  y="359"
                  fontFamily="inherit"
                  fontSize="15"
                  fill="#3B394E"
                >
                  time windows, and operational constraints.
                </text>

                {/* ── Card 3: Intelligent Assignment (top-right) ── */}
                <g filter="url(#flow-f3)">
                  <rect
                    x="569"
                    y="224"
                    width="400"
                    height="200"
                    rx="20"
                    fill="white"
                    shapeRendering="crispEdges"
                  />
                </g>
                <text
                  x="601"
                  y="274"
                  fontFamily="inherit"
                  fontSize="40"
                  fontWeight="300"
                  fill="#0f2d52"
                >
                  3
                </text>
                <text
                  x="639"
                  y="275"
                  fontFamily="inherit"
                  fontSize="22"
                  fontWeight="600"
                  fill="#0f2d52"
                >
                  Intelligent Assignment
                </text>
                <text
                  x="601"
                  y="315"
                  fontFamily="inherit"
                  fontSize="15"
                  fill="#3B394E"
                >
                  Assigns the right truck and driver based on
                </text>
                <text
                  x="601"
                  y="337"
                  fontFamily="inherit"
                  fontSize="15"
                  fill="#3B394E"
                >
                  compatibility, certifications, capacity, and
                </text>
                <text
                  x="601"
                  y="359"
                  fontFamily="inherit"
                  fontSize="15"
                  fill="#3B394E"
                >
                  real-time status — in seconds, not hours.
                </text>

                {/* ── Card 2: Optimized Trips (bottom center-left) ── */}
                <g filter="url(#flow-f1)">
                  <rect
                    x="320"
                    y="506"
                    width="400"
                    height="200"
                    rx="20"
                    fill="white"
                    shapeRendering="crispEdges"
                  />
                </g>
                <text
                  x="352"
                  y="556"
                  fontFamily="inherit"
                  fontSize="40"
                  fontWeight="300"
                  fill="#0f2d52"
                >
                  2
                </text>
                <text
                  x="390"
                  y="557"
                  fontFamily="inherit"
                  fontSize="22"
                  fontWeight="600"
                  fill="#0f2d52"
                >
                  Optimized Trips
                </text>
                <text
                  x="352"
                  y="597"
                  fontFamily="inherit"
                  fontSize="15"
                  fill="#3B394E"
                >
                  Builds efficient multi-drop trips using AI routing,
                </text>
                <text
                  x="352"
                  y="619"
                  fontFamily="inherit"
                  fontSize="15"
                  fill="#3B394E"
                >
                  live traffic, risk scoring, and operational
                </text>
                <text
                  x="352"
                  y="641"
                  fontFamily="inherit"
                  fontSize="15"
                  fill="#3B394E"
                >
                  constraints — fewer miles, higher utilisation.
                </text>

                {/* ── Card 4: Real-Time Dispatch (bottom-right) ── */}
                <g filter="url(#flow-f2)">
                  <rect
                    x="882"
                    y="506"
                    width="400"
                    height="200"
                    rx="20"
                    fill="white"
                    shapeRendering="crispEdges"
                  />
                </g>
                <text
                  x="914"
                  y="556"
                  fontFamily="inherit"
                  fontSize="40"
                  fontWeight="300"
                  fill="#0f2d52"
                >
                  4
                </text>
                <text
                  x="952"
                  y="557"
                  fontFamily="inherit"
                  fontSize="22"
                  fontWeight="600"
                  fill="#0f2d52"
                >
                  Real-Time Dispatch
                </text>
                <text
                  x="914"
                  y="597"
                  fontFamily="inherit"
                  fontSize="15"
                  fill="#3B394E"
                >
                  Monitors execution, tracks progress, handles
                </text>
                <text
                  x="914"
                  y="619"
                  fontFamily="inherit"
                  fontSize="15"
                  fill="#3B394E"
                >
                  exceptions, and dynamically re-optimizes
                </text>
                <text
                  x="914"
                  y="641"
                  fontFamily="inherit"
                  fontSize="15"
                  fill="#3B394E"
                >
                  plans in real time — protecting every SLA.
                </text>

                {/* ── Filters with blue-tinted shadows (AI Planning palette) ── */}
                <defs>
                  <filter
                    id="flow-f0"
                    x="0"
                    y="222"
                    width="412"
                    height="212"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.784 0 0 0 0 0.843 0 0 0 0 0.918 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="flow-f1"
                    x="312"
                    y="504"
                    width="412"
                    height="212"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.784 0 0 0 0 0.843 0 0 0 0 0.918 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="flow-f2"
                    x="874"
                    y="504"
                    width="412"
                    height="212"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.784 0 0 0 0 0.843 0 0 0 0 0.918 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="flow-f3"
                    x="561"
                    y="222"
                    width="412"
                    height="212"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.784 0 0 0 0 0.843 0 0 0 0 0.918 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            {/* Mobile — stacked cards fallback */}
            <div className="md:hidden">
              <div className="text-center mb-8" data-stagger>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-[-1.5px] text-[#0f2d52] leading-[1.1] mb-3">
                  How It Works
                </h2>
                <p className="text-[14px] leading-[22px] text-[#6B6A7C] italic max-w-[320px] mx-auto">
                  From order intake to real-time dispatch — intelligent
                  orchestration end-to-end
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    num: 1,
                    title: "Dynamic Orders",
                    desc: "Ingests regular & emergency orders and enriches them with optimization-ready data — locations, time windows, and operational constraints.",
                  },
                  {
                    num: 2,
                    title: "Optimized Trips",
                    desc: "Builds efficient multi-drop trips using AI routing, live traffic, risk scoring, and operational constraints.",
                  },
                  {
                    num: 3,
                    title: "Intelligent Assignment",
                    desc: "Assigns the right truck and driver based on compatibility, certifications, capacity, and real-time status.",
                  },
                  {
                    num: 4,
                    title: "Real-Time Dispatch",
                    desc: "Monitors execution, tracks progress, handles exceptions, and dynamically re-optimizes plans in real time.",
                  },
                ].map((step) => (
                  <div
                    key={step.num}
                    className="group bg-white rounded-[16px] px-7 py-6 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_10px_28px_-8px_rgba(0,102,204,0.35)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-[36px] font-light text-[#0f2d52] leading-none tracking-[-1px]">
                        {step.num}
                      </span>
                      <h3 className="text-[20px] font-semibold text-[#0f2d52] leading-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[14px] leading-[22px] text-[#6B6A7C]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── Self-Correcting Learning Loop — capstone ── */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <FadeInView>
          <div className="relative max-w-[1200px] mx-auto">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0f2d52] via-[#1a3d6b] to-[#2a5a8f] shadow-[0_30px_60px_-20px_rgba(15,45,82,0.45)]">
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
                <div data-stagger>
                  <p className="text-[12px] font-semibold tracking-[0.25em] text-[#4fa3ff] uppercase mb-3">
                    The Self-Correcting Learning Loop
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white leading-[1.15] mb-4">
                    Continuous Improvement Engine
                  </h3>
                  <p className="text-[14px] sm:text-[15px] leading-[24px] text-[#c8d7ea] max-w-[540px]">
                    Execution data continuously feeds back into the AI models to
                    refine forecasting, routing, and planning for future
                    operations. Every trip, every delivery, every exception
                    teaches the system something new.
                  </p>
                </div>

                {/* Inline loop SVG — feedback cycle visualisation */}
                <div className="relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 320 260"
                    className="w-full max-w-[320px] h-auto"
                    aria-hidden
                  >
                    <defs>
                      <marker
                        id="loop-arrow"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto"
                      >
                        <path d="M0,0 L10,5 L0,10 z" fill="#4fa3ff" />
                      </marker>
                      <radialGradient id="loop-core" cx="50%" cy="50%" r="50%">
                        <stop
                          offset="0%"
                          stopColor="#4fa3ff"
                          stopOpacity="0.4"
                        />
                        <stop
                          offset="100%"
                          stopColor="#4fa3ff"
                          stopOpacity="0"
                        />
                      </radialGradient>
                    </defs>

                    {/* core glow */}
                    <circle cx="160" cy="130" r="60" fill="url(#loop-core)" />

                    {/* 4 nodes */}
                    {[
                      { cx: 160, cy: 40, t: "Plan" },
                      { cx: 250, cy: 130, t: "Execute" },
                      { cx: 160, cy: 220, t: "Measure" },
                      { cx: 70, cy: 130, t: "Learn" },
                    ].map((n) => (
                      <g key={n.t}>
                        <circle
                          cx={n.cx}
                          cy={n.cy}
                          r="32"
                          fill="#fff"
                          fillOpacity="0.1"
                          stroke="#4fa3ff"
                          strokeWidth="2"
                        />
                        <text
                          x={n.cx}
                          y={n.cy + 4}
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="600"
                          fill="#ffffff"
                        >
                          {n.t}
                        </text>
                      </g>
                    ))}

                    {/* connecting arrows clockwise */}
                    <path
                      d="M188,52 Q230,75 232,100"
                      stroke="#4fa3ff"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#loop-arrow)"
                    />
                    <path
                      d="M232,160 Q215,200 188,210"
                      stroke="#4fa3ff"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#loop-arrow)"
                    />
                    <path
                      d="M132,210 Q90,200 88,160"
                      stroke="#4fa3ff"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#loop-arrow)"
                    />
                    <path
                      d="M88,100 Q105,75 132,52"
                      stroke="#4fa3ff"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#loop-arrow)"
                    />

                    {/* small orbit dots */}
                    <circle cx="160" cy="70" r="3" fill="#4fa3ff" />
                    <circle cx="220" cy="130" r="3" fill="#4fa3ff" />
                    <circle cx="160" cy="190" r="3" fill="#4fa3ff" />
                    <circle cx="100" cy="130" r="3" fill="#4fa3ff" />
                  </svg>
                </div>
              </div>
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
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14px] leading-[22px] text-[#3B394E]"
                      >
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
                Our platform serves fuel distributors, logistics companies, and
                fleet operators of all sizes.
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
                Built for teams that demand clarity, accountability, and real
                outcomes
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

// ═══════════════════════════════════════════════════════════════════════════
// Animated AI Planning visual — nodes pulse, data flows along connectors,
// central AI brain rotates with orbiting data chips
// ═══════════════════════════════════════════════════════════════════════════
function AIPlanningVisual() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,102,204,0.25) 0%, rgba(0,102,204,0) 70%)",
        }}
      />

      <div className="relative rounded-[24px] bg-gradient-to-br from-[#eff6ff] via-white to-[#e8f0f8] border border-[#e8f0f8] p-4 sm:p-6 shadow-[0_20px_60px_-20px_rgba(15,45,82,0.25)] overflow-hidden">
        {/* Grid backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,102,204,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,102,204,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <svg
          viewBox="0 0 480 380"
          className="relative w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="ai-brain" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4fa3ff" />
              <stop offset="100%" stopColor="#0066cc" />
            </linearGradient>
            <linearGradient id="ai-node" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#eff6ff" />
            </linearGradient>
            <radialGradient id="ai-glow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#4fa3ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4fa3ff" stopOpacity="0" />
            </radialGradient>
            <filter id="ai-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feOffset dy="2" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Central glow */}
          <circle cx="240" cy="190" r="120" fill="url(#ai-glow)">
            <animate
              attributeName="r"
              values="110;130;110"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Connector lines — from peripheral nodes to central brain */}
          {[
            { x: 80, y: 80 },
            { x: 400, y: 80 },
            { x: 60, y: 300 },
            { x: 420, y: 300 },
          ].map((n, i) => (
            <g key={`line-${i}`}>
              <line
                x1={n.x}
                y1={n.y}
                x2="240"
                y2="190"
                stroke="#c8d7ea"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Flowing pulse */}
              <circle r="3.5" fill="#0066cc">
                <animateMotion
                  dur={`${2.4 + i * 0.3}s`}
                  repeatCount="indefinite"
                  path={`M${n.x},${n.y} L240,190`}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur={`${2.4 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}

          {/* Outer orbit ring */}
          <circle
            cx="240"
            cy="190"
            r="78"
            fill="none"
            stroke="#4fa3ff"
            strokeWidth="1"
            strokeDasharray="3 6"
            opacity="0.5"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 240 190"
              to="360 240 190"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Central AI brain */}
          <g filter="url(#ai-shadow)">
            <circle cx="240" cy="190" r="58" fill="url(#ai-brain)" />
            <circle
              cx="240"
              cy="190"
              r="58"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.3"
              strokeWidth="2"
            />
            {/* Brain icon strokes */}
            <g
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            >
              <path d="M220,175 Q215,185 220,195 Q215,205 225,210" />
              <path d="M260,175 Q265,185 260,195 Q265,205 255,210" />
              <circle cx="230" cy="185" r="2" fill="#ffffff" />
              <circle cx="250" cy="185" r="2" fill="#ffffff" />
              <circle cx="240" cy="200" r="2" fill="#ffffff" />
              <path d="M230,185 L240,200 L250,185" />
            </g>
            <text
              x="240"
              y="235"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#ffffff"
              letterSpacing="1.5"
            >
              AI CORE
            </text>
          </g>

          {/* Orbiting data chips */}
          <g>
            <circle cx="318" cy="190" r="5" fill="#f4bb3a">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 240 190"
                to="360 240 190"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="162" cy="190" r="5" fill="#2ba868">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="180 240 190"
                to="540 240 190"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="240" cy="112" r="4" fill="#ff6b6b">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="90 240 190"
                to="450 240 190"
                dur="10s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Node card: Orders (top-left) */}
          <PlanningNode
            x={20}
            y={42}
            w={120}
            label="Orders"
            value="1,284"
            color="#0066cc"
            delay="0s"
          />
          {/* Node card: Telemetry (top-right) */}
          <PlanningNode
            x={340}
            y={42}
            w={120}
            label="Telemetry"
            value="Live"
            color="#2ba868"
            delay="0.5s"
          />
          {/* Node card: Routes (bottom-left) */}
          <PlanningNode
            x={0}
            y={262}
            w={120}
            label="Routes"
            value="+18%"
            color="#f4bb3a"
            delay="1s"
          />
          {/* Node card: Dispatch (bottom-right) */}
          <PlanningNode
            x={360}
            y={262}
            w={120}
            label="Dispatch"
            value="96%"
            color="#0066cc"
            delay="1.5s"
          />
        </svg>

        {/* Corner metric pill */}
        <div className="absolute top-5 right-5 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur border border-[#e8f0f8] px-2.5 py-1 shadow-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ba868] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2ba868]" />
          </span>
          <span className="text-[10px] font-semibold text-[#0f2d52]">
            AI Active
          </span>
        </div>
      </div>
    </div>
  );
}

function PlanningNode({
  x,
  y,
  w,
  label,
  value,
  color,
  delay,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  value: string;
  color: string;
  delay: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height="56"
        rx="10"
        fill="url(#ai-node)"
        stroke="#c8d7ea"
        strokeWidth="1"
        filter="url(#ai-shadow)"
      >
        <animate
          attributeName="opacity"
          values="0.85;1;0.85"
          dur="2.4s"
          begin={delay}
          repeatCount="indefinite"
        />
      </rect>
      <circle cx={x + 14} cy={y + 18} r="4" fill={color}>
        <animate
          attributeName="r"
          values="3;5;3"
          dur="1.6s"
          begin={delay}
          repeatCount="indefinite"
        />
      </circle>
      <text
        x={x + 26}
        y={y + 22}
        fontSize="10"
        fontWeight="600"
        fill="#6B6A7C"
        letterSpacing="0.5"
      >
        {label.toUpperCase()}
      </text>
      <text x={x + 12} y={y + 44} fontSize="16" fontWeight="700" fill="#0f2d52">
        {value}
      </text>
    </g>
  );
}
