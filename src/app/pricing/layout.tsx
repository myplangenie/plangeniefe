import type { Metadata } from "next";

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}

export const metadata: Metadata = {
  title: "Pricing — start free, grow as you scale",
  description:
    "Choose the right Plan Genie plan for your team. Start free and upgrade when you need forecasting, dashboards, and collaboration.",
  alternates: { canonical: "/pricing" },
};

