import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SportCardProps {
  title: string;
  gradient: string;
  icon: string;
  description?: string;
  className?: string;
}

export const SportCard = ({
  title,
  gradient,
  icon,
  description = "Live betting available",
  className,
}: SportCardProps) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg",
        className,
      )}
    >
      <div
        className={cn(
          "h-32 p-6 flex flex-col justify-between text-white relative",
          gradient,
        )}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <div className="text-2xl mb-2">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        <div className="absolute bottom-4 right-4 opacity-20 text-6xl">
          {icon}
        </div>
      </div>
    </Card>
  );
};
