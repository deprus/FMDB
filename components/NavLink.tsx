"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

interface NavLinkProps {
  href: string;
  title: string;
  setIsHamburgerClosed: (isHamburgerClosed: boolean) => void;
}

export default function NavLink({
  href,
  title,
  setIsHamburgerClosed,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li
      className={` hover:bg-blue-600 lg:hover:bg-transparent rounded-sm ${
        isActive && "bg-blue-600 lg:bg-transparent"
      }`}
    >
      <Link
        onClick={() => setIsHamburgerClosed(true)}
        href={href}
        aria-current="page"
      >
        <Button
          variant="link"
          className={`text-white lg:hover:underline block text-md ${
            isActive && "lg:underline"
          }`}
        >
          {title}
        </Button>
      </Link>
    </li>
  );
}
