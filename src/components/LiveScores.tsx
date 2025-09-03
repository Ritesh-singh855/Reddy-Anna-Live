import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Trophy } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: "live" | "upcoming" | "finished";
  time: string;
  league: string;
  odds: {
    home: number;
    draw: number;
    away: number;
  };
}

const mockMatches: Match[] = [
  {
    id: 1,
    homeTeam: "Mumbai Indians",
    awayTeam: "Chennai Super Kings",
    homeScore: 156,
    awayScore: 142,
    status: "live",
    time: "18th Over",
    league: "IPL 2024",
    odds: { home: 1.85, draw: 3.20, away: 2.10 }
  },
  {
    id: 2,
    homeTeam: "Royal Challengers",
    awayTeam: "Kolkata Knight Riders",
    homeScore: 0,
    awayScore: 0,
    status: "upcoming",
    time: "19:30 IST",
    league: "IPL 2024",
    odds: { home: 1.95, draw: 3.40, away: 1.90 }
  },
  {
    id: 3,
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    homeScore: 2,
    awayScore: 1,
    status: "finished",
    time: "FT",
    league: "Premier League",
    odds: { home: 2.20, draw: 3.10, away: 1.75 }
  },
  {
    id: 4,
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeScore: 0,
    awayScore: 0,
    status: "upcoming",
    time: "22:00 IST",
    league: "La Liga",
    odds: { home: 1.80, draw: 3.50, away: 2.00 }
  },
  {
    id: 5,
    homeTeam: "India",
    awayTeam: "Australia",
    homeScore: 285,
    awayScore: 267,
    status: "live",
    time: "45th Over",
    league: "ODI Series",
    odds: { home: 1.70, draw: 3.80, away: 2.30 }
  }
];

export const LiveScores = () => {
  const [matches, setMatches] = useState<Match[]>(mockMatches);
  const [selectedLeague, setSelectedLeague] = useState<string>("all");

  const leagues = ["all", "IPL 2024", "Premier League", "La Liga", "ODI Series"];

  const filteredMatches = selectedLeague === "all" 
    ? matches 
    : matches.filter(match => match.league === selectedLeague);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live": return "bg-red-500";
      case "upcoming": return "bg-blue-500";
      case "finished": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "live": return "LIVE";
      case "upcoming": return "UPCOMING";
      case "finished": return "FINISHED";
      default: return status.toUpperCase();
    }
  };

  return (
    <section id="live-scores" className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Reddy Anna Live Scores & Betting Odds
          </h2>
          <p className="text-gray-400 text-lg">
            Stay updated with live match scores and betting odds on Reddy Anna Live platform
          </p>
        </div>

        {/* League Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {leagues.map((league) => (
            <button
              key={league}
              onClick={() => openWhatsApp()}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedLeague === league
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {league === "all" ? "All Matches" : league}
            </button>
          ))}
        </div>

        {/* Live Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMatches.map((match) => (
            <Card key={match.id} className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors">
              <CardContent className="p-6">
                {/* Match Header */}
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`${getStatusColor(match.status)} text-white`}>
                    {getStatusText(match.status)}
                  </Badge>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {match.time}
                  </div>
                </div>

                {/* League */}
                <div className="text-center mb-4">
                  <span className="text-yellow-400 text-sm font-medium">{match.league}</span>
                </div>

                {/* Teams and Score */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                      <span className="text-white font-medium">{match.homeTeam}</span>
                    </div>
                    <span className="text-white font-bold text-xl">{match.homeScore}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                      <span className="text-white font-medium">{match.awayTeam}</span>
                    </div>
                    <span className="text-white font-bold text-xl">{match.awayScore}</span>
                  </div>
                </div>

                {/* Odds */}
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <div className="text-center mb-3">
                    <span className="text-gray-400 text-sm">Betting Odds</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <div className="text-yellow-400 font-bold">{match.odds.home}</div>
                      <div className="text-gray-400 text-xs">Home</div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-400 font-bold">{match.odds.draw}</div>
                      <div className="text-gray-400 text-xs">Draw</div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-400 font-bold">{match.odds.away}</div>
                      <div className="text-gray-400 text-xs">Away</div>
                    </div>
                  </div>
                </div>

                {/* Bet Button */}
                <button 
                className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors"
                onClick={()=>openWhatsApp()}
                >
                  Place Bet on Reddy Anna Live
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">1,250+</div>
              <div className="text-gray-400">Live Bettors</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">₹2.5Cr+</div>
              <div className="text-gray-400">Won Today</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">45+</div>
              <div className="text-gray-400">Live Matches</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
