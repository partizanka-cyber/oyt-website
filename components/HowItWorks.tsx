const steps = [
  {
    number: "01",
    title: "One Discovery Call",
    description:
      "We spend real time understanding your role, your team's culture, and what success looks like for this hire. No templates, no assumptions — just a focused conversation about exactly who you need.",
  },
  {
    number: "02",
    title: "We Find, Screen, and Interview",
    description:
      "We search globally, pre-qualify every candidate against your specific criteria, and conduct full recorded video interviews so you can see how people present before you ever take a call with them.",
  },
  {
    number: "03",
    title: "You Choose. We Handle the Rest.",
    description:
      "We deliver a curated shortlist of 3-5 candidates, each with a recorded interview and DISC profile. Watch at your own pace, pick your favorite, and we support you through onboarding.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20" id="how-it-works" aria-label="How OYT works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#ef60a3] mb-3">
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Simple. Thorough. Repeatable.
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
            Three steps from your first call to your next great hire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-[#f8f8f8] rounded-2xl p-8 flex flex-col"
            >
              <span className="text-6xl font-extrabold text-[#ef60a3]/10 leading-none mb-4 select-none">
                {step.number}
              </span>
              <h3 className="text-xl font-extrabold text-black mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
