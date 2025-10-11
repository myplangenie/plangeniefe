import Thumb from "@/images/icons/thumb.png";
import Doc from "@/images/icons/doc.png";
import Percent from "@/images/icons/percent.png";
import Ticket from "@/images/icons/ticket.png";
import Image from "next/image";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutStory() {
  return (
    <div className="py-16 md:py-24 text-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="text-center">
          <h4 className="text-2xl sm:text-4xl md:text-4xl font-extrabold font-manrope tracking-tight mb-1 md:mb-4">
            Our Origin Story
          </h4>
          <p className="text-base sm:text-lg opacity-70 font-manrope max-w-3xl mx-auto leading-loose">
            Plan Genie began with a simple realization: too many ideas fail not
            because they are bad,but because they are unstructured. Our founders
            coaches, strategists, facilitators, and startup leaders built this
            platform from their work with hundreds of growing teams across
            industries.
          </p>
        </div>
      </div>
      <div className="max-w-[1440px] px-5 sm:px-10 md:px-20 mx-auto mt-12 md:mt-20 font-manrope">
        <div className="bg-[#FAFAFA] px-6 sm:px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 py-12 md:py-20 rounded-[18px]">
          <div>
            <h5 className="text-2xl sm:text-3xl md:text-4xl text-accent mb-5 font-bold">
              Our Goals
            </h5>
            <h3 className="text-2xl md:text-3xl font-extrabold font-manrope text-[#1D2130] mb-4 leading-tight md:w-[85%]">
              To upscale your business to the next level
            </h3>
            <p className="text-base leading-loose text-[#6D6E76]">
              To help people and organizations turn vision into structure and
              strategy into execution through modern business planning tools,
              live facilitation, and long-term accountability systems.
            </p>
          </div>
          <div>
            <h5 className="text-2xl sm:text-3xl md:text-4xl text-accent mb-5 font-bold">
              Our Vision
            </h5>
            <h3 className="text-2xl md:text-3xl font-extrabold font-manrope text-[#1D2130] mb-4 leading-tight md:w-[85%]">
              To provide solutions for growing companies
            </h3>
            {/* <h5 className="text-accent mb-5 font-bold">Our Vision</h5>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-manrope text-[#1D2130] mb-4 leading-tight">
              To provide solutions for growing companies
            </h3> */}
            <p className="text-base leading-loose text-[#6D6E76]">
              Plan Genie is a full ecosystem. From AI-generated business plans
              to live planning sessions, we bring together the thinking, tools,
              and support to help users stay focused and move forward
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 mt-16 md:mt-20">
        <div className="text-center">
          <h4 className="text-3xl sm:text-4xl md:text-4xl font-extrabold font-manrope tracking-tight mb-4">
            Our Values
          </h4>
        </div>
      </div>
      <div className="max-w-[1470px] px-5 sm:px-10 md:px-16 mx-auto mt-8 md:mt-10 font-manrope">
        <div className="bg-[#F8FBFF] px-6 sm:px-10 md:px-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 md:py-20 rounded-[26px]">
          <div>
            <Image
              src={Thumb}
              alt="thumb"
              quality={100}
              width={1000}
              height={1000}
              className="w-[40px] h-[35px] object-cover object-center mb-10"
            />
            <h3 className="text-xl md:text-2xl font-extrabold font-manrope text-[#1D2130] mb-3 leading-tight">
              Clarity
            </h3>
            <p className="text-base leading-normal text-[#1D2130]">
              Turn big ideas into practical next steps
            </p>
          </div>
          <div>
            <Image
              src={Ticket}
              alt="thumb"
              quality={100}
              width={1000}
              height={1000}
              className="w-[40px] h-[35px] object-cover object-center mb-10"
            />
            <h3 className="text-xl md:text-2xl font-extrabold font-manrope text-[#1D2130] mb-3 leading-tight">
              Simplicity
            </h3>
            <p className="text-base leading-normal text-[#1D2130]">
              Avoid jargon. Empower users.
            </p>
          </div>
          <div>
            <Image
              src={Percent}
              alt="thumb"
              quality={100}
              width={1000}
              height={1000}
              className="w-[40px] h-[35px] object-cover object-center mb-10"
            />
            <h3 className="text-xl md:text-2xl font-extrabold font-manrope text-[#1D2130] mb-3 leading-tight">
              Equity
            </h3>
            <p className="text-base leading-normal text-[#1D2130]">
              Make advanced tools available to all
            </p>
          </div>
          <div>
            <Image
              src={Doc}
              alt="thumb"
              quality={100}
              width={1000}
              height={1000}
              className="w-[40px] h-[35px] object-cover object-center mb-10"
            />
            <h3 className="text-xl md:text-2xl font-extrabold font-manrope text-[#1D2130] mb-3 leading-tight">
              Integrity
            </h3>
            <p className="text-base leading-normal text-[#1D2130]">
              Always build what we&apos;d use ourselves
            </p>
          </div>
        </div>
        <Link
          className="text-sm bg-accent flex items-center gap-2 mt-6 font-bold py-4 px-6 rounded-[8px] text-white w-max mx-auto"
          href="/plan"
        >
          Join Our Movement <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
}
