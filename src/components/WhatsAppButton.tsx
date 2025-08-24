import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  const phoneNumber = "918890051287";
  const message = "Hi, I want to know more about Reddy Anna Live!";

  const handleClick = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-6 z-[9999] 
                 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg 
                 transform hover:scale-105 transition-transform duration-300 flex items-center gap-2"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      <span className="text-base font-bold">Get Reddy Anna ID</span>
    </button>
  );
};
