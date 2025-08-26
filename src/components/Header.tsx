import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import logoPng from "../assets/logo.png";
import logoWebp from "../assets/logo.webp";

export const Header = () => {
  const isMobile = useIsMobile();

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

  return (
    <header className="bg-black border-b border-gray-800 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img
                src={logoPng}
                alt="Reddy Anna Book Logo"
                className="w-32 h-32 md:w-36 md:h-36 object-contain -my-4"
                width={144}
                height={144}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </picture>

            <span className="text-xl md:text-2xl font-semibold text-white">
              Reddy Anna
            </span>
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            onClick={openWhatsApp}
          >
            Login
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
            onClick={openWhatsAppSignup}
          >
            Signup
          </Button>
        </div>
      </div>
    </header>
  );
};
