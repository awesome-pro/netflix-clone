import Iphone from "@/components/design";
import { FAQ } from "@/components/faq/FAQ";
import { Features } from "@/components/features/Features";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import AppleCards from "@/components/icards";
import MoodRecommendation from "@/components/mood";
import { ThreeDMarqueeDemoSecond } from "@/components/mor";
import { MovieCarousel } from "@/components/movies/MovieCarousel";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AppleCards />
      <Iphone />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}
