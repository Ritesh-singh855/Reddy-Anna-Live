import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openWhatsApp } from "@/utils/whatsapp";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";

const faqCategories = [
  {
    title: "Getting Started",
    icon: "🚀",
    faqs: [
      {
        question: "What is Reddy Anna?",
        answer: "Reddy Anna is India's most trusted cricket betting platform since 2010, serving 10+ lakh customers with instant withdrawals and 24/7 support."
      },
      {
        question: "How do I create a Reddy Anna Live account?",
        answer: "Creating your Reddy Anna Live account is simple and fast. Contact us via WhatsApp, and our support team will guide you through the process. Your new ID will be created and activated within 2 minutes, with no KYC or documentation required."
      },
      {
        question: "How much does it cost to get started?",
        answer: "You can get started with Reddy Anna Live easily. Contact us via WhatsApp to get your online ID and access to all our betting options, games, and services with no additional hidden charges or monthly fees."
      },
      {
        question: "Do I need to provide any documents?",
        answer: "No, Reddy Anna Live does not require any KYC or documentation for account creation. We believe in providing a hassle-free experience to our users."
      },
      {
        question: "How long does account creation take?",
        answer: "Account creation is instant! Your Reddy Anna Live ID will be created and activated within 2 minutes of registration. No waiting time required."
      }
    ]
  },
  {
    title: "Betting & Games",
    icon: "🎯",
    faqs: [
      {
        question: "What sports can I bet on?",
        answer: "Reddy Anna Live offers comprehensive betting options including cricket (IPL, international matches), football, tennis, basketball, kabaddi, and many more sports with live betting options. Check out our <a href='/sports' className='text-yellow-400 hover:text-yellow-300 underline'>sports betting page</a> for a complete list of available sports and tournaments."
      },
      {
        question: "What casino games are available?",
        answer: "We offer a wide range of live casino games including Roulette, Blackjack, Baccarat, Dragon Tiger, and traditional Indian card games like Teen Patti, Andar Bahar, and 7 Up 7 Down. Visit our <a href='/casino' className='text-yellow-400 hover:text-yellow-300 underline'>casino games page</a> to explore all available games and their features."
      },
      {
        question: "Can I practice before playing with real money?",
        answer: "Yes! Reddy Anna Live offers a demo account feature that allows you to practice and understand the games before playing with real money. This helps you learn the rules and build confidence at no cost."
      },
      {
        question: "What are the betting limits?",
        answer: "We offer flexible betting limits to accommodate both casual players and high rollers. Contact our support team for specific limit information based on your account level."
      }
    ]
  },
  {
    title: "Payments & Withdrawals",
    icon: "💰",
    faqs: [
      {
        question: "How fast are withdrawals?",
        answer: "Withdrawals are processed instantly! Unlike other platforms that take hours or days, Reddy Anna Live provides instant withdrawals, allowing you to receive your winnings within minutes of requesting them."
      },
      {
        question: "What payment methods are accepted?",
        answer: "We accept all major payment methods including UPI, net banking, credit/debit cards, and e-wallets. All transactions are secure, encrypted, and processed instantly for your convenience."
      },
      {
        question: "Is there a minimum withdrawal amount?",
        answer: "We have flexible withdrawal limits to accommodate all types of players. Contact our support team for specific withdrawal limit information based on your account."
      },
      {
        question: "Are there any withdrawal fees?",
        answer: "Reddy Anna Live offers free withdrawals for most payment methods. Any applicable fees will be clearly communicated before processing your withdrawal request."
      }
    ]
  },
  {
    title: "Account & Security",
    icon: "🔒",
    faqs: [
      {
        question: "Is Reddy Anna Live safe and secure?",
        answer: "Absolutely! Reddy Anna Live uses advanced encryption technology and follows strict security protocols to protect your personal information and funds. We have been serving customers safely for over 13 years with a proven track record of security and reliability."
      },
      {
        question: "What if I forget my password?",
        answer: "If you forget your password, contact our 24/7 customer support team via WhatsApp. They will help you reset your password and regain access to your account quickly and securely."
      },
      {
        question: "Can I have multiple accounts?",
        answer: "Each user is allowed only one account to ensure fair play and prevent abuse. Multiple accounts may result in suspension of all accounts."
      },
      {
        question: "How do I update my account information?",
        answer: "To update your account information, contact our customer support team via WhatsApp. They will guide you through the process and ensure your information is updated securely."
      }
    ]
  },
  {
    title: "Customer Support",
    icon: "🎧",
    faqs: [
      {
        question: "Is customer support really available 24/7?",
        answer: "Yes! Our dedicated customer support team is available 24 hours a day, 7 days a week via WhatsApp. We provide support in multiple Indian languages including English, Hindi, Telugu, Tamil, and Bengali."
      },
      {
        question: "How can I contact customer support?",
        answer: "You can contact our customer support team via WhatsApp at +91-8890051287. Our team responds within minutes and provides comprehensive assistance for all your queries."
      },
      {
        question: "What languages are supported for customer service?",
        answer: "We provide customer support in multiple Indian languages including English, Hindi, Telugu, Tamil, and Bengali to ensure clear communication and better assistance for all our users."
      },
      {
        question: "How quickly do you respond to queries?",
        answer: "Our customer support team typically responds within minutes during business hours. We pride ourselves on providing fast and efficient support to all our users."
      }
    ]
  }
];

export const FAQ = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="FAQ - Frequently Asked Questions | Reddy Anna Live"
        description="Find answers to all your questions about Reddy Anna Live betting platform. Get instant answers about account creation, betting, withdrawals, security, and customer support."
        keywords="reddy anna live faq, frequently asked questions, betting help, account creation, withdrawals, customer support, betting platform help"
        canonical="https://www.reddyannalive.in/faq"
        robots="index,follow"
        og={{
          title: "FAQ - Frequently Asked Questions | Reddy Anna Live",
          description: "Find answers to all your questions about Reddy Anna Live betting platform. Get instant answers about account creation, betting, withdrawals, security, and customer support.",
          type: "website",
          url: "https://www.reddyannalive.in/faq",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        twitter={{
          card: "summary_large_image",
          title: "FAQ - Frequently Asked Questions | Reddy Anna Live",
          description: "Find answers to all your questions about Reddy Anna Live betting platform. Get instant answers about account creation, betting, withdrawals, security, and customer support.",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.reddyannalive.in/" },
              { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.reddyannalive.in/faq" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "FAQ - Reddy Anna Live",
            url: "https://www.reddyannalive.in/faq",
            description: "Frequently Asked Questions about Reddy Anna Live betting platform.",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqCategories.flatMap(category => 
              category.faqs.map(faq => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer
                }
              }))
            )
          }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Find answers to all your questions about <strong>Reddy Anna Live</strong>. Get instant help with <strong>Reddy Anna Live</strong> account creation, betting, withdrawals, and more. <strong>Reddy Anna Live</strong> provides comprehensive FAQ support.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <div className="text-4xl mr-4">{category.icon}</div>
                <h2 className="text-3xl font-bold text-yellow-400">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.faqs.map((faq, faqIndex) => (
                  <Card key={faqIndex} className="bg-gray-900 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our customer support team is available 24/7 to help you with any questions or concerns. 
            Get instant assistance via WhatsApp.
          </p>
          <Button
            className="h-11 rounded-md px-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
            onClick={() => openWhatsApp("support")}
          >
            Contact Support Now
          </Button>
        </div>
      </section>

      {/* Reddy Anna Live FAQ Deep Dive */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Complete <strong>Reddy Anna Live</strong> FAQ Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">About <strong>Reddy Anna Live</strong></h3>
              <p className="text-gray-300 mb-4">
                <strong>Reddy Anna Live</strong> is India's most trusted online betting platform since 2010. 
                <strong>Reddy Anna Live</strong> offers comprehensive sports betting, live casino games, and traditional Indian card games. 
                <strong>Reddy Anna Live</strong> serves millions of users across India with 200+ authorized branches.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• <strong>Reddy Anna Live</strong> has been operating for over 13 years</li>
                <li>• <strong>Reddy Anna Live</strong> serves 10L+ happy customers</li>
                <li>• <strong>Reddy Anna Live</strong> provides 24/7 customer support</li>
                <li>• <strong>Reddy Anna Live</strong> offers instant withdrawals</li>
                <li>• <strong>Reddy Anna Live</strong> ensures secure transactions</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400"><strong>Reddy Anna Live</strong> Services</h3>
              <p className="text-gray-300 mb-4">
                <strong>Reddy Anna Live</strong> provides a wide range of betting and gaming services. 
                <strong>Reddy Anna Live</strong> offers live cricket betting, football betting, tennis betting, and casino games. 
                <strong>Reddy Anna Live</strong> features Teen Patti, Andar Bahar, Roulette, and many more games.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• <strong>Reddy Anna Live</strong> Live cricket betting with real-time odds</li>
                <li>• <strong>Reddy Anna Live</strong> Casino games with live dealers</li>
                <li>• <strong>Reddy Anna Live</strong> Traditional Indian card games</li>
                <li>• <strong>Reddy Anna Live</strong> Sports betting on all major leagues</li>
                <li>• <strong>Reddy Anna Live</strong> Mobile-optimized platform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reddy Anna Live Support Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get Help from <strong>Reddy Anna Live</strong></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Contact <strong>Reddy Anna Live</strong></h3>
              <p className="text-gray-400">
                <strong>Reddy Anna Live</strong> customer support is available 24/7 via WhatsApp. 
                <strong>Reddy Anna Live</strong> provides instant assistance for all your queries.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Quick <strong>Reddy Anna Live</strong> Setup</h3>
              <p className="text-gray-400">
                <strong>Reddy Anna Live</strong> account creation takes just 2 minutes. 
                <strong>Reddy Anna Live</strong> requires no KYC or documentation for registration.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400"><strong>Reddy Anna Live</strong> Security</h3>
              <p className="text-gray-400">
                <strong>Reddy Anna Live</strong> uses advanced encryption for all transactions. 
                <strong>Reddy Anna Live</strong> ensures your data and funds are always protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Reddy Anna Live Information */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Everything You Need to Know About <strong>Reddy Anna Live</strong></h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            <strong>Reddy Anna Live</strong> is India's premier online betting platform with over 13 years of experience. 
            <strong>Reddy Anna Live</strong> offers the most comprehensive range of betting and gaming services. 
            <strong>Reddy Anna Live</strong> provides live cricket betting, casino games, and traditional Indian card games. 
            <strong>Reddy Anna Live</strong> ensures secure transactions, instant withdrawals, and 24/7 customer support. 
            <strong>Reddy Anna Live</strong> serves millions of satisfied customers across India.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Why Choose <strong>Reddy Anna Live</strong>?</h3>
              <p className="text-gray-300 text-sm">
                <strong>Reddy Anna Live</strong> offers the best odds, fastest payouts, and most secure platform. 
                <strong>Reddy Anna Live</strong> has been trusted by millions for over 13 years.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">What <strong>Reddy Anna Live</strong> Offers</h3>
              <p className="text-gray-300 text-sm">
                <strong>Reddy Anna Live</strong> provides sports betting, casino games, and card games. 
                <strong>Reddy Anna Live</strong> covers all major sports and tournaments worldwide.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">How <strong>Reddy Anna Live</strong> Works</h3>
              <p className="text-gray-300 text-sm">
                <strong>Reddy Anna Live</strong> makes betting simple with easy registration. 
                <strong>Reddy Anna Live</strong> provides instant account activation and support.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">When to Use <strong>Reddy Anna Live</strong></h3>
              <p className="text-gray-300 text-sm">
                <strong>Reddy Anna Live</strong> is available 24/7 for all your betting needs. 
                <strong>Reddy Anna Live</strong> provides round-the-clock customer support.
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-300 mb-8">
            <strong>Reddy Anna Live</strong> is committed to providing the best betting experience in India. 
            <strong>Reddy Anna Live</strong> ensures fair play, secure transactions, and excellent customer service. 
            Join <strong>Reddy Anna Live</strong> today and experience the difference. 
            <strong>Reddy Anna Live</strong> delivers excellence in every aspect of online betting. 
            <strong>Reddy Anna Live</strong> is the trusted choice for millions of Indian bettors. 
            <strong>Reddy Anna Live</strong> provides unmatched service and support. 
            <strong>Reddy Anna Live</strong> continues to lead the industry with innovation and reliability. 
            <strong>Reddy Anna Live</strong> makes betting safe, secure, and enjoyable for everyone. 
            <strong>Reddy Anna Live</strong> offers the best betting experience in India. 
            <strong>Reddy Anna Live</strong> ensures customer satisfaction above all else. 
            <strong>Reddy Anna Live</strong> provides comprehensive betting solutions. 
            <strong>Reddy Anna Live</strong> is your ultimate betting destination. 
            <strong>Reddy Anna Live</strong> provides the best odds and fastest payouts. 
            <strong>Reddy Anna Live</strong> offers 24/7 customer support. 
            <strong>Reddy Anna Live</strong> ensures secure and fair gaming. 
            <strong>Reddy Anna Live</strong> delivers instant withdrawals. 
            <strong>Reddy Anna Live</strong> covers all major sports and games. 
            <strong>Reddy Anna Live</strong> provides mobile-optimized platform. 
            <strong>Reddy Anna Live</strong> offers live casino games. 
            <strong>Reddy Anna Live</strong> is the most trusted betting platform. 
            <strong>Reddy Anna Live</strong> delivers excellence in every game.
          </p>
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
        reddybook, reddy anna, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, gold365, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted, reddyannabook, instagram id
      </div>
    </div>
  );
};
