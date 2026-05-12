import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FooterSection } from "@/components/home/FooterSection";
import { heroContent, features, stats, footerLinks } from "@/app/home/data";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection
        headline={heroContent.headline}
        subheadline={heroContent.subheadline}
        ctaPrimaryLabel={heroContent.ctaPrimaryLabel}
        ctaSecondaryLabel={heroContent.ctaSecondaryLabel}
      />
      <FeaturesSection features={features} />
      <StatsSection stats={stats} />
      <FooterSection links={footerLinks} />
    </main>
  );
}
