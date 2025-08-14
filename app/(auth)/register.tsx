import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import { registerUser } from "../../services/authService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    try {
      setLoader(true); // Show loader
      await registerUser(email, password);
      router.back();
      Alert.alert(
        "Registration Successful",
        "You can now log in with your new account."
      );
    } catch (error) {
      Alert.alert(
        "Registration Error",
        "Something went wrong. Please try again."
      );
      console.error("Registration error:", error);
    } finally {
      setLoader(false); // Hide loader
    }
  };

  return (
    <View className="items-center justify-center flex-1 px-6 bg-white">
      <View className="w-full max-w-md gap-5 p-6 bg-gray-100 rounded-lg shadow">
        <Text className="mb-6 text-2xl font-bold text-center text-gray-900">
          Create Account in Task Manager
        </Text>

        <TextInput
          className="w-full h-12 px-4 mt-6 mb-4 bg-white border border-gray-300 rounded-lg"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="w-full h-12 px-4 mb-6 bg-white border border-gray-300 rounded-lg"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          className={`flex-row gap-2 items-center justify-center w-full h-12 rounded-lg bg-blue-600 ${
            loader ? "opacity-70" : ""
          }`}
          onPress={handleRegister}
          disabled={loader}
        >
          {loader && <ActivityIndicator color="#fff" />}
          <Text className="text-lg font-semibold text-white">Register</Text>
        </TouchableOpacity>

        <Pressable className="mt-4">
          <Text className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Text
              className="text-blue-600"
              onPress={() => router.push("/(auth)/login")}
            >
              Login
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
