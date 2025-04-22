"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

export default function MovieCards() {
  const cards = movieData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10 bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-2xl font-bold text-white font-sans flex items-center">
        Trending Now
        <span className="ml-2 text-xs text-gray-400 font-normal hidden md:inline">Movies & TV</span>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const MovieContent = ({ movie }: { movie: any }) => {
  return (
    <>
      <div className="mb-8">
        <div className="aspect-video w-full overflow-hidden rounded-md mb-4">
          <Image
            src={movie.src}
            alt={movie.title}
            height={720}
            width={1280}
            className="w-full object-cover"
          />
        </div>
        
        <div className="flex gap-3 mb-6">
          <button className="bg-white text-black px-8 py-2 rounded-md flex items-center gap-2 font-medium hover:bg-opacity-90 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Play
          </button>
          <button className="bg-gray-600 text-white px-6 py-2 rounded-md flex items-center gap-2 font-medium hover:bg-opacity-90 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            My List
          </button>
        </div>
        
        <div className="text-gray-200">
          <p className="text-lg mb-4">{movie.description || 'No description available.'}</p>
          
          <div className="grid grid-cols-2 gap-4">
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
    src: "https://images.unsplash.com/photo-1581005289513-ee86f5769f6f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
];
