import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

import AdImg from "@/images/ad.svg";

import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";


export default function Ad() {
  return (
    <div className="bg-[#F3F8FF] py-14 sm:py-20 px-5 sm:px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
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
      <div className="font-manrope">
        <h3 className="text-3xl sm:text-4xl mb-5 font-bold leading-snug">
          Enterprise Plan — <br /> Comprehensive & Customizable
        </h3>
        <p className="text-base mb-7 leading-loose w-full md:w-[95%] max-w-[572px]">
          The Enterprise plan is all-encompassing, designed for large
          organizations, institutions, and consulting groups needing scalable
          planning and execution. It goes beyond standard features to include:
        </p>
        <ul className="flex flex-col gap-4 mb-10">
          <li className="flex items-center gap-2 font-bold">
            <FaCheck className="text-[#055F5B]" />
            Custom AI solutions to automate workflows
          </li>
          <li className="flex items-center gap-2 font-bold">
            <FaCheck className="text-[#055F5B]" />
            Direct integration with CRMs, ERPs, and project management tools
          </li>
          <li className="flex items-center gap-2 font-bold">
            <FaCheck className="text-[#055F5B]" />
            White-label branding for client or partner-facing portals
          </li>
          <li className="flex items-center gap-2 font-bold">
            <FaCheck className="text-[#055F5B]" />
            Cross-departmental dashboards and reporting suites
          </li>
          <li className="flex items-center gap-2 font-bold">
            <FaCheck className="text-[#055F5B]" />
            Dedicated facilitation, onboarding, and long-term support
          </li>
        </ul>
        <div className="flex gap-2 items-center flex-wrap">
            <Link href="/pricing" className="bg-accent flex items-center gap-1 border border-solid py-3 text-white font-bold px-6 text-sm rounded-[8px] border-accent">See Pricing <IoArrowForward className="text-xl" /></Link>
            <Link href="/demo" className="bg-transparent border border-solid py-3 font-bold px-6 text-sm rounded-[8px] border-primary text-primary">Book a Demo</Link>
        </div>
      </div>
    </div>
  );
}
