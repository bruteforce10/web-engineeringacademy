"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PromoSection from "../PromoSection";
import { MyContext } from "@/utils/context/AppContext";

const KuponComponent = () => {
  const { dataVoucher, setPromoName, promoName } = MyContext();
  const [showAllPromos, setShowAllPromos] = useState(false);
  const [inputCoupon, setInputCoupon] = useState("");
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (promoName) {
      setDisable(true);
      setInputCoupon(promoName);
      setError("");
    }
  }, [promoName]);

  const toggleShowPromos = () => {
    setShowAllPromos((prevShow) => !prevShow);
  };

  const handleCoupon = (e) => {
    e.preventDefault();
    setError("");

    if (inputCoupon === "") {
      setError("Kode promo harus diisi");
      return;
    }

    const upperCaseCoupon = inputCoupon.toUpperCase();
    const coupon = dataVoucher?.data?.find(
      (item) => item.promoCode === upperCaseCoupon
    );

    if (coupon) {
      setDisable(true);
      setPromoName(coupon.promoCode);
    } else {
      setError("Kode promo tidak ditemukan");
    }
  };

  const handleReset = () => {
    setDisable(false);
    setPromoName("");
    setInputCoupon("");
    setError("");
  };

  return (
    <div className="bg-[#F2F3F8] rounded-sm px-8 py-6 space-y-4">
      <h3 className="text-2xl font-medium">Dapatkan Potongan</h3>

      <div className="space-y-2">
        <p>Masukkan kode promo menarik</p>
        <form onSubmit={handleCoupon} className="flex gap-2">
          <Input
            placeholder="Masukan kode promo"
            value={inputCoupon}
            disabled={disable}
            onChange={(e) => {
              setInputCoupon(e.target.value);
              setError("");
            }}
          />
          {disable ? (
            <Button variant="destructive" onClick={handleReset}>
              Reset
            </Button>
          ) : (
            <Button type="submit">Apply</Button>
          )}
        </form>
        <p className="text-red-500 font-medium">{error}</p>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-medium">Rekomendasi Promo 🔥</h4>
        {dataVoucher?.data?.map((item, index) => {
          if (showAllPromos || index === 0) {
            return (
              <PromoSection
                key={index}
                sisa={item.qty}
                discount={item.promoCode}
                date={item.limitCoupon}
              />
            );
          }
        })}

        <Button
          variant="link"
          className="text-center mx-auto opacity-70 block"
          onClick={toggleShowPromos}
        >
          {showAllPromos ? "Lihat Lebih Sedikit" : "Lihat Semua"}
        </Button>
      </div>

      <p className="text-sm text-red-500">
        *Apabila tersedia gunakan kode promo untuk menghemat transaksi Anda.
      </p>
    </div>
  );
};

export default KuponComponent;
