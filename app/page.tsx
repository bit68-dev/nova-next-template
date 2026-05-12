import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { LandscapeSection } from "@/components/home/LandscapeSection";
import { LifeSection } from "@/components/home/LifeSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { FooterSection } from "@/components/home/FooterSection";

export default function Home() {
  return (
    <main>
      {/* Hero (includes Navbar inside blue section) */}
      <HeroSection />

      {/* The Space Between Work and Life */}
      <FeaturesSection />

      {/* Living the Ecosystem */}
      <StatsSection />

      {/* Our Physical Landscape */}
      <LandscapeSection />

      {/* Life at OZ */}
      <LifeSection />

      {/* Latest Insights */}
      <InsightsSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
