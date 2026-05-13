import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/home/FooterSection";
import { FloatingDecorations } from "@/components/spaces/FloatingDecorations";
import { PhysicalParkHero } from "@/components/spaces/PhysicalParkHero";
import { CampusPhilosophy } from "@/components/spaces/CampusPhilosophy";
import { CampusLandscape } from "@/components/spaces/CampusLandscape";
import { MembershipParticipation } from "@/components/spaces/MembershipParticipation";
import { ClearBoundaries } from "@/components/spaces/ClearBoundaries";

export const metadata = {
  title: "Spaces & Access — OZ A",
  description:
    "Explore the OZ A physical park: campus philosophy, landscape, memberships, and the boundaries that protect the experience.",
};

export default function SpacesAccessPage() {
  return (
    <main style={{ background: "var(--color-oz-page-bg)", position: "relative", overflow: "hidden" }}>
      <FloatingDecorations />
      <Navbar variant="light" />
      <PhysicalParkHero />
      <CampusPhilosophy />
      <CampusLandscape />
      <MembershipParticipation />
      <ClearBoundaries />
      <FooterSection />
    </main>
  );
}
