import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openWhatsApp } from "@/utils/whatsapp";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";

const sports = [
  {
    name: "Cricket",
    icon: "🏏",
    tournaments: ["IPL", "BBL", "CWC", "PSL", "T20 World Cup", "Test Matches"],
    description: "Bet on live cricket matches with real-time odds and comprehensive coverage"
  },
  {
    name: "Football",
    icon: "⚽",
    tournaments: ["Premier League", "La Liga", "Champions League", "ISL", "World Cup"],
    description: "Experience the excitement of football betting with live matches and instant updates"
  },
  {
    name: "Tennis",
    icon: "🎾",
    tournaments: ["Wimbledon", "US Open", "French Open", "Australian Open", "ATP", "WTA"],
    description: "Bet on Grand Slams and professional tennis tournaments worldwide"
  },
  {
    name: "Basketball",
    icon: "🏀",
    tournaments: ["NBA", "EuroLeague", "NCAA", "FIBA World Cup", "WNBA"],
    description: "Live basketball betting with real-time scores and comprehensive statistics"
  },
  {
    name: "Kabaddi",
    icon: "🤼",
    tournaments: ["PKL", "Pro Kabaddi", "Asian Games", "World Cup"],
    description: "Traditional Indian sport with live betting and authentic gameplay"
  },
  {
    name: "Badminton",
    icon: "🏸",
    tournaments: ["BWF World Championships", "Olympics", "All England", "India Open"],
    description: "Professional badminton tournaments with live betting options"
  }
];

const bettingFeatures = [
  {
    icon: "📊",
    title: "Live Betting",
    description: "Place bets on live matches with real-time odds and instant updates"
  },
  {
    icon: "📈",
    title: "Best Odds",
    description: "Get the most competitive odds in the market for maximum returns"
  },
  {
    icon: "⚡",
    title: "Instant Payouts",
    description: "Receive your winnings instantly with our fast withdrawal system"
  },
  {
    icon: "📱",
    title: "Mobile Betting",
    description: "Bet on the go with our mobile-optimized platform"
  },
  {
    icon: "🎯",
    title: "Multiple Markets",
    description: "Choose from hundreds of betting markets for each match"
  },
  {
    icon: "🔒",
    title: "Secure Platform",
    description: "Advanced security measures to protect your funds and personal data"
  }
];

const popularLeagues = [
  {
    name: "Indian Premier League (IPL)",
    sport: "Cricket",
    season: "March - May",
    description: "India's premier T20 cricket league with 10 teams and world-class players"
  },
  {
    name: "Premier League",
    sport: "Football",
    season: "August - May",
    description: "England's top football league featuring the world's best clubs"
  },
  {
    name: "Pro Kabaddi League (PKL)",
    sport: "Kabaddi",
    season: "October - February",
    description: "India's professional kabaddi league with 12 teams"
  },
  {
    name: "NBA",
    sport: "Basketball",
    season: "October - June",
    description: "National Basketball Association with 30 teams from USA and Canada"
  },
  {
    name: "La Liga",
    sport: "Football",
    season: "August - May",
    description: "Spain's top football league featuring Real Madrid and Barcelona"
  },
  {
    name: "Wimbledon",
    sport: "Tennis",
    season: "June - July",
    description: "The oldest and most prestigious tennis tournament in the world"
  }
];

export const Sports = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Sports Betting - Cricket, Football, Tennis | Reddy Anna Live"
        description="Bet on live sports at Reddy Anna Live. Cricket (IPL, BBL), Football (Premier League, La Liga), Tennis (Grand Slams), Basketball (NBA), and more with best odds and instant payouts."
        keywords="sports betting, cricket betting, football betting, tennis betting, ipl betting, premier league betting, live sports betting, online sports betting india, sports odds, cricbet99, gold365, reddyannabook, instagram id, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted"
        canonical="https://www.reddyannalive.in/sports"
        robots="index,follow"
        og={{
          title: "Sports Betting - Cricket, Football, Tennis | Reddy Anna Live",
          description: "Bet on live sports at Reddy Anna Live. Cricket (IPL, BBL), Football (Premier League, La Liga), Tennis (Grand Slams), Basketball (NBA), and more with best odds and instant payouts.",
          type: "website",
          url: "https://www.reddyannalive.in/sports",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Sports Betting - Cricket, Football, Tennis | Reddy Anna Live",
          description: "Bet on live sports at Reddy Anna Live. Cricket (IPL, BBL), Football (Premier League, La Liga), Tennis (Grand Slams), Basketball (NBA), and more with best odds and instant payouts.",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.reddyannalive.in/" },
              { "@type": "ListItem", position: 2, name: "Sports Betting", item: "https://www.reddyannalive.in/sports" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Sports Betting - Reddy Anna Live",
            url: "https://www.reddyannalive.in/sports",
            description: "Live sports betting at Reddy Anna Live with comprehensive coverage and best odds.",
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Sports Betting",
            description: "Live sports betting with comprehensive coverage and best odds",
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sports Betting at Reddy Anna Live
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Bet on your favorite sports with live odds, real-time updates, and instant payouts at Reddy Anna Live. 
              From cricket and football to tennis and basketball - Reddy Anna Live covers it all.
            </p>
            <Button
              className="h-11 rounded-md px-8 bg-white text-black hover:bg-gray-100 font-semibold"
              onClick={() => openWhatsApp("betting")}
            >
              Start Betting Now
            </Button>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sports We Cover at Reddy Anna Live</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sports.map((sport, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-yellow-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{sport.icon}</div>
                    <h3 className="text-2xl font-semibold text-white">{sport.name}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{sport.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-yellow-400 font-semibold">Popular Tournaments:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sport.tournaments.map((tournament, tournamentIndex) => (
                        <span key={tournamentIndex} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm">
                          {tournament}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Betting Features */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Reddy Anna Live Sports Betting?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bettingFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Leagues */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Leagues & Tournaments at Reddy Anna Live</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularLeagues.map((league, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-yellow-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{league.name}</h3>
                    <span className="bg-yellow-400 text-black px-2 py-1 rounded text-sm font-semibold">
                      {league.sport}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">{league.description}</p>
                  <div className="text-yellow-400 text-sm">
                    <strong>Season:</strong> {league.season}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Betting Markets */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Betting Markets at Reddy Anna Live</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Match Winner</h3>
              <p className="text-gray-400">Bet on which team or player will win the match</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Over/Under</h3>
              <p className="text-gray-400">Bet on total goals, runs, or points scored</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚽</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Handicap</h3>
              <p className="text-gray-400">Bet with point spreads to level the playing field</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Live Betting</h3>
              <p className="text-gray-400">Place bets during live matches with dynamic odds</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Bet Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Start Sports Betting with Reddy Anna Live</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Create Account</h3>
              <p className="text-gray-400">Contact us via WhatsApp to create your Reddy Anna Live account</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Choose Sport</h3>
              <p className="text-gray-400">Select from cricket, football, tennis, basketball, and more</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Place Bet</h3>
              <p className="text-gray-400">Choose your betting market and place your bet</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">4️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Win & Withdraw</h3>
              <p className="text-gray-400">Get instant payouts for your winning bets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reddy Anna Live Sports Benefits */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Reddy Anna Live for Sports Betting?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Best Odds</h3>
              <p className="text-gray-400">
                Get the best sports betting odds with Reddy Anna Live. 
                Reddy Anna Live offers competitive odds for all major sports events.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Fast Payouts</h3>
              <p className="text-gray-400">
                Receive instant payouts with Reddy Anna Live. 
                Reddy Anna Live ensures quick and secure withdrawal processing.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Secure Platform</h3>
              <p className="text-gray-400">
                Your sports betting is secure with Reddy Anna Live. 
                Reddy Anna Live uses advanced security measures for your protection.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Mobile Betting</h3>
              <p className="text-gray-400">
                Bet on sports from anywhere with Reddy Anna Live mobile platform. 
                Reddy Anna Live provides seamless mobile betting experience.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Live Betting</h3>
              <p className="text-gray-400">
                Enjoy live sports betting with Reddy Anna Live. 
                Reddy Anna Live offers real-time betting on live matches.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Expert Support</h3>
              <p className="text-gray-400">
                Get expert support for sports betting with Reddy Anna Live. 
                Reddy Anna Live team is available 24/7 for assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reddy Anna Live Sports Coverage */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Reddy Anna Live Sports Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Cricket Betting at Reddy Anna Live</h3>
              <p className="text-gray-400 mb-4">
                Experience the best cricket betting with Reddy Anna Live. From IPL to international matches, 
                Reddy Anna Live covers all major cricket tournaments. Bet on live cricket with Reddy Anna Live's advanced platform.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• IPL Betting at Reddy Anna Live</li>
                <li>• International Cricket with Reddy Anna Live</li>
                <li>• T20 World Cup Betting at Reddy Anna Live</li>
                <li>• Live Cricket Betting with Reddy Anna Live</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Football Betting at Reddy Anna Live</h3>
              <p className="text-gray-400 mb-4">
                Enjoy live football betting with Reddy Anna Live. Premier League, La Liga, and more 
                available at Reddy Anna Live. Football betting made easy with Reddy Anna Live.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Premier League Betting at Reddy Anna Live</li>
                <li>• Champions League with Reddy Anna Live</li>
                <li>• World Cup Betting at Reddy Anna Live</li>
                <li>• Live Football Betting with Reddy Anna Live</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Tennis Betting at Reddy Anna Live</h3>
              <p className="text-gray-400 mb-4">
                Watch live tennis matches with Reddy Anna Live. Grand Slams, ATP, and WTA tours 
                available at Reddy Anna Live. Live tennis betting with Reddy Anna Live.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Wimbledon Betting at Reddy Anna Live</li>
                <li>• US Open Betting with Reddy Anna Live</li>
                <li>• French Open at Reddy Anna Live</li>
                <li>• Live Tennis Betting with Reddy Anna Live</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Basketball Betting at Reddy Anna Live</h3>
              <p className="text-gray-400 mb-4">
                Experience live basketball betting with Reddy Anna Live. NBA, EuroLeague, and more 
                available at Reddy Anna Live. Live basketball betting with Reddy Anna Live.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• NBA Betting at Reddy Anna Live</li>
                <li>• EuroLeague with Reddy Anna Live</li>
                <li>• College Basketball at Reddy Anna Live</li>
                <li>• Live Basketball Betting with Reddy Anna Live</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reddy Anna Live Sports Features */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Reddy Anna Live Sports Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Live Odds at Reddy Anna Live</h3>
              <p className="text-gray-400">
                Get real-time odds updates with Reddy Anna Live. 
                Reddy Anna Live provides the most accurate live odds for all sports.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Instant Betting with Reddy Anna Live</h3>
              <p className="text-gray-400">
                Place bets instantly during live matches with Reddy Anna Live. 
                Reddy Anna Live ensures fast and secure sports betting.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Mobile Sports Betting at Reddy Anna Live</h3>
              <p className="text-gray-400">
                Bet on sports from your mobile with Reddy Anna Live. 
                Reddy Anna Live mobile platform is optimized for sports betting.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Live Statistics at Reddy Anna Live</h3>
              <p className="text-gray-400">
                Access comprehensive live statistics with Reddy Anna Live. 
                Reddy Anna Live provides detailed match data for better betting decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reddy Anna Live Sports Summary */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Reddy Anna Live Sports Betting Experience</h2>
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Why Choose Reddy Anna Live for Sports?</h3>
                <p className="text-gray-400 mb-4">
                  Reddy Anna Live is the premier destination for sports betting and live coverage. 
                  With Reddy Anna Live, you get access to the best sports events with competitive odds. 
                  Reddy Anna Live ensures that you never miss any action with our comprehensive sports coverage.
                </p>
                <p className="text-gray-400 mb-4">
                  Our Reddy Anna Live platform offers real-time odds, instant betting, and live statistics. 
                  Reddy Anna Live provides a seamless experience for all sports enthusiasts. 
                  Trust Reddy Anna Live for all your sports betting needs.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• HD Live Streaming at Reddy Anna Live</li>
                  <li>• Real-time Odds with Reddy Anna Live</li>
                  <li>• Instant Betting at Reddy Anna Live</li>
                  <li>• Live Statistics from Reddy Anna Live</li>
                  <li>• 24/7 Support at Reddy Anna Live</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Reddy Anna Live Sports Benefits</h3>
                <p className="text-gray-400 mb-4">
                  Experience the ultimate sports betting with Reddy Anna Live. Reddy Anna Live 
                  offers the most comprehensive sports coverage with advanced features. 
                  Join Reddy Anna Live today for the best sports betting experience.
                </p>
                <p className="text-gray-400 mb-4">
                  Reddy Anna Live provides secure, fast, and reliable sports betting services. 
                  With Reddy Anna Live, you can bet on sports with confidence. 
                  Reddy Anna Live is your trusted partner for online sports betting.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Secure Sports Betting with Reddy Anna Live</li>
                  <li>• Fast Withdrawals at Reddy Anna Live</li>
                  <li>• Multiple Payment Options at Reddy Anna Live</li>
                  <li>• Live Chat Support at Reddy Anna Live</li>
                  <li>• Mobile App from Reddy Anna Live</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Sports Betting with Reddy Anna Live?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of sports enthusiasts betting on their favorite teams and players 
            with the best odds and instant payouts at Reddy Anna Live.
          </p>
          <Button
            className="h-11 rounded-md px-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
            onClick={() => openWhatsApp("betting")}
          >
            Start Betting Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* SEO Keywords (hidden for search engines) */}
      <div style={{ display: "none" }}>
        sports betting, cricket betting, football betting, tennis betting, ipl betting, premier league betting, 
        live sports betting, online sports betting india, sports odds, cricket odds, football odds, tennis odds, 
        basketball betting, kabaddi betting, badminton betting, live betting, sports markets, betting markets, 
        sportsbook, online sportsbook, sports betting platform, cricket betting india, football betting india,
        cricbet99, gold365, reddyannabook, instagram id, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted
      </div>
    </div>
  );
};
