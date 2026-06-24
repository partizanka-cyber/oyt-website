const BOOKING_URL =
  "https://link.outsourceyourtasks.com/widget/booking/pQ2qZBcQtTxPzQktc3m2";

const cards = [
  {
    step: "1",
    title: "Resume overload",
    text: "You get bombarded with applications and still have no real clarity on who can actually do the job.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v5h5" />
        <circle cx="10" cy="12" r="2.2" />
        <path d="M6.8 18c.8-2 2.3-3 4.2-3s3.4 1 4.2 3" />
        <path d="M9 7H6.5" />
        <path d="M9 9.5H6.5" />
      </svg>
    ),
  },
  {
    step: "2",
    title: "No human vetting",
    text: "Most firms rely too heavily on AI screening, so strong candidates get missed and weak fits slip through.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 1.8v3M15 1.8v3M9 19.2v3M15 19.2v3M1.8 9h3M1.8 15h3M19.2 9h3M19.2 15h3" />
        <path d="M9.5 15V9h2c1.6 0 2.5.7 2.5 2.1 0 .8-.4 1.4-1 1.8.7.3 1 .9 1 1.8 0 1.4-1 2.3-2.6 2.3H9.5Z" />
      </svg>
    ),
  },
  {
    step: "3",
    title: "The OYT difference",
    text: "We use real people to source, review, and video interview every candidate before you see a single name.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <circle cx="8" cy="8.5" r="2.5" />
        <circle cx="14.5" cy="7.5" r="2" />
        <path d="M4.5 17c.7-2.5 2.4-4 4.8-4 2.5 0 4.2 1.5 4.9 4" />
        <path d="M13 16.5v-4.8l4.5 2.4-4.5 2.4Z" />
      </svg>
    ),
  },
];

const benefits = [
  "Direct hire",
  "Flat fee",
  "Done in 2 to 4 weeks",
  "Watch interviews, choose the best fit",
];

export default function HiringFails() {
  return (
    <section className="w-full bg-[#f8f9fc] py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Headline block */}
        <div className="max-w-[820px]">
          <h2 className="text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0c1547] sm:text-[52px] lg:text-[62px]">
            Most Hiring Fails for the Same Reasons
          </h2>
          <p className="mt-6 text-[18px] leading-[1.8] text-[#506287] sm:text-[20px]">
            AI screens the résumé. Nobody screens the human. You get bombarded with
            resumes, spend days trying to choose, and still end up with the wrong hire.
          </p>
        </div>

        {/* Three cards + arrows */}
        <div className="mt-12 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_56px_1fr_56px_1fr] xl:items-stretch">

          {cards.map((card, index) => (
            <div key={card.title} className="contents">

              {/* Card */}
              <div className="flex flex-col rounded-[24px] border border-[#eef0f5] bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
                <div className="flex items-center gap-4 mb-5">
                  {/* Icon circle */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#fff0f7] text-[#ff3b97]">
                    {card.icon}
                  </div>
                  {/* Step badge + title */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff3b97] text-sm font-bold text-white">
                      {card.step}
                    </div>
                    <h3 className="text-[20px] font-bold leading-tight text-[#10183f]">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[16px] leading-[1.8] text-[#506287]">
                  {card.text}
                </p>
              </div>

              {/* Arrow connector — only between cards, only on xl */}
              {index < cards.length - 1 && (
                <div className="hidden xl:flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#ff3b97] text-[#ff3b97]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Benefits strip */}
        <div className="mt-8 rounded-[20px] border border-[#f3d9e7] bg-[#fff8fb] px-6 py-6 shadow-[0_6px_24px_rgba(15,23,42,0.04)]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-3 ${
                  index !== benefits.length - 1 ? "lg:border-r lg:border-[#e8daf0] lg:pr-5" : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#ff3b97] text-[#ff3b97]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M5 12.5l4.2 4.2L19 7" />
                  </svg>
                </div>
                <span className="text-[16px] font-semibold leading-snug text-[#10183f]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-[16px] bg-[#ff3b97] px-9 py-5 text-[18px] font-semibold text-white shadow-[0_14px_28px_rgba(255,59,151,0.25)] transition hover:opacity-90"
          >
            See How It Works
            <span className="text-[22px] leading-none">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
