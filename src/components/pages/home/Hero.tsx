import { FaCheck } from "react-icons/fa6";

import HeroImg from "@/images/hero.svg";

import MainImg from "@/images/hero/main.svg";
import AltImg from "@/images/hero/alt.svg";
import SecImg from "@/images/hero/sec.svg";
import Sec2Img from "@/images/hero/sec2.svg";

import Image from "next/image";

import { IoArrowForward } from "react-icons/io5";

export default function HomeHero() {
  return (
    <header className="bg-primary pt-32 sm:pt-40 md:pt-52 pb-40 sm:pb-20 md:pb-24 text-white">
      <div className="flex flex-col-reverse md:grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 px-5 sm:px-10 md:px-20">
        <div className="flex flex-col gap-4">
          <ul className="hidden text-xs sm:text-sm opacity-80 mb-5 md:flex gap-4 flex-wrap">
            <li className="flex items-center font-manrope font-bold text-sm gap-2">
              <div className="rounded-full size-[18px] bg-[#5B6364] flex items-center justify-center">
                <FaCheck className="text-[10px] text-accent" />
              </div>{" "}
              Plans built in minutes, not weeks
            </li>
            <li className="flex items-center font-manrope font-bold text-sm gap-2">
              <div className="rounded-full size-[18px] bg-[#5B6364] flex items-center justify-center">
                <FaCheck className="text-[10px] text-accent" />
              </div>{" "}
              Expert-level strategy guidance
            </li>
            <li className="flex items-center font-manrope font-bold text-sm gap-2">
              <div className="rounded-full size-[18px] bg-[#5B6364] flex items-center justify-center">
                <FaCheck className="text-[10px] text-accent" />
              </div>{" "}
              Trusted by top business coaches
            </li>
          </ul>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-manrope !leading-[1.6] md:leading-[1.1] mb-2">
            Plan Smarter. <span className="text-accent">Grow Faster.</span> Lead
            With Clarity.
          </h1>
          <p className="text-base sm:text-lg w-full md:w-[90%] opacity-80 mb-2 font-manrope leading-relaxed">
            Get structured guidance, real-time collaboration, and execution
            tracking, all in one intelligent platform.
          </p>
          <ul className="text-xs sm:text-sm opacity-80 mb-5 flex md:hidden gap-4 flex-wrap">
            <li className="flex items-center font-manrope font-bold text-sm gap-2">
              <div className="rounded-full size-[18px] bg-[#5B6364] flex items-center justify-center">
                <FaCheck className="text-[10px] text-accent" />
              </div>{" "}
              Plans built in minutes, not weeks
            </li>
            <li className="flex items-center font-manrope font-bold text-sm gap-2">
              <div className="rounded-full size-[18px] bg-[#5B6364] flex items-center justify-center">
                <FaCheck className="text-[10px] text-accent" />
              </div>{" "}
              Expert-level strategy guidance
            </li>
            <li className="flex items-center font-manrope font-bold text-sm gap-2">
              <div className="rounded-full size-[18px] bg-[#5B6364] flex items-center justify-center">
                <FaCheck className="text-[10px] text-accent" />
              </div>{" "}
              Trusted by top business coaches
            </li>
          </ul>
          <div className="flex gap-2 items-center flex-wrap">
            <button className="bg-accent flex items-center gap-1 border border-solid py-3 text-white font-bold px-6 text-sm rounded-[8px] border-accent">
              See Pricing <IoArrowForward className="text-xl" />
            </button>
            <button className="bg-transparent border border-solid py-3 font-bold px-6 text-sm rounded-[8px] border-white text-white">
              Book a Demo
            </button>
          </div>
        </div>
        <div className="order-first md:order-none image-box">
          <div className="main-block">
            <Image
              src={MainImg}
              alt="hero main"
              quality={100}
              width={100}
              height={100}
              className="w-full h-full dashboard-container"
            />
          </div>
          <div className="sec-block">
            <Image
              src={AltImg}
              alt="alt main"
              quality={100}
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </div>
          <div className="alt-block">
            <Image
              src={SecImg}
              alt="sec main"
              quality={100}
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </div>
          <div className="sec-alt-block">
            <Image
              src={Sec2Img}
              alt="sec alt main"
              quality={100}
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
