import { Link } from 'react-router';

export function WorksWhereverBanner() {
  return (
    <section
      className="px-4 pb-0"
      style={{
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 55%, #EFF0FF 55%, #EFF0FF 100%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-white rounded-[32px] sm:rounded-[68.92px] shadow-[0_2px_6px_rgba(0,0,0,0.04),0_5px_18px_rgba(0,0,0,0.06),0_24px_83px_rgba(0,0,0,0.1)] flex flex-col sm:flex-row items-center justify-between px-5 py-8 sm:px-[70px] sm:py-[84px] gap-4 sm:gap-6">
          <h3 className="text-[20px] sm:text-3xl lg:text-[44.15px] font-normal leading-tight sm:leading-[50px] tracking-[-1px] sm:tracking-[-2.07px] text-[#212121] text-center sm:text-left">
            THETA AI works wherever you do.
          </h3>
          <div className="flex flex-col items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#36B37E] px-8 py-3.5 text-[15.6px] font-normal text-[#EFF0FF] shadow-[0_0_0_4.45px_#B7FFE0] hover:bg-[#2ea06e] transition-colors tracking-[0.08px] leading-[27px]"
            >
              Contact Sales
            </Link>
            <p className="text-[12.6px] leading-[18px] text-[#3D2E7C]">
              For Mac, Windows, iOS, and Android
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
