"use client";

import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSectionProps {
  scrollNext: () => void;
}

export default function HeroSection({ scrollNext }: HeroSectionProps) {
  return (
    <section className="min-w-full h-screen flex items-center snap-start p-4 md:p-8 lg:p-16 bg-gradient-to-br from-[#e8f0df] to-[#f1f5e8]">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-block px-3 py-1 rounded-full bg-[#86a877]/20 text-[#5c7850] text-sm font-medium">
            Welcome to my portfolio
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#5c7850]">
            Creative <span className="text-[#86a877]">Software</span> Engineer
          </h1>
          <p className="text-lg text-[#5c7850]/80 max-w-md">
            Crafting beautiful digital experiences with a focus on clean design
            and smooth interactions.
          </p>
          <div className="flex gap-4">
            <Button
              onClick={scrollNext}
              className="bg-[#5c7850] hover:bg-[#4a6340] text-white"
            >
              Explore My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a
              href="https://github.com/doitdayone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-[#86a877] text-[#5c7850] hover:bg-[#e8f0df] hover:text-[#5c7850]"
              >
                <Github className="mr-2" />
                Doitdayone
              </Button>
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-[#86a877]/20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-[#86a877]/30"></div>
            <div className="absolute inset-8 rounded-full bg-[#5c7850]/20 flex items-center justify-center">
              <Image
                src="/images/avatar.png"
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
