"use client";
import { FaCheck } from "react-icons/fa6";

import HeroImg from "@/images/hero.svg";

import MainImg from "@/images/hero/main.svg";
import AltImg from "@/images/hero/alt.svg";
import SecImg from "@/images/hero/sec.svg";
import Sec2Img from "@/images/hero/sec2.svg";

import _1Img from "@/images/hero/_1.svg";
import _2Img from "@/images/hero/_2.png";
import _3Img from "@/images/hero/_3.png";
import _4Img from "@/images/hero/_4.png";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";


import ArrowImg from "@/images/hero/arrow.svg";

import MarkImg from "@/images/hero/mark.svg";
import FlowerImg from "@/images/hero/flower.svg";

import CurveImg from "@/images/hero/curve-sec.svg";

import Image from "next/image";

import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

export default function HomeHero() {
  const scope = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scope.current) return;
    const ctx = gsap.context(() => {
      gsap.set([".hero-card", ".hero-deco"], { autoAlpha: 0, y: 24, scale: 0.94 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
      // Animate the four main cards first
      tl.to(".hero-card", { autoAlpha: 1, y: 0, scale: 1, stagger: 0.18 });
      // Then decorations (mark, arrow, flower, curve)
      tl.to(".hero-deco", { autoAlpha: 1, y: 0, scale: 1, stagger: 0.12 }, "-=0.3");
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <header className="relative hero-bg pt-32 sm:pt-40 md:pt-52 pb-40 sm:pb-20 md:pb-24 text-white" ref={scope}>
      <div className="flex flex-col md:grid md:grid-cols-[1.2fr_1fr] items-center gap-28 md:gap-14 px-5 sm:px-10 md:px-20">
        <div className="flex flex-col gap-2 md:gap-4">
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-manrope !leading-[1.6] md:!leading-[1.1] md:mb-2">
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
            <Link
              href="/pricing"
              className="bg-accent flex items-center gap-1 border border-solid py-3 text-white font-bold px-6 text-sm rounded-[8px] border-accent"
            >
              See Pricing <IoArrowForward className="text-xl" />
            </Link>
            <Link
              href="/demo"
              className="bg-transparent border border-solid py-3 font-bold px-6 text-sm rounded-[8px] border-white text-white"
            >
              Book a Demo
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="order-first grid grid-cols-4 md:order-none image-box z-30 relative">
            <div className="relative hero-card">
              <Image
                src={_1Img}
                alt="alt main"
                quality={100}
                width={100}
                height={100}
                className="w-full h-auto"
              />
              <Image
                src={MarkImg}
                alt="alt main"
                quality={100}
                width={100}
                height={100}
                className="w-[30px] h-auto absolute -top-6 -left-5 hero-deco"
              />
            </div>
            <div className="relative hero-card">
              <Image
                src={_2Img}
                alt="alt main"
                quality={100}
                width={100}
                height={100}
                className="w-full h-auto -mt-12"
              />
              <Image
                src={ArrowImg}
                alt="alt main"
                quality={100}
                width={100}
                height={100}
                className="absolute bottom-0 w-full hero-deco"
              />
            </div>
            <div className="hero-card">
              <Image
                src={_3Img}
                alt="alt main"
                quality={100}
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <div className="relative hero-card">
              <Image
                src={_4Img}
                alt="alt main"
                quality={100}
                width={100}
                height={100}
                className="w-full h-auto -mt-12"
              />
              <div className="absolute -bottom-5 w-full">
                <Image
                  src={FlowerImg}
                  alt="alt main"
                  quality={100}
                  width={100}
                  height={100}
                  className="w-[70px] mx-auto block hero-deco"
                />
              </div>
            </div>
          </div>
          <div className="w-full absolute inset-0 -top-20 z-10 hero-deco">
            <Image
              src={CurveImg}
              alt="alt main"
              quality={100}
              width={100}
              height={100}
              className="w-full h- [40rem] mx-auto block"
            />
          </div>
        </div>
      </div>
    </header>
  );
}