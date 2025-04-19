"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex-shrink-0 relative cursor-pointer transition-all duration-300 h-[200px] w-[300px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-md">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          sizes="300px"
          priority
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay and content */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-white text-lg font-bold mb-1">{movie.title}</h3>
          <p className="text-white/80 text-sm mb-3">{movie.description}</p>
          
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm" className="rounded-full bg-white hover:bg-white/90 text-black">
              <Play className="h-4 w-4 mr-1" /> Play
            </Button>
            
            <Button variant="outline" size="icon" className="rounded-full bg-black/40 border-white/30">
              <Plus className="h-4 w-4" />
            </Button>
            
            <Button variant="outline" size="icon" className="rounded-full bg-black/40 border-white/30">
              <ThumbsUp className="h-4 w-4" />
            </Button>
            
            <div className="ml-auto">
              <Button variant="outline" size="icon" className="rounded-full bg-black/40 border-white/30">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}