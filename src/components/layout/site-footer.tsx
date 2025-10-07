import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-xs">
          <p className="opacity-80">© Copyright 2025. All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-accent">Facebook</Link>
            <Link href="#" className="hover:text-accent">Twitter</Link>
            <Link href="#" className="hover:text-accent">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

