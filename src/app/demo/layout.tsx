import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Demo — See Plan Genie in action",
  description:
    "Book a free 30‑minute demo of Plan Genie. Explore AI planning, built‑in training, and execution tracking tailored to your needs.",
  alternates: { canonical: "/demo" },
  openGraph: {
    title: "Request a Demo — Plan Genie",
    description:
      "Get a guided tour of Plan Genie and see how it turns strategy into execution.",
    images: [{ url: "/images/hero.svg", width: 1200, height: 630 }],
  },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}

