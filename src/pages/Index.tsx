import { Hero } from "@/components/Hero";
import { SportsGrid } from "@/components/SportsGrid";
import { LiveMatches } from "@/components/LiveMatches";
import { CasinoSection } from "@/components/CasinoSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SportsGrid />
      <LiveMatches />
      <CasinoSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;