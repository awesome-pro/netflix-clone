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
    "/pushpa.png",
    "/wrestl.png",
    "/anora.png",
    "https://i.pinimg.com/474x/f8/aa/30/f8aa301c06933d8025dc025c215909d9.jpg",
    "https://i.pinimg.com/474x/54/1b/3b/541b3bea0770228304d3c6f626784654.jpg",
    "https://i.pinimg.com/474x/74/2e/ff/742efff1db938f0e20e582cd966e9af3.jpg",
    "https://i.pinimg.com/474x/da/db/68/dadb68cea6a16ac7eceb7c82156ecc8f.jpg",
    "https://i.pinimg.com/474x/c8/ad/44/c8ad44088269ddf6ea9f4595f898c1f9.jpg",
    "https://i.pinimg.com/474x/ef/21/40/ef2140a374fe1b97a979aeed0b690a1e.jpg",
    "https://i.pinimg.com/474x/c4/f9/1b/c4f91b2976e93768b6e23ba8379edbb8.jpg",
    "https://i.pinimg.com/474x/31/76/4e/31764e1806015111fa2701f5554a7c8d.jpg",
    "https://i.pinimg.com/474x/fa/8b/18/fa8b185d7e41d09f21871df9edb56ec0.jpg",
    "https://i.pinimg.com/474x/66/21/47/6621478fe3955cc40f3e1200d15e02d9.jpg",
    "https://i.pinimg.com/474x/45/37/9e/45379e75658d39bd42a97c1a873c4cc7.jpg",
    "https://i.pinimg.com/474x/97/87/fc/9787fccd831bce2a31881d1b3528e5f5.jpg",
    "https://i.pinimg.com/474x/b9/68/28/b968288895edf365fac22f450ef1dcd2.jpg",
    "https://i.pinimg.com/474x/df/cd/92/dfcd924cf7394ea7ce9b26d30e4aafc9.jpg",
    "https://i.pinimg.com/474x/5a/f0/63/5af06332509068c1a3d98b5eb83d0095.jpg",
    "https://i.pinimg.com/474x/8d/32/03/8d3203d69da695486f62b2f46c520d7e.jpg",
    "https://i.pinimg.com/474x/ed/34/96/ed3496f85083f3a85c498732f6e441b2.jpg",
    "https://i.pinimg.com/474x/71/af/2c/71af2cc4c1920fd25bf5339b9aff85ec.jpg",
    "https://i.pinimg.com/474x/ca/1e/ea/ca1eeaa9d361a137fe3548a27eb69515.jpg",
    "https://i.pinimg.com/474x/45/37/9e/45379e75658d39bd42a97c1a873c4cc7.jpg"
  ];
  
  return (
    <div className="relative min-h-[85vh] md:min-h-[100vh] flex items-center justify-center text-white">
      {/* Background image with overlay */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
      
      {/* Black overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60 z-[1]"></div>

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