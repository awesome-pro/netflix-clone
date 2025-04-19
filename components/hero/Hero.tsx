"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { HERO_BACKGROUND_URL } from "@/lib/constants";
import { ThreeDMarquee } from "../ui/marquee";

export function Hero() {
  const [email, setEmail] = useState("");
  const images = [
    "/chhava.png",
    "/wrestl.png",
    "/wrestl.png",
    "/chhava.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "/chhava.png",
    "/chhava.png",
    "/wrestl.png",
    "/pushpa.png",
    "/wrestl.png",
    "/chhava.png",
    "/anora.png",
    "/wrestl.png",
    "/anora.png",
    "/wrestl.png",
    "/wrestl.png",
    "/anora.png",
    "/pushpa.png",
  ];
  
  return (
    <div className="relative min-h-[85vh] md:min-h-[100vh] flex items-center justify-center text-white">
      {/* Background image with overlay */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
      
      {/* Black overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/70 z-[1]"></div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20 md:pt-0 mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="text-xl font-semibold md:text-2xl mb-5 text-slate-200">Starts at ₹149. Cancel at any time.</h2>
        <p className="text-lg mb-5 text-slate-300">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center max-w-3xl mx-auto">
          <Input
            type="email"
            placeholder="Email address"
            className="rounded-full h-14 md:h-16 bg-black/60 backdrop-blur-xl text-white border-[1px] border-gray-600 text-2xl w-full md:flex-grow focus-visible:ring-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button 
            className="h-14 md:h-16 bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 text-xl font-semibold transition-all duration-300 ease-in-out rounded-full w-full md:w-[200px]"
          >
            Get Started
            <ChevronRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}