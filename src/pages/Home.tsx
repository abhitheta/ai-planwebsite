import { Link } from 'react-router';
import { ArrowRight, CheckCircle, BarChart3, Brain, Shield, Users, Clock, TrendingUp, Zap, Target, Database, LineChart, Wrench, Smartphone, BrainCircuit, Play, BarChart2, Settings, Send, Sparkles, DollarSign, Activity, Layers, AlertTriangle, FileText, Camera, Radio, Bell, Lock, ClipboardList, CheckCircle2Icon, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

import productImg1 from '../assets/projectHub.png';
import productImg2 from '../assets/reports.png';
import productImg3 from '../assets/aiAdvisor.png';
import productImg4 from '../assets/intelligenceHub.png';
import productImg5 from "../assets/knowlegdeBase.png"
import productImg6 from "../assets/thetaEngage.png"
import productImg7 from "../assets/thetaEngage.png"
import heroPreviewImage from '../assets/da9160705c98e71563d498abb92c880ae16f869c.png';
import cyberImage from "../assets/image.png"
import designBG from '../assets/designBG.png';
import heroVideo from '../assets/demo.mp4';
import { useParallax } from '../components/useParallax';
import chartViewIcon from '../assets/icons/chartView.png';
import messageIcon from '../assets/icons/messageIcon.png';
import noteIcon from '../assets/icons/noteIcon.png';
import settingIcon from '../assets/icons/setttingIcon.png';
import shareIcon from '../assets/icons/shareIcon.png';
import upDirectionIcon from '../assets/icons/upDirection.png';
import NSCCIcon from '../assets/icons/nsccIcon.png'
import DesconIcon from '../assets/icons/desconIcon.png'

// --- Interfaces ---
interface ProductTileProps {
  title: string;
  description: string;
  icon: React.ElementType;
  colorClass: string;
  linkTo: string;
  hoverColorClass: string;
}

interface ShowcaseFeature {
  key: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

const SHOWCASE_FEATURES: ShowcaseFeature[] = [
  {
    key: 'ai',
    label: 'AI Intelligence',
    title: 'AI Intelligence',
    description:
      'Leverage advanced machine learning to detect cost anomalies, predict budget overruns, and deliver smart recommendations helping you make faster, data-driven decisions.',
    bullets: [
      'Automated anomaly detection in real time',
      'Predictive cost forecasting with 95% accuracy',
      'Smart insights and actionable recommendations',
      'Natural language queries for instant answers',
    ],
    image: heroPreviewImage,
  },
  {
    key: 'portfolio',
    label: 'Project Management',
    title: 'Project Management',
    description:
      'Manage hundreds of projects with unified portfolio views. Track progress, dependencies, and priorities in one centralized platform designed for enterprise scale.',
    bullets: [
      'Unified dashboard for all projects and programs',
      'Cross-project dependency tracking',
      'Portfolio-level resource optimization',
      'Executive rollup reports and KPIs',
    ],
    image: productImg2,
  },
  {
    key: 'analytics',
    label: 'Real-Time Analytics',
    title: 'Real-Time Analytics',
    description:
      'Get instant visibility with live dashboards that update every 15 minutes and interactive drill-down reporting from portfolio to task level.',
    bullets: [
      'Live dashboards with 15-minute refresh cycles',
      'Customizable KPI scorecards and widgets',
      'Interactive charts with drill-down capabilities',
      'Scheduled reports delivered to your inbox',
    ],
    image: productImg1,
  },
  {
    key: 'resources',
    label: 'Resource Planning',
    title: 'Resource Planning',
    description:
      'Optimize resource allocation across projects using capacity planning, skill matching, and workload balancing to keep teams focused on priority outcomes.',
    bullets: [
      'Team capacity planning and utilization tracking',
      'Skills-based resource matching',
      'Workload balancing across projects',
      'Time tracking and timesheet management',
    ],
    image: productImg4,
  },
  {
    key: 'cost',
    label: 'Cost Intelligence',
    title: 'Cost Intelligence',
    description:
      'Monitor budgets in real time with AI-powered variance analysis. Get instant alerts on overruns and identify optimization opportunities early.',
    bullets: [
      'Real-time budget tracking and variance analysis',
      'Automated cost anomaly detection and alerts',
      'Spend forecasting with predictive models',
      'Cost optimization recommendations',
    ],
    image: productImg3,
  },
];

// --- Helper Components ---

function ProductTile({ title, description, icon: Icon, colorClass, linkTo, hoverColorClass }: ProductTileProps) {
  return (
    <Link to={linkTo}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative p-6 rounded-2xl cursor-pointer shadow-lg border-2 ${colorClass} ${hoverColorClass} transition-colors duration-300 flex flex-col h-full overflow-hidden group`}
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Icon size={120} />
        </div>
        <div className="bg-white/80 p-3 rounded-xl w-fit mb-4 backdrop-blur-sm z-10 shadow-sm group-hover:bg-white transition-colors">
          <Icon size={32} className="text-slate-800" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3 z-10 leading-tight">
          {title}
        </h3>
        <p className="text-slate-700 text-sm z-10 leading-relaxed font-medium">
          {description}
        </p>

        <div className="mt-auto pt-4 z-10">
          <span className="inline-flex items-center text-sm font-bold bg-white/70 px-4 py-2 rounded-full group-hover:bg-slate-800 group-hover:text-white transition-all text-slate-800">
            Learn More <Play size={12} className="ml-2" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

function CenterProcess() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Title */}
      <h2 className="absolute top-0 text-center text-sm font-bold tracking-widest text-slate-500 uppercase">
        Our 4-Step Intelligent Process
      </h2>

      {/* Main Center Circle */}
      <div className="relative w-72 h-72 flex items-center justify-center z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-4 border-dashed border-teal-500/30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border-2 border-indigo-400/40"
        />
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-teal-800 to-indigo-900 shadow-2xl flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <BrainCircuit size={84} className="text-teal-300 mb-2" />
            <div className="w-16 h-1 bg-teal-400/50 rounded-full blur-[2px]" />
          </motion.div>
        </div>
      </div>

      {/* 4 Steps positioned around the center */}

      {/* 1. Processing (Top Left) */}
      <div className="absolute top-[10%] left-0 w-64 text-right pr-4 border-r-2 border-blue-300">
        <div className="flex justify-end mb-2 text-blue-500"><Database size={28} /></div>
        <h4 className="font-bold text-slate-800 text-lg">1. Processing</h4>
        <p className="text-xs text-slate-600 mt-1">Ingests data from diverse sources like IoT trackers, operational controls, and historical records.</p>
      </div>

      {/* 2. Engagement & Actions (Top Right) */}
      <div className="absolute top-[10%] right-0 w-64 text-left pl-4 border-l-2 border-orange-300">
        <div className="flex justify-start mb-2 text-orange-500"><BarChart2 size={28} /></div>
        <h4 className="font-bold text-slate-800 text-lg">2. Engagement & Actions</h4>
        <p className="text-xs text-slate-600 mt-1">Reports deviations, learns from them, and generates follow-up actions for closure.</p>
      </div>

      {/* 3. App for Actions (Bottom Right) */}
      <div className="absolute bottom-[10%] right-0 w-64 text-left pl-4 border-l-2 border-purple-300">
        <div className="flex justify-start mb-2 text-purple-500"><Smartphone size={28} /></div>
        <h4 className="font-bold text-slate-800 text-lg">3. App for Actions</h4>
        <p className="text-xs text-slate-600 mt-1">Pushes alerts and actionable tasks directly to field teams via a dedicated mobile app.</p>
      </div>

      {/* 4. Predictions & What-IFs (Bottom Left) */}
      <div className="absolute bottom-[10%] left-0 w-64 text-right pr-4 border-r-2 border-green-300">
        <div className="flex justify-end mb-2 text-green-500"><Sparkles size={28} /></div>
        <h4 className="font-bold text-slate-800 text-lg">4. Predictions & What-IFs</h4>
        <p className="text-xs text-slate-600 mt-1">Offers forecasts and controlled scenario analysis through an interactive chatbot assistant.</p>
      </div>
    </div>
  );
}

export function Home() {
  const [activeProduct, setActiveProduct] = useState(0);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeFeature, setActiveFeature] = useState('ai');
  const [isShowcaseImageError, setIsShowcaseImageError] = useState(false);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeHeroOption, setActiveHeroOption] = useState('project-data-hub');
  const [activeProcessStep, setActiveProcessStep] = useState('automation-processing');
  const [isMobileHero, setIsMobileHero] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  // Subtle parallax for the hero glow layer — premium, non-distracting
  const heroGlowRef = useParallax<HTMLDivElement>(0.08);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const sectionTitleClass = 'text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900';
  const sectionSubtitleClass = 'text-base sm:text-lg text-slate-600 leading-relaxed';
  const cardTitleClass = 'text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight';
  const cardBodyClass = 'text-base text-slate-700 leading-relaxed';

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Lock when section reaches top
      if (containerTop <= 0 && containerTop > -(containerHeight - windowHeight)) {
        setIsLocked(true);
        // Calculate progress through the section (0 to 1)
        const progress = Math.abs(containerTop) / (containerHeight - windowHeight);
        // 2 stages (AI PMO Assistance features, Portfolio Dashboard)
        const newStage = Math.min(Math.floor(progress * 2) + 1, 2);
        if (newStage !== currentStage) {
          setFadeIn(false);
          setTimeout(() => {
            setCurrentStage(newStage);
            setFadeIn(true);
          }, 150);
        }
      } else {
        setIsLocked(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentStage]);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    const updateHeroMode = () => {
      setIsMobileHero(window.innerWidth < 1024);
    };

    updateHeroMode();
    window.addEventListener('resize', updateHeroMode);

    return () => window.removeEventListener('resize', updateHeroMode);
  }, []);

  useEffect(() => {
    if (!isMobileHero) return;

    const interval = window.setInterval(() => {
      setActiveHeroOption((currentOption) => {
        const currentIndex = heroOptions.findIndex((option) => option.key === currentOption);
        const nextIndex = (currentIndex + 1) % heroOptions.length;
        return heroOptions[nextIndex].key;
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isMobileHero]);

  useEffect(() => {
    const elements = featureRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const key = entry.target.getAttribute('data-feature-key');
          if (key) {
            setActiveFeature(key);
          }
        });
      },
      {
        threshold: 0.55,
        rootMargin: '-10% 0px -35% 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsShowcaseImageError(false);
  }, [activeFeature]);

  const heroOptions = [
    {
      key: 'project-data-hub',
      label: 'Project Data Hub',
      icon: Layers,
      image: productImg1,
      bg: 'from-[#f5fbf7] via-[#edf7f0] to-[#ffffff]',
      glow: 'bg-[#0066cc]/20',
      accent: 'border-[#0066cc] bg-[#f8fffa]',
      marker: 'bg-[#0066cc]/15 border-[#0066cc]/25',
      lineStrong: 'bg-[#0066cc]/35',
      lineSoft: 'bg-[#0066cc]/18',
      miniTitle: 'Project Data Hub',
      miniDesc: 'Centralize live project data, tracking, and operational visibility.',
    },
    {
      key: 'reports-analytics',
      label: 'Reports & Analytics',
      icon: BarChart3,
      image: productImg2,
      bg: 'from-[#f7fbff] via-[#edf5ff] to-[#ffffff]',
      glow: 'bg-[#4fa3ff]/18',
      accent: 'border-[#4fa3ff] bg-[#f9fdff]',
      marker: 'bg-[#4fa3ff]/15 border-[#4fa3ff]/25',
      lineStrong: 'bg-[#4fa3ff]/35',
      lineSoft: 'bg-[#4fa3ff]/18',
      miniTitle: 'Reports & Analytics',
      miniDesc: 'Review trends, dashboards, and outcome summaries in one place.',
    },
    {
      key: 'ai-project-advisor',
      label: 'AI Project Advisor',
      icon: Sparkles,
      image: productImg3,
      bg: 'from-[#fbf7ff] via-[#f2ecff] to-[#ffffff]',
      glow: 'bg-[#0066cc]/18',
      accent: 'border-[#0066cc] bg-[#fdfaff]',
      marker: 'bg-[#0066cc]/15 border-[#0066cc]/25',
      lineStrong: 'bg-[#0066cc]/35',
      lineSoft: 'bg-[#0066cc]/18',
      miniTitle: 'AI Project Advisor',
      miniDesc: 'Ask natural-language questions and get guided project support.',
    },
    {
      key: 'intelligence-hub',
      label: 'Intelligence Hub',
      icon: Brain,
      image: productImg4,
      bg: 'from-[#fff9f3] via-[#fff1e7] to-[#ffffff]',
      glow: 'bg-[#0066cc]/18',
      accent: 'border-[#0066cc] bg-[#fffcf8]',
      marker: 'bg-[#0066cc]/15 border-[#0066cc]/25',
      lineStrong: 'bg-[#0066cc]/35',
      lineSoft: 'bg-[#0066cc]/18',
      miniTitle: 'Intelligence Hub',
      miniDesc: 'Bring insights, alerts, and operational intelligence together.',
    },
    {
      key: 'knowledge-base',
      label: 'Knowledge Base',
      icon: FileText,
      image: productImg5,
      bg: 'from-[#f8fafc] via-[#eef2f7] to-[#ffffff]',
      glow: 'bg-[#7c8aa5]/18',
      accent: 'border-[#7c8aa5] bg-[#fbfcfe]',
      marker: 'bg-[#7c8aa5]/15 border-[#7c8aa5]/25',
      lineStrong: 'bg-[#7c8aa5]/35',
      lineSoft: 'bg-[#7c8aa5]/18',
      miniTitle: 'Knowledge Base',
      miniDesc: 'Store references, SOPs, and project context for quick retrieval.',
    },
    {
      key: 'theta-engage',
      label: 'Theta Engage',
      icon: Send,
      image: productImg6,
      bg: 'from-[#f6fbff] via-[#edf7ff] to-[#ffffff]',
      glow: 'bg-[#47a3ff]/18',
      accent: 'border-[#47a3ff] bg-[#f8fcff]',
      marker: 'bg-[#47a3ff]/15 border-[#47a3ff]/25',
      lineStrong: 'bg-[#47a3ff]/35',
      lineSoft: 'bg-[#47a3ff]/18',
      miniTitle: 'Theta Engage',
      miniDesc: 'Share updates, collaborate, and route actions across teams.',
    },
    {
      key: 'prediction-what-if',
      label: 'Prediction what if',
      icon: Target,
      image: productImg3,
      bg: 'from-[#fff8f2] via-[#fff0e5] to-[#ffffff]',
      glow: 'bg-[#0066cc]/18',
      accent: 'border-[#0066cc] bg-[#fffaf7]',
      marker: 'bg-[#0066cc]/15 border-[#0066cc]/25',
      lineStrong: 'bg-[#0066cc]/35',
      lineSoft: 'bg-[#0066cc]/18',
      miniTitle: 'Prediction what if',
      miniDesc: 'Run scenarios and compare likely outcomes before acting.',
    },
  ];

  const processSteps = [
    {
      key: 'dynamic-orders',
      title: 'Stage 1: Dynamic Orders',
      description: 'Ingests regular and emergency orders and enriches them with optimization-ready data like locations, time windows, and constraints.',
      image: productImg1,
      subtitleLink: '/how-it-works#dynamic-orders',
    },
    {
      key: 'optimized-trips',
      title: 'Stage 2: Optimized Trips',
      description: 'Builds efficient multi-drop trips using AI routing, live traffic, risk scoring, and operational constraints.',
      image: productImg2,
      subtitleLink: '/how-it-works#optimized-trips',
    },
    {
      key: 'resource-assignment',
      title: 'Stage 3: Intelligent Resource Assignment',
      description: 'Assigns the right truck and driver based on compatibility, certifications, capacity, and real-time status.',
      image: productImg5,
      subtitleLink: '/how-it-works#resource-assignment',
    },
    {
      key: 'sequential-dispatch',
      title: 'Stage 4: Real-Time Sequential Dispatch',
      description: 'Monitors execution, tracks progress, handles exceptions, and dynamically re-optimizes plans in real time.',
      image: productImg3,
      subtitleLink: '/how-it-works#sequential-dispatch',
    },
    {
      key: 'continuous-learning',
      title: 'Stage 5: Continuous Learning',
      description: 'Execution data continuously feeds back into the AI models to refine forecasting, routing, and planning for future operations.',
      image: productImg3,
      subtitleLink: '/how-it-works#continuous-learning',
    },
  ];

  const activeProcess = processSteps.find((step) => step.key === activeProcessStep) ?? processSteps[0];

  const activeHeroTheme = heroOptions.find((option) => option.key === activeHeroOption) ?? heroOptions[0];

  const activeShowcaseFeature = SHOWCASE_FEATURES.find((feature) => feature.key === activeFeature) ?? SHOWCASE_FEATURES[0];
  const activeFeatureIndex = SHOWCASE_FEATURES.findIndex((feature) => feature.key === activeFeature);
  const desktopFeatureSlots = SHOWCASE_FEATURES.map((_, slotIndex) => {
    const normalizedIndex =
      (activeFeatureIndex - 2 + slotIndex + SHOWCASE_FEATURES.length) % SHOWCASE_FEATURES.length;

    return {
      feature: SHOWCASE_FEATURES[normalizedIndex],
      originalIndex: normalizedIndex,
    };
  });

  const getDesktopChipPositionClass = (slotIndex: number) => {
    if (slotIndex === 0) return 'self-end';
    if (slotIndex === 1) return 'self-center';
    if (slotIndex === 2) return 'self-start';
    if (slotIndex === 3) return 'self-center';
    return 'self-end';
  };

  useEffect(() => {
    const observers = productRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveProduct(index);
            }
          });
        },
        { threshold: 0.6 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const products = [
    {
      icon: Zap,
      title: 'Intelligent Cost Tracking',
      description: 'Automatically track and categorize project costs in real-time. Our AI engine identifies anomalies and provides instant alerts when spending exceeds thresholds.',
      features: ['Real-time cost monitoring', 'Automated categorization', 'Budget variance alerts', 'Predictive analytics'],
      color: 'from-blue-500 to-cyan-500',
      image: productImg1,
    },
    {
      icon: Target,
      title: 'Resource Optimization',
      description: 'Maximize efficiency with intelligent resource allocation. Match the right people to the right projects and eliminate bottlenecks before they impact delivery.',
      features: ['Smart allocation algorithms', 'Capacity planning', 'Utilization tracking', 'Skills-based matching'],
      color: 'from-purple-500 to-pink-500',
      image: productImg2,
    },
    {
      icon: Database,
      title: 'Portfolio Analytics',
      description: 'Get complete visibility across your entire project portfolio. Interactive dashboards and custom reports help you make data-driven decisions faster.',
      features: ['Custom dashboards', 'Executive reporting', 'Trend analysis', 'Export capabilities'],
      color: 'from-green-500 to-emerald-500',
      image: productImg3,
    },
    {
      icon: LineChart,
      title: 'Predictive Insights',
      description: 'Leverage machine learning to forecast project outcomes. Identify risks early and take proactive action to keep projects on track and within budget.',
      features: ['Risk prediction', 'Timeline forecasting', 'Cost projections', 'Success probability'],
      color: 'from-orange-500 to-red-500',
      image: productImg4,
    },
  ];

  return (
    <div className=" bg-white">
      {/* Hero Section with AI Planning violet-navy gradient */}
      <section className="relative pt-[112px] sm:pt-[130px] lg:pt-[150px] overflow-hidden bg-gradient-to-b from-white via-[#e0e7ff] to-white">
        {/* Radial purple glow — subtle parallax drifts slower than scroll for depth */}
        <div
          ref={heroGlowRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(99,72,229,0.22) 0%, rgba(99,72,229,0.08) 45%, rgba(255,255,255,0) 75%)',
          }}
        />
        <div className="relative z-20 pt-8 sm:pt-10"

        >
          <div className="max-w-4xl mx-auto text-center" data-stagger>
            <p className="text-sm sm:text-base text-[#0066cc] mb-3">
              AI-Planning.io
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-semibold tracking-tight text-slate-900 leading-tight">
              Smart Logistics Planning.
              <br />
              Built for real operations.
            </h2>
            <h3 className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              AI-powered fuel delivery planning and tracking platform. Optimize routes, predict demand,
              and manage your fleet with real-time visibility.
            </h3>

            <div className="mt-14 flex flex-col items-center gap-3">
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center rounded-full bg-[#0066cc] px-10 py-3 text-sm font-medium text-white shadow-[0_10px_25px_rgba(56,182,121,0.28)] hover:bg-[#0052a3] transition-colors"
              >
                Get Started
              </Link>
              <p className="text-xs text-slate-500">
                For Mac, Windows, iOS, and Android
              </p>
            </div>
          </div>

          <motion.div

            className="relative pt-8 sm:pt-10 lg:pt-12 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className={`relative overflow-hidden lg:overflow-visible`}
              transition={{ duration: 0.35 }}
            >
              <div
                className="pointer-events-none absolute inset-0 bg-cover text-center bg-center bg-no-repeat "
                style={{ backgroundImage: `url(${designBG})` }}
              // style={{ background: 'radial-gradient(circle at bottom right, rgba(22,101,52,0.58) 0%, rgba(22,101,52,0.28) 36%, rgba(22,101,52,0.00) 74%)' }}

              />
              <div className={`absolute -right-14 top-10 h-52 w-52 rounded-full blur-3xl ${activeHeroTheme.glow}`} />
              <div className="absolute inset-0 opacity-12"
              // style={{ backgroundImage: 'linear-gradient(to right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.18) 1px, transparent 1px)', backgroundSize: '72px 72px' }}
              />

              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/45 to-transparent" />
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 sm:h-96 sm:w-96"
              // style={{ background: 'radial-gradient(circle at bottom right, rgba(22,101,52,0.72) 0%, rgba(22,101,52,0.36) 34%, rgba(22,101,52,0.00) 72%)' }}
              />

              {/* Continuously-looping hero video (replaces static dashboard image) */}
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="AI Planning platform preview"
                className="relative mx-auto block w-[92%] max-w-[560px] h-auto rounded-[18px] border-2 border-white/80 object-cover bg-white shadow-[0px_10px_30px_rgba(15,45,82,0.35)] transition-all duration-500 sm:w-[88%] sm:max-w-[720px] sm:rounded-[24px] lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[1000px] lg:max-w-none lg:h-[600px] lg:rounded-[30px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:shadow-[0px_15px_50px_0px_rgba(99,72,229,0.55)]"
              />

              <div className="relative min-h-0 pb-6 sm:pb-8 lg:min-h-[720px] lg:pb-0">
                {/* <motion.div
                  className="absolute left-4 sm:left-6 top-1/2 hidden h-20 w-20 -translate-y-1/2 rounded-2xl border border-white/70 bg-white/75 backdrop-blur-md shadow-lg lg:flex items-center justify-center"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <div className={`h-10 w-10 rounded-xl border ${activeHeroTheme.marker}`} />
                </motion.div> */}

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="sticky top-16 bg-gradient-to-b from-white to-gray-50 z-10 py-6 mb-10">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Powerful Features for Modern Teams
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Everything you need to manage projects, control costs, and drive success
                </p>
              </div>
            </div>

            <div className="flex top-16 flex-col lg:flex-row gap-12 lg:gap-16">
           
              <div className="flex-1 space-y-12">
                {products.map((product, index) => (
                  <div
                    key={index}
                    ref={(el) => (productRefs.current[index] = el)}
                    className="scroll-mt-32"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                        activeProduct === index
                          ? 'border-[#0f2d52] bg-white shadow-xl'
                          : 'border-gray-200 bg-white/50'
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}>
                        <product.icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {product.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      <ul className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#0f2d52] shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="hidden lg:block lg:flex-1">
                <div className="sticky top-32">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProduct}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={products[activeProduct].image}
                          alt={products[activeProduct].title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      
                      <div className="flex items-center justify-center gap-2 mt-6">
                        {products.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              idx === activeProduct ? 'w-8 bg-[#0f2d52]' : 'w-1.5 bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${products[activeProduct].color} rounded-full blur-2xl opacity-20`} />
                      <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br ${products[activeProduct].color} rounded-full blur-2xl opacity-20`} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section> */}


      {/* Product Showcase Section */}
      {/* <section className="min-h-screen lg:block hidden py-12 px-6 font-sans text-slate-900 overflow-x-hidden">
        <div className="max-w-[1400px] mx-auto">
          <header className="mb-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={sectionTitleClass}
            >
              Theta AI: <span className="bg-clip-text text-[#0f2d52]">Predictive Intelligence</span> for Industrial Operations
            </motion.h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">

            <div className="lg:col-span-3 flex flex-col gap-8 z-20">
              <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-[-1rem] text-center">Our Suite of AI Assistants</h3>

              <ProductTile
                title="AI PMO Assistant"
                description="Eliminate project surprises. A digital layer across your project controls environment that identifies risks early and helps teams act before issues escalate."
                icon={Activity}
                colorClass="bg-blue-100/80 border-blue-200"
                hoverColorClass="hover:border-blue-400 hover:shadow-blue-200"
                linkTo="/theta-pmo"
              />

              <ProductTile
                title="AI Safety Guardian"
                description="From reporting incidents to preventing them. Real-time, predictive safety intelligence across people, equipment, and work zones."
                icon={Shield}
                colorClass="bg-green-100/80 border-green-200"
                hoverColorClass="hover:border-green-400 hover:shadow-green-200"
                linkTo="/theta-hse"
              />
            </div>

            <div className="lg:col-span-6 hidden lg:block">
              <CenterProcess />
            </div>

            <div className="lg:col-span-3 flex flex-col gap-8 z-20 mt-8 lg:mt-0">
              <div className="h-4 hidden lg:block" />

              <ProductTile
                title="AI Cost of Operations Assistant"
                description="Find hidden waste. Improve productivity without increasing cost — uncover where value is being lost across consumables, labour, and processes."
                icon={Wrench}
                colorClass="bg-orange-100/80 border-orange-200"
                hoverColorClass="hover:border-orange-400 hover:shadow-orange-200"
                linkTo="/operations"
              />

              <ProductTile
                title="AI Procurement & Invoice Control Assistant"
                description="Stop overpaying. Enforce what you already negotiated — continuously compares invoices against contract rates to prevent leakage."
                icon={FileText}
                colorClass="bg-purple-100/80 border-purple-200"
                hoverColorClass="hover:border-purple-400 hover:shadow-purple-200"
                linkTo="/procurement"
              />
            </div>

            <div className="lg:hidden col-span-1 mt-12 w-full overflow-hidden flex justify-center">
              <div className="scale-75 origin-top">
                <CenterProcess />
              </div>
            </div>

          </div>
        </div>
      </section> */}
      <section className="bg-[#f3f4f3] px-4 py-14 sm:px-6 lg:px-8">
        <div className="w-full rounded-[28px]  px-5 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-[56px]">
              Core Capabilities
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Complete visibility, complete control. Powerful features designed to optimize every
              aspect of your fuel delivery operations.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <Link to="/theta-pmo" className="block h-full">
              <div className="group h-full min-h-[220px] rounded-xl bg-[#e8f0f8] px-6 py-7 shadow-[0_3px_12px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-4 flex justify-end">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#c8d7ea] text-[#0f2d52]">
                    <Sparkles className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="text-[26px] font-semibold leading-tight text-slate-900 sm:text-[30px]">
                  Real-time GPS
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-800">
                  Track trucks live with precise timestamps. Know exactly where every vehicle is and when
                  it will arrive. Complete visibility across your entire fleet.
                </p>
              </div>
            </Link>

            <Link to="/theta-hse" className="block h-full">
              <div className="group h-full min-h-[220px] rounded-xl bg-[#e8f0f8] px-6 py-7 shadow-[0_3px_12px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-4 flex justify-end">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#c8d7ea] text-[#0f2d52]">
                    <Shield className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="text-[26px] font-semibold leading-tight text-slate-900 sm:text-[30px]">
                  Smart scheduling
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-800">
                  Predict demand and auto-assign deliveries. Let AI handle the complexity of driver shifts
                  and route planning. Optimize for efficiency automatically.
                </p>
              </div>
            </Link>

            <Link to="/theta-ops-assistant" className="block h-full">
              <div className="group h-full min-h-[220px] rounded-xl bg-[#e8f0f8] px-6 py-7 shadow-[0_3px_12px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-4 flex justify-end">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#c8d7ea] text-[#0f2d52]">
                    <Wrench className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="text-[26px] font-semibold leading-tight text-slate-900 sm:text-[30px]">
                  Route optimization
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-800">
                  Reduce miles and maximize utilization. Our algorithms find the most efficient paths while
                  respecting driver hours and fuel requirements.
                </p>
              </div>
            </Link>

            <Link to="/theta-procurement-assistant" className="block h-full">
              <div className="group h-full min-h-[220px] rounded-xl bg-[#e8f0f8] px-6 py-7 shadow-[0_3px_12px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-4 flex justify-end">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#c8d7ea] text-[#0f2d52]">
                    <Settings className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="text-[26px] font-semibold leading-tight text-slate-900 sm:text-[30px]">
                  Exception handling
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-800">
                  Delays trigger alerts and escalations automatically. Stay ahead of problems before they
                  impact your customers. Smart notifications keep you informed.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reactive Past vs Predictive Future ── */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold tracking-tight text-slate-900 leading-tight">
              The smarter way to <span className="text-[#0066cc]">plan, predict, and perform</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              From forecasting to final delivery, everything you need to manage a reliable, on-time fuel network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <p className="text-[13px] font-semibold tracking-[0.2em] text-slate-500 uppercase mb-4">
                The Manual Past
              </p>
              <ul className="space-y-4">
                {[
                  'Spreadsheet-driven planning and disconnected systems',
                  'Reactive dispatch after delays have already happened',
                  'Static routes and guesswork demand planning',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[15px] leading-[24px] text-slate-700">
                    <span className="mt-[9px] w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 sm:p-10">
              <p className="text-[13px] font-semibold tracking-[0.2em] text-[#0f2d52] uppercase mb-4">
                The AI-Planning Future
              </p>
              <ul className="space-y-4">
                {[
                  'Real-time GPS tracking across your entire fleet',
                  'AI demand forecasting with auto-assigned deliveries',
                  'Self-correcting routes using live traffic & constraints',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[15px] leading-[24px] text-slate-800">
                    <span className="mt-[9px] w-1.5 h-1.5 bg-[#0f2d52] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Selecting the Right Theta Intelligence Layer ── */}

      {/* ── Sync your tools, keep teams connected ── */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-bold tracking-tight text-[#0f2d52] leading-[1.1]">
              Sync your tools,
              <br />
              keep teams connected
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Integrate your favorite apps with AI-Planning.io, keeping all your work in sync
              and your team in the loop.
            </p>
          </div>

          {/* Logo row */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 lg:gap-x-20 grayscale-0 opacity-90">
            {/* Microsoft */}
            <div className="flex items-center gap-2.5">
              <svg width="26" height="26" viewBox="0 0 23 23" aria-hidden>
                <rect x="0" y="0" width="11" height="11" fill="#F25022" />
                <rect x="12" y="0" width="11" height="11" fill="#7FBA00" />
                <rect x="0" y="12" width="11" height="11" fill="#00A4EF" />
                <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
              </svg>
              <span className="text-[26px] sm:text-[30px] font-normal text-[#737373] tracking-tight">
                Microsoft
              </span>
            </div>

            {/* Power BI */}
            <div className="flex items-center gap-2.5">
              <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden>
                <rect x="3" y="14" width="4" height="7" rx="0.5" fill="#F2C811" />
                <rect x="10" y="9" width="4" height="12" rx="0.5" fill="#F2C811" />
                <rect x="17" y="3" width="4" height="18" rx="0.5" fill="#F2C811" />
              </svg>
              <span className="text-[26px] sm:text-[30px] font-normal text-[#F2C811] tracking-tight">
                Power BI
              </span>
            </div>

            {/* SQL */}
            <div className="flex items-center gap-2.5">
              <svg width="36" height="36" viewBox="0 0 32 32" aria-hidden>
                <ellipse cx="16" cy="8" rx="11" ry="3.5" fill="none" stroke="#3b8ed3" strokeWidth="2" />
                <path d="M5,8 V16 a11,3.5 0 0 0 22,0 V8" fill="none" stroke="#3b8ed3" strokeWidth="2" />
                <path d="M5,16 V24 a11,3.5 0 0 0 22,0 V16" fill="none" stroke="#3b8ed3" strokeWidth="2" />
              </svg>
              <span className="text-[26px] sm:text-[30px] font-normal text-[#3b8ed3] tracking-tight">
                SQL
              </span>
            </div>

            {/* nosql */}
            <div className="flex items-baseline gap-0.5">
              <span className="text-[26px] sm:text-[30px] font-normal text-[#0f2d52] tracking-tight">
                no
              </span>
              <span className="text-[26px] sm:text-[30px] font-normal text-[#D7263D] tracking-tight">
                sql
              </span>
            </div>

            {/* aws */}
            <div className="flex flex-col items-center -gap-1">
              <span className="text-[24px] sm:text-[28px] font-bold text-[#252F3E] tracking-tight leading-none">
                aws
              </span>
              <svg width="50" height="14" viewBox="0 0 50 14" className="-mt-1" aria-hidden>
                <path
                  d="M2,8 Q25,14 48,8"
                  fill="none"
                  stroke="#FF9900"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M44,5 L48,8 L44,11"
                  fill="none"
                  stroke="#FF9900"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Google */}
            <div className="flex items-baseline">
              <span className="text-[26px] sm:text-[30px] font-normal tracking-tight">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Driving ROI Across Fuel Operations ── */}
      <section className="bg-gradient-to-b from-white via-[#eff6ff] to-white px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-slate-900 leading-tight">
              Trusted by <span className="text-[#0066cc]">industry leaders</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Our platform serves fuel distributors, logistics companies, and fleet operators of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Regional Distribution Networks',
                desc: 'Coordinate deliveries across multiple stations with centralized dispatch and real-time visibility.',
              },
              {
                title: 'Logistics Providers',
                desc: 'Optimize delivery routes, reduce fuel costs, and improve customer satisfaction with data-driven insights.',
              },
              {
                title: 'Enterprise Fleets',
                desc: 'Manage large-scale operations with enterprise-grade security, compliance, and scalability.',
              },
              {
                title: 'Collaborative Teams',
                desc: 'Enable cross-functional collaboration with shared dashboards and task assignments.',
              },
              {
                title: 'Cost Savings',
                desc: 'Reduce operational expenses through optimized routing and resource utilization.',
              },
              {
                title: 'On-Time Deliveries',
                desc: 'Achieve higher punctuality with predictive ETAs and proactive adjustments.',
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-8px_rgba(16,24,40,0.08)]">
                <h3 className="text-[22px] sm:text-[24px] font-semibold text-slate-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-[15px] leading-[24px] text-slate-600">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Stats Section */}
      {/* <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Enterprise Clients' },
                { value: '$12B+', label: 'Projects Managed' },
                { value: '35%', label: 'Average Cost Savings' },
                { value: '99.9%', label: 'Platform Uptime' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

      {/* Scroll-Triggered Product Demo Section */}
      {/* <div
        ref={containerRef}
        className="relative bg-gradient-to-b from-white via-gray-50 to-white"
        style={{ height: '200vh' }}
      >
        

        <div className={`sticky top-0 h-screen flex flex-col items-center ${isLocked ? 'overflow-hidden' : ''}`}>
          <div className="text-center mb-6 mt-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Two Powerful Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for project portfolio management and cost intelligence
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-500 ${fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              
                {currentStage === 1 && (
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center animate-scale-in">
                      <BarChart3 className="w-6 h-6 text-[#0f2d52]" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 leading-tight animate-slide-up-delay-1">
                      AI PMO Assistant
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed animate-slide-up-delay-2">
                      Eliminate project surprises. A digital layer across your project controls environment —
                      Primavera P6, Excel, reporting tools — that identifies risks early and simulates corrective action.
                    </p>
                    <ul className="space-y-4">
                      {[
                        { icon: Layers, text: 'Monitors thousands of schedule activities' },
                        { icon: Activity, text: 'Real-time delay and slippage detection' },
                        { icon: BarChart3, text: 'Automated S-curves, dashboards & variance reports' },
                        { icon: AlertTriangle, text: 'AI explains why issues are happening' },
                        { icon: FileText, text: 'Predicts delays and simulates recovery actions' }
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                          <item.icon className="w-6 h-6 text-[#0f2d52] flex-shrink-0 mt-0.5" />
                          <span className="text-lg text-gray-700">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/theta-pmo"
                      className="inline-flex items-center px-6 py-3 bg-[#0f2d52] text-white rounded-lg font-medium hover:bg-[#0052a3] transition hover:scale-105 animate-slide-up-delay-4"
                    >
                      Explore AI PMO Assistant
                    </Link>
                  </div>

                )}

                {currentStage === 2 && (
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center animate-scale-in">
                      <BarChart3 className="w-6 h-6 text-[#0f2d52]" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 animate-slide-up-delay-1">
                      AI Safety Guardian
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed animate-slide-up-delay-2">
                      From reporting incidents to preventing them. Real-time, predictive safety intelligence
                      across people, equipment, and work zones — a zero-harm environment needs visibility and foresight.
                    </p>
                    <ul className="space-y-4">
                      {[
                        { icon: Camera, text: 'Real-time monitoring of people & equipment' },
                        { icon: Lock, text: 'Permit, certification & PPE compliance' },
                        { icon: Bell, text: 'Unsafe condition detection' },
                        { icon: Radio, text: 'Predicts where incidents are most likely' },
                        { icon: ClipboardList, text: 'Stronger safety compliance and governance' }
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                          <item.icon className="w-6 h-6 text-[#0f2d52] flex-shrink-0 mt-0.5" />
                          <span className="text-lg text-gray-700">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/theta-hse"
                      className="inline-flex items-center px-6 py-3 bg-[#0f2d52] text-white rounded-lg font-medium hover:bg-[#0052a3] transition hover:scale-105 animate-slide-up-delay-4"
                    >
                      Explore AI Safety Guardian
                    </Link>
                  </div>
                )}


              </div>

              <div className={`relative transition-all duration-700 ${fadeIn ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'}`}>
                <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-500">
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">


                    {currentStage === 1 && (
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                          <h4 className="font-semibold text-gray-900">AI PMO Assistant</h4>
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Active</span>
                        </div>
                        <div className="space-y-4">
                          {[
                            { name: 'Digital Transformation', status: 'On Track', progress: 78, color: 'bg-green-500' },
                            { name: 'Infrastructure Upgrade', status: 'At Risk', progress: 45, color: 'bg-orange-500' },
                            { name: 'Customer Portal', status: 'On Track', progress: 92, color: 'bg-green-500' },
                            { name: 'Mobile App Launch', status: 'Planning', progress: 12, color: 'bg-blue-500' }
                          ].map((project, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-900">{project.name}</span>
                                <span className={`text-xs px-2 py-1 rounded ${project.status === 'On Track' ? 'bg-green-100 text-green-700' :
                                  project.status === 'At Risk' ? 'bg-orange-100 text-orange-700' :
                                    'bg-blue-100 text-blue-700'
                                  }`}>
                                  {project.status}
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div className={`${project.color} h-1.5 rounded-full transition-all duration-500`} style={{ width: `${project.progress}%` }}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentStage === 2 && (
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                          <h4 className="font-semibold text-gray-900">Portfolio Dashboard</h4>
                          <span className="text-xs text-gray-600">Updated 2 min ago</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-emerald-50 rounded-lg p-4">
                            <div className="text-xs text-gray-600 mb-1">Active Projects</div>
                            <div className="text-3xl font-bold text-gray-900">24</div>
                            <div className="text-xs text-green-600 mt-1">+3 this month</div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="text-xs text-gray-600 mb-1">Total Budget</div>
                            <div className="text-3xl font-bold text-gray-900">$8.5M</div>
                            <div className="text-xs text-[#0f2d52] mt-1">68% utilized</div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm font-medium text-gray-900 mb-3">Delivery Performance</div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="text-gray-600">On-Time Delivery</span>
                                <span className="font-semibold text-gray-900">92%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="text-gray-600">Resource Utilization</span>
                                <span className="font-semibold text-gray-900">85%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-[#0f2d52] h-2 rounded-full" style={{ width: '85%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {[1, 2].map((stage) => (
                <div
                  key={stage}
                  className={`h-1.5 rounded-full transition-all duration-500 ${currentStage === stage ? 'w-8 bg-[#0f2d52]' : 'w-1.5 bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Products Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Two Powerful Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for project portfolio management and cost intelligence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border-2 border-gray-200 hover:border-[#0f2d52] transition-all p-8 group">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition">
                <BarChart3 className="w-6 h-6 text-[#0f2d52]" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">AI PMO Assistance</h3>
              <p className="text-gray-600 mb-6">
                Enterprise project portfolio management platform with real-time dashboards, resource allocation, and portfolio analytics.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Multi-project portfolio management',
                  'Resource capacity planning',
                  'Real-time progress tracking',
                  'Risk and issue management',
                  'Executive reporting dashboards'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0f2d52] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/theta-pmo"
                className="inline-flex items-center text-[#0f2d52] font-medium hover:text-[#0052a3]"
              >
                Learn more
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 hover:border-[#0f2d52] transition-all p-8 group">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition">
                <Brain className="w-6 h-6 text-[#0f2d52]" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Safety Guardian</h3>
              <p className="text-gray-600 mb-6">
                Next-generation safety monitoring and incident detection system for high-risk and industrial environments.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Edge camera integration',
                  'RFID personnel tracking',
                  'Real-time safety alerts',
                  'Zone-based access control',
                  'Safety analytics & reporting'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0f2d52] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/theta-hse"
                className="inline-flex items-center text-[#0f2d52] font-medium hover:text-[#0052a3]"
              >
                Learn more
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}



      {/* Why + CTA Section */}
    </div>
  );
}
