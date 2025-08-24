import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openWhatsApp } from "@/utils/whatsapp";

export const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact US
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              {/* SEO Keywords (hidden for search engines) */}
              <div style={{ display: "none" }}>
                cricbet99, lotus365, mahadev book, mahakal book, reddy anna app,
                reddy anna betting, reddy anna book, reddy anna book 247, reddy
                anna book live login, reddy anna book login, reddy anna club,
                reddy anna club live, reddy anna customer care number, reddy
                anna live, reddy anna live casino, reddy anna live cricket,
                reddy anna live login, reddy anna live score, reddy anna live
                today, reddy anna login, reddy anna online, reddy anna online
                book id, reddy anna website, reddy anna whatsapp number,
                reddybook
              </div>
              <h2 className="text-3xl font-bold mb-8 text-yellow-400">
                Get in Touch
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Contact Us for New Reddy Anna Live ID and Reddy Anna Customer
                  Support.
                </p>
                <p>
                  If you are looking to create a new Reddy Anna Live ID, our
                  team is here to assist you.
                </p>
                <p>
                  We offer fast and secure account setup to get you started
                  without delays.
                </p>
                <p>
                  For any queries, issues, or technical support, our customer
                  care team is available 24/7.
                </p>
                <p>
                  Reach out today to experience seamless service and dedicated
                  support for all your Reddy Anna needs.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
                  onClick={() => openWhatsApp()}
                >
                  Reddy Anna Customer Support
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Features Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gray-900 border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">🏏</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Fantasy Cricket
                    </h3>
                    <p className="text-gray-400">
                      Best fantasy cricket platform with live matches and
                      real-time updates.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      24/7 Services
                    </h3>
                    <p className="text-gray-400">
                      Round the clock withdrawal and refill services for your
                      convenience.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">💰</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Affordable ID
                    </h3>
                    <p className="text-gray-400">
                      Get your Online ID for just 500 Rs with instant approval.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">🎮</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Demo Account
                    </h3>
                    <p className="text-gray-400">
                      Try our platform with demo account before playing with
                      real money.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Stats */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Our Numbers
                </h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">
                      13+
                    </div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">
                      200+
                    </div>
                    <div className="text-gray-400">Branches</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">
                      10L+
                    </div>
                    <div className="text-gray-400">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">
                      24/7
                    </div>
                    <div className="text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏏</div>
              <h3 className="text-xl font-semibold mb-3">
                Live Cricket Betting
              </h3>
              <p className="text-gray-400">
                Bet on live cricket matches with real-time odds and instant
                payouts.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎰</div>
              <h3 className="text-xl font-semibold mb-3">Casino Games</h3>
              <p className="text-gray-400">
                Play your favorite casino games with live dealers and real
                players.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🃏</div>
              <h3 className="text-xl font-semibold mb-3">Indian Card Games</h3>
              <p className="text-gray-400">
                Traditional Indian card games like Teen Patti, Andar Bahar, and
                more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-red-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white font-medium">
            Disclaimer:- This Website is only for 18+ users. If you are from
            Please leave the website immediately if you are not eligible. Be aware of fraudsters, we only deal via WhatsApp
            website immediately. Be aware of fraudsters, we only deal via
            WhatsApp
          </p>
        </div>
      </section>

      {/* Copyright */}
      <section className="py-6 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} Reddy Anna Live. All Rights
            Reserved.
          </p>
        </div>
      </section>
    </div>
  );
};
