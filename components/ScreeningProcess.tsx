const steps = [
  {
    number: "1",
    title: "Role Scoping",
    description:
      "We dig into the specifics of your role, your team's working style, and what a successful first 90 days looks like. The more we understand the context, the better the match.",
  },
  {
    number: "2",
    title: "Global Talent Sourcing",
    description:
      "We tap into our network across 10+ countries to find candidates who fit your role, salary range, and time zone — not just whoever happens to be available.",
  },
  {
    number: "3",
    title: "Resume and Background Review",
    description:
      "We filter by education, work history, and communication quality before anyone makes the next round. You don't see résumés until we've already done the heavy lifting.",
  },
  {
    number: "4",
    title: "Recorded Video Interview",
    description:
      "We conduct live interviews that are fully recorded. You watch them on your schedule, see how candidates present, and evaluate communication before you ever speak with them directly.",
  },
  {
    number: "5",
    title: "DISC Profile and Skills Assessment",
    description:
      "We assess English proficiency, relevant technical skills, and personality fit using a DISC profile — because a great résumé and the right work style aren't always the same person.",
  },
  {
    number: "6",
    title: "Curated Shortlist Delivered",
    description:
      "You receive 3-5 candidates with full interview recordings, profiles, and our recommendation. Then you decide. No pressure, no timers, no rushing you to close.",
  },
];

export default function ScreeningProcess() {
  return (
    <section
      className="bg-black py-20"
      id="screening-process"
      aria-label="Our candidate screening process"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#ef60a3] mb-3">
            The Screening Process
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            What Happens Before You See Anyone
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Every candidate goes through a thorough, multi-step process before they reach your inbox. Here's exactly what that looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#ef60a3]/30 transition-colors duration-200"
            >
              <div className="w-9 h-9 rounded-full bg-[#ef60a3] text-white font-extrabold text-sm flex items-center justify-center mb-5">
                {step.number}
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
