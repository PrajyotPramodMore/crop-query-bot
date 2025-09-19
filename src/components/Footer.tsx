import { Sprout, Mail, Phone, MapPin } from "lucide-react";
import aiIcon from "@/assets/ai-agriculture-icon.jpg";

const Footer = () => {
  return (
    <footer className="bg-earth text-primary-foreground">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={aiIcon} 
                alt="Farm AI Assistant" 
                className="w-8 h-8 rounded-md"
              />
              <h3 className="text-xl font-bold">
                Farm<span className="text-accent">AI</span>
              </h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Empowering farmers with AI-driven solutions for sustainable agriculture and better crop yields.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#chat" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  AI Chat
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Crop Disease Diagnosis</li>
              <li className="text-primary-foreground/80">Weather Forecasting</li>
              <li className="text-primary-foreground/80">Soil Analysis</li>
              <li className="text-primary-foreground/80">Pest Management</li>
              <li className="text-primary-foreground/80">Irrigation Planning</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">support@farmai.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">1-800-FARM-AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">Agricultural Technology Center</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 FarmAI. All rights reserved. Helping farmers grow smarter with AI technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;