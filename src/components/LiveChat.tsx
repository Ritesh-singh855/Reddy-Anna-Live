import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react";

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to Reddy Anna Live! How can I help you today?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const openWhatsApp = () => {
    const phoneNumber = "918890051287";
    const message = "Hi, I need help with my Reddy Anna Live account!";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setMessage("");

              // Simulate bot response
        setTimeout(() => {
          const botResponse = {
            id: messages.length + 2,
            text: "Thank you for your message! For immediate assistance with your Reddy Anna Live account, please contact us on WhatsApp. Our Reddy Anna Live support team is available 24/7.",
            isBot: true,
            timestamp: new Date().toLocaleTimeString(),
          };
          setMessages(prev => [...prev, botResponse]);
        }, 1000);
    }
  };

  const quickActions = [
    { text: "Create Reddy Anna ID", action: () => openWhatsApp() },
    { text: "Deposit Help", action: () => openWhatsApp() },
    { text: "Withdrawal Issue", action: () => openWhatsApp() },
    { text: "Game Rules", action: () => openWhatsApp() },
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                <CardTitle className="text-sm font-semibold">Live Support</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-600 h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-48">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      msg.isBot
                        ? "bg-gray-100 text-gray-800"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-3 border-t">
              <p className="text-xs text-gray-500 mb-2">Quick Actions:</p>
              <div className="grid grid-cols-2 gap-1">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={action.action}
                    className="text-xs h-8"
                  >
                    {action.text}
                  </Button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-3 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button
                  onClick={sendMessage}
                  size="sm"
                  className="bg-green-500 hover:bg-green-600"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Contact Options */}
            <div className="p-3 bg-gray-50 border-t">
              <div className="flex space-x-2">
                <Button
                  onClick={openWhatsApp}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-green-600 border-green-600 hover:bg-green-50"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-blue-600 border-blue-600 hover:bg-blue-50"
                >
                  <Mail className="h-4 w-4 mr-1" />
                  Email
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};
