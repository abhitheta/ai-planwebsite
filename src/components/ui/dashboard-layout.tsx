import { useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { Menu, X, LogOut, type LucideIcon } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import thetaLogo from '../../assets/ai-plan.png';

export interface SidebarItem {
  label: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  badge?: string | number;
}

interface DashboardLayoutProps {
  children: ReactNode;
  sidebarItems: SidebarItem[];
  title: string;
  userName?: string;
  userAvatar?: string;
  onSignOut?: () => void;
}

export function DashboardLayout({
  children,
  sidebarItems,
  title,
  userName,
  userAvatar,
  onSignOut,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-5 border-b border-gray-100">
        <Link to="/" className="flex items-center">
          <ImageWithFallback src={thetaLogo} alt="AI Planning" className="h-8 w-auto" />
        </Link>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <div
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? 'bg-[#0f2d52]/10 text-[#0f2d52]'
                  : 'text-[#3B394E] hover:bg-gray-50 hover:text-[#252434]'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.badge != null && (
                <span className="bg-[#0f2d52] text-white text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          );

          if (item.href) {
            return (
              <Link key={item.label} to={item.href} onClick={() => setSidebarOpen(false)}>
                {content}
              </Link>
            );
          }

          return (
            <button
              key={item.label}
              onClick={() => {
                item.onClick?.();
                setSidebarOpen(false);
              }}
              className="w-full text-left"
            >
              {content}
            </button>
          );
        })}
      </nav>

      {/* User / Sign Out */}
      {(userName || onSignOut) && (
        <div className="p-4 border-t border-gray-100">
          {userName && (
            <div className="flex items-center gap-3 mb-3">
              {userAvatar ? (
                <img src={userAvatar} alt="" className="w-8 h-8 rounded-full" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#0f2d52] flex items-center justify-center text-white text-sm font-medium">
                  {userName.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="text-sm font-medium text-[#252434] truncate">{userName}</span>
            </div>
          )}
          {onSignOut && (
            <button
              onClick={onSignOut}
              className="flex items-center gap-2 text-sm text-[#3B394E] hover:text-red-600 transition-colors w-full px-3 py-2 rounded-lg hover:bg-red-50"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - desktop */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col bg-white border-r border-gray-100 z-30">
        <SidebarContent />
      </aside>

      {/* Sidebar - mobile */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-100 z-50 transform transition-transform duration-200 lg:hidden ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-20">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <h1 className="text-lg font-semibold text-[#252434]">{title}</h1>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
