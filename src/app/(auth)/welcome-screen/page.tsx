"use client";

import Link from "next/link";
import SecNavigation from "@/components/layout/sec-nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import WelcomeIcon from "@/images/icons/welcome.png";
import NotebookIcon from "@/images/icons/Notebook.svg";
import GraphicImg from "@/images/graphic.png";

import OperationsImg from "@/images/icons/operations.svg";
import OptimizeImg from "@/images/icons/optimize.svg";
import StrategyImg from "@/images/icons/strategy.svg";
import FoundationImg from "@/images/icons/foundation.svg";
import MarketImg from "@/images/icons/market.svg";

import { FaArrowRightLong } from "react-icons/fa6";


const FeatureCard = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => (
  <div className="rounded-[10px] relative border border-[#FFE8C1] bg-[#FFF8EC] flex flex-col gap-4">
    <div className="px-5 py-5 z-20">
      <Image
        src={img}
        alt=""
        width={1000}
        height={1000}
        className="mb-6 w-[43px] h-auto"
      />
      <h4 className="text-base font-bold mb-2 text-[#050506]">{title}</h4>
      <p className="text-sm text-black leading-relaxed">{desc}</p>
    </div>
    <div className="absolute top-0 w-full h-full left-0">
      <Image
        src={GraphicImg}
        alt=""
        width={1000}
        height={1000}
        className="mx-auto w-full h-full object-cover object-center"
      />
    </div>
  </div>
);

const WelcomePage = () => {
  return (
    <div>
      <main>
        <SecNavigation />
        <section className="w-full flex items-center justify-center onboarding py-12 sm:py-20 px-5">
          <div className="w-full max-w-[1200px]">
            <div className="bg-white max-w-[1200px] px-5 sm:px-[60px] md:px-[90px] lg:px-[120px] pt-[40px] md:pt-[70px] pb-[40px] rounded-[10px]">
              {/* Heading */}
              <div className="text-center mb-10">
                <h1 className="text-2xl md:text-3xl font-black text-[#050506] mb-3">
                  Welcome To PlanGenie
                </h1>
                <p className="text-[12px] md:text-base text-[#050506] md:w-[50%] max-w-[520px] mx-auto leading-relaxed">
                  Build a comprehensive business plan in just 10 guided steps.
                  Let&apos;s turn your vision into a strategic roadmap for
                  success.
                </p>
              </div>

              {/* Top cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                {/* Video card placeholder */}
                <div className="h-[27rem] bg-black rounded-xl"></div>
                {/* Workbook card */}
                <div className="rounded-[10px] relative border border-[#FFE8C1] bg-[#FFF8EC] flex flex-col gap-4">
                  <div className="text-center flex justify-between flex-col h-full items-center p-6 z-20">
                    <div className="text-center">
                      <Image
                        src={WelcomeIcon}
                        alt=""
                        width={1000}
                        height={1000}
                        className="mx-auto mb-3 w-[43px] h-auto"
                      />
                      <h3 className="text-base font-black text-[#050506] mb-1">
                        Get Our Trainer Workbook For Free!
                      </h3>
                      <p className="text-sm leading-relaxed italic w-[85%] mx-auto">
                        This resource includes templates, worksheets, and expert
                        tips on business planning.
                      </p>
                    </div>
                    <div>
                      <Button className="bg-[#0000001A] text-sm border border-solid border-black px-6 py-6 rounded-[6px] flex items-center justify-center text-black hover:bg-[#0000001A]">
                        Download Workbook
                        <Image
                          src={NotebookIcon}
                          alt=""
                          width={1000}
                          height={1000}
                          className="mx-auto w-[25px] h-auto"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-0 w-full h-full left-0">
                    <Image
                      src={GraphicImg}
                      alt=""
                      width={1000}
                      height={1000}
                      className="mx-auto w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* Framework */}
              <div className="text-center mt-16 md:mt-24">
                <h2 className="text-xl md:text-3xl font-black text-[#050506] mb-4">
                  5 Step Business Plan Framework
                </h2>
                <p className="text-sm leading-loose mb-7 text-black max-w-[560px] mx-auto">
                  Our proven methodology breaks down complex business planning
                  into five interconnected components that build upon each
                  other.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <FeatureCard
                  img={FoundationImg}
                  title="Define Your Foundation"
                  desc="Establish your vision, mission, core values, and unique business proposition. This foundation guides all strategic decisions."
                />
                <FeatureCard
                  img={MarketImg}
                  title="Analyze Your Market"
                  desc="Understand your customers, competitors, and market opportunities. Identify gaps and positioning strategies."
                />
                <FeatureCard
                  img={StrategyImg}
                  title="Create Your Strategy"
                  desc="Develop your go-to-market strategy, pricing model, and competitive advantages. Plan how you’ll win in the marketplace."
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-[580px] mx-auto">
                <FeatureCard
                  img={OperationsImg}
                  title="Plan Your Operations"
                  desc="Design efficient processes, organizational structure, and resource allocation to deliver value effectively."
                />
                <FeatureCard
                  img={OptimizeImg}
                  title="Measure & Optimize"
                  desc="Establish KPIs, tracking systems, and feedback loops. Continuously improve based on real performance data."
                />
              </div>

              {/* Bottom video banner */}
              <div className="rounded-[10px] overflow-hidden border border-[#eee] bg-white mb-6">
                <div className="bg-[#333] [#E6E6E6] aspect-[5/2] flex items-center justify-center w-full">
                  <div className="p-4 text-center">
                    <h4 className="text-xl font-semibold text-white mb-1">
                      The 5 Essential Steps to Business Success
                    </h4>
                    <p className="text-sm text-white mb-4">
                      A comprehensive guide to our proven framework <br /> (8 minutes)
                    </p>
                    <Button
                      size="sm"
                      className="bg-transparent border-2 border-solid border-white text-[12px] px-3 py-5"
                    >
                      Play video
                    </Button>
                  </div>
                </div>
              </div>

              <div className="text-center my-16">
                <Link href="/onboarding-detail">
                  <Button className="bg-accent px-6 py-6 rounded-[6px]">
                    Build my plan
                    <FaArrowRightLong className="size-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WelcomePage;
