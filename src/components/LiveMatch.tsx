import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface LiveMatchProps {
  sport: string;
  team1: string;
  team2: string;
  league: string;
  time: string;
  isLive?: boolean;
}

export const LiveMatch = ({
  sport,
  team1,
  team2,
  league,
  time,
  isLive = false,
}: LiveMatchProps) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-gradient-primary rounded text-xs flex items-center justify-center text-primary-foreground font-bold">
              {sport.charAt(0)}
            </div>
            <span className="font-medium text-sm">{sport}</span>
            {isLive && (
              <Badge variant="destructive" className="text-xs">
                LIVE
              </Badge>
            )}
          </div>
          <div className="text-sm font-medium text-foreground">
            {team1} vs {team2}
          </div>
          <div className="text-xs text-muted-foreground mt-1">{league}</div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="text-sm font-medium">{time}</div>
            <div className="text-xs text-muted-foreground">
              {isLive ? "Live Now" : "Upcoming"}
            </div>
          </div>
          <Button
            size="sm"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
          >
            Bet Now
          </Button>
        </div>
      </div>
    </Card>
  );
};
