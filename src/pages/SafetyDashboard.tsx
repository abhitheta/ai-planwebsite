import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { LogOut, Settings, Bell, Shield, AlertTriangle, Users, Camera, Radio, Activity, MapPin, Eye, CheckCircle, BarChart3 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { OnboardingWizard } from '../components/OnboardingWizard';
import thetaLogo from '../assets/ai-plan.png';


export function SafetyDashboard() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingData, setOnboardingData] = useState<any>(null);

  useEffect(() => {
    if (user) {
      const savedData = localStorage.getItem(`theta_hse_onboarding_${user.uid}`);
      if (savedData) {
        setOnboardingData(JSON.parse(savedData));
        setShowOnboarding(false);
      } else {
        setShowOnboarding(true);
      }
    }
  }, [user]);

  const handleOnboardingComplete = (data: any) => {
    if (user) {
      localStorage.setItem(`theta_hse_onboarding_${user.uid}`, JSON.stringify(data));
      setOnboardingData(data);
      setShowOnboarding(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Not logged in → redirect to login page
  if (!user) {
    navigate('/login?redirect=/theta-hse/dashboard');
    return null;
  }

  // First time → show HSE onboarding
  if (showOnboarding) {
    return (
      <OnboardingWizard
        product="hse"
        userName={user.displayName || ''}
        onComplete={handleOnboardingComplete}
      />
    );
  }

  // HSE Dashboard Data
  const stats = {
    totalPersonnel: 342,
    onSite: 286,
    activeCameras: 48,
    alertsToday: 12,
    safetyScore: 94.2,
    incidentsThisMonth: 3,
    zonesMonitored: 16,
    complianceRate: 97
  };

  const recentAlerts = [
    { severity: 'high', type: 'Unauthorized Access', zone: 'Zone C - Restricted', time: '14 min ago', description: 'Unregistered personnel detected in hazardous area' },
    { severity: 'medium', type: 'PPE Violation', zone: 'Zone A - Main Site', time: '42 min ago', description: 'Worker without hard hat detected by Camera 12' },
    { severity: 'low', type: 'Zone Capacity', zone: 'Zone D - Warehouse', time: '1 hour ago', description: 'Zone approaching maximum occupancy limit' },
    { severity: 'medium', type: 'Equipment Alert', zone: 'Zone B - Operations', time: '2 hours ago', description: 'Safety barrier displaced near loading dock' }
  ];

  const zones = [
    { name: onboardingData?.siteName || 'Zone A - Main Site', personnel: 98, cameras: 12, status: 'Normal', risk: 'Low' },
    { name: 'Zone B - Operations', personnel: 64, cameras: 10, status: 'Normal', risk: 'Medium' },
    { name: 'Zone C - Restricted', personnel: 8, cameras: 8, status: 'Alert', risk: 'High' },
    { name: 'Zone D - Warehouse', personnel: 52, cameras: 6, status: 'Warning', risk: 'Medium' },
    { name: 'Zone E - Entry/Exit', personnel: 64, cameras: 12, status: 'Normal', risk: 'Low' }
  ];

  const incidents = [
    { date: 'Feb 12, 2026', type: 'Near Miss', zone: 'Zone B', severity: 'Medium', description: 'Forklift near-collision at intersection' },
    { date: 'Feb 8, 2026', type: 'PPE Violation', zone: 'Zone A', severity: 'Low', description: 'Multiple workers without safety vests' },
    { date: 'Feb 3, 2026', type: 'Unauthorized Entry', zone: 'Zone C', severity: 'High', description: 'Contractor entered restricted area without clearance' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img src={thetaLogo} alt="AI Planning" className="h-8" />
              <div className="border-l border-gray-300 pl-3">
                <span className="text-sm font-semibold text-orange-600">AI Safety Guardian</span>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'User'} className="w-8 h-8 rounded-full" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                    <span className="text-orange-600 font-semibold text-sm">{user.displayName?.charAt(0) || user.email?.charAt(0)?.toUpperCase()}</span>
                  </div>
                )}
                <span className="text-sm font-medium text-gray-700 hidden md:block">{user.displayName || user.email}</span>
              </div>
              <button onClick={handleSignOut} className="p-2 hover:bg-red-50 rounded-lg transition group" title="Sign Out">
                <LogOut className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Safety Control Center
            </h1>
            <p className="text-gray-600">
              {onboardingData?.companyName
                ? `${onboardingData.companyName} — Real-time safety monitoring`
                : 'Real-time safety monitoring & incident management'
              }
            </p>
          </div>
          {onboardingData?.companyName && (
            <div className="hidden md:flex items-center space-x-3 bg-orange-50 px-4 py-2 rounded-xl border border-orange-200">
              <div className="text-right">
                <p className="text-xs text-gray-500">Organization</p>
                <p className="text-sm font-semibold text-gray-900">{onboardingData.companyName}</p>
              </div>
              <div className="w-px h-8 bg-orange-200"></div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Environment</p>
                <p className="text-sm font-semibold text-gray-900">{onboardingData.siteType || 'Industrial'}</p>
              </div>
            </div>
          )}
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-orange-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">Personnel On-Site</span>
              <Users className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.onSite}</p>
            <p className="text-sm text-gray-500">of {stats.totalPersonnel} registered</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs text-green-600 font-medium">All accounted for</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">Active Cameras</span>
              <Camera className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.activeCameras}</p>
            <p className="text-sm text-gray-500">across {stats.zonesMonitored} zones</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs text-green-600 font-medium">100% operational</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-red-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">Alerts Today</span>
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.alertsToday}</p>
            <p className="text-sm text-gray-500">{stats.incidentsThisMonth} incidents this month</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs text-orange-600 font-medium">2 require attention</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-sm border-2 border-green-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">Safety Score</span>
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-700 mb-1">{stats.safetyScore}%</p>
            <p className="text-sm text-gray-600">compliance: {stats.complianceRate}%</p>
            <div className="mt-3 pt-3 border-t border-green-200">
              <span className="text-xs text-green-700 font-semibold">↑ 2.1% from last month</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Zone Monitoring */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Zone Monitoring</h2>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Live</span>
                </div>
              </div>
              <div className="space-y-3">
                {zones.map((zone, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{zone.name}</h3>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                          <span className="flex items-center space-x-1"><Users className="w-3 h-3" /> <span>{zone.personnel} personnel</span></span>
                          <span className="flex items-center space-x-1"><Camera className="w-3 h-3" /> <span>{zone.cameras} cameras</span></span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          zone.risk === 'High' ? 'bg-red-100 text-red-700' :
                          zone.risk === 'Medium' ? 'bg-orange-100 text-orange-700' :
                          'bg-green-100 text-green-700'
                        }`}>{zone.risk} Risk</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          zone.status === 'Alert' ? 'bg-red-100 text-red-700' :
                          zone.status === 'Warning' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>{zone.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Incidents */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Incidents</h2>
              <div className="space-y-3">
                {incidents.map((incident, i) => (
                  <div key={i} className={`p-4 rounded-lg border ${
                    incident.severity === 'High' ? 'border-red-200 bg-red-50' :
                    incident.severity === 'Medium' ? 'border-orange-200 bg-orange-50' :
                    'border-yellow-200 bg-yellow-50'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold uppercase ${
                          incident.severity === 'High' ? 'bg-red-200 text-red-800' :
                          incident.severity === 'Medium' ? 'bg-orange-200 text-orange-800' :
                          'bg-yellow-200 text-yellow-800'
                        }`}>{incident.severity}</span>
                        <span className="text-sm font-semibold text-gray-900">{incident.type}</span>
                      </div>
                      <span className="text-xs text-gray-500">{incident.date}</span>
                    </div>
                    <p className="text-sm text-gray-700">{incident.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{incident.zone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Live Alerts */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-gray-900">Live Alerts</h3>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-3">
                {recentAlerts.map((alert, i) => (
                  <div key={i} className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        alert.severity === 'high' ? 'bg-red-500' :
                        alert.severity === 'medium' ? 'bg-orange-500' :
                        'bg-yellow-500'
                      }`}></span>
                      <span className="text-sm font-semibold text-gray-900">{alert.type}</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{alert.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{alert.zone}</span>
                      <span>{alert.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personnel Overview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-gray-900">Personnel Overview</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Registered</span>
                  <span className="text-sm font-semibold text-gray-900">{stats.totalPersonnel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Currently On-Site</span>
                  <span className="text-sm font-semibold text-green-600">{stats.onSite}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Off-Site</span>
                  <span className="text-sm font-semibold text-gray-900">{stats.totalPersonnel - stats.onSite}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: `${Math.round((stats.onSite / stats.totalPersonnel) * 100)}%` }}></div>
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-600 font-medium">All personnel accounted for</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-100 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link to="/theta-pmo/dashboard" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-5 h-5 text-[#0f2d52]" />
                    <span className="text-sm font-medium text-gray-900">PMO Dashboard</span>
                  </div>
                  <span className="text-orange-600">→</span>
                </Link>
                <Link to="/theta-hse" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-medium text-gray-900">Explore HSE Features</span>
                  </div>
                  <span className="text-orange-600">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
