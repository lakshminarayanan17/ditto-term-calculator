"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-ditto-grey-50 bg-white">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-[160px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/icons/ditto-logo.svg"
            alt="ditto"
            width={84}
            height={29}
            priority
          />
        </Link>

        {/* Nav + CTA grouped right */}
        <div className="hidden items-center gap-2 md:flex">
          <nav className="flex items-center gap-2">
            <NavDropdown label="Health Insurance" />
            <NavDropdown label="Term Insurance" />
            <NavLink label="Claims" hasIndicator />
            <NavLink label="Careers" />
          </nav>

          <Link
            href="#schedule"
            className="ml-4 flex items-center gap-2 rounded-[14px] bg-ditto-blue px-5 py-2.5 font-heading text-base font-medium text-white shadow-sm transition-colors hover:bg-ditto-blue-dark"
          >
            <Phone className="h-[18px] w-[18px]" />
            Schedule a Call
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavDropdown({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1 rounded-lg px-4 py-2 font-heading text-base font-medium text-ditto-black transition-colors hover:bg-ditto-grey-100">
      {label}
      <ChevronDown className="h-4 w-4 text-ditto-black" />
    </button>
  );
}

function NavLink({
  label,
  hasIndicator,
}: {
  label: string;
  hasIndicator?: boolean;
}) {
  return (
    <Link
      href="#"
      className="flex items-center gap-1.5 rounded-lg px-4 py-2 font-heading text-base font-medium text-ditto-grey-900 transition-colors hover:bg-ditto-grey-100"
    >
      {hasIndicator && (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ditto-blue" />
      )}
      {label}
    </Link>
  );
}
