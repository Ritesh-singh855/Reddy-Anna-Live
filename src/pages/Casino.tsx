import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openWhatsApp } from "@/utils/whatsapp";
import { SEO } from "@/components/SEO";

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
              Experience the thrill of live casino gaming with professional dealers, HD streaming, 
              and authentic casino atmosphere. Play Teen Patti, Andar Bahar, Roulette, and more.
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Live Casino Games</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Live Casino?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveCasinoFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Game Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🃏</div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Indian Card Games</h3>
              <p className="text-gray-400 mb-6">
                Traditional Indian card games like Teen Patti, Andar Bahar, and 7 Up 7 Down 
                with authentic gameplay and cultural elements.
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
                Traditional casino games with live dealers including Roulette, Blackjack, 
                and Baccarat for an authentic casino experience.
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
                Fast-paced dice games and specialty casino games with instant results 
                and exciting betting options.
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
          <h2 className="text-3xl font-bold text-center mb-12">How to Play Live Casino Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Create Account</h3>
              <p className="text-gray-400">Contact us via WhatsApp to create your Reddy Anna Live account</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Choose Game</h3>
              <p className="text-gray-400">Select from our wide range of live casino games</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Place Bets</h3>
              <p className="text-gray-400">Place your bets and watch the live action unfold</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">4️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Win & Withdraw</h3>
              <p className="text-gray-400">Get instant payouts for your winnings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Play Live Casino Games?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of players enjoying our live casino games with professional dealers, 
            HD streaming, and instant payouts.
          </p>
          <Button
            className="h-11 rounded-md px-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
            onClick={() => openWhatsApp("betting")}
          >
            Start Playing Now
          </Button>
        </div>
      </section>

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
