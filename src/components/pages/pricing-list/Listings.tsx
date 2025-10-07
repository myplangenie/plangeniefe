import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

export const Listings = () => {
  return (
    <section className="px-5 sm:px-10 md:px-20 mx-auto w-full mt-10 sm:mt-24">
      <div className="text-center">
        <h2 className="text-xl sm:text-4xl font-bold text-gray-900">
          Choose Your Path
        </h2>
      </div>
      <div className="mt-12 md:mt-20 px-0 md:px-10 space-y-10 md:space-y-12 font-manrope">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-solid border-black pb-8 md:pb-12">
          <div>
            <h4 className="text-2xl font-bold mb-5">Founders & SMEs</h4>
            <p className="text-base mb-2">
              AI builds your first plan free. Upgrade when you're ready.
            </p>
            <p className="text-base">
              For leaders who need forecasts, execution tools, and team
            </p>
          </div>
          <div className="md:text-right">
            <Link className="flex items-center gap-2 font-semibold" href="">
              Explore Prime <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-solid border-black pb-8 md:pb-12">
          <div>
            <h4 className="text-2xl font-bold mb-5">Coaches & Consultants</h4>
            <p className="text-base mb-2">
              Use Plan Genie in your client work. Templates, training, and more.
            </p>
          </div>
          <div className="md:text-right">
            <Link className="flex items-center gap-2 font-semibold" href="">
              Book Demo + Toolkit <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-solid border-black pb-8 md:pb-12">
          <div>
            <h4 className="text-2xl font-bold mb-5">Nonprofits & SPOs</h4>
            <p className="text-base mb-2 w-[90%]">
              Frameworks for grant writing, impact tracking, and long-term
              strategy.
            </p>
          </div>
          <div className="md:text-right">
            <Link className="flex items-center gap-2 font-semibold" href="">
              See Mission Planner <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-solid border-black pb-8 md:pb-12">
          <div>
            <h4 className="text-2xl font-bold mb-5">Educational Partners</h4>
            <p className="text-base mb-2">
              Bring Plan Genie into your curriculum or accelerator.
            </p>
          </div>
          <div className="md:text-right">
            <Link className="flex items-center gap-2 font-semibold" href="">
              Apply for Licensing <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-solid border-black pb-8 md:pb-12">
          <div>
            <h4 className="text-2xl font-bold mb-5">Life Planners</h4>
            <p className="text-base mb-2">
              For those seeking focus in career, health, finances, and
              relationships
            </p>
          </div>
          <div className="md:text-right">
            <Link className="flex items-center gap-2 font-semibold" href="">
              See Mission Planner <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
