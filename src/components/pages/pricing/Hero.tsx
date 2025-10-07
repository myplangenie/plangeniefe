import { FaCheck } from "react-icons/fa6";

export default function SiteHero() {
  return (
    <div className="bg-primary pt-48 pb-28 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4">
          <ul className="text-xs sm:text-sm opacity-80 mb-4 hidden md:flex gap-4 flex-wrap justify-center">
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
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold font-manrope tracking-tight mb-3 md:mb-7">
            Pricing That <span className="text-accent">Grows</span> With You
          </h1>
          <p className="text-xl opacity-70 font-manrope">
            Start free, upgrade when you need more depth.
          </p>
        </div>
      </div>
    </div>
  );
}
