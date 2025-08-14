import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Index = () => {
  const router = useRouter();

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
