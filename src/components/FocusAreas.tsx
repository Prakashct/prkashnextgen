"use client";

import React, { useEffect, useRef, useState } from "react";

// 1. Stethoscope Icon for Clinic Digitalisation
function StethoscopeIcon({ className = "w-7 h-7" }: { className?: string }) {
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
      <path d="M4.5 3v5a3.5 3.5 0 0 0 7 0V3" />
      <path d="M8 11.5v3.5a4.5 4.5 0 0 0 9 0V11" />
      <circle cx="17" cy="10" r="2.2" fill="#B87320" stroke="none" />
      <circle cx="4.5" cy="3" r="1.2" fill="#B87320" stroke="none" />
      <circle cx="11.5" cy="3" r="1.2" fill="#B87320" stroke="none" />
    </svg>
  );
}

// 2. Patient / Doctor Group Icon for Patient Growth Strategy
function PatientGrowthIcon({ className = "w-7 h-7" }: { className?: string }) {
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
      <circle cx="12" cy="7" r="3" />
      <path d="M6 20v-1.5a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4V20" />
      <circle cx="5" cy="9.5" r="2" />
      <path d="M2 19v-1a3 3 0 0 1 3-3" />
      <circle cx="19" cy="9.5" r="2" />
      <path d="M22 19v-1a3 3 0 0 0-3-3" />
    </svg>
  );
}

// 3. AI Microchip Icon for AI & Automation
function AiChipIcon({ className = "w-7 h-7" }: { className?: string }) {
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
      <rect x="5" y="5" width="14" height="14" rx="3" />
      <path d="M9 1.5v3.5M15 1.5v3.5M9 19v3.5M15 19v3.5M1.5 9h3.5M1.5 15h3.5M19 9h3.5M19 15h3.5" strokeWidth="1.6" />
      <text
        x="12"
        y="14.5"
        fill="#B87320"
        stroke="none"
        fontSize="7.5"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
      >
        AI
      </text>
    </svg>
  );
}

// 4. Megaphone Icon for Digital Marketing
function MegaphoneIcon({ className = "w-7 h-7" }: { className?: string }) {
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
      <path d="m3 11 14-5.5v13L3 13v-2z" />
      <path d="M6 13v4.5a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 0 1.5-1.5V14.5" />
      <path d="M19 8.5a3.5 3.5 0 0 1 0 7" strokeWidth="1.9" />
    </svg>
  );
}

interface SpecializationItem {
  id: string;
  title: string;
  description: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

const specializations: SpecializationItem[] = [
  {
    id: "clinic-digitalisation",
    title: "Clinic Digitalisation",
    description: "Set up and streamline your clinic's digital presence.",
    icon: StethoscopeIcon,
  },
  {
    id: "patient-growth",
    title: "Patient Growth Strategy",
    description: "Attract, engage, and retain more patients.",
    icon: PatientGrowthIcon,
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Save time, reduce manual work, and improve patient experience.",
    icon: AiChipIcon,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Build visibility and generate quality patient enquiries.",
    icon: MegaphoneIcon,
  },
];

export default function FocusAreas() {
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
      id="specialization"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF8F1] via-[#FAF4EE] to-[#FFF8F1] py-20 sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="specialization-heading"
    >
      {/* Soft ambient corner radial glows */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-[#D7A257]/[0.06] rounded-full blur-3xl pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[300px] bg-[#B87320]/[0.05] rounded-full blur-3xl pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* Main Container: 90% max-w-[1480px] */}
      <div className="relative z-10 w-[90%] max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* HEADER: Centered Eyebrow + Headline                       */}
        {/* ========================================================= */}
        <div
          className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Eyebrow: MY SPECIALIZATION — */}
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-3.5">
            <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.24em] text-[#3F3A36] uppercase">
              MY SPECIALIZATION
            </span>
            <span
              className={`h-[2px] bg-[#B87320] rounded-full inline-block transition-all duration-1000 ease-out delay-200 ${
                isVisible ? "w-10 sm:w-12 opacity-100" : "w-0 opacity-0"
              }`}
              aria-hidden="true"
            />
          </div>

          {/* Centered Headline */}
          <h2
            id="specialization-heading"
            className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-extrabold tracking-tight text-[#22201F] leading-[1.2]"
          >
            <span>Focused Digital Solutions for </span>
            <span className="text-[#B87320]">Clinic Growth</span>
          </h2>
        </div>

        {/* ========================================================= */}
        {/* 4 COLUMNS: Generous breathing room & prominent content    */}
        {/* ========================================================= */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-[#E5D7C7] transition-all duration-1000 ease-out delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {specializations.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group flex flex-col items-start px-2 sm:px-5 lg:px-7 xl:px-9 first:pl-0 last:pr-0 transition-transform duration-300 hover:-translate-y-1.5 cursor-default"
              >
                {/* Icon with soft warm spacious container */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FAF1E4] border border-[#F0DFCA] flex items-center justify-center mb-4 sm:mb-5 shadow-[0_2px_8px_rgba(184,115,32,0.06)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#D7A257] group-hover:bg-[#FFF5DA]">
                  <IconComponent className="w-7 h-7 sm:w-7.5 sm:h-7.5 text-[#B87320]" />
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-[19px] lg:text-[20px] font-bold text-[#22201F] tracking-tight mb-2.5 group-hover:text-[#B87320] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-[14.5px] sm:text-[15px] lg:text-[15.5px] text-[#3F3934] leading-[1.65]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
