import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const PlatformHero = () => {
  return (
    <header className="bg-primary pt-40 md:pt-52 pb-16 md:pb-36 text-white">
      <div className="max-w-[1200px] mx-auto text-center w-full md:w-[90%] px-5 sm:px-10">
        <ul className="text-xs sm:text-sm opacity-80 mb-5 hidden md:flex gap-4 flex-wrap w-max mx-auto">
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
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-manrope !leading-[1.3] font-black mb-6">
          The Only <span className="text-accent">Planning System</span> That
          Thinks With You
        </h2>
        <p className="text-white opacity-70 text-base sm:text-lg font-medium mb-8 md:mb-10">
          Combine AI, embedded learning, and collaboration tools in one
          intuitive platform
        </p>
        <div className="flex gap-2 items-center mx-auto w-max flex-wrap">
          <Link
            href="/pricing"
            className="bg-accent flex items-center gap-2 border border-solid py-3 sm:py-4 text-white font-bold px-6 text-sm rounded-[8px] border-accent"
          >
            See Pricing <FaArrowRightLong className="text-lg" />
          </Link>
          <Link
            href="/demo"
            className="bg-transparent flex items-center gap-2 border border-solid py-3 sm:py-4 font-bold px-6 text-sm rounded-[8px] border-white text-white"
          >
            Book a Demo <IoIosArrowForward className="text-lg" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PlatformHero;
