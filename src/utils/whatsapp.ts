type WhatsAppMessage = {
  login: string;
  signup: string;
  betting: string;
  support: string;
  default: string;
};

const messages: WhatsAppMessage = {
  login: "Hi, I want to login to Reddy Anna Live!",
  signup: "Hi, I want to sign up for Reddy Anna Live!",
  betting: "Hi, I want to place a bet on live matches!",
  support: "Hi, I need support for Reddy Anna Live!",
  default: "Hi, I want to get my Reddy Anna Live ID!",
};

export const openWhatsApp = (
  messageType: keyof WhatsAppMessage = "default",
) => {
  const phoneNumber = "918890051287";
  const message = messages[messageType];
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
};
