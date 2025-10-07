import DisplayLayout from "@/components/layout/displayLayout";
import Testimonials from "@/components/pages/about/Testimonial";
import PlatformCarousel from "@/components/pages/platform/Embed";
import PlatformHero from "@/components/pages/platform/Hero";
import PlatformPillars from "@/components/pages/platform/Pillars";

const Platform = () => {
  return (
    <DisplayLayout>
      <PlatformHero />
      <PlatformPillars />
      <PlatformCarousel />
      <Testimonials />
    </DisplayLayout>
  );
};

export default Platform;
