import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import Theta Dynamics Logo
import thetaLogo from 'figma:asset/597399b234f8fb65f05b6e291a4f06fe5c46a34a.png';

export function Footer() {
  return (
    <footer className="bg-[#EFF0FF]">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-9">
        <div className="py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-[152px]">
            {/* Logo & Description */}
            <div className="max-w-[526px]">
              <Link to="/" className="inline-block mb-6">
                <ImageWithFallback
                  src={thetaLogo}
                  alt="Theta Dynamics"
                  className="h-16 lg:h-20 w-auto"
                />
              </Link>
              <p className="text-[12.62px] leading-6 tracking-[0.64px] uppercase text-[#3D2E7C]">
                Transforming operational complexity into clarity, accountability, and performance
                through intelligent AI-powered solutions.
              </p>
            </div>

            {/* Links Grid */}
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-0 flex-1">
              {/* Product */}
              <div className="sm:w-1/3">
                <h3 className="text-[12.62px] leading-[18px] tracking-[0.64px] uppercase text-[#3D2E7C] mb-4 font-normal">
                  Product
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/theta-pmo"
                      className="text-[15.6px] leading-[27px] tracking-[0.08px] text-[#3D2E7C] hover:text-[#4B42AD] transition-colors"
                    >
                      AI PMO Assistant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/theta-hse"
                      className="text-[14.6px] leading-[27px] tracking-[0.08px] text-[#3D2E7C] hover:text-[#4B42AD] transition-colors"
                    >
                      AI Safety Guardian
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/theta-ops-assistant"
                      className="text-[14.6px] leading-[27px] tracking-[0.08px] text-[#3D2E7C] hover:text-[#4B42AD] transition-colors"
                    >
                      AI Cost of Operations
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/theta-ai"
                      className="text-[14.6px] leading-[27px] tracking-[0.08px] text-[#3D2E7C] hover:text-[#4B42AD] transition-colors"
                    >
                      AI Maintenance Assistant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/theta-procurement-assistant"
                      className="text-[14.6px] leading-[27px] tracking-[0.08px] text-[#3D2E7C] hover:text-[#4B42AD] transition-colors"
                    >
                      AI Procurement & Invoice Control
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="sm:w-1/3">
                <h3 className="text-[12.62px] leading-[18px] tracking-[0.64px] uppercase text-[#3D2E7C] mb-4 font-normal">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/about"
                      className="text-[15.6px] leading-[27px] tracking-[0.08px] text-[#3D2E7C] hover:text-[#4B42AD] transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/how-it-works"
                      className="text-[13.6px] leading-[27px] tracking-[0.08px] text-[#3D2E7C] hover:text-[#4B42AD] transition-colors"
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/how-it-works"
                      className="text-[14.6px] leading-[27px] tracking-[0.08px] text-[#3D2E7C] hover:text-[#4B42AD] transition-colors"
                    >
                      Implementation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-[14.6px] leading-[27px] tracking-[0.08px] text-[#3D2E7C] hover:text-[#4B42AD] transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div className="sm:w-1/3">
                <h3 className="text-[12.62px] leading-[18px] tracking-[0.64px] uppercase text-[#3D2E7C] mb-4 font-normal">
                  Support
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:support@thetadynamics.io"
                      className="text-[14.6px] leading-[27px] tracking-[0.08px] text-[#3D2E7C] hover:text-[#4B42AD] transition-colors"
                    >
                      Email Support
                    </a>
                  </li>
                  <li>
                    <span className="text-[15.6px] leading-[27px] tracking-[0.08px] text-[#3D2E7C]">
                      24/7 Availability
                    </span>
                  </li>
                  <li>
                    <span className="text-[15.6px] leading-[27px] tracking-[0.08px] text-[#3D2E7C]">
                      Global Coverage
                    </span>
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
                  className="w-11 h-11 bg-[#EFF0FF] rounded-full flex items-center justify-center hover:bg-[#e4e5f5] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M0 2.88C0 2.147.3 1.445.832.932A2.842 2.842 0 0 1 2.88 0c.768 0 1.504.335 2.048.932.544.597.832 1.215.832 1.948 0 .733-.288 1.351-.832 1.948A2.842 2.842 0 0 1 2.88 5.76 2.842 2.842 0 0 1 .832 4.828C.3 4.231 0 3.613 0 2.88ZM.36 18V6.48h5.04V18H.36Zm7.56 0V6.48h4.824v1.548c.684-1.008 1.872-1.836 3.78-1.836C19.08 6.192 21 8.208 21 11.88V18h-5.04v-5.472c0-1.584-.564-2.664-1.98-2.664-1.08 0-1.728.732-2.016 1.44-.108.252-.144.612-.144.972V18H6.78Z"
                      fill="#4B42AD"
                      transform="scale(0.857)"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="w-11 h-11 bg-[#EFF0FF] rounded-full flex items-center justify-center hover:bg-[#e4e5f5] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M10.714 7.626 17.415 0h-1.588L10.01 6.62 5.362 0H0l7.025 10.225L0 18.225h1.588l6.143-7.143 4.907 7.143H18L10.714 7.626Zm-2.175 2.528-.712-1.019L2.164 1.183h2.44l4.572 6.537.712 1.019 5.942 8.503h-2.44l-4.851-6.938Z"
                      fill="#4B42AD"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:support@thetadynamics.io"
                  className="w-11 h-11 bg-[#EFF0FF] rounded-full flex items-center justify-center hover:bg-[#e4e5f5] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M1.5 3h15c.825 0 1.5.675 1.5 1.5v10.5c0 .825-.675 1.5-1.5 1.5h-15c-.825 0-1.5-.675-1.5-1.5V4.5C0 3.675.675 3 1.5 3Zm7.5 6.375L16.35 4.5H1.65L9 9.375ZM1.5 15h15V5.775L9 10.65 1.5 5.775V15Z"
                      fill="#4B42AD"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 bg-[#EFF0FF] rounded-full flex items-center justify-center hover:bg-[#e4e5f5] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 14" fill="none">
                    <path
                      d="M17.624 2.178A2.262 2.262 0 0 0 16.033.573C14.628.158 9 .158 9 .158S3.372.158 1.967.555A2.303 2.303 0 0 0 .376 2.178C0 3.594 0 6.553 0 6.553s0 2.978.376 4.375a2.262 2.262 0 0 0 1.591 1.605C3.39 12.948 9 12.948 9 12.948s5.628 0 7.033-.397a2.262 2.262 0 0 0 1.591-1.605C18 9.531 18 6.572 18 6.572s.019-2.978-.376-4.394ZM7.192 9.37V3.737l4.697 2.816L7.192 9.37Z"
                      fill="#4B42AD"
                    />
                  </svg>
                </a>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-10">
                <a href="#" className="text-[11.6px] leading-[18px] text-[#3B394E] hover:text-[#4B42AD] transition-colors">
                  Security
                </a>
                <Link
                  to="/privacy-policy"
                  className="text-[11.6px] leading-[18px] text-[#3B394E] hover:text-[#4B42AD] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className="text-[11.6px] leading-[18px] text-[#3B394E] hover:text-[#4B42AD] transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-[11.6px] leading-[18px] text-[#3B394E]">
              &copy; 2026 Theta Dynamics. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
