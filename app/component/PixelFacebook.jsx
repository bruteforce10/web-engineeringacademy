"use client";
import React, { useEffect } from "react";
import * as fbq from "@/lib/fpixel";

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
  return <>{children}</>;
};

export default PixelFacebook;
