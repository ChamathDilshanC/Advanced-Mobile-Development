import { View, Text, Image } from "react-native";
import React from "react";

import { Link } from "expo-router";
import Footer from "./footer";

const Home
 = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          width: "100%",
          // backgroundColor: "#e74c3c",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link className="text-2xl" href={"/project"}>
          Project
        </Link>
        <Link className="text-2xl" href={"/user"}>
          User
        </Link>
        <Link className="text-2xl" href={"/login"}>
          Login
        </Link>
        <Link
          className="text-2xl"
          href={{
            pathname: "/(item)/[id]",
            params: {
              id: "1234",
              name : "Chamath",
              age : "21",
              address : "Colombo",
            },
          }}
        >
          Selected Item
        </Link>

        <Text className="text-4xl text-red-700">This is index</Text>
      </View>
      <Footer />
    </>
  );
};

export default Home;
