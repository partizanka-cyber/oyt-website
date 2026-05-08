import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center bg-[#f1f1f1] px-6 py-32 text-center">
        <div className="max-w-2xl">
          <div className="inline-block bg-[#ef60a3] text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            New site coming soon
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
            We Find World-Class Global Talent.{" "}
            <span className="text-[#ef60a3]">You Just Choose the Best Fit.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            OYT is a boutique global staffing firm for growing companies.
            Offshore, nearshore, or US local — we find the right person and
            back every hire with a 12-month warranty.
          </p>
          <a
            href="https://outsourceyourtasks.com"
            className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-full hover:bg-[#ef60a3] transition-colors"
          >
            Visit Current Site
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
