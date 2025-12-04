import Navbar from "@/components/Navbar";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden selection:bg-neon-purple selection:text-white">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
