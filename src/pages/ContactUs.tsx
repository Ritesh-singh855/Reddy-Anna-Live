import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openWhatsApp } from "@/utils/whatsapp";

import { SEO } from "@/components/SEO";

export const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Contact Reddy Anna Live - 24/7 Customer Support & New ID Registration"
        description="Get instant support from Reddy Anna Live customer care team. Contact us for new online ID registration, account issues, withdrawals, and technical support. Available 24/7 via WhatsApp for fast assistance."
        keywords="reddy anna live contact, reddy anna customer care, reddy anna support, new id registration, reddy anna whatsapp, customer service, technical support, account help, withdrawal support, betting support"
        canonical="https://www.reddyannalive.in/contact-us"
        robots="index,follow"
        og={{
          title: "Contact Reddy Anna Live - 24/7 Customer Support & New ID Registration",
          description: "Get instant support from Reddy Anna Live customer care team. Contact us for new online ID registration, account issues, withdrawals, and technical support.",
          type: "website",
          url: "https://www.reddyannalive.in/contact-us",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Contact Reddy Anna Live - 24/7 Customer Support & New ID Registration",
          description: "Get instant support from Reddy Anna Live customer care team. Contact us for new online ID registration, account issues, withdrawals, and technical support.",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.reddyannalive.in/" },
              { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://www.reddyannalive.in/contact-us" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Contact Us - Reddy Anna Live",
            url: "https://www.reddyannalive.in/contact-us",
            description: "Contact Reddy Anna Live for new online ID registration and customer support.",
          },
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Reddy Anna Live",
            url: "https://www.reddyannalive.in/contact-us",
            description: "Get in touch with Reddy Anna Live customer support for assistance with your betting account.",
            mainEntity: {
              "@type": "Organization",
              name: "Reddy Anna Live",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8890051287",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi", "Telugu", "Tamil", "Bengali"],
                areaServed: "India",
                hoursAvailable: "24/7"
              }
            }
          }
        ]}
      />
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
                reddybook, reddy anna, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, gold365, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted, reddyannabook, instagram id
              </div>
              <h2 className="text-3xl font-bold mb-8 text-yellow-400">
                Get in Touch
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  <strong>Welcome to Reddy Anna Live Customer Support!</strong> Our dedicated team is here to provide you with exceptional service and support for all your betting needs. Whether you're a new user looking to create your first account or an existing customer needing assistance, we're available 24/7 to help you.
                </p>
                <p>
                  <strong>New ID Registration:</strong> Getting started with Reddy Anna Live is quick and easy. Our support team will guide you through the entire process of creating your new online ID in just 2 minutes. No complex documentation or lengthy verification processes - just simple, fast registration. Once you have your ID, you can start enjoying our <a href="/sports" className="text-yellow-400 hover:text-yellow-300 underline">sports betting services</a> and <a href="/casino" className="text-yellow-400 hover:text-yellow-300 underline">live casino games</a> immediately.
                </p>
                <p>
                  <strong>Account Support:</strong> Need help with deposits, withdrawals, or account management? Our experienced customer care representatives are trained to handle all types of account-related queries with professionalism and efficiency.
                </p>
                <p>
                  <strong>Technical Assistance:</strong> Facing any technical issues with our platform? Our technical support team is equipped to resolve login problems, payment issues, and any other technical difficulties you might encounter.
                </p>
                <p>
                  <strong>Game Support:</strong> New to betting or need clarification on game rules? Our support team can explain betting options, game rules, and help you understand the various sports and casino games available on our platform.
                </p>
                <p>
                  <strong>Language Support:</strong> We provide customer support in multiple Indian languages including English, Hindi, Telugu, Tamil, and Bengali to ensure clear communication and better assistance.
                </p>
                <p>
                  <strong>Response Time:</strong> Our customer support team is committed to providing quick responses. Most queries are resolved within minutes, and complex issues are addressed within 24 hours. We understand that in the world of online betting, time is crucial, and we ensure our support is both fast and effective.
                </p>
                <p>
                  <strong>Multiple Contact Channels:</strong> While WhatsApp is our primary support channel, we also provide assistance through our website chat system and email support. Our team is trained to handle all types of queries across different communication channels with the same level of professionalism and expertise.
                </p>
                <p>
                  <strong>Security and Privacy:</strong> All your communications with our support team are completely secure and confidential. We follow strict data protection protocols to ensure your personal information and betting activities remain private and secure at all times.
                </p>
                <p>
                  <strong>Feedback and Suggestions:</strong> We value your feedback and suggestions for improving our services. Our support team actively collects customer feedback and forwards it to our development team to continuously enhance the user experience on our platform.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  className="h-11 rounded-md px-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
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

      {/* Contact Methods Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">
                WhatsApp Support
              </h3>
              <p className="text-gray-400 mb-4">
                Get instant support via WhatsApp. Our team responds within minutes for quick assistance.
              </p>
              <p className="text-yellow-400 font-semibold">+91-8890051287</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-gray-400 mb-4">
                Our customer support team is available round the clock to assist you with any queries or issues.
              </p>
              <p className="text-yellow-400 font-semibold">Always Online</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Multi-Language Support</h3>
              <p className="text-gray-400 mb-4">
                We provide support in multiple Indian languages for better communication and understanding.
              </p>
              <p className="text-yellow-400 font-semibold">English, Hindi, Telugu, Tamil, Bengali</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Can Help You With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🆔</div>
              <h3 className="text-xl font-semibold mb-3">New ID Creation</h3>
              <p className="text-gray-400">
                Quick and easy account setup with instant approval and activation.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">Deposits & Withdrawals</h3>
              <p className="text-gray-400">
                Assistance with payment methods, transaction issues, and withdrawal processing.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-3">Account Security</h3>
              <p className="text-gray-400">
                Help with password recovery, account verification, and security concerns.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-3">Game Assistance</h3>
              <p className="text-gray-400">
                Rules explanation, betting guidance, and technical game support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">How quickly can I get a new ID?</h3>
              <p className="text-gray-400">New Reddy Anna Live IDs are created and activated within 2 minutes of registration. No waiting time required.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">What documents are required?</h3>
              <p className="text-gray-400">No KYC or documentation is required for account creation. Simple registration process with minimal information.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">How fast are withdrawals?</h3>
              <p className="text-gray-400">Withdrawals are processed instantly. You can receive your winnings within minutes of requesting.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Is customer support really 24/7?</h3>
              <p className="text-gray-400">Yes, our customer support team is available 24 hours a day, 7 days a week via WhatsApp.</p>
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
