import Image from "next/image";
import LoImg from "@/images/lo.jpeg";

const Story = () => {
  const id = "Q20i7EfzQ-Y";
  const embed = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1`;
  return (
    <section className="mt-10 md:mt-16 bg-[#FAFAFA]">
      <div className="mx-auto ">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Bio */}
          <div className=" rounded-lg px-5 pb-10 pt-14 md:p-20">
            <div className="flex items-center gap-4 mb-3">
              <Image src={LoImg} alt="Patrick Lo" width={80} height={80} className="w-32 h-32 rounded-full object-cover" />
              <div>
                <h3 className="text-lg mb-1 font-bold leading-tight">Patrick Lo</h3>
                <p className="text-sm text-[#12141D]/70">Founder and CEO of Trakking and Canaan Group.</p>
              </div>
            </div>
            <p className="text-base leading-loose font-medium">
              Patrick Lo is the visionary founder and CEO of Trakking and Canaan Group, leading innovation in logistics and supply chain optimization for over two decades. Known for his forward-thinking approach and commitment to operational excellence, Patrick has built companies that bridge technology, efficiency, and purpose, empowering businesses to move smarter and grow stronger.
            </p>
          </div>

          {/* Right: Video */}
          <div className="bg-blue-800 overflow-hidden shadow-sm ring-1 ring-black/10">
            <div className="relative w-full min-h-[260px] sm:min-h-[320px] md:min-h-[420px]" style={{ aspectRatio: "16 / 10" }}>
              <iframe
                src={embed}
                title="Plan Genie Story"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
