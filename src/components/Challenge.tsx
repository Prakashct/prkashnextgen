"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// 1. Search Icon for Low Online Visibility
function SearchIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B87320"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </svg>
  );
}

// 2. Shield Checkmark Icon for Limited Patient Trust
function ShieldCheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B87320"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" strokeWidth="2.2" />
    </svg>
  );
}

// 3. Calendar Icon for Missed Patient Enquiries
function CalendarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B87320"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2.5" ry="2.5" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <circle cx="8" cy="14" r="1.1" fill="#B87320" stroke="none" />
      <circle cx="12" cy="14" r="1.1" fill="#B87320" stroke="none" />
      <circle cx="16" cy="14" r="1.1" fill="#B87320" stroke="none" />
    </svg>
  );
}

interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

const challengeItems: ChallengeItem[] = [
  {
    id: "low-visibility",
    title: "Low Online Visibility",
    description: "Many great clinics are not easily found by patients searching online.",
    icon: SearchIcon,
  },
  {
    id: "limited-trust",
    title: "Limited Patient Trust",
    description: "Without a strong digital presence, it's harder to build credibility and confidence.",
    icon: ShieldCheckIcon,
  },
  {
    id: "missed-enquiries",
    title: "Missed Patient Enquiries",
    description: "Lack of the right digital setup can lead to lost opportunities and fewer appointments.",
    icon: CalendarIcon,
  },
];

export default function Challenge() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="challenge"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF8F1] via-[#FAF4EE] to-[#FFF8F1] py-20 sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="challenge-heading"
    >
      {/* Soft ambient corner radial glow */}
      <div
        className="absolute top-0 right-0 w-[450px] h-[350px] bg-[#D7A257]/[0.08] rounded-bl-full blur-3xl pointer-events-none select-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-[400px] h-[300px] bg-[#B87320]/[0.05] rounded-tr-full blur-3xl pointer-events-none select-none -z-0"
        aria-hidden="true"
      />

      {/* Main Container: 90% max-w-[1480px] */}
      <div className="relative z-10 w-[90%] max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* ROW 1: THE CHALLENGE Headline                             */}
        {/* ========================================================= */}
        <div
          className={`flex flex-col mb-14 sm:mb-18 lg:mb-20 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Eyebrow: THE CHALLENGE — */}
          <div className="flex items-center gap-3 mb-3 sm:mb-3.5">
            <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.24em] text-[#3F3A36] uppercase">
              THE CHALLENGE
            </span>
            <span
              className={`h-[2px] bg-[#B87320] rounded-full inline-block transition-all duration-1000 ease-out delay-200 ${
                isVisible ? "w-10 sm:w-12 opacity-100" : "w-0 opacity-0"
              }`}
              aria-hidden="true"
            />
          </div>

          {/* Main Heading */}
          <h2
            id="challenge-heading"
            className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-extrabold tracking-tight text-[#22201F] leading-[1.2]"
          >
            <span>Great Patient Care Deserves </span>
            <span className="text-[#B87320]">Great Digital Presence.</span>
          </h2>
        </div>

        {/* ========================================================= */}
        {/* ROW 2: 3 CHALLENGE COLUMNS (Divided by sleek vertical lines)*/}
        {/* ========================================================= */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[#E5D7C7] mb-16 sm:mb-20 lg:mb-24 transition-all duration-1000 ease-out delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {challengeItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group flex items-start gap-4 sm:gap-4.5 md:px-7 lg:px-9 first:pl-0 last:pr-0 transition-transform duration-300 hover:-translate-y-1.5 cursor-default"
              >
                {/* Soft warm pastel cream/gold badge */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFF5DA] to-[#FFE8B7] border border-[#F6DC9F] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-[#B87320]" />
                </div>

                {/* Content */}
                <div className="pt-0.5">
                  <h3 className="text-lg sm:text-[19px] lg:text-[20px] font-bold text-[#22201F] tracking-tight mb-2 group-hover:text-[#B87320] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] sm:text-[15px] lg:text-[15.5px] text-[#3F3934] leading-[1.65]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* ROW 3: LET'S GROW TOGETHER Floating Banner Card           */}
        {/* ========================================================= */}
        <div
          className={`relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-r from-[#20150E] via-[#2A1B12] to-[#1C120A] p-8 sm:p-12 lg:p-14 shadow-2xl border border-[#3E291C] text-white text-center transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Swirling Ambient Gold Wave Lights */}
          <div
            className="absolute -bottom-16 -left-16 w-[380px] h-[300px] bg-gradient-to-tr from-[#D49A4B]/25 via-[#B87320]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -right-16 w-[400px] h-[320px] bg-gradient-to-tl from-[#D49A4B]/30 via-[#B87320]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
            aria-hidden="true"
          />

          {/* Golden Ribbon Wave Overlay Graphic */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none -z-0 opacity-40"
            viewBox="0 0 1000 400"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 0 400 Q 250 260 500 360 T 1000 240 L 1000 400 Z"
              fill="url(#cta-ribbon-grad)"
            />
            <path
              d="M 0 400 Q 250 260 500 360 T 1000 240"
              stroke="#D49A4B"
              strokeWidth="2"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="cta-ribbon-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D49A4B" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#B87320" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#D49A4B" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Banner Inner Content */}
          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            {/* Eyebrow: — LET'S GROW TOGETHER — */}
            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#D49A4B] rounded-full inline-block" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.24em] text-[#D49A4B] uppercase">
                LET&apos;S GROW TOGETHER
              </span>
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#D49A4B] rounded-full inline-block" />
            </div>

            {/* Banner Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-extrabold tracking-tight text-white leading-tight mb-3 sm:mb-4">
              <span>Ready to </span>
              <span className="text-[#E5B56A]">Grow Your</span>
              <span> Clinic Online?</span>
            </h3>

            {/* Banner Subtitle Description */}
            <p className="text-sm sm:text-base text-[#DFD0C0] leading-relaxed max-w-xl mb-7 sm:mb-9 font-normal">
              Explore how simple, practical digital solutions can bring more patients to your clinic.
            </p>

            {/* Two Centered Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4.5">
              {/* Primary: Discuss Your Clinic's Growth -> NextGen Tech Hub Portal */}
              <a
                href="https://my.nxtgentechhub.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss Your Clinic's Growth on NextGen Tech Hub"
                className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-[17px] font-bold text-[#22201F] bg-gradient-to-r from-[#FDE3B0] via-[#F6CF88] to-[#EEBA66] hover:from-[#FFE8BC] hover:to-[#F2C474] shadow-[0_10px_25px_-5px_rgba(214,154,66,0.35)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6CF88]"
              >
                <span>Discuss Your Clinic&apos;s Growth</span>
                <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary: Explore My Approach -> NextGen Tech Hub Portal */}
              <a
                href="https://my.nxtgentechhub.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore My Approach on NextGen Tech Hub"
                className="group inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-[17px] font-medium text-white border border-[#D49A4B]/60 hover:border-[#F6CF88] bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D49A4B]"
              >
                <span>Explore My Approach</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
