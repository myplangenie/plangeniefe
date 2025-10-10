"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = { quote: string; author: string };

const testimonials: Testimonial[] = [
  {
    quote:
      "Servicemaster has used Plan Gene for three years to help develop our business and our strategic plan. We have grown 3 years in a row and the action plans that are established using Plan Genie are integral in holding all our people in our business accountable as we work towards our goal.",
    author: "Warren Groom, Servicemaster",
  },
  {
    quote:
      "Plan Genie makes business Planning so much easier! We've found that it's gone from being a real chore to a fun exercise",
    author: "Krysta Francoeur, Studi09",
  },
  {
    quote:
      "A MUST HAVE for any business owner who isn't exactly sure where they're going or how to get there (that would be most of us). And a must have for any business owner who is sure where they're going!",
    author: "David Wilmot, Chair, TEC Canada",
  },
  {
    quote:
      "Would recommend to business owners—especially those facing significant organizational challenges.",
    author: "Mel Beaton, Commercial Law",
  },
  {
    quote:
      "Plan Genie is easy to use and easy to adjust when the economy or business factors change. I would encourage all businesses to use Plan Genie.",
    author: "Warren Groom, Servicemaster",
  },
  {
    quote:
      "The destination is one thing to figure out, the journey is a different exercise and a wee bit more complicated. Just like your GPS, Plan Genie will help you get there safe and sound. I am a Plan Genie disciple, and I approve of this review!",
    author: "David Wilmot, Chair, TEC Canada",
  },
];

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function Testimonials() {
  const pages = useMemo(() => chunk(testimonials, 3), []);
  const [index, setIndex] = useState(0);
  const max = pages.length - 1;

  const prev = () => setIndex((i) => (i <= 0 ? max : i - 1));
  const next = () => setIndex((i) => (i >= max ? 0 : i + 1));

  return (
    <section className="text-black mt-24">
      <div className="max-w-[1200px] px-5 sm:px-10 mx-auto">
        <div className="text-center">
          <h4 className="text-2xl md:text-4xl font-bold font-manrope tracking-tight mb-10 max-w-3xl mx-auto leading-[1.3]">
            Feedback from our top course recipients
          </h4>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {pages.map((group, p) => (
                <div key={p} className="w-full shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {group.map((t, i) => {
                      const parts = t.author.split(",");
                      const name = parts.length > 1 ? parts.slice(0, -1).join(",").trim() : t.author;
                      const company = parts.length > 1 ? parts[parts.length - 1].trim() : "";
                      return (
                      <article
                        key={`${p}-${i}`}
                        className="rounded-[8px] border border-[#12141D]/10 bg-white p-5 shadow-sm h-full flex flex-col"
                      >
                        <p className="text-base leading-relaxed">“{t.quote}”</p>
                        <div className="mt-auto pt-4">
                          <div className="h-px bg-[#12141D]/10" />
                          <p className="mt-3 text-base font-semibold text-[#12141D]/80">
                            {name}
                            {company && (
                              <>
                                {", "}
                                <em>{company}</em>
                              </>
                            )}
                          </p>
                        </div>
                      </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              aria-label="Previous testimonials"
              onClick={prev}
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#12141D]/10 bg-white p-2 shadow-sm hover:bg-gray-50"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex items-center gap-2">
              {pages.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-6 rounded-full ${
                    i === index ? "bg-accent" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonials"
              onClick={next}
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#12141D]/10 bg-white p-2 shadow-sm hover:bg-gray-50"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
