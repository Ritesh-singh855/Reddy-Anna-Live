import { Button } from "@/components/ui/button";
import { Title } from "@radix-ui/react-toast";

export const Hero = () => {
  const openWhatsApp = () => {
    const phoneNumber = "918890051287";
    const message = "Hi, I'm interested in Reddy Anna Live betting services!";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Reddy Anna Live
            <br />
            Best Online Betting Platform in India
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Experience the thrill of live sports betting with the best odds and
            instant payouts. Join millions of users who trust Reddy Anna Live
            for their betting needs.
          </p>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
    </section>
  );
};
