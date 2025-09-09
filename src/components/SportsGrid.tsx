import { Card, CardContent } from "@/components/ui/card";
import sportsDataImage1 from "../assets/Cricket-betting-win.webp";
import sportsDataImage2 from "../assets/Football-betting-win.webp";
import sportsDataImage3 from "../assets/Tennis-betting-win.webp";
import sportsDataImage4 from "../assets/HorseRacing-betting-win.webp";
import sportsDataImage5 from "../assets/GreyhoundRacing-betting-win.webp";

const sportsData = [
  {
    title: "Cricket",
    gradient: "from-red-500 via-red-600 to-red-700",
    iconColor: "text-red-400",
    image: sportsDataImage1,
  },
  {
    title: "Football",
    gradient: "from-green-500 via-green-600 to-green-700",
    iconColor: "text-green-400",
    image: sportsDataImage2,
  },
  {
    title: "Tennis",
    gradient: "from-pink-500 via-pink-600 to-pink-700",
    iconColor: "text-pink-400",
    image: sportsDataImage3,
  },
  {
    title: "Horse Racing",
    gradient: "from-orange-500 via-orange-600 to-orange-700",
    iconColor: "text-orange-400",
    image: sportsDataImage4,
  },
  {
    title: "Greyhound Racing",
    gradient: "from-purple-500 via-purple-600 to-purple-700",
    iconColor: "text-purple-400",
    image: sportsDataImage5,
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
    <section id="sports" className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">
            Popular Sports Betting
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Bet on your favorite sports with Reddy Anna Live. From cricket and
            football to tennis and horse racing, we offer the best odds and live
            betting options for all major sports events in India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {sportsData.map((sport, index) => (
            <Card
              key={index}
              onClick={openWhatsApp}
              className="group cursor-pointer transition-all duration-500 overflow-hidden rounded-xl transform hover:scale-105 hover:rotate-1 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
            >
              <CardContent className="p-0 relative">
                {/* Background Image */}
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4 py-4 bg-black/50 backdrop-blur-sm w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white leading-tight mb-2">
                      {sport.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-400 text-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Play Now
                    </span>
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
