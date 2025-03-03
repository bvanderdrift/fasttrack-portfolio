import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", to: "/" },
    { name: "Work", to: "/work" },
    { name: "Thoughts", to: "/thoughts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 px-6",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-subtle"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between flex-col">
        <Link to="/" className="text-xl font-medium tracking-tight">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-fast">Beer</span>
        </Link>

        {/* Desktop menu */}
        <nav className="flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={cn(
                "font-medium text-sm link-underline",
                location.pathname === item.to
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
