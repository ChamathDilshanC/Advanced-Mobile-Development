import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

const Index = () => {
  const router = useRouter();
  const { user, loading } = useAuth();



  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace("/(dashboard)/dashboard");
        console.log("user", user);
      }else{
        router.replace("/(auth)/login");
      }
    }

  }, [user ,loading])

  if(loading) {
    return (
      <View className="items-center justify-center flex-1 bg-gray-100">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text className="mt-4 text-lg font-bold">Loading...</Text>
      </View>
    )
  }

  return (
    <View className="items-center justify-center flex-1 bg-gray-100">
      <Text className="text-lg font-bold">Hello There !!!</Text>

      <TouchableOpacity
        onPress={() => router.push("/")}
        className="p-4 mt-4 bg-blue-500 rounded-lg"
      >
        <Text className="text-white">Go To Index</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/(auth)/login")}
        className="p-4 mt-4 bg-green-500 rounded-lg"
      >
        <Text className="text-white">Go To Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
