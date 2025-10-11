import { FaCheck } from "react-icons/fa6";

import HeroImg from "@/images/hero.svg";
import CollaborationImg from "@/images/collaboration.png";
import EngineImg from "@/images/engine.svg";
import TrackingImg from "@/images/tracking.png";
import TrainingImg from "@/images/training.png";

import SMEImg from "@/images/icons/sme.svg";
import StartupImg from "@/images/icons/startup.svg";
import OrganizationImg from "@/images/icons/organisation.svg";
import ConsultantImg from "@/images/icons/consultants.svg";
import FlowerImg from "@/images/icons/flower.svg";
// import SMEImg from "@/images/icons/sme.svg";

import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

import Link from "next/link";

export default function Props() {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-12 md:mt-20 font-manrope">
      <div className="mt-20 md:mt-32 max-w-[1229px] mx-auto">
        <div className="text-center">
          <h2 className="text-xl sm:text-4xl font-bold text-gray-900 font-manrope">
            Who We Help
          </h2>
          <p className="mt-1 md:mt-3 text-base md:text-lg leading-loose text-gray-600 md:max-w-[70%] mx-auto font-manrope">
            Whether you are launching a startup, coaching businesses, leading a
            team, or mapping out your life, Plan Genie is designed to work the
            way you think.
          </p>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4 sm:gap-6 md:px-10">
          <div className="rounded-[17px] border border-solid border-[#00000008] bg-transparent px-5 pb-7 pt-7">
            <div className="min-h-[80px] mb-3">
              <div className="">
                <Image
                  src={SMEImg}
                  alt="thumb"
                  quality={100}
                  width={100}
                  height={100}
                  className="w-[60px] h-auto"
                />
              </div>
            </div>
            <h3 className="font-black text-lg md:text-xl mb-3 text-[#183B56] font-manrope">
              SME Leaders
            </h3>
            <p className="mt-1 text-sm md:text-base leading-loose text-[#58595F] font-manrope">
              Bring clarity and alignment across teams with one intelligent
              planning platform that connects vision to measurable results.
            </p>
          </div>
          <div className="rounded-[17px] border border-solid border-[#00000008] bg-transparent px-5 py-7">
            <div className="min-h-[80px] mb-3">
              <div className="">
                <Image
                  src={StartupImg}
                  alt="startup founders"
                  quality={100}
                  width={100}
                  height={100}
                  className="w-[60px] h-auto"
                />
              </div>
            </div>
            <h3 className="font-black text-lg md:text-xl mb-3 text-[#183B56] font-manrope">
              Startup Founders
            </h3>
            <p className="mt-1 text-sm md:text-base leading-loose text-[#58595F]">
              Turn ideas into investor-ready plans with AI-powered structure,
              clear milestones, and built-in accountability.
            </p>
          </div>
          <div className="rounded-[17px] border border-solid border-[#00000008] bg-transparent px-5 py-7">
            <div className="min-h-[80px] mb-3">
              <div className="border-[1px] border-solid border-[#FBEFDA] flex rounded-[18px] size-[63px] items-center justify-center">
                <Image
                  src={ConsultantImg}
                  alt="Social Purpose Organizations"
                  quality={100}
                  width={100}
                  height={100}
                  className="w-[30px] h-auto"
                />
              </div>
            </div>
            <h3 className="font-black text-lg md:text-xl mb-2 md:mb-3 text-[#183B56] font-manrope">
              Social Purpose Organizations
            </h3>
            <p className="mt-1 text-sm md:text-[15px] leading-loose text-[#58595F]">
              Translate mission into impact with tools that help you plan
              programs, secure funding, and track measurable outcomes.
            </p>
          </div>
          <div className="rounded-[17px] border border-solid border-[#00000008] bg-transparent px-5 py-7">
            <div className="min-h-[80px] mb-3">
              <div className="">
                <Image
                  src={FlowerImg}
                  alt="Consultants & Coaches"
                  quality={100}
                  width={100}
                  height={100}
                  className="w-[65px] h-auto"
                />
              </div>
            </div>
            <h3 className="font-black text-lg md:text-xl mb-3 text-[#183B56] font-manrope">
              Coaches and Consultants
            </h3>
            <p className="mt-1 text-sm md:text-base leading-loose text-[#58595F]">
              Guide clients through structured, interactive planning sessions
              that turn insight into sustainable growth.
            </p>
          </div>
          <div className="rounded-[17px] border border-solid border-[#00000008] bg-transparent px-5 py-7">
            <div className="min-h-[80px] mb-3">
              <div className="">
                <Image
                  src={OrganizationImg}
                  alt="thumb"
                  quality={100}
                  width={100}
                  height={100}
                  className="w-[65px] h-auto"
                />
              </div>
            </div>
            <h3 className="font-black text-lg md:text-xl mb-3 text-[#183B56] font-manrope">
              Educators and Institutions
            </h3>
            <p className="mt-1 text-sm md:text-base leading-loose text-[#58595F]">
              Teach strategy and entrepreneurship through hands-on business
              planning that connects theory with real-world results.
            </p>
          </div>
          <div className="rounded-[17px] border border-solid border-[#00000008] bg-transparent px-5 py-7">
            <div className="min-h-[80px] mb-3">
              <div className="">
                <Image
                  src={SMEImg}
                  alt="thumb"
                  quality={100}
                  width={100}
                  height={100}
                  className="w-[65px] h-auto"
                />
              </div>
            </div>
            <h3 className="font-black text-lg md:text-xl mb-3 text-[#183B56] font-manrope">
              Individuals and Life Planners
            </h3>
            <p className="mt-1 text-sm md:text-base leading-loose text-[#58595F]">
              Create a personal roadmap for growth with smart prompts and tools
              that turn your goals into focused, achievable steps.
            </p>
          </div>
        </div>
        <Link
          className="bg-accent py-4 px-8 text-sm text-white flex items-center gap-1 w-max mx-auto rounded-[5px] mt-20 font-bold"
          href="/demo"
        >
          See Plan Genie In Action <HiArrowNarrowRight className="text-lg" />
        </Link>
      </div>
    </section>
  );
}
