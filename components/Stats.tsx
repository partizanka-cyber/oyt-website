const BOOKING_URL =
  "https://link.outsourceyourtasks.com/widget/booking/pQ2qZBcQtTxPzQktc3m2";

const americasDots: [number, number][] = [
  [35,35],[42,32],[49,30],[56,28],[63,30],[70,33],[77,30],
  [38,42],[45,40],[52,38],[59,36],[66,38],[73,40],[80,38],
  [41,49],[48,47],[55,45],[62,43],[69,45],[76,47],
  [44,56],[51,54],[58,52],[65,50],[72,52],
  [48,63],[55,61],[62,59],
  [62,80],[69,78],[76,80],[83,78],
  [59,87],[66,85],[73,87],[80,85],
  [62,94],[69,92],[76,94],
  [65,101],[72,99],[79,101],
  [68,108],[75,106],[71,115],
];

const europeAfricaDots: [number, number][] = [
  [168,28],[175,25],[182,28],[189,25],[196,28],
  [165,35],[172,32],[179,35],[186,32],[193,35],
  [168,42],[175,39],[182,42],[189,39],[196,42],
  [172,49],[179,46],[186,49],[176,56],[183,53],
  [172,67],[179,64],[186,67],[193,64],[200,67],
  [170,74],[177,71],[184,74],[191,71],[198,74],[205,71],
  [172,81],[179,78],[186,81],[193,78],[200,81],
  [174,88],[181,85],[188,88],[195,85],[202,88],
  [176,95],[183,92],[190,95],[197,92],
  [179,102],[186,99],[193,102],
  [182,109],[189,106],[185,115],
];

const asiaPacificDots: [number, number][] = [
  [213,35],[220,32],[227,35],[234,32],[241,35],[248,32],
  [210,42],[217,39],[224,42],[231,39],[238,42],[245,39],[252,42],[259,39],[266,42],
  [213,49],[220,46],[227,49],[234,46],[241,49],[248,46],[255,49],[262,46],[269,49],[276,46],
  [216,56],[223,53],[230,56],[237,53],[244,56],[251,53],[258,56],[265,53],[272,56],
  [219,63],[226,60],[233,63],[240,60],[247,63],[254,60],[261,63],[268,60],[275,63],
  [225,70],[232,67],[239,70],[246,67],[253,70],[260,67],
  [232,77],[239,74],[246,77],[253,74],
  [280,84],[287,81],[294,84],[283,91],[290,88],[297,91],
  [295,120],[302,117],[309,120],[316,117],[323,120],
  [292,127],[299,124],[306,127],[313,124],[320,127],
  [295,134],[302,131],[309,134],[316,131],
  [299,141],[306,138],
];

const bars = [
  { label: "120K", w: "100%" },
  { label: "80K",  w: "67%"  },
  { label: "70K",  w: "58%"  },
  { label: "50K",  w: "42%"  },
];

export default function Stats() {
  return (
    <section className="bg-white py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1535] text-center mb-10">
          Why Businesses Trust Us
        </h2>

        {/* Bento grid — 4 cols × 2 rows on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">

          {/* 1 — Countries (col-span-2, row 1) */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between min-h-[210px]">
            <p className="text-sm font-medium text-gray-500">Countries</p>
            <div className="flex-1 flex items-center overflow-hidden my-1">
              <svg viewBox="0 0 340 160" className="w-full" style={{ height: 110 }}>
                {americasDots.map(([cx, cy], i) => (
                  <circle key={`am${i}`} cx={cx} cy={cy} r="2.8" fill="#f9a8d4" />
                ))}
                {europeAfricaDots.map(([cx, cy], i) => (
                  <circle key={`eu${i}`} cx={cx} cy={cy} r="2.8" fill="#a78bfa" />
                ))}
                {asiaPacificDots.map(([cx, cy], i) => (
                  <circle key={`as${i}`} cx={cx} cy={cy} r="2.8" fill="#93c5fd" />
                ))}
              </svg>
            </div>
            <div className="leading-none">
              <span className="text-6xl font-extrabold text-black">40</span>
              <span className="text-4xl font-extrabold text-[#ef60a3]">+</span>
            </div>
          </div>

          {/* 2 — Productivity Boost (row-span-2, col 3) */}
          <div className="lg:col-start-3 lg:row-start-1 lg:row-span-2 bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col min-h-[420px]">
            <div className="p-5 pb-2">
              <p className="text-sm font-medium text-gray-500">Productivity Boost</p>
              <div className="leading-none mt-1">
                <span className="text-6xl font-extrabold text-black">60</span>
                <span className="text-3xl font-extrabold text-[#ef60a3]">%</span>
              </div>
            </div>
            <div className="relative flex-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&h=520&q=80"
                alt="Happy professional"
                className="w-full h-full object-cover object-top"
              />
              {/* Circular progress ring */}
              <svg className="absolute top-3 left-3 w-16 h-16" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="28" fill="none" stroke="#f9a8d4" strokeWidth="3" strokeOpacity="0.5" />
                <circle cx="32" cy="32" r="28" fill="none" stroke="#ef60a3" strokeWidth="3"
                  strokeDasharray={`${0.6 * 2 * Math.PI * 28} ${2 * Math.PI * 28}`}
                  strokeDashoffset={`${0.25 * 2 * Math.PI * 28}`}
                  strokeLinecap="round" transform="rotate(-90 32 32)" />
              </svg>
              {/* 60% badge */}
              <div className="absolute top-6 left-6 bg-[#ef60a3] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                60%
              </div>
            </div>
          </div>

          {/* 3 — Cost Reduction (col 4, row 1) — lavender */}
          <div className="lg:col-start-4 lg:row-start-1 bg-[#ede9fe] border border-[#ddd6fe] rounded-2xl p-6 flex flex-col justify-between min-h-[210px]">
            <div>
              <p className="text-sm font-medium text-[#7c3aed]">Cost Reduction</p>
              <svg viewBox="0 0 120 55" className="w-full mt-3" style={{ height: 55 }}>
                <polyline
                  points="5,8 25,14 45,24 65,38 85,46 110,44"
                  fill="none" stroke="#818cf8" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round"
                />
                <text x="112" y="24" fill="#818cf8" fontSize="7" fontWeight="bold">▼</text>
                <text x="112" y="34" fill="#818cf8" fontSize="7" fontWeight="bold">▼</text>
                <text x="112" y="44" fill="#818cf8" fontSize="7" fontWeight="bold">▼</text>
              </svg>
            </div>
            <div className="leading-none">
              <span className="text-6xl font-extrabold text-black">70</span>
              <span className="text-3xl font-extrabold text-[#ef60a3]">%</span>
            </div>
          </div>

          {/* 4 — Industries (col 1, row 2) */}
          <div className="lg:col-start-1 lg:row-start-2 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between min-h-[210px]">
            <div className="flex items-start justify-between">
              <p className="text-sm font-medium text-gray-500">Industries</p>
              <svg viewBox="0 0 60 60" className="w-14 h-14 -mt-1">
                <path d="M30,30 L30,5 A25,25 0 0,1 55,30 Z" fill="#f9a8d4" />
                <path d="M30,30 L55,30 A25,25 0 0,1 17,52 Z" fill="#a78bfa" />
                <path d="M30,30 L17,52 A25,25 0 0,1 5,15 Z" fill="#c4b5fd" />
                <path d="M30,30 L5,15 A25,25 0 0,1 30,5 Z" fill="#ddd6fe" />
              </svg>
            </div>
            <div className="leading-none">
              <span className="text-6xl font-extrabold text-black">20</span>
              <span className="text-4xl font-extrabold text-[#ef60a3]">+</span>
            </div>
          </div>

          {/* 5 — Customer Satisfaction (col 2, row 2) — pink */}
          <div className="lg:col-start-2 lg:row-start-2 bg-[#fce7f3] border border-[#fbcfe8] rounded-2xl p-6 flex flex-col justify-between min-h-[210px]">
            <div>
              <p className="text-sm font-medium text-[#be185d]">Customer Satisfaction</p>
              <div className="flex gap-1 mt-3 bg-white rounded-xl px-3 py-2 w-fit shadow-sm">
                {[1, 2, 3, 4].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-5 h-5" viewBox="0 0 20 20">
                  <defs>
                    <linearGradient id="halfStar">
                      <stop offset="50%" stopColor="#facc15" />
                      <stop offset="50%" stopColor="#d1d5db" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <div className="leading-none">
              <span className="text-6xl font-extrabold text-black">95</span>
              <span className="text-3xl font-extrabold text-[#ef60a3]">%</span>
            </div>
          </div>

          {/* 6 — Skill Sets (col 4, row 2) */}
          <div className="lg:col-start-4 lg:row-start-2 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between min-h-[210px]">
            <div>
              <p className="text-sm font-medium text-gray-500">Skill Sets</p>
              <div className="mt-3 flex flex-col gap-2">
                {bars.map((bar) => (
                  <div key={bar.label} className="flex items-center gap-2">
                    <div className="flex-1 bg-[#ede9fe] rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-[#a78bfa] rounded-full" style={{ width: bar.w }} />
                    </div>
                    <span className="text-[11px] text-gray-400 w-9 text-right">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="leading-none">
              <span className="text-6xl font-extrabold text-black">100</span>
              <span className="text-4xl font-extrabold text-[#ef60a3]">+</span>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ef60a3] text-white font-bold text-xs tracking-[0.2em] uppercase px-12 py-4 rounded-full hover:bg-[#d94f8e] transition-colors shadow-lg shadow-[#ef60a3]/20"
          >
            Get Started Now
          </a>
        </div>

      </div>
    </section>
  );
}
