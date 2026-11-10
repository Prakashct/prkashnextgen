"use client";

import React, { useEffect, useRef, useState } from "react";

interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

const steps: ApproachStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "Identify your clinic's current position, challenges, and growth opportunities.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Create a clear, practical digital growth strategy tailored to your clinic.",
  },
  {
    number: "03",
    title: "Implement",
    description: "Set up the right digital tools, systems, and campaigns.",
  },
  {
    number: "04",
    title: "Grow",
    description: "Improve visibility, attract more patients, and build long-term, sustainable growth.",
  },
];

export default function Approach() {
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
      id="approach"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF8F1] via-[#FAF4EE] to-[#FFF8F1] py-20 sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="approach-heading"
    >
      {/* Ambient background soft warm radial glows */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[550px] h-[380px] bg-[#D7A257]/[0.06] rounded-full blur-3xl pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-12 -translate-y-1/2 w-[520px] h-[400px] bg-[#B87320]/[0.05] rounded-full blur-3xl pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* Main Container: 90% max-w-[1480px] */}
      <div className="relative z-10 w-[90%] max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-18 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Headings, Subtitle & Eyebrow                 */}
          {/* ========================================================= */}
          <div
            className={`lg:col-span-5 xl:col-span-5 flex flex-col justify-center lg:pr-8 lg:border-r lg:border-[#E5D7C7] transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Eyebrow: MY APPROACH with Gold Line */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.24em] text-[#3F3A36] uppercase">
                MY APPROACH
              </span>
              <span
                className={`h-[2px] bg-[#B87320] rounded-full inline-block transition-all duration-1000 ease-out delay-200 ${
                  isVisible ? "w-10 sm:w-12 opacity-100" : "w-0 opacity-0"
                }`}
                aria-hidden="true"
              />
            </div>

            {/* Main Heading: A Simple, Strategic Process for Real Growth */}
            <h2
              id="approach-heading"
              className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-extrabold tracking-tight text-[#22201F] leading-[1.18] mb-4 sm:mb-5"
            >
              <span>A Simple, </span>
              <span className="block">Strategic Process </span>
              <span>for </span>
              <span className="text-[#B87320]">Real Growth</span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-base sm:text-[17px] text-[#3F3934] leading-relaxed max-w-lg font-normal">
              A practical, step-by-step approach to build, streamline, and grow your clinic&apos;s digital presence.
            </p>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 4 Step Pill Rows                            */}
          {/* ========================================================= */}
          <div
            className={`lg:col-span-7 xl:col-span-7 flex flex-col gap-4 sm:gap-4.5 transition-all duration-1000 ease-out delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative bg-[#FDF9F4] hover:bg-white/95 border border-[#E8DCCF] hover:border-[#D7A257]/60 rounded-2xl sm:rounded-full px-5 sm:px-7 py-4 sm:py-4.5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md cursor-default"
              >
                {/* Left Side: Pill Number Badge + Step Title */}
                <div className="flex items-center gap-3.5 shrink-0">
                  {/* Rounded Gold Pill Badge */}
                  <div className="w-12 h-7.5 sm:w-13 sm:h-8 rounded-full bg-gradient-to-r from-[#FDE3B0] via-[#F6CF88] to-[#E9B663] border border-[#F2C578] flex items-center justify-center font-bold text-xs sm:text-[13px] text-[#22201F] shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-105">
                    {step.number}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#22201F] tracking-tight w-24 sm:w-28 shrink-0 group-hover:text-[#B87320] transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Subtle Divider Line (hidden on mobile) */}
                <div className="hidden sm:block w-[1px] h-5 bg-[#D7A257]/45 shrink-0" aria-hidden="true" />

                {/* Step Description with high contrast readability */}
                <p className="text-[14.5px] sm:text-[15px] text-[#3F3934] leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
