import { FaCheck } from "react-icons/fa6";

export default function ResourcesHero() {
  return (
    <header className="bg-primar hero-bg pt-40 md:pt-52 pb-14 md:pb-24 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-center text-center gap-4">
          <ul className="text-xs sm:text-sm opacity-80 mb-8 hidden md:flex gap-4 flex-wrap justify-center">
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold font-manrope tracking-tight mb-0 md:mb-5">
            Your <span className="text-accent">Strategy</span> Hub
          </h1>
          <p className="text-base sm:text-xl opacity-70 font-manrope leading-relaxed w-full md:w-[50%]">
            Free tools, guides, templates, and stories to power your planning
            journey
          </p>
        </div>
      </div>
    </header>
  );
}
