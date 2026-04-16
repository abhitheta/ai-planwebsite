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
      <section className="pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-16 px-4 sm:px-6 lg:px-8 bg-white overflow-x-clip">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-normal tracking-[-3px] text-[#111019] leading-[1.05] mb-7">
            Eliminating Project Surprises with Proactive PMO Control
          </h1>

          <p className="text-base sm:text-lg lg:text-[18px] leading-[30px] text-[#3B394E] font-normal max-w-[720px] mx-auto mb-10">
            An always-on digital partner that helps PMOs detect issues earlier, understand why they
            happen, and act before they become losses. The AI PMO Assistant acts as a digital layer
            across Primavera P6, Excel, and reporting tools — continuously analysing performance,
            identifying risks early, and helping your team act before issues escalate.
          </p>

          {/* Key badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
            {[
              { icon: '✦', label: 'Single Source of Truth' },
              { icon: '↓', label: 'Delay & Overrun Risk' },
              { icon: '↑', label: 'Accurate Forecasting' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-full border border-[#CCE4EC] bg-white px-4 py-2 shadow-sm"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E6F4F8] text-[#007695] text-[14px] font-bold">
                  {badge.icon}
                </span>
                <span className="text-[13px] sm:text-[14px] font-medium text-[#111019]">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              to="/login?redirect=/theta-pmo/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-[#007695] px-8 py-3.5 text-[15.6px] font-normal text-white shadow-[0_0_0_4.45px_#CCE4EC] hover:bg-[#005d77] transition-colors tracking-[0.08px] min-w-[200px]"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#007695] px-8 py-3.5 text-[15.6px] font-normal text-white shadow-[0_0_0_4.45px_#CCE4EC] hover:bg-[#005d77] transition-colors tracking-[0.08px] min-w-[200px]"
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
                { label: 'Schedule Activities', value: '13k+', desc: 'Monitored in Primavera P6' },
                { label: 'Earlier Risk Detection', value: '60%', desc: 'Faster than manual reviews' },
                { label: 'Reporting Time Saved', value: '70%', desc: 'Automated S-curves & variance' },
                { label: 'Faster Decisions', value: '5x', desc: 'Data-driven insights' },
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
            What is the AI PMO Assistant?
          </h2>
          <p className="text-[16px] leading-[28px] text-[#3B394E] font-normal mb-6">
            Managing large projects today isn't about a lack of data — it's about too much disconnected
            data and not enough clarity. The AI PMO Assistant acts as a digital layer across your existing
            project controls environment (Primavera P6, Excel, reporting tools), continuously analysing
            performance, identifying risks early, and helping your team act before issues escalate.
          </p>
          <p className="text-[16px] leading-[28px] text-[#3B394E] font-normal">
            Most projects don't fail because of lack of effort — they fail because issues are identified
            too late or not clearly understood. The AI PMO Assistant gives your team early visibility of
            problems, clear prioritisation of actions, and faster, data-driven decision-making — a shift
            from reactive reporting to proactive project control, with fewer surprises and better outcomes.
          </p>
        </div>

        {/* 3-column feature strip on cyan background */}
        <div className="max-w-[1240px] mx-auto">
          <div className="bg-[#80F0FF] px-8 sm:px-14 lg:px-[72px] py-12 sm:py-14 lg:py-[60px]">
            <div className="grid md:grid-cols-3 gap-y-10 gap-x-12 lg:gap-x-20">
              <div>
                <h3 className="text-[26px] sm:text-[28px] lg:text-[30px] font-semibold text-[#111019] leading-[1.2] mb-6">
                  Early Visibility
                </h3>
                <p className="text-[16px] leading-[32px] text-[#252434] font-normal">
                  Monitors thousands of schedule activities and highlights what actually matters.
                  Detects delays, slippages, and emerging risks in real time — before they escalate.
                </p>
              </div>
              <div>
                <h3 className="text-[26px] sm:text-[28px] lg:text-[30px] font-semibold text-[#111019] leading-[1.2] mb-6">
                  Clear Prioritisation
                </h3>
                <p className="text-[16px] leading-[32px] text-[#252434] font-normal">
                  Automatically generates S-curves, dashboards, and variance reports. Uses AI to
                  explain why issues are happening — not just where — so your team acts with clarity.
                </p>
              </div>
              <div>
                <h3 className="text-[26px] sm:text-[28px] lg:text-[30px] font-semibold text-[#111019] leading-[1.2] mb-6">
                  Predictive Control
                </h3>
                <p className="text-[16px] leading-[32px] text-[#252434] font-normal">
                  Predicts future delays and simulates what actions can bring the project back on
                  track. Shift from reactive reporting to proactive control, with fewer surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
        </FadeInView>
      </section>

      {/* ── See AI PMO Assistance in Action ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#C0F4FF]">
        <FadeInView>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-4">
              See AI PMO Assistance in Action
            </h2>
            <p className="text-[16px] leading-[28px] text-[#3B394E] font-normal max-w-[640px] mx-auto">
              Real screenshots from our production platform showing the actual interface your team
              will use daily
            </p>
          </div>

          {/* 3 screenshot cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Document Management */}
            <div className="bg-white rounded-[20px] p-6 sm:p-8 shadow-sm">
              <h4 className="text-lg sm:text-xl font-semibold text-[#111019] mb-3 leading-tight">
                Document<br />Management System
              </h4>
              <p className="text-[14px] leading-[24px] text-[#3B394E] font-normal mb-4">
                Centralized repository for all project documents with advanced search, version
                control, and upload capabilities
              </p>
              <ul className="space-y-2">
                {['Smart categorization', 'Full-text search', 'Access controls'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[14px] text-[#3B394E]">
                    <span className="w-1 h-1 bg-[#252434] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Profile & Security */}
            <div className="bg-white rounded-[20px] p-6 sm:p-8 shadow-sm">
              <h4 className="text-lg sm:text-xl font-semibold text-[#111019] mb-3 leading-tight">
                Profile & Security<br />Settings
              </h4>
              <p className="text-[14px] leading-[24px] text-[#3B394E] font-normal mb-4">
                Complete user management with granular permissions, security controls, and profile
                customization
              </p>
              <ul className="space-y-2">
                {['Role-based access', '2FA authentication', 'Audit logs'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[14px] text-[#3B394E]">
                    <span className="w-1 h-1 bg-[#252434] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI-Powered Assistant */}
            <div className="bg-white rounded-[20px] p-6 sm:p-8 shadow-sm">
              <h4 className="text-lg sm:text-xl font-semibold text-[#111019] mb-3 leading-tight">
                AI-Powered<br />Assistant
              </h4>
              <p className="text-[14px] leading-[24px] text-[#3B394E] font-normal mb-4">
                Intelligent chatbot that answers questions, provides insights, and helps navigate your
                project data
              </p>
              <ul className="space-y-2">
                {['Natural language queries', 'Instant insights', 'Contextual help'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[14px] text-[#3B394E]">
                    <span className="w-1 h-1 bg-[#252434] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/login?redirect=/theta-pmo/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-[#007695] px-8 py-3.5 text-[15.6px] font-normal text-white shadow-[0_0_0_4.45px_#CCE4EC] hover:bg-[#005d77] transition-colors tracking-[0.08px]"
            >
              Try it Live - Free Trial
            </Link>
            <p className="text-[13px] text-[#3B394E] mt-4">
              No credit card required &bull; Full access for 14 days
            </p>
          </div>
        </div>
        </FadeInView>
      </section>

      {/* ── Integrated Tools & Modules ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-4">
              Integrated Tools & Modules
            </h2>
            <p className="text-[16px] leading-[28px] text-[#3B394E] font-normal">
              Powerful operational tools seamlessly integrated into one intelligent platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {[
              {
                title: 'Performance Dashboard',
                description: 'Comprehensive real-time overview of project status, cost variance, resource utilization, and operational health indicators across your portfolio.',
                features: ['Real-time KPI tracking', 'Multi-project overview', 'Health indicators', 'Trend analysis'],
              },
              {
                title: 'Reporting Hub',
                description: 'Generate customizable reports for leadership, finance, and operations teams with automated scheduling and distribution.',
                features: ['Custom templates', 'Auto-generation', 'Multi-format export', 'Distribution lists'],
              },
              {
                title: 'Financial Control Module',
                description: 'Complete financial oversight with budget allocation, commitment tracking, expense monitoring, and predictive cost forecasting.',
                features: ['Budget management', 'Expense tracking', 'Variance reporting', 'Cost forecasting'],
              },
              {
                title: 'Resource Management',
                description: 'Comprehensive resource and asset management with inventory tracking, assignment optimization, and capacity planning.',
                features: ['Resource allocation', 'Utilization reports', 'Capacity planning', 'Skills tracking'],
              },
              {
                title: 'Collaboration Tools',
                description: 'Enable team communication, document sharing, task assignments, and collaborative decision-making in real-time.',
                features: ['Team messaging', 'File sharing', 'Comments & mentions', 'Activity feeds'],
              },
              {
                title: 'Forecasting Engine',
                description: 'Predict potential delays and cost overruns using trend analysis, historical data, and machine learning algorithms.',
                features: ['Predictive analytics', 'Risk forecasting', 'Trend analysis', 'What-if scenarios'],
              },
            ].map((tool, index) => (
              <div key={index}>
                <h3 className="text-xl sm:text-[22px] font-semibold text-[#111019] mb-3">
                  {tool.title}
                </h3>
                <p className="text-[14px] leading-[24px] text-[#3B394E] font-normal mb-4">
                  {tool.description}
                </p>
                <div>
                  <p className="text-[13px] font-medium text-[#252434] mb-2">Key Features:</p>
                  <ul className="space-y-1.5">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[14px] text-[#3B394E]">
                        <span className="w-1 h-1 bg-[#252434] rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        </FadeInView>
      </section>

      {/* ── Core Capabilities (Comprehensive Project Management Suite) ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F0FAFF]">
        <FadeInView>
        <div className="max-w-[1200px] mx-auto">
          {/* Section heading */}
          <div className="bg-[#F0FAFF] rounded-t-[32px] text-center mb-10 pt-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-4">
              Comprehensive Project Management{'\u00A0'}Suite
            </h2>
            <p className="text-[16px] leading-[28px] text-[#3B394E] font-normal italic max-w-[620px] mx-auto">
              Everything you need to manage operations with excellence, from planning to execution
              to analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Timeline & Milestone */}
            <div className="bg-white rounded-[20px] p-8 sm:p-10 border border-gray-100">
              <div className="w-12 h-12 bg-[#252434] rounded-xl flex items-center justify-center mb-5">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#111019] mb-3">
                Timeline & Milestone Tracking
              </h3>
              <p className="text-[15px] leading-[26px] text-[#3B394E] font-normal mb-5">
                Monitor planned vs. actual progress across all projects and operations. Visual Gantt charts,
                critical path analysis, and automated alerts help you detect delays early and take corrective action instantly.
              </p>
              <ul className="space-y-2">
                {[
                  'Interactive Gantt chart visualization with drag-and-drop',
                  'Critical path analysis to identify bottlenecks',
                  'Automated delay alerts and SLA monitoring',
                  'Milestone dependency tracking across projects',
                  'Multi-project timeline view for portfolio management',
                  'Baseline comparison to track schedule variance',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px] text-[#3B394E]">
                    <span className="w-1 h-1 bg-[#252434] rounded-full flex-shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Budget vs. Actual */}
            <div className="bg-white rounded-[20px] p-8 sm:p-10 border border-gray-100">
              <div className="w-12 h-12 bg-[#252434] rounded-xl flex items-center justify-center mb-5">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#111019] mb-3">
                Budget vs. Actual Cost Control
              </h3>
              <p className="text-[15px] leading-[26px] text-[#3B394E] font-normal mb-5">
                Track allocated budgets, commitments, and actual expenses in real time. Gain full financial transparency
                with variance analysis, forecasting, and automated alerts to prevent cost overruns.
              </p>
              <ul className="space-y-2">
                {[
                  'Budget allocation and tracking by phase/category',
                  'Commitment tracking before expenses occur',
                  'Real-time expense variance analysis',
                  'Cost forecasting using trend analysis',
                  'Multi-currency support for global operations',
                  'Earned value management (EVM) metrics',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px] text-[#3B394E]">
                    <span className="w-1 h-1 bg-[#252434] rounded-full flex-shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resource & Inventory */}
            <div className="bg-white rounded-[20px] p-8 sm:p-10 border border-gray-100">
              <div className="w-12 h-12 bg-[#252434] rounded-xl flex items-center justify-center mb-5">
                <FolderOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#111019] mb-3">
                Resource & Inventory Management
              </h3>
              <p className="text-[15px] leading-[26px] text-[#3B394E] font-normal mb-5">
                Manage assets, materials, and human resources efficiently. Optimize utilization, reduce waste, and
                ensure the right resources are available when needed.
              </p>
              <ul className="space-y-2">
                {[
                  'Asset tracking with assignment history',
                  'Inventory level monitoring and alerts',
                  'Resource utilization optimization',
                  'Capacity planning and workload balancing',
                  'Skills matrix and competency tracking',
                  'Equipment maintenance scheduling',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px] text-[#3B394E]">
                    <span className="w-1 h-1 bg-[#252434] rounded-full flex-shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Real-Time Operational Analytics */}
            <div className="bg-white rounded-[20px] p-8 sm:p-10 border border-gray-100">
              <div className="w-12 h-12 bg-[#252434] rounded-xl flex items-center justify-center mb-5">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#111019] mb-3">
                Real-Time Operational Analytics
              </h3>
              <p className="text-[15px] leading-[26px] text-[#3B394E] font-normal mb-5">
                Transform live data into actionable insights with interactive dashboards, custom KPIs, and
                automated reporting that keeps stakeholders informed.
              </p>
              <ul className="space-y-2">
                {[
                  'Customizable real-time dashboards',
                  'Custom KPI tracking and visualization',
                  'Performance trending and forecasting',
                  'Automated report generation and distribution',
                  'Power BI integration for advanced analytics',
                  'Executive summary views for leadership',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px] text-[#3B394E]">
                    <span className="w-1 h-1 bg-[#252434] rounded-full flex-shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </FadeInView>
      </section>

      {/* ── Built for Every Industry ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-5">
              Built for Every Industry
            </h2>
            <p className="text-[16px] leading-[28px] text-[#3B394E] font-normal">
              AI PMO Assistance adapts to your industry's unique requirements and workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                icon: Shield,
                title: 'Construction & Engineering',
                desc: 'Manage large-scale construction projects with multiple contractors, materials, and regulatory requirements.',
                cases: ['Site management', 'Contractor coordination', 'Material tracking', 'Safety compliance'],
              },
              {
                icon: Settings,
                title: 'IT & Software Development',
                desc: 'Track agile sprints, development cycles, releases, and technical debt across product portfolios.',
                cases: ['Sprint planning', 'Release management', 'Bug tracking', 'DevOps integration'],
              },

            ].map((industry) => (
              <div key={industry.title} className="flex flex-col">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-11 h-11 rounded-full bg-[#111019] flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-[22px] font-semibold text-[#111019]">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-[15px] leading-[26px] text-[#252434] font-normal mb-4">
                  {industry.desc}
                </p>
                <p className="text-[15px] leading-[26px] font-semibold text-[#111019] mb-1">Common Use Cases</p>
                <ul className="space-y-1">
                  {industry.cases.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[15px] leading-[26px] text-[#252434] font-normal">
                      <span className="mt-[11px] w-1 h-1 rounded-full bg-[#252434] flex-shrink-0" />
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

      {/* ── Our Approach (Cyan bg, 2-col with accordion) ── */}
      <OurApproachSection />

      {/* ── Ready to Start Your Journey? CTA ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[-2px] text-[#111019] leading-[1.15] mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[14px] leading-[24px] text-[#3B394E] font-normal max-w-[520px] mx-auto mb-8">
            Our proven approach ensures smooth implementation and rapid value delivery. Let's discuss how we can tailor this
            methodology to your specific needs.
          </p>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center rounded-full bg-[#007695] px-8 py-3.5 text-[15.6px] font-normal text-white shadow-[0_0_0_4.45px_#CCE4EC] hover:bg-[#005d77] transition-colors tracking-[0.08px]"
          >
            View Full Implementation Plan
          </Link>
        </div>
        </FadeInView>
      </section>

      {/* ── Enterprise-Grade Platform Architecture ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-4">
              Enterprise-Grade Platform Architecture
            </h2>
            <p className="text-[16px] leading-[28px] text-[#3B394E] font-normal italic">
              Built on modern, scalable technology stack for reliability and performance
            </p>
          </div>

          {/* 4 Tech cards on light cyan bg */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {[
              {
                icon: <CloudIcon className="w-7 h-7 text-[#252434]" />,
                title: 'Cloud Infrastructure',
                features: ['99.9% uptime SLA', 'Auto-scaling', 'Global CDN', 'Multi-region deployment'],
              },
              {
                icon: <Database className="w-7 h-7 text-[#252434]" />,
                title: 'Data Management',
                features: ['Encrypted at rest', 'Daily backups', 'GDPR compliant', 'Data sovereignty'],
              },
              {
                icon: <Shield className="w-7 h-7 text-[#252434]" />,
                title: 'Security',
                features: ['SOC 2 Type II', 'Penetration tested', '2FA authentication', 'Role-based access'],
              },
              {
                icon: <TrendingUp className="w-7 h-7 text-[#252434]" />,
                title: 'Performance',
                features: ['< 200ms response', 'Real-time updates', 'Concurrent users', 'API rate limits'],
              },
            ].map((card, index) => (
              <div key={index} className="bg-[#C0F4FF] rounded-[16px] p-6">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-[18px] font-semibold text-[#111019] mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[14px] text-[#252434]">
                      <span className="w-1 h-1 bg-[#252434] rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 3 smaller cards below */}
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                title: 'Mobile Access',
                desc: 'Responsive web interface works on any device. iOS and Android apps available.',
              },
              {
                title: 'Security',
                desc: 'RESTful API for integration with existing systems. Webhooks for real-time events.',
              },
              {
                title: 'Performance',
                desc: 'Hosted in multiple regions worldwide with automatic failover and disaster recovery.',
              },
            ].map((card, index) => (
              <div key={index} className="bg-[#C0F4FF] rounded-[16px] p-6">
                <h3 className="text-[18px] font-semibold text-[#111019] mb-2">{card.title}</h3>
                <p className="text-[14px] leading-[22px] text-[#252434]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
        </FadeInView>
      </section>

      {/* ── Calculate Your ROI (2-col: metrics left, example right) ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Metrics */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-3">
                Calculate Your ROI
              </h2>
              <p className="text-[14px] leading-[24px] text-[#3B394E] font-normal mb-10">
                Average AI PMO Assistance customer metrics based on 500+
                implementations
              </p>

              <div className="space-y-8">
                {[
                  { metric: '40%', label: 'Cost Reduction', desc: 'Average savings on operational costs' },
                  { metric: '60%', label: 'Time Saved', desc: 'Reduction in reporting and tracking time' },
                  { metric: '3-6', label: 'Time to ROI', desc: 'Average payback period', suffix: 'months' },
                  { metric: '25%', label: 'Productivity Gain', desc: 'Increase in team efficiency' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <span className="text-4xl sm:text-5xl font-normal text-[#111019] tracking-tight min-w-[100px]">
                      {item.metric}
                      {item.suffix && <span className="text-lg text-[#3B394E]">{item.suffix}</span>}
                    </span>
                    <div>
                      <p className="text-[16px] font-medium text-[#111019]">{item.label}</p>
                      <p className="text-[13px] text-[#3B394E]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Example Scenario */}
            <div className="bg-[#E8FBFF] rounded-[20px] p-8 sm:p-10 border border-[#C0F4FF]">
              <h3 className="text-xl sm:text-[22px] font-semibold text-[#111019] mb-6">
                Example Scenario
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-[14px] leading-[22px] text-[#252434]">
                  <span className="w-1.5 h-1.5 bg-[#252434] rounded-full flex-shrink-0 mt-2" />
                  <span><strong>Organization:</strong> Mid-size company managing 50 concurrent projects with 200 team members</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] leading-[22px] text-[#252434]">
                  <span className="w-1.5 h-1.5 bg-[#252434] rounded-full flex-shrink-0 mt-2" />
                  <span><strong>Before AI PMO Assistance:</strong> 15 hours/week spent on status reporting, frequent budget overruns, resource conflicts</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] leading-[22px] text-[#252434]">
                  <span className="w-1.5 h-1.5 bg-[#252434] rounded-full flex-shrink-0 mt-2" />
                  <span><strong>After AI PMO Assistance:</strong> Automated reporting saves 10 hours/week ($52,000/year), 40% reduction in overruns ($200,000/year)</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] leading-[22px] text-[#252434]">
                  <span className="w-1.5 h-1.5 bg-[#252434] rounded-full flex-shrink-0 mt-2" />
                  <span><strong>Total Annual Savings:</strong> $252,000 vs. $24,000 platform cost = <strong className="text-[#36B37E]">10.5x ROI</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </FadeInView>
      </section>



      {/* ── How It Works (3-step) ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-4">
                How It Works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  step: 'Ingest',
                  desc: 'Primavera P6, Power BI, Excel, and ERP data — unified into a single analytical layer.',
                },
                {
                  step: 'Intelligence',
                  desc: 'Custom LLM analyses history, interdependencies, and deviations to explain why issues happen.',
                },
                {
                  step: 'Action',
                  desc: 'Automated S-curves, What-If simulations, and variance alerts delivered to the right teams.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#F0FAFF] rounded-[20px] p-7 border border-[#CCE4EC]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#007695] text-white font-semibold">
                      {idx + 1}
                    </span>
                    <h3 className="text-[20px] font-semibold text-[#111019]">{item.step}</h3>
                  </div>
                  <p className="text-[15px] leading-[24px] text-[#3B394E]">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-[15px] italic text-[#3B394E] max-w-3xl mx-auto">
              An always-on digital partner that helps PMOs detect issues earlier, understand why they
              happen, and act before they become losses.
            </p>
          </div>
        </FadeInView>
      </section>

      {/* ── Customer Story: Descon Engineering (4-step framework) ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F0FAFF]">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <p className="text-[13px] font-semibold tracking-[0.2em] text-[#007695] uppercase mb-3">
                Customer Story — Descon Engineering
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-[-2px] text-[#111019] leading-[1.15] mb-5">
                Enhancing Project Controls with a Digital PMO
              </h2>
              <p className="text-[16px] leading-[28px] text-[#3B394E] font-normal max-w-[820px] mx-auto">
                Descon Engineering, a leading EPC contractor, partnered with Theta to strengthen
                project controls on a large-scale petrochemical project involving over 13,000
                Primavera P6 activities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                {
                  title: 'Eliminate Fragmented Data Silos',
                  desc: 'Unified 13,000+ Primavera P6 activities with PMS Excel data to resolve inconsistencies and traceability gaps.',
                },
                {
                  title: 'Automate Data Validation & Integration',
                  desc: 'Applied algorithmic checks to detect invalid sequencing and missing dependencies across Engineering, Procurement, and Construction.',
                },
                {
                  title: 'Deploy AI-Powered Predictive Analytics',
                  desc: 'Utilised custom AI agents and "What-If" simulations to forecast delays and analyse performance trends in real-time.',
                },
                {
                  title: 'Establish a Single Source of Truth',
                  desc: 'Replaced manual reconciliation with dynamic S-curves and mobile-ready variance tracking for faster, field-level decision-making.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-[20px] p-7 border border-[#CCE4EC] shadow-sm">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#007695] text-white font-semibold mb-4">
                    {idx + 1}
                  </span>
                  <h3 className="text-[17px] font-semibold text-[#111019] leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-[#3B394E]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Theta Advantage callout */}
            <div className="mx-auto max-w-[820px] rounded-2xl border border-[#007695]/20 bg-white px-6 py-5 text-center shadow-sm">
              <p className="text-[13px] font-semibold tracking-[0.2em] text-[#007695] uppercase mb-1">
                Theta Advantage
              </p>
              <p className="text-[15px] leading-[24px] text-[#3B394E]">
                Integrates with Theta Engage for real-time field team collaboration.
              </p>
            </div>
          </div>
        </FadeInView>
      </section>

      <WorksWhereverBanner />
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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#80F0FF]">
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
