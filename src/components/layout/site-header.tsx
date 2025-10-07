"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import LogoImg from "@/images/logo.png";

const nav = [
  { href: "#", label: "Platform" },
  { href: "#", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "#", label: "Resources" },
  { href: "#", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={LogoImg}
              alt="Plangenie"
              width={140}
              height={36}
              className="h-6 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <Button className="bg-accent text-[#1a1a1a] hover:bg-accent/90">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

