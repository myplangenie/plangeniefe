import { Play } from "lucide-react";
import Link from "next/link";

import { HiArrowSmRight } from "react-icons/hi";

function VideoCard({ label }: { label?: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5">
      <div className="h-[35rem] bg-black"></div>
      {/* <Image src={AdImg} alt="thumb" width={1200} height={800} className="w-full h-auto" /> */}
      {label && (
        <span className="absolute left-8 top-10 rounded-full bg-white/90 text-[#12141D] text-[10px] font-semibold px-2 py-1">
          {label}
        </span>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <button aria-label="Play" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center bg-white size-10 rounded-full shadow-md">
        <Play className="text-primary" />
      </button>
      {/* <div className="absolute left-0 right-0 bottom-0 px-10 pb-10 text-white">
        <h4 className="text-3xl font-semibold">How to use Plan Genie (3‑min intro)</h4>
        <p className="opacity-80 text-[11px] mt-1">Video • 03:21</p>
      </div> */}
    </div>
  );
}

function SecVideoCard({ label }: { label?: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5">
      <div className="h-[25rem] bg-black"></div>
      {/* <Image src={AdImg} alt="thumb" width={1200} height={800} className="w-full h-auto" /> */}
      {label && (
        <span className="absolute left-8 top-10 rounded-full bg-white/90 text-[#12141D] text-[10px] font-semibold px-2 py-1">
          {label}
        </span>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <button aria-label="Play" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center bg-white size-10 rounded-full shadow-md">
        <Play className="text-primary" />
      </button>
      {/* <div className="absolute left-0 right-0 bottom-0 px-10 pb-10 text-white">
        <h4 className="text-3xl font-semibold">How to use Plan Genie (3‑min intro)</h4>
        <p className="opacity-80 text-[11px] mt-1">Video • 03:21</p>
      </div> */}
    </div>
  );
}

export default function VideoTutorials() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 sm:px-10 md:px-20 py-6 font-manrope">
      <h2 className="text-2xl md:text-3xl mb-2 md:mb-5 font-semibold text-[#12141D]">Video Tutorials</h2>
      <p className="text-base md:w-[40%] leading-loose opacity-70 mt-1">We share common trends, strategies ideas, opinions, short & long stories from the team behind company.</p>

      <div className="mt-7 grid gap-5">
        <div className="grid md:grid-cols-2 gap-5 md:gap-10">
          <VideoCard label="FEATURED" />
          <VideoCard label="FEATURED" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
          <SecVideoCard />
          <SecVideoCard />
          <SecVideoCard />
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <Link href="" className="text-sm px-7 py-3 text-accent font-manrope font-bold flex items-center gap-2 border-2 rounded-[10px] border-accent bg-white shadow-sm hover:bg-gray-50">More articles <HiArrowSmRight className="text-xl" /></Link>
      </div>
    </section>
  );
}

