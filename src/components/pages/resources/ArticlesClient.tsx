"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import type { Article } from "@/content/articles";

export default function FeaturedArticlesClient({
  items,
}: {
  items: Article[];
}) {
  const [index, setIndex] = useState(0);
  const len = Math.max(items.length, 1);
  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);

  const current = items[index];

  return (
    <section className="max-w-[1400px] mx-auto py-1 font-manrope mt-20 px-5 sm:px-10 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-[#12141D] mb-2 md:mb-5">
        Featured Blog Articles
      </h2>
      <p className="text-base opacity-70 mt-1">
        Here&apos;s what we&apos;ve been up to recently.
      </p>

      <div className="relative mt-7 md:mt-14">
        {/* gap-8 rounded-2xl items-center border-2 border-solid border-[#E5EAF4] */}
        <div className="overflow-visible grid md:grid-cols-[1.2fr_1fr] relative border border-solid border-[#E5EAF4] rounded-2xl h-[440px]">
          <div className="relative overflow-visible">
            <Image
              src={current.cover || ""}
              alt={current?.title || "Blog cover"}
              width={1200}
              height={800}
              className="min-h-[25rem] h-full w-full object-cover rounded-l-xl"
              priority
            />
          </div>
          <div>
            <article className="relative p-4 md:p-10 h-max">
              <span className="inline-block text-[10px] tracking-wide font-semibold bg-[#EAF2FF] text-[#1D4374] px-3 py-1 rounded-full mb-20">
                FEATURED
              </span>
              <h3 className="text-2xl sm:text-2xl md:text-4xl font-extrabold leading-[1.3] text-[#17324F]">
                <Link
                  href={`/resources/articles/${current.slug}`}
                  className="hover:underline"
                >
                  {current.title}
                </Link>
              </h3>
              <div className="mt-14 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="size-14 rounded-full bg-[#C4C4C4] inline-block" />
                  <div className="text-sm">
                    <div className="flex items-center gap-1.5 font-medium mb-1 text-[#12141D]">
                      {current.author ?? "Plan Genie Team"}
                      <BadgeCheck className="size-4 text-emerald-600" />
                    </div>
                    <div className="text-sm text-gray-500 -mt-0.5">
                      Verified writer
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {current.date
                    ? new Date(current.date).toLocaleDateString()
                    : ""}
                </div>
              </div>
            </article>
          </div>
          <button
            aria-label="Previous article"
            onClick={prev}
            className="hidden md:flex absolute -left-7 top-1/2 -translate-y-1/2 size-12 items-center justify-center rounded-full bg-accent text-white cursor-pointer shadow-lg ring-1 ring-black/10 z-50"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            aria-label="Next article"
            onClick={next}
            className="hidden md:flex absolute -right-7 top-1/2 -translate-y-1/2 size-12 items-center justify-center rounded-full bg-accent text-white cursor-pointer shadow-lg ring-1 ring-black/10"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
