import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const liveMatches = [
  {
    sport: "Cricket",
    team1: "RC Bengaluru",
    team2: "Kolkata Knight Riders",
    league: "Indian Premier League",
    time: "08/08/2025 5:23 pm",
    isLive: true,
  },
  {
    sport: "Cricket",
    team1: "Pakistan",
    team2: "England",
    league: "TEST MATCHES",
    time: "08/08/2025 5:23 pm",
    isLive: true,
  },
  {
    sport: "Football",
    team1: "FC Barcelona SRL",
    team2: "BSC Young Boys Srl",
    league: "UEFA Champions League SRL",
    time: "08/08/2025 5:23 pm",
    isLive: true,
  },
  {
    sport: "Football",
    team1: "Bahir Dar FC",
    team2: "Hadiah Hosanna FC",
    league: "Ethiopian Premier League",
    time: "08/08/2025 5:23 pm",
    isLive: true,
  },
  {
    sport: "Tennis",
    team1: "G Diallo",
    team2: "Trungelliti",
    league: "ATP Shanghai 2024",
    time: "08/08/2025 5:23 pm",
    isLive: true,
  },
  {
    sport: "Tennis",
    team1: "ATP Beijing 2024",
    team2: "",
    league: "ATP Beijing 2024",
    time: "08/08/2025 5:23 pm",
    isLive: true,
  },
];

export const LiveMatches = () => {
  const openWhatsApp = () => {
    const phoneNumber = "918890051287";
    const message = "Hi, I want to place a bet on live matches!";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="live-matches" className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Live Sports Matches
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Watch live sports and place bets in real-time. Get the best odds on ongoing cricket, football, tennis, 
            and other sports matches with instant betting options and live score updates.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {liveMatches.map((match, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-transparent hover:border-yellow-400 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
              onClick={openWhatsApp}
            >
              <CardHeader className="pb-3 bg-gradient-to-r from-yellow-400/10 to-orange-500/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {match.sport}
                  </h3>
                  {match.isLive && (
                    <Badge
                      variant="destructive"
                      className="animate-pulse bg-red-500 px-3 py-1"
                    >
                      ● LIVE
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4 text-white">
                  <div className="text-sm font-medium text-yellow-400/80">
                    {match.league}
                  </div>
                  <div className="text-lg font-bold tracking-wide">
                    {match.team1}{" "}
                    <span className="text-yellow-400 px-2">vs</span>
                    {match.team2}
                  </div>
                  <div className="text-sm text-gray-400 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      />
                    </svg>
                    {match.time}
                  </div>
                  <div className="flex items-center justify-between pt-3">
                    <div className="text-sm font-medium text-yellow-400">
                      BM
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-transform text-black font-bold"
                      onClick={openWhatsApp}
                    >
                      Make Bet
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
