"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import LogoWhite from "@/images/logo-white.png";
import LogoDark from "@/images/logo.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "font-manrope font-medium text-sm hover:text-accent transition-colors";
  const linkColor = scrolled ? " text-[#12141D]" : " text-white";
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  const linkClasses = (href: string) =>
    `${linkBase}${isActive(href) ? " text-accent" : linkColor}`;

  return (
    <nav
      className={`px-5 md:px-20 py-4 md:py-7 flex items-center max-w-[1800px] mx-auto justify-between fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div>
        <Link href="/">
          <Image
            src={scrolled ? LogoDark : LogoWhite}
            alt="Plangenie"
            width={1000}
            height={1000}
            quality={100}
            className="w-[230px] h-auto max-w-[140px] object-contain"
          />
        </Link>
      </div>
      {/* Desktop nav */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-10">
          <li>
            <Link
              href="/platform"
              aria-current={isActive("/platform") ? "page" : undefined}
              className={linkClasses("/platform")}
            >
              Platform
            </Link>
          </li>
          {/* <li>
            <Link
              href="/solutions"
              aria-current={isActive("/solutions") ? "page" : undefined}
              className={linkClasses("/solutions")}
            >
              Solutions
            </Link>
          </li> */}
          <li>
            <Link
              href="/pricing"
              aria-current={isActive("/pricing") ? "page" : undefined}
              className={linkClasses("/pricing")}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              aria-current={isActive("/resources") ? "page" : undefined}
              className={linkClasses("/resources")}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              aria-current={isActive("/about-us") ? "page" : undefined}
              className={linkClasses("/about-us")}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <Link
          href="/demo"
          className="font-manrope font-medium text-white text-sm hover:text-accent mr-6 bg-accent px-7 py-3 rounded-[8px]"
        >
          Request Demo
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        className={`md:hidden inline-flex items-center justify-center rounded-md p-2 ${
          scrolled ? "text-[#12141D]" : "text-white"
        }`}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {/* Mobile menu panel */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <div className="px-5 py-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/platform"
                  aria-current={isActive("/platform") ? "page" : undefined}
                  className={`block hover:text-accent ${
                    isActive("/platform") ? "text-accent" : "text-[#12141D]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Platform
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/solutions"
                  aria-current={isActive("/solutions") ? "page" : undefined}
                  className={`block hover:text-accent ${
                    isActive("/solutions") ? "text-accent" : "text-[#12141D]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Solutions
                </Link>
              </li> */}
              <li>
                <Link
                  href="/pricing"
                  aria-current={isActive("/pricing") ? "page" : undefined}
                  className={`block hover:text-accent ${
                    isActive("/pricing") ? "text-accent" : "text-[#12141D]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  aria-current={isActive("/resources") ? "page" : undefined}
                  className={`block hover:text-accent ${
                    isActive("/resources") ? "text-accent" : "text-[#12141D]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  aria-current={isActive("/about-us") ? "page" : undefined}
                  className={`block hover:text-accent ${
                    isActive("/about-us") ? "text-accent" : "text-[#12141D]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="/demo"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center font-manrope font-medium text-sm bg-accent text-white px-5 py-3 rounded-[8px] hover:!text-white"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
