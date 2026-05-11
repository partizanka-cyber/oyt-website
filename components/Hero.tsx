"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const BOOKING_URL = "https://link.outsourceyourtasks.com/widget/booking/pQ2qZBcQtTxPzQktc3m2";

const stats = [
  { value: "200+", label: "Placements Completed" },
  { value: "60+", label: "Companies Served" },
  { value: "<7%", label: "Replacement Rate" },
  { value: "2–3 Wks", label: "To Your Shortlist" },
];

const regions = [
  "Asia",
  "Latin America",
  "Europe",
  "Africa",
  "United States",
  "Canada",
];

export default function Hero() {
  const tickerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white overflow-hidden">
      {/* Main hero */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#fff0f8] border border-[#ef60a3]/20 text-[#ef60a3] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ef60a3] animate-pulse" />
            Boutique Global Staffing — Flat Fee, No Markup
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-[1.05] tracking-tight mb-6">
            Stop Hiring.{" "}
            <span className="text-[#ef60a3]">Let Us Do It.</span>
          </h1>

          {/* Subheadline */}
          <div className="mb-6">
            <p className="text-2xl md:text-3xl font-semibold text-black leading-snug">
              We find, screen, and interview your next great hire.
            </p>
            <p className="text-xl md:text-2xl font-medium text-gray-500 leading-snug mt-2">
              Globally sourced, college educated — so you get world-class talent
              at a fraction of what local hiring costs.
            </p>
          </div>

          {/* Differentiator */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mb-10 border-l-4 border-[#ef60a3] pl-4">
            Tried offshore before and it didn't work out? That's because you
            never saw who you were hiring. Every OYT candidate comes with a full
            video interview — so you choose with your eyes open.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#ef60a3] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#d94f8e] transition-all duration-200 shadow-lg shadow-[#ef60a3]/25 hover:shadow-[#ef60a3]/40 hover:-translate-y-0.5"
            >
              Book a Talent Strategy Call
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center bg-black text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5"
            >
              See How It Works
            </Link>
          </div>

          {/* Three-strip */}
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-400 uppercase tracking-widest">
            {["No resume pile", "No wasted interviews", "Just the right person"].map(
              (item, i) => (
                <span key={item} className="flex items-center gap-2">
                  {i > 0 && <span className="text-[#ef60a3]">·</span>}
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Geography ticker */}
      <div className="bg-black py-4 overflow-hidden">
        <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {[...regions, ...regions, ...regions].map((region, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6 text-sm font-medium text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef60a3]" />
              {region}
            </span>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-[#f1f1f1]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-black mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
