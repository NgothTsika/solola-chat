"use client";

import { Button } from "@/app/components/ui/button";
import { ChevronRight } from "lucide-react";

const Heading = () => {
  return (
    <div className=" max-w-3xl space-y-2 h-full">
      <h1 className=" text-3xl sm:text-5xl md:text-4xl font-bold">
        Your Idias, Documents, & Plans. Unified. Welcome to
        <span className="underline">SmatNot</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium ">
        SmartNot is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      <Button>
        Enter SmartNot
        <ChevronRight className=" h-4 w-4 ml-2 " />
      </Button>
    </div>
  );
};

export default Heading;
