"use client";

const BOOKING_URL =
  "https://link.outsourceyourtasks.com/widget/booking/pQ2qZBcQtTxPzQktc3m2";

const people = [
  { bg: "#f5bcd4", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80", alt: "Remote talent" },
  { bg: "#c5b5f5", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80", alt: "Remote talent" },
  { bg: "#d0c8f5", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80", alt: "Remote talent" },
  { bg: "#f0eeee", img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=400&h=400&q=80", alt: "Remote talent" },
  { bg: "#b8dde8", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&h=400&q=80", alt: "Remote talent" },
  { bg: "#e2308a", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80", alt: "Remote talent" },
  { bg: "#c8b8f5", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80", alt: "Remote talent" },
  { bg: "#f5d0e0", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&h=400&q=80", alt: "Remote talent" },
  { bg: "#e2308a", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400&q=80", alt: "Remote talent" },
];

export default function FindYourTeam() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* LEFT — 3×3 photo grid */}
          <div className="grid grid-cols-3 gap-3">
            {people.map((person, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden"
                style={{ backgroundColor: person.bg }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={person.img}
                  alt={person.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>

          {/* RIGHT — Content */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6" style={{ color: "#1a1535" }}>
              Find Your Remote Dream Team
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-xs">
              We connect businesses with top remote talent from around the world.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-[#ef60a3] text-[#ef60a3] font-bold text-xs tracking-[0.18em] uppercase px-12 py-4 rounded-full hover:bg-[#ef60a3] hover:text-white transition-all duration-200"
            >
              Get Started Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
