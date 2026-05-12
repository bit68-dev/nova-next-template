import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { IdentitySection } from "@/components/oz-a/IdentitySection";
import { EdgeSection } from "@/components/oz-a/EdgeSection";
import { AudienceSection } from "@/components/oz-a/AudienceSection";
import { FooterSection } from "@/components/home/FooterSection";

export const metadata: Metadata = {
  title: "OZ A — The OZ Identity",
  description:
    "OZ is a living infrastructure designed to harmonize the rhythm of work, wellness, and human connection.",
};

export default function OzAPage() {
  return (
    <main>
      <Navbar variant="light" />
      <IdentitySection />
      <EdgeSection />
      <AudienceSection />
      <FooterSection />
    </main>
  );
}
