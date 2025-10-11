import Image from "next/image";

// Company logos
import ACMEfire from "@/images/companies/ACMEfire.png";
import ACPBC from "@/images/companies/ACPBC.png";
import Action from "@/images/companies/action.png";
import Acupoint from "@/images/companies/Acupoint.png";
import Bluewave from "@/images/companies/bluewave.png";
import Bowen from "@/images/companies/bowen.png";
import BPA from "@/images/companies/BPA.png";
import Canaan from "@/images/companies/canaan.png";
import CareAgeLogo from "@/images/companies/care-age-logo.png";
import Command from "@/images/companies/Command.png";
import CYGrower from "@/images/companies/CYGrower.png";
import Essa from "@/images/companies/essa.png";
import Falcon from "@/images/companies/falcon.png";
import Finkelstein from "@/images/companies/finkelstein.png";
import HDD from "@/images/companies/hdd.png";
import Jigsaw from "@/images/companies/jigsaw.png";
import Key from "@/images/companies/key.png";
import Nudata from "@/images/companies/nudata.png";
import Nutrilawn from "@/images/companies/Nutrilawn.png";
import Phoenix from "@/images/companies/phoenix.png";
import Play from "@/images/companies/Play.png";
import Robar from "@/images/companies/robar.png";
import Sanderson from "@/images/companies/Sanderson.png";
import Servicemasters from "@/images/companies/Servicemasters.png";
import Simply from "@/images/companies/Simply.png";
import TheCurtain from "@/images/companies/The Curtain.png";
import Toyopumps from "@/images/companies/Toyopumps.png";
import Videotron from "@/images/companies/videotron.png";
import Xitech from "@/images/companies/Xitech.png";

const logos = [
  { src: ACMEfire, alt: "ACMEfire" },
  { src: ACPBC, alt: "ACPBC" },
  { src: Action, alt: "Action" },
  { src: Acupoint, alt: "Acupoint" },
  { src: Bluewave, alt: "Bluewave" },
  { src: Bowen, alt: "Bowen" },
  { src: BPA, alt: "BPA" },
  { src: Canaan, alt: "Canaan" },
  { src: CareAgeLogo, alt: "Care Age" },
  { src: Command, alt: "Command" },
  { src: CYGrower, alt: "CYGrower" },
  { src: Essa, alt: "Essa" },
  { src: Falcon, alt: "Falcon" },
  { src: Finkelstein, alt: "Finkelstein" },
  { src: HDD, alt: "HDD" },
  { src: Jigsaw, alt: "Jigsaw" },
  { src: Key, alt: "Key" },
  { src: Nudata, alt: "Nudata" },
  { src: Nutrilawn, alt: "Nutrilawn" },
  { src: Phoenix, alt: "Phoenix" },
  { src: Play, alt: "Play" },
  { src: Robar, alt: "Robar" },
  { src: Sanderson, alt: "Sanderson" },
  { src: Servicemasters, alt: "Servicemasters" },
  { src: Simply, alt: "Simply" },
  { src: TheCurtain, alt: "The Curtain" },
  { src: Toyopumps, alt: "Toyopumps" },
  { src: Videotron, alt: "Videotron" },
  { src: Xitech, alt: "Xitech" },
];

export default function LogoCarousel() {
  const items = [...logos, ...logos]; // duplicate for seamless loop

  return (
    <section className="bg-white">
      <div className="mx-auto px-5 md:px-20 py-10">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-manrope font-extrabold text-lg sm:text-xl md:text-2xl text-[#1E2C22] md:w-[60%] mx-auto leading-relaxed">
            {/* Powering a global community of changemakers and innovators. */}
            Our clients span founders, SMEs, nonprofits, and institutions using Plan Genie to bring their visions to life.
          </h2>
          {/* <p className="mt-3 text-[#1a1a1a]/80 max-w-3xl mx-auto">
            Our clients span founders, SMEs, nonprofits, and institutions using Plan Genie to bring their vision to life.
          </p> */}
        </div>
        <div className="relative overflow-hidden edges-fade">
          <ul className="logo-marquee-track flex items-center gap-12 pr-12">
            {items.map((item, idx) => (
              <li key={idx} className="shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1000}
                  height={1000}
                  className="h-6 md:h-9 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
