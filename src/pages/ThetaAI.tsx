import { Link } from 'react-router';
import { ArrowRight, Brain, Zap, FileText, BarChart3, CheckCircle, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WorksWhereverBanner } from '../components/WorksWhereverBanner';
import { AuthProvider } from '../contexts/AuthContext';

export function ThetaAI() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <Brain className="w-4 h-4 mr-2" />
                  <span className="text-sm font-semibold">Behavioral Learning at Portfolio Scale</span>
                </div>

                <h1 className="text-4xl font-bold mb-6 leading-tight">
                  Shifting from Reactive Fixes to Predictive Reliability
                </h1>

                <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                  "Continuously monitors productivity, energy use, and asset performance to reduce
                  waste and predict failures." The AI Maintenance Assistant detects abnormal
                  behaviour long before a human-observable failure — giving teams an extended
                  intervention window.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/theta-ai/dashboard"
                    className="px-8 py-4 bg-white text-indigo-600 rounded-lg text-lg font-semibold hover:shadow-xl transition flex items-center justify-center"
                  >
                    See AI in Action
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-indigo-500/20 backdrop-blur-sm border-2 border-white/30 rounded-lg text-lg font-semibold hover:bg-indigo-500/30 transition"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold mb-6">Focus Areas</h3>
                <div className="space-y-4">
                  {[
                    { icon: TrendingUp, title: '↓ Unplanned Breakdowns', desc: 'Catch failures before they happen' },
                    { icon: DollarSign, title: '↓ Maintenance Spend', desc: 'Lower reactive repair costs' },
                    { icon: Zap, title: '↑ Asset Utilization', desc: 'Maximize equipment lifecycle output' },
                    { icon: Brain, title: 'Behavioral Learning', desc: 'Scales from individual assets to full portfolios' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm text-indigo-100">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                See Predictive Maintenance in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch how the AI Maintenance Assistant monitors asset performance, detects early signs
                of degradation, and predicts failures before they happen
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Brain className="w-10 h-10 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Predictive Maintenance Demo</h3>
                  <p className="text-gray-600 mb-4">
                    The AI Maintenance Assistant continuously monitors asset utilisation, energy
                    consumption, and performance data to predict potential failures before they occur.
                  </p>
                  <div className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch Demo Video
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Note:</strong> Most maintenance systems are reactive — they respond after something goes
                  wrong. This platform enables teams to act before failure happens, reducing downtime and
                  improving asset lifecycle management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real operational and asset data powering predictive reliability
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 shadow-lg border-2 border-indigo-100">
                <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Asset Performance Monitoring
                </h3>
                <p className="text-gray-600 mb-4">
                  Continuously monitors asset utilisation and energy consumption to surface inefficiencies
                  and performance drift across your operations.
                </p>
                <ul className="space-y-2">
                  {[
                    'Real-time utilisation tracking',
                    'Energy consumption analytics',
                    'Multi-asset performance benchmarking',
                    'Lifecycle health indicators'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Failure Prediction & Root Cause
                </h3>
                <p className="text-gray-600 mb-4">
                  Detects early signs of degradation and predicts potential failures before they occur,
                  while explaining the root cause of poor performance.
                </p>
                <ul className="space-y-2">
                  {[
                    'Predictive failure modelling',
                    'Degradation pattern detection',
                    'Root-cause analysis',
                    'Proactive maintenance alerts'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Customizable PowerBI Reporting
                </h3>
                <p className="text-gray-600 mb-4">
                  Custom PowerBI reporting to match your needs. Visualize data the way that works for your organization.
                </p>
                <ul className="space-y-2">
                  {[
                    'Tailored dashboard design',
                    'Interactive visualizations',
                    'Custom KPI tracking',
                    'Executive summary reports'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI Speech Engine (Optional)
                </h3>
                <p className="text-gray-600 mb-4">
                  Optional AI speech engine for field staff, enabling hands-free access to key insights while on the job.
                </p>
                <ul className="space-y-2">
                  {[
                    'Voice-activated queries',
                    'Hands-free reporting',
                    'Field staff accessibility',
                    'Multi-language support'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How Theta AI Works
              </h2>
              <p className="text-xl text-gray-600">
                From data ingestion to actionable insights
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Data Ingestion',
                  description: 'Upload invoices and documents in any format or language',
                  icon: FileText
                },
                {
                  step: '02',
                  title: 'AI Processing',
                  description: 'AI reads, extracts, and structures data automatically',
                  icon: Brain
                },
                {
                  step: '03',
                  title: 'Analysis & Flagging',
                  description: 'Real-time analysis detects anomalies and patterns',
                  icon: Zap
                },
                {
                  step: '04',
                  title: 'Insights & Action',
                  description: 'Receive alerts and recommendations to optimize costs',
                  icon: TrendingUp
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 h-full">
                    <div className="text-4xl font-bold text-indigo-200 mb-3">{item.step}</div>
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-indigo-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Business Impact
              </h2>
              <p className="text-xl text-gray-600">
                Measurable results that drive bottom-line performance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: DollarSign,
                  title: 'Cost Savings',
                  description: 'Identify and eliminate cost leakages across capital projects and maintenance operations',
                  metrics: ['15-30% cost reduction', 'ROI in 3-6 months']
                },
                {
                  icon: Clock,
                  title: 'Time Efficiency',
                  description: 'Automate manual invoice processing and data entry, freeing up your team for strategic work',
                  metrics: ['90% faster processing', '100s of hours saved monthly']
                },
                {
                  icon: TrendingUp,
                  title: 'Better Decisions',
                  description: 'Data-driven insights enable proactive cost control and strategic resource allocation',
                  metrics: ['Real-time visibility', 'Predictive intelligence']
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <div className="space-y-2">
                    {benefit.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                        <span className="text-sm font-medium text-indigo-600">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Industry Applications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Engineering & Construction',
                'Oil & Gas Operations',
                'Manufacturing Plants',
                'Logistics & Supply Chain',
                'Facilities Management',
                'Infrastructure Development'
              ].map((industry, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-indigo-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="font-semibold text-gray-900">{industry}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Costs with AI?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Discover how Theta AI can help streamline your operations, reduce costs, and drive efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg text-lg font-semibold hover:shadow-xl transition"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/theta-ai/dashboard"
                className="inline-flex items-center px-8 py-4 bg-indigo-500/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg text-lg font-semibold hover:bg-indigo-500/30 transition"
              >
                See Demo
              </Link>
            </div>
          </div>
        </section>

        {/* ── Extended Intervention Window ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-4">
                Theta Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gray-900 leading-tight mb-4">
                The Extended Intervention Window
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                AI detects abnormal behaviour long before the asset reaches a human-observable
                failure — giving your team time to act.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
              {/* Simple SVG-style timeline */}
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-left">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-amber-100 px-3 py-1.5 text-[12px] font-semibold text-amber-800">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      Abnormal Noise Detected by AI
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-red-100 px-3 py-1.5 text-[12px] font-semibold text-red-800">
                      Human Observable Failure
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                    </div>
                  </div>
                </div>

                <div className="relative h-2 rounded-full bg-gradient-to-r from-emerald-300 via-amber-300 to-red-400">
                  <div className="absolute left-[18%] -top-1 h-4 w-4 rounded-full bg-amber-500 ring-4 ring-amber-200" />
                  <div className="absolute right-0 -top-1 h-4 w-4 rounded-full bg-red-500 ring-4 ring-red-200" />
                </div>

                <div className="mt-4 text-center text-[13px] font-medium text-gray-600">
                  ← Extended Intervention Window →
                </div>
              </div>

              {/* 3-column Ingest / Intelligence / Action */}
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                {[
                  { title: 'Ingest', desc: 'Live IoT telemetry, CMMS, and energy data streamed continuously from assets.' },
                  { title: 'Intelligence', desc: 'Anomaly detection links abnormal data to productivity output and degradation patterns.' },
                  { title: 'Action', desc: 'Root-cause alerts and predictive downtime warnings delivered to reliability teams.' },
                ].map((step, idx) => (
                  <div key={step.title} className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold mb-3">
                      {idx + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WorksWhereverBanner />

        {/* <Footer /> */}
      </div>
    </AuthProvider>
  );
}
