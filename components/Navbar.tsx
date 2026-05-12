"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BOOKING_URL =
  "https://link.outsourceyourtasks.com/widget/booking/pQ2qZBcQtTxPzQktc3m2";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Featured VAs", href: "/featured-vas" },
      { label: "Scaling ROI", href: "/scaling-roi" },
      { label: "Reviews", href: "/reviews" },
      { label: "DIY Course", href: "https://howtohirecourse.outsourceyourtasks.com", external: true },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "Jobs", href: "/jobs" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start">
          <Image
            src="/brand/logo-black.png"
            alt="OYT — Outsource Your Tasks"
            width={717}
            height={260}
            priority
            unoptimized
            className="h-8 w-auto"
          />
          <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mt-0.5 leading-none">
            Outsource Your Tasks
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative group">
                <button
                  className="text-sm font-medium text-black hover:text-[#ef60a3] transition-colors flex items-center gap-1"
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                >
                  {link.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        target={child.external ? "_blank" : undefined}
                        className="block px-4 py-2 text-sm text-black hover:text-[#ef60a3] hover:bg-[#fff0f8] transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-black hover:text-[#ef60a3] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA button */}
        <div className="hidden lg:block">
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ef60a3] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#d94f8e] transition-colors whitespace-nowrap"
          >
            Book a Talent Strategy Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-black mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-black mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-black transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="text-sm font-semibold text-black mb-2">{link.label}</p>
                <div className="pl-3 flex flex-col gap-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      target={child.external ? "_blank" : undefined}
                      className="text-sm text-gray-600 hover:text-[#ef60a3] transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-black hover:text-[#ef60a3] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-[#ef60a3] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-[#d94f8e] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book a Talent Strategy Call
          </Link>
        </div>
      )}
    </header>
  );
}
