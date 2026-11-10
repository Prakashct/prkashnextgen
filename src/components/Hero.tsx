import Image from "next/image";
import Link from "next/link";
import { Laptop, Layers, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[85vh] lg:min-h-[90vh] overflow-hidden flex flex-col justify-between"
      aria-label="Prakash C. - Founder of NextGen Tech Hub"
    >
      {/* Background Graphic: optimized WebP spans the full screen */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden animate-hero-bg">
        <Image
          src="/clinic-digitalisation-hero-bg.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Header inside the Hero at the top */}
      <Header />

      {/* Main Hero Content: balanced vertical positioning & 90% comfortable width */}
      <div className="relative z-10 w-[90%] max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-end pt-2 sm:pt-4 xl:pt-4 pb-8 sm:pb-12 xl:pb-0">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6 xl:gap-12 items-end">
          
          {/* ========================================================= */}
          {/* IMAGE COLUMN: 1st on Mobile & Tablets, 2nd on Desktop     */}
          {/* ========================================================= */}
          <div className="order-1 xl:order-2 xl:col-span-6 2xl:col-span-6 relative flex items-end justify-center self-center xl:self-end w-full animate-hero-portrait animation-delay-300 pt-1 sm:pt-3 xl:pt-0">
            <div className="relative w-full max-w-[260px] xs:max-w-[290px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[460px] xl:max-w-[620px] 2xl:max-w-[700px] flex items-end justify-center transition-transform duration-500 hover:scale-[1.01]">
              {/* Soft studio ambient glow behind portrait on mobile/tablet */}
              <div
                className="absolute inset-0 bg-radial from-[#D7A257]/20 via-[#B87320]/5 to-transparent blur-2xl pointer-events-none rounded-full"
                aria-hidden="true"
              />
              <Image
                src="/prakash-c-hero.webp"
                alt="Prakash C., Founder of NextGen Tech Hub"
                width={1202}
                height={1308}
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) 290px, (max-width: 1024px) 460px, (max-width: 1280px) 520px, 700px"
                className="block w-full h-auto max-h-[32vh] xs:max-h-[36vh] sm:max-h-[40vh] md:max-h-[44vh] lg:max-h-[48vh] xl:max-h-[72vh] 2xl:max-h-[76vh] object-contain object-bottom select-none z-10"
              />
            </div>
          </div>

          {/* ========================================================= */}
          {/* TEXT COLUMN: 2nd on Mobile & Tablets, 1st on Desktop      */}
          {/* ========================================================= */}
          <div className="order-2 xl:order-1 xl:col-span-6 2xl:col-span-6 flex flex-col items-center text-center xl:items-start xl:text-left justify-center self-center py-2 sm:py-4 xl:py-6 z-10">
            
            {/* Eyebrow: INNOVATE / BUILD / GROW with gold line */}
            <div className="flex items-center justify-center xl:justify-start gap-2.5 sm:gap-3 mb-2.5 sm:mb-3.5 animate-hero-fade-left animation-delay-150">
              <span className="text-[11.5px] xs:text-[12px] sm:text-[13px] font-semibold tracking-[0.24em] text-[#3F3A36] uppercase">
                INNOVATE &nbsp;/&nbsp; BUILD &nbsp;/&nbsp; GROW
              </span>
              <span
                className="w-10 sm:w-14 h-[2px] bg-[#B87320] rounded-full inline-block animate-gold-line animation-delay-300"
                aria-hidden="true"
              />
            </div>

            {/* Intro: Hello, I'm */}
            <p className="text-xl sm:text-2xl md:text-3xl xl:text-[28px] text-[#22201F] font-normal tracking-tight mb-1 animate-hero-fade-up animation-delay-200">
              Hello, I&apos;m
            </p>

            {/* Main Heading (H1): Prakash C. */}
            <h1 className="text-[40px] xs:text-[46px] sm:text-6xl md:text-7xl xl:text-[80px] 2xl:text-[90px] font-extrabold tracking-tight text-[#22201F] leading-[1.04] mb-2 sm:mb-3 animate-hero-fade-up animation-delay-300">
              <span>Prakash </span>
              <span className="text-[#B87320] inline-block transition-transform duration-300 hover:scale-105">C.</span>
            </h1>

            {/* Professional Role: Founder, NextGen Tech Hub */}
            <p className="text-xl sm:text-2xl md:text-3xl xl:text-[26px] text-[#22201F] font-normal tracking-tight mb-4 sm:mb-5 animate-hero-fade-up animation-delay-400">
              <span>Founder, </span>
              <strong className="font-extrabold text-[#22201F]">NextGen Tech Hub</strong>
            </p>

            {/* Description Paragraph */}
            <p className="text-[15px] sm:text-[17px] md:text-lg xl:text-[18px] text-[#3F3A36] leading-relaxed max-w-lg xl:max-w-2xl mx-auto xl:mx-0 mb-6 sm:mb-7 animate-hero-fade-up animation-delay-500">
              I help clinics build a strong digital presence, attract more patients,
              and grow sustainably with simple, practical digital solutions.
            </p>

            {/* Three Expertise Highlights */}
            <div className="flex items-center justify-center xl:justify-start gap-1.5 xs:gap-3 sm:gap-4 md:gap-5 max-w-lg w-full mx-auto xl:mx-0 mb-6 sm:mb-8 animate-hero-fade-up animation-delay-600">
              {/* Highlight 1: Digital Strategy */}
              <div className="group flex-1 flex flex-col items-center text-center p-1.5 sm:p-2 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#B87320]/[0.05] cursor-default">
                <Laptop className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#B87320] mb-1.5 sm:mb-2 stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
                <span className="text-[11px] xs:text-xs sm:text-sm font-bold text-[#22201F] leading-tight transition-colors duration-300 group-hover:text-[#B87320]">
                  Digital<br />Strategy
                </span>
              </div>

              {/* Separator 1 */}
              <div className="w-[1px] h-7 sm:h-9 bg-[#D7A257]/40 transition-opacity duration-300" aria-hidden="true" />

              {/* Highlight 2: Patient Growth */}
              <div className="group flex-1 flex flex-col items-center text-center p-1.5 sm:p-2 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#B87320]/[0.05] cursor-default">
                <div className="text-[#B87320] mb-1.5 sm:mb-2 transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 stroke-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                    <polyline points="4 8 12 2 18 6" />
                  </svg>
                </div>
                <span className="text-[11px] xs:text-xs sm:text-sm font-bold text-[#22201F] leading-tight transition-colors duration-300 group-hover:text-[#B87320]">
                  Patient<br />Growth
                </span>
              </div>

              {/* Separator 2 */}
              <div className="w-[1px] h-7 sm:h-9 bg-[#D7A257]/40 transition-opacity duration-300" aria-hidden="true" />

              {/* Highlight 3: Implementation & Support */}
              <div className="group flex-1 flex flex-col items-center text-center p-1.5 sm:p-2 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#B87320]/[0.05] cursor-default">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#B87320] mb-1.5 sm:mb-2 stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
                <span className="text-[11px] xs:text-xs sm:text-sm font-bold text-[#22201F] leading-tight transition-colors duration-300 group-hover:text-[#B87320]">
                  Implementation<br />&amp; Support
                </span>
              </div>
            </div>

            {/* CTA Button: Explore My Approach -> NextGen Tech Hub Portal */}
            <div className="flex items-center justify-center xl:justify-start w-full animate-hero-fade-up animation-delay-700">
              <a
                href="https://my.nxtgentechhub.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore My Approach on NextGen Tech Hub"
                className="btn-gold-gradient group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-9 sm:py-4 rounded-full text-base sm:text-lg font-bold text-white shadow-gold animate-glow-pulse transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87320] focus-visible:ring-offset-2 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Explore My Approach</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
