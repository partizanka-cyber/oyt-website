"use client";


const BOOKING_URL =
  "https://link.outsourceyourtasks.com/widget/booking/pQ2qZBcQtTxPzQktc3m2";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-24 md:pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* LEFT — Text content */}
          <div className="flex flex-col items-start justify-between h-full">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#fff0f8] border border-[#ef60a3]/20 text-[#ef60a3] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8 mt-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ef60a3]" />
                Boutique Global Staffing — Flat Fee, No Markup
              </div>

              {/* Headline */}
              <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
                <span className="text-black">Stop Hiring.</span>
                <br />
                <span className="text-[#ef60a3]">Let Us Do It.</span>
              </h1>

              {/* Subheadline */}
              <div className="mb-1">
                <p className="text-lg md:text-xl font-bold text-black leading-snug whitespace-nowrap">
                  We find, screen, and interview your next great hire.
                </p>
                <p className="text-base md:text-lg font-normal text-gray-500 leading-snug mt-2">
                  Globally sourced, college educated — so you get world-class
                  talent at a fraction of what local hiring costs.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#ef60a3] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#d94f8e] transition-all duration-200 shadow-lg shadow-[#ef60a3]/20 hover:shadow-[#ef60a3]/40 hover:-translate-y-0.5"
            >
              Book a Talent Strategy Call
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* RIGHT — Candidate video card */}
          <div className="h-full flex items-stretch">
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden w-full max-w-md flex flex-col">

              {/* Video thumbnail */}
              <div className="relative w-full aspect-[5/3] bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Images/candidate-hero.png"
                  alt="Candidate video interview"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="w-14 h-14 rounded-full bg-[#ef60a3] flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                  24:38
                </div>
              </div>

              {/* Candidate info */}
              <div className="p-4">
                <h3 className="text-lg font-extrabold text-black">
                  Maria Santos
                </h3>
                <p className="text-sm font-medium text-black mb-3">Account Manager</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-700 bg-white border border-gray-200 px-3 py-1.5 rounded-full">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Buenos Aires, Argentina
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#a965dd] bg-white border border-[#a965dd]/30 px-3 py-1.5 rounded-full">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                    Bachelor of Science (BS)
                  </span>
                </div>

                {/* View Interview button */}
                <button className="w-full bg-[#ef60a3] text-white font-bold text-sm py-3 rounded-xl hover:bg-[#d94f8e] transition-colors">
                  View Interview
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
