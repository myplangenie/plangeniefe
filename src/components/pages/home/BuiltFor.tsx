import Link from "next/link";

import Image from "next/image";
import EngineImg from "@/images/engine.svg";
import TrackingImg from "@/images/tracking.png";
import CollaborationImg from "@/images/collaboration.png";
import TrainingImg from "@/images/training.png";

export default function BuiltFor() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-20 pt-20">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold font-manrope text-[#1E2C22]">
            Built for Every Kind of Planner
          </h2>
          <p className="mt-3 text-[#1a1a1a]/80 leading-loose max-w-3xl mx-auto font-manrope">
             Whether you are launching a startup, coaching businesses, leading a team, or mapping out your life, Plan Genie is designed to work the way you think.
          </p>
        </div>

        {/* Four supporting blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 text-center">
          {[
            {
              img: EngineImg,
              title: "AI Planning Engine",
              text: "Build your full business plan with structure and strategy in minutes",
            },
            {
              img: TrainingImg,
              title: "Live and Built-In Training",
              text: "Expert-led sessions for deeper focus, team alignment, and coaching.",
            },
            {
              img: CollaborationImg,
              title: "Team Collaboration",
              text: "Cross-functional planning made simple",
            },
            {
              img: TrackingImg,
              title: "Execution Tracking",
              text: "Monitor progress and keep the business plan active",
            },
          ].map((b, i) => (
            <div key={i} className="rounded-[8px] bg-[#FAFAFA] p-5 py-8">
              <Image alt={b.title} src={b.img} width={100} quality={100} height={100} className="w-[70px] h-auto mx-auto mb-6" />
              <h3 className="font-manrope font-extrabold text-[17px] text-[#12141D] mb-3">{b.title}</h3>
              <p className="text-sm text-[#1a1a1a]/80 leading-relaxed font-manrope font-medium">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
