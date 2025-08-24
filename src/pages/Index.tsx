import { Hero } from "@/components/Hero";
import { SportsGrid } from "@/components/SportsGrid";
import { LiveMatches } from "@/components/LiveMatches";
import { CasinoSection } from "@/components/CasinoSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <h1 style={{ display: "none" }}>
        Reddy Anna Live - Best Online Betting Platform in India
      </h1>
      <Hero />
      <SportsGrid />
      <LiveMatches />
      <CasinoSection />
      <AboutSection />

      <Footer />
      {/* SEO Keywords (hidden for search engines) */}
      <div style={{ display: "none" }}>
        cricbet99, lotus365, mahadev book, mahakal book, reddy anna app, reddy
        anna betting, reddy anna book, reddy anna book 247, reddy anna book live
        login, reddy anna book login, reddy anna club, reddy anna club live,
        reddy anna customer care number, reddy anna live, reddy anna live
        casino, reddy anna live cricket, reddy anna live login, reddy anna live
        score, reddy anna live today, reddy anna login, reddy anna online, reddy
        anna online book id, reddy anna website, reddy anna whatsapp number,
        reddybook
      </div>
    </div>
  );
};

export default Index;
