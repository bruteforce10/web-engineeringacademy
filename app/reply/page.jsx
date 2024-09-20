"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ReplyPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/account", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 0 },
        cache: "no-store",
      });
      const result = await response.json();
      const dataFilterAfterTwoDays = result?.data?.dataCostumers.filter(
        (item) => {
          const createdAt = new Date(item?.publishedAt);
          const currentDate = new Date();
          const tomorrow = new Date(currentDate);
          tomorrow.setDate(currentDate.getDate() + 2);

          if (createdAt < tomorrow) {
            return item;
          }
        }
      );
      setData(dataFilterAfterTwoDays);
    };

    fetchData();
  }, []);

  return (
    <main className="max-w-[1250px] mx-auto px-4 ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">CallBack</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead>Callout</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell>
                  {invoice?.callback ? (
                    <div className="text-green-500 bg-green-500/20 w-fit px-4 py-2 rounded-sm">
                      Yes
                    </div>
                  ) : (
                    <div className="text-red-500 bg-red-500/20 w-fit px-4 py-2 rounded-sm">
                      No
                    </div>
                  )}
                </TableCell>
                <TableCell>
                  {new Date(invoice?.publishedAt).toDateString()}
                </TableCell>
                <TableCell>{invoice?.email}</TableCell>
                <TableCell>{invoice?.orderType}</TableCell>
                <TableCell>
                  <Button
                    className="bg-green-600"
                    onClick={async () => {
                      const updateLinkResponse = await fetch("/api/account", {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          email: invoice?.email,
                          callback: true,
                        }),
                      });
                      const update = await updateLinkResponse.json();
                      console.log(update);
                      window.open(
                        `https://wa.me/${invoice?.nomorTelepon}?text=Halo%20${invoice?.namaLengkap}%2C%0A%0AEngineering%20Wakanda%20-%20Pemesanan%20mu%20kami%20terima%21%0A%0ATerima%20kasih%20sudah%20memesan%20produk%20kami%2C%20berikut%20rincian%20pembeliannya%3A%0A%0AID%2FEmail%20akunmu%20%3A%20${invoice?.email}%0AProduk%20yang%20dibeli%20%3A%20Database%20Teknik%20Sipil%20%26%20Arsitektur%0A%0ASilahkan%20lakukan%20transfer%20sesuai%20jumlah%20yang%20disertakan%2C%20melalui%20link%20ini%3A%0A%0A${invoice?.link}%0A%0AKamu%20bisa%20melakukan%20transfer%20melalui%20ATM%2FMbanking%2FiBanking%2FGopay%2FOVO%2FDANA%2FLink%20ke%20nomor%20rekening%20di%20atas.%0A%0ACatatan%3A%0A%0A-%20Lakukan%20transfer%20maksimal%201x24%20jam%20setelah%20menerima%20pesan%20ini.%0A-%20Pesanan%20akan%20terkonfirmasi%20maksimal%20hingga%204%20menit.%0A-%20Jika%20dalam%2030%20menit%20pesanan%20belum%20terkonfirmasi%2C%20silahkan%20mengirimkan%20bukti%20transfernya%20ke%20nomor%20WA%20ini.%0A-%20Apabila%20transaksi%20kadaluarsa%2C%20bisa%20transaksi%20ulang%20produknya.%0A%0ATerima%20kasih%2C%0A%0AEngineering%20Wakanda%20Team`
                      );
                    }}
                  >
                    <FaWhatsapp />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </main>
  );
}
