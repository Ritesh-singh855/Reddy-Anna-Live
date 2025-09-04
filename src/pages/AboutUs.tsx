import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openWhatsApp } from "@/utils/whatsapp";
import { Footer } from "@/components/Footer";

import { SEO } from "@/components/SEO";

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="About Reddy Anna Live - India's Premier Online Betting Platform Since 2010"
        description="Discover Reddy Anna Live's journey since 2010. India's most trusted online sports betting and casino platform with 200+ branches, 10L+ happy customers, and 24/7 support. Fast deposits, instant withdrawals, and secure betting experience."
        keywords="reddy anna live about, reddy anna history, online betting india, trusted betting platform, cricket betting platform, casino platform india, fantasy cricket, teen patti online, andar bahar, live casino games, sports betting india, betting platform since 2010, cricbet99, gold365, reddyannabook, instagram id, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted"
        canonical="https://www.reddyannalive.in/about-us"
        robots="index,follow"
        og={{
          title: "About Reddy Anna Live - India's Premier Online Betting Platform Since 2010",
          description: "Discover Reddy Anna Live's journey since 2010. India's most trusted online sports betting and casino platform with 200+ branches, 10L+ happy customers, and 24/7 support.",
          type: "website",
          url: "https://www.reddyannalive.in/about-us",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        twitter={{
          card: "summary_large_image",
          title: "About Reddy Anna Live - India's Premier Online Betting Platform Since 2010",
          description: "Discover Reddy Anna Live's journey since 2010. India's most trusted online sports betting and casino platform with 200+ branches, 10L+ happy customers.",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.reddyannalive.in/" },
              { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.reddyannalive.in/about-us" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About Us - Reddy Anna Live",
            url: "https://www.reddyannalive.in/about-us",
            description: "Learn about Reddy Anna Live: India's trusted online sports betting and live casino platform since 2010.",
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Reddy Anna Live",
            url: "https://www.reddyannalive.in/",
            logo: "https://www.reddyannalive.in/images/logo.webp",
            description: "India's premier online sports betting and casino platform since 2010",
            foundingDate: "2010",
            numberOfEmployees: "200+",
            areaServed: "India",
            serviceType: ["Online Sports Betting", "Live Casino Games", "Fantasy Cricket", "Indian Card Games"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8890051287",
              contactType: "customer service",
              availableLanguage: ["English", "Hindi", "Telugu", "Tamil", "Bengali"]
            }
          }
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About US
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
              <h2 className="text-3xl font-bold mb-8 text-yellow-400">
                About Reddy Anna Live
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  <strong>Reddy Anna Live</strong> has been India's most trusted name in online sports betting and casino gaming since 2010. With over 13 years of experience, <strong>Reddy Anna Live</strong> has established itself as the premier platform for fantasy cricket, live cricket betting, and traditional Indian card games. <strong>Reddy Anna Live</strong> continues to lead the industry with innovative features and unmatched reliability.
                </p>
                <p>
                  The <strong>Reddy Anna Live</strong> platform serves millions of users across India with a comprehensive network of 200+ authorized branches. <strong>Reddy Anna Live</strong> specializes in providing secure, fast, and reliable online betting services with 24/7 customer support and instant withdrawal facilities. Every aspect of <strong>Reddy Anna Live</strong> is designed to provide the best possible experience for our valued customers.
                </p>
                <p>
                  <strong>Why Choose Reddy Anna Live?</strong> <strong>Reddy Anna Live</strong> offers the most competitive odds, fastest payouts, and the widest variety of betting options. From IPL and international cricket matches to live casino games like Teen Patti, Andar Bahar, and Roulette, <strong>Reddy Anna Live</strong> has everything a betting enthusiast needs. Explore our comprehensive <a href="/sports" className="text-yellow-400 hover:text-yellow-300 underline">sports betting platform</a> and discover our exciting <a href="/casino" className="text-yellow-400 hover:text-yellow-300 underline">live casino games</a> for the ultimate gaming experience with <strong>Reddy Anna Live</strong>.
                </p>
                <p>
                  Getting started with <strong>Reddy Anna Live</strong> is simple - create your <strong>Reddy Anna Live</strong> Online ID in just 2 minutes. No KYC required, no lengthy documentation process. The <strong>Reddy Anna Live</strong> demo account feature allows you to practice and understand the games before playing with real money. <strong>Reddy Anna Live</strong> makes it easy for everyone to get started.
                </p>
                <p>
                  <strong>Security & Trust at Reddy Anna Live:</strong> <strong>Reddy Anna Live</strong> prioritizes the security of our users' funds and personal information. The <strong>Reddy Anna Live</strong> platform uses advanced encryption technology and follows strict security protocols to ensure a safe betting environment for all our customers. <strong>Reddy Anna Live</strong> has never compromised on security and safety.
                </p>
                <p>
                  <strong>Reddy Anna Live</strong> has built a reputation for excellence in the online betting industry. With <strong>Reddy Anna Live</strong>, you get access to the most comprehensive betting platform in India. <strong>Reddy Anna Live</strong> offers live cricket betting, casino games, and traditional Indian card games all under one roof. The <strong>Reddy Anna Live</strong> experience is unmatched by any other platform.
                </p>
                <p>
                  When you choose <strong>Reddy Anna Live</strong>, you're choosing the best. <strong>Reddy Anna Live</strong> has been serving customers for over 13 years with dedication and commitment. <strong>Reddy Anna Live</strong> understands what Indian bettors want and delivers it consistently. Join millions of satisfied customers who trust <strong>Reddy Anna Live</strong> for their betting needs.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  className="h-11 rounded-md px-8 bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
                  onClick={() => openWhatsApp()}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Get WhatsApp ID
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
                      Get your Online ID with instant approval.
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏏</div>
              <h3 className="text-xl font-semibold mb-3">
                Live Cricket Betting
              </h3>
              <p className="text-gray-400">
                Experience the thrill of live cricket betting with <strong>Reddy Anna Live</strong> real-time odds, instant payouts, and comprehensive coverage of IPL, international matches, and domestic tournaments. The <strong>Reddy Anna Live</strong> <a href="/sports" className="text-yellow-400 hover:text-yellow-300 underline">cricket betting platform</a> offers in-play betting, match predictions, and detailed statistics to help you make informed decisions. <strong>Reddy Anna Live</strong> provides the best cricket betting experience in India. Check out our <a href="/live-matches" className="text-yellow-400 hover:text-yellow-300 underline">live matches</a> section for current betting opportunities with <strong>Reddy Anna Live</strong>.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎰</div>
              <h3 className="text-xl font-semibold mb-3">Live Casino Games</h3>
              <p className="text-gray-400">
                Enjoy premium casino games with <strong>Reddy Anna Live</strong> live dealers, including Roulette, Blackjack, Baccarat, and Dragon Tiger with HD streaming and real-time interaction. The <strong>Reddy Anna Live</strong> <a href="/casino" className="text-yellow-400 hover:text-yellow-300 underline">live casino</a> features professional dealers, multiple camera angles, and interactive chat functionality for an authentic casino experience. <strong>Reddy Anna Live</strong> brings you the best live casino experience. Explore our full range of <a href="/casino" className="text-yellow-400 hover:text-yellow-300 underline">casino games</a> for endless entertainment with <strong>Reddy Anna Live</strong>.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🃏</div>
              <h3 className="text-xl font-semibold mb-3">Indian Card Games</h3>
              <p className="text-gray-400">
                Play traditional Indian card games like Teen Patti, Andar Bahar, 7 Up 7 Down, and more with <strong>Reddy Anna Live</strong> authentic gameplay and cultural authenticity. The <strong>Reddy Anna Live</strong> Indian card games section features multiple variants, live tournaments, and special events that celebrate the rich tradition of Indian card gaming. <strong>Reddy Anna Live</strong> offers the most authentic Indian card gaming experience online.
              </p>
            </div>
          </div>
          
          {/* Additional Services */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">⚽</div>
              <h4 className="text-lg font-semibold mb-2">Football Betting</h4>
              <p className="text-gray-400 text-sm">
                <strong>Reddy Anna Live</strong> comprehensive football betting covering Premier League, La Liga, Serie A, and international tournaments with live betting options. <strong>Reddy Anna Live</strong> provides the best football betting experience with competitive odds and instant payouts.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎾</div>
              <h4 className="text-lg font-semibold mb-2">Tennis Betting</h4>
              <p className="text-gray-400 text-sm">
                <strong>Reddy Anna Live</strong> professional tennis betting with coverage of Grand Slams, ATP, WTA tours, and Challenger events with detailed match analysis. <strong>Reddy Anna Live</strong> offers comprehensive tennis betting with live odds and instant results.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏇</div>
              <h4 className="text-lg font-semibold mb-2">Horse Racing</h4>
              <p className="text-gray-400 text-sm">
                <strong>Reddy Anna Live</strong> exciting horse racing betting with live race coverage, detailed form guides, and expert tips for both Indian and international races. <strong>Reddy Anna Live</strong> provides the most comprehensive horse racing betting platform in India.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg font-semibold mb-2">Binary Options</h4>
              <p className="text-gray-400 text-sm">
                <strong>Reddy Anna Live</strong> simple and exciting binary options trading with short-term predictions on various markets and quick payout options. <strong>Reddy Anna Live</strong> offers the best binary options trading platform with instant results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why <strong>Reddy Anna Live</strong> Stands Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Instant Withdrawals</h3>
              <p className="text-gray-400">
                Get your winnings instantly with <strong>Reddy Anna Live</strong> lightning-fast withdrawal system. <strong>Reddy Anna Live</strong> ensures no waiting, no delays for all your withdrawals.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">100% Secure</h3>
              <p className="text-gray-400">
                <strong>Reddy Anna Live</strong> advanced encryption and security protocols ensure your data and funds are always protected. <strong>Reddy Anna Live</strong> maintains the highest security standards in the industry.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Mobile Optimized</h3>
              <p className="text-gray-400">
                <strong>Reddy Anna Live</strong> seamless betting experience on all devices with our responsive and user-friendly interface. <strong>Reddy Anna Live</strong> works perfectly on mobile, tablet, and desktop devices.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Best Odds</h3>
              <p className="text-gray-400">
                <strong>Reddy Anna Live</strong> competitive odds and multiple betting options to maximize your winning potential. <strong>Reddy Anna Live</strong> offers the best odds in the market for all sports and casino games.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Reddy Anna Live Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose <strong>Reddy Anna Live</strong> for Your Betting Needs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Trusted by Millions</h3>
              <p className="text-gray-300">
                <strong>Reddy Anna Live</strong> has been trusted by millions of users across India for over 13 years. <strong>Reddy Anna Live</strong> has built a reputation for reliability, security, and excellent customer service. When you choose <strong>Reddy Anna Live</strong>, you're choosing a platform that has stood the test of time and continues to deliver exceptional betting experiences.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Comprehensive Betting Options</h3>
              <p className="text-gray-300">
                <strong>Reddy Anna Live</strong> offers the most comprehensive range of betting options in India. From cricket and football to casino games and traditional Indian card games, <strong>Reddy Anna Live</strong> has everything you need for an exciting betting experience. <strong>Reddy Anna Live</strong> covers all major sports and tournaments worldwide.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">24/7 Customer Support</h3>
              <p className="text-gray-300">
                <strong>Reddy Anna Live</strong> provides round-the-clock customer support to ensure you always have help when you need it. The <strong>Reddy Anna Live</strong> support team is available 24/7 via WhatsApp to assist with any queries or issues. <strong>Reddy Anna Live</strong> customer service is known for its quick response times and helpful assistance.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Fast and Secure Transactions</h3>
              <p className="text-gray-300">
                <strong>Reddy Anna Live</strong> ensures all your transactions are processed quickly and securely. With <strong>Reddy Anna Live</strong>, you can deposit and withdraw funds instantly without any delays. <strong>Reddy Anna Live</strong> uses advanced security measures to protect your financial information and ensure safe transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Coverage Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sports & Events Coverage at <strong>Reddy Anna Live</strong></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏏</div>
              <h4 className="font-semibold">Cricket</h4>
              <p className="text-sm text-gray-400"><strong>Reddy Anna Live</strong> IPL, BBL, CWC, PSL</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚽</div>
              <h4 className="font-semibold">Football</h4>
              <p className="text-sm text-gray-400"><strong>Reddy Anna Live</strong> Premier League, La Liga</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎾</div>
              <h4 className="font-semibold">Tennis</h4>
              <p className="text-sm text-gray-400"><strong>Reddy Anna Live</strong> Grand Slams, ATP, WTA</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏀</div>
              <h4 className="font-semibold">Basketball</h4>
              <p className="text-sm text-gray-400"><strong>Reddy Anna Live</strong> NBA, EuroLeague</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏏</div>
              <h4 className="font-semibold">Kabaddi</h4>
              <p className="text-sm text-gray-400"><strong>Reddy Anna Live</strong> PKL, Pro Kabaddi</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚽</div>
              <h4 className="font-semibold">ISL</h4>
              <p className="text-sm text-gray-400"><strong>Reddy Anna Live</strong> Indian Super League</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join <strong>Reddy Anna Live</strong> Today!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            <strong>Reddy Anna Live</strong> is India's most trusted betting platform with over 13 years of experience. 
            <strong>Reddy Anna Live</strong> offers the best odds, fastest payouts, and comprehensive betting options. 
            Join millions of satisfied customers who trust <strong>Reddy Anna Live</strong> for their betting needs. 
            <strong>Reddy Anna Live</strong> provides 24/7 customer support and secure transactions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Why <strong>Reddy Anna Live</strong>?</h3>
              <p className="text-gray-300 text-sm">
                <strong>Reddy Anna Live</strong> has been serving customers for over 13 years with dedication and commitment. 
                <strong>Reddy Anna Live</strong> understands what Indian bettors want and delivers it consistently.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">What <strong>Reddy Anna Live</strong> Offers</h3>
              <p className="text-gray-300 text-sm">
                <strong>Reddy Anna Live</strong> offers live cricket betting, casino games, and traditional Indian card games. 
                <strong>Reddy Anna Live</strong> provides the most comprehensive betting platform in India.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">How <strong>Reddy Anna Live</strong> Helps</h3>
              <p className="text-gray-300 text-sm">
                <strong>Reddy Anna Live</strong> makes betting easy with instant withdrawals and 24/7 support. 
                <strong>Reddy Anna Live</strong> ensures your betting experience is safe and secure.
              </p>
            </div>
          </div>
          <Button
            className="h-11 rounded-md px-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
            onClick={() => openWhatsApp()}
          >
            Get Your <strong>Reddy Anna Live</strong> ID Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* SEO Keywords (hidden for search engines) */}
      <div style={{ display: "none" }}>
        cricbet99, lotus365, mahadev book, mahakal book, reddy anna app, reddy
        anna betting, reddy anna book, reddy anna book 247, reddy anna book live
        login, reddy anna book login, reddy anna club, reddy anna club live,
        reddy anna customer care number, reddy anna live, reddy anna live
        casino, reddy anna live cricket, reddy anna live login, reddy anna live
        score, reddy anna live today, reddy anna login, reddy anna online, reddy
        anna online book id, reddy anna website, reddy anna whatsapp number,
        reddybook, reddy anna, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, gold365, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted, reddyannabook, instagram id, cricbet99, gold365
      </div>
    </div>
  );
};
