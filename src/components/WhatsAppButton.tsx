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
      className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-4 sm:right-6 z-[9999] 
                 bg-green-500 hover:bg-green-600 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full shadow-lg 
                 transform hover:scale-105 transition-transform duration-300 flex items-center gap-2"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="text-2xl sm:text-3xl" />
      <span className="text-sm sm:text-base font-bold hidden sm:inline">Get WhatsApp ID</span>
      <span className="text-sm font-bold sm:hidden">ID</span>
    </button>
  );
};
