"use client";

import { IoIosArrowForward } from "react-icons/io";

import Link from "next/link";

type Plan = {
  name: string;
  problem: string;
  suggestion: string;
  solution: string;
};

export default function PricingDetail() {

  const plans: Plan[] = [
    {
      name: "SME Leaders",
      problem: "Alignment across teams, departments, and business units",
      suggestion: "Prime + Live Facilitation + Dashboards",
      solution:
        "Bring structure to strategic conversations while building a solid, collaborative business plan that’s actionable across functions.",
    },
    {
      name: "Startup Founders",
      problem: "Presentable, credible, and fundable business plans quickly",
      suggestion: "Lite → Pro → Prime (depending on growth stage)",
      solution:
        "AI-guided planning and forecasting ensure you are never starting from scratch and stay investor-ready.",
    },
    {
      name: "Social Purpose Organizations / Non-profits",
      problem:
        "Clear articulation of mission, revenue streams, programs, and long-term vision",
      suggestion: "Prime with facilitation add-ons",
      solution:
        "Simplifies operational and strategic planning in one place. Helps meet funder, board, and regulatory expectations.",
    },
    {
      name: "Coaches & Consultants",
      problem: "Scalable planning methodology to use with clients",
      suggestion: "Prime + Templates + Facilitator Training",
      solution:
        "Use our proven system and white-label tools to guide others through effective business planning.",
    },
    {
      name: "Educators & Institutions",
      problem: "Practical business planning training for students or cohorts",
      suggestion: "Licensing, White-label dashboards + Assignments",
      solution: "Provide hands-on learning tools with measurable outputs.",
    },
    {
      name: "Individuals & Life Planners",
      problem: "Clarify purpose, life goals, and personal vision",
      suggestion: "Life Toolkit (PDF + Coming-soon app",
      solution:
        "Helps individuals break their dreams into focus areas, next steps, and life strategy",
    },
  ];

  return (
    <section className="px-5 sm:px-10 md:px-20 mx-auto w-full pt-20 sm:pt-20 pb-14 sm:pb-20 bg-white [#F8F9FC] font-manrope">
      <h3 className="text-2xl md:text-4xl font-black text-[#12141D] text-center mb-6 md:mb-16 font-manrope">
        Detailed Use Case Grid
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
        {plans.map((plan) => (
          <div key={plan.name} className={`relative overflow-hidden bg-white shadow`}>
            <div className="h-2 bg-primary w-full"></div>
            <div className="p-3 sm:p-10">
              <div className="flex items-baseline justify-between">
                <h3
                  className={`text-lg md:text-xl font-semibold mb-2 ${
                    plan.name === "Prime" ? "text-white" : "text-black"
                  }`}
                >
                  {plan.name}
                </h3>
              </div>

              <ul className="mt-4 space-y-4 md:space-y-8 text-sm">
                <li className="flex items-start font-manrope text-base gap-5 leading-loose">
                  <div>
                    <div className="size-[22px] bg-[#5198F3] rounded-full"></div>
                  </div>
                  <span className="-mt-2">{plan.problem}</span>
                </li>
                <li className="flex items-start font-manrope text-base gap-5 leading-loose">
                  <div>
                    <div className="size-[22px] bg-[#447DC8] rounded-full"></div>
                  </div>
                  <span className="-mt-2">{plan.suggestion}</span>
                </li>
                <li className="flex items-start font-manrope text-base gap-5 leading-loose">
                  <div>
                    <div className="size-[22px] bg-[#1D4374] rounded-full"></div>
                  </div>
                  <span className="-mt-2">{plan.solution}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Link
        className="flex items-center gap-2 bg-accent mt-14 text-sm px-4 mx-auto w-max text-white rounded-[5px] py-4 justify-center"
        href="/demo"
      >
        See Plan Genie In Action <IoIosArrowForward />
      </Link>
    </section>
  );
}
