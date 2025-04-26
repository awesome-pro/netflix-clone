"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { JSX } from "react";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  year?: string;
  duration?: string;
  rating?: string;
  description?: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 150 : 180; // Slimmer cards
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-6 [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 z-[1000] w-[5%] bg-gradient-to-l from-black to-transparent"></div>
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 z-[1000] w-[5%] bg-gradient-to-r from-black to-transparent"></div>

          <div className="flex flex-row justify-start gap-2 pl-4 mx-auto max-w-7xl">
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0.1 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="relative"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Navigation buttons */}
        <button
          className="absolute left-0 top-1/2 z-40 flex h-full w-12 -translate-y-1/2 items-center justify-center bg-transparent text-white disabled:opacity-0"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 hover:bg-black/70">
            <ChevronLeft className="h-6 w-6" />
          </div>
        </button>
        <button
          className="absolute right-0 top-1/2 z-40 flex h-full w-12 -translate-y-1/2 items-center justify-center bg-transparent text-white disabled:opacity-0"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 hover:bg-black/70">
            <ChevronRight className="h-6 w-6" />
          </div>
        </button>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-3xl bg-black text-white p-0 font-sans overflow-hidden"
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 hover:bg-black/70"
                onClick={handleClose}
              >
                <X className="h-5 w-5 text-white" />
              </button>
              
              {/* Movie poster/image */}
              <div className="relative h-[300px] w-full">
                <BlurImage
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                
                {/* Movie title overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <motion.h2
                    layoutId={layout ? `title-${card.title}` : undefined}
                    className="text-3xl font-bold text-white mb-2"
                  >
                    {card.title}
                  </motion.h2>
                  
                  {/* Movie metadata */}
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                    {card.year && <span>{card.year}</span>}
                    {card.year && card.rating && <span>•</span>}
                    {card.rating && <span className="border border-gray-500 px-1 text-xs">{card.rating}</span>}
                    {(card.year || card.rating) && card.duration && <span>•</span>}
                    {card.duration && <span>{card.duration}</span>}
                    {card.category && <span>• {card.category}</span>}
                  </div>
                  
                  {/* Description */}
                  {card.description && (
                    <p className="text-sm text-gray-300 line-clamp-3">
                      {card.description}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Content section */}
              <div className="p-6">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Card thumbnail */}
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative z-10 flex h-[250px] w-[160px] flex-col items-start justify-start overflow-hidden rounded-sm bg-gray-100 transition-all duration-300 group"
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          boxShadow: isHovered ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' : 'none'
        }}
      >
        {/* Card number */}
        <div className="absolute top-0 left-0 z-40 p-2">
          <span className="font-bold text-6xl text-white opacity-70 font-netflix-sans">
            {index + 1}
          </span>
        </div>
        
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        
        {/* Play button that appears on hover */}
        <div 
          className={`absolute inset-0 z-40 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}
        >
          <div className="rounded-full bg-white/30 p-3 hover:bg-white/40 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
        
        {/* Info badge that appears on hover */}
        <div 
          className={`absolute bottom-2 right-2 z-40 rounded-full bg-black/60 p-2 opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
        
        {/* Card image */}
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    //   blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
