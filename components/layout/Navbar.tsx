"use client";

import { useState, useEffect } from "react";
import { navigationItems, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Github, Linkedin, Mail, Menu } from "lucide-react";

// Define interface for NavItems props
interface NavItemsProps {
  mobile?: boolean;
}

// Move NavItems component outside of render function
const NavItems: React.FC<NavItemsProps> = ({ mobile = false }) => {
  return (
    <>
      {navigationItems.map((item) => (
        <button
          key={item.label}
          onClick={() => {
            const element = document.querySelector(item.href);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={`${
            mobile
              ? "block w-full text-left px-4 py-3 text-lg hover:bg-telkomsel-red/10 hover:text-telkomsel-red transition-colors duration-300"
              : "text-foreground hover:text-telkomsel-red transition-colors duration-300 font-medium"
          }`}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-telkomsel-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TP</span>
              </div>
              <span className="font-bold text-xl text-foreground">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavItems />
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="border-telkomsel-red text-telkomsel-red hover:bg-telkomsel-red hover:text-white transition-colors duration-300"
              >
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between py-6 border-b border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-telkomsel-red rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">TP</span>
                      </div>
                      <span className="font-bold text-xl">Portfolio</span>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 py-6">
                    <NavItems mobile />
                  </div>

                  {/* Mobile CTA */}
                  <div className="space-y-4 py-6 border-t border-border">
                    <Button
                      className="w-full bg-telkomsel-red hover:bg-telkomsel-dark-red text-white"
                      onClick={() => scrollToSection("#contact")}
                    >
                      Contact for Opportunities
                    </Button>

                    {/* Mobile Social Links */}
                    <div className="flex justify-center space-x-4 pt-4">
                      {socialLinks.map((link) => {
                        const Icon =
                          link.name === "GitHub"
                            ? Github
                            : link.name === "LinkedIn"
                            ? Linkedin
                            : link.name === "Email"
                            ? Mail
                            : Mail;

                        return (
                          <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-telkomsel-red hover:text-white transition-colors duration-300"
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation (Alternative UI) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border">
        <div className="flex items-center justify-around h-16 px-4">
          {navigationItems.slice(0, 4).map((item, index) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="flex flex-col items-center space-y-1 text-xs text-muted-foreground hover:text-telkomsel-red transition-colors duration-300"
            >
              <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">{index + 1}</span>
              </div>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
