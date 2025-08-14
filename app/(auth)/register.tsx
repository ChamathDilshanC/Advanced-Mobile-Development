import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <View className="items-center justify-center flex-1 px-6 bg-white">
      <View className="w-full max-w-md gap-5 p-6 bg-gray-100 rounded-lg shadow">
        <Text className="mb-6 text-2xl font-bold text-center text-gray-900">
          Sign Up To Log Your Account In Task Manager
        </Text>

        <TextInput
          className="w-full h-12 px-4 mt-6 mb-4 bg-white border border-gray-300 rounded-lg"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          className="w-full h-12 px-4 mb-6 bg-white border border-gray-300 rounded-lg"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity className="items-center justify-center w-full h-12 bg-blue-600 rounded-lg">
          <Text className="text-lg font-semibold text-white">SignUp</Text>
        </TouchableOpacity>

        <Text className="mt-4 text-sm text-center text-gray-600">
          Have an account?{" "}
          <Text
            className="text-blue-600"
            onPress={() => router.push("/(auth)/login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;
