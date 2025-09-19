import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChatSection from "@/components/ChatSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ChatSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;