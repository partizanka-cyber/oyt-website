const BOOKING_URL =
  "https://link.outsourceyourtasks.com/widget/booking/pQ2qZBcQtTxPzQktc3m2";

export default function FinalCTA() {
  return (
    <section
      className="bg-[#ef60a3] py-24"
      id="book-a-call"
      aria-label="Book a talent strategy call"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">
          Ready to Hire?
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Spending Time on Hiring. That's Our Job.
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-xl mx-auto">
          One call is all it takes to tell us who you need. We'll handle the sourcing, the screening, and the interviews — you just pick your favorite.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-[#ef60a3] font-bold text-base px-10 py-4 rounded-full hover:bg-[#fff0f8] transition-all duration-200 shadow-lg shadow-black/10 hover:-translate-y-0.5"
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
        <p className="text-sm text-white/50 mt-5">
          No commitment. No pitch deck. Just a real conversation.
        </p>
      </div>
    </section>
  );
}
