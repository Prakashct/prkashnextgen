"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// 1. Pillar 1: Target / Bullseye with Arrow (Clinic Growth)
function TargetBullseyeIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B87320"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="2" fill="#B87320" stroke="none" />
      <line x1="21.5" y1="2.5" x2="13.5" y2="10.5" strokeWidth="2.2" />
      <path d="M14 6 L14 10 L18 10" strokeWidth="2" strokeLinejoin="round" />
      <path d="M19 2.5 L21.5 5" strokeWidth="1.8" />
    </svg>
  );
}

// 2. Pillar 2: Two People / Patient Engagement Icon
function PatientEngagementIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B87320"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <circle cx="16" cy="9.5" r="2.5" />
      <path d="M15.5 14.5c2.2.4 4 2.2 4 4.5" />
    </svg>
  );
}

// 3. Pillar 3: 3 Isometric Stacked Layers (Implementation Support)
function StackedLayersIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B87320"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2.5 21.5 6.5 12 10.5 2.5 6.5" strokeWidth="1.9" />
      <path d="M2.5 11.5 L12 15.5 L21.5 11.5" strokeWidth="1.9" />
      <path d="M2.5 16.5 L12 20.5 L21.5 16.5" strokeWidth="1.9" />
    </svg>
  );
}

export default function About() {
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
      id="about"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF8F1] via-[#FAF4EE] to-[#FFF8F1] py-20 sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="about-heading"
    >
      {/* Ambient soft warm radial background glow */}
      <div
        className="absolute top-1/3 left-10 w-[480px] h-[360px] bg-[#D7A257]/[0.08] rounded-full blur-3xl pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[520px] h-[380px] bg-[#B87320]/[0.07] rounded-full blur-3xl pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* Subtle decorative curved ambient contour in bottom-right */}
      <svg
        className="absolute bottom-0 right-0 w-[55%] sm:w-[45%] lg:w-[38%] h-[55%] pointer-events-none select-none z-0"
        viewBox="0 0 500 350"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 0 350 Q 200 330 350 240 T 500 120 L 500 350 Z"
          fill="url(#about-wave-gradient)"
        />
        <path
          d="M 0 350 Q 200 330 350 240 T 500 120"
          stroke="url(#about-wave-stroke)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.45"
        />
        <defs>
          <linearGradient id="about-wave-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5ECE1" stopOpacity="0" />
            <stop offset="50%" stopColor="#EEDBC7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E7D0B6" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="about-wave-stroke" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D49A4B" stopOpacity="0" />
            <stop offset="100%" stopColor="#D49A4B" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Container: 90% max-w-[1480px] */}
      <div className="relative z-10 w-[90%] max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Photo of Prakash with Gold Accent & Badge    */}
          {/* ========================================================= */}
          <div
            className={`lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-start transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[430px] lg:max-w-[470px] xl:max-w-[500px]">
              {/* Soft ambient golden glow behind the image */}
              <div
                className="absolute -inset-4 sm:-inset-6 bg-[#B87320]/15 rounded-3xl blur-2xl pointer-events-none -z-10"
                aria-hidden="true"
              />

              {/* High-res composite image of Prakash with gold backing curves and floating badge */}
              <div className="relative w-full aspect-[1060/991] transition-transform duration-500 hover:scale-[1.015]">
                <Image
                  src="/prakash-c-founder-nextgen-tech-hub.webp"
                  alt="Prakash C., Clinic Digitalisation Strategist"
                  fill
                  sizes="(max-width: 640px) 360px, (max-width: 1024px) 440px, 500px"
                  className="object-contain select-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Typography & 3 Core Pillars                 */}
          {/* ========================================================= */}
          <div
            className={`lg:col-span-7 xl:col-span-7 flex flex-col justify-center transition-all duration-1000 ease-out delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Eyebrow: ABOUT ME with warm gold line */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.24em] text-[#3F3A36] uppercase">
                ABOUT ME
              </span>
              <span
                className={`h-[2px] bg-[#B87320] rounded-full inline-block transition-all duration-1000 ease-out delay-200 ${
                  isVisible ? "w-10 sm:w-12 opacity-100" : "w-0 opacity-0"
                }`}
                aria-hidden="true"
              />
            </div>

            {/* Main Headline: Digitalisation Strategist for Healthcare Clinics */}
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-extrabold tracking-tight text-[#22201F] leading-[1.18] mb-4 sm:mb-5"
            >
              <span>Digitalisation Strategist </span>
              <span className="block text-[#22201F]">for Healthcare Clinics</span>
            </h2>

            {/* Concise professional description with enhanced readability */}
            <p className="text-base sm:text-[17px] text-[#3F3934] leading-relaxed max-w-xl xl:max-w-2xl mb-8 sm:mb-9 font-normal">
              I’m Prakash C., Founder of NextGen Tech Hub, helping healthcare clinics strengthen their digital presence, improve patient engagement, and implement practical digital growth solutions. With a background in technology, I focus on making digitalisation simple, effective, and accessible for clinic owners.
            </p>

            {/* ======================================================= */}
            {/* 3 CORE PILLARS (Clinic Growth / Patient / Implementation)*/}
            {/* ======================================================= */}
            <div className="grid grid-cols-3 divide-x divide-[#D7A257]/35 max-w-lg lg:max-w-xl pt-1">
              
              {/* Pillar 1: Clinic Growth */}
              <div className="group flex flex-col items-center text-center px-3 sm:px-5 first:pl-0 transition-all duration-300 hover:-translate-y-1 cursor-default">
                <div className="mb-2.5 transition-transform duration-300 group-hover:scale-110">
                  <TargetBullseyeIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#B87320]" />
                </div>
                <h3 className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#22201F] leading-snug tracking-tight group-hover:text-[#B87320] transition-colors">
                  <span>Clinic</span>
                  <br />
                  <span>Growth</span>
                </h3>
              </div>

              {/* Pillar 2: Patient Engagement */}
              <div className="group flex flex-col items-center text-center px-3 sm:px-5 transition-all duration-300 hover:-translate-y-1 cursor-default">
                <div className="mb-2.5 transition-transform duration-300 group-hover:scale-110">
                  <PatientEngagementIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#B87320]" />
                </div>
                <h3 className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#22201F] leading-snug tracking-tight group-hover:text-[#B87320] transition-colors">
                  <span>Patient</span>
                  <br />
                  <span>Engagement</span>
                </h3>
              </div>

              {/* Pillar 3: Implementation Support */}
              <div className="group flex flex-col items-center text-center px-3 sm:px-5 last:pr-0 transition-all duration-300 hover:-translate-y-1 cursor-default">
                <div className="mb-2.5 transition-transform duration-300 group-hover:scale-110">
                  <StackedLayersIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#B87320]" />
                </div>
                <h3 className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#22201F] leading-snug tracking-tight group-hover:text-[#B87320] transition-colors">
                  <span>Implementation</span>
                  <br />
                  <span>Support</span>
                </h3>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
