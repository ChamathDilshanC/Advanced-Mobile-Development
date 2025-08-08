import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const index = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Text>index</Text>
      <Link className="text-2xl" href={"/test/hello"}>
        Go to Project
      </Link>
    </View>
  );
};

export default index;
