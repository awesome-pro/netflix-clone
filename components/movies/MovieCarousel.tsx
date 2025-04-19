"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MOVIES } from "@/lib/constants";
import { MovieCard } from "@/components/movies/MovieCard";

export function MovieCarousel() {
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const handleNext = () => {
    if (carouselRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = carouselRef.current;
      const newScrollLeft = Math.min(scrollLeft + offsetWidth * 0.9, scrollWidth - offsetWidth);
      
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
      
      setCanScrollLeft(newScrollLeft > 0);
      setCanScrollRight(newScrollLeft < scrollWidth - offsetWidth - 5);
      setActiveIndex(Math.floor(newScrollLeft / (offsetWidth / MOVIES.length)));
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = carouselRef.current;
      const newScrollLeft = Math.max(scrollLeft - offsetWidth * 0.9, 0);
      
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
      
      setCanScrollLeft(newScrollLeft > 0);
      setCanScrollRight(newScrollLeft < scrollWidth - offsetWidth - 5);
      setActiveIndex(Math.floor(newScrollLeft / (offsetWidth / MOVIES.length)));
    }
  };

  return (
    <section className="py-16 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Netflix Originals
        </h2>
        
        <div className="relative overflow-hidden">
          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white transition-opacity duration-300",
              !canScrollLeft && "opacity-0 pointer-events-none"
            )}
            disabled={!canScrollLeft}
            aria-label="Previous"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={handleNext}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white transition-opacity duration-300",
              !canScrollRight && "opacity-0 pointer-events-none"
            )}
            disabled={!canScrollRight}
            aria-label="Next"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          
          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="overflow-x-hidden cursor-grab active:cursor-grabbing"
          >
            <motion.div 
              className="flex gap-4"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              onDragEnd={() => {
                if (carouselRef.current) {
                  const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current;
                  setCanScrollLeft(scrollLeft > 0);
                  setCanScrollRight(scrollLeft < scrollWidth - offsetWidth - 5);
                }
              }}
            >
              {MOVIES.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </motion.div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {MOVIES.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-1 w-8 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-red-600" : "bg-gray-600"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}