"use client";
import React, { useMemo, useRef, useState } from "react";
import ButtonOption from "../component/ButtonOption";
import FormData from "../component/form/FormData";
import KuponComponent from "../component/promo/KuponComponent";
import OrderComponent from "../component/promo/OrderComponent";
import { MyContext } from "@/utils/context/AppContext";
import { Button } from "@/components/ui/button";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";
import { dataProduct } from "@/lib/dataArea";

const dataOrder = {
  productOrder: [
    {
      images: "/google-drive.svg",
      title: "Google Drive",
      description:
        "File dikirim melalui link Google Drive, penyimpanan ditanggung pihak kami. 100% aman",
    },
    {
      images: "/flashdisk.svg",
      title: "Flashdisk",
      description: "dengan biaya tambahan untuk flashdisk dan pengirimannya",
    },
  ],
};

export default function Order() {
  const [uniqe] = useState(Math.floor(Math.random() * 1000));
  const { orderType, setOrderType, dataVoucher, promoName, disabled } =
    MyContext();
  const voucher = dataVoucher?.data.find(
    (item) => item?.promoCode === promoName
  );

  const totalPrice = useMemo(() => {
    return (
      (voucher ? dataProduct.price : dataProduct.priceDiscount) -
      dataProduct.price * (voucher?.percentDiscount || 0) +
      uniqe +
      dataProduct.service +
      (orderType === "Flashdisk" ? dataProduct.flashdisk : 0) +
      (orderType === "Flashdisk" ? dataProduct.pengiriman : 0)
    );
  }, [voucher, uniqe, orderType]);

  const formSubmitRef = useRef(null);
  const handleCheckout = () => {
    if (formSubmitRef.current) {
      formSubmitRef.current();
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-[1250px] mx-auto px-4 ">
        <h1 className="text-3xl font-bold pt-6">Checkout</h1>
        <div className="flex max-lg:flex-wrap max-lg:flex-col-reverse gap-4 mt-12">
          <div className="w-full space-y-4">
            <OrderComponent
              totalPrice={totalPrice}
              voucher={voucher}
              uniqe={uniqe}
              orderType={orderType}
            />
            <div className="space-y-4 px-8 py-6 rounded-sm bg-[#F2F3F8] ">
              <h3 className="text-2xl font-medium">Pesanan</h3>
              <p>Produk yang dipesan dikirim Melalui:</p>
              <div className="flex gap-4">
                {dataOrder.productOrder.map((item, index) => {
                  return (
                    <ButtonOption
                      handle={() => {
                        setOrderType(item.title);
                      }}
                      key={index}
                      images={item.images}
                      title={item.title}
                      description={item.description}
                      className={
                        orderType === item.title
                          ? ""
                          : "opacity-70 border-black/50"
                      }
                    />
                  );
                })}
              </div>
              <div className="h-[.5px] w-full bg-black"></div>
              <FormData
                orderType={orderType}
                onSubmitRef={formSubmitRef}
                totalPrice={totalPrice}
                voucher={voucher}
              />
              <Button
                className="w-full"
                disabled={disabled}
                onClick={handleCheckout}
              >
                <LuShoppingCart className="mr-2" />
                Checkout
              </Button>
              <p className="font-semibold">
                Note : Silahkan cek email kamu untuk konfirmasi dan Jika
                mengalami kendala saat checkout bisa di informasikan ke admin
                <Link href={"#"} className="underline ml-1">
                  disini
                </Link>
              </p>
            </div>
          </div>
          <section className="w-full h-screen basis-3/4  ">
            <KuponComponent />
          </section>
        </div>
      </section>
    </main>
  );
}
