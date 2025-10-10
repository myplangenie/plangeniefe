import type { Metadata } from "next";
import DisplayLayout from "@/components/layout/displayLayout";
import Testimonials from "@/components/pages/about/Testimonial";
import PlatformCarousel from "@/components/pages/platform/Embed";
import PlatformHero from "@/components/pages/platform/Hero";
import PlatformPillars from "@/components/pages/platform/Pillars";
import PricingSect from "@/components/pages/pricing-detail/Detail";

import Ad from "@/components/pages/pricing-detail/Ad";

const Platform = () => {
  return (
    <DisplayLayout>
      <PlatformHero />
      <PlatformPillars />
      <PricingSect />
      <Ad />
      <PlatformCarousel />
      <Testimonials />
    </DisplayLayout>
  );
};

export default Platform;

export const metadata: Metadata = {
  title: "Platform — AI planning, training, and execution",
  description:
    "See how Plan Genie brings AI, embedded learning, and collaboration together to help you plan and execute.",
  alternates: { canonical: "/platform" },
};
