import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import DisplayLayout from "@/components/layout/displayLayout";
import ResourcesHero from "@/components/pages/resources/Hero";
import TopDownloads from "@/components/pages/resources/Downloads";
import VideoTutorials from "@/components/pages/resources/Videos";
import FeaturedArticles from "@/components/pages/resources/Articles";
import Testimonials from "@/components/pages/about/Testimonial";
import ResourcesNewsletter from "@/components/pages/resources/Newsletter";

export default function ResourcesPage() {
  return (
    <DisplayLayout
      title="Weekly planning wisdom. No fluff. No spam."
      desc="Build your next landing page fast & easy"
      page="resources"
    >
      <ResourcesHero />
      <VideoTutorials />
      <FeaturedArticles />
      <TopDownloads />
      <Testimonials />
    </DisplayLayout>
  );
}

export const metadata: Metadata = {
  title: "Resources — templates, videos, and articles",
  description:
    "Free templates, tutorials, and articles to power your planning journey with Plan Genie.",
  alternates: { canonical: "/resources" },
};
