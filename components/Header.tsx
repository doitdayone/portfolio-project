"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  activeSection: number;
  scrollToSection: (index: number) => void;
  sections: string[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Header({
  activeSection,
  scrollToSection,
  sections,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: HeaderProps) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f1f5e8]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-[#5c7850] font-bold text-xl">
            Võ Việt Hùng Portfolio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`capitalize transition-colors duration-300 ${
                  activeSection === index
                    ? "text-[#5c7850] font-medium"
                    : "text-[#86a877] hover:text-[#5c7850]"
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#5c7850]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#f1f5e8] pt-20 px-4 md:hidden">
          <nav className="flex flex-col space-y-6">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`text-xl capitalize transition-colors duration-300 ${
                  activeSection === index
                    ? "text-[#5c7850] font-medium"
                    : "text-[#86a877] hover:text-[#5c7850]"
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
