import Image from "next/image";
import React from "react";
import ListPrice from "./ListPrice";

import { FaCheckCircle } from "react-icons/fa";
import { dataProduct } from "@/lib/dataArea";

const OrderComponent = ({ totalPrice, voucher, uniqe, orderType }) => {
  return (
    <div className="bg-[#F2F3F8] rounded-sm px-8 py-6 space-y-4">
      <h3 className="text-2xl font-medium text-center">Detail Pesanan</h3>
      <Image
        src={"/box-database.webp"}
        className="max-w-[300px] max-md:max-w-[200px] max-sm:w-[140px]"
        alt="logo"
        width={120}
        height={120}
      />
      <div className="space-y-1 divide-y-2">
        <ListPrice
          title={dataProduct.product}
          classNameTitle={"font-medium"}
          classNamePrice={"text-red-600 line-through"}
          price={dataProduct.price}
        />
        <ListPrice
          title={"Diskon Ekslusif"}
          classNameTitle={voucher ? "font-medium line-through" : "font-medium"}
          classNamePrice={voucher && "text-red-600 line-through"}
          price={dataProduct.priceDiscount}
        />
        {voucher && (
          <ListPrice
            title={"Diskon" + " " + voucher?.nameDiscount}
            classNameTitle={"font-semibold"}
            price={
              dataProduct.price - dataProduct.price * voucher?.percentDiscount
            }
          />
        )}
        <ListPrice
          title={"Kode Unik"}
          price={uniqe}
          classNamePrice="text-green-600 before:content-['+']"
        />
        <ListPrice
          title={"Service fee per student"}
          price={dataProduct.service}
          classNamePrice="text-green-600 before:content-['+']"
        />
        {orderType === "Flashdisk" && (
          <>
            <ListPrice
              title={"Biaya Flashdisk"}
              price={dataProduct.flashdisk}
              classNamePrice="text-green-600 before:content-['+'] font-semibold"
            />
            <ListPrice
              title={"Ekspedisi Pengiriman (JNE Reguler)"}
              price={dataProduct.pengiriman}
              classNamePrice="text-green-600 before:content-['+'] font-semibold"
            />
          </>
        )}
        <ListPrice
          title={"Total transfer"}
          price={totalPrice}
          classNameTitle={"font-semibold"}
          classNamePrice="font-semibold"
        />
      </div>
      <div className="flex md:gap-8 gap-3 items-center">
        <div className="flex items-center max-md:gap-[1px] gap-2">
          <FaCheckCircle className="text-green-600" />
          <span className="text-green-600 max-md:text-sm">Secure 100%</span>
        </div>
        <div className="flex items-center max-md:gap-[1px] gap-2">
          <FaCheckCircle className="text-green-600" />
          <span className="text-green-600 max-md:text-sm">
            Garansi Uang Kembali
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
