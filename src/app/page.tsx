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
