export default function WhyUs() {
  return (
    <section className="bg-[#0f0e1a] text-white py-20 md:py-28 px-6">
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
    </section>
  );
}
