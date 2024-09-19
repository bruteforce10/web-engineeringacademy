import Image from "next/image";
import React from "react";

const BonusSection = ({ data }) => {
  return (
    <section className=" bg-black w-full max-lg:px-8 text-white pb-24">
      <Image
        src={"/wait.webp"}
        alt="logo"
        className="mx-auto"
        width={600}
        height={600}
      />
      <div className="mt-8 max-w-[1250px] mx-auto  space-y-12">
        <p className="text-center leading-relaxed max-w-[800px] mx-auto">
          {data}
        </p>
        <div className="flex max-lg:flex-col gap-6 items-center justify-center">
          {Array.from(Array(3).keys()).map((item, index) => {
            return (
              <Image
                src={`/bonus/${index + 1}.webp`}
                alt="logo"
                width={300}
                height={300}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
