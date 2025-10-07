import type { Metadata } from "next";
import SiteHero from "@/components/pages/pricing-detail/Hero";
import DisplayLayout from "@/components/layout/displayLayout";
import PricingSect from "@/components/pages/pricing-detail/Detail";
import FeatureGrid from "@/components/pages/solutions/FeatureGrid";
import Ad from "@/components/pages/pricing-detail/Ad";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <DisplayLayout>
        <SiteHero />
        <PricingSect />
        <FeatureGrid />
        <Ad />
      </DisplayLayout>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Solutions — Use cases and how we help",
  description:
    "Explore how Plan Genie supports founders, nonprofits, consultants, and teams with AI planning and facilitation.",
  alternates: { canonical: "/solutions" },
};
