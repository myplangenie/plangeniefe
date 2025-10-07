"use client";

import Image from "next/image";
import { useState } from "react";

import AdImg from "@/images/ad.svg";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Enhance() {
  const items = [
    {
      title: "Capture your ideas using smart prompts",
      content:
        "Picking a domain is an important step in making your product exclusive and scalable.",
    },
    {
      title: "Watch our AI build your strategic roadmap",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at dui sed velit pulvinar gravida. Aenean mattis, magna nec dictum vehicula, nunc erat bibendum massa.",
    },
    {
      title: "Track your goals and iterate as you grow",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non purus metus. Phasellus tristique, lorem eget gravida blandit, arcu ligula porttitor augue.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? null : idx));

  return (
    <div className="enterprise py-14 sm:py-20 px-5 sm:px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-16 md:mt-24 items-center">
      <div>
        <Image
          src={AdImg}
          alt="thumb"
          quality={100}
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </div>
      <div className="font-manrope text-white">
        <h3 className="text-3xl md:text-4xl mb-3 font-bold leading-[1.3] md:w-[60%]">
          Enhance & scale your business experience
        </h3>
        <p className="text-base mb-3 leading-loose w-full md:w-[78%] max-w-[572px]">
          Whether you are launching a startup, coaching businesses, leading a
          team, Plan Genie is designed to work the way you think.
        </p>
        <div className="flex flex-col w-full md:w-[90%]">
          {items.map((item, idx) => (
            <div key={idx}>
              <button
                type="button"
                className="w-full flex items-start gap-4 py-4 md:py-5 cursor-pointer text-left"
                aria-expanded={openIndex === idx}
                onClick={() => toggle(idx)}
              >
                {openIndex === idx ? (
                  <IoIosArrowUp className="text-2xl shrink-0 mt-0.5" />
                ) : (
                  <IoIosArrowDown className="text-2xl shrink-0 mt-0.5" />
                )}
                <h5 className="font-manrope font-black text-base">
                  {item.title}
                </h5>
              </button>
              <div
                className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out ${
                  openIndex === idx
                    ? "max-h-[300px] opacity-100 mt-1"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <div className="pr-2">
                  <p className="text-sm leading-relaxed text-white/85">
                    {item.content}
                  </p>
                </div>
              </div>
              {idx !== items.length - 1 && (
                <div className="h-[2px] w-full border-solid bg-[#12141D] opacity-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
