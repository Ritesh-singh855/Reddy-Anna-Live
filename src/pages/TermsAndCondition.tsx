import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

import { SEO } from "@/components/SEO";

export const TermsAndCondition = () => {
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
        title="Terms & Conditions - Reddy Anna Live User Agreement"
        description="Read the complete Terms and Conditions for using Reddy Anna Live betting platform. Understand user eligibility, account rules, betting terms, and platform usage guidelines."
        keywords="reddy anna live terms conditions, user agreement, betting terms, platform rules, eligibility requirements, account terms, betting platform terms"
        canonical="https://www.reddyannalive.in/termAndCondition"
        robots="index,follow"
        og={{
          title: "Terms & Conditions - Reddy Anna Live User Agreement",
          description: "Read the complete Terms and Conditions for using Reddy Anna Live betting platform. Understand user eligibility, account rules, betting terms, and platform usage guidelines.",
          type: "website",
          url: "https://www.reddyannalive.in/termAndCondition",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Terms & Conditions - Reddy Anna Live User Agreement",
          description: "Read the complete Terms and Conditions for using Reddy Anna Live betting platform. Understand user eligibility, account rules, betting terms, and platform usage guidelines.",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.reddyannalive.in/" },
              { "@type": "ListItem", position: 2, name: "Terms and Conditions", item: "https://www.reddyannalive.in/termAndCondition" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms and Conditions - Reddy Anna Live",
            url: "https://www.reddyannalive.in/termAndCondition",
            description: "Terms and Conditions for Reddy Anna Live - comprehensive user agreement and platform rules.",
          },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="w-full px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms and Conditions - Reddy Anna Live
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Read the complete Terms and Conditions for using Reddy Anna Live. 
              Understand your rights and responsibilities with Reddy Anna Live platform.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="w-full px-4">
          <div>
            {/* SEO Keywords (hidden for search engines) */}
            <div style={{ display: "none" }}>
              cricbet99, lotus365, mahadev book, mahakal book, reddy anna app,
              reddy anna betting, reddy anna book, reddy anna book 247, reddy
              anna book live login, reddy anna book login, reddy anna club,
              reddy anna club live, reddy anna customer care number, reddy anna
              live, reddy anna live casino, reddy anna live cricket, reddy anna
              live login, reddy anna live score, reddy anna live today, reddy
              anna login, reddy anna online, reddy anna online book id, reddy
              anna website, reddy anna whatsapp number, reddybook, reddy anna, online id, cricket id, casino id, fast deposit, fast withdrawal, auto deposit, auto withdrawal, gold365, live casino, all penal, ipl, bbl, sat20, cwc, psl, new id, trusted, reddyannabook, instagram id
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>Effective Date: 29.01.2024</p>

              <p>
                By accessing and using Reddy Anna Live, you agree to comply
                with and be bound by the following Terms and Conditions. Please
                read these Terms carefully before using our Reddy Anna Live website.
              </p>

              <h3 className="text-xl font-semibold text-white">
                1. Acceptance of Terms
              </h3>
              <p>
                By using Reddy Anna Live, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and Conditions.
                If you do not agree with any part of these Terms, please do not
                use our Reddy Anna Live website. These Terms constitute a legally binding agreement
                between you and Reddy Anna Live, governing your use of our Reddy Anna Live platform
                and services. Reddy Anna Live reserves the right to modify these Terms at any time,
                and your continued use of the Reddy Anna Live website constitutes acceptance of any
                changes made.
              </p>
              <p>
                <strong>Important Notice:</strong> These Terms and Conditions apply
                to all users of Reddy Anna Live, including visitors, registered
                users, and customers. By accessing or using our Reddy Anna Live website, you confirm
                that you are at least 18 years old and have the legal capacity to
                enter into this agreement with Reddy Anna Live. If you are accessing our Reddy Anna Live services on
                behalf of a company or organization, you represent that you have
                the authority to bind that entity to these Reddy Anna Live Terms.
              </p>

              <h3 className="text-xl font-semibold text-white">
                2. Use of the Website
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Eligibility:</strong> You must be at least 18 years
                  old to use reddyannalive.in. By using our website, you
                  represent and warrant that you are at least 18 years old.
                  You must also be legally permitted to participate in online
                  betting and gaming activities in your jurisdiction. It is
                  your responsibility to ensure that your use of our services
                  complies with all applicable local, state, and federal laws.
                </li>
                <li>
                  <strong>Account Creation:</strong> Some features of
                  reddyannalive.in may require account registration. You are
                  responsible for maintaining the confidentiality of your
                  account information and for all activities that occur under
                  your account. You must provide accurate and complete information
                  during registration and keep your account details up to date.
                  You are prohibited from creating multiple accounts or sharing
                  your account credentials with others.
                </li>
                <li>
                  <strong>Prohibited Activities:</strong> You agree not to use
                  reddyannalive.in for any unlawful purpose or in any way that
                  could damage, disable, overburden, or impair our servers or
                  networks. Prohibited activities include but are not limited to:
                  attempting to gain unauthorized access to our systems, using
                  automated tools to access our services, engaging in fraudulent
                  activities, or violating any applicable laws or regulations.
                </li>
                <li>
                  <strong>Responsible Gaming:</strong> We promote responsible
                  gaming practices and encourage users to gamble responsibly.
                  You should never bet more than you can afford to lose, and
                  you should seek help if you believe you have a gambling problem.
                  We provide tools and resources to help you manage your gaming
                  activities, including deposit limits and self-exclusion options.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white">
                3. Intellectual Property
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Ownership:</strong> All content, trademarks, logos,
                  and intellectual property on reddyannalive.in are owned by
                  reddyannalive.in unless otherwise stated. You may not use,
                  reproduce, or distribute any content from our website without
                  our express written consent.
                </li>
                <li>
                  <strong>User-Generated Content:</strong> If you submit any
                  content to reddyannalive.in, you grant us a non-exclusive,
                  royalty-free, worldwide, perpetual, and irrevocable right to
                  use, modify, and display the content for any purpose.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white">
                4. Disclaimer of Warranties
              </h3>
              <p>
                reddyannalive.in is provided “as is” and “as available” without
                any warranties of any kind. We do not guarantee the accuracy,
                completeness, or reliability of any content on our website.
              </p>

              <h3 className="text-xl font-semibold text-white">
                5. Limitation of Liability
              </h3>
              <p>
                reddyannalive.in and its affiliates, officers, employees, and
                agents shall not be liable for any direct, indirect, incidental,
                special, or consequential damages arising out of or in any way
                connected with the use of our website.
              </p>

              <h3 className="text-xl font-semibold text-white">
                6. Third-Party Links
              </h3>
              <p>
                reddyannalive.in may contain links to third-party websites. We
                do not endorse or control the content of these websites and are
                not responsible for any damages or losses incurred by users in
                connection with such websites.
              </p>

              <h3 className="text-xl font-semibold text-white">
                7. Governing Law
              </h3>
              <p>
                These Terms and Conditions are governed by and construed in
                accordance with the laws of Curacao. Any disputes arising from
                or relating to these Terms will be subject to the exclusive
                jurisdiction of the courts in Curacao.
              </p>

              <h3 className="text-xl font-semibold text-white">
                8. Changes to Terms and Conditions
              </h3>
              <p>
                reddyannalive.in reserves the right to update or modify these
                Terms and Conditions at any time. Changes will be effective
                immediately upon posting on our website. Your continued use of
                reddyannalive.in constitutes acceptance of the updated Terms.
              </p>

              <h3 className="text-xl font-semibold text-white">Contact Us</h3>
              <p>
                If you have any questions or concerns about these Terms and
                Conditions, please contact us.
              </p>

              <p>Thank you for using reddyannalive.in!</p>
              <p>reddyannalive.in</p>
              <p>[India]</p>
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
        </div>
      </section>

      {/* Reddy Anna Live Terms Benefits */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Reddy Anna Live Terms and Conditions Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live User Protection</h3>
              <p className="text-gray-400">
                Your rights are protected with Reddy Anna Live Terms and Conditions. 
                Reddy Anna Live ensures fair and transparent user agreements.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Legal Framework</h3>
              <p className="text-gray-400">
                Clear legal framework provided by Reddy Anna Live. 
                Reddy Anna Live Terms ensure compliance and user safety.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Transparent Terms</h3>
              <p className="text-gray-400">
                Transparent terms and conditions with Reddy Anna Live. 
                Reddy Anna Live provides clear guidelines for all users.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live User Rights</h3>
              <p className="text-gray-400">
                Your rights are clearly defined in Reddy Anna Live Terms. 
                Reddy Anna Live protects user interests and privacy.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Quick Updates</h3>
              <p className="text-gray-400">
                Terms are updated promptly by Reddy Anna Live. 
                Reddy Anna Live keeps users informed of any changes.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Reddy Anna Live Support</h3>
              <p className="text-gray-400">
                Get help understanding terms from Reddy Anna Live support. 
                Reddy Anna Live provides assistance with terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reddy Anna Live Terms Coverage */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Reddy Anna Live Terms Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Reddy Anna Live User Agreement</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive user agreement with Reddy Anna Live. Reddy Anna Live Terms cover all aspects of platform usage. 
                Understand your rights and responsibilities with Reddy Anna Live.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• User Rights at Reddy Anna Live</li>
                <li>• Platform Usage with Reddy Anna Live</li>
                <li>• Account Terms from Reddy Anna Live</li>
                <li>• Service Agreement with Reddy Anna Live</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Reddy Anna Live Betting Terms</h3>
              <p className="text-gray-400 mb-4">
                Clear betting terms and conditions with Reddy Anna Live. Reddy Anna Live ensures fair betting practices. 
                Bet responsibly with Reddy Anna Live guidelines.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Betting Rules at Reddy Anna Live</li>
                <li>• Responsible Gaming with Reddy Anna Live</li>
                <li>• Payout Terms from Reddy Anna Live</li>
                <li>• Betting Limits at Reddy Anna Live</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Reddy Anna Live Privacy Terms</h3>
              <p className="text-gray-400 mb-4">
                Privacy protection terms with Reddy Anna Live. Reddy Anna Live safeguards your personal information. 
                Trust Reddy Anna Live with your data protection.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Data Protection at Reddy Anna Live</li>
                <li>• Privacy Rights with Reddy Anna Live</li>
                <li>• Information Security from Reddy Anna Live</li>
                <li>• User Privacy at Reddy Anna Live</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Reddy Anna Live Service Terms</h3>
              <p className="text-gray-400 mb-4">
                Service terms and conditions with Reddy Anna Live. Reddy Anna Live provides reliable betting services. 
                Experience quality service with Reddy Anna Live.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Service Quality at Reddy Anna Live</li>
                <li>• Support Terms with Reddy Anna Live</li>
                <li>• Platform Availability from Reddy Anna Live</li>
                <li>• Service Updates at Reddy Anna Live</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reddy Anna Live Terms Features */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Reddy Anna Live Terms Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Clear Terms at Reddy Anna Live</h3>
              <p className="text-gray-400">
                Easy-to-understand terms with Reddy Anna Live. 
                Reddy Anna Live provides clear and concise terms and conditions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Updated Terms with Reddy Anna Live</h3>
              <p className="text-gray-400">
                Terms are regularly updated by Reddy Anna Live. 
                Reddy Anna Live ensures current and relevant terms.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Mobile Terms at Reddy Anna Live</h3>
              <p className="text-gray-400">
                Mobile-friendly terms with Reddy Anna Live. 
                Reddy Anna Live provides accessible terms on all devices.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Fair Terms at Reddy Anna Live</h3>
              <p className="text-gray-400">
                Fair and balanced terms with Reddy Anna Live. 
                Reddy Anna Live ensures equitable terms for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reddy Anna Live Terms Summary */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Reddy Anna Live Terms and Conditions Summary</h2>
          <div className="bg-gray-900 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Why Trust Reddy Anna Live Terms?</h3>
                <p className="text-gray-400 mb-4">
                  Reddy Anna Live provides comprehensive and fair terms and conditions. 
                  With Reddy Anna Live, you get transparent and user-friendly terms. 
                  Reddy Anna Live ensures that all terms are clearly explained and easy to understand.
                </p>
                <p className="text-gray-400 mb-4">
                  Our Reddy Anna Live terms protect both users and the platform. 
                  Reddy Anna Live regularly updates terms to reflect current practices. 
                  Trust Reddy Anna Live for fair and transparent terms and conditions.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Transparent Terms at Reddy Anna Live</li>
                  <li>• User Protection with Reddy Anna Live</li>
                  <li>• Fair Conditions at Reddy Anna Live</li>
                  <li>• Regular Updates from Reddy Anna Live</li>
                  <li>• Clear Guidelines at Reddy Anna Live</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Reddy Anna Live Terms Benefits</h3>
                <p className="text-gray-400 mb-4">
                  Experience the benefits of Reddy Anna Live's comprehensive terms. Reddy Anna Live 
                  ensures that all terms are fair and protect user interests. 
                  Join Reddy Anna Live for transparent and reliable terms and conditions.
                </p>
                <p className="text-gray-400 mb-4">
                  Reddy Anna Live provides clear terms that are easy to understand. 
                  With Reddy Anna Live, you know exactly what to expect. 
                  Reddy Anna Live is your trusted partner for fair terms and conditions.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Comprehensive Terms with Reddy Anna Live</li>
                  <li>• User-Friendly Language at Reddy Anna Live</li>
                  <li>• Fair Conditions with Reddy Anna Live</li>
                  <li>• Regular Reviews by Reddy Anna Live</li>
                  <li>• Support for Terms at Reddy Anna Live</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="w-full px-4">
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
    </div>
  );
};
