import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import {loginUser} from "../../services/authService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <View className="items-center justify-center flex-1 px-6 bg-white">
      <View className="w-full max-w-md gap-5 p-6 bg-gray-100 rounded-lg shadow">
        <Text className="mb-6 text-2xl font-bold text-center text-gray-900">
          Sign in To Account In Task Manager
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

        <TouchableOpacity className="items-center justify-center w-full h-12 bg-blue-600 rounded-lg"
          onPress={() => {
            loginUser(username, password)
              .then(() => {
                Alert.alert("Login Successful", "Welcome back to Task Manager!");
                router.push("../(dashboard)/dashboard");
              })
              .catch((error) => {
                Alert.alert("Login Error", "Invalid username or password. Please try again.");
                console.error("Login error:", error);
              });
          }}
        >
          <Text className="text-lg font-semibold text-white">Login</Text>
        </TouchableOpacity>

        <Pressable className="mt-4">
          <Text className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Text
              className="text-blue-600"
              onPress={() => router.push("/(auth)/register")}
            >
              Register
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
