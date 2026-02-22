import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroProfile from "@/components/HeroProfile";
import MusicPlayer from "@/components/MusicPlayer";
import JourneyTimeline from "@/components/JourneyTimeline";
import ToolsStack from "@/components/ToolsStack";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/FooterSection";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CookieBanner />

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6">
          <HeroProfile />
          <MusicPlayer />
        </div>
      </section>

      <JourneyTimeline />
      <ToolsStack />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
