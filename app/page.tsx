import Iphone from "@/components/design";
import { ExpandableCard } from "@/components/expandable";
import { FAQ } from "@/components/faq/FAQ";
import { Features } from "@/components/features/Features";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import AppleCards from "@/components/icards";
import { Navbar } from "@/components/navbar/Navbar";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AppleCards />
      <ScrollAnimation />
      <div className="container relative z-10 px-4 pt-20 md:pt-0 mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient-premium">
          Click to see the Magic
        </h1>
      </div>
      <ExpandableCard />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}
