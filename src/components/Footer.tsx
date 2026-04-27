import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import AI Planning Logo
import aiPlanLogo from '../assets/ai-plan.png';

export function Footer() {
  return (
    <footer className="bg-[#e8f0f8]">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-9">
        <div className="py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-[120px]">
            {/* Logo & Description */}
            <div className="max-w-[420px]">
              <Link to="/" className="inline-block mb-5">
                <ImageWithFallback
                  src={aiPlanLogo}
                  alt="AI Planning"
                  className="h-12 lg:h-16 w-auto"
                />
              </Link>
              <p className="text-[14px] leading-[22px] text-[#3B394E]">
                AI-powered fuel delivery planning and tracking platform. Optimize routes, predict
                demand, and manage your fleet with real-time visibility.
              </p>
            </div>

            {/* Links Grid — 3 columns: Product, Solutions, Company */}
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 flex-1">
              {/* Product */}
              <div className="sm:w-1/3">
                <h3 className="text-[13px] leading-[18px] tracking-[0.08em] uppercase text-[#0f2d52] mb-4 font-semibold">
                  Product
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/features"
                      className="text-[15px] leading-[24px] text-[#3B394E] hover:text-[#0066cc] transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/platform"
                      className="text-[15px] leading-[24px] text-[#3B394E] hover:text-[#0066cc] transition-colors"
                    >
                      Platform
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Solutions */}
              <div className="sm:w-1/3">
                <h3 className="text-[13px] leading-[18px] tracking-[0.08em] uppercase text-[#0f2d52] mb-4 font-semibold">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/solutions"
                      className="text-[15px] leading-[24px] text-[#3B394E] hover:text-[#0066cc] transition-colors"
                    >
                      Fleet Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solutions"
                      className="text-[15px] leading-[24px] text-[#3B394E] hover:text-[#0066cc] transition-colors"
                    >
                      Fuel Distribution
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="sm:w-1/3">
                <h3 className="text-[13px] leading-[18px] tracking-[0.08em] uppercase text-[#0f2d52] mb-4 font-semibold">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/about"
                      className="text-[15px] leading-[24px] text-[#3B394E] hover:text-[#0066cc] transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-[15px] leading-[24px] text-[#3B394E] hover:text-[#0066cc] transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-9">
          <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-4">
            {/* Social Icons + Legal Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-[#e8f0f8] rounded-full flex items-center justify-center hover:bg-[#c8d7ea] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M0 2.88C0 2.147.3 1.445.832.932A2.842 2.842 0 0 1 2.88 0c.768 0 1.504.335 2.048.932.544.597.832 1.215.832 1.948 0 .733-.288 1.351-.832 1.948A2.842 2.842 0 0 1 2.88 5.76 2.842 2.842 0 0 1 .832 4.828C.3 4.231 0 3.613 0 2.88ZM.36 18V6.48h5.04V18H.36Zm7.56 0V6.48h4.824v1.548c.684-1.008 1.872-1.836 3.78-1.836C19.08 6.192 21 8.208 21 11.88V18h-5.04v-5.472c0-1.584-.564-2.664-1.98-2.664-1.08 0-1.728.732-2.016 1.44-.108.252-.144.612-.144.972V18H6.78Z"
                      fill="#0066cc"
                      transform="scale(0.857)"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="w-10 h-10 bg-[#e8f0f8] rounded-full flex items-center justify-center hover:bg-[#c8d7ea] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M10.714 7.626 17.415 0h-1.588L10.01 6.62 5.362 0H0l7.025 10.225L0 18.225h1.588l6.143-7.143 4.907 7.143H18L10.714 7.626Zm-2.175 2.528-.712-1.019L2.164 1.183h2.44l4.572 6.537.712 1.019 5.942 8.503h-2.44l-4.851-6.938Z"
                      fill="#0066cc"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:contact@ai-planning.io"
                  aria-label="Email"
                  className="w-10 h-10 bg-[#e8f0f8] rounded-full flex items-center justify-center hover:bg-[#c8d7ea] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M1.5 3h15c.825 0 1.5.675 1.5 1.5v10.5c0 .825-.675 1.5-1.5 1.5h-15c-.825 0-1.5-.675-1.5-1.5V4.5C0 3.675.675 3 1.5 3Zm7.5 6.375L16.35 4.5H1.65L9 9.375ZM1.5 15h15V5.775L9 10.65 1.5 5.775V15Z"
                      fill="#0066cc"
                    />
                  </svg>
                </a>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 sm:gap-8">
                <a
                  href="#"
                  className="text-[12px] leading-[18px] text-[#3B394E] hover:text-[#0066cc] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-[12px] leading-[18px] text-[#3B394E] hover:text-[#0066cc] transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-[12px] leading-[18px] text-[#3B394E] hover:text-[#0066cc] transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-[12px] leading-[18px] text-[#3B394E]">
              &copy; 2026 AI-Planning.io. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
