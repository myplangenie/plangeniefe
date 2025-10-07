import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

interface FooterProps {
  title?: string;
  desc?: string;
  page?: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className="bg-black px-5 sm:px-10 md:px-20 mt-[16rem] md:mt-[23rem]">
      <div className="h-[12rem] md:h-[15rem] relative">
        <div className="bg-primary h-[26rem] md:h-[30rem] rounded-[10px] absolute w-full -top-[13rem] md:-top-[15rem] text-center text-white flex items-center justify-center">
          <div className="w-full md:w-[70%] max-w-[800px] mx-auto px-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-manrope font-bold leading-[1.4] mb-4">
              {props?.title || "Start planning with intelligence, today."}
            </h2>
            <p className="text-base sm:text-lg text-center">
              {props?.desc || "Build your next landing page fast & easy"}
            </p>
            <div className="flex items-center gap-3 justify-center mt-6 md:mt-10 flex-wrap">
              {props.page !== "resources" ? (
                <>
                  <Link
                    href=""
                    className="flex items-center gap-2 bg-white px-6 sm:px-8 py-3 sm:py-4 text-sm text-accent rounded-[5px]"
                  >
                    Start Planning Free
                  </Link>
                  <Link
                    href=""
                    className="flex items-center gap-2 bg-accent px-6 sm:px-8 py-3 sm:py-4 text-sm text-white rounded-[5px]"
                  >
                    Explore Facilitation Options
                  </Link>
                </>
              ) : (
                <Link
                  href=""
                  className="flex items-center bg-accent px-6 sm:px-10 py-3 sm:py-4 text-sm text-white rounded-[5px]"
                >
                  Subscribe <RiArrowRightSLine className="text-lg" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-16 pt-20">
        <div className="order-2 md:order-1">
          <p className="text-sm leading-loose font-manrope text-white">
            &copy; Copyright {new Date().getFullYear()}, All Rights Reserved
          </p>
        </div>
        <div className="order-1 md:order-2">
          <ul className="flex flex-wrap items-center gap-4 sm:gap-7">
            <li>
              <Link
                href="/privacy"
                className="text-sm font-medium leading-loose font-manrope text-white mr-2 sm:mr-6"
              >
                Lite Plan Template
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm font-medium leading-loose font-manrope text-white mr-2 sm:mr-6"
              >
                Execution Dashboard Demo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
