"use client"

const PINK = "#ec1e79"
const NAVY = "#0c1a4b"
const SLATE = "#5b6b8c"

/* ----------------------------- Inline SVG icons ---------------------------- */

function VideoIcon({ className = "", color = PINK }: { className?: string; color?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="6" width="13" height="12" rx="2" />
      <path d="m22 8-5 4 5 4V8Z" />
    </svg>
  )
}

function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={PINK}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  )
}

function UserIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={PINK}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function TagIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={PINK}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill={PINK} />
    </svg>
  )
}

function BookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={PINK}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function CheckCircleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={PINK}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  )
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

function GearIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  )
}

function FullscreenIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  )
}

/* --------------------------- Avatar placeholders --------------------------- */

function Avatar({ from, to }: { from: string; to: string }) {
  return (
    <span
      className="block h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white"
      aria-hidden="true"
    >
      <svg width="44" height="44" viewBox="0 0 44 44" role="img">
        <defs>
          <linearGradient id={`g-${from}-${to}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="44" height="44" fill={`url(#g-${from}-${to})`} />
        <circle cx="22" cy="17" r="7" fill="rgba(255,255,255,0.92)" />
        <path d="M8 44c0-8 6.5-13 14-13s14 5 14 13z" fill="rgba(255,255,255,0.92)" />
      </svg>
    </span>
  )
}

/* -------------------------------- Data --------------------------------- */

const benefits = [
  {
    icon: VideoIcon,
    title: "Video interviews with every shortlist",
    body: "Recorded interviews and DISC profiles with every candidate we send you.",
  },
  {
    icon: GlobeIcon,
    title: "College-educated professionals worldwide",
    body: "Sourced across the Americas, Europe, Asia, and Africa, including US-based talent for senior and fractional roles.",
  },
  {
    icon: UserIcon,
    title: "Direct hire placement",
    body: "Your new hire is your employee from day one, no middleman, no agency sitting between you and your team, and no ongoing fees.",
  },
  {
    icon: TagIcon,
    title: "One flat fee. No commission. No percentage.",
    body: "Traditional recruiters charge 20% of first-year salary. On a $100,000 role, that is $20,000. We charge a fixed placement fee.",
  },
  {
    icon: BookIcon,
    title: "Onboarding and management guide with every hire",
    body: "You get tools and video guides on setting your new hire up for success from day one, so they hit the ground running and stay.",
  },
]

const candidates = [
  { from: "#f6c9a8", to: "#e8a06f" },
  { from: "#a8c3e8", to: "#6f8fc9" },
  { from: "#d9c2e8", to: "#a87fc9" },
]

/* ------------------------------- Component ------------------------------- */

export default function HiringFailsSection() {
  return (
    <section className="w-full bg-[#f4f5f7] px-4 py-12 sm:px-6 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        {/* ------------------------------ Left ------------------------------ */}
        <div className="flex flex-col">
          <h2
            className="text-pretty text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
            style={{ color: NAVY }}
          >
            Why Clients Choose Us Over Everyone Else
          </h2>
          <p
            className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: SLATE }}
          >
            A complete, human-led hiring process designed to make hiring simpler,
            clearer, and more effective.
          </p>

          {/* Benefit strip card */}
          <div className="mt-8 rounded-2xl border border-black/5 bg-white shadow-sm">
            <ul className="divide-y divide-slate-100">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <li key={b.title} className="flex items-start gap-4 p-5 sm:gap-5 sm:p-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200/80 bg-white">
                      <Icon />
                    </span>
                    <div className="min-w-0">
                      <h3
                        className="text-base font-bold sm:text-[1.0625rem]"
                        style={{ color: NAVY }}
                      >
                        {b.title}
                      </h3>
                      <p
                        className="mt-1 text-sm leading-relaxed sm:text-[0.95rem]"
                        style={{ color: SLATE }}
                      >
                        {b.body}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-base font-bold text-white shadow-md transition-colors hover:brightness-95 sm:w-auto sm:text-lg"
              style={{ backgroundColor: PINK }}
            >
              See How It Works
              <ArrowRightIcon />
            </a>
          </div>
        </div>

        {/* ------------------------------ Right ----------------------------- */}
        <div className="flex flex-col gap-6">
          {/* Shortlist card */}
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="mt-0.5 shrink-0" />
              <div>
                <h3 className="text-lg font-bold" style={{ color: NAVY }}>
                  Your Shortlist
                </h3>
                <p className="mt-0.5 text-sm" style={{ color: SLATE }}>
                  Top candidates, vetted and ready to interview.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              {candidates.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-3 sm:p-4"
                >
                  <Avatar from={c.from} to={c.to} />
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <span className="h-2.5 w-1/3 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2/3 rounded-full bg-slate-100" />
                  </div>
                  <span
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold"
                    style={{ backgroundColor: "#fce4f0", color: PINK }}
                  >
                    <VideoIcon className="h-4 w-4" />
                    Interview
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Video interview card */}
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-2.5">
              <VideoIcon className="h-6 w-6" />
              <h3 className="text-lg font-bold" style={{ color: NAVY }}>
                Video Interview
              </h3>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl">
              {/* Video preview placeholder (no external assets) */}
              <div className="relative aspect-video w-full bg-gradient-to-br from-[#cdbfb2] via-[#b7a594] to-[#8a7a68]">
                {/* play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    aria-label="Play video"
                    className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/90 bg-black/15 backdrop-blur-sm transition hover:bg-black/25"
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* control bar */}
                <div className="absolute inset-x-0 bottom-0 bg-[#0c1a4b]/95 px-4 pb-3 pt-2.5">
                  {/* progress */}
                  <div className="mb-2.5 h-1 w-full rounded-full bg-white/25">
                    <div className="relative h-full w-[18%] rounded-full" style={{ backgroundColor: PINK }}>
                      <span className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button type="button" aria-label="Play" className="text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      <span className="text-sm font-medium text-white">1:24 / 8:32</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button type="button" aria-label="Settings">
                        <GearIcon />
                      </button>
                      <button type="button" aria-label="Fullscreen">
                        <FullscreenIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
