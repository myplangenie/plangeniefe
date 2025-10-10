"use client";

import Image from "next/image";
import { useState } from "react";

import AdImg from "@/images/ad.svg";
import AbtImg from "@/images/abt.png";

import MckinsleyImg from "@/images/mckinsey.png";
import MicrosoftImg from "@/images/microsoft.png";
import TecImg from "@/images/tec.png";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function OurFounders() {
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
    <section className="px-5 sm:px-10 md:px-20 max-w-[1470px] mx-auto">
      <div className="enterprise py-14 sm:py-20 px-5 sm:px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center rounded-[26px] font-bold font-manrope">
        <div className="font-manrope text-white w-full">
          <h2 className="text-2xl mb-5 leading-loose w-full">
            We are a team of builders, strategists, and facilitators with
            experience at organizations including McKinsey & Company, Microsoft,
            and The Executive Committee (TEC).
          </h2>
          <div className="flex items-center gap-10 mb-5">
            <Image
              src={MckinsleyImg}
              alt="Mckinsley"
              quality={100}
              width={100}
              height={100}
              className="w-auto h-[4rem]"
            />
            <Image
              src={MicrosoftImg}
              alt="Microsoft"
              quality={100}
              width={100}
              height={100}
              className="w-auto h-[5rem]"
            />
            <Image
              src={TecImg}
              alt="Tec"
              quality={100}
              width={100}
              height={100}
              className="w-auto h-[5rem]"
            />
          </div>
          <p className="text-lg mb-3 leading-loose">
            Our collective expertise spans strategy, operations, technology, and
            leadership development. We bring these experiences together to make
            business planning smarter, more accessible, and more actionable for
            everyone.
          </p>
          {/* <p className="text-sm mb-3 leading-loose">
            And while our technology is powerful, our people are always here for
            you. Through our Help Centre and dedicated support, we are ready to
            guide you every step of the way.
          </p> */}
        </div>
        <div>
          <Image
            src={AbtImg}
            alt="about us"
            quality={100}
            width={100}
            height={100}
            className="w-full h-auto rounded-[24px]"
          />
        </div>
      </div>
    </section>
  );
}
