"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1250) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="h-screen max-sm:h-[470px] w-full flex-col pt-16 items-center flex max-sm:px-4"
      style={{
        backgroundImage: isMobile
          ? "url('/bg-header-mobile.png')"
          : "url('/bg-header.webp')",
        backgroundSize: isMobile ? "125% " : "100%",
        backgroundPositionX: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
      }}
    >
      <Image
        src={"/box-database.webp"}
        className="max-w-[300px] max-md:max-w-[200px] max-sm:w-[140px]"
        alt="logo"
        width={260}
        height={260}
      />
      <div className="space-y-2 text-center mt-6">
        <h3 className="text-3xl text-white max-sm:font-medium  max-sm:text-md shadow-sm font-bold max-md:text-xl text-center">
          Kunci Sukses Kamu di Dunia
        </h3>
        <h1 className="text-4xl bg-custom-primary px-4 max-sm:mx-auto w-fit py-1 max-sm:text-lg max-sm:font-medium  font-bold text-center">
          Teknik Sipil & Arsitektur Ada di Sini
        </h1>
        <div className="text-xl flex max-sm:flex-col max-sm:text-white gap-1 justify-center max-sm:text-lg ">
          <p>Ribuan file Teknik Sipil & Arsitektur siap </p>
          <div className="font-bold">
            <Typewriter
              options={{
                strings: ["DOWNLOAD", "EDIT"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
