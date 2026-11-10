import Hero from "@/components/Hero";
import About from "@/components/About";
import FocusAreas from "@/components/FocusAreas";
import Approach from "@/components/Approach";
import Challenge from "@/components/Challenge";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF8F1]">
      <Hero />
      <About />
      <FocusAreas />
      <Approach />
      <Challenge />
      <Footer />
    </main>
  );
}
