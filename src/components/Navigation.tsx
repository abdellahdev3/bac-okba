import { Button } from "@/components/ui/button";
import {
  Search,
  Instagram,
  Youtube,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

export const Navigation = () => {
  const navLinks = [
    "من نحن",
    "سياسة الخصوصية",
    "اتفاقية الاستخدام",
    "اتصل بنا",
    "أعلن في الموقع",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-primary">
              حقيبة عقبة بن نافع
            </h1>
            <p className="text-xs text-gray-600 font-medium">الباك في الجيب</p>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-primary text-sm font-medium transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right Section: Social Media + Search */}
          <div className="flex items-center space-x-reverse space-x-4">
            {/* Social Media Icons */}
            <div className="hidden sm:flex items-center space-x-reverse space-x-3">
              <Button variant="ghost" size="sm" className="p-2 h-auto">
                <Instagram className="h-4 w-4 text-gray-600 hover:text-pink-500" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto">
                <Youtube className="h-4 w-4 text-gray-600 hover:text-red-500" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto">
                <MessageCircle className="h-4 w-4 text-gray-600 hover:text-blue-500" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto">
                <TrendingUp className="h-4 w-4 text-gray-600 hover:text-purple-500" />
              </Button>
            </div>

            {/* Search Icon */}
            <Button variant="ghost" size="sm" className="p-2 h-auto">
              <Search className="h-5 w-5 text-gray-600 hover:text-primary" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className="lg:hidden pb-4 border-t border-gray-100 pt-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {navLinks.slice(0, 3).map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-primary text-sm font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
