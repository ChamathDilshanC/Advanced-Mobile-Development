import { View, Text,  Pressable } from "react-native"
import React from "react"
import { Slot, useSegments } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { AuthProvider } from "@/context/AuthContext"
import "./../global.css";

const Layout = () => {
    const segments = useSegments()
    const activeRoute = segments[0] || "home"
    console.log("Active Route:", activeRoute)

    const arr = ["/login","/signup"].includes(activeRoute)


  return (
    <AuthProvider>
      <SafeAreaView className="flex-1">
        <Slot />
        {/* Outlet */}
        <></>
      </SafeAreaView>
    </AuthProvider>
  );
}

export default Layout
