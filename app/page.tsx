import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { LandscapeSection } from "@/components/home/LandscapeSection";
import { LifeSection } from "@/components/home/LifeSection";
import { FooterSection } from "@/components/home/FooterSection";

export default function Home() {
  return (
    <main>
      {/* Hero (includes sticky Navbar inside blue section) */}
      <HeroSection />

      {/* The Space Between Work and Life */}
      <FeaturesSection />

      {/* Living the Ecosystem */}
      <StatsSection />

      {/* Our Physical Landscape */}
      <LandscapeSection />

      {/* Life at OZ */}
      <LifeSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
