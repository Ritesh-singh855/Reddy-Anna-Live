import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="w-full px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms and Conditions
            </h1>
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
              anna website, reddy anna whatsapp number, reddybook
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>Effective Date: 29.01.2024</p>

              <p>
                By accessing and using reddyannalive.in, you agree to comply
                with and be bound by the following Terms and Conditions. Please
                read these Terms carefully before using our website.
              </p>

              <h3 className="text-xl font-semibold text-white">
                1. Acceptance of Terms
              </h3>
              <p>
                By using reddyannalive.in, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and Conditions.
                If you do not agree with any part of these Terms, please do not
                use our website.
              </p>

              <h3 className="text-xl font-semibold text-white">
                2. Use of the Website
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Eligibility:</strong> You must be at least 18 years
                  old to use reddyannalive.in. By using our website, you
                  represent and warrant that you are at least 18 years old.
                </li>
                <li>
                  <strong>Account Creation:</strong> Some features of
                  reddyannalive.in may require account registration. You are
                  responsible for maintaining the confidentiality of your
                  account information and for all activities that occur under
                  your account.
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

      {/* Disclaimer */}
      <section className="py-8 bg-red-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-white font-medium">
              Disclaimer:- This Website is only for 18+ users. Please leave the website immediately if you are not eligible. Be aware of fraudsters, we only deal via WhatsApp
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
