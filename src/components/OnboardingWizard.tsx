import { useState } from 'react';
import { Building2, BarChart3, Shield, ArrowRight, ArrowLeft, CheckCircle, Briefcase, Target, MapPin, Clock } from 'lucide-react';

interface OnboardingData {
  companyName: string;
  industry: string;
  companySize: string;
  role: string;
  // PMO fields
  projectName: string;
  estimatedBudget: string;
  timeline: string;
  teamSize: string;
  // HSE fields
  siteType: string;
  siteName: string;
  personnelCount: string;
}

interface OnboardingWizardProps {
  product: 'pmo' | 'hse';
  userName: string;
  onComplete: (data: OnboardingData) => void;
}

const industries = [
  'IT & Software',
  'Construction & Engineering',
  'Manufacturing',
  'Healthcare',
  'Energy & Utilities',
  'Financial Services',
  'Government & Public Sector',
  'Professional Services',
  'Logistics & Supply Chain',
  'Oil & Gas',
  'Retail',
  'Other'
];

const companySizes = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '501-1000', label: '501-1,000 employees' },
  { value: '1000+', label: '1,000+ employees' }
];

const roles = [
  'CEO / Founder',
  'CTO / CIO',
  'COO / Operations Director',
  'Project Manager',
  'Program Manager',
  'Finance Manager / CFO',
  'IT Manager',
  'Team Lead',
  'Consultant',
  'Other'
];

export function OnboardingWizard({ product, userName, onComplete }: OnboardingWizardProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const isPmo = product === 'pmo';
  const brandColor = isPmo ? '#478560' : '#ea580c';
  const brandBg = isPmo ? 'from-emerald-50 to-teal-50' : 'from-orange-50 to-red-50';
  const productName = isPmo ? 'AI PMO Assistance' : 'AI Safety Guardian';

  const [data, setData] = useState<OnboardingData>({
    companyName: '',
    industry: '',
    companySize: '',
    role: '',
    projectName: '',
    estimatedBudget: '',
    timeline: '',
    teamSize: '',
    siteType: '',
    siteName: '',
    personnelCount: ''
  });

  const updateData = (field: keyof OnboardingData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return data.companyName.trim() !== '' && data.industry !== '' && data.companySize !== '' && data.role !== '';
      case 2:
        if (isPmo) return data.projectName.trim() !== '';
        return data.siteType !== '';
      case 3:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const stepLabels = isPmo
    ? ['Company Info', 'Project Setup', 'Ready!']
    : ['Company Info', 'Site Setup', 'Ready!'];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${brandBg} flex items-center justify-center px-4 py-12`}>
      <div className="w-full max-w-2xl">
        {/* Header Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full border text-sm font-semibold"
            style={{ backgroundColor: `${brandColor}15`, borderColor: `${brandColor}30`, color: brandColor }}>
            {isPmo ? <BarChart3 className="w-4 h-4 mr-2" /> : <Shield className="w-4 h-4 mr-2" />}
            {productName} Setup
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    s > step ? 'bg-gray-200 text-gray-500' : 'text-white'
                  } ${s === step ? 'ring-4' : ''}`}
                  style={s <= step ? { backgroundColor: brandColor } : {}}
                >
                  {s < step ? <CheckCircle className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className="hidden sm:block w-32 md:w-48 h-1 mx-2 rounded transition-all duration-300"
                    style={{ backgroundColor: s < step ? brandColor : '#e5e7eb' }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 px-1">
            {stepLabels.map((label, i) => (
              <span key={i}>{label}</span>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

          {/* Step 1: Company Info */}
          {step === 1 && (
            <div className="p-8 md:p-10">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${brandColor}15` }}>
                  <Building2 className="w-6 h-6" style={{ color: brandColor }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Welcome to {productName}! 🎉
                  </h2>
                  <p className="text-gray-500 text-sm">Hi {userName || 'there'}, tell us about your organization</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8 mt-4">
                This helps us customize your {isPmo ? 'project management' : 'safety monitoring'} experience.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    value={data.companyName}
                    onChange={(e) => updateData('companyName', e.target.value)}
                    placeholder="e.g. Acme Corporation"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent outline-none transition text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Industry *</label>
                  <select
                    value={data.industry}
                    onChange={(e) => updateData('industry', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent outline-none transition text-gray-900 bg-white"
                  >
                    <option value="">Select your industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Size *</label>
                    <select
                      value={data.companySize}
                      onChange={(e) => updateData('companySize', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent outline-none transition text-gray-900 bg-white"
                    >
                      <option value="">Select size</option>
                      {companySizes.map((size) => (
                        <option key={size.value} value={size.value}>{size.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Role *</label>
                    <select
                      value={data.role}
                      onChange={(e) => updateData('role', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent outline-none transition text-gray-900 bg-white"
                    >
                      <option value="">Select your role</option>
                      {roles.map((role) => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: PMO Project Setup */}
          {step === 2 && isPmo && (
            <div className="p-8 md:p-10">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#478560]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Create Your First Project</h2>
                  <p className="text-gray-500 text-sm">Set up your first project to see the platform in action</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8 mt-4">
                Don't worry, you can change these details or add more projects later.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Name *</label>
                  <input
                    type="text"
                    value={data.projectName}
                    onChange={(e) => updateData('projectName', e.target.value)}
                    placeholder="e.g. ERP System Implementation"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#478560] focus:border-transparent outline-none transition text-gray-900"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Budget</label>
                    <select
                      value={data.estimatedBudget}
                      onChange={(e) => updateData('estimatedBudget', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#478560] focus:border-transparent outline-none transition text-gray-900 bg-white"
                    >
                      <option value="">Select range</option>
                      <option value="<50K">Less than $50K</option>
                      <option value="50K-200K">$50K - $200K</option>
                      <option value="200K-500K">$200K - $500K</option>
                      <option value="500K-1M">$500K - $1M</option>
                      <option value="1M-5M">$1M - $5M</option>
                      <option value="5M+">$5M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Timeline</label>
                    <select
                      value={data.timeline}
                      onChange={(e) => updateData('timeline', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#478560] focus:border-transparent outline-none transition text-gray-900 bg-white"
                    >
                      <option value="">Select duration</option>
                      <option value="1-3">1-3 months</option>
                      <option value="3-6">3-6 months</option>
                      <option value="6-12">6-12 months</option>
                      <option value="12-24">1-2 years</option>
                      <option value="24+">2+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Team Size</label>
                    <select
                      value={data.teamSize}
                      onChange={(e) => updateData('teamSize', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#478560] focus:border-transparent outline-none transition text-gray-900 bg-white"
                    >
                      <option value="">Select size</option>
                      <option value="1-5">1-5 people</option>
                      <option value="5-15">5-15 people</option>
                      <option value="15-50">15-50 people</option>
                      <option value="50-100">50-100 people</option>
                      <option value="100+">100+ people</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: HSE Site Setup */}
          {step === 2 && !isPmo && (
            <div className="p-8 md:p-10">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Configure Safety Monitoring</h2>
                  <p className="text-gray-500 text-sm">Tell us about your site environment</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8 mt-4">
                This helps us set up the right monitoring configuration for your environment.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    What type of site do you operate? *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'construction', label: 'Construction', icon: Target },
                      { value: 'manufacturing', label: 'Manufacturing', icon: Clock },
                      { value: 'industrial', label: 'Industrial', icon: MapPin }
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => updateData('siteType', option.value)}
                        className={`p-4 rounded-xl border-2 text-sm font-medium transition-all flex flex-col items-center gap-2 ${
                          data.siteType === option.value
                            ? 'border-orange-600 bg-orange-50 text-orange-600'
                            : 'border-gray-200 text-gray-700 hover:border-orange-300'
                        }`}
                      >
                        <option.icon className="w-5 h-5" />
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Site / Facility Name</label>
                  <input
                    type="text"
                    value={data.siteName}
                    onChange={(e) => updateData('siteName', e.target.value)}
                    placeholder="e.g. Main Construction Site - Phase 2"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Personnel Count</label>
                  <select
                    value={data.personnelCount}
                    onChange={(e) => updateData('personnelCount', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition text-gray-900 bg-white"
                  >
                    <option value="">Select range</option>
                    <option value="1-50">1-50 workers</option>
                    <option value="50-200">50-200 workers</option>
                    <option value="200-500">200-500 workers</option>
                    <option value="500-1000">500-1,000 workers</option>
                    <option value="1000+">1,000+ workers</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Complete */}
          {step === 3 && (
            <div className="p-8 md:p-10">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce"
                  style={{ background: `linear-gradient(135deg, ${brandColor}, ${isPmo ? '#5a9d77' : '#818cf8'})` }}>
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-3">You're All Set! 🚀</h2>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                  Your <strong>{productName}</strong> workspace for <strong>{data.companyName}</strong> is ready.
                  {isPmo
                    ? ` Project "${data.projectName}" has been created!`
                    : ' Safety monitoring is configured!'
                  }
                </p>

                {/* Summary */}
                <div className="bg-gray-50 rounded-2xl p-6 text-left max-w-md mx-auto mb-8">
                  <h3 className="font-bold text-gray-900 mb-4 text-center">Setup Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Company</span>
                      <span className="text-sm font-semibold text-gray-900">{data.companyName}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Industry</span>
                      <span className="text-sm font-semibold text-gray-900">{data.industry}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Size</span>
                      <span className="text-sm font-semibold text-gray-900">{data.companySize} employees</span>
                    </div>
                    {isPmo && data.projectName && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-sm text-gray-600">First Project</span>
                        <span className="text-sm font-semibold text-gray-900">{data.projectName}</span>
                      </div>
                    )}
                    {!isPmo && data.siteType && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-sm text-gray-600">Site Type</span>
                        <span className="text-sm font-semibold text-gray-900">
                          {data.siteType === 'construction' ? 'Construction' :
                           data.siteType === 'manufacturing' ? 'Manufacturing' : 'Industrial'}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Role</span>
                      <span className="text-sm font-semibold text-gray-900">{data.role}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onComplete(data)}
                  className="px-10 py-4 text-white rounded-xl text-lg font-semibold hover:opacity-90 transition shadow-lg inline-flex items-center"
                  style={{ backgroundColor: brandColor }}
                >
                  Go to {productName} Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Footer Navigation */}
          {step < 3 && (
            <div className="px-8 md:px-10 py-5 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center space-x-2 px-5 py-2.5 text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex items-center space-x-2 px-8 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                style={{ backgroundColor: brandColor }}
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Skip */}
        {step < 3 && (
          <div className="text-center mt-6">
            <button
              onClick={() => onComplete(data)}
              className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-4 transition"
            >
              Skip setup and go to dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
