import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

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
              Privacy Policy - Reddy Anna Live
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Your privacy is important to Reddy Anna Live. Learn how Reddy Anna Live protects your data and ensures your privacy.
            </p>
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
                  Welcome to reddyannalive.in! At Reddy Anna Live, we are
                  committed to protecting and respecting your privacy. This
                  Privacy Policy outlines how Reddy Anna Live collects, uses, discloses, and
                  protects your personal information. By using our website or any
                  services provided by Reddy Anna Live, you agree to the terms
                  outlined in this Reddy Anna Live Privacy Policy.
                </p>

                <h3 className="text-xl font-semibold text-white">
                  Information We Collect
                </h3>
                <p>
                  <strong>Personal Information You Provide:</strong> When you
                  use Reddy Anna Live or interact with us, you may provide Reddy Anna Live
                  with information such as your name, email address, phone
                  number, and any other information you choose to share. This includes
                  information provided during account registration, customer support
                  interactions, and when participating in our Reddy Anna Live betting and gaming services.
                  Reddy Anna Live collects this information to provide you with personalized services,
                  process transactions, and maintain your Reddy Anna Live account security.
                </p>
                <p>
                  <strong>Automatically Collected Information:</strong> Reddy Anna Live may
                  automatically collect information about your device and usage
                  of Reddy Anna Live through cookies and similar technologies.
                  This information may include your IP address, browser type,
                  operating system, device identifiers, and other usage details.
                  Reddy Anna Live uses this information to improve our services, analyze user
                  behavior, prevent fraud, and ensure the security of our Reddy Anna Live platform.
                  This data helps Reddy Anna Live understand how users interact with our website
                  and enables Reddy Anna Live to provide a better user experience.
                </p>
                <p>
                  <strong>Transaction Information:</strong> Reddy Anna Live collects information
                  about your betting activities, deposits, withdrawals, and gaming
                  history. This includes details about the games you play, amounts
                  wagered, winnings, and payment methods used. This information is
                  essential for processing transactions, maintaining Reddy Anna Live account records,
                  and complying with regulatory requirements at Reddy Anna Live.
                </p>
                <p>
                  <strong>Communication Data:</strong> Reddy Anna Live may collect information
                  from your communications with us, including customer support
                  inquiries, feedback, and any other correspondence. This helps
                  Reddy Anna Live provide better customer service and resolve any issues you
                  may encounter while using our Reddy Anna Live platform.
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

      {/* Reddy Anna Live Privacy Protection */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Reddy Anna Live Privacy Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Data Security</h3>
              <p className="text-gray-400">
                Your data is protected with advanced encryption at Reddy Anna Live. 
                Reddy Anna Live uses industry-standard security measures to safeguard your information.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Privacy Controls</h3>
              <p className="text-gray-400">
                You have full control over your data with Reddy Anna Live. 
                Reddy Anna Live provides easy-to-use privacy settings and data management options.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Transparency</h3>
              <p className="text-gray-400">
                Reddy Anna Live is transparent about data collection and usage. 
                Reddy Anna Live provides clear information about how your data is handled.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Fast Processing</h3>
              <p className="text-gray-400">
                Your privacy requests are processed quickly by Reddy Anna Live. 
                Reddy Anna Live ensures prompt response to all privacy-related inquiries.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Compliance</h3>
              <p className="text-gray-400">
                Reddy Anna Live complies with all privacy regulations. 
                Reddy Anna Live follows best practices for data protection and privacy.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Support</h3>
              <p className="text-gray-400">
                Get help with privacy questions from Reddy Anna Live support team. 
                Reddy Anna Live provides dedicated privacy support for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reddy Anna Live Data Handling */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Reddy Anna Live Data Handling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Reddy Anna Live Data Collection</h3>
              <p className="text-gray-400 mb-4">
                Reddy Anna Live collects only necessary data to provide our services. 
                Reddy Anna Live ensures that data collection is minimal and purposeful. 
                Your privacy is protected at every step with Reddy Anna Live.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Account Information at Reddy Anna Live</li>
                <li>• Transaction Data from Reddy Anna Live</li>
                <li>• Usage Analytics at Reddy Anna Live</li>
                <li>• Communication Records with Reddy Anna Live</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Reddy Anna Live Data Usage</h3>
              <p className="text-gray-400 mb-4">
                Reddy Anna Live uses your data responsibly and ethically. 
                Reddy Anna Live processes data only for legitimate business purposes. 
                Trust Reddy Anna Live with your data protection needs.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Service Improvement at Reddy Anna Live</li>
                <li>• Security Enhancement with Reddy Anna Live</li>
                <li>• Customer Support from Reddy Anna Live</li>
                <li>• Legal Compliance at Reddy Anna Live</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Reddy Anna Live Data Storage</h3>
              <p className="text-gray-400 mb-4">
                Your data is stored securely with Reddy Anna Live. 
                Reddy Anna Live uses encrypted storage systems for maximum security. 
                Reddy Anna Live maintains strict access controls for your data.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Encrypted Storage at Reddy Anna Live</li>
                <li>• Secure Servers with Reddy Anna Live</li>
                <li>• Access Controls at Reddy Anna Live</li>
                <li>• Regular Backups by Reddy Anna Live</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Reddy Anna Live Data Sharing</h3>
              <p className="text-gray-400 mb-4">
                Reddy Anna Live does not sell your personal data. 
                Reddy Anna Live shares data only when necessary and with your consent. 
                Reddy Anna Live maintains strict data sharing policies.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• No Data Sales at Reddy Anna Live</li>
                <li>• Limited Sharing with Reddy Anna Live</li>
                <li>• Consent-Based Sharing at Reddy Anna Live</li>
                <li>• Legal Requirements with Reddy Anna Live</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reddy Anna Live Privacy Rights */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Your Rights with Reddy Anna Live</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Access Your Data at Reddy Anna Live</h3>
              <p className="text-gray-400">
                Request access to your personal data from Reddy Anna Live. 
                Reddy Anna Live provides easy access to your information.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Correct Data with Reddy Anna Live</h3>
              <p className="text-gray-400">
                Update or correct your information with Reddy Anna Live. 
                Reddy Anna Live makes it easy to keep your data accurate.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🗑️</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Delete Data from Reddy Anna Live</h3>
              <p className="text-gray-400">
                Request deletion of your data from Reddy Anna Live. 
                Reddy Anna Live respects your right to data deletion.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📤</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Export Data from Reddy Anna Live</h3>
              <p className="text-gray-400">
                Export your data from Reddy Anna Live in standard formats. 
                Reddy Anna Live provides data portability options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reddy Anna Live Privacy Summary */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Reddy Anna Live Privacy Commitment</h2>
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Why Trust Reddy Anna Live with Your Privacy?</h3>
                <p className="text-gray-400 mb-4">
                  Reddy Anna Live is committed to protecting your privacy and personal data. 
                  With Reddy Anna Live, you can trust that your information is handled with the highest standards of security. 
                  Reddy Anna Live implements comprehensive privacy protection measures to ensure your data safety.
                </p>
                <p className="text-gray-400 mb-4">
                  Our Reddy Anna Live platform uses advanced encryption and security protocols. 
                  Reddy Anna Live regularly updates our privacy practices to meet the latest standards. 
                  Trust Reddy Anna Live for secure and private betting experiences.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Advanced Encryption at Reddy Anna Live</li>
                  <li>• Regular Security Updates by Reddy Anna Live</li>
                  <li>• Privacy-First Approach with Reddy Anna Live</li>
                  <li>• Transparent Data Practices at Reddy Anna Live</li>
                  <li>• User Control with Reddy Anna Live</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Reddy Anna Live Privacy Benefits</h3>
                <p className="text-gray-400 mb-4">
                  Experience the benefits of Reddy Anna Live's privacy protection. 
                  Reddy Anna Live ensures that your personal information remains confidential and secure. 
                  Join Reddy Anna Live for a privacy-focused betting experience.
                </p>
                <p className="text-gray-400 mb-4">
                  Reddy Anna Live provides comprehensive privacy controls and data protection. 
                  With Reddy Anna Live, you have full control over your personal information. 
                  Reddy Anna Live is your trusted partner for secure online betting.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Complete Data Protection with Reddy Anna Live</li>
                  <li>• Privacy Controls at Reddy Anna Live</li>
                  <li>• Secure Transactions through Reddy Anna Live</li>
                  <li>• Confidential Support from Reddy Anna Live</li>
                  <li>• Trusted Platform by Reddy Anna Live</li>
                </ul>
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

      {/* Footer */}
      <Footer />

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
    </div>
  );
};
