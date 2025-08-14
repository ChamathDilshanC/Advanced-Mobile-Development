import React from 'react';
import "./../global.css";
import { Slot, Stack } from "expo-router";
import { AuthProvider } from "@/context/AuthContext";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
};

export default RootLayout;
