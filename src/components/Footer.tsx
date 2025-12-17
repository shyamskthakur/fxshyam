import { Link } from "react-router-dom";
import { Mail, MapPin, Send } from "lucide-react";
import fintrexLogo from "@/assets/fintrex-logo.png";

export const Footer = () => {
  const services = [
    { name: "Forex Signals", href: "/services/forex" },
    { name: "Crypto Signals", href: "/services/crypto" },
    { name: "Comex Signals", href: "/services/comex" },
    { name: "Indices Signals", href: "/services/indices" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Market Insights", href: "/market-insights" },
    { name: "Contact", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={fintrexLogo} 
                alt="Fintrex Logo" 
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Premium Signal Provider. Expert Analysis. Proven Results.
            </p>
            <p className="text-muted-foreground text-sm">
              Delivering professional trading signals and market intelligence to traders worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Ras Al Khaimah, Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="flex-shrink-0" />
                <span>support@example.com</span>
              </li>
              <li>
                <a 
                  href="https://t.me/fintrexforexsolution" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Send size={16} className="flex-shrink-0" />
                  <span>Telegram Channel</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Fintrex Forex Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
