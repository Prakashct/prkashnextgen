"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#about" },
  { label: "Specialization", href: "#specialization" },
  { label: "My Approach", href: "#approach" },
  { label: "The Challenge", href: "#challenge" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF8F1]/95 backdrop-blur-md shadow-sm border-b border-[#D7A257]/20"
          : "bg-transparent border-b border-[#D7A257]/15"
      }`}
    >
      <div className="w-[90%] max-w-[1800px] mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left — Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87320] rounded-lg p-1"
            aria-label="Prakash C. - NextGen Tech Hub Home"
          >
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold tracking-tight text-[#22201F] group-hover:text-[#292524] transition-colors">
                Prakash
              </span>
              <span className="text-2xl font-extrabold text-[#B87320]">
                C.
              </span>
            </div>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#B87320] -mt-1">
              NextGen Tech Hub
            </span>
          </Link>

          {/* Center — Desktop Navigation (1280px+) */}
          <nav
            className="hidden xl:flex items-center space-x-1 2xl:space-x-2"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-3 2xl:px-3.5 py-2 text-[14.5px] 2xl:text-[15px] font-medium transition-all duration-200 rounded-full hover:text-[#B87320] ${
                  item.active
                    ? "text-[#B87320] font-semibold"
                    : "text-[#22201F]/80 hover:bg-[#B87320]/5"
                }`}
                aria-current={item.active ? "page" : undefined}
              >
                {item.label}
                {item.active && (
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-[2.5px] bg-[#B87320] rounded-full shadow-sm"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right — Desktop CTA (1280px+) */}
          <div className="hidden xl:flex items-center">
            <Link
              href="#contact"
              className="btn-gold-gradient inline-flex items-center gap-1.5 px-5 2xl:px-6 py-2.5 rounded-full text-[13.5px] 2xl:text-[14px] font-semibold text-white shadow-gold-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87320] focus-visible:ring-offset-2"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </Link>
          </div>

          {/* Mobile & Tablet Menu Button (shown up to 1279px across all tablets and mobile) */}
          <div className="flex xl:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#22201F] hover:text-[#B87320] hover:bg-[#F3E8DD]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87320] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#22201F]" />
              ) : (
                <Menu className="w-6 h-6 text-[#22201F]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden bg-[#FFF8F1] border-b border-[#D7A257]/20 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200"
          id="mobile-menu"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  item.active
                    ? "bg-[#B87320]/10 text-[#B87320] font-semibold"
                    : "text-[#22201F] hover:bg-[#F3E8DD]/50 hover:text-[#B87320]"
                }`}
                aria-current={item.active ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#D7A257]/15 space-y-2.5">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-gold-gradient flex items-center justify-center gap-2 w-full py-3 rounded-full text-base font-semibold text-white shadow-gold-sm"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+918884675742"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-semibold text-[#B87320] bg-[#B87320]/10 hover:bg-[#B87320]/15 transition-colors"
              >
                <span>Call: +91 88846 75742</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
