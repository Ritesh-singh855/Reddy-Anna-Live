import React, { Suspense, lazy } from "react";
import { Hero } from "@/components/Hero";
import { SEO } from "@/components/SEO";

const SportsGrid = lazy(() => import("@/components/SportsGrid").then(m => ({ default: m.SportsGrid })));
const LiveMatches = lazy(() => import("@/components/LiveMatches").then(m => ({ default: m.LiveMatches })));
const CasinoSection = lazy(() => import("@/components/CasinoSection").then(m => ({ default: m.CasinoSection })));
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Bet Live: Sports & Casino Offers"
        description="Join Reddy Anna Live for the best online sports betting experience in India. Enjoy live casino games, instant payouts, secure transactions, and exclusive offers for new users. Bet on cricket, football, and more!"
        canonical="https://www.reddyannalive.in/"
        robots="index,follow"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Reddy Anna Live",
            url: "https://www.reddyannalive.in/",
            logo: "https://www.reddyannalive.in/images/reddy-anna-live-og.png",
            sameAs: [
              "https://www.instagram.com/",
              "https://www.facebook.com/",
              "https://x.com/",
              "https://www.youtube.com/",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                availableLanguage: ["en"],
                areaServed: "IN",
                url: "https://api.whatsapp.com/send?phone=918890051287",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Reddy Anna Live",
            url: "https://www.reddyannalive.in/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.reddyannalive.in/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name: ["Home", "About Us", "Contact Us", "Privacy Policy", "Terms and Conditions"],
            url: [
              "https://www.reddyannalive.in/",
              "https://www.reddyannalive.in/about-us",
              "https://www.reddyannalive.in/contact-us",
              "https://www.reddyannalive.in/privacyPolicy",
              "https://www.reddyannalive.in/termAndCondition",
            ],
          },
        ]}
      />
      <h1 style={{ display: "none" }}>
        Reddy Anna Live - Best Online Betting Platform in India
      </h1>
      <Hero />
      <Suspense fallback={null}>
        <SportsGrid />
      </Suspense>
      <Suspense fallback={null}>
        <LiveMatches />
      </Suspense>
      <Suspense fallback={null}>
        <CasinoSection />
      </Suspense>
      <Suspense fallback={null}>
        <AboutSection />
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
