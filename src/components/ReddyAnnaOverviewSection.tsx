import React from 'react';

export const ReddyAnnaOverviewSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-black-600">
          Reddy Anna – Trusted Online Betting & Casino Platform
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Welcome to <strong className="text-red-600">Reddy Anna</strong>, the leading online destination for sports betting, casino games, and live entertainment. Whether you search for <strong className="text-red-600">Reddy Anna</strong> or <strong className="text-red-600">reddy anna</strong>, you’ll find a secure, transparent, and exciting platform trusted by millions of players worldwide.
        </p>
        <p className="mb-12 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          With <strong className="text-red-600">Reddy Anna</strong>, you can explore sports betting markets, play in the <strong className="text-red-600">Reddy Anna casino</strong>, and enjoy a safe, seamless, and rewarding experience every time you log in.
        </p>

        {/* Why Choose Reddy Anna? */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-black-600">
            Why Choose Reddy Anna?
          </h2>
          <p className="mb-8 text-center text-gray-600 text-lg">
            The <strong className="text-red-600">Reddy Anna</strong> platform is built on trust, fairness, and innovation. Here’s why players prefer <strong className="text-red-600">reddy anna</strong> over others:
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900">
                <span className="text-green-500 mr-2">✅</span> Trusted & Reliable – Millions of users trust <strong className="ml-1 text-red-600">Reddy Anna</strong> for safe betting
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900">
                <span className="text-green-500 mr-2">✅</span> Sports Betting Leader – Cricket, football, tennis, horse racing, and more
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900">
                <span className="text-green-500 mr-2">✅</span> <strong className="text-red-600">Reddy Anna Casino</strong> – Slots, blackjack, roulette, poker, and live dealer games
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900">
                <span className="text-green-500 mr-2">✅</span> Transparency & Fair Play – Clear odds and fast payouts
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-900">
                <span className="text-green-500 mr-2">✅</span> 24/7 Support – The <strong className="ml-1 text-red-600">Reddy Anna</strong> team is always available to assist you
              </h3>
            </div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: (
                  <>
                    Trusted & Reliable – Millions of users trust{" "}
                    <span className="text-red-600 font-bold">Reddy Anna</span> for safe betting
                  </>
                ),
              },
              {
                text: "Sports Betting Leader – Cricket, football, tennis, horse racing, and more",
              },
              {
                text: (
                  <>
                    <span className="text-red-600 font-bold">Reddy Anna Casino</span> – Slots,
                    blackjack, roulette, poker, and live dealer games
                  </>
                ),
              },
              { text: "Transparency & Fair Play – Clear odds and fast payouts" },
              {
                text: (
                  <>
                    24/7 Support – The{" "}
                    <span className="text-red-600 font-bold">Reddy Anna</span> team is always
                    available to assist you
                  </>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✅</span>
                  <p className="text-lg font-medium text-gray-900 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>


        </div>

        {/* Reddy Anna Sports Betting */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-black-600">
            Reddy Anna Sports Betting
          </h2>
          <p className="mb-8 text-center text-gray-600 text-lg">
            When it comes to sports, <strong className="text-red-600">Reddy Anna</strong> is the first choice for fans across the world. Popular options include:
          </p>
          <ul className="list-none space-y-4 text-lg max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="text-red-600 text-2xl mr-3">🏏</span>
              <span><strong className="text-red-600">Reddy Anna Cricket Betting</strong> – IPL, T20, Test Matches, and ODIs</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 text-2xl mr-3">⚽</span>
              <span><strong className="text-red-600">Reddy Anna Football Betting</strong> – Premier League, World Cup, La Liga, and more</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 text-2xl mr-3">🎾</span>
              <span>Tennis & Other Sports – Bet on Wimbledon, French Open, US Open, and beyond</span>
            </li>
          </ul>
          <p className="mt-8 text-center text-gray-600 text-lg">
            With real-time odds, live updates, and seamless navigation, <strong className="text-red-600">reddy anna online betting</strong> ensures a world-class betting experience.
          </p>
        </div>

        {/* Reddy Anna Casino Games */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-black-600">
            Reddy Anna Casino Games
          </h2>
          <p className="mb-8 text-center text-gray-600 text-lg">
            The <strong className="text-red-600">Reddy Anna casino</strong> offers something for every player:
          </p>
          <ul className="list-none space-y-4 text-lg max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="text-red-600 text-2xl mr-3">🎰</span>
              <span><strong className="text-red-600">Reddy Anna Slots</strong> – Exciting themes with jackpots</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 text-2xl mr-3">🃏</span>
              <span>Card Games – Blackjack, Poker, Baccarat</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 text-2xl mr-3">🎡</span>
              <span>Roulette & Live Dealer Games – Real casino thrill at your fingertips</span>
            </li>
          </ul>
          <p className="mt-8 text-center text-gray-600 text-lg">
            Whether you’re a casual gamer or a professional player, <strong className="text-red-600">reddy anna casino</strong> guarantees fun and fair play.
          </p>
        </div>

        {/* Responsible Gaming with Reddy Anna */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-black-600">
            Responsible Gaming with Reddy Anna
          </h2>
          <p className="mb-8 text-center text-gray-600 text-lg">
            At <strong className="text-red-600">Reddy Anna</strong>, we believe gaming should be fun and safe. That’s why <strong className="text-red-600">reddy anna</strong> promotes responsible betting practices, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 max-w-2xl mx-auto">
            <li>Betting limits</li>
            <li>Self-control tools</li>
            <li>Awareness guides</li>
          </ul>
          <p className="mt-8 text-center text-gray-600 text-lg">
            Your safety and enjoyment are always the top priority at <strong className="text-red-600">Reddy Anna</strong>.
          </p>
        </div>

        {/* Reddy Anna Community & Support */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-black-600">
            Reddy Anna Community & Support
          </h2>
          <p className="mb-8 text-center text-gray-600 text-lg">
            More than a platform, <strong className="text-red-600">Reddy Anna</strong> is a community. Through forums, live chat, and social media, players on <strong className="text-red-600">reddy anna</strong> can connect, share tips, and celebrate wins. Plus, with 24/7 customer support, you’re never alone on your gaming journey.
          </p>
        </div>

        {/* The Future of Reddy Anna */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-black-600">
            The Future of Reddy Anna
          </h2>
          <p className="mb-8 text-center text-gray-600 text-lg">
            The <strong className="text-red-600">Reddy Anna</strong> team is constantly innovating to stay ahead in online betting and gaming. Future plans for <strong className="text-red-600">reddy anna</strong> include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 max-w-2xl mx-auto">
            <li>Esports betting</li>
            <li>AI-powered recommendations</li>
            <li>VR and blockchain-based gaming</li>
            <li>Loyalty rewards and exclusive offers</li>
          </ul>
          <p className="mt-8 text-center text-gray-600 text-lg">
            With <strong className="text-red-600">Reddy Anna</strong>, the future of online betting is already here.
          </p>
        </div>

        {/* Join Reddy Anna Today - Call to Action */}
        <div className="bg-red-600 text-white p-10 rounded-lg shadow-xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Reddy Anna Today
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Don’t miss out on the excitement. Sign up with <strong className="text-white">Reddy Anna</strong> and experience the best in:
          </p>
          <ul className="list-none space-y-3 mb-10 text-xl font-medium">
            <li className="flex items-center justify-center">
              <span className="mr-3">✅</span> Sports betting with competitive odds
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-3">✅</span> World-class casino games
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-3">✅</span> Secure and fair play
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-3">✅</span> Instant updates and seamless navigation
            </li>
          </ul>
          <a
            href="https://api.whatsapp.com/send?phone=918890051287&text=Hi, I want to join Reddy Anna!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-red-800 font-bold py-4 px-10 rounded-full text-2xl uppercase tracking-wide transition-all duration-300 hover:bg-yellow-300 hover:scale-105 shadow-lg"
          >
            👉 Join Reddy Anna now and be part of the fastest-growing online betting community.
          </a>
        </div>

      </div>
    </section>
  );
};
