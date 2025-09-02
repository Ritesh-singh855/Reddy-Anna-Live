import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  X,
  Star,
  Circle,
  Heart,
  BookOpen,
  Gamepad2,
  Settings,
} from "lucide-react";

const navigationItems = [
  { name: "Favourites", icon: Star, href: "#" },
  { name: "Kabaddi", icon: Circle, href: "#" },
  { name: "Cricket", icon: Circle, href: "#" },
  { name: "Football", icon: Circle, href: "#" },
  { name: "Tennis", icon: Circle, href: "#" },
  { name: "Horse Racing", icon: Heart, href: "#" },
  { name: "Greyhound Racing", icon: Heart, href: "#" },
  { name: "Indian Card Games", icon: Heart, href: "#" },
  { name: "Sportsbook", icon: BookOpen, href: "#" },
  { name: "Live Casino", icon: Gamepad2, href: "#" },
  { name: "Binary", icon: Settings, href: "#" },
  { name: "Slots Games", icon: Gamepad2, href: "#" },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = "918890051287";
    const message = "Hi, I want to sign up for Reddy Anna Live!";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-gray-800"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-80 bg-black border-r border-gray-800 flex flex-col h-full"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6 px-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-white">
                Reddy Anna Live
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Scrollable Menu */}
          <nav className="space-y-2 overflow-y-auto px-2 pb-4 flex-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  openWhatsApp();
                }}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 bg-black border-r border-gray-800">
        <div className="p-4 xl:p-6">
          <nav className="space-y-2">
            {navigationItems.slice(0, 8).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsApp();
                }}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium text-sm xl:text-base">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
