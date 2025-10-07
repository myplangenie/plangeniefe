"use client";

import SiteHero from "@/components/pages/pricing/Hero";
import DisplayLayout from "@/components/layout/displayLayout";
import PricingSect from "@/components/pages/pricing/Pricing";
import PricingTraining from "@/components/pages/pricing/Training";
import PricingFAQ from "@/components/pages/pricing/FAQs";


export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <DisplayLayout>
        <SiteHero />
        <PricingSect />
        <PricingTraining />
        <PricingFAQ />
      </DisplayLayout>
    </div>
  );
}
