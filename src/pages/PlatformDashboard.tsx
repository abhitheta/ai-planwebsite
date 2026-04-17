import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { BarChart3, DollarSign, Users, CheckCircle, AlertCircle, Activity, FolderOpen, Calendar, Target, Bell, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { OnboardingWizard } from '../components/OnboardingWizard';
import { DashboardLayout, type SidebarItem } from '../components/ui/dashboard-layout';
import { StatCard } from '../components/ui/stat-card';
import { DataTable, type Column } from '../components/ui/data-table';


export function PmoDashboard() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingData, setOnboardingData] = useState<any>(null);

  useEffect(() => {
    if (user) {
      const savedData = localStorage.getItem(`theta_pmo_onboarding_${user.uid}`);
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
      localStorage.setItem(`theta_pmo_onboarding_${user.uid}`, JSON.stringify(data));
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
          <div className="w-16 h-16 border-4 border-[#0f2d52] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#3B394E]">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    navigate('/login?redirect=/theta-pmo/dashboard');
    return null;
  }

  if (showOnboarding) {
    return (
      <OnboardingWizard
        product="pmo"
        userName={user.displayName || ''}
        onComplete={handleOnboardingComplete}
      />
    );
  }

  const stats = {
    totalProjects: 24,
    activeProjects: 18,
    completedProjects: 6,
    totalBudget: 4500000,
    spentBudget: 2800000,
    teamMembers: 156,
    onTimeDelivery: 92,
  };

  const projects = [
    { id: 1, name: onboardingData?.projectName || 'Enterprise Resource Planning', status: 'On Track', progress: 68, budget: 850000, spent: 520000, team: 12, dueDate: 'Mar 15, 2026', category: onboardingData?.industry || 'IT Infrastructure' },
    { id: 2, name: 'Manufacturing Plant Expansion', status: 'At Risk', progress: 45, budget: 1200000, spent: 680000, team: 24, dueDate: 'Apr 30, 2026', category: 'Construction' },
    { id: 3, name: 'Customer Portal Development', status: 'On Track', progress: 82, budget: 320000, spent: 245000, team: 8, dueDate: 'Feb 28, 2026', category: 'Software Development' },
    { id: 4, name: 'AI Cost Optimization Initiative', status: 'Ahead', progress: 95, budget: 180000, spent: 165000, team: 6, dueDate: 'Feb 20, 2026', category: 'AI & Analytics' },
  ];

  const milestones = [
    { project: onboardingData?.projectName || 'ERP System', milestone: 'User Acceptance Testing', date: 'Feb 18, 2026' },
    { project: 'Plant Expansion', milestone: 'Foundation Completion', date: 'Feb 22, 2026' },
    { project: 'Customer Portal', milestone: 'Production Deployment', date: 'Feb 25, 2026' },
    { project: 'AI Initiative', milestone: 'Final Report Submission', date: 'Feb 19, 2026' },
  ];

  const alerts = [
    { type: 'warning', message: 'Manufacturing Plant Expansion - 15% over budget', time: '2 hours ago' },
    { type: 'info', message: 'New team member added to ERP project', time: '5 hours ago' },
    { type: 'success', message: 'Customer Portal passed security audit', time: '1 day ago' },
  ];

  const sidebarItems: SidebarItem[] = [
    { label: 'Dashboard', icon: BarChart3, href: '/theta-pmo/dashboard', active: true },
    { label: 'Projects', icon: FolderOpen, href: '/theta-pmo/dashboard' },
    { label: 'Calendar', icon: Calendar, href: '/theta-pmo/dashboard' },
    { label: 'Team', icon: Users, href: '/theta-pmo/dashboard' },
    { label: 'Budget', icon: DollarSign, href: '/theta-pmo/dashboard' },
    { label: 'Settings', icon: Settings, href: '/theta-pmo/dashboard' },
    { label: 'Notifications', icon: Bell, href: '/theta-pmo/dashboard', badge: 3 },
  ];

  const projectColumns: Column<typeof projects[0]>[] = [
    {
      key: 'name',
      header: 'Project',
      sortable: true,
      render: (row) => (
        <div>
          <div className="font-medium text-[#252434]">{row.name}</div>
          <div className="text-xs text-[#3B394E] mt-0.5">{row.category}</div>
        </div>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            row.status === 'On Track'
              ? 'bg-[#e8f0f8] text-[#0f2d52]'
              : row.status === 'At Risk'
              ? 'bg-orange-100 text-orange-700'
              : 'bg-blue-100 text-blue-700'
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      key: 'progress',
      header: 'Progress',
      sortable: true,
      render: (row) => (
        <div className="flex items-center gap-3 min-w-[120px]">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${row.status === 'At Risk' ? 'bg-orange-500' : 'bg-[#0f2d52]'}`}
              style={{ width: `${row.progress}%` }}
            />
          </div>
          <span className="text-xs font-medium w-8 text-right">{row.progress}%</span>
        </div>
      ),
    },
    {
      key: 'budget',
      header: 'Budget',
      sortable: true,
      render: (row) => (
        <span>
          ${(row.spent / 1000).toFixed(0)}K / ${(row.budget / 1000).toFixed(0)}K
        </span>
      ),
    },
    {
      key: 'team',
      header: 'Team',
      sortable: true,
      render: (row) => <span>{row.team} members</span>,
    },
    {
      key: 'dueDate',
      header: 'Due Date',
      sortable: true,
    },
  ];

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      title={`Welcome back, ${user.displayName?.split(' ')[0] || 'User'}`}
      userName={user.displayName || user.email || ''}
      userAvatar={user.photoURL || undefined}
      onSignOut={handleSignOut}
    >
      {/* Organization info */}
      {onboardingData?.companyName && (
        <div className="mb-6 flex items-center gap-4 bg-[#e8f0f8]/20 px-5 py-3 rounded-xl border border-[#0f2d52]/20">
          <div>
            <p className="text-xs text-[#3B394E]">Organization</p>
            <p className="text-sm font-medium text-[#252434]">{onboardingData.companyName}</p>
          </div>
          <div className="w-px h-8 bg-[#0f2d52]/20" />
          <div>
            <p className="text-xs text-[#3B394E]">Industry</p>
            <p className="text-sm font-medium text-[#252434]">{onboardingData.industry}</p>
          </div>
        </div>
      )}

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard
          title="Active Projects"
          value={stats.activeProjects}
          icon={<FolderOpen className="w-5 h-5 text-[#F1F0F3]" />}
          trend={{ value: 12, positive: true }}
          description={`of ${stats.totalProjects} total`}
        />
        <StatCard
          title="Budget Performance"
          value={`$${(stats.spentBudget / 1000000).toFixed(1)}M`}
          icon={<DollarSign className="w-5 h-5 text-[#F1F0F3]" />}
          description={`of $${(stats.totalBudget / 1000000).toFixed(1)}M allocated`}
        />
        <StatCard
          title="Team Members"
          value={stats.teamMembers}
          icon={<Users className="w-5 h-5 text-[#F1F0F3]" />}
          description="across all projects"
        />
        <StatCard
          title="On-Time Delivery"
          value={`${stats.onTimeDelivery}%`}
          icon={<Target className="w-5 h-5 text-[#F1F0F3]" />}
          trend={{ value: 5, positive: true }}
          description="last 6 months"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Projects Table */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#252434] mb-5">Active Projects</h2>
            <DataTable columns={projectColumns} data={projects} />
          </div>
        </div>

        {/* Sidebar panels */}
        <div className="space-y-6">
          {/* Milestones */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-[#0f2d52]" />
              <h3 className="font-semibold text-[#252434]">Upcoming Milestones</h3>
            </div>
            <div className="space-y-3">
              {milestones.map((m, i) => (
                <div key={i} className="pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                  <p className="text-sm font-medium text-[#252434] mb-0.5">{m.milestone}</p>
                  <p className="text-xs text-[#3B394E]">{m.project}</p>
                  <p className="text-xs text-[#0f2d52] font-medium mt-1">{m.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold text-[#252434]">Recent Alerts</h3>
            </div>
            <div className="space-y-3">
              {alerts.map((alert, i) => (
                <div key={i} className="flex items-start gap-2 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                  {alert.type === 'warning' && <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />}
                  {alert.type === 'info' && <Activity className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />}
                  {alert.type === 'success' && <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />}
                  <div className="flex-1">
                    <p className="text-xs text-[#252434]">{alert.message}</p>
                    <p className="text-xs text-[#3B394E] mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-[#e8f0f8]/20 rounded-2xl border border-[#0f2d52]/15 p-6">
            <h3 className="font-semibold text-[#252434] mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Link
                to="/theta-hse/dashboard"
                className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-[#252434]">AI Safety Guardian Dashboard</span>
                </div>
                <span className="text-[#0f2d52]">&rarr;</span>
              </Link>
              <Link
                to="/theta-pmo"
                className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-[#0f2d52]" />
                  <span className="text-sm font-medium text-[#252434]">Explore PMO Features</span>
                </div>
                <span className="text-[#0f2d52]">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
