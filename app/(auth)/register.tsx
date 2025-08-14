import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleRegister = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Registered:", form);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="justify-center flex-1 p-5 bg-gray-100">
      <Text className="mb-5 text-2xl font-bold">Register</Text>

      <TextInput
        className="p-3 mb-4 bg-white rounded-lg"
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />

      <TextInput
        className="p-3 mb-6 bg-white rounded-lg"
        placeholder="Password"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
      />

      <TouchableOpacity
        className={`bg-blue-500 p-4 rounded-lg items-center ${loading ? "opacity-70" : ""}`}
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-lg font-bold text-white">Register</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Register;
