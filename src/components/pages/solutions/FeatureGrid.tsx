"use client";

import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const plans = ["Lite", "Pro", "Prime", "Life", "Enterprise"] as const;

type Cell = "check" | "x" | string;

const rows: { feature: string; values: Cell[] }[] = [
  {
    feature: "AI Business Plan Generator",
    values: ["check", "check", "check", "check", "check"],
  },
  {
    feature: "Financial Forecast Builder",
    values: ["x", "x", "check", "x", "check"],
  },
  {
    feature: "Team Collaboration Tools",
    values: ["x", "x", "check", "x", "check"],
  },
  {
    feature: "Templates",
    values: ["Basic", "Enhanced", "Advanced", "Personal", "Custom"],
  },
  {
    feature: "Execution Dashboard",
    values: ["x", "check", "check", "x", "check"],
  },
  {
    feature: "In-App Guidance",
    values: ["Minimal", "check", "check", "check", "Full Suite"],
  },
  {
    feature: "Strategy Facilitation",
    values: ["x", "Add-on", "check", "Add-on", "Dedicated"],
  },
];


export default function FeatureGrid() {
  return (
    <section className="px-5 sm:px-10 md:px-20 my-20 font-manrope">
      <div className="overflow-x-auto">
        <h3 className="text-2xl md:text-4xl font-black text-[#12141D] text-center mb-6 md:mb-16 font-manrope">
          Detailed Use Case Grid
        </h3>
        <table className="w-full min-w-[760px] bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden">
          <thead>
            <tr className="text-left text-base text-[#12141D]">
              <th className="px-5 sm:px-6 py-4 font-semibold">Feature</th>
              {plans.map((p) => (
                <th
                  key={p}
                  className="px-5 sm:px-6 py-4 font-semibold text-center"
                >
                  {p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rIdx) => (
              <tr
                key={row.feature}
                className={rIdx % 2 === 0 ? "bg-[#FFF7EA]/60" : "bg-white"}
              >
                <td className="px-5 sm:px-6 py-5 text-[#12141D] font-medium">
                  {row.feature}
                </td>
                {row.values.map((val, i) => (
                  <td key={i} className="px-5 sm:px-6 py-5 text-center">
                    {val === "check" ? (
                      <FaCheck className="inline text-emerald-600" />
                    ) : val === "x" ? (
                      <RxCross2 className="inline text-rose-500 text-lg" />
                    ) : (
                      <span className="text-sm text-[#12141D] opacity-80">
                        {val}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
