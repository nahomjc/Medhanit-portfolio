"use client";

import { useState, useEffect } from "react";
import IntroLoader from "./components/IntroLoader";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ShowcaseSection from "./components/ShowcaseSection";
import VideoSection from "./components/VideoSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import ChatBot from "./components/ChatBot";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 11000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <IntroLoader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="showcase">
          <ShowcaseSection />
        </section>

        <section id="videos">
          <VideoSection />
        </section>

        <section id="portfolio">
          <PortfolioSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}
