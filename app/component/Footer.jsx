import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="bg-white max-lg:px-4 flex max-md:flex-col gap-8 max-w-[1250px] mx-auto mt-24 w-full justify-between pb-8">
        <div className="space-y-2">
          <h4 className="font-bold text-xl">Contact Us</h4>
          <Link href={"#"} className="flex gap-2 items-center hover:underline">
            <FiInstagram className="text-xl" />
            <div>@engineerwakanda</div>
          </Link>
          <Link href={"#"} className="flex gap-2 items-center hover:underline">
            <IoLogoWhatsapp className="text-xl" />
            <div>+62 8521 4068 536</div>
          </Link>
        </div>
        <Image
          src={"/method-payment.webp"}
          alt="logo"
          width={420}
          height={420}
        />
      </footer>
      <p className="pb-2 opacity-50 text-center">© 2024 Wakanda Engineering</p>
    </>
  );
};

export default Footer;
