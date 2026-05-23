const rows = [
  {
    feature: "Fee structure",
    oyt: "Flat placement fee",
    traditional: "15–25% of annual salary",
    jobBoard: "Monthly subscription",
  },
  {
    feature: "Recorded video interviews",
    oyt: true,
    traditional: false,
    jobBoard: false,
  },
  {
    feature: "DISC profile included",
    oyt: true,
    traditional: false,
    jobBoard: false,
  },
  {
    feature: "Global talent access",
    oyt: "10+ countries",
    traditional: "Mostly US-focused",
    jobBoard: "Limited",
  },
  {
    feature: "Pre-screened shortlist",
    oyt: "3–5 curated candidates",
    traditional: "Varies",
    jobBoard: false,
  },
  {
    feature: "Replacement warranty",
    oyt: "12 months",
    traditional: "30–90 days",
    jobBoard: "None",
  },
  {
    feature: "Dedicated account manager",
    oyt: true,
    traditional: "Varies",
    jobBoard: false,
  },
  {
    feature: "Onboarding support",
    oyt: true,
    traditional: false,
    jobBoard: false,
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#ef60a3]/10">
        <svg className="w-4 h-4 text-[#ef60a3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
        <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    );
  }
  return <span className="text-sm text-gray-700">{value}</span>;
}

export default function Comparison() {
  return (
    <section className="bg-[#f8f8f8] py-20" id="comparison" aria-label="OYT vs traditional recruiters comparison">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#ef60a3] mb-3">
            Why OYT
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            There's a Reason Clients Don't Go Back to Traditional Recruiters
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
            See exactly what you get with OYT versus the other options on your list.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm bg-white">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 font-semibold text-gray-500 w-1/4">Feature</th>
                <th className="px-6 py-4 text-center w-1/4">
                  <span className="inline-block bg-[#ef60a3] text-white text-xs font-bold px-3 py-1 rounded-full">
                    OYT
                  </span>
                </th>
                <th className="px-6 py-4 text-center text-gray-500 font-semibold w-1/4">
                  Traditional Recruiter
                </th>
                <th className="px-6 py-4 text-center text-gray-500 font-semibold w-1/4">
                  Job Board
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}
                >
                  <td className="px-6 py-4 font-medium text-black">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <Cell value={row.oyt} />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <Cell value={row.traditional} />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <Cell value={row.jobBoard} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
