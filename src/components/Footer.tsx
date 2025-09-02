import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  const openWhatsApp = () => {
    const phoneNumber = "918890051287";
    const message = "Hi, I want to get my Reddy Anna ID!";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">About Reddy Anna</h3>
            <p className="text-gray-300 mb-4">
              Since 2010, Reddy Anna has provided online betting service in
              India. Join our trusted 200+ branches network and Get authorised
              ID. Create Reddy Anna Online ID in 2 minutes. No KYC, no
              documentation, instant approval.
            </p>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
              onClick={openWhatsApp}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Get WhatsApp ID
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Reddy Anna
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Reddy Anna Online Book
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Reddy Book
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Reddy Anna Booking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Reddy Anna Book Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Reddy Anna Club
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={openWhatsApp}
                  className="hover:text-white text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white">
                  Contact US
                </Link>
              </li>
              <li>
                <Link to="/privacyPolicy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/termAndCondition" className="hover:text-white">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-8 border-t border-gray-800">
          <section className="py-8 ">
            <div className="w-full px-2 text-center">
              <p className="text-lg md:text-xl text-white font-small">
                Disclaimer:- This Website is only for 18+ users. If you are from
                Please leave the website immediately if you are not eligible. Be aware of fraudsters, we only deal via WhatsApp
                website immediately. Be aware of fraudsters, we only deal via
                WhatsApp
              </p>
            </div>
          </section>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-8 mt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} Reddy Anna Live. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
