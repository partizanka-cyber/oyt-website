import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FindYourTeam from "@/components/FindYourTeam";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import ScreeningProcess from "@/components/ScreeningProcess";
import Industries from "@/components/Industries";
import Comparison from "@/components/Comparison";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FindYourTeam />
        <TrustBar />
        <Stats />
        <HowItWorks />
        <ScreeningProcess />
        <Industries />
        <Comparison />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
