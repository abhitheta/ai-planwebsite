import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import Theta Dynamics Logo
import thetaLogo from 'figma:asset/597399b234f8fb65f05b6e291a4f06fe5c46a34a.png';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [signingIn, setSigningIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, signInWithGoogle, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignIn = async () => {
    try {
      setSigningIn(true);
      await signInWithGoogle();
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) =>
    `px-4 py-2 text-lg font-normal transition-colors ${
      isActive(path)
        ? 'text-[#36B37E]'
        : 'text-[#212121] hover:text-[#36B37E]'
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-9">
        <div className="flex justify-between items-center h-[80px] lg:h-[122px]">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <ImageWithFallback
              src={thetaLogo}
              alt="Theta Dynamics"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-[51px]">
            <Link to="/" className={navLinkClass('/')}>
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className="flex items-center gap-1 px-4 py-2 text-lg font-normal text-[#212121] hover:text-[#36B37E] transition-colors"
              >
                <span>Product</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {productsOpen && (
                <div
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  className="absolute left-0 top-full pt-1 w-80"
                >
                  <div className="bg-white rounded-xl shadow-xl border border-gray-200 py-2">
                    <Link
                      to="/theta-pmo"
                      className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition"
                    >
                      <div className="w-10 h-10 bg-[#B7FFE0] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-[#36B37E] font-bold text-sm">PMO</span>
                      </div>
                      <div>
                        <div className="font-semibold text-[#212121]">AI PMO Assistant</div>
                        <div className="text-sm text-[#3B394E]">Eliminate project surprises</div>
                      </div>
                    </Link>
                    <Link
                      to="/theta-hse"
                      className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition"
                    >
                      <div className="w-10 h-10 bg-[#B7FFE0] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-[#36B37E] font-bold text-sm">HSE</span>
                      </div>
                      <div>
                        <div className="font-semibold text-[#212121]">AI Safety Guardian</div>
                        <div className="text-sm text-[#3B394E]">From reporting to preventing incidents</div>
                      </div>
                    </Link>
                    <Link
                      to="/theta-ops-assistant"
                      className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition"
                    >
                      <div className="w-10 h-10 bg-[#B7FFE0] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-[#36B37E] font-bold text-sm">OPS</span>
                      </div>
                      <div>
                        <div className="font-semibold text-[#212121]">AI Cost of Operations Assistant</div>
                        <div className="text-sm text-[#3B394E]">Find hidden waste, improve productivity</div>
                      </div>
                    </Link>
                    <Link
                      to="/theta-procurement-assistant"
                      className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition"
                    >
                      <div className="w-10 h-10 bg-[#B7FFE0] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-[#36B37E] font-bold text-sm">PRO</span>
                      </div>
                      <div>
                        <div className="font-semibold text-[#212121]">AI Procurement & Invoice Control</div>
                        <div className="text-sm text-[#3B394E]">Stop overpaying, enforce contracts</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/how-it-works" className={navLinkClass('/how-it-works')}>
              How it Works
            </Link>
            <Link to="/about" className={navLinkClass('/about')}>
              About
            </Link>
            <Link to="/contact" className={navLinkClass('/contact')}>
              Contact
            </Link>
          </div>

          {/* CTA Buttons - Right */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="" className="w-6 h-6 rounded-full" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-[#36B37E] flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">
                        {user.displayName?.charAt(0) || user.email?.charAt(0)?.toUpperCase()}
                      </span>
                    </div>
                  )}
                  <span className="text-sm font-medium text-[#212121] max-w-[120px] truncate">
                    {user.displayName || user.email}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-6 py-3 bg-[#36B37E] text-[#D0FFCD] font-normal text-[14.6px] tracking-[0.08px] rounded-full hover:bg-[#2ea06e] transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-[#D0FFCD] text-[#36B37E] font-normal text-[14.6px] tracking-[0.08px] rounded-full hover:bg-[#c0f5bd] transition-colors"
                >
                  Talk to Sales
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-normal text-[#212121] hover:bg-gray-50"
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-base font-normal text-[#212121] hover:bg-gray-50"
              >
                <span>Product</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileProductsOpen && (
                <div className="mt-1 space-y-1">
                  <Link
                    to="/theta-pmo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-2 rounded-lg text-sm text-[#3B394E] hover:bg-gray-50"
                  >
                    AI PMO Assistant
                  </Link>
                  <Link
                    to="/theta-hse"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-2 rounded-lg text-sm text-[#3B394E] hover:bg-gray-50"
                  >
                    AI Safety Guardian
                  </Link>
                  <Link
                    to="/theta-ops-assistant"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-2 rounded-lg text-sm text-[#3B394E] hover:bg-gray-50"
                  >
                    AI Cost of Operations Assistant
                  </Link>
                  <Link
                    to="/theta-procurement-assistant"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-2 rounded-lg text-sm text-[#3B394E] hover:bg-gray-50"
                  >
                    AI Procurement & Invoice Control
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-normal text-[#212121] hover:bg-gray-50"
            >
              How it Works
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-normal text-[#212121] hover:bg-gray-50"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-normal text-[#212121] hover:bg-gray-50"
            >
              Contact
            </Link>

            <div className="pt-4 space-y-2">
              {user ? (
                <>
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="" className="w-6 h-6 rounded-full" />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-[#36B37E] flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {user.displayName?.charAt(0) || user.email?.charAt(0)?.toUpperCase()}
                        </span>
                      </div>
                    )}
                    <span className="text-sm font-medium text-[#212121]">
                      {user.displayName || user.email}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full px-3 py-2.5 border border-red-300 text-red-600 rounded-full text-center text-sm hover:bg-red-50 transition"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-3 py-2.5 bg-[#36B37E] text-[#D0FFCD] rounded-full text-center text-sm hover:bg-[#2ea06e] transition"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-3 py-2.5 bg-[#D0FFCD] text-[#36B37E] rounded-full text-center text-sm hover:bg-[#c0f5bd] transition"
                  >
                    Talk to Sales
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
