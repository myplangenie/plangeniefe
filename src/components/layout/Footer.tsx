import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa6";

interface FooterProps {
  title?: string;
  desc?: string;
  page?: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className="bg-black px-5 sm:px-10 md:px-20 mt-[16rem] md:mt-[23rem]">
      <div className="h-[12rem] md:h-[15rem] relative">
        <div className="bg-primar hero-bg h-[26rem] md:h-[30rem] rounded-[10px] absolute w-full -top-[13rem] md:-top-[15rem] text-center text-white flex items-center justify-center">
          <div className="w-full md:w-[70%] max-w-[800px] mx-auto px-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-manrope font-bold leading-[1.4] mb-4">
              {props?.title || "Start planning with intelligence, today."}
            </h2>
            <p className="text-base sm:text-lg text-center">
              {/* {props?.desc || "Turn insight into action and action into measurable growth with Plan Genie"} */}
              Turn insight into action and action into measurable growth with
              Plan Genie
            </p>
            <div className="flex items-center gap-3 justify-center mt-6 md:mt-10 flex-wrap">
              {props.page !== "resources" ? (
                <>
                  <Link
                    href="/demo"
                    className="flex items-center gap-2 bg-white px-6 sm:px-8 py-3 sm:py-4 text-sm text-accent rounded-[5px]"
                  >
                    Start Planning Free
                  </Link>
                  <Link
                    href="/demo"
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
                href="https://x.com/myplangenie"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter (X)"
                className="text-white hover:text-accent mr-2 sm:mr-6 inline-flex items-center justify-center"
              >
                <FaXTwitter className="text-2xl" />
                <span className="sr-only">Twitter (X)</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/myplangenie/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-accent mr-2 sm:mr-6 inline-flex items-center justify-center"
              >
                <FaInstagram className="text-2xl" />
                <span className="sr-only">Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/myplangenie"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-accent mr-2 sm:mr-6 inline-flex items-center justify-center"
              >
                <FaFacebook className="text-2xl" />
                <span className="sr-only">Facebook</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tiktok.com/@myplangenie?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="text-white hover:text-accent mr-2 sm:mr-6 inline-flex items-center justify-center"
              >
                <FaTiktok className="text-2xl" />
                <span className="sr-only">TikTok</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/plan-genie/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-accent mr-2 sm:mr-6 inline-flex items-center justify-center"
              >
                <FaLinkedin className="text-2xl" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
