"use client";
import { dataProduct } from "@/lib/dataArea";
import formatRupiah from "@/lib/formatRupiah";
import { MyContext } from "@/utils/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSquareCheck } from "react-icons/fa6";

const BuySection = () => {
  const { promoName, dataVoucher } = MyContext();

  const voucher = dataVoucher?.data.find(
    (item) => item?.promoCode === promoName
  );

  const data = {
    list: [
      "Semua akses file",
      "Akses file 106GB ++",
      "File download Aman",
      "Hanya sekali bayar",
      "Update Modul",
      "Support Admin",
      "Bonus All in One SOP Kontraktor",
      "Bisa lewat flashdisk (ada tambahan harga)",
    ],
  };

  return (
    <section className="mt-24  w-full" id="buy">
      <div className="px-4 py-6 mx-auto w-fit space-y-4   bg-gradient-to-b from-white to-yellow-50 border-yellow-600 rounded-xl border-2">
        <div className="space-y-4 flex-col flex  items-center">
          <Image
            src={"/box-database.webp"}
            alt="logo"
            width={200}
            height={200}
          />
          <div className="w-[200px] ">
            <p className="text-lg">Selamanya</p>
            <h4 className="font-bold animate-pulse text-red-500 text-xl line-through">
              {formatRupiah(dataProduct.price)}
            </h4>
          </div>
          <div className="w-[200px]">
            <h4 className="font-semibold text-xl">PROMO EKSKLUSIF</h4>
            <p className="font-bold  text-2xl">
              {formatRupiah(dataProduct.priceDiscount)}
            </p>
          </div>
        </div>
        <ul className="px-4">
          {data.list.map((item, index) => {
            return (
              <li key={index} className="flex items-center gap-2">
                <FaSquareCheck className="text-green-600" />
                {item}
              </li>
            );
          })}
        </ul>
        <Image
          className="mx-auto"
          src={"/safe.webp"}
          alt="logo"
          width={300}
          height={300}
        />

        <Link
          href="/order"
          className="w-full bg-black hover:bg-black/70 text-white block text-center p-2 rounded-lg"
        >
          BELI SEKARANG
        </Link>
      </div>
    </section>
  );
};

export default BuySection;
