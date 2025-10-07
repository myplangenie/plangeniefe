import { FaCheck } from "react-icons/fa6";

export default function ListHero() {
  return (
    <div className="bg-primary pt-40 md:pt-52 pb-16 md:pb-24 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold font-manrope tracking-tight mb-4 leading-snug max-w-4xl">
            Ready to <span className="text-accent">Plan</span>? Let&apos;s Make It Happen
          </h1>
          <p className="text-base sm:text-lg opacity-80 font-manrope max-w-2xl leading-loose">
            Whether you're building your first business plan or leading a cross functional team, Plan Genie gets you moving fast.
          </p>
        </div>
      </div>
    </div>
  );
}
