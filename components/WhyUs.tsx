const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: "Video interviews with every shortlist",
    description: "Recorded interviews and DISC profiles with every candidate we send you.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "College-educated professionals worldwide",
    description: "Sourced across the Americas, Europe, Asia, and Africa — including US-based talent for senior roles.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "One flat fee",
    description: "Fixed placement cost, not a percentage of salary.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "We show you how to onboard and manage them",
    description: "You get guidance on setting your new hire up for success from day one — so they hit the ground running and stay.",
  },
];

export default function WhyUs() {
  return (
    <section>
      {/* Top — dark problem/solution block */}
      <div className="bg-[#0f0e1a] text-white py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#ef60a3] font-bold uppercase tracking-[0.2em] text-xs mb-8">
            The Problem
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-12 max-w-3xl">
            Most hiring fails for the same reasons.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mb-10">
            <p className="text-gray-400 text-lg leading-relaxed">
              AI screens the résumé. Nobody screens the human. You get bombarded with resumes, spend days trying to choose, and still end up with the wrong hire.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We use real people to find real talent. Every candidate is sourced, reviewed, and video-interviewed by our team before you see a single name. Direct hire, flat fee, done in 2 to 4 weeks.
            </p>
          </div>
          <p className="text-white font-semibold text-lg max-w-2xl leading-relaxed border-l-4 border-[#ef60a3] pl-5">
            All you have to do is watch the shortlisted candidates&apos; interviews and decide on the best fit.
          </p>
        </div>
      </div>

      {/* Bottom — 4 feature cards */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#ef60a3]/30 hover:shadow-lg hover:shadow-[#ef60a3]/5 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#fff0f8] flex items-center justify-center text-[#ef60a3] flex-shrink-0">
                {feature.icon}
              </div>
              <h3 className="text-base font-extrabold text-black leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
