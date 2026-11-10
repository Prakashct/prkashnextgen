"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Users, Clock, CheckCircle2, Sparkles } from "lucide-react";

interface CaseStudy {
  id: string;
  category: "all" | "dental" | "aesthetics" | "speciality";
  categoryLabel: string;
  clinicName: string;
  tagline: string;
  metrics: {
    value: string;
    label: string;
    icon: (props: { className?: string }) => React.JSX.Element;
  }[];
  challenge: string;
  solution: string;
  tags: string[];
  duration: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "apex-dental",
    category: "dental",
    categoryLabel: "Dental Clinic",
    clinicName: "Apex Dental & Implant Center",
    tagline: "End-to-end digital ecosystem, online booking, and automated recall system.",
    metrics: [
      {
        value: "+185%",
        label: "Online Bookings",
        icon: (p) => <TrendingUp {...p} />,
      },
      {
        value: "-60%",
        label: "Admin Front-Desk Time",
        icon: (p) => <Clock {...p} />,
      },
      {
        value: "4.9 ★",
        label: "250+ Verified Reviews",
        icon: (p) => <Sparkles {...p} />,
      },
    ],
    challenge:
      "High no-show rates (28%) and front-desk staff overwhelmed with manual WhatsApp confirmations and paper intake.",
    solution:
      "Automated WhatsApp confirmation engine, frictionless mobile intake forms, and automated 6-month hygiene recall sequence.",
    tags: ["EHR Sync", "WhatsApp Automation", "Patient Intake", "Local SEO"],
    duration: "4 Weeks",
  },
  {
    id: "lumina-aesthetics",
    category: "aesthetics",
    categoryLabel: "Aesthetics & Dermatology",
    clinicName: "Lumina Skin & Aesthetics",
    tagline: "High-conversion digital patient acquisition and lead qualification engine.",
    metrics: [
      {
        value: "3.4x",
        label: "Qualified Patient Leads",
        icon: (p) => <Users {...p} />,
      },
      {
        value: "Top 3",
        label: "Google Maps Ranking",
        icon: (p) => <TrendingUp {...p} />,
      },
      {
        value: "92%",
        label: "Consultation Show Rate",
        icon: (p) => <CheckCircle2 {...p} />,
      },
    ],
    challenge:
      "Relied on word-of-mouth with zero digital presence; losing high-ticket cosmetic procedure inquiries to competing chains.",
    solution:
      "Hyper-local medical SEO, visual treatment showcase pages, and instant CRM lead routing for consultation coordinators.",
    tags: ["Google Ads", "Landing Pages", "Lead Routing CRM", "Reputation"],
    duration: "6 Weeks",
  },
  {
    id: "pulsecare-speciality",
    category: "speciality",
    categoryLabel: "Multi-Speciality",
    clinicName: "PulseCare Medical Group",
    tagline: "24/7 AI-assisted appointment concierge and multi-doctor schedule synchronizer.",
    metrics: [
      {
        value: "24/7",
        label: "Instant Patient Triage",
        icon: (p) => <Clock {...p} />,
      },
      {
        value: "+210",
        label: "Monthly New Patients",
        icon: (p) => <Users {...p} />,
      },
      {
        value: "95%",
        label: "Positive Patient Rating",
        icon: (p) => <Sparkles {...p} />,
      },
    ],
    challenge:
      "12 practitioners with complicated schedules caused double-bookings, long patient wait times, and missed after-hours inquiries.",
    solution:
      "Centralized calendar sync, AI front-desk chat assistant for triage and after-hours bookings, and digital waiting room check-in.",
    tags: ["AI Concierge", "Multi-Doctor Sync", "Digital Check-In", "Analytics"],
    duration: "8 Weeks",
  },
];

const categories = [
  { id: "all", label: "All Case Studies" },
  { id: "dental", label: "Dental" },
  { id: "aesthetics", label: "Aesthetics & Derma" },
  { id: "speciality", label: "Multi-Speciality" },
] as const;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredStudies =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative w-full overflow-hidden bg-[#0E0C0A] py-20 sm:py-24 lg:py-32 text-white"
      aria-labelledby="portfolio-heading"
    >
      {/* Background ambient gold glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#B87320]/[0.06] rounded-full blur-[120px] pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#D7A257]/[0.04] rounded-full blur-[100px] pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 w-[90%] max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* HEADER BLOCK: Eyebrow + Title + Subtitle + Filters        */}
        {/* ========================================================= */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 sm:mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-2xl">
            {/* Eyebrow: SUCCESS STORIES with Gold Line */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.24em] text-[#D7A257] uppercase">
                SUCCESS STORIES
              </span>
              <span
                className={`h-[2px] bg-[#B87320] rounded-full inline-block transition-all duration-1000 ease-out delay-200 ${
                  isVisible ? "w-10 sm:w-12 opacity-100" : "w-0 opacity-0"
                }`}
                aria-hidden="true"
              />
            </div>

            {/* Main Section Heading */}
            <h2
              id="portfolio-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-[1.12] mb-3 sm:mb-4"
            >
              <span>Proven Impact for </span>
              <span className="text-[#D7A257]">Modern Clinics.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#B5AEA6] leading-relaxed">
              Explore how we helped healthcare practices streamline workflows,
              automate front-desk operations, and scale patient volume.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A257] ${
                  activeCategory === cat.id
                    ? "bg-[#B87320] text-white shadow-gold-sm"
                    : "bg-white/[0.05] text-[#D3CCC4] hover:bg-white/[0.1] hover:text-white border border-white/[0.08]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* CASE STUDIES GRID                                         */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStudies.map((study, idx) => (
            <div
              key={study.id}
              className={`group relative flex flex-col justify-between bg-gradient-to-b from-[#181411] to-[#120F0D] rounded-3xl p-6 sm:p-8 border border-white/[0.08] hover:border-[#B87320]/60 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_45px_-10px_rgba(184,115,32,0.22)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 150 + 200}ms` }}
            >
              {/* Top ambient highlight on card hover */}
              <div
                className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D7A257]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"
                aria-hidden="true"
              />

              <div>
                {/* Header: Category Badge + Duration */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#B87320]/15 text-[#E5B869] border border-[#B87320]/30">
                    {study.categoryLabel}
                  </span>
                  <span className="text-xs text-[#8A827A] font-medium">
                    {study.duration} Deployment
                  </span>
                </div>

                {/* Clinic Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-[#E5B869] transition-colors duration-300">
                  {study.clinicName}
                </h3>

                {/* Tagline */}
                <p className="text-sm text-[#B5AEA6] leading-relaxed mb-6">
                  {study.tagline}
                </p>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-3 gap-2 p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] mb-6">
                  {study.metrics.map((metric, mIdx) => {
                    const IconComp = metric.icon;
                    return (
                      <div key={mIdx} className="flex flex-col text-center">
                        <span className="text-lg sm:text-xl font-extrabold text-[#D7A257] tracking-tight">
                          {metric.value}
                        </span>
                        <span className="text-[11px] text-[#A39C94] leading-tight mt-0.5 font-medium">
                          {metric.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Challenge & Solution Summary */}
                <div className="space-y-3 mb-6 text-xs sm:text-[13px]">
                  <div>
                    <span className="font-bold text-[#E5B869]">Problem: </span>
                    <span className="text-[#9E968E]">{study.challenge}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#E5B869]">Solution: </span>
                    <span className="text-[#C7BFB7]">{study.solution}</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Tags + Action Link */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] text-[#A8A199] border border-white/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#D7A257] group-hover:text-[#FFE4AC] transition-colors duration-300"
                >
                  <span>Request Similar Transformation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* BOTTOM CALLOUT: Free Clinic Assessment Banner             */}
        {/* ========================================================= */}
        <div
          className={`mt-14 sm:mt-18 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1E1915] via-[#2A221C] to-[#1E1915] border border-[#B87320]/40 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[12px] font-bold text-[#D7A257] uppercase tracking-widest mb-1 block">
              CLINIC AUDIT INITIATIVE
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              Want to see where your clinic is losing prospective patients?
            </h4>
            <p className="text-sm text-[#B5AEA6]">
              Get a complimentary 15-minute digital workflow and local visibility assessment tailored to your practice.
            </p>
          </div>

          <Link
            href="#contact"
            className="btn-gold-gradient shrink-0 inline-flex items-center gap-2 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full text-base font-bold text-white shadow-gold transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Claim Free Clinic Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
