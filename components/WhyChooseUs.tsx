/* eslint-disable @next/next/no-img-element */

const layout = {
  sectionPaddingTop: "pt-20",
  sectionPaddingBottom: "pb-24",
  maxWidth: "max-w-[1500px]",

  grid: "lg:grid-cols-[1.55fr_0.95fr]",
  gridGap: "lg:gap-16",

  headlineSize: "text-[64px]",
  headlineLineHeight: "leading-[0.98]",
  subtextSize: "text-[23px]",

  leftBoxPadding: "px-8 py-4",
  leftIconSize: "h-16 w-16",
  leftTitleSize: "text-[25px]",
  leftTextSize: "text-[21px]",
  leftRowPadding: "py-5",

  ctaTopMargin: "mt-4",
  ctaWidth: "w-[300px]",
  ctaHeight: "h-[58px]",
  ctaFontSize: "text-[22px]",

  rightCardTopMargin: "lg:mt-32",
  rightCardPadding: "p-8",
  rightTitleSize: "text-[30px]",
  rightSubtitleSize: "text-[17px]",
  candidateNameSize: "text-[24px]",
  candidateTextSize: "text-[17px]",
  priceTextSize: "text-[17px]",
};

const features = [
  {
    title: "Video interviews with every shortlist",
    description:
      "Recorded interviews and DISC profiles with every candidate we send you.",
    icon: "video",
  },
  {
    title: "College-educated professionals worldwide",
    description:
      "Sourced across the Americas, Europe, Asia, and Africa, including US-based talent for senior and fractional roles.",
    icon: "globe",
  },
  {
    title: "Direct hire placement",
    description:
      "Your new hire is your employee from day one, no middleman, no agency sitting between you and your team, and no ongoing fees.",
    icon: "person",
  },
  {
    title: "One flat fee. No commission. No percentage.",
    description:
      "Traditional recruiters charge 20% of first-year salary. On a $100,000 role, that is $20,000. We charge a fixed placement fee.",
    icon: "tag",
  },
  {
    title: "Onboarding and management guide with every hire",
    description:
      "You get tools and video guides on setting your new hire up for success from day one, so they hit the ground running and stay.",
    icon: "book",
  },
];

const candidates = [
  {
    name: "Erica Silva",
    degree: "Bachelor’s in Business Administration",
    rate: "$1,350/mo",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Paulo Diaz",
    degree: "Bachelor’s in Computer Engineering",
    rate: "$1,500/mo",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Erin Cohen",
    degree: "Bachelor of Applied Science",
    rate: "$1,750/mo",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
  },
];

function Icon({ type }: { type: string }) {
  const className = "h-full w-full stroke-[#f72585] stroke-[1.8]";

  if (type === "video") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="M16 10l5-3v10l-5-3" />
      </svg>
    );
  }

  if (type === "globe") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9" />
        <path d="M12 3c-2.4 2.6-3.6 5.6-3.6 9s1.2 6.4 3.6 9" />
      </svg>
    );
  }

  if (type === "person") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="7" r="3.2" />
        <path d="M5 21c.8-4.6 3.2-7 7-7s6.2 2.4 7 7" />
      </svg>
    );
  }

  if (type === "tag") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M3 12.5V5a2 2 0 0 1 2-2h7.5L21 11.5 11.5 21 3 12.5Z" />
        <circle cx="8" cy="8" r="1.2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 5.5c2.6-1.2 5.2-1.2 8 0v15c-2.8-1.2-5.4-1.2-8 0v-15Z" />
      <path d="M12 5.5c2.8-1.2 5.4-1.2 8 0v15c-2.6-1.2-5.2-1.2-8 0v-15Z" />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      className={`bg-[#f8f9fc] ${layout.sectionPaddingTop} ${layout.sectionPaddingBottom}`}
    >
      <div className={`mx-auto ${layout.maxWidth} px-10`}>
        <div className={`grid grid-cols-1 ${layout.grid} ${layout.gridGap}`}>
          <div>
            <h2
              className={`max-w-[780px] font-extrabold tracking-[-0.045em] text-[#07123f] ${layout.headlineSize} ${layout.headlineLineHeight}`}
            >
              Why Clients Choose Us Over Everyone Else
            </h2>

            <p
              className={`mt-6 max-w-[760px] leading-[1.45] text-[#24406f] ${layout.subtextSize}`}
            >
              A complete, human-led hiring process designed to make hiring
              simpler, clearer, and more effective.
            </p>

            <div className="mt-[120px] mb-[120px] overflow-hidden rounded-[18px] border border-[#e5e7ee] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-8 ${layout.leftBoxPadding} ${layout.leftRowPadding} ${
                    index !== features.length - 1
                      ? "border-b border-[#e5e7ee]"
                      : ""
                  }`}
                >
                  <div className={`${layout.leftIconSize} shrink-0`}>
                    <Icon type={feature.icon} />
                  </div>

                  <div>
                    <h3
                      className={`font-extrabold leading-tight tracking-[-0.02em] text-[#07123f] ${layout.leftTitleSize}`}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className={`mt-2 max-w-[720px] leading-[1.35] text-[#15346d] ${layout.leftTextSize}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={layout.ctaTopMargin}>
              <a
                href="#how-it-works"
                className={`inline-flex ${layout.ctaWidth} ${layout.ctaHeight} items-center justify-center gap-4 rounded-[10px] bg-[#f72585] font-bold text-white shadow-[0_14px_30px_rgba(247,37,133,0.28)] ${layout.ctaFontSize}`}
              >
                See How It Works
                <span className="text-[28px] leading-none">→</span>
              </a>
            </div>
          </div>

          <div className={`${layout.rightCardTopMargin} mt-[120px] mb-[120px]`}>
            <div
              className={`rounded-[18px] border border-[#e5e7ee] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] ${layout.rightCardPadding}`}
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[4px] border-[#f72585] text-[#f72585]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-8 w-8 stroke-current stroke-[2.5]"
                  >
                    <path d="M5 12.5l4.3 4.3L19 7" />
                  </svg>
                </div>

                <div>
                  <h3
                    className={`font-extrabold tracking-[-0.03em] text-[#07123f] ${layout.rightTitleSize}`}
                  >
                    Your Shortlist
                  </h3>
                  <p
                    className={`mt-2 font-medium text-[#15346d] ${layout.rightSubtitleSize}`}
                  >
                    Top candidates, vetted and ready to interview.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {candidates.map((candidate) => (
                  <div
                    key={candidate.name}
                    className="grid grid-cols-[95px_1fr_auto] items-center gap-6 rounded-[14px] border border-[#e5e7ee] bg-white px-5 py-5"
                  >
                    <img
                      src={candidate.image}
                      alt={candidate.name}
                      className="h-[86px] w-[86px] rounded-full object-cover"
                    />

                    <div>
                      <h4
                        className={`font-extrabold tracking-[-0.025em] text-[#07123f] ${layout.candidateNameSize}`}
                      >
                        {candidate.name}
                      </h4>
                      <p
                        className={`mt-2 max-w-[310px] leading-[1.25] text-[#15346d] ${layout.candidateTextSize}`}
                      >
                        {candidate.degree}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-4">
                      <div
                        className={`rounded-[8px] bg-[#f0f1f4] px-5 py-3 font-extrabold text-[#07123f] ${layout.priceTextSize}`}
                      >
                        {candidate.rate}
                      </div>

                      <button className="inline-flex h-10 items-center gap-2 rounded-[8px] border border-[#f72585] px-4 font-bold text-[#f72585]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-5 w-5 stroke-current stroke-[2]"
                        >
                          <rect x="3" y="7" width="10" height="10" rx="1.5" />
                          <path d="M13 10l6-3v10l-6-3" />
                        </svg>
                        Interview
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
