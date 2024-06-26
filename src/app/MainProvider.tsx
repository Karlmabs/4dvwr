"use client";
import Store, { persistor } from "@/Redux/Store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default MainProvider;
