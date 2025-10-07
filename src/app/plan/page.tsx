import type { Metadata } from "next";
import DisplayLayout from "@/components/layout/displayLayout";
import ListHero from "@/components/pages/pricing-list/Hero";
import { Listings } from "@/components/pages/pricing-list/Listings";
import { ListingsSupport } from "@/components/pages/pricing-list/Support";

export default function PlanList() {
  return (
    <div>
      <div className="min-h-screen flex flex-col font-manrope">
        <DisplayLayout>
          <ListHero />
          <Listings />
          <ListingsSupport />
        </DisplayLayout>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Plans — pick the best way to get started",
  description:
    "Explore paths for founders, nonprofits, consultants, and educators. See how to start planning with Plan Genie.",
  alternates: { canonical: "/plan" },
};
