"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";

const AppContext = createContext();
const MyContext = () => useContext(AppContext);
const fetcher = (url) => fetch(url).then((res) => res.json());

const AppContextProvider = (props) => {
  const { data: dataVoucher } = useSWR("/api/get-coupon", fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

  const [promoName, setPromoName] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [orderType, setOrderType] = React.useState("Google Drive");

  return (
    <AppContext.Provider
      value={{
        dataVoucher,
        promoName,
        setPromoName,
        orderType,
        setOrderType,
        disabled,
        setDisabled,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext, MyContext };
