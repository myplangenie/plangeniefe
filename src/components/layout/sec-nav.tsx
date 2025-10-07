import Image from "next/image";

import LogoImg from "@/images/logo.png";

const SecNavigation = () => {
  return (
    <nav className="px-5 md:px-20 py-5 md:py-7">
      <Image
        src={LogoImg}
        alt="Plangenie"
        width={1000}
        height={1000} quality={100}
        className="w-[230px] h-auto max-w-[140px] object-contain"
      />
    </nav>
  );
};

export default SecNavigation;
