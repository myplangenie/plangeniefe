import { FaCheck } from "react-icons/fa6";

export default function AboutHero() {
  return (
    <div className="bg-primar hero-bg pt-40 md:pt-52 pb-16 md:pb-24 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-manrope leading-[1.3] tracking-tight mb-1 md:mb-5 md:w-[80%]">
            Behind Every <span className="text-accent">Great Plan</span> Is a
            Clear Purpose
          </h1>
          <p className="text-base sm:text-lg opacity-80 font-manrope max-w-2xl">
            We exist to empower every business and person with the tools to
            think strategically and act intentionally
          </p>
        </div>
      </div>
    </div>
  );
}
