const stats = [
  {
    value: "200+",
    label: "Placements Made",
    sub: "Roles filled across 10+ countries",
  },
  {
    value: "60+",
    label: "Companies Served",
    sub: "From funded startups to mid-market",
  },
  {
    value: "<7%",
    label: "Replacement Rate",
    sub: "Industry average runs 3-4x higher",
  },
  {
    value: "12mo",
    label: "Replacement Warranty",
    sub: "Backed on every single hire",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#f8f8f8] py-16" aria-label="Key stats">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl md:text-6xl font-extrabold text-[#ef60a3] leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-base font-bold text-black mb-1">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
