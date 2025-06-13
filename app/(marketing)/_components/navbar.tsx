"use client";

import { ModeToggle } from "@/app/components/mode-toggle";
import { useScrollTop } from "@/app/hooks/use-scroll-top";
import { cn } from "@/app/libs/utils";
import NextAuth from "next-auth";

const Navbar = () => {
  const scroll = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scroll && "border-b shadow-sm"
      )}
    >
      <div className=" flex w-full items-center justify-between">
        <h1>LOGO</h1>
        <div className=" flex items-center gap-x-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
