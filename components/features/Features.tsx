"use client";

import { useRef } from "react";
import Image from "next/image";
import { Card } from "../ui/card";

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

const FEATURE_ITEMS: FeatureItem[] = [
  {
    title: "Enjoy on your TV",
    description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: "/t.png"
  },
  {
    title: "Download your shows to watch offline",
    description: "Save your favourites easily and always have something to watch.",
    icon: "/d.png"
  },
  {
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    icon: "/p.png"
  },
  {
    title: "Create profiles for kids",
    description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: "/c.png"
  }
];

export function Features() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-12">
        More reasons to join
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {FEATURE_ITEMS.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

function FeatureCard({ 
  title, 
  description, 
  icon
}: FeatureCardProps) {
  const ref = useRef(null);

  return (
    <Card 
      ref={ref}
      className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden p-4 h-full flex flex-col transition-all duration-300 hover:scale-105"
    >
      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>
      <p className="text-sm text-gray-300 mb-6 flex-grow">
        {description}
      </p>
      <div className="flex justify-center justify-items-end items-end h-24 w-24 mx-auto mt-auto">
        <Image 
          src={icon} 
          alt={title}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
    </Card>
  );
}