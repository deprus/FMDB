"use client";

import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import HamburgerButton from "./HamburgerButton";

export default function Header() {
  const [isHamburgerClosed, setIsHamburgerClosed] = useState(true);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 border-b border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Logo setIsHamburgerClosed={setIsHamburgerClosed} />
        <div className="flex lg:order-2">
          <HamburgerButton
            isHamburgerClosed={isHamburgerClosed}
            setIsHamburgerClosed={setIsHamburgerClosed}
          />
        </div>
        <Nav
          isHamburgerClosed={isHamburgerClosed}
          setIsHamburgerClosed={setIsHamburgerClosed}
        />
      </div>
    </header>
  );
}
