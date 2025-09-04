import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openWhatsApp } from "@/utils/whatsapp";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";

const casinoGames = [
  {
    name: "Teen Patti",
    description: "Traditional Indian card game with live dealers and real players",
    image: "🃏",
    features: ["Live Dealers", "Real Players", "Multiple Variants", "High Stakes"]
  },
  {
    name: "Andar Bahar",
    description: "Classic Indian card game with simple rules and exciting gameplay",
    image: "🎴",
    features: ["Simple Rules", "Fast Paced", "Live Streaming", "Multiple Tables"]
  },
  {
    name: "7 Up 7 Down",
    description: "Popular dice game with instant results and multiple betting options",
    image: "🎲",
    features: ["Instant Results", "Multiple Bets", "Live Dice", "High Payouts"]
  },
  {
    name: "Roulette",
    description: "European and American roulette with live dealers and HD streaming",
    image: "🎰",
    features: ["Live Dealers", "HD Streaming", "Multiple Variants", "Real-time Chat"]
  },
  {
    name: "Blackjack",
    description: "Classic card game with professional dealers and multiple tables",
    image: "🃏",
    features: ["Professional Dealers", "Multiple Tables", "Side Bets", "Live Chat"]
  },
  {
    name: "Baccarat",
    description: "Elegant card game with live dealers and VIP tables",
    image: "🎭",
    features: ["VIP Tables", "Live Dealers", "High Limits", "Professional Service"]
  },
  {
    name: "Dragon Tiger",
    description: "Fast-paced card game with simple betting options",
    image: "🐉",
    features: ["Fast Paced", "Simple Rules", "Live Dealers", "Quick Results"]
  },
  {
    name: "Casino War",
    description: "Simple card game with high winning potential",
    image: "⚔️",
    features: ["Simple Gameplay", "High Odds", "Live Dealers", "Multiple Bets"]
  }
];

const liveCasinoFeatures = [
  {
    icon: "📺",
    title: "HD Live Streaming",
    description: "Crystal clear HD video streaming for an immersive gaming experience"
  },
  {
    icon: "👨‍💼",
    title: "Professional Dealers",
    description: "Trained and professional dealers for authentic casino atmosphere"
  },
  {
    icon: "💬",
    title: "Live Chat",
    description: "Interact with dealers and other players through live chat feature"
  },
  {
    icon: "🎯",
    title: "Multiple Tables",
    description: "Choose from various tables with different betting limits and game variants"
  },
  {
    icon: "⚡",
    title: "Instant Results",
    description: "Get instant results and payouts for all your casino games"
  },
  {
    icon: "🔒",
    title: "Secure Gaming",
    description: "Advanced security measures to ensure fair play and secure transactions"
  }
];

export const Casino = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Live Casino Games - Teen Patti, Andar Bahar, Roulette | Reddy Anna Live"
        description="Play live casino games at Reddy Anna Live. Enjoy Teen Patti, Andar Bahar, Roulette, Blackjack, Baccarat, and more with live dealers, HD streaming, and instant payouts."
        keywords="live casino games, teen patti online, andar bahar, roulette, blackjack, baccarat, live dealers, casino betting, online casino india, live casino streaming, cricbet99, gold365, reddyannabook, instagram id, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted"
        canonical="https://www.reddyannalive.in/casino"
        robots="index,follow"
        og={{
          title: "Live Casino Games - Teen Patti, Andar Bahar, Roulette | Reddy Anna Live",
          description: "Play live casino games at Reddy Anna Live. Enjoy Teen Patti, Andar Bahar, Roulette, Blackjack, Baccarat, and more with live dealers, HD streaming, and instant payouts.",
          type: "website",
          url: "https://www.reddyannalive.in/casino",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Live Casino Games - Teen Patti, Andar Bahar, Roulette | Reddy Anna Live",
          description: "Play live casino games at Reddy Anna Live. Enjoy Teen Patti, Andar Bahar, Roulette, Blackjack, Baccarat, and more with live dealers, HD streaming, and instant payouts.",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.reddyannalive.in/" },
              { "@type": "ListItem", position: 2, name: "Casino Games", item: "https://www.reddyannalive.in/casino" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Casino Games - Reddy Anna Live",
            url: "https://www.reddyannalive.in/casino",
            description: "Live casino games at Reddy Anna Live with professional dealers and HD streaming.",
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Live Casino Games",
            description: "Professional live casino games with HD streaming and real dealers",
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
              Live Casino Games
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experience the thrill of <strong>Reddy Anna Live</strong> casino gaming with professional dealers, HD streaming, 
              and authentic casino atmosphere. <strong>Reddy Anna Live</strong> offers Teen Patti, Andar Bahar, Roulette, and more. 
              <strong>Reddy Anna Live</strong> provides the best live casino experience in India.
            </p>
            <Button
              className="h-11 rounded-md px-8 bg-white text-black hover:bg-gray-100 font-semibold"
              onClick={() => openWhatsApp("betting")}
            >
              Start Playing Now
            </Button>
          </div>
        </div>
      </section>

      {/* Casino Games Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our <strong>Reddy Anna Live</strong> Casino Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {casinoGames.map((game, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-yellow-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{game.image}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{game.name}</h3>
                  <p className="text-gray-400 mb-4">{game.description}</p>
                  <div className="space-y-2">
                    {game.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-yellow-400">
                        ✓ {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Casino Features */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose <strong>Reddy Anna Live</strong> Casino?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveCasinoFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">{feature.title}</h3>
                <p className="text-gray-400"><strong>Reddy Anna Live</strong> {feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12"><strong>Reddy Anna Live</strong> Game Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🃏</div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Indian Card Games</h3>
              <p className="text-gray-400 mb-6">
                <strong>Reddy Anna Live</strong> traditional Indian card games like Teen Patti, Andar Bahar, and 7 Up 7 Down 
                with authentic gameplay and cultural elements. <strong>Reddy Anna Live</strong> offers the most authentic Indian card gaming experience.
              </p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Teen Patti (3 Patti)</li>
                <li>• Andar Bahar</li>
                <li>• 7 Up 7 Down</li>
                <li>• Muflis Teen Patti</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎰</div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Classic Casino</h3>
              <p className="text-gray-400 mb-6">
                <strong>Reddy Anna Live</strong> traditional casino games with live dealers including Roulette, Blackjack, 
                and Baccarat for an authentic casino experience. <strong>Reddy Anna Live</strong> brings you the best classic casino games.
              </p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• European Roulette</li>
                <li>• American Roulette</li>
                <li>• Blackjack</li>
                <li>• Baccarat</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎲</div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Dice & Specialty</h3>
              <p className="text-gray-400 mb-6">
                <strong>Reddy Anna Live</strong> fast-paced dice games and specialty casino games with instant results 
                and exciting betting options. <strong>Reddy Anna Live</strong> offers the most exciting dice and specialty games.
              </p>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Dragon Tiger</li>
                <li>• Casino War</li>
                <li>• Hi-Lo</li>
                <li>• Coin Toss</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Play <strong>Reddy Anna Live</strong> Casino Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Create Account</h3>
              <p className="text-gray-400">Contact us via WhatsApp to create your <strong>Reddy Anna Live</strong> account</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Choose Game</h3>
              <p className="text-gray-400">Select from <strong>Reddy Anna Live</strong> wide range of live casino games</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Place Bets</h3>
              <p className="text-gray-400">Place your bets and watch the <strong>Reddy Anna Live</strong> action unfold</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">4️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Win & Withdraw</h3>
              <p className="text-gray-400">Get instant payouts for your <strong>Reddy Anna Live</strong> winnings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Play <strong>Reddy Anna Live</strong> Casino Games?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of players enjoying <strong>Reddy Anna Live</strong> casino games with professional dealers, 
            HD streaming, and instant payouts. <strong>Reddy Anna Live</strong> offers the best casino gaming experience.
          </p>
          <Button
            className="h-11 rounded-md px-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
            onClick={() => openWhatsApp("betting")}
          >
            Start Playing Now
          </Button>
        </div>
      </section>

      {/* Casino Benefits Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why <strong>Reddy Anna Live</strong> Casino is the Best Choice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Best Casino Odds</h3>
              <p className="text-gray-400">
                <strong>Reddy Anna Live</strong> offers the best casino odds in the market. 
                <strong>Reddy Anna Live</strong> ensures maximum returns on your casino bets.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Instant Payouts</h3>
              <p className="text-gray-400">
                <strong>Reddy Anna Live</strong> provides instant payouts for all casino winnings. 
                <strong>Reddy Anna Live</strong> ensures you get your money immediately.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Secure Gaming</h3>
              <p className="text-gray-400">
                <strong>Reddy Anna Live</strong> uses advanced security for all casino games. 
                <strong>Reddy Anna Live</strong> protects your funds and personal information.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Mobile Casino</h3>
              <p className="text-gray-400">
                <strong>Reddy Anna Live</strong> casino works perfectly on all devices. 
                <strong>Reddy Anna Live</strong> provides seamless mobile casino experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casino Games Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular <strong>Reddy Anna Live</strong> Casino Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Teen Patti at <strong>Reddy Anna Live</strong></h3>
              <p className="text-gray-300 mb-4">
                <strong>Reddy Anna Live</strong> offers the most authentic Teen Patti experience online. 
                <strong>Reddy Anna Live</strong> Teen Patti features live dealers, real players, and multiple variants. 
                <strong>Reddy Anna Live</strong> brings you the traditional Indian card game with modern technology.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• <strong>Reddy Anna Live</strong> Live Teen Patti with real dealers</li>
                <li>• <strong>Reddy Anna Live</strong> Multiple Teen Patti variants</li>
                <li>• <strong>Reddy Anna Live</strong> High stakes Teen Patti tables</li>
                <li>• <strong>Reddy Anna Live</strong> 24/7 Teen Patti availability</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Andar Bahar at <strong>Reddy Anna Live</strong></h3>
              <p className="text-gray-300 mb-4">
                <strong>Reddy Anna Live</strong> Andar Bahar is the most popular card game in India. 
                <strong>Reddy Anna Live</strong> offers Andar Bahar with live streaming and instant results. 
                <strong>Reddy Anna Live</strong> Andar Bahar provides authentic gameplay with cultural elements.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• <strong>Reddy Anna Live</strong> Live Andar Bahar streaming</li>
                <li>• <strong>Reddy Anna Live</strong> Instant Andar Bahar results</li>
                <li>• <strong>Reddy Anna Live</strong> Multiple Andar Bahar tables</li>
                <li>• <strong>Reddy Anna Live</strong> Authentic Andar Bahar experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Start Playing at <strong>Reddy Anna Live</strong> Casino Today!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            <strong>Reddy Anna Live</strong> casino offers the best gaming experience in India. 
            <strong>Reddy Anna Live</strong> provides live dealers, HD streaming, and instant payouts. 
            Join thousands of players who trust <strong>Reddy Anna Live</strong> for their casino gaming needs. 
            <strong>Reddy Anna Live</strong> ensures secure and fair gaming for all players.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Why <strong>Reddy Anna Live</strong> Casino?</h3>
              <p className="text-gray-300 text-sm">
                <strong>Reddy Anna Live</strong> casino offers the best odds and instant payouts. 
                <strong>Reddy Anna Live</strong> provides 24/7 customer support for all casino players.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">What <strong>Reddy Anna Live</strong> Offers</h3>
              <p className="text-gray-300 text-sm">
                <strong>Reddy Anna Live</strong> offers Teen Patti, Andar Bahar, Roulette, and more. 
                <strong>Reddy Anna Live</strong> provides live dealers and HD streaming for all games.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">How <strong>Reddy Anna Live</strong> Helps</h3>
              <p className="text-gray-300 text-sm">
                <strong>Reddy Anna Live</strong> makes casino gaming easy and secure. 
                <strong>Reddy Anna Live</strong> ensures fair play and instant withdrawals.
              </p>
            </div>
          </div>
          <Button
            className="h-11 rounded-md px-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
            onClick={() => openWhatsApp("betting")}
          >
            Join <strong>Reddy Anna Live</strong> Casino Now
          </Button>
        </div>
      </section>

      {/* Casino Features Deep Dive */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Complete <strong>Reddy Anna Live</strong> Casino Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Live Casino Features at <strong>Reddy Anna Live</strong></h3>
              <p className="text-gray-300 mb-4">
                <strong>Reddy Anna Live</strong> live casino features professional dealers from around the world. 
                <strong>Reddy Anna Live</strong> provides HD streaming with multiple camera angles for an immersive experience. 
                <strong>Reddy Anna Live</strong> offers real-time chat with dealers and other players.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• <strong>Reddy Anna Live</strong> Professional live dealers</li>
                <li>• <strong>Reddy Anna Live</strong> HD video streaming</li>
                <li>• <strong>Reddy Anna Live</strong> Real-time chat functionality</li>
                <li>• <strong>Reddy Anna Live</strong> Multiple camera angles</li>
                <li>• <strong>Reddy Anna Live</strong> Interactive gaming experience</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Casino Security at <strong>Reddy Anna Live</strong></h3>
              <p className="text-gray-300 mb-4">
                <strong>Reddy Anna Live</strong> uses advanced encryption technology to protect all casino transactions. 
                <strong>Reddy Anna Live</strong> ensures fair play with certified random number generators. 
                <strong>Reddy Anna Live</strong> maintains strict security protocols for all casino games.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• <strong>Reddy Anna Live</strong> SSL encryption for all transactions</li>
                <li>• <strong>Reddy Anna Live</strong> Certified random number generators</li>
                <li>• <strong>Reddy Anna Live</strong> Regular security audits</li>
                <li>• <strong>Reddy Anna Live</strong> Secure payment processing</li>
                <li>• <strong>Reddy Anna Live</strong> Player fund protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Casino Summary */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Experience the Best with <strong>Reddy Anna Live</strong> Casino</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            <strong>Reddy Anna Live</strong> casino is India's premier destination for online casino gaming. 
            <strong>Reddy Anna Live</strong> offers the most comprehensive selection of casino games with live dealers. 
            <strong>Reddy Anna Live</strong> provides the best odds, fastest payouts, and most secure gaming environment. 
            <strong>Reddy Anna Live</strong> casino features Teen Patti, Andar Bahar, Roulette, Blackjack, and many more games. 
            <strong>Reddy Anna Live</strong> ensures every player has an exceptional casino gaming experience. 
            <strong>Reddy Anna Live</strong> is the trusted choice for casino gaming in India. 
            Choose <strong>Reddy Anna Live</strong> for the ultimate casino experience. 
            <strong>Reddy Anna Live</strong> delivers excellence in every game. 
            Trust <strong>Reddy Anna Live</strong> for your casino needs.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* SEO Keywords (hidden for search engines) */}
      <div style={{ display: "none" }}>
        live casino games, teen patti online, andar bahar, roulette, blackjack, baccarat, live dealers, 
        casino betting, online casino india, live casino streaming, teen patti live, andar bahar online, 
        roulette live, blackjack live, baccarat live, dragon tiger, casino war, 7 up 7 down, live casino india, 
        online casino games, casino games online, live casino dealers, hd casino streaming, casino betting india,
        cricbet99, gold365, reddyannabook, instagram id, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted
      </div>
    </div>
  );
};
