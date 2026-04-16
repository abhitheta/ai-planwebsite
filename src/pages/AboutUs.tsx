import { Link } from 'react-router';
import { useState } from 'react';
import {
  Award,
  Users,
  Globe,
  TrendingUp,
  Target,
  Zap,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { FadeInView } from '../components/FadeInView';
import { WorksWhereverBanner } from '../components/WorksWhereverBanner';

const TEAM_MEMBERS = [
  {
    name: 'Junaid',
    title: 'Founder & CEO',
    initial: 'J',
    description:
      "Junaid is a seasoned executive with extensive experience in supply and logistics operations across Europe and North America, most recently managing CircleK's $80 billion global revenue business. He has overseen a 24/7 fuel distribution operation for 2,000 outlets in Europe and led logistics planning for 7,000 outlets across both continents.",
    competencies: [
      {
        icon: Award,
        title: 'Cost Leadership',
        description:
          'Established in-house fleet operations in Sweden, the Baltics, and Poland resulting in a 40% cost reduction, enhanced HSE outcomes, and improved customer service.',
      },
      {
        icon: Users,
        title: 'People & Vendor Management',
        description:
          'Leadership of multicultural teams, client and sales management, driver and labour scheduling, vendor and contracts management, tender processes, and retail/B2B network oversight.',
      },
      {
        icon: Zap,
        title: 'Digital Innovations',
        description:
          'Expertise in AI, process automation, real-time analytics, centralized planning, digital track and trace systems, and demand forecasting.',
      },
    ],
  },
  {
    name: 'Nidal Khoury',
    title: 'Co-Founder & COO',
    initial: 'N',
    description:
      'With over 30 years in construction and engineering, Nidal is an experienced leader driving innovation and operational excellence. As CEO of Accienta, he leads digital transformation in construction through BIM, document management, and process optimization. Additionally serving as Vice President at NSCC International, he oversees plant and operations in foundation engineering and horizontal directional drilling.',
    competencies: [
      {
        icon: Zap,
        title: 'Digital Innovation & BIM Leadership',
        description:
          'Leading the transformation of the construction industry through cutting-edge digital solutions, Building Information Modeling (BIM), and advanced document management systems.',
      },
      {
        icon: Award,
        title: 'Operations Excellence',
        description:
          'Overseeing plant and operations in foundation engineering and horizontal directional drilling, managing modern fleet of heavy equipment and large-scale maintenance facilities.',
      },
      {
        icon: TrendingUp,
        title: 'Strategic Project Delivery',
        description:
          'Successfully delivered $250 million in projects as Director of Core Operations, with proven expertise in business development, strategy, and operational transformation.',
      },
    ],
  },
];

const VALUES = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We pursue operational excellence in everything we build and deliver',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work as true partners with our clients to achieve shared success',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We leverage cutting-edge AI and technology to solve real problems',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We bring international experience to deliver world-class solutions',
  },
  {
    icon: TrendingUp,
    title: 'Impact',
    description: 'We measure success by the tangible results we deliver for clients',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical standards',
  },
];

export function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TEAM_MEMBERS.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length);
  };

  const currentMember = TEAM_MEMBERS[currentSlide];

  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      {/* ── Hero ── */}
      <section className="pt-[120px] sm:pt-[160px] lg:pt-[180px] pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#007695] uppercase mb-3 sm:mb-5">
            About Theta Dynamics
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-[72px] font-normal tracking-tight lg:tracking-[-3px] text-[#111019] leading-[1.1] sm:leading-[1.05] mb-4 sm:mb-6">
            Clarity, built for operations.
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] leading-[30px] text-[#3B394E] font-normal max-w-[720px] mx-auto">
            We transform operational complexity into clarity, accountability, and
            performance through intelligent SaaS solutions powered by AI and decades
            of real-world experience.
          </p>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-12 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white rounded-[20px] px-5 py-7 sm:px-12 sm:py-14 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-8px_rgba(16,24,40,0.08)]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[12px] sm:rounded-[14px] bg-[#E6F4F8] flex items-center justify-center mb-4 sm:mb-6">
                  <Target className="w-6 h-6 text-[#007695]" />
                </div>
                <p className="text-[13px] font-semibold tracking-[0.15em] text-[#007695] uppercase mb-3">
                  Our Mission
                </p>
                <h2 className="text-[22px] sm:text-[32px] lg:text-[36px] font-normal text-[#111019] tracking-[-0.5px] sm:tracking-[-0.8px] leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-5">
                  Empower every team with operational intelligence.
                </h2>
                <p className="text-[15px] sm:text-[16px] leading-[28px] text-[#3B394E]">
                  To empower organizations worldwide with AI-driven operational
                  intelligence that eliminates inefficiencies, controls costs, and
                  drives sustainable growth. Every business deserves complete
                  visibility and control over their operations.
                </p>
              </div>

              <div className="bg-white rounded-[20px] px-5 py-7 sm:px-12 sm:py-14 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-8px_rgba(16,24,40,0.08)]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[12px] sm:rounded-[14px] bg-[#E6F4F8] flex items-center justify-center mb-4 sm:mb-6">
                  <Zap className="w-6 h-6 text-[#007695]" />
                </div>
                <p className="text-[13px] font-semibold tracking-[0.15em] text-[#007695] uppercase mb-3">
                  Our Vision
                </p>
                <h2 className="text-[22px] sm:text-[32px] lg:text-[36px] font-normal text-[#111019] tracking-[-0.5px] sm:tracking-[-0.8px] leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-5">
                  The global standard for operational excellence.
                </h2>
                <p className="text-[15px] sm:text-[16px] leading-[28px] text-[#3B394E]">
                  To become the global standard for operational excellence platforms,
                  where AI and human expertise combine to create unprecedented levels
                  of efficiency, transparency, and performance across all industries.
                </p>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── Leadership ── */}
      <section className="py-12 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-5">
                Leadership Team
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#3B394E] font-normal">
                Decades of global operational expertise
              </p>
            </div>

            <div className="max-w-[1100px] mx-auto relative">
              <div className="bg-white rounded-[24px] shadow-[0_1px_2px_rgba(16,24,40,0.04),0_18px_48px_-16px_rgba(16,24,40,0.16)] overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[340px_1fr]">
                  {/* Left: name panel */}
                  <div className="bg-[#F7F9FC] p-6 sm:p-12 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-[#EEF0F3]">
                    <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-white shadow-[0_6px_20px_rgba(0,118,149,0.18)] flex items-center justify-center mb-3 sm:mb-5">
                      <span className="text-[36px] sm:text-[52px] font-normal text-[#007695] tracking-[-1px]">
                        {currentMember.initial}
                      </span>
                    </div>
                    <h3 className="text-[20px] sm:text-[26px] font-normal text-[#111019] tracking-[-0.5px] mb-1">
                      {currentMember.name}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] font-medium text-[#007695]">
                      {currentMember.title}
                    </p>
                  </div>

                  {/* Right: competencies */}
                  <div className="p-5 sm:p-12">
                    <p className="text-[14.5px] leading-[24px] text-[#3B394E] mb-8">
                      {currentMember.description}
                    </p>
                    <div className="space-y-6">
                      {currentMember.competencies.map((comp) => (
                        <div key={comp.title} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-[12px] bg-[#E6F4F8] flex items-center justify-center flex-shrink-0">
                            <comp.icon className="w-5 h-5 text-[#007695]" />
                          </div>
                          <div>
                            <h4 className="text-[15px] font-semibold text-[#111019] mb-1">
                              {comp.title}
                            </h4>
                            <p className="text-[13.5px] leading-[22px] text-[#3B394E]">
                              {comp.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Nav buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-[0_4px_12px_rgba(16,24,40,0.12)] hover:shadow-[0_8px_20px_rgba(16,24,40,0.16)] transition-all z-10"
                aria-label="Previous team member"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#111019]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-[0_4px_12px_rgba(16,24,40,0.12)] hover:shadow-[0_8px_20px_rgba(16,24,40,0.16)] transition-all z-10"
                aria-label="Next team member"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#111019]" />
              </button>

              {/* Dots */}
              <div className="flex justify-center mt-8 space-x-3">
                {TEAM_MEMBERS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-[#007695] w-8'
                        : 'bg-gray-300 w-2 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── Values ── */}
      <section className="py-12 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
        <FadeInView>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-[-2.5px] text-[#111019] leading-[1.1] mb-5">
                Our Values
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#3B394E] font-normal">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-[16px] sm:rounded-[20px] p-4 sm:p-8 lg:p-10 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-8px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-[10px] sm:rounded-[14px] bg-[#E6F4F8] flex items-center justify-center mb-3 sm:mb-5">
                    <value.icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#007695]" />
                  </div>
                  <h3 className="text-[16px] sm:text-[22px] font-semibold text-[#111019] mb-1.5 sm:mb-3 tracking-[-0.3px]">
                    {value.title}
                  </h3>
                  <p className="text-[12px] sm:text-[15px] leading-[18px] sm:leading-[24px] text-[#3B394E]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeInView>
          <div className="max-w-[760px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[-2px] text-[#111019] leading-[1.15] mb-4">
              Join Us on the Journey
            </h2>
            <p className="text-[15px] leading-[26px] text-[#6B6A7C] font-normal max-w-[520px] mx-auto mb-8">
              Let's transform your operations together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#007695] px-8 py-3.5 text-[15.6px] font-normal text-white shadow-[0_0_0_4.45px_#CCE4EC] hover:bg-[#005d77] transition-colors tracking-[0.08px] min-w-[200px]"
            >
              Get in Touch
            </Link>
          </div>
        </FadeInView>
      </section>

      <WorksWhereverBanner />
    </div>
  );
}
