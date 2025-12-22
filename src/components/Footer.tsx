import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">S</span>
              </div>
              <span className="font-heading font-bold text-xl text-sand-light">
                ShoreHands
              </span>
            </div>
            <p className="text-sand/70 mb-6 leading-relaxed">
              Your trusted concierge for second homes on the Jersey Shore. 
              We keep your property perfect, so you can simply arrive and relax.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-sand/10 hover:bg-teal/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-sand-light" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-sand/10 hover:bg-teal/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-sand-light" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-sand-light mb-6">Services</h4>
            <ul className="space-y-3">
              {["Home Check-Ins", "Grocery Stocking", "Climate Control", "Maintenance", "Pool & Spa Care", "Storm Watch"].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-sand/70 hover:text-teal-light transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-sand-light mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {["Long Beach Island", "Ocean City", "Avalon", "Stone Harbor", "Cape May", "Sea Isle City"].map((area) => (
                <li key={area}>
                  <span className="text-sand/70">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-sand-light mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal mt-0.5" />
                <div>
                  <p className="text-sand-light font-medium">(609) 555-SHORE</p>
                  <p className="text-sand/60 text-sm">24/7 Emergency Line</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal mt-0.5" />
                <div>
                  <a href="mailto:hello@shorehands.com" className="text-sand-light hover:text-teal-light transition-colors">
                    hello@shorehands.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal mt-0.5" />
                <div>
                  <p className="text-sand/70">Serving the entire<br />New Jersey Shore</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-sand/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sand/60 text-sm">
            © {currentYear} ShoreHands. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-sand/60 hover:text-sand-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-sand/60 hover:text-sand-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
