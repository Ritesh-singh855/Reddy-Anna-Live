import { Card, CardContent } from "@/components/ui/card";
import MineSweeperImage from "../assets/Minesweeper.png";
import RummyImage from "../assets/rummy.png";
import SevenUpandSevenDownImage from "../assets/7_Up_7_Down.png";
import DragonTigerImage from "../assets/Dragon_Tiger.png";
import MegaFishingImage from "../assets/megaFishing.png";
import RouletteImage from "../assets/European_Roulette.png";
import CoinTossImage from "../assets/Coin_Toss.png";
import TeenPattiImage from "../assets/teenPatti.png";

import TeenPattiLiveImage from "../assets/liveteenpatti.png";
import AndarBaharImage from "../assets/andarbahar.png";
import Roulette1Image from "../assets/roullete.png";
import CasinoWarImage from "../assets/casinowar.png";
import HiLowImage from "../assets/hi-low.png";
import TwoCardsTeenpattiImage from "../assets/2cards_teenpatti.png";
import TeenpattiT20Image from "../assets/teenpattit20.png";
import AmarAkbarAnthonyImage from "../assets/aaa.png";
import CardsCasinoImage from "../assets/32casino.png";
import TeenpattiTestImage from "../assets/teenpatti_test.png";
import PokerImage from "../assets/2020poker.png";
import MuflisTeenpattiImage from "../assets/Muflis_teenpatti.png";

const casinoGames = [
  { name: "7 up and 7 down", icon: SevenUpandSevenDownImage },
  { name: "Dragon Tiger", icon: DragonTigerImage },
  { name: "Roulette", icon: RouletteImage },
  { name: "Mine Sweeper", icon: MineSweeperImage },
  { name: "Rummy", icon: RummyImage },
  { name: "Mega Fishing", icon: MegaFishingImage },
  { name: "Teen Patti", icon: TeenPattiImage },
  { name: "Coin Toss", icon: CoinTossImage },
];

const indianCardGames = [
  { name: "Teenpatti", icon: TeenPattiLiveImage },
  { name: "Andar Bahar", icon: AndarBaharImage },
  { name: "Roulette", icon: Roulette1Image },
  { name: "Casino War", icon: CasinoWarImage },
  { name: "Hi Low", icon: HiLowImage },
  { name: "2 Cards Teenpatti", icon: TwoCardsTeenpattiImage },
  { name: "Teenpatti T20", icon: TeenpattiT20Image },
  { name: "Amar Akbar Anthony", icon: AmarAkbarAnthonyImage },
  { name: "32 Cards Casino", icon: CardsCasinoImage },
  { name: "Teenpatti Test", icon: TeenpattiTestImage },
  { name: "20 20 Poker", icon: PokerImage },
  { name: "Muflis Teenpatti", icon: MuflisTeenpattiImage },
];

export const CasinoSection = () => {
  const openWhatsApp = () => {
    const phoneNumber = "918890051287";
    const message = "Hi, I want to login to Reddy Anna Live!";
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message,
      )}`,
      "_blank",
    );
  };
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full mb-12">
          <h2 className="text-3xl font-bold text-center w-full py-4 px-8 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
            Casino Games
          </h2>
        </div>
        {/* Casino Games */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {casinoGames.map((game, index) => (
            <Card
              key={index}
              className="hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-out cursor-pointer"
              onClick={openWhatsApp}
            >
              <CardContent className="p-6 text-center">
                <img
                  src={game.icon}
                  alt={game.name}
                  loading="lazy"
                  className="mx-auto mb-4 w-20 h-20 object-contain"
                />
                <h4 className="text-xl font-semibold mb-2">{game.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-12 text-center w-full py-4 px-8 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
          Indian Card Games
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {indianCardGames.map((game, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
              onClick={openWhatsApp}
            >
              <CardContent className="p-0 text-center h-full relative">
                <div className="h-full overflow-hidden">
                  <img
                    src={game.icon}
                    alt={game.name}
                    loading="lazy"
                    className="w-full h-28 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-400 text-black font-semibold">
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
