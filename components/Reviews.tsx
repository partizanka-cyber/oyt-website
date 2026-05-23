const reviews = [
  {
    name: "Dr. Shama Rathi",
    title: "Co-Founder, LunaJoy Startup",
    quote:
      "They don't just place titles but take time to understand the nuances of what the role requires. We've worked with them for over two years and they've scaled our company to 40+ — including placing mid-management to oversee a growing team.",
  },
  {
    name: "Kyle Putnam",
    title: "Founder, Fintech Startup",
    quote:
      "After just one call describing the kind of help I needed, they found me the perfect match. I even got the VA's DISC profile to make sure it was a great fit for the role. I finally have time to work on business growth.",
  },
  {
    name: "Florence Ropelewski",
    title: "Owner, Lagence Agency",
    quote:
      "She found 3 awesome candidates — unicorns! — within my timeframe and I ended up hiring one of the three. Anna was always available, called on the weekend, and personally explained the whole process patiently and effectively.",
  },
  {
    name: "Corinn Altomare",
    title: "Co-Founder, Hearthfire Holdings",
    quote:
      "I had tried to hire a VA on my own multiple times before, with miserably failed results. Working with Anna, I now have a great virtual team member and a much better understanding of how we can both be more successful together.",
  },
  {
    name: "Jason Auvenshine",
    title: "Land Investor",
    quote:
      "We wanted someone from Latin America with excellent communication skills in both English and Spanish, and that's exactly what we got. The process and the employee have worked out extremely well.",
  },
  {
    name: "Kate Rose",
    title: "Owner, Kate Rose Realty",
    quote:
      "Great personalized service and a great value for money. Jonel presented about 7 candidates, I had a shortlist of 3, and received the recorded videos. It made hiring abroad very doable — and so far it's working out great.",
  },
  {
    name: "Dr. Jaime Home",
    title: "Best-Selling Author",
    quote:
      "This has been a game changer. OYT not only interviewed multiple VAs and helped me find the best fit — they walked me through every step, prepared me for what to ask, how to onboard, and how to manage the ongoing relationship.",
  },
  {
    name: "Igor Aybin",
    title: "Real Estate Investor",
    quote:
      "Outsource Your Tasks did an amazing job helping me scale my business by sourcing great quality remote employees for a fraction of the cost of US employees. Thank you!",
  },
  {
    name: "Patricia \"Trish\" Baker",
    title: "Investor",
    quote:
      "Outsource Your Tasks is truly exceptional. They skillfully matched me with an outstanding Virtual Assistant who provided invaluable assistance. The entire experience was remarkably straightforward and efficient.",
  },
  {
    name: "Dr. Zarema Singson",
    title: "Doctor and Investor",
    quote:
      "Their attention to detail, efficiency, and professionalism ensured a seamless and fruitful match. Highly recommended for anyone seeking top-notch support. Thanks for an effortless experience!",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#ef60a3]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-white py-20" id="reviews" aria-label="Client reviews and testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#ef60a3] mb-3">
            Client Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Real Clients. Real Results.
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
            Over 200 placements and counting — here's what the people we've worked with actually say.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="break-inside-avoid bg-[#f8f8f8] rounded-2xl p-6 inline-block w-full"
            >
              <Stars />
              <p className="text-sm text-gray-700 leading-relaxed mb-5 italic">
                "{review.quote}"
              </p>
              <div>
                <p className="text-sm font-extrabold text-black">{review.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{review.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
