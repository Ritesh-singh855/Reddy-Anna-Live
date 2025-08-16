import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  const openWhatsApp = () => {
    const phoneNumber = "918890051287";
    const message = "Hi, I want to get my Reddy Anna ID!";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">About Reddy Anna</h3>
            <p className="text-gray-300 mb-4">
              Since 2010, Reddy Anna has provided online betting service in India. Join our trusted 200+ branches network and Get authorised ID. Create Reddy Anna Online ID in 2 minutes. No KYC, no documentation, instant approval.
            </p>
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600" onClick={openWhatsApp}>
              Get Your Reddy Anna ID
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Reddy Anna</a></li>
              <li><a href="#" className="hover:text-white">Reddy Anna Online Book</a></li>
              <li><a href="#" className="hover:text-white">Reddy Book</a></li>
              <li><a href="#" className="hover:text-white">Reddy Anna Booking</a></li>
              <li><a href="#" className="hover:text-white">Reddy Anna Book Login</a></li>
              <li><a href="#" className="hover:text-white">Reddy Anna Club</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={scrollToTop} className="hover:text-white text-left">Home</button></li>
              <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact-us" className="hover:text-white">Contact US</Link></li>
              <li><Link to="/privacyPolicy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/termAndCondition" className="hover:text-white">Terms and Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-8 border-t border-gray-800">
          <section className="py-8 ">
            <div className="w-full px-2 text-center">
              <p className="text-lg md:text-xl text-white font-small">
                Disclaimer:- This Website is only for 18+ users. If you are from Telangana, Orissa, Assam, Sikkim, and Nagaland Please leave the website immediately. Be aware of fraudsters, we only deal via WhatsApp
              </p>
            </div>
          </section>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-8 mt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} Reddy Anna Live. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};