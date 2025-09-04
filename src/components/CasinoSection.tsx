import { Card, CardContent } from "@/components/ui/card";
import MineSweeperImagePng from "../assets/Minesweeper.png";
import MineSweeperImageWebp from "../assets/Minesweeper.webp";
import RummyImagePng from "../assets/rummy.png";
import RummyImageWebp from "../assets/rummy.webp";
import SevenUpandSevenDownImagePng from "../assets/7_Up_7_Down.png";
import SevenUpandSevenDownImageWebp from "../assets/7_Up_7_Down.webp";
import DragonTigerImagePng from "../assets/Dragon_Tiger.png";
import DragonTigerImageWebp from "../assets/Dragon_Tiger.webp";
import MegaFishingImagePng from "../assets/megaFishing.png";
import MegaFishingImageWebp from "../assets/megaFishing.webp";
import RouletteImagePng from "../assets/European_Roulette.png";
import RouletteImageWebp from "../assets/European_Roulette.webp";
import CoinTossImagePng from "../assets/Coin_Toss.png";
import CoinTossImageWebp from "../assets/Coin_Toss.webp";
import TeenPattiImagePng from "../assets/teenPatti.png";
import TeenPattiImageWebp from "../assets/teenPatti.webp";

import TeenPattiLiveImagePng from "../assets/liveteenpatti.png";
import TeenPattiLiveImageWebp from "../assets/liveteenpatti.webp";
import AndarBaharImagePng from "../assets/andarbahar.png";
import AndarBaharImageWebp from "../assets/andarbahar.webp";
import Roulette1ImagePng from "../assets/roullete.png";
import Roulette1ImageWebp from "../assets/roullete.webp";
import CasinoWarImagePng from "../assets/casinowar.png";
import CasinoWarImageWebp from "../assets/casinowar.webp";
import HiLowImagePng from "../assets/hi-low.png";
import HiLowImageWebp from "../assets/hi-low.webp";
import TwoCardsTeenpattiImagePng from "../assets/2cards_teenpatti.png";
import TwoCardsTeenpattiImageWebp from "../assets/2cards_teenpatti.webp";
import TeenpattiT20ImagePng from "../assets/teenpattit20.png";
import TeenpattiT20ImageWebp from "../assets/teenpattit20.webp";
import AmarAkbarAnthonyImagePng from "../assets/aaa.png";
import AmarAkbarAnthonyImageWebp from "../assets/aaa.webp";
import CardsCasinoImagePng from "../assets/32casino.png";
import CardsCasinoImageWebp from "../assets/32casino.webp";
import TeenpattiTestImagePng from "../assets/teenpatti_test.png";
import TeenpattiTestImageWebp from "../assets/teenpatti_test.webp";
import PokerImagePng from "../assets/2020poker.png";
import PokerImageWebp from "../assets/2020poker.webp";
import MuflisTeenpattiImagePng from "../assets/Muflis_teenpatti.png";
import MuflisTeenpattiImageWebp from "../assets/Muflis_teenpatti.webp";



const casinoGames = [
  { name: "7 up and 7 down", iconPng: SevenUpandSevenDownImagePng, iconWebp: SevenUpandSevenDownImageWebp },
  { name: "Dragon Tiger", iconPng: DragonTigerImagePng, iconWebp: DragonTigerImageWebp },
  { name: "Roulette", iconPng: RouletteImagePng, iconWebp: RouletteImageWebp },
  { name: "Mine Sweeper", iconPng: MineSweeperImagePng, iconWebp: MineSweeperImageWebp },
  { name: "Rummy", iconPng: RummyImagePng, iconWebp: RummyImageWebp },
  { name: "Mega Fishing", iconPng: MegaFishingImagePng, iconWebp: MegaFishingImageWebp },
  { name: "Teen Patti", iconPng: TeenPattiImagePng, iconWebp: TeenPattiImageWebp },
  { name: "Coin Toss", iconPng: CoinTossImagePng, iconWebp: CoinTossImageWebp },
];

const indianCardGames = [
  { name: "Teenpatti", iconPng: TeenPattiLiveImagePng, iconWebp: TeenPattiLiveImageWebp },
  { name: "Andar Bahar", iconPng: AndarBaharImagePng, iconWebp: AndarBaharImageWebp },
  { name: "Roulette", iconPng: Roulette1ImagePng, iconWebp: Roulette1ImageWebp },
  { name: "Casino War", iconPng: CasinoWarImagePng, iconWebp: CasinoWarImageWebp },
  { name: "Hi Low", iconPng: HiLowImagePng, iconWebp: HiLowImageWebp },
  { name: "2 Cards Teenpatti", iconPng: TwoCardsTeenpattiImagePng, iconWebp: TwoCardsTeenpattiImageWebp },
  { name: "Teenpatti T20", iconPng: TeenpattiT20ImagePng, iconWebp: TeenpattiT20ImageWebp },
  { name: "Amar Akbar Anthony", iconPng: AmarAkbarAnthonyImagePng, iconWebp: AmarAkbarAnthonyImageWebp },
  { name: "32 Cards Casino", iconPng: CardsCasinoImagePng, iconWebp: CardsCasinoImageWebp },
  { name: "Teenpatti Test", iconPng: TeenpattiTestImagePng, iconWebp: TeenpattiTestImageWebp },
  { name: "20 20 Poker", iconPng: PokerImagePng, iconWebp: PokerImageWebp },
  { name: "Muflis Teenpatti", iconPng: MuflisTeenpattiImagePng, iconWebp: MuflisTeenpattiImageWebp },
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
    <section id="casino" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="w-full mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold w-full py-4 px-8 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg transition-all duration-300 hover:shadow-xl mb-4">
              Live Casino Games
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Experience the thrill of live casino games with Reddy Anna Live. Play popular casino games like roulette, 
              poker, teen patti, andar bahar, and more with live dealers and real-time gameplay.
            </p>
          </div>
        </div>

        {/* Casino Games */}
       <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
  {casinoGames.map((game, index) => (
    <Card
      key={index}
      className="hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-out cursor-pointer overflow-hidden inline-block"
      onClick={openWhatsApp}
    >
      <CardContent className="p-0 flex items-center justify-center bg-black">
        <picture>
          <source srcSet={game.iconWebp} type="image/webp" />
          <img
            src={game.iconPng}
            alt={game.name}
            loading="lazy"
            decoding="async"
            className="object-contain"
          />
        </picture>
      </CardContent>
      <div className="text-center py-2">
        <h4 className="text-lg font-semibold">{game.name}</h4>
      </div>
    </Card>
  ))}
</div>



        {/* Indian Card Games Title */}
        <h2 className="text-3xl font-bold mb-12 text-center w-full py-4 px-8 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
          Indian Card Games
        </h2>

        {/* Indian Card Games */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {indianCardGames.map((game, index) => (
            <Card
              key={index}
              className="hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-out cursor-pointer overflow-hidden inline-block"
              onClick={openWhatsApp}
            >
              <CardContent className="p-0 flex items-center justify-center bg-black">
                <picture>
                  <source srcSet={game.iconWebp} type="image/webp" />
                  <img
                    src={game.iconPng}
                    alt={game.name}
                    loading="lazy"
                    decoding="async"
                    className="object-contain"
                  />
                </picture>
              </CardContent>
              <div className="text-center py-2">
                <h4 className="text-lg font-semibold">{game.name}</h4>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
