import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { SEO } from "@/components/SEO";

export const PrivacyPolicy = () => {
  const openWhatsApp = () => {
    const phoneNumber = "918890051287";
    const message = "Hi, I want to get my Reddy Anna Live ID!";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Privacy Policy - Reddy Anna Live Data Protection & Security"
        description="Read Reddy Anna Live's comprehensive Privacy Policy. Learn how we protect your personal data, handle cookies, ensure security, and maintain your privacy while using our betting platform."
        keywords="reddy anna live privacy policy, data protection, user privacy, security policy, cookie policy, personal information, data handling, betting platform privacy"
        canonical="https://www.reddyannalive.in/privacyPolicy"
        robots="index,follow"
        og={{
          title: "Privacy Policy - Reddy Anna Live Data Protection & Security",
          description: "Read Reddy Anna Live's comprehensive Privacy Policy. Learn how we protect your personal data, handle cookies, ensure security, and maintain your privacy.",
          type: "website",
          url: "https://www.reddyannalive.in/privacyPolicy",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Privacy Policy - Reddy Anna Live Data Protection & Security",
          description: "Read Reddy Anna Live's comprehensive Privacy Policy. Learn how we protect your personal data, handle cookies, ensure security, and maintain your privacy.",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.reddyannalive.in/" },
              { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.reddyannalive.in/privacyPolicy" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy - Reddy Anna Live",
            url: "https://www.reddyannalive.in/privacyPolicy",
            description: "Privacy Policy for Reddy Anna Live - comprehensive data protection and security information.",
          },
        ]}
      />
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
                reddybook, reddy anna, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, gold365, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted, reddyannabook, instagram id
              </div>
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
                  number, and any other information you choose to share. This includes
                  information provided during account registration, customer support
                  interactions, and when participating in our betting and gaming services.
                  We collect this information to provide you with personalized services,
                  process transactions, and maintain your account security.
                </p>
                <p>
                  <strong>Automatically Collected Information:</strong> We may
                  automatically collect information about your device and usage
                  of reddyannalive.in through cookies and similar technologies.
                  This information may include your IP address, browser type,
                  operating system, device identifiers, and other usage details.
                  We use this information to improve our services, analyze user
                  behavior, prevent fraud, and ensure the security of our platform.
                  This data helps us understand how users interact with our website
                  and enables us to provide a better user experience.
                </p>
                <p>
                  <strong>Transaction Information:</strong> We collect information
                  about your betting activities, deposits, withdrawals, and gaming
                  history. This includes details about the games you play, amounts
                  wagered, winnings, and payment methods used. This information is
                  essential for processing transactions, maintaining account records,
                  and complying with regulatory requirements.
                </p>
                <p>
                  <strong>Communication Data:</strong> We may collect information
                  from your communications with us, including customer support
                  inquiries, feedback, and any other correspondence. This helps
                  us provide better customer service and resolve any issues you
                  may encounter while using our platform.
                </p>

                <h3 className="text-xl font-semibold text-white">
                  How We Use Your Information
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Providing Services:</strong> To deliver the products
                    or services you requested and to provide customer support.
                    This includes processing your betting transactions, managing
                    your account, providing gaming services, and ensuring the
                    security of your funds and personal information.
                  </li>
                  <li>
                    <strong>Improving Our Services:</strong> To understand how
                    reddyannalive.in is used, diagnose technical issues, and
                    enhance user experience. We analyze user behavior patterns
                    to improve our platform's functionality, optimize performance,
                    and develop new features that better serve our customers.
                  </li>
                  <li>
                    <strong>Communication:</strong> To respond to your
                    inquiries, send important updates, and provide information
                    about our products and services. This includes sending
                    notifications about account activities, promotional offers,
                    and important platform updates.
                  </li>
                  <li>
                    <strong>Security and Fraud Prevention:</strong> To protect
                    against fraud, unauthorized access, and other security
                    threats. We use your information to verify your identity,
                    monitor for suspicious activities, and maintain the integrity
                    of our platform.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with applicable
                    laws, regulations, and legal obligations. This includes
                    maintaining records as required by law and cooperating with
                    regulatory authorities when necessary.
                  </li>
                  <li>
                    <strong>Marketing and Promotions:</strong> To send you
                    information about our services, special offers, and promotions
                    that may be of interest to you. You can opt out of marketing
                    communications at any time.
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

                <h3 className="text-xl font-semibold text-white">
                  Your Choices
                </h3>
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

                <p>
                  Thank you for trusting reddyannalive.in with your information!
                </p>
                <p>reddyannalive.in</p>
                <p>India</p>
              </div>

              <div className="mt-8">
                <Button
                  className="h-11 rounded-md px-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
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
