"use client";

import { useState } from "react";
import Image from "next/image";
import Graphic from "@/images/graphic.png";
import { ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

export default function FeaturedArticles() {
  const [index, setIndex] = useState(0);
  const items = [
    {
      title: "Business Planning Is Not Dead. It’s Just Broken",
      date: "02 May",
      author: "Vaska Mento",
      image: Graphic,
    },
    {
      title: "Why Strategic Planning Fails (and how to fix it)",
      date: "18 Apr",
      author: "Joran Willsen",
      image: Graphic,
    },
  ];
  const len = items.length;
  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);

  const current = items[index];

  return (
    <section className="max-w-[1400px] mx-auto py-1 font-manrope mt-20 px-5 sm:px-10 md:px-20">
      <h2 className="text-3xl font-bold text-[#12141D] mb-5">
        Featured Blog Articles
      </h2>
      <p className="text-base opacity-70 mt-1">
        Here&apos;s what we&apos;ve been up to recently.
      </p>

      <div className="relative mt-14">
        <div className="overflow-visible grid md:grid-cols-[1.2fr_1fr] gap-8 rounded-2xl items-center border-2 border-solid border-[#E5EAF4]">
          {/* Left image panel */}
          <div className="relative overflow-visible shadow-sm">
            <div className="bg-black h-[25rem] w-full rounded-l-xl"></div>
            <button
              aria-label="Previous article"
              onClick={prev}
              className="hidden md:flex absolute -left-7 top-1/2 -translate-y-1/2 size-12 items-center justify-center rounded-full bg-accent text-white shadow-lg ring-1 ring-black/10 z-50"
            >
              <ChevronLeft className="size-6" />
            </button>
          </div>

          {/* Right content card */}
          <article className="relative p-7 md:p-10 h-max">
            <span className="inline-block text-[10px] tracking-wide font-semibold bg-[#EAF2FF] text-[#1D4374] px-3 py-1 rounded-full mb-6">
              FEATURED
            </span>
            <h3 className="text-[26px] sm:text-3xl md:text-3xl font-extrabold leading-relaxed text-[#17324F]">
              {current.title}
            </h3>
            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="size-14 rounded-full bg-[#C4C4C4] inline-block" />
                <div className="text-sm">
                  <div className="flex items-center gap-1.5 font-medium mb-1 text-[#12141D]">
                    Viola Manisa
                    <BadgeCheck className="size-4 text-emerald-600" />
                  </div>
                  <div className="text-sm text-gray-500 -mt-0.5">
                    Verified writer
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">{current.date}</div>
            </div>

            <button
              aria-label="Next article"
              onClick={next}
              className="hidden md:flex absolute -right-7 top-1/2 -translate-y-1/2 size-12 items-center justify-center rounded-full bg-accent text-white shadow-lg ring-1 ring-black/10"
            >
              <ChevronRight className="size-6" />
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
