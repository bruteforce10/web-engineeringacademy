import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeatureSection = ({ data }) => {
  return (
    <section className="sm:-mt-36 md:-mt-16 max-w-[900px] space-y-4 ">
      <ul className="sm:grid  sm:grid-cols-2 items-center border-dashed  justify-center gap-4 mx-auto bg-[#F6F8FD] p-2 rounded-sm border-gray-400  border-2">
        {data.listFeatures.list.map((item, index) => {
          return (
            <li
              className="flex last:col-span-2 p-4 gap-2 items-center text-xl font-medium"
              key={index}
            >
              <Image
                src={"/checklist.svg"}
                alt="check"
                width={20}
                height={20}
              />
              {item}
            </li>
          );
        })}
      </ul>
      <p className="max-sm:px-4">{data.listFeatures.description}</p>

      <div className="text-center">
        <Link
          href={"#buy"}
          className="inline-flex h-12 text-xl  animate-shimmer items-center justify-center rounded-md border border-yellow-600 bg-[linear-gradient(110deg,#DAAE00,45%,#ffd426,55%,#DAAE00)] bg-[length:200%_100%] px-6 font-bold tracking-tight text-black transition-colors focus:outline-none "
        >
          MILIKI SEKARANG
        </Link>
      </div>
    </section>
  );
};

export default FeatureSection;
