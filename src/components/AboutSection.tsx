import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: "🛡️",
    title: "Trusted & Secure Platform",
    description:
      "Reddy Anna Live has built a solid reputation over 13+ years as India's most trusted online betting platform, serving 10+ lakh satisfied customers with advanced security protocols.",
  },
  {
    icon: "🎯",
    title: "Comprehensive Betting Options",
    description:
      "From IPL cricket matches to live casino games, we offer the widest range of betting options including Teen Patti, Andar Bahar, Roulette, and international sports events.",
  },
  {
    icon: "⚡",
    title: "Instant Withdrawals",
    description:
      "Experience lightning-fast withdrawals with our instant payout system. Get your winnings within minutes, not hours or days like other platforms.",
  },
  {
    icon: "💻",
    title: "User-Friendly Interface",
    description:
      "Our platform features an intuitive, easy-to-navigate interface designed for both beginners and experienced bettors, ensuring a smooth betting experience.",
  },
  {
    icon: "📱",
    title: "Mobile Optimized",
    description:
      "Access Reddy Anna Live seamlessly on any device - smartphone, tablet, or desktop. Our responsive design ensures optimal performance across all platforms.",
  },
  {
    icon: "🎧",
    title: "24/7 Customer Support",
    description:
      "Our dedicated customer support team is available round the clock via WhatsApp to assist with any queries, account issues, or technical support needs.",
  },
  {
    icon: "🏆",
    title: "Best Odds in India",
    description:
      "We offer the most competitive odds and highest payouts in the Indian market, giving you maximum value for your bets and increasing your winning potential.",
  },
  {
    icon: "🔒",
    title: "No KYC Required",
    description:
      "Get started instantly without lengthy verification processes. Create your account in 2 minutes - no documents, no waiting, no hassle.",
  },
  {
    icon: "🎮",
    title: "Demo Account Available",
    description:
      "Practice with our demo account feature before playing with real money. Learn the games, understand the rules, and build confidence at no cost.",
  },
];

const faqs = [
  {
    question: "What is Reddy Anna Live?",
    answer:
      "Reddy Anna Live is India's premier online betting platform established in 2010, offering cricket betting, live casino games, teen patti, and more. With 10+ lakh satisfied customers and 200+ branches, we provide secure, fast, and reliable betting services with the best odds in India.",
  },
  {
    question: "How do I create a new Reddy Anna Live ID?",
    answer:
      "Creating your Reddy Anna Live ID is simple and fast. Contact us via WhatsApp, and our support team will guide you through the process. Your new ID will be created and activated within 2 minutes, with no KYC or documentation required.",
  },
  {
    question: "Is Reddy Anna Live safe and secure?",
    answer:
      "Absolutely! Reddy Anna Live uses advanced encryption technology and follows strict security protocols to protect your personal information and funds. We have been serving customers safely for over 13 years with a proven track record of security and reliability.",
  },
  {
    question: "What sports and games can I bet on?",
    answer:
      "We offer comprehensive betting options including cricket (IPL, international matches), football, tennis, basketball, kabaddi, live casino games (Roulette, Blackjack, Baccarat), and traditional Indian card games like Teen Patti, Andar Bahar, and 7 Up 7 Down.",
  },
  {
    question: "How fast are withdrawals on Reddy Anna Live?",
    answer:
      "Withdrawals are processed instantly! Unlike other platforms that take hours or days, Reddy Anna Live provides instant withdrawals, allowing you to receive your winnings within minutes of requesting them.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major payment methods including UPI, net banking, credit/debit cards, and e-wallets. All transactions are secure, encrypted, and processed instantly for your convenience.",
  },
  {
    question: "Is customer support really available 24/7?",
    answer:
      "Yes! Our dedicated customer support team is available 24 hours a day, 7 days a week via WhatsApp. We provide support in multiple Indian languages including English, Hindi, Telugu, Tamil, and Bengali.",
  },
  {
    question: "Can I practice before playing with real money?",
    answer:
      "Absolutely! Reddy Anna Live offers a demo account feature that allows you to practice and understand the games before playing with real money. This helps you learn the rules and build confidence at no cost.",
  },
  {
    question: "What makes Reddy Anna Live different from other platforms?",
    answer:
      "Reddy Anna Live stands out with our 13+ years of experience, instant withdrawals, no KYC requirement, best odds in India, 24/7 support, and comprehensive game selection. We prioritize customer satisfaction and security above all else.",
  },
  {
    question: "How much does it cost to get started?",
    answer:
      "Getting started with Reddy Anna Live is simple and affordable. Contact us via WhatsApp to get your online ID and access to all our betting options, games, and services with no additional hidden charges or monthly fees.",
  },
];

export const AboutSection = () => {
  const openWhatsApp = () => {
    const phoneNumber = "918890051287";
    const message = "Hi, I want to sign up for Reddy Anna!";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Join Reddy Anna</h2>
          <h3 className="text-2xl text-gray-600 mb-8">
            Best Online Betting Platform in India
          </h3>
          <Button
            className="h-11 rounded-md px-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
            onClick={openWhatsApp}
          >
            Sign Up
          </Button>
        </div>

        {/* About Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            About Reddy Anna
          </h3>
          <div className="max-w-4xl mx-auto text-center text-gray-600 leading-relaxed">
            <p className="mb-6">
              <strong>Reddy Anna Live</strong> has been India's most trusted and reliable online betting platform since 2010. 
              With over 13 years of experience in the industry, we have established ourselves as the premier destination 
              for cricket betting, live casino games, and traditional Indian card games.
            </p>
            <p className="mb-6">
              Our platform serves more than <strong>10 lakh satisfied customers</strong> across India with a comprehensive 
              network of <strong>200+ authorized branches</strong>. We specialize in providing secure, fast, and reliable 
              online betting services with 24/7 customer support and instant withdrawal facilities.
            </p>
            <p className="mb-6">
              <strong>What makes us different?</strong> We offer the most competitive odds, fastest payouts, and the widest 
              variety of betting options. From IPL and international cricket matches to live casino games like Teen Patti, 
              Andar Bahar, and Roulette, we have everything a betting enthusiast needs.
            </p>
            <p className="mb-6">
              Getting started is incredibly simple - create your Reddy Anna Online ID in just <strong>2 minutes</strong>. 
              No KYC required, no lengthy documentation process. Our demo account feature allows you to practice and 
              understand the games before playing with real money.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            What are the benefits of using Reddy Anna for cricket betting?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-out cursor-pointer"
                onClick={openWhatsApp}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h4 className="text-xl font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
