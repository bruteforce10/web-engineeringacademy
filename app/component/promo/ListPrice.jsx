"use client";
import formatRupiah from "@/lib/formatRupiah";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const ListPrice = ({ title, price, classNameTitle, classNamePrice }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex justify-between p-1">
      <h3 className={cn("max-md:w-[150px]", classNameTitle)}>{title}</h3>
      <p className={cn("text-md font-medium", classNamePrice)}>
        {isClient && formatRupiah(price)}
      </p>
    </div>
  );
};

export default ListPrice;
