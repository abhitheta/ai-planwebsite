import { Link } from 'react-router';
import { useState } from 'react';
import { ArrowRight, BarChart3, DollarSign, Users, TrendingUp, Clock, CheckCircle, Zap, Shield, FileText, Target, Activity, Calendar, MessageSquare, FolderOpen, Settings, ChevronDown, Database, CloudIcon, Smartphone, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { WorksWhereverBanner } from '../components/WorksWhereverBanner';
import { FadeInView } from '../components/FadeInView';

// Import software screenshots
import pmoDocuments from 'figma:asset/0b8b34e319edaa379d7942ebe47a7de00e6a4c56.png';
import pmoSettings from 'figma:asset/da9160705c98e71563d498abb92c880ae16f869c.png';
import pmoChatbot from 'figma:asset/55bd9df31d3d41ca985fa863b692724889969aa2.png';

export function ThetaPMO() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip">

      {/* ── Hero Section ── */}
      <section className="pt-[112px] sm:pt-[130px] lg:pt-[150px] pb-16 px-4 sm:px-6 lg:px-8 bg-white overflow-x-clip">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-bold tracking-[-3px] text-[#0f2d52] leading-[1.05] mb-7">
            Enterprise fuel delivery platform
          </h1>

          <p className="text-base sm:text-lg lg:text-[18px] leading-[30px] text-[#3B394E] font-normal max-w-[760px] mx-auto mb-10">
            Cloud-based software designed specifically for fuel distributors. Manage stations,
            drivers, trucks, and deliveries from one unified platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              to="/login?redirect=/theta-pmo/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-[#0066cc] px-8 py-3.5 text-[15.6px] font-normal text-white shadow-[0_0_0_4.45px_#c8d7ea] hover:bg-[#0052a3] transition-colors tracking-[0.08px] min-w-[200px]"
            >
              Start Free Trial
            </Link>
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
            <span>14-day free trial</span>
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* Platform Impact Card */}
        <div className="max-w-[900px] mx-auto mt-10 relative">
          {/* Even all-sides cyan glow via pseudo-blur layer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-12 rounded-[60px] blur-3xl"
            style={{
              background:
                'radial-gradient(circle at center, rgba(34,211,238,0.35) 0%, rgba(103,232,249,0.25) 35%, rgba(34,211,238,0.1) 60%, rgba(34,211,238,0) 78%)',
            }}
          />
          <div className="relative bg-white rounded-[28px] px-5 py-8 sm:px-14 sm:py-12 shadow-[0_0_20px_rgba(34,211,238,0.22),0_0_40px_rgba(34,211,238,0.18),0_0_70px_rgba(103,232,249,0.14)]">
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-normal tracking-[-1.2px] text-[#111019] text-center mb-8 sm:mb-10">
              Platform Impact
            </h3>

            <div className="grid grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-14">
              {[
                { label: 'Uptime Guarantee', value: '99.9%', desc: 'Cloud-native reliability' },
                { label: 'Stations Supported', value: '1000+', desc: 'Scales seamlessly' },
                { label: 'On-Time Delivery', value: '96%', desc: 'Improved vs industry baseline' },
                { label: 'Delay Reduction', value: '18%', desc: 'Proven across customers' },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6 min-w-0">
                  <div className="min-w-0">
                    <p className="text-[14px] sm:text-[17px] font-medium text-[#111019] leading-tight truncate">{stat.label}</p>
                    <p className="text-[11px] sm:text-[13px] text-[#6B6A7C] mt-1">{stat.desc}</p>
                  </div>
                  <span className="text-3xl sm:text-[44px] font-normal text-[#111019] tracking-[-1px] leading-none">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What is AI PMO Assistance? ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
        <div className="max-w-[860px] mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-8">
            Built for the modern fuel distributor
          </h2>
          <p className="text-[16px] leading-[28px] text-[#3B394E] font-normal mb-6">
            Everything you need to run efficient, reliable operations. A single unified platform that
            brings stations, drivers, trucks, and deliveries together — with cloud-based infrastructure,
            bank-grade security, and the ability to scale from 10 stations to 1000+ without
            performance degradation.
          </p>
          <p className="text-[16px] leading-[28px] text-[#3B394E] font-normal">
            No servers to maintain, automatic updates, 99.9% uptime, and SOC 2 compliance out of the
            box — so your team can focus on operations, not infrastructure.
          </p>
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
                  Powerful desktop interface for managers and dispatchers. Monitor operations,
                  approve trips, and generate reports from any browser.
                </p>
              </div>
              <div>
                <h3 className="text-[26px] sm:text-[28px] lg:text-[30px] font-semibold text-[#111019] leading-[1.2] mb-6">
                  No servers to maintain
                </h3>
                <p className="text-[16px] leading-[32px] text-[#252434] font-normal">
                  Cloud-based. Access from anywhere with automatic updates, backups, and 99.9%
                  uptime guarantee.
                </p>
              </div>
              <div>
                <h3 className="text-[26px] sm:text-[28px] lg:text-[30px] font-semibold text-[#111019] leading-[1.2] mb-6">
                  Bank-grade encryption
                </h3>
                <p className="text-[16px] leading-[32px] text-[#252434] font-normal">
                  Enterprise security with bank-grade encryption, role-based access control, and
                  SOC 2 compliance. Your data is always protected.
                </p>
              </div>
            </div>
          </div>
        </div>
        </FadeInView>
      </section>

      {/* ── See AI PMO Assistance in Action ── */}




      {/* ── Ready to modernize your operations? ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f2d52] via-[#1a3d6b] to-[#2a5a8f]">
        <FadeInView>
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-[-1.5px] text-white leading-[1.15] mb-5">
              Ready to modernize your operations?
            </h2>
            <p className="text-[16px] leading-[28px] text-[#c8d7ea] font-normal max-w-[680px] mx-auto mb-8">
              Join leading fuel distributors using AI-Planning.io to optimize their delivery networks.
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
      title: 'Identify',
      subtitle: 'What is the size of the prize?',
      desc: 'We begin by understanding your current state, pain points, and the potential value that can be unlocked through better project management.',
    },
    {
      title: 'Process & Plan',
      subtitle: 'Clear process to achieve goals',
      desc: 'Clear process to engage in to achieve the goals. Make a Gantt chart and define milestones, timelines, and success criteria.',
    },
    {
      title: 'Demonstrate Value',
      subtitle: 'Get a handshake for the journey',
      desc: 'Quick wins and proof of concept demonstrate immediate value. Get stakeholder buy-in and commitment for the full journey.',
    },
    {
      title: 'Deliver the Value',
      subtitle: 'Quantify the Results',
      desc: 'Full platform deployment with training, adoption support, and continuous optimization. Measure and quantify results against baseline.',
    },
    {
      title: 'Manage Engagement',
      subtitle: 'Monitor management support',
      desc: 'Ongoing support, monitoring, and optimization. Regular check-ins with leadership to ensure sustained value and continuous improvement.',
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
              Our common approach template which is tweaked to the specific challenges
              of the organisation
            </p>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-0 divide-y divide-[#252434]/15">
            {steps.map((step, index) => (
              <div key={index}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="flex items-center justify-between w-full py-5 text-left"
                >
                  <span className="text-[18px] font-medium text-[#111019]">{step.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#252434] transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="pb-5">
                    <p className="text-[13px] font-medium text-[#3B394E] mb-2">{step.subtitle}</p>
                    <p className="text-[14px] leading-[22px] text-[#3B394E]">{step.desc}</p>
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
