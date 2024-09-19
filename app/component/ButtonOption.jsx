"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const ButtonOption = ({ className, images, title, description, handle }) => {
  return (
    <button
      onClick={handle}
      className={cn(
        "flex max-md:flex-col p-2 gap-4 text-start bg-white rounded-md border-2 cursor-pointer border-[#BD9905]",
        className
      )}
    >
      <Image src={images} alt="logo" width={80} height={80} />
      <div>
        <h4 className="font-bold">{title}</h4>
        <div className="text-xs max-w-[200px] opacity-80">{description}</div>
      </div>
    </button>
  );
};

export default ButtonOption;
