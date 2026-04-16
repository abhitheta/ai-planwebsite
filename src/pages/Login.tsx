import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import thetaLogo from 'figma:asset/597399b234f8fb65f05b6e291a4f06fe5c46a34a.png';


export function Login() {
  const { user, loading, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [signingIn, setSigningIn] = useState(false);

  const redirectTo = searchParams.get('redirect') || '/';

  // Redirect if already logged in
  useEffect(() => {
    if (user && !loading) {
      navigate(redirectTo);
    }
  }, [user, loading, navigate, redirectTo]);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#478560] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pt-24 pb-12">
      <div className="w-full max-w-5xl mx-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Login Form */}
            <div className="p-12">
              {/* Logo */}
              <div className="mb-8">
                <img 
                  src={thetaLogo} 
                  alt="Theta Dynamics" 
                  className="h-12 mb-6"
                />
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Sign in</h1>
                <p className="text-gray-600">to access Theta Dynamics Platform</p>
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Email address or mobile number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#478560] focus:border-transparent"
                  disabled
                />
              </div>

              {/* Next Button */}
              <button
                className="w-full py-3 bg-[#478560] hover:bg-[#3a6d4e] text-white font-semibold rounded-lg transition mb-8"
                disabled
              >
                Next
              </button>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Sign in using</span>
                </div>
              </div>

              {/* Social Sign In Buttons */}
              <div className="flex items-center justify-center space-x-3 mb-8">
                {/* Google */}
                <button
                  onClick={handleSignIn}
                  disabled={signingIn}
                  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-[#478560] hover:shadow-md transition disabled:opacity-50"
                  title="Sign in with Google"
                >
                  {signingIn ? (
                    <div className="w-5 h-5 border-2 border-[#478560] border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  )}
                </button>

                {/* Facebook */}
                <button
                  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-[#478560] hover:shadow-md transition"
                  title="Sign in with Facebook"
                  disabled
                >
                  <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>

                {/* LinkedIn */}
                <button
                  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-blue-700 hover:shadow-md transition"
                  title="Sign in with LinkedIn"
                  disabled
                >
                  <svg className="w-6 h-6" fill="#0A66C2" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>

                {/* Microsoft */}
                <button
                  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:shadow-md transition"
                  title="Sign in with Microsoft"
                  disabled
                >
                  <svg className="w-6 h-6" viewBox="0 0 23 23">
                    <path fill="#f3f3f3" d="M0 0h23v23H0z"/>
                    <path fill="#f35325" d="M1 1h10v10H1z"/>
                    <path fill="#81bc06" d="M12 1h10v10H12z"/>
                    <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                    <path fill="#ffba08" d="M12 12h10v10H12z"/>
                  </svg>
                </button>

                {/* More Options */}
                <button
                  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:shadow-md transition"
                  title="More options"
                  disabled
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-gray-600">
                Don't have a Theta account?{' '}
                <button className="text-[#478560] hover:text-[#3a6d4e] font-medium">
                  Sign up now
                </button>
              </div>

              {/* Back to Home */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <Link to="/" className="text-[#478560] hover:text-[#3a6d4e] text-sm font-medium">
                  ← Back to Home
                </Link>
              </div>
            </div>

            {/* Right Side - Illustration/Info */}
            <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-12 flex flex-col items-center justify-center">
              <div className="text-center mb-8">
                <div className="w-64 h-64 mx-auto mb-6 relative">
                  {/* Security Illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-[#478560] to-[#5a9d77] rounded-3xl transform rotate-6 opacity-20"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                      <svg className="w-24 h-24 text-[#478560]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  {/* Floating Icons */}
                  <div className="absolute top-8 left-4 w-12 h-12 bg-[#478560] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div className="absolute top-12 right-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-12 left-8 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Secure Access for All Accounts
                </h2>
                <p className="text-gray-600 mb-6 max-w-sm">
                  Secure your Theta account with enterprise-grade authentication. 
                  Single sign-on across all products.
                </p>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">SSL Encrypted • 256-bit Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
