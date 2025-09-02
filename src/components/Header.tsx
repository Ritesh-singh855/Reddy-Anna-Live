import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoPng from "../assets/logo.png";
import logoWebp from "../assets/logo.webp";

export const Header = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = "918890051287";
    const message = "Hi, I want to login to Reddy Anna Live!";
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message,
      )}`,
      "_blank",
    );
  };

  const openWhatsAppSignup = () => {
    const phoneNumber = "918890051287";
    const message = "Hi, I want to sign up for Reddy Anna Live!";
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message,
      )}`,
      "_blank",
    );
  };

  const navigationItems = [
    { name: "Home", href: "/", description: "Reddy Anna Live - Best Online Betting Platform" },
    { name: "Sports Betting", href: "/sports", description: "Live Cricket, Football, Tennis Betting" },
    { name: "Live Casino", href: "/casino", description: "Online Casino Games & Live Dealers" },
    { name: "Live Matches", href: "/live-matches", description: "Watch Live Sports & Bet in Real-time" },
    { name: "About Us", href: "/about-us", description: "Learn About Reddy Anna Live Platform" },
    { name: "Contact Us", href: "/contact-us", description: "Get Support & Customer Service" },
    { name: "FAQ", href: "/faq", description: "Frequently Asked Questions" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname === href;
  };

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Reddy Anna Live - Home"
            >
              <picture>
                <source srcSet={logoWebp} type="image/webp" />
                <img
                  src={logoPng}
                  alt="Reddy Anna Live Logo - Best Online Betting Platform"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                  width={80}
                  height={80}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>

              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                Reddy Anna
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 whitespace-nowrap ${
                  isActive(item.href)
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "text-gray-300"
                }`}
                title={item.description}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white text-xs sm:text-sm px-2 sm:px-3"
              onClick={openWhatsApp}
              aria-label="Login to Reddy Anna Live"
            >
              <span className="hidden sm:inline">Login</span>
              <span className="sm:hidden">Login</span>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-xs sm:text-sm px-2 sm:px-3"
              onClick={openWhatsAppSignup}
              aria-label="Sign up for Reddy Anna Live"
            >
              <span className="hidden sm:inline">Signup</span>
              <span className="sm:hidden">Signup</span>
            </Button>
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-gray-800 ml-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobile && isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 bg-gray-900">
            <nav className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-sm font-medium transition-colors hover:text-yellow-400 py-2 px-2 rounded-md hover:bg-gray-800 ${
                    isActive(item.href)
                      ? "text-yellow-400 bg-gray-800"
                      : "text-gray-300"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  title={item.description}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* SEO Navigation Breadcrumb (Hidden) */}
        <nav className="sr-only" aria-label="Breadcrumb">
          <ol className="flex space-x-2">
            <li>
              <Link to="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            {location.pathname !== "/" && (
              <li>
                <span className="text-gray-500">/</span>
                <span className="text-gray-700 ml-2">
                  {navigationItems.find(item => item.href === location.pathname)?.name || "Page"}
                </span>
              </li>
            )}
          </ol>
        </nav>
      </div>
    </header>
  );
};
