"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  setIsHamburgerClosed: (isHamburgerClosed: boolean) => void;
}

export default function Logo({ setIsHamburgerClosed }: LogoProps) {
  return (
    <Link
      onClick={() => setIsHamburgerClosed(true)}
      href="/"
      className="flex items-center"
    >
      <Image
        src="/logo.png"
        alt="FMDB Logo"
        className="h-10 mr-3"
        width={40}
        height={40}
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
        FMDB
      </span>
    </Link>
  );
}
