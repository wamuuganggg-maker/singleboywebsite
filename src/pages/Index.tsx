import { useState, useCallback, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroProfile from "@/components/HeroProfile";
import MusicPlayer from "@/components/MusicPlayer";
import JourneyTimeline from "@/components/JourneyTimeline";
import ToolsStack from "@/components/ToolsStack";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/FooterSection";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();

    // Block common DevTools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") e.preventDefault();
      // Ctrl+Shift+I / Cmd+Option+I (DevTools)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "I") e.preventDefault();
      // Ctrl+Shift+J / Cmd+Option+J (Console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "J") e.preventDefault();
      // Ctrl+Shift+C (Inspect element)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "C") e.preventDefault();
      // Ctrl+U / Cmd+U (View source)
      if ((e.ctrlKey || e.metaKey) && e.key === "u") e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Disable text selection via CSS
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
    };
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
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
