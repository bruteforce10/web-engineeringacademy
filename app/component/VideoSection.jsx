import Image from "next/image";
import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full relative">
      <section
        className="mt-24 py-8  bg-gradient-to-b from-yellow-100 to-[#E5D285] border-yellow-600 p-4 
      w-full text-center"
      >
        <div className="space-y-4">
          <h1 className="md:text-3xl text-xl  font-bold tracking-tight">
            <span className="max-sm:hidden">👇</span>Tinjau Semua modul Database
            Teknik Sipil & Arsitektur !<span className="max-sm:hidden">👇</span>
          </h1>
          <p>
            Kumpulan File Database dibidang Teknik Sipil, Arsitektur & Proyek
            Kontruksi, Dengan Ukuran File Lebih Dari 200GB.
          </p>
        </div>
        <div className="w-full flex justify-center my-12 flex-wrap gap-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6AaUXEkBBjs?si=VMStTeWoKsQIy2eU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-q0VbcYHVZs?si=6IZvRKtioZxJaIN-"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <Image
        src={"/lancip-2.svg"}
        alt="logo"
        width={200}
        height={200}
        className="absolute mx-auto -mt-1 inset-x-0"
      />
    </div>
  );
};

export default VideoSection;
