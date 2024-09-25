import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInputData from "./FormInputData";
import { OptionCity } from "./OptionCity";
import { provinces } from "@/lib/dataArea";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MyContext } from "@/utils/context/AppContext";
import * as fbq from "@/lib/fpixel";

const formSchema = z.object({
  "nama-lengkap": z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  provinsi: z.string().nonempty({ message: "Provinsi harus diisi." }),
  "kota-kabupaten": z
    .string()
    .nonempty({ message: "Kota / Kabupaten harus diisi." }),
  "nomor-telpon": z.string().min(8, { message: "Nomor telpon harus diisi." }),
  alamat: z.string().min(8, { message: "Alamat harus diisi." }),
  "kode-pos": z.string().min(5, { message: "Kode pos harus diisi." }),
  coupon: z.string(),
});

const FormData = ({ orderType, onSubmitRef, totalPrice, voucher }) => {
  const { setDisabled } = MyContext();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "nama-lengkap": "",
      email: "",
      provinsi: "",
      "kota-kabupaten": "",
      "nomor-telpon": "62",
      alamat: "",
      "kode-pos": "",
      coupon: "",
    },
  });

  async function onSubmit(values) {
    setDisabled(true);
    fbq.event("Purchase", { currency: "IDR", value: totalPrice });

    if (voucher) {
      await fetch("/api/update-coupon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          promoCode: voucher?.promoCode,
          qty: voucher?.qty - 1,
        }),
      });
    }

    const getUser = await fetch(`/api/search-account?email=${values.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataUser = await getUser.json();

    const isCustomerNew = dataUser?.data?.dataCostumers?.length <= 0;

    const handlePayment = async (values, totalPrice, orderType) => {
      const paymentResponse = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, totalPrice, orderType }),
      });
      return paymentResponse.json();
    };

    const updateCouponLink = async (
      values,
      totalPrice,
      orderType,
      redirectLink
    ) => {
      const updateLinkResponse = await fetch("/api/get-coupon", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          totalPrice,
          callback: false,
          orderType,
          link: redirectLink,
        }),
      });
      return updateLinkResponse.json();
    };

    const handleNewCustomerFlow = async () => {
      // Create coupon
      const couponResponse = await fetch("/api/get-coupon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, totalPrice, orderType }),
      });
      const couponData = await couponResponse.json();

      if (couponData) {
        const paymentData = await handlePayment(values, totalPrice, orderType);
        if (paymentData) {
          console.log(paymentData);
          const updateLinkData = await updateCouponLink(
            values,
            totalPrice,
            orderType,
            paymentData?.redirect
          );
          if (updateLinkData) {
            console.log(updateLinkData);
            setDisabled(false);
            router.replace(paymentData?.redirect);
          }
        }
      }
    };

    if (isCustomerNew) {
      await handleNewCustomerFlow();
    } else {
      const paymentData = await handlePayment(values, totalPrice, orderType);
      console.log(paymentData);
      if (paymentData) {
        const updateLinkData = await updateCouponLink(
          values,
          totalPrice,
          orderType,
          paymentData?.redirect
        );
        if (updateLinkData) {
          console.log(updateLinkData);
          setDisabled(false);
          router.replace(paymentData?.redirect);
        }
      }
    }
  }

  React.useEffect(() => {
    if (orderType === "Google Drive") {
      form.setValue("provinsi", "tidak ada data");
      form.setValue("kota-kabupaten", "tidak ada data");
      form.setValue("alamat", "tidak ada data");
      form.setValue("kode-pos", "tidak ada data");
      form.setValue("provinsi", "tidak ada data");
    } else {
      form.setValue("provinsi", "");
      form.setValue("kota-kabupaten", "");
      form.setValue("alamat", "");
      form.setValue("kode-pos", "");
      form.setValue("provinsi", "");
      form.setValue("coupon", voucher);
    }
    onSubmitRef.current = form.handleSubmit(onSubmit);
  }, [form, onSubmitRef, orderType, voucher]);

  return (
    <Form {...form}>
      <h3 className="text-2xl font-medium">Informasi Pribadi</h3>
      <p>Isi data dibawah ini untuk informasi terkait pembelian</p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormInputData
          control={form.control}
          name={"nama-lengkap"}
          label="Nama Lengkap"
          placeholder={"Masukan nama lengkap anda"}
          description={
            "Harap masukkan nama lengkap anda demi kemudahaan agar jika suatu saat diperlukan pencarian data"
          }
        />
        <FormInputData
          control={form.control}
          name={"email"}
          label="Alamat Email"
          placeholder={"Masukan email anda"}
          description={
            "Kami akan mengirimkan konfirmasi pembayaran ke alamat ini"
          }
        />
        <FormInputData
          control={form.control}
          name={"nomor-telpon"}
          label="Nomor Handphone"
          placeholder={
            "Masukan nomor handphone yang terhubung dengan  Whatsapp"
          }
          description={
            "Kami akan menggunakan no handphone untuk keperluan administrasi"
          }
        />

        {orderType === "Flashdisk" && (
          <>
            <FormInputData
              control={form.control}
              name={"alamat"}
              label="Alamat"
              placeholder={"Masukan Alamat Administrasi Anda "}
              description={
                "Data Administratif (Contoh: RT/RW, No. Rumah / Blok, Nama Jalan) dan spesifik alamat (Contoh: Rumah Cat Hijau)"
              }
            />
            <OptionCity
              form={form}
              name={"provinsi"}
              lists={provinces}
              label="Provinsi"
              placeholder={"Masukan Provinsi"}
            />
            <FormInputData
              control={form.control}
              name={"kode-pos"}
              label="Kode POS"
              placeholder={"Kode POS sesuai alamat anda"}
            />
          </>
        )}
      </form>
      <Image src="/safe-label.webp" alt="form" width={450} height={450} />
    </Form>
  );
};

export default FormData;
