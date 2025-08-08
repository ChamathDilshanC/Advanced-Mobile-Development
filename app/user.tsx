import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Footer from "./footer"

const User = () => {
  useEffect(() => {
    console.log("User screen loaded");
  })
  return (
    <>
    <View className='items-center justify-center flex-1 w-full'>
      <Text className='text-4xl'>user screen</Text>
    </View>
      <Footer />
    </>
  )
}

export default User
