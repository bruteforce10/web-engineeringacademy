import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import { AppContextProvider } from "@/utils/context/AppContext";
import Footer from "./component/Footer";
import CallToAction from "./component/CallToAction";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Engineering Wakanda - Database Lengkap Teknik Sipil & Arsitektur",
  description:
    "Dapatkan akses seumur hidup ke lebih dari 106GB file teknik sipil & arsitektur. Mulai dari gambar 2D/3D, tutorial software, ebook, modul, hingga format Excel teknik sipil. Engineering Wakanda menyediakan semua yang Anda butuhkan untuk proyek, pembelajaran, dan referensi teknik sipil. Bonus lengkap termasuk SOP kontraktor dan software pendukung. Investasi terbaik untuk pengetahuan masa depan Anda!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className={inter.variable + "bg-[#F6F8FD] "}>
          <Navbar />
          {children}
          <Footer />
          <div className="fixed bottom-0 z-[99] w-full">
            <CallToAction />
          </div>
        </body>
      </AppContextProvider>
    </html>
  );
}
