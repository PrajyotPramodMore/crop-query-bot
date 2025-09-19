import { Button } from "@/components/ui/enhanced-button";
import { Sprout, Menu, MessageCircle } from "lucide-react";
import aiIcon from "@/assets/ai-agriculture-icon.jpg";

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-3">
          <img 
            src={aiIcon} 
            alt="Farm AI Assistant" 
            className="w-8 h-8 rounded-md shadow-soft"
          />
          <h1 className="text-xl font-bold text-foreground">
            Farm<span className="text-primary">AI</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-smooth">
            Home
          </a>
          <a href="#chat" className="text-sm font-medium hover:text-primary transition-smooth">
            AI Chat
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-smooth">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-smooth">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <MessageCircle className="w-4 h-4" />
            Get Help
          </Button>
          <Button size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;