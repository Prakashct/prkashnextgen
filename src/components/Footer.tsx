"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

// ============================================================================
// BRAND SVG ICONS
// ============================================================================
function YoutubeIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#1E140C] via-[#24170E] to-[#150D07] text-white pt-12 sm:pt-16 lg:pt-18 pb-8"
      aria-label="Footer"
    >
      {/* ========================================================= */}
      {/* AMBIENT BACKGROUND GLOWS & SWEEPING GOLDEN LIGHT WAVES    */}
      {/* ========================================================= */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[350px] bg-gradient-to-br from-[#D49A4B]/20 via-[#B87320]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[550px] h-[380px] bg-gradient-to-bl from-[#D49A4B]/25 via-[#B87320]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* Sweeping Golden Ribbon Lights */}
      <svg
        className="absolute top-6 left-0 right-0 w-full h-[220px] pointer-events-none select-none -z-0 opacity-45"
        viewBox="0 0 1200 220"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M -50 40 Q 150 180 350 130 T 600 160"
          stroke="url(#cta-ribbon-left)"
          strokeWidth="2.5"
          filter="blur(0.5px)"
        />
        <path
          d="M 600 160 Q 850 110 1050 170 T 1250 50"
          stroke="url(#cta-ribbon-right)"
          strokeWidth="2.5"
          filter="blur(0.5px)"
        />
        <defs>
          <linearGradient id="cta-ribbon-left" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F6CF88" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#D49A4B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#B87320" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="cta-ribbon-right" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B87320" stopOpacity="0.1" />
            <stop offset="40%" stopColor="#D49A4B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F6CF88" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom Sweeping Golden Ribbon Waves */}
      <svg
        className="absolute bottom-12 left-0 right-0 w-full h-[150px] pointer-events-none select-none -z-0 opacity-70"
        viewBox="0 0 1200 150"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M -50 120 Q 200 40 450 90 T 900 100 Q 1050 60 1250 40"
          stroke="url(#footer-gold-wave)"
          strokeWidth="2.8"
        />
        <path
          d="M -50 140 Q 250 70 550 110 T 1250 60 L 1250 150 L -50 150 Z"
          fill="url(#footer-wave-glow)"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="footer-gold-wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F6CF88" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#D49A4B" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#FDE3B0" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#D49A4B" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F6CF88" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="footer-wave-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B87320" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#D49A4B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#B87320" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Container: 90% max-w-[1480px] */}
      <div className="relative z-10 w-[90%] max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* 4-COLUMN FOOTER NAVIGATION                                */}
        {/* ========================================================= */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-0 lg:divide-x lg:divide-[#EADCCB]/15 pt-4 pb-12 sm:pb-16 transition-all duration-1000 ease-out delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* COLUMN 1: Brand / NextGen Tech Hub */}
          <div className="flex flex-col lg:pr-8 xl:pr-10 first:pl-0">
            <Link href="/" className="group inline-flex items-baseline gap-1 mb-1" aria-label="Prakash C.">
              <span className="text-2xl sm:text-[28px] font-extrabold tracking-tight text-white group-hover:text-white/90 transition-colors">
                Prakash
              </span>
              <span className="text-2xl sm:text-[28px] font-extrabold text-[#E5B56A]">
                C.
              </span>
            </Link>

            <span className="text-sm sm:text-base font-semibold text-white/95 tracking-wide mb-3">
              NextGen Tech Hub
            </span>

            {/* Small gold underline */}
            <div className="w-8 h-[2px] bg-[#B87320] rounded-full mb-4 opacity-90" aria-hidden="true" />

            <p className="text-sm sm:text-[14.5px] text-[#D8CABA] leading-relaxed max-w-xs mb-5">
              Helping clinics grow with practical digital solutions.
            </p>

            {/* Social media icons under brand bio */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.youtube.com/@prakashnextgen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prakash NextGen YouTube Channel"
                title="YouTube: @prakashnextgen"
                className="w-9 h-9 rounded-lg bg-[#301E13] border border-[#523826] hover:border-[#FF0000] hover:bg-[#FF0000]/20 text-[#E5B56A] hover:text-[#FF4D4D] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B56A]"
              >
                <YoutubeIcon className="w-4.5 h-4.5" />
              </a>

              <a
                href="https://www.instagram.com/aiwithnextgen?igsh=MTA2amxkczdqMXk4ag%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AI with NextGen Instagram Profile"
                title="Instagram: @aiwithnextgen"
                className="w-9 h-9 rounded-lg bg-[#301E13] border border-[#523826] hover:border-[#E1306C] hover:bg-[#E1306C]/20 text-[#E5B56A] hover:text-[#FF5B95] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B56A]"
              >
                <InstagramIcon className="w-4.5 h-4.5" />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                title="Facebook"
                className="w-9 h-9 rounded-lg bg-[#301E13] border border-[#523826] hover:border-[#1877F2] hover:bg-[#1877F2]/20 text-[#E5B56A] hover:text-[#4B9CFF] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B56A]"
              >
                <FacebookIcon className="w-4.5 h-4.5" />
              </a>

              <a
                href="https://wa.me/918884675742"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="WhatsApp: +91 88846 75742"
                className="w-9 h-9 rounded-lg bg-[#301E13] border border-[#523826] hover:border-[#25D366] hover:bg-[#25D366]/20 text-[#E5B56A] hover:text-[#25D366] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B56A]"
              >
                <WhatsAppIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="flex flex-col lg:px-8 xl:px-10">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
              Quick Links
            </h3>
            <div className="w-8 h-[2px] bg-[#B87320] rounded-full mb-4 opacity-90" aria-hidden="true" />

            <ul className="space-y-3 text-sm sm:text-[14.5px]">
              <li>
                <Link href="#" className="text-[#D5C7B8] hover:text-[#F6CF88] transition-colors py-0.5 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-[#D5C7B8] hover:text-[#F6CF88] transition-colors py-0.5 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="#specialization" className="text-[#D5C7B8] hover:text-[#F6CF88] transition-colors py-0.5 inline-block">
                  Specialization
                </Link>
              </li>
              <li>
                <Link href="#approach" className="text-[#D5C7B8] hover:text-[#F6CF88] transition-colors py-0.5 inline-block">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="#challenge" className="text-[#D5C7B8] hover:text-[#F6CF88] transition-colors py-0.5 inline-block">
                  The Challenge
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#D5C7B8] hover:text-[#F6CF88] transition-colors py-0.5 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Services */}
          <div className="flex flex-col lg:px-8 xl:px-10">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
              Services
            </h3>
            <div className="w-8 h-[2px] bg-[#B87320] rounded-full mb-4 opacity-90" aria-hidden="true" />

            <ul className="space-y-3 text-sm sm:text-[14.5px]">
              <li>
                <Link href="#specialization" className="text-[#D5C7B8] hover:text-[#F6CF88] transition-colors py-0.5 inline-block">
                  Clinic Digitalisation
                </Link>
              </li>
              <li>
                <Link href="#specialization" className="text-[#D5C7B8] hover:text-[#F6CF88] transition-colors py-0.5 inline-block">
                  Patient Growth Strategy
                </Link>
              </li>
              <li>
                <Link href="#specialization" className="text-[#D5C7B8] hover:text-[#F6CF88] transition-colors py-0.5 inline-block">
                  AI &amp; Automation
                </Link>
              </li>
              <li>
                <Link href="#specialization" className="text-[#D5C7B8] hover:text-[#F6CF88] transition-colors py-0.5 inline-block">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Let's Connect */}
          <div className="flex flex-col lg:pl-8 xl:pl-10 last:pr-0">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
              Let&apos;s Connect
            </h3>
            <div className="w-8 h-[2px] bg-[#B87320] rounded-full mb-4 opacity-90" aria-hidden="true" />

            <div className="space-y-3.5 text-sm sm:text-[14.5px]">
              {/* Phone Number */}
              <a
                href="tel:+918884675742"
                className="group flex items-center gap-3 text-[#F0E5D8] hover:text-[#F6CF88] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B56A] rounded-lg"
                aria-label="Call +91 88846 75742"
              >
                <div className="w-8 h-8 rounded-lg bg-[#301E13] border border-[#523826] flex items-center justify-center shrink-0 group-hover:border-[#E5B56A] group-hover:bg-[#3D2517] transition-all">
                  <Phone className="w-4 h-4 text-[#E5B56A]" />
                </div>
                <span className="font-semibold text-white tracking-wide group-hover:text-[#F6CF88] transition-colors">
                  +91 88846 75742
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:withnextgenai@gmail.com"
                className="group flex items-center gap-3 text-[#F0E5D8] hover:text-[#F6CF88] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B56A] rounded-lg"
                aria-label="Email withnextgenai@gmail.com"
              >
                <div className="w-8 h-8 rounded-lg bg-[#301E13] border border-[#523826] flex items-center justify-center shrink-0 group-hover:border-[#E5B56A] group-hover:bg-[#3D2517] transition-all">
                  <Mail className="w-4 h-4 text-[#E5B56A]" />
                </div>
                <span className="break-all font-medium">withnextgenai@gmail.com</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-[#F0E5D8]">
                <div className="w-8 h-8 rounded-lg bg-[#301E13] border border-[#523826] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#E5B56A]" />
                </div>
                <span className="font-medium">Kerala, India</span>
              </div>

              {/* Social Channels Row */}
              <div className="pt-2">
                <span className="block text-xs font-semibold text-[#C5B7A8] uppercase tracking-wider mb-2">
                  Social Channels
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.youtube.com/@prakashnextgen"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube Channel @prakashnextgen"
                    title="YouTube: @prakashnextgen"
                    className="w-8 h-8 rounded-lg bg-[#301E13] border border-[#523826] hover:border-[#FF0000] hover:bg-[#FF0000]/20 text-[#E5B56A] hover:text-[#FF4D4D] flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B56A]"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://www.instagram.com/aiwithnextgen?igsh=MTA2amxkczdqMXk4ag%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram @aiwithnextgen"
                    title="Instagram: @aiwithnextgen"
                    className="w-8 h-8 rounded-lg bg-[#301E13] border border-[#523826] hover:border-[#E1306C] hover:bg-[#E1306C]/20 text-[#E5B56A] hover:text-[#FF5B95] flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B56A]"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook"
                    className="w-8 h-8 rounded-lg bg-[#301E13] border border-[#523826] hover:border-[#1877F2] hover:bg-[#1877F2]/20 text-[#E5B56A] hover:text-[#4B9CFF] flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B56A]"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://wa.me/918884675742"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    title="WhatsApp: +91 88846 75742"
                    className="w-8 h-8 rounded-lg bg-[#301E13] border border-[#523826] hover:border-[#25D366] hover:bg-[#25D366]/20 text-[#E5B56A] hover:text-[#25D366] flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B56A]"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* PART 3: BOTTOM COPYRIGHT & ATTRIBUTION BAR                */}
        {/* ========================================================= */}
        <div className="relative z-10 pt-6 border-t border-[#3E291C]/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[13px] text-[#B8A99B]">
          <p>© 2026 Prakash C. All rights reserved.</p>
          <p className="italic font-normal tracking-wide text-[#B8A99B]/90">
            Built for clinic digital growth.
          </p>
        </div>

      </div>
    </footer>
  );
}
