"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

type Plan = {
  name: string;
  description: string;
  priceMonthly: number;
  featured?: boolean;
  cta?: string;
  highlight?: string;
  bullets: string[];
};

const plans: Plan[] = [
  {
    name: "Lite",
    description: "Best for idea-stage entrepreneurs and first-time planners starting their journey with clarity",
    priceMonthly: 0,
    cta: "Get Started",
    bullets: [
      "Basic templates",
      "AI prompts",
      "ideal for early-stage founders",
    ],
  },
  {
    name: "Pro",
    description: "Best for entrepreneurs and startups getting started with structured planning",
    priceMonthly: 10,
    cta: "Get Started",
    bullets: [
      "All Lite features",
      "Expert strategy guidance",
      "Milestones & dashboards",
      "Email support",
    ],
  },
  {
    name: "Prime",
    description: "Best for teams and organizations ready to scale with full strategic visibility",
    priceMonthly: 15,
    featured: true,
    cta: "Get Started",
    highlight: "Most Popular",
    bullets: [
      "Everything in Pro",
      "Financial forecasting tools",
      "Team collaboration",
      "Advanced dashboards",
      "Expert support",
      "Strategy facilitation add-ons",
    ],
  },
  {
    name: "Enterprise",
    description: "Best for large organizations needing custom AI solutions and integrated workflow",
    priceMonthly: 0,
    cta: "Contact Sales",
    bullets: [
      "Security reviews & Single Sign-On",
      "Custom training",
      "Dedicated success manager",
      "Flexible billing",
    ],
  },
  {
    name: "Life",
    description: "Best for individuals and professionals designing purposeful personal plans",
    priceMonthly: 5,
    cta: "Contact Sales",
    bullets: [
      "Guided prompts for life and career clarity",
      "Personal goal and habit tracker",
      "Vision and values reflection tools",
      "⁠Progress insights and growth summaries",
    ],
  },
];

export default function PricingSect() {
  const [annual, setAnnual] = useState(false);

  const pricedPlans = useMemo(() => {
    return plans.map((p) => {
      if (p.name === "Enterprise") return p;
      const monthly = p.priceMonthly;
      if (!annual) return { ...p, priceMonthly: monthly };
      // 2 months free equivalent
      const yearlyPrice = Math.round(monthly * 10 * 100) / 100;
      return { ...p, priceMonthly: yearlyPrice };
    });
  }, [annual]);

  return (
    <section className="max-w-[1800px] mx-auto px-5 sm:px-10 md:px-20 w-full mt-10 sm:mt-12">
      {/* Billing toggle */}
      <div className="relative w-max mx-auto mb-10 sm:mb-16 mt-10 sm:mt-20">
        <div className="bg-accent rounded-full !p-1 flex items-center gap-1 relative select-none">
          {/* slider */}
          <div
            className={`absolute top-1 bottom-1 left-1 w-1/2 rounded-full bg-white transition-transform duration-300 ${
              annual ? "translate-x-full" : "translate-x-0"
            }`}
          />
          <button
            type="button"
            aria-pressed={!annual}
            onClick={() => setAnnual(false)}
            className={`relative z-10 px-6 md:px-10 py-3 text-sm rounded-full transition-colors duration-200 ${
              !annual ? "text-accent" : "text-white"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={annual}
            onClick={() => setAnnual(true)}
            className={`relative z-10 px-10 md:px-20 py-3 text-sm rounded-full transition-colors duration-200 ${
              annual ? "text-accent" : "text-white"
            }`}
          >
            Yearly
          </button>
        </div>
        <div className="text-center text-xs text-gray-500 mt-2">
          {/* {annual ? "Billed annually — 2 months free" : "Switch to Yearly and get 2 months free"} */}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-2">
        {pricedPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg relative overflow-hidden ${
              plan.featured
                ? "bg-primary text-white ring-1 ring-primary"
                : "bg-[#FAFAFA]"
            }`}
          >
            <div className="p-3 sm:p-4 !pt-8">
              <div className="flex items-baseline justify-between">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    plan.name === "Prime" ? "text-white" : "text-black"
                  }`}
                >
                  {plan.name}
                </h3>
              </div>
              <p
                className={`mt-1 text-sm mb-7 block ${
                  plan.featured ? "text-white" : "text-black"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-4 mb-8 flex items-end gap-1 font-manrope transition-all duration-300">
                {plan.name === "Enterprise" ? (
                  <span
                    className={`text-3xl font-black ${
                      plan.featured ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Custom
                  </span>
                ) : plan.priceMonthly === 0 ? (
                  <span className="text-4xl font-bold text-black">Free</span>
                ) : plan.name === "Prime" ? (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0">
                      <span className="text-base text-white font-bold transition-colors">
                        $
                      </span>
                      <span className="text-4xl font-black text-white transition-all duration-300">
                        {plan.priceMonthly}
                      </span>
                    </div>
                    <span
                      className={`text-lg ${
                        plan.featured ? "opacity-90" : "text-gray-500"
                      }`}
                    >
                      {annual ? "/ month (billed annually)" : "/ month"}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0">
                      <span className="text-base text-black font-bold transition-colors">
                        $
                      </span>
                      <span className="text-3xl font-black text-black transition-all duration-300">
                        {plan.priceMonthly}
                      </span>
                    </div>
                    <span
                      className={`text-lg ${
                        plan.featured ? "opacity-90" : "text-gray-500"
                      }`}
                    >
                      {annual ? "/ month (billed annually)" : "/ month"}
                    </span>
                  </div>
                )}
              </div>

              <ul
                className={`mt-4 mb-28 space-y-5 text-sm ${
                  plan.featured ? "opacity-95" : "text-gray-600"
                }`}
              >
                {plan.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center font-manrope text-sm gap-2"
                  >
                    <div
                      className={`rounded-full size-[12px] ${
                        plan.name !== "Prime" ? "bg-[#EDAE40]" : "bg-white"
                      } flex items-center justify-center`}
                    >
                      <FaCheck className="text-[8px] text-accent" />
                    </div>{" "}
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-5 left-0 px-5 w-full">
                <Link
                  href="/demo"
                  className={`border block text-center text-sm py-3 md:py-1 rounded-lg border-solid ${
                    plan.name === "Prime"
                      ? "bg-white border-white text-[#1a1a1a] hover:bg-accent/90 hover:border-none hover:text-white"
                      : "bg-white text-black border-[#E1E1E1] hover:bg-primary/90 hover:text-white"
                  } w-full`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
