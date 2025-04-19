import { FAQ } from "@/components/faq/FAQ";
import { Features } from "@/components/features/Features";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { MovieCarousel } from "@/components/movies/MovieCarousel";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <MovieCarousel />
      <FAQ />
      <Footer />
    </main>
  );
}
