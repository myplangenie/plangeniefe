import type { Metadata } from "next";
import DisplayLayout from "@/components/layout/displayLayout";
import PricingFAQ from "@/components/pages/pricing/FAQs";
import AboutHero from "@/components/pages/about/Hero";
import AboutStory from "@/components/pages/about/Story";
import AboutFounders from "@/components/pages/about/Founders";
import Testimonials from "@/components/pages/about/Testimonial";
import OurFounders from "@/components/pages/about/Founder";


export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col font-manrope">
      <DisplayLayout>
        <AboutHero />
        <AboutStory />
        <OurFounders />
        {/* <AboutFounders /> */}
        <PricingFAQ />
        <Testimonials />
      </DisplayLayout>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About — Purpose, story, and team",
  description:
    "Learn about Plan Genie’s mission and the team behind our planning methodology and platform.",
  alternates: { canonical: "/about-us" },
};
