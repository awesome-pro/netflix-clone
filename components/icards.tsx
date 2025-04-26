"use client";

import React, { useRef, useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function MovieCards() {
  const cards = movieData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="pl-4 text-2xl md:text-3xl font-bold text-white font-sans flex items-center">
          Trending Now
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const MovieContent = ({ movie }: { movie: any }) => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <div className="mb-4">
        <div className="text-gray-200">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400 mb-1">Cast:</p>
              <p>John Doe, Jane Smith, Robert Johnson</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Genres:</p>
              <p>{movie.category}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">This movie is:</p>
              <p>Suspenseful, Dark, Gritty</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center lg:max-w-[600px] mx-auto mt-10">
          {/* Custom input with floating label */}
          <div className="relative w-full md:flex-grow">
            <div className={`relative h-12 md:h-16 w-full md:w-[400px] rounded-full overflow-hidden ${isFocused ? 'ring-2 ring-white' : ''}`}>
              <input
                ref={inputRef}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="h-full w-full md:w-[400px] px-4 pt-5 pb-2 bg-gray-600/60 backdrop-blur-sm text-white border border-gray-600 text-lg outline-none rounded-full"
              />
              <label 
                htmlFor="email"
                className={`absolute text-gray-400 duration-150 transform ${isFocused ? 'text-xs top-2 left-4' : 'text-lg top-1/2 -translate-y-1/2 left-4'}`}
              >
                Email address
              </label>
            </div>
          </div>
          <Button 
            className="h-12 md:h-16 bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 text-xl font-semibold transition-all duration-300 ease-in-out rounded-full w-full md:w-[200px]"
          >
            Get Started
            <ChevronRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </>
  );
};

const movieData = [
  {
    category: "Action, Thriller",
    title: "Extraction 2",
    src: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2023",
    duration: "2h 3m",
    rating: "16+",
    description: "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
    content: <MovieContent movie={{ 
      title: "Extraction 2", 
      src: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Action, Thriller",
      description: "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son."
    }} />,
  },
  {
    category: "Drama, Crime",
    title: "The Irishman",
    src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2019",
    duration: "3h 29m",
    rating: "18+",
    description: "Hit man Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family in this acclaimed film from Martin Scorsese.",
    content: <MovieContent movie={{ 
      title: "The Irishman", 
      src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Drama, Crime",
      description: "Hit man Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family in this acclaimed film from Martin Scorsese."
    }} />,
  },
  {
    category: "Sci-Fi, Adventure",
    title: "Interstellar",
    src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2014",
    duration: "2h 49m",
    rating: "12+",
    description: "With humanity facing extinction from a dying Earth, a team of astronauts travels through a wormhole in search of another habitable planet.",
    content: <MovieContent movie={{ 
      title: "Interstellar", 
      src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Sci-Fi, Adventure",
      description: "With humanity facing extinction from a dying Earth, a team of astronauts travels through a wormhole in search of another habitable planet."
    }} />,
  },
  {
    category: "Horror, Thriller",
    title: "The Haunting of Hill House",
    src: "https://images.unsplash.com/photo-1505635552518-3448ff116af3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2018",
    duration: "Series",
    rating: "16+",
    description: "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",
    content: <MovieContent movie={{ 
      title: "The Haunting of Hill House", 
      src: "https://images.unsplash.com/photo-1505635552518-3448ff116af3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Horror, Thriller",
      description: "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it."
    }} />,
  },
  {
    category: "Comedy, Drama",
    title: "The Queen's Gambit",
    src: "https://images.unsplash.com/photo-1745572601167-720dc57db0d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    year: "2020",
    duration: "Limited Series",
    rating: "16+",
    description: "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
    content: <MovieContent movie={{ 
      title: "The Queen's Gambit", 
      src: "https://images.unsplash.com/photo-1581005289513-ee86f5769f6f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Comedy, Drama",
      description: "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction."
    }} />,
  },
  {
    category: "Action, Fantasy",
    title: "The Witcher",
    src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2019",
    duration: "Series",
    rating: "18+",
    description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    content: <MovieContent movie={{ 
      title: "The Witcher", 
      src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Action, Fantasy",
      description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts."
    }} />,
  },
  {
    category: "Action, Fantasy",
    title: "The Witcher",
    src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2019",
    duration: "Series",
    rating: "18+",
    description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    content: <MovieContent movie={{ 
      title: "The Witcher", 
      src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Action, Fantasy",
      description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts."
    }} />,
  },
  {
    category: "Action, Fantasy",
    title: "The Witcher",
    src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2019",
    duration: "Series",
    rating: "18+",
    description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    content: <MovieContent movie={{ 
      title: "The Witcher", 
      src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Action, Fantasy",
      description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts."
    }} />,
  },
];
