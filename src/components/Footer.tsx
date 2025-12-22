import { Link } from "react-router-dom";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import { Instagram, Twitter } from "lucide-react";
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
                <Phone size={16} className="flex-shrink-0" />
                <span>+447476699112</span>
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
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mt-4">
              <a 
                href="https://www.instagram.com/fintrex_solution/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://x.com/Fintrex_fx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
                aria-label="Twitter/X"
              >
                <Twitter size={20} />
              </a>
            <a
              href="https://wa.me/447476699112?text=Hello%20I%20want%20to%20know%20about%20your%20services"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
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
