import Image from "next/image";

import EngineImg from "@/images/pillar-engine.svg";
import EngineKey from "@/images/pillar-key.svg";
import EngineOpening from "@/images/pillar-opening.svg";
import EngineShield from "@/images/pillar-shield.svg";
import EngineUser from "@/images/pillar-user.svg";
import EngineWeb from "@/images/pillar-web.svg";

const PlatformPillars = () => {
  const pillarBox = [
    {
      img: EngineImg,
      title: "AI-Powered Planning Engine",
      desc: "Auto-structures your business plan with real-time prompts, pre-built sectioning, and funder-ready formatting",
    },
    {
      img: EngineShield,
      title: "Smart Templates & Strategic Prompts",
      desc: "Purpose-built for business planning, nonprofit program logic, personal life design, and strategic alignment",
    },
    {
      img: EngineUser,
      title: "Integrated Training Layer",
      desc: "Embedded videos, tooltips, and real-world examples that teach you while you plan.",
    },
    {
      img: EngineOpening,
      title: "Financial Forecasting Tools",
      desc: "Simplified, editable, and visual. Create projections that match your business model",
    },
    {
      img: EngineKey,
      title: "Collaboration & Version Control",
      desc: "Multiple contributors. Permission controls. Audit history. Designed for growing teams.",
    },
    {
      img: EngineWeb,
      title: "Execution Dashboard",
      desc: "Turn plans into tracked deliverables with smart filters, timelines, and visual boards.",
    },
  ];
  return (
    <section className="bg-[#FAFAFA] font-manrope pt-20 sm:pt-24 pb-20 sm:pb-32">
      <div>
        <h3 className="text-2xl md:text-4xl text-center mb-4 sm:mb-14 font-space-grotesk font-black">
          Platform Pillars
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 px-5 sm:px-10 md:px-20 max-w-[1290px] mx-auto">
          {pillarBox?.map((pillar, index) => (
            <div
              className="bg-white p-6 sm:p-8 border border-solid border-[#00000014] rounded-[10px]"
              key={index}
            >
              <div>
                <Image
                  src={pillar.img}
                  alt={pillar.title}
                  width={0}
                  height={0}
                  className="w-[53px] h-auto block mb-6 sm:mb-10"
                />
                <h3 className="text-base font-space-grotesk font-bold mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#12141D] leading-loose md:w-[90%]">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformPillars;
