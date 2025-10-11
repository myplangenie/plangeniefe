"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import FrameImg from "@/images/frame.svg";
import InvoiceImg from "@/images/invoice.svg";

export default function EnterpriseImg() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showMain, setShowMain] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Trigger animations when the section scrolls into view
  useEffect(() => {
    if (!rootRef.current || hasAnimated) return;
    const el = rootRef.current;
    let tId: ReturnType<typeof setTimeout> | undefined;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowMain(true);
          // Overlay animation starts after main has animated in
          tId = setTimeout(() => setShowOverlay(true), 820);
          setHasAnimated(true);
          io.disconnect();
        }
      },
      { root: null, threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (tId) clearTimeout(tId);
    };
  }, [hasAnimated]);

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? null : idx));

  return (
      <div className="relative" ref={rootRef}>
        <div
          style={{ willChange: "transform, opacity" }}
          className={`transition-all duration-700 ease-out ${
            showMain ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.98] translate-y-1"
          }`}
        >
          <Image
            src={FrameImg}
            alt="thumb"
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto"
          />
        </div>
        <div
          style={{ willChange: "transform, opacity" }}
          className={`absolute top-[35%] right-0 md:-right-12 w-full max-w-[280px] transition-all duration-700 ease-out z-20 ${
            showOverlay ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.98] translate-y-1"
          }`}
        >
          <Image
            src={InvoiceImg}
            alt="invoice"
            quality={100}
            sizes="(max-width: 768px) 80vw, 30vw"
            className="w-full h-auto"
          />
        </div>
      </div>
  );
}
