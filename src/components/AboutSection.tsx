import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: "🛡️",
    title: "Trusted and reliable platform",
    description:
      "Reddy Anna has built a solid reputation over the years as a trusted and reliable platform for online betting, with thousands of satisfied customers.",
  },
  {
    icon: "🎯",
    title: "Wide range of betting options",
    description:
      "The platform offers a wide selection of betting options for every cricket fan's preferences, allowing users to bet on international matches, domestic leagues, or even specific events within a game.",
  },
  {
    icon: "⏰",
    title: "24-hour withdrawal service",
    description:
      "Reddy Anna is known for its 24-hour withdrawal service, ensuring that users can easily withdraw their winnings at any time.",
  },
  {
    icon: "💻",
    title: "User-friendly interface",
    description:
      "The platform is designed to be user-friendly, making it easy for users to navigate and access various betting options.",
  },
  {
    icon: "📱",
    title: "Mobile-friendly design",
    description:
      "The website is designed to be mobile-friendly, ensuring that users can access it easily from their smartphones or tablets.",
  },
  {
    icon: "🎧",
    title: "24/7 customer support",
    description:
      "Reddy Anna offers excellent customer support, available round the clock to address any inquiries or concerns.",
  },
];

const faqs = [
  {
    question: "What is Reddy Anna?",
    answer:
      "In brief, Reddy Anna is a leading online betting site with numerous sports and games options for bettors. Top odds, user-friendly interface, and a safe environment make up the best features that define Reddy Anna’s experience in betting.",
  },
  {
    question: "How do I sign up for Reddy Anna?",
    answer:
      "To sign up, visit the homepage here and click on ‘Register’. Supply all needed information, verify your email address once done, then start playing within no time at all.",
  },
  {
    question: "Is Reddy Anna safe and secure?",
    answer:
      "Yes, personal data transmission over SSL-encrypted lines is secured, and Reddy Anna complies with industry standards for privacy protection regulations.",
  },
  {
    question: "What sports can be betted on with Reddy Anna?",
    answer:
      "Reddy Anna offers a variety of sports such as cricket, soccer, baseball, tennis, and more. You can choose local and international games to gamble on.",
  },
  {
    question: "Are there any bonuses for new users?",
    answer:
      "Yes, we have a welcome bonus for new users. For our current promotions, you will find them in the “Bonuses” section. Expect seasonal and special event bonuses too.",
  },
  {
    question: "How do I deposit money into my Reddy Anna account?",
    answer:
      "Depositing funds is simple; log in to your account, go to the “Deposit” section, select your preferred payment method, and follow the provided instructions.",
  },
  {
    question: "Which payment options are available on Reddy Anna?",
    answer:
      "Reddy Anna accepts credit/debit cards, net banking, UPI, and e-wallets. All transactions are secure and prompt.",
  },
  {
    question: "How do I withdraw money from Reddy Anna?",
    answer:
      "Log in to your account, click on “Withdraw” at the top right, select your preferred withdrawal method, enter the amount, and follow the instructions.",
  },
  {
    question: "Can I use my mobile phone to place bets?",
    answer:
      "Yes! Our mobile platform is fully functional, allowing you to place bets, deposit, and withdraw money using your smartphone or tablet.",
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
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
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
              Since 2010, Reddy Anna has been the best online betting ID website
              for cricket betting. It is secure and easy to use for new betting
              players. This website's owner is Reddy Anna. We provide Reddy Anna
              ID only on WhatsApp.
            </p>
            <p className="mb-6">
              Get new Reddy Anna Online ID in one minute on WhatsApp. 24 Hours
              Refill and Withdrawal service for all our customers. We have more
              than 10 Lakh happy customers on our platform. We are present in
              more than 200 offline branches.
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
