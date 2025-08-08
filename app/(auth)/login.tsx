import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { login } = useAuth();

  const handleLogin = () => {
    console.log("login clicked");
    if (username === "Chamath" && password === "1234") {
      console.log("Login successful");
      login(true);
      router.replace("/")

    }else{
      console.log("Login failed");
      alert("Invalid username or password");
      login(false);
    }

  };

  return (
    <View className="items-center justify-center flex-1 px-6 bg-white">
      <View className="w-full max-w-md gap-5 p-6 bg-gray-100 rounded-lg shadow">
        <Text className="mb-6 text-2xl font-bold text-center text-gray-900">
          Sign in To Account
        </Text>
        <View style={{ height: 20 }} />

        <TextInput
          className="w-full h-12 px-4 mt-6 mb-4 text-base bg-white border border-gray-300 rounded-lg"
          placeholder="Username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <View style={{ height: 20 }} />

        <TextInput
          className="w-full h-12 px-4 mb-6 text-base bg-white border border-gray-300 rounded-lg"
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={{ height: 20 }} />

        <TouchableOpacity
          className="items-center justify-center w-full h-12 p-5 bg-blue-600 rounded-lg"
          onPress={handleLogin}
        >
          <Text className="text-lg font-semibold text-white h-7 p-lg-1">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
