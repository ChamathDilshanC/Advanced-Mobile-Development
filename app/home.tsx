import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Link
          className="items-center w-48 px-6 py-4 mb-4 bg-blue-600 rounded-lg shadow-lg"
          href={"/project"}
        >
          <Text className="text-lg font-semibold text-center text-white">
            Project
          </Text>
        </Link>

        <Link
          className="items-center w-48 px-6 py-4 mb-4 text-center bg-gray-100 border-2 border-gray-300 rounded-lg"
          href={"/user"}
        >
          <Text className="text-lg font-semibold text-gray-700">User</Text>
        </Link>

        <Link
          className="items-center w-48 px-6 py-4 mb-4 text-center bg-green-600 rounded-full shadow-md"
          href={"/login"}
        >
          <Text className="text-lg font-semibold text-white">Login</Text>
        </Link>

        <Link
          className="items-center w-48 px-6 py-4 mb-4 text-center bg-purple-600 border border-purple-400 shadow-lg rounded-xl"
          href={{
            pathname: "/(item)/[id]",
            params: {
              id: "1234",
              name: "Chamath",
              age: "21",
              address: "Colombo",
            },
          }}
        >
          <Text className="text-lg font-bold text-white">Selected Item</Text>
        </Link>

        <Text className="mt-4 text-4xl text-red-700">This is index</Text>
      </View>
      <Footer />
    </>
  );
};

export default Home;
