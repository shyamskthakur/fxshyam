import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import fintrexLogo from "@/assets/fintrex-logo.png";
export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const services = [{
    name: "Forex Trading",
    href: "/services/forex"
  }, {
    name: "Crypto Trading",
    href: "/services/crypto"
  }, {
    name: "Comex Trading",
    href: "/services/comex"
  }, {
    name: "Indices Trading",
    href: "/services/indices"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img alt="Fintrex Forex Solutions" className="h-20 md:h-[89.6px] w-auto object-cover" src="/lovable-uploads/bfde6cca-efcc-4bd0-9be2-f488b4c2ae33.png" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-card border-border">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {services.map(service => <li key={service.name}>
                          <NavigationMenuLink asChild>
                            <Link to={service.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{service.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/market-insights" className="text-foreground hover:text-primary transition-colors">
              Research
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="gradient-primary shadow-glow">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <Link to="/" className="block text-foreground hover:text-primary transition-colors py-2">
              Home
            </Link>
            <Link to="/about" className="block text-foreground hover:text-primary transition-colors py-2">
              About Us
            </Link>
            <div className="space-y-2">
              <div className="text-muted-foreground text-sm font-semibold py-2">Services</div>
              {services.map(service => <Link key={service.name} to={service.href} className="block text-foreground hover:text-primary transition-colors py-2 pl-4">
                  {service.name}
                </Link>)}
            </div>
            <Link to="/market-insights" className="block text-foreground hover:text-primary transition-colors py-2">
              Research
            </Link>
            <Link to="/blog" className="block text-foreground hover:text-primary transition-colors py-2">
              Blog
            </Link>
            <Link to="/contact" className="block text-foreground hover:text-primary transition-colors py-2">
              Contact
            </Link>
            <Button className="w-full gradient-primary shadow-glow">Get Started</Button>
          </div>}
      </div>
    </nav>;
};