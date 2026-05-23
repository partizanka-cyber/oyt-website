const regions = [
  { name: "Philippines", flag: "🇵🇭" },
  { name: "Colombia", flag: "🇨🇴" },
  { name: "Argentina", flag: "🇦🇷" },
  { name: "Mexico", flag: "🇲🇽" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "India", flag: "🇮🇳" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Ukraine", flag: "🇺🇦" },
  { name: "Romania", flag: "🇷🇴" },
  { name: "United States", flag: "🇺🇸" },
];

export default function TrustBar() {
  const track = [...regions, ...regions, ...regions];

  return (
    <section className="bg-black py-14 overflow-hidden" aria-label="Global talent sourcing regions">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
          Talent Sourced Globally · Screened by Us · Delivered to You
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">
          We Source Across 4 Continents
        </h2>
      </div>

      <div className="relative">
        <div
          className="flex items-center gap-10 animate-[scroll_35s_linear_infinite]"
          style={{ width: "max-content" }}
        >
          {track.map((region, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <span className="text-3xl leading-none">{region.flag}</span>
              <span className="text-sm font-semibold text-white/70 tracking-wide">
                {region.name}
              </span>
              <span className="text-white/20 text-xl">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
