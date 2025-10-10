import Image from "next/image";

import EngineImg from "@/images/pillar-engine.svg";
import EngineKey from "@/images/pillar-key.svg";
import EngineOpening from "@/images/pillar-opening.svg";
import EngineShield from "@/images/pillar-shield.svg";
import EngineUser from "@/images/pillar-user.svg";
import Engine from "@/images/pillar-web.svg";

import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const PlatformCarousel = () => {
  const pillarBox = [
    {
      bg: "#44D5E9",
      img: EngineImg,
      title: "How prompts work?",
      desc: "Every part of the platform is designed to help you get clarity.",
    },
    {
      bg: "#2AC670",
      img: EngineImg,
      title: "How to adjust your forecast?",
      desc: "Build your strategy, and keep your team aligned through execution.",
    },
    {
      bg: "#EE1D52",
      img: EngineImg,
      title: "Integrated Training Layer",
      desc: "Cross-functional planning made simple",
    },
  ];
  return (
    <section className="font-manrope pt-16 md:pt-24 pb-10 md:pb-14 px-5 sm:px-10 md:px-20">
      <div>
        <h3 className="text-3xl text-center mb-10 font- font-bold">
          Embedded Training Carousel
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1290px] mx-auto">
          {pillarBox?.map((pillar, index) => (
            <div className="" key={index}>
              <div>
                <div
                  className={`w-full aspect-[16/10] rounded-[10px] mb-4`}
                  style={{ background: pillar.bg }}
                ></div>
                <div className="px-1">
                  <h3 className="text-base font-bold mb-3">{pillar.title}</h3>
                  <p className="text-sm text-[#12141D] leading-loose">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 md:mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="bg-[#12141D] w-full h-[20rem] md:h-full rounded-[10px]"></div>
          <div className="">
            <div className="py-6 md:py-32">
              <h3 className="text-4xl leading-[1.3] font-bold mb-10">
                A time-lapse of a plan being created, edited, and tracked from
                first prompt to dashboard activation.
              </h3>
              <p className="text-base text-[#12141D] opacity-80 mb-10">
                Experience smart planning now
              </p>
              <div className="flex gap-2">
                <Link
                  href="/pricing"
                  className="bg-accent flex items-center gap-2 border border-solid py-4 text-white font-bold px-6 text-sm rounded-[8px] border-accent"
                >
                  See Pricing <FaArrowRightLong className="text-lg" />
                </Link>
                <Link
                  href="/demo"
                  className="bg-transparent flex items-center gap-2 border border-solid border-[#1D4374] py-4 font-bold px-6 text-sm rounded-[8px] text-[#183B56]"
                >
                  See Features in Action
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformCarousel;
