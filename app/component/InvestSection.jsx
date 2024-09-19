import Image from "next/image";
import React from "react";

const InvestSection = ({ data }) => {
  return (
    <section className="lg:mt-24 mt-8 max-w-[1250px] flex max-lg:flex-col gap-8 max-xl:px-8 items-center">
      <Image
        src="/benjamin.webp"
        className="object-contain h-[400px]  w-auto "
        alt="logo"
        width={600}
        height={600}
      />
      <div>
        <div className="mb-3">
          {data.hashtag.map((item, index) => {
            return (
              <span
                className="p-2 first:block mr-4 my-2 first:w-fit first:border-yellow-700 border-blue-900 border rounded-sm font-semibold tracking-tight inline-block bg-[#B3C3FF]
                first:bg-[#E8D58A]"
                key={index}
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className="space-y-4">
          <h2 className="p-2 text-2xl font-medium border border-yellow-600 rounded-sm">
            {data.title}
          </h2>
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default InvestSection;
