"use client";

import _1Img from "@/images/hero/_1.svg";
import _2Img from "@/images/hero/_2.svg";
import _3Img from "@/images/hero/_3.svg";
import _4Img from "@/images/hero/_4.svg";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import ArrowImg from "@/images/hero/arrow.svg";

import MarkImg from "@/images/hero/mark.svg";
import FlowerImg from "@/images/hero/flower.svg";

import CurveImg from "@/images/hero/curve-sec.svg";

import Image from "next/image";

type HeroImageProps = {
  variant?: "default" | "compact";
};

export default function HeroImage({ variant = "default" }: HeroImageProps) {
  const scope = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scope.current) return;
    const ctx = gsap.context(() => {
      gsap.set([".hero-card", ".hero-deco"], {
        autoAlpha: 0,
        y: 24,
        scale: 0.94,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });
      // Animate the four main cards first
      tl.to(".hero-card", { autoAlpha: 1, y: 0, scale: 1, stagger: 0.18 });
      // Then decorations (mark, arrow, flower, curve)
      tl.to(
        ".hero-deco",
        { autoAlpha: 1, y: 0, scale: 1, stagger: 0.12 },
        "-=0.3"
      );
    }, scope);
    return () => ctx.revert();
  }, []);

  const compact = variant === "compact";

  return (
    <div
      className={`relative ${compact ? "max-w-[380px] sm:max-w-[460px] md:max-w-[520px] mx-auto" : ""}`}
      ref={scope}
    >
      <div className={`order-first grid grid-cols-4 md:order-none image-box z-30 relative ${compact ? "scale-[0.98]" : ""}`}>
        <div className="relative hero-card">
          <Image
            src={_1Img}
            alt="alt main"
            quality={100}
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
          <Image
            src={MarkImg}
            alt="alt main"
            quality={100}
            width={1000}
            height={1000}
            className="w-[30px] h-auto absolute -top-6 -left-5 hero-deco"
          />
        </div>
        <div className="relative hero-card">
          <Image
            src={_2Img}
            alt="alt main"
            quality={100}
            width={1000}
            height={1000}
            className="w-full h-auto -mt-12"
          />
          <Image
            src={ArrowImg}
            alt="alt main"
            quality={100}
            width={1000}
            height={1000}
            className="absolute bottom-0 w-full hero-deco"
          />
        </div>
        <div className="hero-card">
          <Image
            src={_3Img}
            alt="alt main"
            quality={100}
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
        <div className="relative hero-card">
          <Image
            src={_4Img}
            alt="alt main"
            quality={100}
            width={1000}
            height={1000}
            className="w-full h-auto -mt-12"
          />
          <div className="absolute -bottom-5 w-full">
            <Image
              src={FlowerImg}
              alt="alt main"
              quality={100}
              width={1000}
              height={1000}
              className="w-[70px] mx-auto block hero-deco"
            />
          </div>
        </div>
      </div>
      {!compact && (
        <div className="w-full absolute inset-0 -top-20 z-10 hero-deco">
          <Image
            src={CurveImg}
            alt="alt main"
            quality={100}
            width={1000}
            height={1000}
            className="w-full h- [40rem] mx-auto block"
          />
        </div>
      )}
    </div>
  );
}
