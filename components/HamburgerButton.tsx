import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

interface NavButtonProps {
  isHamburgerClosed: boolean;
  setIsHamburgerClosed: (isHamburgerClosed: boolean) => void;
}

export default function HamburgerButton({
  isHamburgerClosed,
  setIsHamburgerClosed,
}: NavButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="bg-transparent border-none rounded-lg lg:hidden hover:bg-gray-600 focus:outline-none focus:ring-2  focus:ring-gray-600"
      onClick={() => setIsHamburgerClosed(!isHamburgerClosed)}
    >
      <Menu className="h-7 w-7 text-gray-400" />
    </Button>
  );
}
