import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Focal line 200px from the top of the browser window
      const focalPoint = 200;

      // Check top-to-bottom forward through sections
      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);

        if (element) {
          const rect = element.getBoundingClientRect();
          // Active ONLY when focal point is between section top and bottom
          if (rect.top <= focalPoint && rect.bottom >= focalPoint) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run check on initial mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg shadow-black/5"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary flex items-center gap-1.5 group">
          <span className="text-glow transition-transform duration-300 group-hover:scale-105">
            313-SHARIFI
          </span>
          <span className="relative z-10 text-foreground font-light">Portfolio</span>
        </a>

        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 mr-16">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-foreground/70 hover:text-foreground hover:bg-card/50"
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full shadow-[0_0_8px_hsl(var(--primary))]" />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2 md:hidden mr-16">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-2 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden animate-fade-in bg-card/95 backdrop-blur-xl border-b border-border px-6 py-6 mt-3 flex flex-col space-y-3 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-all text-left flex items-center justify-between",
                  isActive
                    ? "bg-primary/10 text-primary border-l-4 border-primary"
                    : "text-foreground/80 hover:bg-background/50 hover:text-foreground"
                )}
              >
                <span>{item.name}</span>
                {isActive && <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_6px_hsl(var(--primary))]" />}
              </a>
            );
          })}

          <div className="pt-4 border-t border-border/50">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="cosmic-button text-center block w-full"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};