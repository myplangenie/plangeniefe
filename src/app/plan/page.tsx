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
