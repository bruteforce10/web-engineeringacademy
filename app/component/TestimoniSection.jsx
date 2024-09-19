"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AnimatePresence, useInView, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import StarComponent from "./StarComponent";

const testimonials = [
  {
    quote:
      "Bayar sekali, akses selamanya. Worth it banget buat mahasiswa yang butuh banyak referensi.",
    name: "Kusuma",
    title: "Mahasiswa Teknik Sipil",
    rating: 4,
  },
  {
    quote: "100% amanah & lengkap ",
    name: "PT. Adi Karya Konstruksi",
    title: "Kontraktor",
    rating: 4,
  },
  {
    quote:
      "Gambar 2D/3D-nya banyak dan selalu update. Sangat ngebantu kerjaan di lapangan.",
    name: "Galang",
    title: "Drafter",
    rating: 5,
  },
  {
    quote: "100% Done ✅",
    name: "Andi Firmansyah",
    title: "Project Manager",
    rating: 4,
  },
  {
    quote:
      "Dokumen proyek dan eBook lengkap banget, jadi gampang banget buat urusin kerjaan sehari-hari",
    name: "Syafira",
    title: "Mahasiswa",
    rating: 5,
  },
  {
    quote: "bonus banyak harga murah",
    name: "Putu Bagas Wijaya",
    title: "Konsultan",
    rating: 4,
  },
  {
    quote: "gilak banyak banget filenya 🔥",
    name: "Galang",
    title: "Engineer",
    rating: 3,
  },
  {
    quote:
      "SOP lengkap banget dan database yang terstruktur bikin kerjaan jadi mudah untuk diexplore",
    name: "Danu Prasetya",
    title: "Quantity Surveyor",
    rating: 4,
  },
  {
    quote: "ini database investasi banget buat saya di masa depan",
    name: "Agus",
    title: "Quality Control",
    rating: 5,
  },
];

const TestimoniSection = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const formattedValue = value.toLocaleString("id-ID");

  useEffect(() => {
    const timer = setInterval(() => {
      if (value < 120 && isInView) {
        setValue((prevValue) => prevValue + 1);
      }
    }, 1);

    return () => {
      clearInterval(timer);
    };
  }, [isInView, value]);

  return (
    <section ref={ref} className="mt-16 w-full overflow-hidden">
      <div className="text-center space-y-2">
        <p className="text-2xl font-medium tracking-tight">
          🙏 Terima kasih 🙏
        </p>
        <AnimatePresence>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }}
            className="text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black to-custom-primary"
          >
            {formattedValue}+
          </motion.h2>
        </AnimatePresence>
        <h3 className="text-2xl font-semibold tracking-tight ">
          Pembeli Database Teknik Sipil & Arsitektur
        </h3>
      </div>
      <InfiniteMovingCards
        className={"mt-8 mx-auto"}
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
};

export default TestimoniSection;
