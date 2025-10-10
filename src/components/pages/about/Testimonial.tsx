"use client";

import { useEffect, useRef, useState } from "react";
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
  // New testimonials
  {
    quote:
      "Business plans can be complicated, but Plan Genie is a simple way to get clarity, especially for our clients.",
    author: "Michele Devlin, MacDev Finance",
  },
  {
    quote:
      "The framework is excellent. Provides a ton of clarity, particularly because I am really clear on sections 1–3 recently so could really tie to the action plans and see priorities.",
    author: "Allison Bran, Rex Marketing and Design",
  },
  {
    quote: "I appreciate the structure and end-to-end matrix of the tool.",
    author: "Rob Robinson, Econotech",
  },
  {
    quote:
      "Planning is very important and it gives clarity to the purpose of being in business.",
    author: "Ramandeep Baidwan, MDS Inc.",
  },
  {
    quote:
      "I ‘get it’ and I am aligned with how you view planning in business, but this process and online tool made it less overwhelming to get started.",
    author: "Allison Bran, Rex Marketing and Design",
  },
];

export default function Testimonials() {
  // index controls a one-by-one scroll
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const max = testimonials.length - 1;

  const scrollToIndex = (idx: number) => {
    const el = itemRefs.current[idx];
    const track = trackRef.current;
    if (el && track) track.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
    setIndex(idx);
  };

  const prev = () => scrollToIndex(index <= 0 ? max : index - 1);
  const next = () => scrollToIndex(index >= max ? 0 : index + 1);

  // Autoscroll with pause on hover and when tab is hidden
  useEffect(() => {
    const onVis = () => setPaused(document.visibilityState !== "visible");
    document.addEventListener("visibilitychange", onVis);
    let id: ReturnType<typeof setInterval> | undefined;
    if (!paused && max > 0) {
      id = setInterval(() => {
        const nxt = index >= max ? 0 : index + 1;
        scrollToIndex(nxt);
      }, 1800);
    }
    return () => {
      if (id) clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [paused, index, max]);

  
  return (
    <section
      className="text-black mt-24"
      ref={wrapRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1200px] px-5 sm:px-10 mx-auto">
        <div className="text-center">
          <h4 className="text-2xl md:text-4xl font-bold font-manrope tracking-tight mb-10 max-w-3xl mx-auto leading-[1.3]">
            How Leaders Are Planning Smarter With Us
          </h4>
        </div>

        <div className="relative">
          <div ref={trackRef} className="overflow-x-hidden">
            <div className="flex gap-4 md:gap-6 snap-x snap-mandatory">
              {testimonials.map((t, i) => {
                const parts = t.author.split(",");
                const name = parts.length > 1 ? parts.slice(0, -1).join(",").trim() : t.author;
                const company = parts.length > 1 ? parts[parts.length - 1].trim() : "";
                return (
                  <div
                    key={i}
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    className="snap-center shrink-0 flex-[0_0_100%] md:flex-[0_0_33.333%]"
                  >
                    <article className="rounded-[8px] border border-[#12141D]/10 bg-white p-5 shadow-sm h-full flex flex-col">
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
                  </div>
                );
              })}
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
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "bg-accent w-6" : "bg-gray-300 w-2"
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
