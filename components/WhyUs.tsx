


const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: "Video interviews with every shortlist",
    description: "Recorded interviews and DISC profiles with every candidate we send you.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "College-educated professionals worldwide",
    description: "Sourced across the Americas, Europe, Asia, and Africa, including US-based talent for senior and fractional roles.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Direct Hire Placement",
    description: "Your new hire is your employee from day one. No middleman, no agency sitting between you and your team, and no ongoing fees.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "One flat fee. No commission. No percentage.",
    description: "Traditional recruiters charge 20% of first-year salary. On a $100,000 role, that's $20,000. We charge a fixed placement fee.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Onboarding and Management Guide with every hire",
    description: "You get tools and video guides on setting your new hire up for success from day one, so they hit the ground running and stay.",
  },
];

const candidates = [
  { top: "12%",  left: "10%",  size: "w-12 h-12", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" },
  { top: "58%",  left: "18%",  size: "w-10 h-10", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&h=100&q=80" },
  { top: "8%",   left: "44%",  size: "w-11 h-11", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80" },
  { top: "48%",  left: "50%",  size: "w-16 h-16", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100&q=80" },
  { top: "15%",  left: "70%",  size: "w-10 h-10", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80" },
  { top: "62%",  left: "74%",  size: "w-11 h-11", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=100&h=100&q=80" },
  { top: "35%",  left: "88%",  size: "w-10 h-10", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80" },
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

      {/* Bottom — feature list + world visual */}
      <div className="bg-white py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Headline */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1535] leading-tight">
              Everything Included.{" "}
              <span className="relative inline-block">
                Every Time.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
                  <path d="M0 7 Q50 1 100 7 Q150 13 200 7" stroke="#ef60a3" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — always-open list */}
            <div className="flex flex-col">
              {features.map((feature, i) => (
                <div key={i} className="py-5 border-b border-gray-100">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="flex-shrink-0 text-[#ef60a3] mt-0.5">
                      {feature.icon}
                    </span>
                    <span className="font-bold text-sm leading-snug text-black">
                      {feature.title}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed ml-8 pr-4">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right — global talent visual */}
            <div className="relative bg-gray-50 rounded-3xl overflow-hidden h-[380px] lg:h-[420px]">

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="16" y1="18" x2="52" y2="56" stroke="#e5e7eb" strokeWidth="0.4" />
                <line x1="22" y1="63" x2="52" y2="56" stroke="#e5e7eb" strokeWidth="0.4" />
                <line x1="46" y1="13" x2="52" y2="56" stroke="#e5e7eb" strokeWidth="0.4" />
                <line x1="52" y1="56" x2="72" y2="20" stroke="#e5e7eb" strokeWidth="0.4" />
                <line x1="52" y1="56" x2="76" y2="67" stroke="#e5e7eb" strokeWidth="0.4" />
                <line x1="52" y1="56" x2="90" y2="40" stroke="#e5e7eb" strokeWidth="0.4" />
              </svg>

              {/* Candidate circles */}
              {candidates.map((c, i) => (
                <div
                  key={i}
                  className={`absolute ${c.size} rounded-full overflow-hidden border-2 shadow-md transition-transform duration-200 hover:scale-110 ${i === 3 ? "border-[#ef60a3] shadow-[#ef60a3]/20" : "border-white"}`}
                  style={{ top: c.top, left: c.left, transform: "translate(-50%, -50%)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt="Global talent" className="w-full h-full object-cover object-top" />
                </div>
              ))}

              {/* Region labels */}
              <span className="absolute bottom-4 left-5 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Americas</span>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Europe · Africa</span>
              <span className="absolute bottom-4 right-5 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Asia · Pacific</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
