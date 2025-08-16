import { Card, CardContent } from "@/components/ui/card";
import { FaFootballBall, FaHorse, FaDog } from "react-icons/fa";
import { GiTennisBall, GiCricketBat } from "react-icons/gi";

const sportsData = [
  {
    title: "Cricket",
    icon: GiCricketBat,
    gradient: "from-red-500 via-red-600 to-red-700",
    iconColor: "text-red-400",
  },
  {
    title: "Football",
    icon: FaFootballBall,
    gradient: "from-green-500 via-green-600 to-green-700",
    iconColor: "text-green-400",
  },
  {
    title: "Tennis",
    icon: GiTennisBall,
    gradient: "from-pink-500 via-pink-600 to-pink-700",
    iconColor: "text-pink-400",
  },
  {
    title: "Horse Racing",
    icon: FaHorse,
    gradient: "from-orange-500 via-orange-600 to-orange-700",
    iconColor: "text-orange-400",
  },
  {
    title: "Greyhound Racing",
    icon: FaDog,
    gradient: "from-purple-500 via-purple-600 to-purple-700",
    iconColor: "text-purple-400",
  },
];

export const SportsGrid = () => {
  const openWhatsApp = () => {
    const phoneNumber = "918890051287";
    const message = "Hi, I want to sign up for Reddy Anna Live!";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">
          Popular Sports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {sportsData.map((sport, index) => (
            <Card
              key={index}
              onClick={openWhatsApp}
              className="group cursor-pointer transition-all duration-500 overflow-hidden rounded-xl transform hover:scale-105 hover:rotate-1 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
            >
              <CardContent className="p-0">
                <div
                  className={`relative h-48 overflow-hidden animate-gradient bg-gradient-to-br ${sport.gradient}`}
                >
                  {[...Array(3)].map((_, i) => (
                    <sport.icon
                      key={i}
                      className={`absolute w-8 h-8 ${sport.iconColor} animate-float-down-${i}`}
                      style={{
                        top: 0,
                        left: `${30 * (i + 1)}%`,
                        animationDelay: `${i * 2}s`,
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center px-4 py-4 bg-black/50 backdrop-blur-sm w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white leading-tight mb-2">
                        {sport.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-400 text-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Play Now
                      </span>
                    </div>
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
