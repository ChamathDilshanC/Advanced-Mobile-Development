import { Redirect, useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const index = () => {
  const { isUser } = useAuth(); // or: const isUser = useAuth(); if useAuth returns a single value
  const router = useRouter();
  console.log("isUser", isUser);
/*   useEffect(() => {
    if (!isUser) {
      console.log({ isUser });
      router.replace("/login");
    }else{
      router.replace("/home");
    }
  }, [isUser]); */

return(
  <Redirect href={isUser ? "/home" : "/login"} />
)
};


export default index;
