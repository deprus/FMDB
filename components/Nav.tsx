import React from "react";
import NavLink from "./NavLink";

interface NavProps {
  isHamburgerClosed: boolean;
  setIsHamburgerClosed: (isHamburgerClosed: boolean) => void;
}

export default function Nav({
  isHamburgerClosed,
  setIsHamburgerClosed,
}: NavProps) {
  return (
    <div
      className={`items-center absolute left-0 top-[50px] lg:static justify-between w-full lg:flex lg:w-auto lg:order-1 ${
        isHamburgerClosed && "hidden"
      }`}
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0  bg-gray-800 lg:bg-gray-900 border-gray-700">
        <NavLink
          setIsHamburgerClosed={setIsHamburgerClosed}
          href="/"
          title="Home"
        />
        <NavLink
          setIsHamburgerClosed={setIsHamburgerClosed}
          href="/wonderkids"
          title="Wonderkids"
        />
      </ul>
    </div>
  );
}
