import { HeroDiagramSection } from "@/components/ecosystem/HeroDiagramSection";
import { OrganismSection } from "@/components/ecosystem/OrganismSection";
import { PillarCardsSection } from "@/components/ecosystem/PillarCardsSection";
import { FooterSection } from "@/components/home/FooterSection";

export const metadata = {
  title: "The Ecosystem — OZ Coworking Park",
  description:
    "OZ is a living ecosystem with seven interconnected pillars — environment, people, knowledge, energy, and more — that converge to create extraordinary work and life.",
};

export default function EcosystemPage() {
  return (
    <main>
      {/* Frame 2085663588 — Hero + orbital diagram (Navbar inside) */}
      <HeroDiagramSection />

      {/* Frame 2085663639 — A Unified Organism */}
      <OrganismSection />

      {/* Frame 2085663640 — 4 pillar cards */}
      <PillarCardsSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
