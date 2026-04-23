import { Link, useLocation } from "react-router";
import { Menu, X, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import AI Planning Logo
import aiPlanLogo from "../assets/ai-plan.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signingIn, setSigningIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, signInWithGoogle, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignIn = async () => {
    try {
      setSigningIn(true);
      await signInWithGoogle();
    } catch (error) {
      console.error("Sign in error:", error);
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
      isActive(path) ? "text-[#0066cc]" : "text-[#212121] hover:text-[#0066cc]"
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-9">
        <div className="flex justify-between items-center h-[80px] lg:h-[122px]">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <ImageWithFallback
              src={aiPlanLogo}
              alt="AI Planning"
              className="h-12 lg:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-[40px]">
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link to="/features" className={navLinkClass("/features")}>
              Features
            </Link>
            <Link to="/platform" className={navLinkClass("/platform")}>
              Platform
            </Link>
            <Link to="/solutions" className={navLinkClass("/solutions")}>
              Solutions
            </Link>
            <Link to="/about" className={navLinkClass("/about")}>
              About
            </Link>
            <Link to="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
          </div>

          {/* CTA Buttons - Right */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-6 h-6 rounded-full"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-[#0f2d52] flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">
                        {user.displayName?.charAt(0) ||
                          user.email?.charAt(0)?.toUpperCase()}
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
                {/* <a
                  href="https://tpanel.thetadynamics.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#0f2d52] text-white font-normal text-[14.6px] tracking-[0.08px] rounded-full hover:bg-[#0052a3] transition-colors"
                >
                  Sign In
                </a> */}
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-[#e8f0f8] text-[#0f2d52] font-normal text-[14.6px] tracking-[0.08px] rounded-full hover:bg-[#c8d7ea] transition-colors border border-[#0f2d52]/10"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
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

            <Link
              to="/features"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-normal text-[#212121] hover:bg-gray-50"
            >
              Features
            </Link>
            <Link
              to="/platform"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-normal text-[#212121] hover:bg-gray-50"
            >
              Platform
            </Link>
            <Link
              to="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-normal text-[#212121] hover:bg-gray-50"
            >
              Solutions
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
                      <img
                        src={user.photoURL}
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-[#0f2d52] flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {user.displayName?.charAt(0) ||
                            user.email?.charAt(0)?.toUpperCase()}
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
                  <a
                    href="https://tpanel.thetadynamics.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-3 py-2.5 bg-[#0f2d52] text-white rounded-full text-center text-sm hover:bg-[#0052a3] transition"
                  >
                    Sign In
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-3 py-2.5 bg-[#e8f0f8] text-[#0f2d52] rounded-full text-center text-sm hover:bg-[#c8d7ea] transition border border-[#0f2d52]/10"
                  >
                    Get Started
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
