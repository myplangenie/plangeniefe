import Link from "next/link";

import { HiArrowSmRight } from "react-icons/hi";

function toEmbed(url: string) {
  try {
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split(/[?&]/)[0];
      return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
    }
    const u = new URL(url);
    const id = u.searchParams.get("v");
    if (id) return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
    return url;
  } catch {
    return url;
  }
}

function VideoCard({ label, url }: { label?: string; url: string }) {
  const src = toEmbed(url);
  return (
    <div className="relative rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5">
      <div className="relative h-[35rem] bg-black">
        <iframe
          src={src}
          className="absolute inset-0 w-full h-full"
          title={label || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      {label && (
        <span className="absolute left-8 top-10 rounded-full bg-white/90 text-[#12141D] text-[10px] font-semibold px-2 py-1">
          {label}
        </span>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}

function SecVideoCard({ label, url }: { label?: string; url: string }) {
  const src = toEmbed(url);
  return (
    <div className="relative rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5">
      <div className="relative h-[25rem] bg-black">
        <iframe
          src={src}
          className="absolute inset-0 w-full h-full"
          title={label || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      {label && (
        <span className="absolute left-8 top-10 rounded-full bg-white/90 text-[#12141D] text-[10px] font-semibold px-2 py-1">
          {label}
        </span>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}

export default function VideoTutorials() {
  const links = [
    "https://youtu.be/TZB1IdeSK2I?si=JVWXEldg4v6pYnid",
    "https://youtu.be/NjcWrVhj8k4?si=59uobHTTeGdsxIFY",
    "https://youtu.be/AanQuYg0v6o?si=unSA75Y0Gg-sblIV",
    "https://youtu.be/-eK9VZ0XRog?si=5PQoKfE8FNW5JyEo",
    "https://youtu.be/RK6WR11GPKU?si=MFW8rpM-qUCaaABL",
  ];
  return (
    <section className="max-w-[1400px] mx-auto px-5 sm:px-10 md:px-20 pt-20 pb-6 font-manrope">
      <h2 className="text-2xl md:text-3xl mb-2 md:mb-2 font-semibold text-[#12141D]">Video Tutorials</h2>
      <p className="text-base md:w-[40%] leading-loose opacity-70 mt-1">We share common trends, strategies ideas, opinions, short & long stories from the team behind company.</p>

      <div className="mt-7 grid gap-5">
        <div className="grid md:grid-cols-2 gap-5 md:gap-10">
          <VideoCard label="FEATURED" url={links[0]} />
          <VideoCard label="FEATURED" url={links[1]} />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
          <SecVideoCard url={links[2]} />
          <SecVideoCard url={links[3]} />
          <SecVideoCard url={links[4]} />
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <Link href="https://www.youtube.com/channel/UCZwy2TtFTcpHJ_jQBLg5YlA" target="_blank" rel="noreferrer" className="text-sm px-7 py-3 text-accent font-manrope font-bold flex items-center gap-2 border-2 rounded-[10px] border-accent bg-white shadow-sm hover:bg-gray-50">More articles <HiArrowSmRight className="text-xl" /></Link>
      </div>
    </section>
  );
}
