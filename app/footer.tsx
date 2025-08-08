import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter, useSegments } from "expo-router";

const tabs = [
  { label: "Home", path: "/" },
  { label: "Project", path: "/project" },
  { label: "User", path: "/user" },
  { label: "Login", path: "/login" },
] as const; // Define the type of tabs
const Footer = () => {  // ✅ Capitalized
  const router = useRouter();
  const segment = useSegments();
  const activeRoute = "/" + segment[0] || "";

  return (
    <View
      className="flex-row items-center justify-between px-6 py-4 bg-gray-900 border-t border-gray-800 shadow-lg"
    >
      {tabs.map((data) => (
      <Pressable
        key={data.path}
        className={`flex-1 mx-2 py-2 rounded-xl ${data.path === activeRoute ? "bg-blue-600 shadow-md" : "bg-gray-800"}`}
        onPress={() => {
        router.push(data.path);
        }}
      >
        <Text
        className={`text-center text-base font-semibold ${data.path === activeRoute ? "text-white" : "text-gray-300"}`}
        >
        {data.label}
        </Text>
      </Pressable>
      ))}
    </View>
  );
};

export default Footer;
