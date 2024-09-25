import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import { AppContextProvider } from "@/utils/context/AppContext";
import Footer from "./component/Footer";
import CallToAction from "./component/CallToAction";
import Script from "next/script";
import * as fbq from "../lib/fpixel";
import PixelFacebook from "./component/PixelFacebook";

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
    <PixelFacebook>
      <html lang="en">
        <head>
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
            `,
            }}
          />
        </head>
        <AppContextProvider>
          <body className={inter.variable + "bg-[#F6F8FD] "}>
            <Navbar />
            {children}
            <Footer />
            <div className="fixed bottom-0 z-[1] right-0">
              <CallToAction />
            </div>
          </body>
        </AppContextProvider>
      </html>
    </PixelFacebook>
  );
}
