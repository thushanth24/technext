import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Building, Menu, Sun, Moon } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-theme">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="https://vqmchabrmytbadbqdwed.supabase.co/storage/v1/object/public/technext//WhatsApp%20Image%202025-07-22%20at%2009.44.05.jpeg" className="flex items-center space-x-3" target="_blank" rel="noopener noreferrer">
  <img
    src="https://vqmchabrmytbadbqdwed.supabase.co/storage/v1/object/public/technext//WhatsApp%20Image%202025-07-22%20at%2009.44.05.jpeg"
    alt="Technext Logo"
    className="w-10 h-10 rounded-lg object-cover border border-primary"
  />
  <span className="text-xl font-bold text-primary dark:text-accent">
    Technext
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-foreground/80 hover:text-primary dark:hover:text-accent transition-colors ${
                  isActive(item.href) ? "text-primary dark:text-accent font-medium" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/careers">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Careers
              </Button>
            </Link>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="bg-muted hover:bg-muted/80"
            >
              {theme === "light" ? (
                <Sun className="h-4 w-4 text-accent" />
              ) : (
                <Moon className="h-4 w-4 text-accent" />
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon" className="bg-muted">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-foreground/80 hover:text-primary dark:hover:text-accent transition-colors py-2 ${
                        isActive(item.href) ? "text-primary dark:text-accent font-medium" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/careers" onClick={() => setIsOpen(false)}>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-4">
                      Careers
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
