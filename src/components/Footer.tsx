import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/ocean-concierge-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Ocean Concierge" 
                className="h-12 w-auto rounded-lg"
              />
              <span className="font-heading font-bold text-xl text-cream-light">
                Ocean Concierge
              </span>
            </div>
            <p className="text-cream/70 mb-6 leading-relaxed">
              Your trusted concierge for beach homes in Maryland and Delaware. 
              We keep your property perfect, so you can simply arrive and relax.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center opacity-50 cursor-default" title="Coming soon">
                <Facebook className="w-5 h-5 text-cream-light" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center opacity-50 cursor-default" title="Coming soon">
                <Instagram className="w-5 h-5 text-cream-light" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-cream-light mb-6">Services</h4>
            <ul className="space-y-3">
              {["Home Check-Ins", "Grocery Stocking", "Climate Control", "Maintenance", "Pool & Spa Care", "Storm Watch"].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-cream/70 hover:text-gold-light transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-cream-light mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {["Ocean City, MD", "Rehoboth Beach, DE", "Bethany Beach, DE", "Dewey Beach, DE", "Fenwick Island, DE", "Lewes, DE"].map((area) => (
                <li key={area}>
                  <span className="text-cream/70">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-cream-light mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-cream-light font-medium">609-865-4038</p>
                  <p className="text-cream/60 text-sm">24/7 Emergency Line</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <a href="mailto:hello@oceanconcierge.com" className="text-cream-light hover:text-gold-light transition-colors">
                    hello@oceanconcierge.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-cream/70">Serving Maryland &amp;<br />Delaware beaches</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-sm">
            © {currentYear} Ocean Concierge. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-cream/60 hover:text-cream-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-cream/60 hover:text-cream-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;