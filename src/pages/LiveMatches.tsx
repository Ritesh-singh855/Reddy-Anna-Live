import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openWhatsApp } from "@/utils/whatsapp";
import { SEO } from "@/components/SEO";

const liveMatchTypes = [
  {
    sport: "Cricket",
    icon: "🏏",
    matches: [
      { teams: "Mumbai Indians vs Chennai Super Kings", league: "IPL", time: "7:30 PM", status: "Live" },
      { teams: "India vs Australia", league: "T20 World Cup", time: "8:00 PM", status: "Live" },
      { teams: "Royal Challengers vs Delhi Capitals", league: "IPL", time: "3:30 PM", status: "Upcoming" }
    ]
  },
  {
    sport: "Football",
    icon: "⚽",
    matches: [
      { teams: "Manchester United vs Liverpool", league: "Premier League", time: "10:00 PM", status: "Live" },
      { teams: "Real Madrid vs Barcelona", league: "La Liga", time: "11:30 PM", status: "Upcoming" },
      { teams: "Mumbai City vs ATK Mohun Bagan", league: "ISL", time: "7:00 PM", status: "Live" }
    ]
  },
  {
    sport: "Tennis",
    icon: "🎾",
    matches: [
      { teams: "Djokovic vs Nadal", league: "Wimbledon", time: "6:00 PM", status: "Live" },
      { teams: "Federer vs Murray", league: "ATP Tour", time: "8:30 PM", status: "Upcoming" }
    ]
  },
  {
    sport: "Basketball",
    icon: "🏀",
    matches: [
      { teams: "Lakers vs Warriors", league: "NBA", time: "9:00 AM", status: "Live" },
      { teams: "Celtics vs Heat", league: "NBA", time: "11:30 AM", status: "Upcoming" }
    ]
  }
];

const liveFeatures = [
  {
    icon: "📺",
    title: "Live Streaming",
    description: "Watch live matches with HD quality streaming and real-time commentary"
  },
  {
    icon: "📊",
    title: "Live Odds",
    description: "Get real-time odds updates as the match progresses"
  },
  {
    icon: "⚡",
    title: "Instant Betting",
    description: "Place bets instantly during live matches with dynamic odds"
  },
  {
    icon: "📱",
    title: "Mobile Live",
    description: "Watch and bet on live matches from your mobile device"
  },
  {
    icon: "🎯",
    title: "Live Statistics",
    description: "Access real-time match statistics and performance data"
  },
  {
    icon: "💬",
    title: "Live Chat",
    description: "Interact with other bettors and get live match updates"
  }
];

const upcomingMatches = [
  {
    date: "Today",
    matches: [
      { sport: "Cricket", teams: "India vs Pakistan", league: "T20 World Cup", time: "8:00 PM" },
      { sport: "Football", teams: "Arsenal vs Chelsea", league: "Premier League", time: "10:30 PM" },
      { sport: "Tennis", teams: "Serena vs Venus", league: "Wimbledon", time: "7:00 PM" }
    ]
  },
  {
    date: "Tomorrow",
    matches: [
      { sport: "Cricket", teams: "Australia vs England", league: "Ashes", time: "2:00 PM" },
      { sport: "Football", teams: "Barcelona vs Real Madrid", league: "El Clasico", time: "11:00 PM" },
      { sport: "Basketball", teams: "Lakers vs Celtics", league: "NBA", time: "9:00 AM" }
    ]
  }
];

export const LiveMatches = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Live Matches - Live Sports Betting & Streaming | Reddy Anna Live"
        description="Watch and bet on live sports matches at Reddy Anna Live. Live cricket, football, tennis, basketball with HD streaming, real-time odds, and instant betting options."
        keywords="live matches, live sports betting, live cricket, live football, live streaming, live odds, live betting, live sports india, live match streaming, cricbet99, gold365, reddyannabook, instagram id, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted"
        canonical="https://www.reddyannalive.in/live-matches"
        robots="index,follow"
        og={{
          title: "Live Matches - Live Sports Betting & Streaming | Reddy Anna Live",
          description: "Watch and bet on live sports matches at Reddy Anna Live. Live cricket, football, tennis, basketball with HD streaming, real-time odds, and instant betting options.",
          type: "website",
          url: "https://www.reddyannalive.in/live-matches",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Live Matches - Live Sports Betting & Streaming | Reddy Anna Live",
          description: "Watch and bet on live sports matches at Reddy Anna Live. Live cricket, football, tennis, basketball with HD streaming, real-time odds, and instant betting options.",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.reddyannalive.in/" },
              { "@type": "ListItem", position: 2, name: "Live Matches", item: "https://www.reddyannalive.in/live-matches" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Live Matches - Reddy Anna Live",
            url: "https://www.reddyannalive.in/live-matches",
            description: "Live sports matches and betting at Reddy Anna Live with HD streaming and real-time odds.",
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Live Sports Streaming",
            description: "Live sports streaming with HD quality and real-time betting options",
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
              Live Matches
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Watch and bet on live sports matches with HD streaming, real-time odds, 
              and instant betting options. Never miss the action!
            </p>
            <Button
              className="h-11 rounded-md px-8 bg-white text-black hover:bg-gray-100 font-semibold"
              onClick={() => openWhatsApp("betting")}
            >
              Watch Live Now
            </Button>
          </div>
        </div>
      </section>

      {/* Live Matches by Sport */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Live Matches by Sport</h2>
          <div className="space-y-8">
            {liveMatchTypes.map((sport, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{sport.icon}</div>
                  <h3 className="text-2xl font-semibold text-yellow-400">{sport.sport}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sport.matches.map((match, matchIndex) => (
                    <Card key={matchIndex} className="bg-gray-800 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            match.status === 'Live' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'
                          }`}>
                            {match.status}
                          </span>
                          <span className="text-gray-400 text-sm">{match.time}</span>
                        </div>
                        <h4 className="text-white font-semibold mb-1">{match.teams}</h4>
                        <p className="text-gray-400 text-sm">{match.league}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Features */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Live Match Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Matches</h2>
          <div className="space-y-8">
            {upcomingMatches.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-6">{day.date}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {day.matches.map((match, matchIndex) => (
                    <Card key={matchIndex} className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                            {match.sport}
                          </span>
                          <span className="text-gray-400 text-sm">{match.time}</span>
                        </div>
                        <h4 className="text-white font-semibold mb-1">{match.teams}</h4>
                        <p className="text-gray-400 text-sm">{match.league}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Betting Guide */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Live Betting Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Watch Live</h3>
              <p className="text-gray-400">Stream live matches in HD quality with real-time commentary</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Analyze Odds</h3>
              <p className="text-gray-400">Monitor live odds that change based on match progress</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Place Bets</h3>
              <p className="text-gray-400">Make informed betting decisions with live match data</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">4️⃣</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Win Instantly</h3>
              <p className="text-gray-400">Get instant payouts for your winning live bets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Match Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Live Match Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Real-time Stats</h3>
              <p className="text-gray-400">
                Access comprehensive live statistics including scores, possession, 
                shots, and player performance data.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Live Odds Movement</h3>
              <p className="text-gray-400">
                Track how odds change in real-time based on match events and 
                betting patterns.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Match Predictions</h3>
              <p className="text-gray-400">
                Get AI-powered match predictions and insights to make better 
                betting decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Watch Live Matches?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of sports fans watching and betting on live matches 
            with HD streaming and real-time odds.
          </p>
          <Button
            className="h-11 rounded-md px-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
            onClick={() => openWhatsApp("betting")}
          >
            Watch Live Now
          </Button>
        </div>
      </section>

      {/* SEO Keywords (hidden for search engines) */}
      <div style={{ display: "none" }}>
        live matches, live sports betting, live cricket, live football, live streaming, live odds, 
        live betting, live sports india, live match streaming, live cricket streaming, live football streaming, 
        live tennis streaming, live basketball streaming, live sports commentary, live match odds, 
        live betting odds, live sports statistics, live match predictions, live sports analysis,
        cricbet99, gold365, reddyannabook, instagram id, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted
      </div>
    </div>
  );
};
