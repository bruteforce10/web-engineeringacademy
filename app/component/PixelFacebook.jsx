"use client";
import React, { useEffect } from "react";
import * as fbq from "@/lib/fpixel";
import Script from "next/script";

const PixelFacebook = ({ children }) => {
  useEffect(() => {
    if (!window.fbq) {
      window.fbq = (...args) =>
        window.fbq.callMethod
          ? window.fbq.callMethod(...args)
          : window.fbq.queue.push(...args);
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = "2.0";
      window.fbq.queue = [];
    }

    window.fbq("init", fbq.FB_PIXEL_ID);
    window.fbq("track", "PageView");
  }, []);
  return (
    <>
      <Script
        id="facebook-pixel"
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
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
      {children}
    </>
  );
};

export default PixelFacebook;
