import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

import AdImg from "@/images/ad.svg";

import { IoArrowForward } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

export default function ProductOfferings() {
  const offeringsItem = [
    {
      header: "Plan Genie Lite",
      text: "Core business planning templates and AI support for beginners",
      link: "/demo",
    },
    {
      header: "Plan Genie Pro",
      text: "Deeper planning tools, basic guidance features, and document outputs",
      link: "/demo",
    },
    {
      header: "Plan Genie Prime",
      text: "Full-stack business planning with financial modeling, strategic guidance, and collaboration",
      link: "/demo",
    },
    {
      header: "Plan Genie Life",
      text: "Personal life planning and visioning tools",
      link: "/demo",
    },
    {
      header: "Plan Genie Live Training",
      text: "Guided workshops, planning sprints, and post-plan execution support",
      link: "/demo",
    },
    {
      header: "Plan Genie Enterprise",
      text: "Custom AI-powered solutions with workflow automation, system integration, and organizational efficiency at scale",
      link: "/demo",
    },
  ];
  return (
    <section>
      <div className="max-w-[1200px] mx-auto py-16 sm:py-20 px-5 sm:px-10">
        <div className="text-center mb-5">
          <h4 className="text-2xl sm:text-4xl md:text-4xl font-bold font-manrope tracking-tight mb-3">
            Our Offerings Overview
          </h4>
          <p className="text-base sm:text-lg opacity-70 font-manrope w-full sm:w-[85%] md:w-[75%] max-w-[984px] mx-auto leading-loose mb-12 sm:mb-20">
            Whether you are launching a startup, coaching businesses, leading a
            team, or mapping out your life, Plan Genie is designed to work the
            way you think.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-14">
            {offeringsItem.map((item, index) => (
              <div
                key={index}
                className="border-b-2 border-solid border-[#12141D] pb-10"
              >
                <h4 className="text-xl font-manrope font-bold mb-2">
                  {item.header}
                </h4>
                <p className="text-sm font-manrope leading-loose mb-3 font-medium w-full lg:w-[95%] min-h-[78px]">
                  {item.text}
                </p>
                <Link href={item.link} className="flex items-center gap-1 font-bold">
                  Discover More <FaArrowRightLong />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center mt-12 sm:mt-20 flex-wrap">
            <Link href="/demo" className="flex items-center gap-2 bg-accent px-6 sm:px-8 py-3 sm:py-4 text-sm text-white border border-solid border-accent rounded-[8px]">
            Start Planning Free <FaArrowRightLong /></Link>
            <Link href="/demo" className="flex items-center gap-2 bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-sm border border-solid border-[#1D4374] text-[#1D4374] rounded-[8px]">
            Explore Facilitation Options</Link>
        </div>
      </div>
    </section>
  );
}
