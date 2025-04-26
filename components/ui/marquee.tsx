"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimationControls } from "motion/react";
import { cn } from "@/lib/utils";
import { Pause, Play } from "lucide-react";
export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const firstRowControls = useAnimationControls();
  const secondRowControls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Duplicate and shuffle images for variety
  const allImages = [...images, ...images, ...images];
  // Split the images into two rows for the marquee
  const firstRow = allImages.slice(0, Math.ceil(allImages.length / 2));
  const secondRow = allImages.slice(Math.ceil(allImages.length / 2));
  
  // Toggle pause/play
  const togglePause = () => {
    setIsPaused(!isPaused);
    if (!isPaused) {
      firstRowControls.stop();
      secondRowControls.stop();
    } else {
      firstRowControls.start("animate");
      secondRowControls.start("animate");
    }
  };
  
  useEffect(() => {
    if (!isPaused) {
      firstRowControls.start("animate");
      secondRowControls.start("animate");
    }
  }, [firstRowControls, secondRowControls, isPaused]);
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "relative mx-auto block h-[70vh] overflow-hidden rounded-b-[40px]",
        className,
      )}
    >
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-[2]"></div>
      
      <div className="relative h-full w-full overflow-hidden">
        {/* First row - moves right to left */}
        <div className="mt-8 mb-4">
          <motion.div
            className="flex w-max"
            animate={firstRowControls}
            variants={{
              animate: {
                x: ["0%", "-50%"],
                transition: {
                  x: {
                    duration: 180,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  },
                },
              },
            }}
            initial="animate"
          >
            {/* First copy of images */}
            <div className="flex">
              {firstRow.map((image, idx) => (
                <div 
                  key={`first-row-1-${idx}`} 
                  className="relative flex-shrink-0 px-1"
                >
                  <img
                    src={image}
                    alt={`Netflix content ${idx + 1}`}
                    className="h-[280px] w-[180px] object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate to ensure continuous flow */}
            <div className="flex">
              {firstRow.map((image, idx) => (
                <div 
                  key={`first-row-2-${idx}`} 
                  className="relative flex-shrink-0 px-1"
                >
                  <img
                    src={image}
                    alt={`Netflix content ${idx + 1}`}
                    className="h-[280px] w-[180px] object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Second row - also moves right to left but at different speed */}
        <div className="mb-8">
          <motion.div
            className="flex w-max"
            animate={secondRowControls}
            variants={{
              animate: {
                x: ["0%", "-50%"],
                transition: {
                  x: {
                    duration: 200, // Different speed for visual interest
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  },
                },
              },
            }}
            initial="animate"
          >
            {/* First copy of images */}
            <div className="flex">
              {secondRow.map((image, idx) => (
                <div 
                  key={`second-row-1-${idx}`} 
                  className="relative flex-shrink-0 px-1"
                >
                  <img
                    src={image}
                    alt={`Netflix content ${idx + 1}`}
                    className="h-[280px] w-[180px] object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate to ensure continuous flow */}
            <div className="flex">
              {secondRow.map((image, idx) => (
                <div 
                  key={`second-row-2-${idx}`} 
                  className="relative flex-shrink-0 px-1"
                >
                  <img
                    src={image}
                    alt={`Netflix content ${idx + 1}`}
                    className="h-[280px] w-[180px] object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Pause/Play button */}
      <button 
        onClick={togglePause}
        className="absolute bottom-4 right-4 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label={isPaused ? "Play" : "Pause"}
      >
        {isPaused ? (
          <Play className="h-6 w-6 text-white" />
        ) : (
          <Pause className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
};

// We don't need the grid lines for the Netflix style marquee
