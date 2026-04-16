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
      glow: 'bg-[#4ab57a]/20',
      accent: 'border-[#4ab57a] bg-[#f8fffa]',
      marker: 'bg-[#4ab57a]/15 border-[#4ab57a]/25',
      lineStrong: 'bg-[#4ab57a]/35',
      lineSoft: 'bg-[#4ab57a]/18',
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
      glow: 'bg-[#c38cff]/18',
      accent: 'border-[#c38cff] bg-[#fdfaff]',
      marker: 'bg-[#c38cff]/15 border-[#c38cff]/25',
      lineStrong: 'bg-[#c38cff]/35',
      lineSoft: 'bg-[#c38cff]/18',
      miniTitle: 'AI Project Advisor',
      miniDesc: 'Ask natural-language questions and get guided project support.',
    },
    {
      key: 'intelligence-hub',
      label: 'Intelligence Hub',
      icon: Brain,
      image: productImg4,
      bg: 'from-[#fff9f3] via-[#fff1e7] to-[#ffffff]',
      glow: 'bg-[#ff9c57]/18',
      accent: 'border-[#ff9c57] bg-[#fffcf8]',
      marker: 'bg-[#ff9c57]/15 border-[#ff9c57]/25',
      lineStrong: 'bg-[#ff9c57]/35',
      lineSoft: 'bg-[#ff9c57]/18',
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
      glow: 'bg-[#ff8f59]/18',
      accent: 'border-[#ff8f59] bg-[#fffaf7]',
      marker: 'bg-[#ff8f59]/15 border-[#ff8f59]/25',
      lineStrong: 'bg-[#ff8f59]/35',
      lineSoft: 'bg-[#ff8f59]/18',
      miniTitle: 'Prediction what if',
      miniDesc: 'Run scenarios and compare likely outcomes before acting.',
    },
  ];

  const processSteps = [
    {
      key: 'automation-processing',
      title: 'Automation Processing',
      description: 'Automates intake, sorting, and processing of operational records for faster project execution.',
      image: productImg1,
      subtitleLink: '/how-it-works#automation-processing',
    },
    {
      key: 'human-validation',
      title: 'Human In The Loop Validation',
      description: 'Allows teams to review AI outputs, validate decisions, and maintain quality control checkpoints.',
      image: productImg2,
      subtitleLink: '/how-it-works#human-validation',
    },
    {
      key: 'ai-analysis',
      title: 'AI Analysis & Predictions - What-IFs',
      description: 'Pushes alerts and actionable tasks directly to field teams via a dedicated mobile app.',
      image: productImg5,
      subtitleLink: '/how-it-works#ai-analysis',
    },
    {
      key: 'mobile-notifications',
      title: 'Mobile App Notifications',
      description: 'Delivers instant mobile notifications to field teams so actions can be closed without delay.',
      image: productImg3,
      subtitleLink: '/how-it-works#mobile-notifications',
    },
    {
      key: 'report-analysis',
      title: 'Report & Analytics',
      description: 'Generates clear dashboards and performance reports so teams can track progress, spot trends, and make faster decisions.',
      image: productImg3,
      subtitleLink: '/how-it-works#report-analysis',
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
      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden bg-white">
        <div className="relative z-20 pt-8 sm:pt-10"

        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm sm:text-base text-[#38a56a] mb-3">
              Start With THETA AI
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-semibold tracking-tight text-slate-900 leading-tight">
              The Zero-Surprise Enterprise Powered by Theta AI
            </h2>
            <h3 className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Always-on digital intelligence for Project, Operations, Safety, and Procurement control.
            </h3>

            <div className="mt-14 flex flex-col items-center gap-3">
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center rounded-full bg-[#38b679] px-10 py-3 text-sm font-medium text-white shadow-[0_10px_25px_rgba(56,182,121,0.28)] hover:bg-[#2e9f67] transition-colors"
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

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeHeroOption}
                  src={(heroOptions.find((option) => option.key === activeHeroOption) ?? heroOptions[0]).image}
                  alt="Theta AI interface preview"
                  className={`relative mx-auto block w-[92%] max-w-[560px] h-auto rounded-[18px] border-2 border-white/80 object-contain shadow-[0px_10px_30px_rgba(0,180,119,0.35)] transition-all duration-500 sm:w-[88%] sm:max-w-[720px] sm:rounded-[24px] lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[1000px] lg:max-w-none lg:h-[600px] lg:rounded-[30px] lg:object-top lg:-translate-x-1/2 lg:-translate-y-1/2 lg:shadow-[0px_15px_50px_0px_#00B477] ${isMobileHero ? 'blur-0' : activeHeroOption === '' ? 'blur-[2px]' : 'blur-0'}`}
                  initial={{ opacity: 0, scale: 1.04, x: 14 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.02, x: -14 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                />
              </AnimatePresence>

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

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeHeroOption}-mini-card`}
                    className="absolute left-10 sm:left-6 bottom-6 hidden max-w-[210px] rounded-xl border border-white/70 bg-white/70 p-3 shadow-md backdrop-blur-md lg:block"
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    <div className="text-xs font-semibold text-slate-900">{activeHeroTheme.miniTitle}</div>
                    <p className="mt-1 text-[11px] text-slate-600 leading-relaxed">
                      {activeHeroTheme.miniDesc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeHeroOption}-top-card`}
                    className="absolute left-24  top-8 sm:top-20 hidden w-[140px] rounded-xl border border-white/70 bg-white/78 p-3 shadow-md backdrop-blur-md lg:block"
                    initial={{ opacity: 0, y: -20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    <p className="mt-1 text-[9px] font-medium text-slate-500 leading-snug">{activeHeroTheme.label}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.div
                className="absolute right-28 -top-6 z-30 hidden w-[310px] h-[355px] overflow-hidden rounded-[10px] border border-slate-200 bg-white/92 p-3.5 shadow-[0_18px_40px_rgba(15,23,42,0.14)] backdrop-blur-md lg:block"
                // style={{ width: '310px', height: '355px', top: '', right: '80px', opacity: 1 }}

                onMouseLeave={() => setActiveHeroOption('')}
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.35 }}
              >
                <p className="px-1 pb-2 text-[11px] sm:text-xs font-medium text-slate-700">
                  What would you like to explore ?
                </p>
                <div className="grid grid-cols-3 gap-1.5">
                  {heroOptions.map((option) => {
                    const isActive = activeHeroOption === option.key;
                    const OptionIcon = option.icon;
                    return (
                      <button
                        key={option.key}
                        type="button"
                        onMouseEnter={() => setActiveHeroOption(option.key)}
                        onClick={() => setActiveHeroOption(option.key)}
                        className={`group flex min-h-[84px] p-4  flex-col items-center justify-center gap-1.5 rounded-xl border px-2 py-2 text-center text-[10px] leading-snug transition-all duration-200 ${isActive ? `${option.accent} shadow-sm` : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'}`}
                      >
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${isActive ? 'border-[#4ab57a] bg-[#4ab57a]/10 text-[#4ab57a]' : 'border-slate-200 bg-slate-50 text-slate-300 group-hover:text-slate-400'}`}>
                          <OptionIcon className="h-3 w-3" />
                        </div>
                        <span className="text-slate-800 line-clamp-2">{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
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
                          ? 'border-[#478560] bg-white shadow-xl'
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
                            <CheckCircle className="w-5 h-5 text-[#478560] shrink-0 mt-0.5" />
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
                              idx === activeProduct ? 'w-8 bg-[#478560]' : 'w-1.5 bg-gray-300'
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
              Theta AI: <span className="bg-clip-text text-[#6B8E23]">Predictive Intelligence</span> for Industrial Operations
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
              Solutions We Provide
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <Link to="/theta-pmo" className="block h-full">
              <div className="group h-full min-h-[220px] rounded-xl bg-[#eef3ec] px-6 py-7 shadow-[0_3px_12px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-4 flex justify-end">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#d9e5de] text-[#4e8f66]">
                    <Sparkles className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="text-[26px] font-semibold leading-tight text-slate-900 sm:text-[30px]">
                  AI PMO Assistant
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-800">
                  Eliminate project surprises. Take control before it's too late — a digital layer across your
                  project controls environment that identifies risks early.
                </p>
              </div>
            </Link>

            <Link to="/theta-hse" className="block h-full">
              <div className="group h-full min-h-[220px] rounded-xl bg-[#eef3ec] px-6 py-7 shadow-[0_3px_12px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-4 flex justify-end">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#d9e5de] text-[#4e8f66]">
                    <Shield className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="text-[26px] font-semibold leading-tight text-slate-900 sm:text-[30px]">
                  AI Safety Guardian
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-800">
                  From reporting incidents to preventing them. Real-time, predictive safety intelligence
                  that monitors people, equipment, and work zones.
                </p>
              </div>
            </Link>

            <Link to="/theta-ops-assistant" className="block h-full">
              <div className="group h-full min-h-[220px] rounded-xl bg-[#eef3ec] px-6 py-7 shadow-[0_3px_12px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-4 flex justify-end">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#d9e5de] text-[#4e8f66]">
                    <Wrench className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="text-[26px] font-semibold leading-tight text-slate-900 sm:text-[30px]">
                  AI Cost of Operations Assistant
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-800">
                  Find hidden waste. Improve productivity without increasing cost — uncover where value
                  is being lost across consumables, labour, and processes.
                </p>
              </div>
            </Link>

            <Link to="/theta-procurement-assistant" className="block h-full">
              <div className="group h-full min-h-[220px] rounded-xl bg-[#eef3ec] px-6 py-7 shadow-[0_3px_12px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-4 flex justify-end">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#d9e5de] text-[#4e8f66]">
                    <Settings className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="text-[26px] font-semibold leading-tight text-slate-900 sm:text-[30px]">
                  AI Procurement & Invoice Control Assistant
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-800">
                  Stop overpaying. Enforce what you already negotiated — continuously compares invoices
                  against contract rates to prevent leakage.
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
              From Reactive Reporting to <span className="text-[#4b8f67]">Predictive Control</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              We combine history, live data, and custom LLM AI to eliminate surprises and automate enterprise intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <p className="text-[13px] font-semibold tracking-[0.2em] text-slate-500 uppercase mb-4">
                The Reactive Past
              </p>
              <ul className="space-y-4">
                {[
                  'Siloed, static data and manual reports',
                  'Post-incident lagging indicators',
                  'Unforeseen delays and operational surprises',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[15px] leading-[24px] text-slate-700">
                    <span className="mt-[9px] w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 sm:p-10">
              <p className="text-[13px] font-semibold tracking-[0.2em] text-[#4b8f67] uppercase mb-4">
                The Predictive Future
              </p>
              <ul className="space-y-4">
                {[
                  'Live IoT, edge vision, and continuous learning',
                  'Early anomaly detection and leading indicators',
                  'Automated, preventative enterprise intelligence',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[15px] leading-[24px] text-slate-800">
                    <span className="mt-[9px] w-1.5 h-1.5 bg-[#4b8f67] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Selecting the Right Theta Intelligence Layer ── */}
      <section className="bg-[#f8faf8] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold tracking-tight text-slate-900 leading-tight">
              Selecting the Right Theta Intelligence Layer
              <br className="hidden sm:block" /> for Your Pain Point
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-slate-50">
                <tr>
                  {['Module', 'Primary Pain Point', 'Key Data Inputs', 'Target Audience', 'Core AI Methodology'].map((h) => (
                    <th key={h} className="px-5 py-4 text-[13px] font-semibold text-slate-700">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { module: 'AI PMO Assistant', pain: 'Project Slippage & Overruns', data: 'Primavera P6, Excel, ERP', audience: 'PMO Leaders', method: 'LLM Forecasting' },
                  { module: 'AI Cost of Ops', pain: 'Consumable Waste & Shrinkage', data: 'CMMS, ERP', audience: 'Operations Managers', method: 'Anomaly Detection' },
                  { module: 'AI Maintenance', pain: 'Unplanned Asset Downtime', data: 'Live IoT Telemetry', audience: 'Reliability Managers', method: 'Behavioral Learning' },
                  { module: 'AI Safety Guardian', pain: 'High-Risk Exposure Incidents', data: 'Edge Cameras, UHF RFID', audience: 'HSE Site Leaders', method: 'Vision AI Logic' },
                  { module: 'AI Procurement', pain: 'Capital Leakage & Overpayments', data: 'Invoices, OCR, Contracts', audience: 'Commercial Teams', method: 'Pattern Recognition' },
                ].map((row) => (
                  <tr key={row.module} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 text-[14px] font-semibold text-slate-900">{row.module}</td>
                    <td className="px-5 py-4 text-[14px] text-slate-700">{row.pain}</td>
                    <td className="px-5 py-4 text-[14px] text-slate-700">{row.data}</td>
                    <td className="px-5 py-4 text-[14px] text-slate-700">{row.audience}</td>
                    <td className="px-5 py-4 text-[14px] text-slate-700">{row.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-center text-[15px] text-slate-600 italic max-w-3xl mx-auto">
            Five distinct assistants running on one shared, continuously learning enterprise AI foundation.
          </p>
        </div>
      </section>

      {/* ── Unifying Enterprise Data into a Single Analytical Layer ── */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-slate-900 leading-tight">
              Unifying Enterprise Data into a <span className="text-[#4b8f67]">Single Analytical Layer</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Continuously learning from historical project behaviour to power every Theta assistant.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-6 items-stretch">
            {/* Data Sources */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-[18px] font-semibold text-slate-900 mb-5 text-center">
                Data Sources
              </h3>
              <div className="grid grid-cols-3 gap-3 text-center">
                {['IoT', 'ERP', 'Primavera P6', 'Cameras', 'UHF RFID', 'Excel', 'CMMS', 'OCR', 'Sensors'].map((src) => (
                  <div key={src} className="rounded-xl bg-white border border-slate-200 px-3 py-4 text-[12px] font-medium text-slate-700">
                    {src}
                  </div>
                ))}
              </div>
            </div>

            {/* The Theta AI Layer */}
            <div className="rounded-2xl border border-[#4b8f67]/30 bg-[#eef3ec] p-6 sm:p-8">
              <h3 className="text-[18px] font-semibold text-slate-900 mb-5 text-center">
                The Theta AI Layer
              </h3>
              <div className="grid grid-cols-2 gap-3 text-center">
                {['Custom LLMs', 'Machine Learning', 'OCR Vision', 'Edge AI Analytics'].map((l) => (
                  <div key={l} className="rounded-xl bg-white border border-[#4b8f67]/30 px-3 py-5 text-[13px] font-semibold text-[#2f6e4a]">
                    {l}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-center text-[12px] italic text-slate-600">
                Continuously learning from historical project behaviour.
              </p>
            </div>

            {/* Action Interfaces */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-[18px] font-semibold text-slate-900 mb-5 text-center">
                Action Interfaces
              </h3>
              <div className="grid grid-cols-2 gap-3 text-center">
                {['Web Dashboards', 'Field Apps', 'Automated Alerts', 'Theta Engage Platform'].map((l) => (
                  <div key={l} className="rounded-xl bg-white border border-slate-200 px-3 py-5 text-[13px] font-medium text-slate-800">
                    {l}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Driving Enterprise ROI ── */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-slate-900 leading-tight">
              Driving Enterprise ROI Across <span className="text-[#4b8f67]">Risk, Capital, and Operations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: 'Predictive Agility',
                desc: 'Moving from manual oversight to automated, data-driven decision making via LLM forecasting and What-If simulations.',
              },
              {
                title: 'Zero-Harm Protection',
                desc: 'Preventing incidents before they occur, improving compliance, and driving audit readiness via real-time edge vision.',
              },
              {
                title: 'Capital Recovery',
                desc: 'Immediate reduction in procurement leakage, overpayments, and invoice errors via volume leverage analysis.',
              },
              {
                title: 'Asset Uptime',
                desc: 'Eliminating unplanned downtime, reducing energy spend, and improving FTE output through anomaly detection.',
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

      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="w-full">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold tracking-tight text-slate-900">
              <span className="text-[#4b8f67]">Our 5-</span> Step Intelligent Process
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Seamlessly record and embed videos within the development tools you already use.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.25fr] lg:gap-5 items-stretch">
            <div className=" p-4 sm:p-5">
              <div className="space-y-0">
                {processSteps.map((step, index) => {
                  const isActive = activeProcessStep === step.key;

                  return (
                    <div
                      key={step.key}
                      className={` bg-[#F9FFFB] py-2.5`}
                    >
                      <div className={`w-full rounded-lg px-2 py-2 text-left transition-colors ${isActive ? 'bg-white/55' : 'hover:bg-white/35'}`}>
                        <div className={`${isActive ? 'border-l-[3px] border-l-[#4b8f67] pl-3' : 'pl-3'} `}>
                          <div className="flex items-start justify-between gap-3">
                            <button
                              type="button"
                              onClick={() => setActiveProcessStep(step.key)}
                              className="flex-1 text-left"
                            >
                              <h3 className="text-[12px] leading-tight font-medium text-slate-900 sm:text-[30px]">
                                {step.title}
                              </h3>
                            </button>
                            <Link
                              to={step.subtitleLink}
                              aria-label={`Open ${step.title} in How It Works`}
                              className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full text-[#4b8f67] transition-colors hover:bg-[#e9f4ee] hover:text-[#386d50]"
                            >
                              <ArrowRight className="h-4 w-4 -rotate-45" />
                            </Link>
                          </div>
                          {isActive && (
                            <p className="mt-2 text-sm text-slate-600 leading-relaxed sm:text-base">
                              {step.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative  p-3 shadow-[0_12px_34px_rgba(25,74,48,0.12)]">
              <img
                src={activeProcess.image}
                alt="Theta process dashboard preview"
                className="h-full min-h-[280px] w-full rounded-xl object-cover object-top"
              />
              <div className="pointer-events-none absolute -bottom-4 right-3 h-28 w-28 rounded-full bg-[#7ae2a5]/55 blur-3xl" />
              <button
                type="button"
                aria-label="Pause preview"
                className="absolute bottom-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#4b8f67] shadow-md"
              >
                <span className="flex items-center gap-1">
                  <span className="h-3.5 w-1 rounded-sm bg-[#4b8f67]" />
                  <span className="h-3.5 w-1 rounded-sm bg-[#4b8f67]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9eeea] py-14 overflow-visible lg:py-16">
        <div className="w-full">
          <div className="rounded-[8px] border border-[#dde4de]  py-8 "
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(190,204,194,0.32) 1px, transparent 1px), linear-gradient(to bottom, rgba(190,204,194,0.32) 1px, transparent 1px)',
              backgroundSize: '100px 84px',
            }}
          >
            {/* <div className="max-w-4xl px-10">
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Everything You Need to Succeed
              </h2>
              <p className="mt-3 text-xl text-slate-800/90">
                Theta AI: Predictive Intelligence for Industrial Operations
              </p>
            </div>

            <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="lg:sticky lg:top-20">
                <div className="relative w-full pt-1">
                  <div className="pointer-events-none px-4 absolute -bottom-10 left-1/2 h-28 w-[82%] -translate-x-1/2 rounded-full bg-[#7acaa0]/28 blur-2xl" />
                  <div className="relative overflow-hidden mx-10 rounded-[2px] border-[3px] border-[#1f8ce0] bg-[#f2f4f3]">
                    {isShowcaseImageError ? (
                      <div className="flex h-[260px] w-full items-center justify-center bg-gradient-to-br from-[#f4f7f5] to-[#e8efea] text-sm font-medium text-slate-600 sm:h-[360px] lg:h-[500px]">
                        Preview image unavailable
                      </div>
                    ) : (
                      <img
                        src={activeShowcaseFeature.image}
                        alt={activeShowcaseFeature.title}
                        className="h-[260px] w-full object-cover object-top sm:h-[360px] lg:h-[500px]"
                        onError={() => setIsShowcaseImageError(true)}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="relative overflow-visible lg:min-h-[210vh]">
                <div className="sticky top-24">
                  <div className="relative mx-auto w-full max-w-[340px] sm:h-[500px]">
                    <div className="grid grid-cols-1 gap-3 sm:hidden">
                      {SHOWCASE_FEATURES.map((feature, index) => {
                        const isActive = activeFeature === feature.key;
                        return (
                          <button
                            key={feature.key}
                            type="button"
                            onClick={() => {
                              setActiveFeature(feature.key);
                              featureRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'border-[#7fd7ac] bg-[#eefcf3] text-[#1d6643]' : 'border-slate-300 bg-white text-slate-700'}`}
                          >
                            {feature.label}
                          </button>
                        );
                      })}
                    </div>

                    <div className="hidden h-full items-center sm:flex">
                      <div className="flex w-full flex-col items-start gap-12">
                        {desktopFeatureSlots.map(({ feature, originalIndex }, slotIndex) => {
                          const isActive = activeFeature === feature.key;
                          const chipPositionClass = getDesktopChipPositionClass(slotIndex);

                          return (
                            <button
                              key={feature.key}
                              type="button"
                              onClick={() => {
                                setActiveFeature(feature.key);
                                featureRefs.current[originalIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              }}
                              className={`max-w-full rounded-full border px-5 py-3 text-left text-base font-medium transition-all duration-300 ${chipPositionClass} ${isActive ? 'border-[#71cda2] bg-[#f2fff7] text-[#204f37] shadow-[0_8px_20px_rgba(46,115,78,0.12)]' : 'border-[#d8ddd9] bg-white text-slate-800 hover:bg-[#fbfdfc]'}`}
                            >
                              {feature.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none hidden lg:block">
                  {SHOWCASE_FEATURES.map((feature, index) => (
                    <div
                      key={feature.key}
                      data-feature-key={feature.key}
                      ref={(el) => {
                        featureRefs.current[index] = el;
                      }}
                      className="h-[42vh]"
                    />
                  ))}
                </div>
              </div>
            </div> */}


            <div className="px-4 py-4 sm:px-8 lg:px-12">
              <div className="text-center">
                <p className="text-xs font-semibold tracking-[0.22em] text-[#4b8f67] uppercase">Our Clients</p>
                <h3 className="mt-2 text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-slate-900">
                  Trusted by Industry Leaders
                </h3>
                <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
                  Organizations across engineering, infrastructure, manufacturing, and services rely on Theta Dynamics to improve delivery, safety, and cost performance.
                </p>
              </div>

              <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { name: 'Descon Engineering', logo: DesconIcon },
                  { name: 'NSCC International', logo: NSCCIcon },
                ].map((client) => {

                  return (
                    <div
                      key={client.name}
                      className="group rounded-xl border border-[#d8e2db] bg-white/85 px-3 py-4 text-center shadow-[0_4px_16px_rgba(35,80,56,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(35,80,56,0.16)]"
                    >
                      <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#1b4f38] text-white shadow-[0_6px_18px_rgba(18,57,42,0.22)]">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="h-10 w-10 object-contain"
                        />
                      </div>
                      {/* <div className="mx-auto mb-2 inline-flex rounded-full bg-[#f3f8f5] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[#38684d]">
                        {client.name
                          .split(' ')
                          .slice(0, 2)
                          .map((word) => word.charAt(0))
                          .join('')}
                      </div> */}
                      <p className="text-xs sm:text-sm font-medium leading-snug text-slate-800">{client.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
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
                      <BarChart3 className="w-6 h-6 text-[#478560]" />
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
                          <item.icon className="w-6 h-6 text-[#478560] flex-shrink-0 mt-0.5" />
                          <span className="text-lg text-gray-700">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/theta-pmo"
                      className="inline-flex items-center px-6 py-3 bg-[#478560] text-white rounded-lg font-medium hover:bg-[#3a6d4e] transition hover:scale-105 animate-slide-up-delay-4"
                    >
                      Explore AI PMO Assistant
                    </Link>
                  </div>

                )}

                {currentStage === 2 && (
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center animate-scale-in">
                      <BarChart3 className="w-6 h-6 text-[#478560]" />
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
                          <item.icon className="w-6 h-6 text-[#478560] flex-shrink-0 mt-0.5" />
                          <span className="text-lg text-gray-700">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/theta-hse"
                      className="inline-flex items-center px-6 py-3 bg-[#478560] text-white rounded-lg font-medium hover:bg-[#3a6d4e] transition hover:scale-105 animate-slide-up-delay-4"
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
                            <div className="text-xs text-[#478560] mt-1">68% utilized</div>
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
                                <div className="bg-[#478560] h-2 rounded-full" style={{ width: '85%' }}></div>
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
                  className={`h-1.5 rounded-full transition-all duration-500 ${currentStage === stage ? 'w-8 bg-[#478560]' : 'w-1.5 bg-gray-300'
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
            <div className="bg-white rounded-xl border-2 border-gray-200 hover:border-[#478560] transition-all p-8 group">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition">
                <BarChart3 className="w-6 h-6 text-[#478560]" />
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
                    <CheckCircle className="w-5 h-5 text-[#478560] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/theta-pmo"
                className="inline-flex items-center text-[#478560] font-medium hover:text-[#3a6d4e]"
              >
                Learn more
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 hover:border-[#478560] transition-all p-8 group">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition">
                <Brain className="w-6 h-6 text-[#478560]" />
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
                    <CheckCircle className="w-5 h-5 text-[#478560] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/theta-hse"
                className="inline-flex items-center text-[#478560] font-medium hover:text-[#3a6d4e]"
              >
                Learn more
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}



      {/* Why + CTA Section */}
      <section className="pt-16 pb-14   ">
        <div className="w-full">
          <div className="text-center mb-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-4">
              Why Organizations Choose <span className="text-[#4b8c66]">Theta Dynamics</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Built for enterprise requirements with security, scalability, and reliability at the core
            </p>
          </div>

          <div className=" overflow-hidden ">
            <div className="relative h-30 sm:h-36 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${cyberImage})` }}>
              <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="px-4 sm:px-8 py-6 bg-[#f7f7f7]">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {[
                  'Enterprise Security',
                  'Scalable Architecture',
                  'Fast Implementation',
                  'AI-Powered Intelligence',
                ].map((item) => (
                  <div key={item} className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm text-gray-600 font-medium justify-center">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#4b8c66]">
                      <Check className="h-3.5 w-3.5 text-2xl text-white" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-3">
                {[
                  'Real-Time Insights',
                  'Proven ROI',
                ].map((item) => (
                  <div key={item} className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm text-gray-600 font-medium justify-center">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#4b8c66]">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden px-6 sm:px-12 py-10 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(148,163,184,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.22) 1px, transparent 1px)',
                backgroundSize: '115px 85px',
              }}
            />
            <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-[#478661] opacity-40 blur-3xl" />
            <div className="absolute top-12 right-16 h-72 w-72 rounded-full bg-[#478661] opacity-45 blur-3xl" />

            <div className="hidden md:block absolute left-[18%] top-8 rounded-xl bg-white/95 p-4 shadow-md">
              <img src={settingIcon} alt="" className="h-12 w-12 object-contain" />
            </div>
            <div className="hidden md:block absolute right-[16%] top-4 rounded-xl bg-white/95 p-4 shadow-md">
              <img src={upDirectionIcon} alt="" className="h-12 w-12 object-contain" />
            </div>
            <div className="hidden md:block absolute right-1/2 translate-x-[190px] top-1/2 -translate-y-[34px]">
              <img src={messageIcon} alt="" className="h-10 w-10 object-contain opacity-90" />
            </div>
            <div className="hidden md:block absolute right-[6%] top-[45%] rounded-lg bg-white/95 p-2.5 shadow-sm">
              <img src={settingIcon} alt="" className="h-8 w-8 object-contain" />
            </div>
            <div className="hidden md:block absolute right-[16%] bottom-10 rounded-xl bg-white/95 p-3 shadow-md">
              <img src={noteIcon} alt="" className="h-16 w-16 object-contain" />
            </div>
            <div className="hidden md:block absolute left-[6%] bottom-8 rounded-xl bg-white/95 p-4 shadow-md rotate-[-12deg]">
              <img src={chartViewIcon} alt="" className="h-16 w-16 object-contain" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h3
                className="text-5xl font-semibold md:text-6xl lg:text-7xl mb-6 leading-tight bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #40C862 0%, #1F6230 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Ready to Transform
                <br />
                Your Operations?
              </h3>
              <p className="text-xl text-gray-700 mt-5 mb-8">
                Join hundreds of enterprises using Theta Dynamics to manage projects and control costs
              </p>
              <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
                <div className="hidden md:block absolute left-[26%] -translate-x-full top-1/2 -translate-y-1/2">
                  <img src={shareIcon} alt="" className="h-20 w-20 object-contain" />
                </div>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#478560] text-white rounded-lg font-medium hover:bg-[#3a6d4e] transition"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#478560] border-2 border-[#8ab69d] rounded-lg font-medium hover:border-[#478560] transition"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
