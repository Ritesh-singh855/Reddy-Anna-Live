import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const PrivacyPolicy = () => {
  const openWhatsApp = () => {
    const phoneNumber = "918890051287";
    const message = "Hi, I want to get my Reddy Anna Live ID!";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
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
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>Effective Date: 29/1/2024 </p>
                <p>
                  Welcome to reddyannalive.in! At reddyannalive.in, we are
                  committed to protecting and respecting your privacy. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  protect your personal information. By using our website or any
                  services provided by reddyannalive.in, you agree to the terms
                  outlined in this Privacy Policy.
                </p>

                <h3 className="text-xl font-semibold text-white">
                  Information We Collect
                </h3>
                <p>
                  <strong>Personal Information You Provide:</strong> When you
                  use reddyannalive.in or interact with us, you may provide us
                  with information such as your name, email address, phone
                  number, and any other information you choose to share.
                </p>
                <p>
                  <strong>Automatically Collected Information:</strong> We may
                  automatically collect information about your device and usage
                  of reddyannalive.in through cookies and similar technologies.
                  This information may include your IP address, browser type,
                  operating system, and other usage details.
                </p>

                <h3 className="text-xl font-semibold text-white">
                  How We Use Your Information
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Providing Services:</strong> To deliver the products
                    or services you requested and to provide customer support.
                  </li>
                  <li>
                    <strong>Improving Our Services:</strong> To understand how
                    reddyannalive.in is used, diagnose technical issues, and
                    enhance user experience.
                  </li>
                  <li>
                    <strong>Communication:</strong> To respond to your
                    inquiries, send important updates, and provide information
                    about our products and services.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white">
                  Disclosure of Your Information
                </h3>
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this Privacy Policy or as required by law.
                </p>

                <h3 className="text-xl font-semibold text-white">Your Choices</h3>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Access Your Information:</strong> Request access to
                    the personal information we hold about you.
                  </li>
                  <li>
                    <strong>Correct Your Information:</strong> Ask us to correct
                    any incomplete or inaccurate information.
                  </li>
                  <li>
                    <strong>Delete Your Information:</strong> Request the
                    deletion of your personal information.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white">Security</h3>
                <p>
                  We implement reasonable security measures to protect your
                  personal information from unauthorized access, disclosure,
                  alteration, and destruction.
                </p>

                <h3 className="text-xl font-semibold text-white">
                  Changes to this Privacy Policy
                </h3>
                <p>
                  We reserve the right to update this Privacy Policy from time
                  to time. Any changes will be effective immediately upon
                  posting the revised Privacy Policy on reddyannalive.in.
                </p>

                <h3 className="text-xl font-semibold text-white">Contact Us</h3>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact us.
                </p>

                <p>Thank you for trusting reddyannalive.in with your information!</p>
                <p>reddyannalive.in</p>
                <p>India</p>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
                  onClick={openWhatsApp}
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
                    <div className="text-3xl font-bold text-yellow-400">13+</div>
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
                    <div className="text-3xl font-bold text-yellow-400">24/7</div>
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
          <p className="text-white font-semibold">
            Disclaimer:- This Website is only for 18+ users. If you are from
            Telangana, Orissa, Assam, Sikkim, and Nagaland Please leave the
            website immediately. Be aware of fraudsters, we only deal via
            WhatsApp
          </p>
        </div>
      </section>

      {/* Copyright */}
      <section className="py-6 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} Reddy Anna Live. All Rights Reserved.
          </p>
        </div>
      </section>
    </div>
  );
};
