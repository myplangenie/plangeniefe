"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = {
  onBack?: () => void;
  onNext?: (text: string) => void;
};

const VisionPurpose = ({ onBack, onNext }: Props) => {
  const [text, setText] = useState("");

  return (
    <div className="w-full max-w-[1120px] mx-auto px-5">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="bg-white rounded-[10px] p-4 pt-6 order-2 lg:order-none">
          <p className="text-sm uppercase tracking-wide mb-3 text-[#526581] font-black">
            Your Journey
          </p>
          <ul className="space-y-2">
            {[
              "Vision & Purpose",
              "Values & Culture",
              "Market & Opportunity",
              "Products & Services",
              "Organizational Structure",
              "Financial Forecasting",
              "Departmental Actions Plans",
              "Customizable Plan Builder",
            ].map((label, idx) => (
              <li
                key={label}
                className={`flex items-center gap-3 rounded-[8px] px-3 py-3 text-sm ${
                  idx === 0
                    ? "bg-[#FDF7EE] text-black font-semibold"
                    : "hover:bg-muted"
                }`}
              >
                <span
                  className={`size-8 shrink-0 rounded-full flex items-center justify-center text-sm text-black ${
                    idx === 0
                      ? "bg-[#EDAE40] text-white border-[#EDAE40]"
                      : "bg-[#F1F1F1] text-[#666]"
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="leading-snug">{label}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <section className="bg-white rounded-[10px] p-5 sm:p-7 lg:pt-14 lg:px-16">
          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-black text-[#050506] mb-3">
              Vision & Purpose
            </h2>
            <p className="text-sm">
              Let&apos;s Define Who You Are and Why You Matter
            </p>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#F7F7F7] rounded-[8px] overflow-hidden border border-[#EAEAEA] mb-6 sm:mb-10">
            <button className="text-xs px-4 py-3 bg-black text-white">
              Unique Business Proposition (UBP)
            </button>
            <button className="text-xs px-4 py-3 text-[#666]">Purpose</button>
            <button className="text-xs px-4 py-3 text-[#666]">
              Vision / Destination
            </button>
          </div>

          {/* Section title */}
          <div className="flex items-center gap-2 mb-6">
            <div className="size-9 rounded-[6px] bg-[#EDAE40] flex items-center justify-center">
              <div className="size-[10px] rounded-[4px] bg-white"></div>
            </div>
            <h3 className="text-lg font-black text-[#050506]">
              Unique Business Proposition (UBP)
            </h3>
          </div>

          {/* Question + textarea */}
          <div className="mb-6">
            <label className="text-sm font-black text-black block mb-2">
              What makes your organization distinct and valuable to the people
              you serve?
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='e.g., "We offer eco-friendly packaging to small retailers"'
              className="w-full h-40 resize-none rounded-md border border-[#E1E1E1] p-4 text-sm focus:outline-none focus:ring-[3px] focus:ring-ring/50 focus:border-ring"
            />
          </div>

          {/* AI Suggestions */}
          <div className="border rounded-[8px] border-[#EDAE4099] bg-[#EDAE400D]">
            <div className="flex items-center justify-between px-4 py-2">
              <p className="text-base font-black text-[#1D4374]">
                AI Suggestions
              </p>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs px-3 bg-[#F2F2F2] font-black"
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs px-3 bg-[#EDAE401A] border border-[#EDAE40] text-[#A16701]"
                >
                  Rewrite with help
                </Button>
                <Button size="sm" className="h-7 text-xs px-3 bg-accent">
                  Accept
                </Button>
              </div>
            </div>
            <div className="px-4 pb-6 pt-4">
              <div className="px-4 py-3 text-sm text-[#333] bg-white border border-[#EAEAEA] rounded-[8px]">
                <ul className="list-disc pl-3">
                  <li>
                    We are a women-led Canadian company offering eco-friendly,
                    customizable packaging to small and mid-sized retailers
                    across North America. Our competitive edge lies in our fast
                    design turnaround, compostable materials, and commitment to
                    customer intimacy and environmental responsibility.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer nav */}
          <div className="flex items-center mx-auto w-max gap-2 mt-7">
            <Button
              type="button"
              variant="outline"
              className="px-5 py-5 rounded-[6px] bg-[#F2F2F2]"
              onClick={onBack}
            >
              Previous page
            </Button>
            <Button
              type="button"
              className="bg-accent font-black px-5 py-5 rounded-[6px]"
              onClick={() => onNext?.(text)}
            >
              Next page
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisionPurpose;
