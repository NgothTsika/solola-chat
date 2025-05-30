"use client";

import { ModeToggle } from "@/app/components/mode-toggle";
import { useScrollTop } from "@/app/hooks/use-scroll-top";
import { cn } from "@/app/libs/utils";

const Navbar = () => {
  const scroll = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scroll && "border-b shadow-sm"
      )}
    >
      <h1>LOGO</h1>
      <div className=" flex items-center gap-x-2 w-full justify-between md:justify-end md:*:ml-auto ">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
