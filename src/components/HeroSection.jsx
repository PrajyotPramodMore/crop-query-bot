import { Button } from "@/components/ui/enhanced-button";
import { MessageCircle, Sprout, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-farmer.jpg";

const HeroSection = () => {
  const scrollToChat = () => {
    const chatSection = document.getElementById('chat-section');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-earth overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern farming with technology" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Smart Farming
                <br />
                <span className="text-primary">AI Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Get instant answers to your farming questions. From crop diseases to weather advice, 
                our AI assistant is here to help you grow better.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToChat}
                className="group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Asking Questions
              </Button>
              <Button variant="outline" size="xl">
                <Sprout className="w-5 h-5" />
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="lg:block">
            <div className="grid gap-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-medium border border-border/50">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-success/10 rounded-lg">
                    <Sprout className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Crop Health Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      AI-powered disease detection and treatment recommendations
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-medium border border-border/50">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-warning/10 rounded-lg">
                    <Clock className="w-6 h-6 text-warning" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">24/7 Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Round-the-clock farming assistance whenever you need it
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-medium border border-border/50">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Expert Knowledge</h3>
                    <p className="text-sm text-muted-foreground">
                      Access to agricultural expertise and best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;