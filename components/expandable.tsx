"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[1000]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-4 right-4 items-center justify-center bg-transparent text-white rounded-full h-10 w-10 z-[101] hover:bg-black/20"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[850px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-black text-white sm:rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="relative">
                <motion.div layoutId={`image-${active.title}-${id}`} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <img
                    width={850}
                    height={480}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-[480px] object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <motion.h2
                      layoutId={`title-${active.title}-${id}`}
                      className="text-4xl font-bold mb-2"
                    >
                      {active.title}
                    </motion.h2>
                    <div className="flex items-center gap-3 mb-4">
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.ctaLink}
                        className="px-5 py-2 text-sm rounded-full font-bold bg-red-600 hover:bg-red-700 text-white transition-colors"
                      >
                        {active.ctaText}
                      </motion.a>
                      <button className="bg-gray-600/40 hover:bg-gray-500/40 p-2 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-300 text-base overflow-auto max-h-[300px] pb-4 [scrollbar-width:thin] [scrollbar-color:#333_transparent]"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Popular on Netflix</h2>
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="relative group cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
            >
              <div className="overflow-hidden rounded-md">
                <motion.div layoutId={`image-${card.title}-${id}`} className="relative">
                  <img
                    width={300}
                    height={169}
                    src={card.src}
                    alt={card.title}
                    className="h-[169px] w-full object-cover transition-all duration-500 group-hover:brightness-75"
                  />
                </motion.div>
                <div className="p-2 bg-[#181818] opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 right-0">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-white text-sm"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-gray-400 text-xs"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Stranger Things",
    description: "Sci-Fi & Fantasy • 2016",
    src: "https://i.pinimg.com/474x/4c/58/52/4c585223874a3fd62ac4cd21647d96a9.jpg",
    ctaText: "Play Now",
    ctaLink: "#",
    genre: "Sci-Fi & Fantasy",
    year: "2016",
    rating: "TV-14",
    duration: "4 Seasons",
    content: () => {
      return (
        <div>
          <div className="flex gap-2 mb-3">
            <span className="text-green-500 font-semibold">97% Match</span>
            <span className="border border-gray-500 px-1 text-xs">TV-14</span>
            <span>4 Seasons</span>
          </div>
          <p>
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
            <br /><br />
            Set in the 1980s in the fictional town of Hawkins, Indiana, the series centers around the investigation into the disappearance of a young boy amid supernatural events occurring around the town, including the appearance of a girl with psychokinetic abilities.
            <br /><br />
            <span className="font-semibold">Starring:</span> Winona Ryder, David Harbour, Millie Bobby Brown
            <br />
            <span className="font-semibold">Creators:</span> The Duffer Brothers
          </p>
        </div>
      );
    },
  },
  {
    title: "The Witcher",
    description: "Fantasy Drama • 2019",
    src: "https://i.pinimg.com/474x/8d/32/03/8d3203d69da695486f62b2f46c520d7e.jpg",
    ctaText: "Play Now",
    ctaLink: "#",
    genre: "Fantasy Drama",
    year: "2019",
    rating: "TV-MA",
    duration: "3 Seasons",
    content: () => {
      return (
        <div>
          <div className="flex gap-2 mb-3">
            <span className="text-green-500 font-semibold">91% Match</span>
            <span className="border border-gray-500 px-1 text-xs">TV-MA</span>
            <span>3 Seasons</span>
          </div>
          <p>
            Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.
            <br /><br />
            The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.
            <br /><br />
            <span className="font-semibold">Starring:</span> Henry Cavill, Anya Chalotra, Freya Allan
            <br />
            <span className="font-semibold">Based on:</span> The book series by Andrzej Sapkowski
          </p>
        </div>
      );
    },
  },
  {
    title: "Wednesday",
    description: "Comedy Horror • 2022",
    src: "https://i.pinimg.com/474x/9f/f3/51/9ff351cab878c18211ea7b7e00ab81b4.jpg",
    ctaText: "Play Now",
    ctaLink: "#",
    genre: "Comedy Horror",
    year: "2022",
    rating: "TV-14",
    duration: "1 Season",
    content: () => {
      return (
        <div>
          <div className="flex gap-2 mb-3">
            <span className="text-green-500 font-semibold">95% Match</span>
            <span className="border border-gray-500 px-1 text-xs">TV-14</span>
            <span>1 Season</span>
          </div>
          <p>
            Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.
            <br /><br />
            The series follows Wednesday Addams' years as a student at Nevermore Academy, where she attempts to master her emerging psychic ability, thwart a monstrous killing spree and solve the supernatural mystery that embroiled her parents 25 years ago.
            <br /><br />
            <span className="font-semibold">Starring:</span> Jenna Ortega, Gwendoline Christie, Riki Lindhome
            <br />
            <span className="font-semibold">Creators:</span> Alfred Gough, Miles Millar
          </p>
        </div>
      );
    },
  },
  {
    title: "Squid Game",
    description: "Korean Thriller • 2021",
    src: "https://i.pinimg.com/474x/0f/e6/d6/0fe6d6678b8a279647d2ada3dd35f840.jpg",
    ctaText: "Play Now",
    ctaLink: "#",
    genre: "Korean Thriller",
    year: "2021",
    rating: "TV-MA",
    duration: "1 Season",
    content: () => {
      return (
        <div>
          <div className="flex gap-2 mb-3">
            <span className="text-green-500 font-semibold">99% Match</span>
            <span className="border border-gray-500 px-1 text-xs">TV-MA</span>
            <span>1 Season</span>
          </div>
          <p>
            Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.
            <br /><br />
            The series centers on a contest where 456 players, all of whom are in deep financial hardship, risk their lives to play a series of deadly children's games for the chance to win a ₩45.6 billion prize.
            <br /><br />
            <span className="font-semibold">Starring:</span> Lee Jung-jae, Park Hae-soo, Wi Ha-jun
            <br />
            <span className="font-semibold">Creator:</span> Hwang Dong-hyuk
          </p>
        </div>
      );
    },
  },
  
];
