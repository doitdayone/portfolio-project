"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import SkillsSection from "@/components/Skills";
import ProjectTimeline from "@/components/ProjectTimeline";
import ContactSection from "@/components/Contact";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sections = ["home", "about", "skills", "projects", "contact"];

  const scrollToSection = (index: number) => {
    if (containerRef.current) {
      const sectionWidth = containerRef.current.scrollWidth / sections.length;
      containerRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: "smooth",
      });
      setActiveSection(index);
      setIsMobileMenuOpen(false);
    }
  };

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const sectionWidth = containerRef.current.scrollWidth / sections.length;
      const newActiveSection = Math.round(scrollPosition / sectionWidth);

      setActiveSection((prev) =>
        prev !== newActiveSection ? newActiveSection : prev
      );
    }
  }, [sections.length]);

  const scrollNext = () => {
    if (activeSection < sections.length - 1) {
      scrollToSection(activeSection + 1);
    }
  };

  const scrollPrev = () => {
    if (activeSection > 0) {
      scrollToSection(activeSection - 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f1f5e8]">
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        sections={sections}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div
        ref={containerRef}
        className="flex h-screen w-screen overflow-x-scroll snap-x snap-mandatory hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <HeroSection scrollNext={scrollNext} />
        <AboutSection />
        <SkillsSection />
        <ProjectTimeline />
        <ContactSection />
      </div>

      {/* Navigation arrows */}
      <div className="fixed bottom-8 right-8 flex gap-2 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          disabled={activeSection === 0}
          className="bg-white/80 backdrop-blur-sm border-[#86a877] text-[#86a877] hover:bg-[#e8f0df] hover:text-[#5c7850]"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          disabled={activeSection === sections.length - 1}
          className="bg-white/80 backdrop-blur-sm border-[#86a877] text-[#86a877] hover:bg-[#e8f0df] hover:text-[#5c7850]"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Section indicators */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === index
                ? "w-6 bg-[#5c7850]"
                : "bg-[#86a877]/50 hover:bg-[#86a877]"
            }`}
            aria-label={`Go to ${sections[index]} section`}
          />
        ))}
      </div>
    </div>
  );
}
