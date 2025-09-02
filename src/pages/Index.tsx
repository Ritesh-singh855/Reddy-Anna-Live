import React, { Suspense, lazy } from "react";
import { Hero } from "@/components/Hero";
import { SEO } from "@/components/SEO";

const SportsGrid = lazy(() => import("@/components/SportsGrid").then(m => ({ default: m.SportsGrid })));
const LiveMatches = lazy(() => import("@/components/LiveMatches").then(m => ({ default: m.LiveMatches })));
const LiveScores = lazy(() => import("@/components/LiveScores").then(m => ({ default: m.LiveScores })));
const CasinoSection = lazy(() => import("@/components/CasinoSection").then(m => ({ default: m.CasinoSection })));
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const BlogSection = lazy(() => import("@/components/BlogSection").then(m => ({ default: m.BlogSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Reddy Anna Live - Best Online Sports Betting & Casino Platform in India"
        description="Join Reddy Anna Live for the ultimate online betting experience in India. Live cricket betting, football, tennis, casino games, teen patti, and more. Fast deposits, instant withdrawals, 24/7 support. Get your betting ID now!"
        keywords="reddy anna live, online betting india, cricket betting, live casino, teen patti, sports betting, casino games, betting id, online id, fast withdrawal, instant deposit, reddy anna book, reddy anna login, reddy anna app, cricbet99, gold365, reddyannabook, instagram id, cricket id, casino id, fast deposit, auto deposit, auto withdrawal, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted"
        canonical="https://www.reddyannalive.in/"
        robots="index,follow"
        og={{
          title: "Reddy Anna Live - Best Online Sports Betting & Casino Platform in India",
          description: "Join Reddy Anna Live for the ultimate online betting experience in India. Live cricket betting, football, tennis, casino games, teen patti, and more. Fast deposits, instant withdrawals, 24/7 support.",
          type: "website",
          url: "https://www.reddyannalive.in/",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Reddy Anna Live - Best Online Sports Betting & Casino Platform in India",
          description: "Join Reddy Anna Live for the ultimate online betting experience in India. Live cricket betting, football, tennis, casino games, teen patti, and more.",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Reddy Anna Live",
            url: "https://www.reddyannalive.in/",
            description: "Best online sports betting and casino platform in India. Live cricket betting, football, tennis, casino games, teen patti, and more.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.reddyannalive.in/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name: ["Home", "Sports Betting", "Live Casino", "Live Matches", "About Us", "Contact Us"],
            url: [
              "https://www.reddyannalive.in/",
              "https://www.reddyannalive.in/#sports",
              "https://www.reddyannalive.in/#casino",
              "https://www.reddyannalive.in/#live-matches",
              "https://www.reddyannalive.in/about-us",
              "https://www.reddyannalive.in/contact-us",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Online Sports Betting",
            description: "Live cricket betting, football betting, tennis betting, and more sports betting options",
            provider: {
              "@type": "Organization",
              name: "Reddy Anna Live"
            },
            areaServed: "India",
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://api.whatsapp.com/send?phone=918890051287"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Online Casino Games",
            description: "Live casino games, teen patti, andar bahar, roulette, poker, and more casino games",
            provider: {
              "@type": "Organization",
              name: "Reddy Anna Live"
            },
            areaServed: "India",
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://api.whatsapp.com/send?phone=918890051287"
            }
          }
        ]}
      />
      <Hero />
      <Suspense fallback={null}>
        <SportsGrid />
      </Suspense>
      <Suspense fallback={null}>
        <LiveMatches />
      </Suspense>
      <Suspense fallback={null}>
        <LiveScores />
      </Suspense>
      <Suspense fallback={null}>
        <CasinoSection />
      </Suspense>
      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={null}>
        <BlogSection />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      {/* SEO Keywords (hidden for search engines) */}
      <div style={{ display: "none" }}>
        cricbet99, lotus365, mahadev book, mahakal book, reddy anna app, reddy
        anna betting, reddy anna book, reddy anna book 247, reddy anna book live
        login, reddy anna book login, reddy anna club, reddy anna club live,
        reddy anna customer care number, reddy anna live, reddy anna live
        casino, reddy anna live cricket, reddy anna live login, reddy anna live
        score, reddy anna live today, reddy anna login, reddy anna online, reddy
        anna online book id, reddy anna website, reddy anna whatsapp number,
        reddybook, reddy anna, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, gold365, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted, reddyannabook, instagram id
      </div>
    </div>
  );
};

export default Index;
