import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Bot, User, Sprout, Cloud, Bug, Leaf, Droplets, Sun } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ChatSection = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      content: "Hello! I'm your AI farming assistant. I can help you with crop diseases, weather advice, soil management, and more. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    { icon: Bug, text: "Help with pest control", category: "pest" },
    { icon: Cloud, text: "Weather forecast advice", category: "weather" },
    { icon: Leaf, text: "Crop disease diagnosis", category: "disease" },
    { icon: Droplets, text: "Irrigation scheduling", category: "water" },
    { icon: Sun, text: "Soil health tips", category: "soil" },
    { icon: Sprout, text: "Planting recommendations", category: "planting" },
  ];

  const simulateAIResponse = (userMessage) => {
    setIsTyping(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      let response = "";
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes("pest") || lowerMessage.includes("bug")) {
        response = "For pest control, I recommend integrated pest management (IPM). First, identify the specific pest affecting your crops. Common organic solutions include neem oil, beneficial insects, and crop rotation. Would you like specific recommendations for a particular pest or crop?";
      } else if (lowerMessage.includes("weather") || lowerMessage.includes("rain")) {
        response = "Weather planning is crucial for farming success. I recommend checking 7-day forecasts regularly and having contingency plans for extreme weather. For irrigation, monitor soil moisture levels and adjust based on rainfall predictions. What specific weather concerns do you have?";
      } else if (lowerMessage.includes("disease") || lowerMessage.includes("sick")) {
        response = "Crop diseases can significantly impact yield. Early detection is key. Look for symptoms like leaf spots, wilting, or discoloration. Ensure proper spacing for air circulation, avoid overhead watering, and consider disease-resistant varieties. Can you describe the symptoms you're seeing?";
      } else if (lowerMessage.includes("soil") || lowerMessage.includes("fertiliz")) {
        response = "Healthy soil is the foundation of successful farming. Test your soil pH (most crops prefer 6.0-7.0), ensure proper organic matter content, and maintain good drainage. Regular soil testing helps determine nutrient needs. What type of soil analysis are you looking for?";
      } else if (lowerMessage.includes("water") || lowerMessage.includes("irrigat")) {
        response = "Efficient water management saves costs and improves crop health. Water deeply but less frequently to encourage deep root growth. Best times are early morning or evening to reduce evaporation. Consider drip irrigation for water conservation. What's your current irrigation setup?";
      } else {
        response = "That's a great farming question! While I can provide general guidance, I recommend consulting with local agricultural extension services for region-specific advice. Is there a particular aspect of farming you'd like me to focus on - like crops, livestock, or equipment?";
      }
      
      const newMessage = {
        id: Date.now().toString(),
        content: response,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    simulateAIResponse(input);
    setInput("");
    
    toast({
      title: "Message sent",
      description: "AI is analyzing your question...",
    });
  };

  const handleQuickQuestion = (question) => {
    setInput(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section id="chat-section" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Chat with Your <span className="text-primary">AI Farm Assistant</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get instant answers to your farming questions, 24/7
            </p>
          </div>

          {/* Quick Questions */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Popular Questions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start h-auto p-4 text-left hover:bg-primary/5"
                  onClick={() => handleQuickQuestion(question.text)}
                >
                  <question.icon className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                  <span className="text-sm">{question.text}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <Card className="shadow-strong border-border/50">
            <CardHeader className="border-b border-border/50">
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" />
                Farm AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!message.isUser && (
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-4 rounded-xl ${
                        message.isUser
                          ? 'bg-primary text-primary-foreground ml-12'
                          : 'bg-muted text-muted-foreground mr-12'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                    {message.isUser && (
                      <div className="p-2 bg-accent/10 rounded-full">
                        <User className="w-4 h-4 text-accent" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-muted text-muted-foreground p-4 rounded-xl mr-12">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-border/50 p-4">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about farming..."
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={input.trim() === "" || isTyping}
                    size="icon"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;