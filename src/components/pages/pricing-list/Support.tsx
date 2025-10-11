import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

export const ListingsSupport = () => {
  return (
    <section className="max-w-[1800px] mx-auto w-full mt-10 md:mt-28 px-5 sm:px-10 md:px-20">
      <div className="bg-[#FAFAFA] p-6 sm:p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 rounded-[16px]">
        <div>
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900">
            Need Support?
          </h2>
          <p className="mt-5 text-base leading-loose text-gray-600 max-w-xl mb-10">
            Whether you&apos;re building your first business plan or leading a
            crossfunctional team, Plan Genie gets you moving fast.
          </p>
          <div className="flex items-center gap-3">
            <Link href="" className="bg-accent py-4 px-8 text-sm text-center rounded-[10px] text-white border border-solid border-accent font-bold">Join now</Link>
            <Link href="" className="bg-white py-4 px-8 text-sm text-center rounded-[10px] text-black border border-solid border-[#A1A1AA] font-bold">Learn more</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white border border-solid border-[#E4E4E7] px-5 p-6 rounded-[16px]">
            <div className="size-[80px] bg-accent rounded-full mb-10"></div>
            <h4 className="text-base mb-2 font-bold">Book a Strategy Sprint</h4>
            <p className="text-sm text-[#12141D] opacity-70 leading-loose">
              90-minute live facilitation to build or refine your plan.
            </p>
          </div>
          <div className="bg-white border border-solid border-[#E4E4E7] px-5 p-6 rounded-[16px]">
            <div className="size-[80px] bg-accent rounded-full mb-10"></div>
            <h4 className="text-base mb-2 font-bold">Explore Implementation Coaching</h4>
            <p className="text-sm text-[#12141D] opacity-70 leading-loose">
              Ongoing accountability sessions with expert guides
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
