import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import SearchBox from "@/components/SearchBox";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center">
      <SEO
        title="404 Page Not Found - Reddy Anna Live"
        description="The page you're looking for could not be found on Reddy Anna Live. Navigate back to our homepage or explore our betting platform, casino games, and customer support options."
        keywords="404 error, page not found, reddy anna live, betting platform, casino games, customer support"
        robots="noindex,follow"
        canonical="https://www.reddyannalive.in/404"
        og={{
          title: "404 Page Not Found - Reddy Anna Live",
          description: "The page you're looking for could not be found on Reddy Anna Live. Navigate back to our homepage or explore our betting platform.",
          type: "website",
          url: "https://www.reddyannalive.in/404",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
        twitter={{
          card: "summary_large_image",
          title: "404 Page Not Found - Reddy Anna Live",
          description: "The page you're looking for could not be found on Reddy Anna Live. Navigate back to our homepage or explore our betting platform.",
          image: "https://www.reddyannalive.in/images/reddy-anna-live-og.png"
        }}
      />
      <div className="max-w-7xl mx-auto w-full px-4">
        {/* Hero-like header */}
        <section className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-8 text-black mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold">Page not found</h1>
          <p className="mt-2 text-black/80">The page "{location.pathname}" does not exist.</p>
        </section>

        {/* Search Box */}
        <SearchBox />

        {/* Helpful links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/" className="block p-5 rounded-lg bg-gray-900 border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-xl font-semibold">Go to Home</h3>
            <p className="text-gray-400 text-sm mt-1">Start from the main page.</p>
          </a>
          <a href="/about-us" className="block p-5 rounded-lg bg-gray-900 border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-xl font-semibold">About Us</h3>
            <p className="text-gray-400 text-sm mt-1">Learn more about Reddy Anna Live.</p>
          </a>
          <a href="/contact-us" className="block p-5 rounded-lg bg-gray-900 border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-gray-400 text-sm mt-1">Need help? Reach our support team.</p>
          </a>
          <a href="/privacyPolicy" className="block p-5 rounded-lg bg-gray-900 border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-xl font-semibold">Privacy Policy</h3>
            <p className="text-gray-400 text-sm mt-1">Read how we handle your data.</p>
          </a>
          <a href="/faq" className="block p-5 rounded-lg bg-gray-900 border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-xl font-semibold">FAQs</h3>
            <p className="text-gray-400 text-sm mt-1">Find answers to common questions.</p>
          </a>
          <a href="/sports" className="block p-5 rounded-lg bg-gray-900 border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-xl font-semibold">Sports Betting</h3>
            <p className="text-gray-400 text-sm mt-1">Explore our sports betting options.</p>
          </a>
          <a href="/casino" className="block p-5 rounded-lg bg-gray-900 border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-xl font-semibold">Casino Games</h3>
            <p className="text-gray-400 text-sm mt-1">Discover a variety of casino games.</p>
          </a>
          <a href="/termAndCondition" className="block p-5 rounded-lg bg-gray-900 border border-gray-800 hover:border-yellow-400 transition">
            <h3 className="text-xl font-semibold">Terms & Conditions</h3>
            <p className="text-gray-400 text-sm mt-1">Understand our site rules.</p>
          </a>

          {/* Quick actions */}
          <a
            href="https://api.whatsapp.com/send?phone=918890051287&text=Hi%2C%20I%20need%20help%20on%20Reddy%20Anna%20Live"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 rounded-lg bg-green-600/20 border border-green-600 hover:bg-green-600/30 transition"
          >
            <h3 className="text-xl font-semibold text-green-400">Chat on WhatsApp</h3>
            <p className="text-green-200 text-sm mt-1">Get instant assistance.</p>
          </a>
        </div>

        {/* Secondary suggestions */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Popular sections</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li><a className="underline hover:text-yellow-400" href="/">Home</a></li>
            <li><a className="underline hover:text-yellow-400" href="/about-us">About Us</a></li>
            <li><a className="underline hover:text-yellow-400" href="/contact-us">Contact Us</a></li>
            <li><a className="underline hover:text-yellow-400" href="/privacyPolicy">Privacy Policy</a></li>
            <li><a className="underline hover:text-yellow-400" href="/termAndCondition">Terms & Conditions</a></li>
            <li><a className="underline hover:text-yellow-400" href="/faq">FAQs</a></li>
            <li><a className="underline hover:text-yellow-400" href="/sports">Sports Betting</a></li>
            <li><a className="underline hover:text-yellow-400" href="/casino">Casino Games</a></li>
            <li><a className="underline hover:text-yellow-400" href="/sitemap.xml">Sitemap</a></li>
          </ul>
        </div>
      </div>

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

export default NotFound;
