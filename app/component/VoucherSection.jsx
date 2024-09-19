"use client";
import React from "react";
import PromoSection from "./PromoSection";
import { MyContext } from "@/utils/context/AppContext";

const VoucherSection = () => {
  const { dataVoucher } = MyContext();

  return (
    <section className="mt-24 max-lg:px-4 max-w-[1250px]  mx-auto w-full">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl max-sm:text-xl font-bold tracking-tight  ">
          💸Yuk Dapatkan sekarang Akses Selamanya Dengan Promo Terbatas! 💸
        </h1>
        <p>Pastikan Anda Menggunakan Kode Kupon dibawah ini</p>
      </div>
      <div className="mt-8 space-y-4">
        {dataVoucher &&
          dataVoucher?.data?.map((item, index) => {
            return (
              <PromoSection
                key={index}
                sisa={item.qty}
                discount={item.promoCode}
                date={item.limitCoupon}
              />
            );
          })}
      </div>
    </section>
  );
};

export default VoucherSection;
