import { MyContext } from "@/utils/context/AppContext";
import clsx from "clsx";
import React from "react";

const PromoSection = ({ sisa, discount, date }) => {
  const { setPromoName, promoName } = MyContext();

  return (
    new Date(date) > new Date() && (
      <div
        className={clsx(
          "flex max-md:flex-col gap-8 max-w-[900px] justify-between mx-auto text-yellow-700 bg-[#F9D74E]/40 border-yellow-500 border-dashed border-2 rounded-md px-4 py-2",
          sisa <= 0 ||
            (promoName === discount && "opacity-50 cursor-not-allowed")
        )}
      >
        <div className="space-y-1">
          <div className="text-sm font-medium">{sisa} kupon</div>
          <h4 className="text-xl  font-semibold ">{discount}</h4>
          <p className="text-light text-black/40">
            {"Tersedia hingga {n}" + " " + date}
          </p>
        </div>
        {sisa > 0 && promoName !== discount && (
          <button
            className=" font-semibold text-lg uppercase max-md:bg-yellow-500/50 max-md:mb-2 max-md:rounded-sm"
            onClick={() => {
              setPromoName(discount);
            }}
          >
            Selected
          </button>
        )}
      </div>
    )
  );
};

export default PromoSection;
