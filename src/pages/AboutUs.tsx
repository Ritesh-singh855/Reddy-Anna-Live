import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openWhatsApp } from "@/utils/whatsapp";

import { SEO } from "@/components/SEO";

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="About Reddy Anna Live - India's Premier Online Betting Platform Since 2010"
        description="Discover Reddy Anna Live's journey since 2010. India's most trusted online sports betting and casino platform with 200+ branches, 10L+ happy customers, and 24/7 support. Fast deposits, instant withdrawals, and secure betting experience."
        keywords="reddy anna live about, reddy anna history, online betting india, trusted betting platform, cricket betting platform, casino platform india, fantasy cricket, teen patti online, andar bahar, live casino games, sports betting india, betting platform since 2010, cricbet99, gold365, reddyannabook, instagram id, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted"
        canonical="https://www.reddyannalive.in/about-us"
        robots="index,follow"
        og={{
          title: "About Reddy Anna Live - India's Premier Online Betting Platform Since 2010",
          description: "Discover Reddy Anna Live's journey since 2010. India's most trusted online sports betting and casino platform with 200+ branches, 10L+ happy customers, and 24/7 support.",
          type: "website",
          url: "https://www.reddyannalive.in/about-us",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        twitter={{
          card: "summary_large_image",
          title: "About Reddy Anna Live - India's Premier Online Betting Platform Since 2010",
          description: "Discover Reddy Anna Live's journey since 2010. India's most trusted online sports betting and casino platform with 200+ branches, 10L+ happy customers.",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.reddyannalive.in/" },
              { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.reddyannalive.in/about-us" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About Us - Reddy Anna Live",
            url: "https://www.reddyannalive.in/about-us",
            description: "Learn about Reddy Anna Live: India's trusted online sports betting and live casino platform since 2010.",
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Reddy Anna Live",
            url: "https://www.reddyannalive.in/",
            logo: "https://www.reddyannalive.in/images/logo.webp",
            description: "India's premier online sports betting and casino platform since 2010",
            foundingDate: "2010",
            numberOfEmployees: "200+",
            areaServed: "India",
            serviceType: ["Online Sports Betting", "Live Casino Games", "Fantasy Cricket", "Indian Card Games"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8890051287",
              contactType: "customer service",
              availableLanguage: ["English", "Hindi", "Telugu", "Tamil", "Bengali"]
            }
          }
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About US
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-yellow-400">
                About Reddy Anna Live
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  <strong>Reddy Anna Live</strong> has been India's most trusted name in online sports betting and casino gaming since 2010. With over 13 years of experience, we have established ourselves as the premier platform for fantasy cricket, live cricket betting, and traditional Indian card games.
                </p>
                <p>
                  Our platform serves millions of users across India with a comprehensive network of 200+ authorized branches. We specialize in providing secure, fast, and reliable online betting services with 24/7 customer support and instant withdrawal facilities.
                </p>
                <p>
                  <strong>Why Choose Reddy Anna Live?</strong> We offer the most competitive odds, fastest payouts, and the widest variety of betting options. From IPL and international cricket matches to live casino games like Teen Patti, Andar Bahar, and Roulette, we have everything a betting enthusiast needs.
                </p>
                <p>
                  Getting started is simple - create your Reddy Anna Online ID in just 2 minutes. No KYC required, no lengthy documentation process. Our demo account feature allows you to practice and understand the games before playing with real money.
                </p>
                <p>
                  <strong>Security & Trust:</strong> We prioritize the security of our users' funds and personal information. Our platform uses advanced encryption technology and follows strict security protocols to ensure a safe betting environment for all our customers.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  className="h-11 rounded-md px-8 bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
                  onClick={() => openWhatsApp()}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Get WhatsApp ID
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Features Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gray-900 border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">🏏</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Fantasy Cricket
                    </h3>
                    <p className="text-gray-400">
                      Best fantasy cricket platform with live matches and
                      real-time updates.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      24/7 Services
                    </h3>
                    <p className="text-gray-400">
                      Round the clock withdrawal and refill services for your
                      convenience.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">💰</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Affordable ID
                    </h3>
                    <p className="text-gray-400">
                      Get your Online ID with instant approval.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">🎮</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Demo Account
                    </h3>
                    <p className="text-gray-400">
                      Try our platform with demo account before playing with
                      real money.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Stats */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Our Numbers
                </h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">
                      13+
                    </div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">
                      200+
                    </div>
                    <div className="text-gray-400">Branches</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">
                      10L+
                    </div>
                    <div className="text-gray-400">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">
                      24/7
                    </div>
                    <div className="text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏏</div>
              <h3 className="text-xl font-semibold mb-3">
                Live Cricket Betting
              </h3>
              <p className="text-gray-400">
                Experience the thrill of live cricket betting with real-time odds, instant payouts, and comprehensive coverage of IPL, international matches, and domestic tournaments. Our <a href="/sports" className="text-yellow-400 hover:text-yellow-300 underline">cricket betting platform</a> offers in-play betting, match predictions, and detailed statistics to help you make informed decisions. Check out our <a href="/live-matches" className="text-yellow-400 hover:text-yellow-300 underline">live matches</a> section for current betting opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎰</div>
              <h3 className="text-xl font-semibold mb-3">Live Casino Games</h3>
              <p className="text-gray-400">
                Enjoy premium casino games with live dealers, including Roulette, Blackjack, Baccarat, and Dragon Tiger with HD streaming and real-time interaction. Our <a href="/casino" className="text-yellow-400 hover:text-yellow-300 underline">live casino</a> features professional dealers, multiple camera angles, and interactive chat functionality for an authentic casino experience. Explore our full range of <a href="/casino" className="text-yellow-400 hover:text-yellow-300 underline">casino games</a> for endless entertainment.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🃏</div>
              <h3 className="text-xl font-semibold mb-3">Indian Card Games</h3>
              <p className="text-gray-400">
                Play traditional Indian card games like Teen Patti, Andar Bahar, 7 Up 7 Down, and more with authentic gameplay and cultural authenticity. Our Indian card games section features multiple variants, live tournaments, and special events that celebrate the rich tradition of Indian card gaming.
              </p>
            </div>
          </div>
          
          {/* Additional Services */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">⚽</div>
              <h4 className="text-lg font-semibold mb-2">Football Betting</h4>
              <p className="text-gray-400 text-sm">
                Comprehensive football betting covering Premier League, La Liga, Serie A, and international tournaments with live betting options.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎾</div>
              <h4 className="text-lg font-semibold mb-2">Tennis Betting</h4>
              <p className="text-gray-400 text-sm">
                Professional tennis betting with coverage of Grand Slams, ATP, WTA tours, and Challenger events with detailed match analysis.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏇</div>
              <h4 className="text-lg font-semibold mb-2">Horse Racing</h4>
              <p className="text-gray-400 text-sm">
                Exciting horse racing betting with live race coverage, detailed form guides, and expert tips for both Indian and international races.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg font-semibold mb-2">Binary Options</h4>
              <p className="text-gray-400 text-sm">
                Simple and exciting binary options trading with short-term predictions on various markets and quick payout options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Reddy Anna Live Stands Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Instant Withdrawals</h3>
              <p className="text-gray-400">
                Get your winnings instantly with our lightning-fast withdrawal system. No waiting, no delays.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">100% Secure</h3>
              <p className="text-gray-400">
                Advanced encryption and security protocols ensure your data and funds are always protected.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Mobile Optimized</h3>
              <p className="text-gray-400">
                Seamless betting experience on all devices with our responsive and user-friendly interface.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Best Odds</h3>
              <p className="text-gray-400">
                Competitive odds and multiple betting options to maximize your winning potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Coverage Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sports & Events Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏏</div>
              <h4 className="font-semibold">Cricket</h4>
              <p className="text-sm text-gray-400">IPL, BBL, CWC, PSL</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚽</div>
              <h4 className="font-semibold">Football</h4>
              <p className="text-sm text-gray-400">Premier League, La Liga</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎾</div>
              <h4 className="font-semibold">Tennis</h4>
              <p className="text-sm text-gray-400">Grand Slams, ATP, WTA</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏀</div>
              <h4 className="font-semibold">Basketball</h4>
              <p className="text-sm text-gray-400">NBA, EuroLeague</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏏</div>
              <h4 className="font-semibold">Kabaddi</h4>
              <p className="text-sm text-gray-400">PKL, Pro Kabaddi</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚽</div>
              <h4 className="font-semibold">ISL</h4>
              <p className="text-sm text-gray-400">Indian Super League</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-red-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white font-medium">
            Disclaimer:- This Website is only for 18+ users. Please leave the
            website immediately if online betting is not permitted in your
            region. Be aware of fraudsters, we only deal via WhatsApp.
          </p>
        </div>
      </section>

      {/* Copyright */}
      <section className="py-6 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} Reddy Anna Live. All Rights
            Reserved.
          </p>
        </div>
      </section>
      {/* SEO Keywords (hidden for search engines) */}
      <div style={{ display: "none" }}>
        cricbet99, lotus365, mahadev book, mahakal book, reddy anna app, reddy
        anna betting, reddy anna book, reddy anna book 247, reddy anna book live
        login, reddy anna book login, reddy anna club, reddy anna club live,
        reddy anna customer care number, reddy anna live, reddy anna live
        casino, reddy anna live cricket, reddy anna live login, reddy anna live
        score, reddy anna live today, reddy anna login, reddy anna online, reddy
        anna online book id, reddy anna website, reddy anna whatsapp number,
        reddybook, reddy anna, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, gold365, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted, reddyannabook, instagram id, cricbet99, gold365
      </div>
    </div>
  );
};
