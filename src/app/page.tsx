import type { Metadata } from "next";
import DisplayLayout from "@/components/layout/displayLayout";
import Testimonials from "@/components/pages/about/Testimonial";
import Enhance from "@/components/pages/home/Enhance";
import HomeHero from "@/components/pages/home/Hero";
import ProductOfferings from "@/components/pages/home/Offerings";
import Props from "@/components/pages/home/Props";
import Story from "@/components/pages/home/Story";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <DisplayLayout>
        <HomeHero />
        <Props />
        <Enhance />
        <Story />
        <ProductOfferings />
        <Testimonials />
      </DisplayLayout>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Plan smarter. Grow faster.",
  description:
    "Plan Genie combines AI planning, training, and execution tools to help teams move from strategy to action.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Plan smarter. Grow faster.",
    images: [
      {
        url: "/images/hero.svg",
        width: 1200,
        height: 630,
        alt: "Plan Genie hero",
      },
    ],
  },
};
