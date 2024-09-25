"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const CallToAction = () => {
  const noWhatsapp = "85214068536";

  return (
    <React.Fragment>
      <div
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?phone=%2062${noWhatsapp}&text=Hai,%20saya%20ingin%20bantuan%20mengenai%20produk%20database%20ini?`
          )
        }
        className="bg-[#289b52]  p-3 rounded-full w-fit max-sm:mr-10 mr-16 mb-12 max-sm:mb-10 ml-auto relative cursor-pointer"
      >
        <div className=" bg-red-700 animate-bounce text-center mx-auto absolute rounded-full h-5 w-5 top-0 -left-1">
          <p className="text-white text-sm">1</p>
        </div>
        <FaWhatsapp className="text-white text-3xl " />
        <div className="bg-[#289b52] animate-ping z-[-1] p-5 top-[7px] left-[7.2px] rounded-full absolute "></div>
      </div>
    </React.Fragment>
  );
};

export default CallToAction;
