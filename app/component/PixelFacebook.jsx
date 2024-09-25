"use client";
import React, { useEffect } from "react";
import * as fbq from "@/lib/fpixel";

const PixelFacebook = ({ children }) => {
  useEffect(() => {
    fbq.pageview(window.location.pathname);

    const handleRouteChange = () => {
      fbq.pageview(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return <>{children}</>;
};

export default PixelFacebook;
