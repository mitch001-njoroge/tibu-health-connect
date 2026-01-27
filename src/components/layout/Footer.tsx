import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import tibuLogo from "@/assets/tibu-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={tibuLogo} alt="TIBU" className="h-10 w-10 rounded-lg" />
              <div>
                <span className="text-lg font-bold">TIBU</span>
                <p className="text-xs text-secondary-foreground/70">Health-Connect Services</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Connecting underserved patients to trusted healthcare near them. Making quality healthcare accessible in every county of Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><Link to="/about" className="hover:text-secondary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-secondary-foreground transition-colors">Products & Services</Link></li>
              <li><Link to="/market-research" className="hover:text-secondary-foreground transition-colors">Market Research</Link></li>
              <li><Link to="/sales" className="hover:text-secondary-foreground transition-colors">Partnership</Link></li>
              <li><Link to="/financials" className="hover:text-secondary-foreground transition-colors">Financials</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Find Nearby Doctors</li>
              <li>Clinic Search</li>
              <li>Digital Wellness Tools</li>
              <li>Home Health Analysis</li>
              <li>Provider Network</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Nairobi, Kenya
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                info@tibuhealthconnect.co.ke
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                +254 700 000 000
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © 2025 TIBU Health-Connect Services. All rights reserved.
          </p>
          <p className="text-sm text-secondary-foreground/60 flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-accent" /> for Kenya's Health
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
